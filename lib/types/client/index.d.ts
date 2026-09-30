import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client';
import type { MobileNavKey } from './i18n/locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        'mobileNav': MobileNavKey;
    }
}
export declare const inject: string[];
/**
 * Mobile adaptation plugin (clear branch):
 * - Top header left/right navigation buttons (MobileNavToggle)
 * - Composer file upload paperclip button (ComposerFileButton)
 * - Pure static layout & styling (zero MutationObserver, zero touch interception)
 */
export declare function apply(ctx: ClientContext): void;
//# sourceMappingURL=index.d.ts.map