/** The host's own right-sidebar opener (ui-sidebar-right: ExpandButton). */
export declare const HOST_FILES_OPENER = "[data-sidebar-right-expand]";
/** The host's collapse control, mounted while the right sidebar is open. */
export declare const HOST_FILES_CLOSER = "[data-sidebar-right-toggle]";
/**
 * Open the file browser from a mobile control.
 * Safely clicks the host's own right-sidebar toggle without foreign DOM wrapping.
 */
export declare function openFilesPanel(doc?: {
    querySelector: (selector: string) => unknown;
}): boolean;
//# sourceMappingURL=open-files-panel.d.ts.map