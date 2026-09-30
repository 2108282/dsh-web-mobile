/** The host's own right-sidebar opener (ui-sidebar-right: ExpandButton). */
export const HOST_FILES_OPENER = '[data-sidebar-right-expand]'
/** The host's collapse control, mounted while the right sidebar is open. */
export const HOST_FILES_CLOSER = '[data-sidebar-right-toggle]'

/**
 * Open the file browser from a mobile control.
 * Safely clicks the host's own right-sidebar toggle without foreign DOM wrapping.
 */
export function openFilesPanel(doc: { querySelector: (selector: string) => unknown } = document): boolean {
  const closer = doc.querySelector(HOST_FILES_CLOSER) as { click?: () => void } | null
  const opener = doc.querySelector(HOST_FILES_OPENER) as { click?: () => void } | null
  const hostControl = typeof opener?.click === 'function' ? opener : closer
  if (typeof hostControl?.click === 'function') {
    hostControl.click()
    return true
  }
  return false
}
