import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { NS } from '../i18n/locales.ts'
import { openFilesPanel } from './open-files-panel.ts'

export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
  toggleSidebar: () => void
}

/**
 * Mobile navigation buttons:
 * - toggle: opens the left sidebar drawer (Panel Left Icon)
 * - files: opens the files management panel (Folder Open Icon)
 *
 * Drawn with refined, modern, beautiful vector SVGs.
 */
export function MobileNavToggle({ toggleSidebar, t }: MobileNavToggleProps) {
  const toggleExplorer = (): void => {
    openFilesPanel()
  }

  return (
    <>
      <button
        type="button"
        data-mobile-nav="toggle"
        aria-label={t ? t('open') : '打开侧边栏'}
        title={t ? t('open') : '打开侧边栏'}
        onClick={() => toggleSidebar()}
      >
        {/* 精致左侧侧边栏分栏展开矢量图标 */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3.5" width="14" height="13" rx="2.5" />
          <line x1="7.5" y1="3.5" x2="7.5" y2="16.5" />
        </svg>
      </button>

      <button
        type="button"
        data-mobile-nav="files"
        aria-label={t ? t('files') : '文件管理'}
        title={t ? t('files') : '文件管理'}
        onClick={toggleExplorer}
      >
        {/* 精致现代圆角文件夹管理矢量图标 */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 5.5A1.5 1.5 0 0 1 5 4h3.1a1.5 1.5 0 0 1 1.06.44L10.7 6H15a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 14.5v-9Z" />
        </svg>
      </button>
    </>
  )
}
