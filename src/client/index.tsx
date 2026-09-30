import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import { MOBILE_CSS } from './styles/index.ts'
import { NS, en, zh } from './i18n/locales.ts'
import type { MobileNavKey } from './i18n/locales.ts'
import { MobileNavToggle } from './components/MobileNavToggle.tsx'
import { ComposerFileButton } from './components/ComposerFileButton.tsx'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'mobileNav': MobileNavKey
  }
}

export const inject = ['slots', 'layout', 'locale']

/**
 * Mobile adaptation plugin (clear branch):
 * - Top header left/right navigation buttons (MobileNavToggle)
 * - Composer file upload paperclip button (ComposerFileButton)
 * - Pure static layout & styling (zero MutationObserver, zero touch interception)
 */
export function apply(ctx: ClientContext): void {
  // 1. 注册多语言文案
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-web-mobile: dictionaries')

  // 2. 挂载移动端自适应样式
  ctx.effect(() => {
    for (const stale of document.querySelectorAll('style[data-plugin-css="dsh-web-mobile/mobile.css"]')) {
      stale.remove()
    }
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-web-mobile'
    tag.dataset.pluginCss = 'dsh-web-mobile/mobile.css'
    tag.textContent = MOBILE_CSS
    document.head.appendChild(tag)

    setTimeout(() => {
      if (tag.isConnected) document.head.appendChild(tag)
    }, 0)

    return () => {
      tag.remove()
    }
  }, 'dsh-web-mobile: styles')

  // 3. 注册左上角抽屉按钮与右上角文件管理按钮
  ctx.slots.inject('conversation.session.header.actions', () => ctx.slots.register({
    name: 'conversation.session.header.actions',
    id: 'mobile-nav-toggle',
    order: 10,
    locale: NS,
    inject: () => ({
      toggleSidebar: () => ctx.layout.toggleSidebar(),
    }),
  }, MobileNavToggle))

  // 4. 注册输入框回形针上传文件按钮
  ctx.slots.inject('conversation.input.left', () => ctx.slots.register({
    name: 'conversation.input.left',
    id: 'mobile-nav-file-upload',
    order: 10,
    locale: NS,
    inject: () => ({}),
  }, ComposerFileButton))
}

import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-slots'
