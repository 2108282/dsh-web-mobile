import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import { NS } from '../i18n/locales.ts';
export interface ComposerFileButtonProps extends PropsRuntime<'conversation.input.left'>, PropsLocale<typeof NS> {
}
/**
 * Mobile composer file entry button.
 * Contributed into conversation.input.left slot beside the plus button.
 * Drawn with refined, modern, beautiful paperclip vector SVG.
 */
export declare function ComposerFileButton({ useInput, useSession, t }: ComposerFileButtonProps): import("react").JSX.Element;
//# sourceMappingURL=ComposerFileButton.d.ts.map