/** The host's own right-sidebar opener (ui-sidebar-right: ExpandButton). */
export const HOST_FILES_OPENER = '[data-sidebar-right-expand]'
/** The host's collapse control, mounted while the right sidebar is open. */
export const HOST_FILES_CLOSER = '[data-sidebar-right-toggle]'

/** Minimal document surface this helper needs (injectable for tests). */
interface FilesPanelDocument {
  querySelector: (selector: string) => unknown
}

interface FilesPanelFrame {
  removeAttribute: (name: string) => void
  setAttribute: (name: string, value: string) => void
}

function resolveFrame(): FilesPanelFrame | null {
  return document.querySelector<HTMLElement>('[data-mobile-nav="frame"], [class*="_frame"], [data-dsh-frame]')
}

/**
 * Open or toggle the file browser from mobile control.
 * Safely clicks the host's own right-sidebar controls without foreign DOM wrapping.
 */
export function openFilesPanel(
  doc: FilesPanelDocument = document,
  frame: FilesPanelFrame | null = resolveFrame(),
): boolean {
  const closer = doc.querySelector(HOST_FILES_CLOSER) as { click?: () => void } | null
  const opener = doc.querySelector(HOST_FILES_OPENER) as { click?: () => void } | null
  const hostControl = typeof opener?.click === 'function' ? opener : closer
  if (typeof hostControl?.click === 'function') {
    hostControl.click()
    return true
  }
  if (frame === null) return false
  frame.removeAttribute('data-aionui-preview-open')
  frame.setAttribute('data-aionui-explorer-open', '')
  return false
}
