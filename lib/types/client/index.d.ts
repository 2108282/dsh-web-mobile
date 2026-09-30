import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client';
export declare const inject: never[];
/**
 * Mobile adaptation plugin (clear branch):
 * - Top header UI reconstruction (CSS)
 * - Composer elements layout (CSS)
 * - Bottom elements layout (CSS)
 * - Remove left sidebar completely (CSS)
 *
 * Zero DOM tree manipulation, zero MutationObserver, zero gesture interception.
 * Preserves 100% native WebView smoothness.
 */
export declare function apply(ctx: ClientContext): void;
//# sourceMappingURL=index.d.ts.map