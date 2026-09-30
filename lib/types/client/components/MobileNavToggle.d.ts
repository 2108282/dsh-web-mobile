import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import { NS } from '../i18n/locales.ts';
export interface MobileNavToggleProps extends PropsRuntime<'conversation.session.header.actions'>, PropsLocale<typeof NS> {
    toggleSidebar: () => void;
}
/**
 * Mobile navigation controls:
 * - toggle: opens the left drawer sidebar
 * - files: opens the files management sheet
 *
 * Drawn with refined modern vector SVGs.
 */
export declare function MobileNavToggle({ toggleSidebar, t }: MobileNavToggleProps): import("react").JSX.Element;
//# sourceMappingURL=MobileNavToggle.d.ts.map