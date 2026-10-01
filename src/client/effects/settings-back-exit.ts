import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'

/**
 * Android system back gesture (popstate) integration for the settings modal.
 *
 * When the settings sheet mounts (either by tapping the drawer trigger or via
 * shortcuts), this effect pushes one poppable history entry without altering
 * the URL. When the user performs Android's system-level edge swipe-back gesture
 * or presses the back button, the browser emits popstate; we catch it, close
 * the settings sheet via its native close button or Escape key, and keep the user
 * on the conversation page instead of exiting the web app.
 */
export function installSettingsBackExit(ctx: ClientContext): void {
  ctx.effect(() => {
    let armed = false
    let selfBackPending = false
    let selfBackTimer: number | null = null

    const clearSelfBack = (): void => {
      selfBackPending = false
      if (selfBackTimer !== null) {
        window.clearTimeout(selfBackTimer)
        selfBackTimer = null
      }
    }

    const selfBack = (): void => {
      selfBackPending = true
      if (selfBackTimer !== null) window.clearTimeout(selfBackTimer)
      selfBackTimer = window.setTimeout(clearSelfBack, 1000)
      try {
        history.back()
      } catch {
        clearSelfBack()
      }
    }

    const findSettingsModal = (): HTMLElement | null =>
      document.querySelector<HTMLElement>(
        '[data-shortcut-modal="settings"], [role="dialog"]:has([class*="VOzbGW"]), [role="dialog"][aria-modal="true"]'
      )

    const closeSettings = (): boolean => {
      const modal = findSettingsModal()
      if (modal === null) return false
      // Prefer clicking the host's native close button or backdrop mask
      const closeBtn = document.querySelector<HTMLElement>(
        '.VOzbGW_close, [class*="VOzbGW_close"], .VOzbGW_mask, [class*="VOzbGW_mask"], button[aria-label*="close" i], button[aria-label*="关闭" i]'
      )
      if (closeBtn !== null) {
        closeBtn.click()
        return true
      }
      // Fallback: dispatch native Escape key to useModalLayer
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Escape',
          code: 'Escape',
          keyCode: 27,
          which: 27,
          bubbles: true,
          cancelable: true,
        }),
      )
      return true
    }

    const onPopState = (): void => {
      if (selfBackPending) {
        clearSelfBack()
        return
      }
      if (armed) {
        armed = false
        closeSettings()
      }
    }

    const armHistory = (): void => {
      if (armed) return
      armed = true
      try {
        history.pushState({ dshSettingsBack: true }, '')
      } catch {
        armed = false
      }
    }

    const disarmHistory = (): void => {
      if (!armed) return
      armed = false
      selfBack()
    }

    // 1. Listen for clicks on settings triggers to immediately arm history
    const onCaptureClick = (event: MouseEvent): void => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('button[aria-haspopup="dialog"], [class*="VOzbGW_trigger"]') !== null) {
        // Arm right when user taps settings button so history entry is guaranteed in stack
        setTimeout(armHistory, 0)
      }
    }

    // 2. Body direct-child observer: detect when settings portal mounts/unmounts
    // subtree: false ensures ZERO overhead during streaming conversation text.
    let observer: MutationObserver | null = null
    if (typeof document !== 'undefined' && document.body) {
      observer = new MutationObserver(() => {
        const modal = findSettingsModal()
        if (modal !== null) {
          armHistory()
        } else if (armed) {
          // If modal was dismissed by tapping the X button, safely pop the history entry
          disarmHistory()
        }
      })
      observer.observe(document.body, { childList: true, subtree: false })
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onCaptureClick, true)

    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onCaptureClick, true)
      if (observer !== null) {
        observer.disconnect()
        observer = null
      }
      clearSelfBack()
      if (armed) {
        armed = false
        selfBack()
      }
    }
  }, 'dsh-web-mobile: settings back exit')
}
