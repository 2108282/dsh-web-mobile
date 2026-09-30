import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import { MOBILE_CSS } from './styles/index.ts'

export const inject = []

/**
 * Mobile adaptation plugin (clear branch):
 * - Top header UI reconstruction (CSS)
 * - Composer elements layout (CSS)
 * - Bottom elements layout (CSS)
 * - Remove left sidebar completely (CSS)
 *
 * Zero DOM tree manipulation, zero MutationObserver, zero gesture interception.
 * Preserves 100% native WebView smoothness.
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => {
    for (const stale of document.querySelectorAll('style[data-plugin-css="dsh-web-mobile/mobile.css"]')) {
      stale.remove()
    }
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-web-mobile'
    tag.dataset.pluginCss = 'dsh-web-mobile/mobile.css'
    tag.textContent = MOBILE_CSS
    document.head.appendChild(tag)

    setTimeout(() => {
      if (tag.isConnected) document.head.appendChild(tag)
    }, 0)

    return () => {
      tag.remove()
    }
  }, 'dsh-web-mobile: styles')
}
