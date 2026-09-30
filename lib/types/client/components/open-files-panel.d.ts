/** The host's own right-sidebar opener (ui-sidebar-right: ExpandButton). */
export declare const HOST_FILES_OPENER = "[data-sidebar-right-expand]";
/** The host's collapse control, mounted while the right sidebar is open. */
export declare const HOST_FILES_CLOSER = "[data-sidebar-right-toggle]";
/** Minimal document surface this helper needs (injectable for tests). */
interface FilesPanelDocument {
    querySelector: (selector: string) => unknown;
}
interface FilesPanelFrame {
    removeAttribute: (name: string) => void;
    setAttribute: (name: string, value: string) => void;
}
/**
 * Open or toggle the file browser from mobile control.
 * Safely clicks the host's own right-sidebar controls without foreign DOM wrapping.
 */
export declare function openFilesPanel(doc?: FilesPanelDocument, frame?: FilesPanelFrame | null): boolean;
export {};
//# sourceMappingURL=open-files-panel.d.ts.map