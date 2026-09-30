import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import { NS } from '../i18n/locales.ts';
export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
    toggleSidebar: () => void;
}
/**
 * Mobile navigation buttons:
 * - toggle: opens the left sidebar drawer (Panel Left Icon)
 * - files: opens the files management panel (Folder Open Icon)
 *
 * Drawn with refined, modern, beautiful vector SVGs.
 */
export declare function MobileNavToggle({ toggleSidebar, t }: MobileNavToggleProps): import("react").JSX.Element;
//# sourceMappingURL=MobileNavToggle.d.ts.map