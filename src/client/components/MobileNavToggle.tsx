import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { NS } from '../i18n/locales.ts'
import { openFilesPanel } from './open-files-panel.ts'

export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
  toggleSidebar: () => void
}

/**
 * Mobile navigation controls:
 * - toggle: opens the left drawer sidebar
 * - files: opens the files management sheet
 *
 * Drawn with refined modern vector SVGs.
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
        {/* 高颜值现代侧边栏抽屉矢量图标（圆角分栏与视窗设计） */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 3v18" />
          <path d="M14 9l3 3-3 3" />
        </svg>
      </button>

      <button
        type="button"
        data-mobile-nav="files"
        aria-label={t ? t('files') : '文件管理'}
        title={t ? t('files') : '文件管理'}
        onClick={toggleExplorer}
      >
        {/* 高颜值现代文件夹矢量图标 */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
      </button>
    </>
  )
}
