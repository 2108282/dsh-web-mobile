import type { MouseEvent } from 'react'
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { NS } from '../i18n/locales.ts'

export interface ComposerFileButtonProps extends PropsRuntime<'conversation.input.left'>, PropsLocale<typeof NS> {}

/**
 * Mobile composer file entry button.
 * Contributed into conversation.input.left slot beside the plus button.
 * Drawn with refined, modern, beautiful paperclip vector SVG.
 */
export function ComposerFileButton({ useInput, useSession, t }: ComposerFileButtonProps) {
  const busy = useInput?.((state: any) => state.phase !== 'plain') ?? false
  const subagent = useSession?.((state: any) => state.subagent !== null) ?? false
  const disabled = busy || subagent

  const openPicker = (event: MouseEvent<HTMLButtonElement>): void => {
    if (disabled) return
    const card = event.currentTarget.closest('[data-composer-card]') || document.querySelector('[data-composer-card]')
    const input = card?.querySelector<HTMLInputElement>('input[type=file]')
    if (input) {
      input.click()
    }
  }

  return (
    <button
      type="button"
      data-mobile-nav="file-upload"
      aria-label={t ? t('fileUpload') : '上传文件'}
      title={t ? t('fileUpload') : '上传文件'}
      disabled={disabled}
      onClick={openPicker}
    >
      {/* 精致优雅倾斜回形针矢量图标 */}
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
        <path d="M14.5 9.5l-6.1 6.1a3.5 3.5 0 0 1-4.9-4.9l7.5-7.5a2.5 2.5 0 0 1 3.5 3.5l-7.5 7.5a1.2 1.2 0 0 1-1.7-1.7l6.5-6.5" />
      </svg>
    </button>
  )
}
