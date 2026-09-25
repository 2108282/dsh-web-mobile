import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { IconFolderOpen, IconPanelLeft } from '../core/icon-compat.ts'
import { NS } from '../i18n/locales.ts'
import { openFilesPanel } from './open-files-panel.ts'

/** Full props for the session-header directory toggle. */
export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
  /** Bound ctx.layout.toggleSidebar(). */
  toggleSidebar: () => void
}

/**
 * Mobile-only icon buttons next to the session title:
 * - toggle: opens the directory drawer on narrow screens.
 * - jobs-placeholder: persistent background jobs button in the top bar.
 * - files: opens the file browser directly — one tap, no drawer round-trip.
 *   Which surface that is (host right sidebar vs. the third-party explorer
 *   sheet) is decided in open-files-panel.ts. The hero/blank phases have no
 *   session header, so this control is absent there; the files entry in those
 *   phases is the right-edge leftward swipe (sidebar-swipe.ts).
 * Hidden entirely on wide screens (CSS media query).
 */
export function MobileNavToggle({ toggleSidebar, t }: MobileNavToggleProps) {
  const toggleExplorer = (): void => {
    openFilesPanel()
  }

  const handleJobsClick = (): void => {
    // If official job trigger is present, proxy click
    const officialTrigger = document.querySelector<HTMLElement>(
      '[class*="QsffPG_trigger"], [class*="_trigger"]:has([class*="triggerDot"]), [data-jobs-trigger]',
    )
    if (officialTrigger) {
      officialTrigger.click()
      return
    }
    // Friendly floating toast if no active jobs running
    const existing = document.querySelector('[data-mobile-jobs-toast]')
    if (existing) return
    const toast = document.createElement('div')
    toast.setAttribute('data-mobile-jobs-toast', '')
    toast.textContent = '暂无正在执行的后台任务'
    Object.assign(toast.style, {
      position: 'fixed',
      top: 'calc(env(safe-area-inset-top, 0px) + 62px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--dsw-alias-bg-elevated, #242528)',
      color: 'var(--dsw-alias-label-primary, #ffffff)',
      border: '1px solid var(--dsw-alias-border-base, rgba(127,127,127,0.25))',
      borderRadius: '8px',
      padding: '6px 14px',
      fontSize: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      zIndex: '99999',
      pointerEvents: 'none',
      transition: 'opacity 0.25s ease',
      whiteSpace: 'nowrap',
    })
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.opacity = '0'
      setTimeout(() => toast.remove(), 250)
    }, 1600)
  }

  return (
    <>
      <button
        type="button"
        data-mobile-nav="toggle"
        aria-label={t('open')}
        title={t('open')}
        onClick={() => toggleSidebar()}
      >
        <IconPanelLeft size={16} />
      </button>
      <button
        type="button"
        data-mobile-nav="jobs-placeholder"
        aria-label="后台任务"
        title="后台任务"
        onClick={handleJobsClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 5 7 8 3 11" />
          <line x1="9" y1="11" x2="13" y2="11" />
        </svg>
      </button>
      <button
        type="button"
        data-mobile-nav="files"
        aria-label={t('files')}
        title={t('files')}
        onClick={toggleExplorer}
      >
        <IconFolderOpen size={16} />
      </button>
    </>
  )
}
