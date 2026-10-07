// 会话行交互契约：单击 = 选中、双击 = 打开；彻底禁用侧边栏长按改名以防误触。
// 宿主 0.1.7 把「改会话名」挂在会话行标题的 dblclick 上（workspace 的
// onRenameRequest），恰好和「双击 = 打开」撞同一个事件：双击会既打开会话又弹改名框。
// 这个文件把防误触和交互逻辑钉住：
//   1) onDrawerDoubleClick 吞掉真实 dblclick，防止双击打开时误弹改名框；
//   2) 侧边栏彻底禁用长按改名计时器，杜绝误触；
//   3) 移动样式把 _rowActions 常显——改名/删除统一通过行内 ⋯ 菜单进入。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CHROME = readFileSync(join(ROOT, 'src/client/effects/phone-chrome.ts'), 'utf8')
const LAYOUT_CSS = readFileSync(join(ROOT, 'src/client/styles/layout.css.ts'), 'utf8')

// Same extraction as dsha-long-press-gate.test.ts: a top-level const arrow body
// inside installOverlayInteractions, cut at the next sibling — an exactly-4-space
// `const ` or `//` comment.
const bodyOf = (source: string, name: string): string => {
  const start = source.indexOf(`const ${name} = `)
  assert.notEqual(start, -1, `const ${name} not found in phone-chrome.ts`)
  const rest = source.slice(start)
  const ends = ['\n    const ', '\n    // ']
    .map((marker) => rest.indexOf(marker, 1))
    .filter((index) => index !== -1)
  const next = ends.length > 0 ? Math.min(...ends) : -1
  return next === -1 ? rest : rest.slice(0, next)
}

test('双击：真实 dblclick 被捕获拦截，防止双击打开会话时误弹改名框', () => {
  const swallow = bodyOf(CHROME, 'onDrawerDoubleClick')
  assert.match(swallow, /target\.closest\('\[class\*="sessionRow"\] \[class\*="_title"\]'\)/)
  assert.match(swallow, /event\.stopPropagation\(\)/)
})

test('长按：彻底移除长按改名计时器与逻辑，防止误触', () => {
  const arming = bodyOf(CHROME, 'onDrawerPointerDown')
  assert.doesNotMatch(arming, /requestRowRename/)
  assert.doesNotMatch(arming, /pressTimer/)
})

test('双击拦截挂在 document 捕获阶段（React 根容器之前）', () => {
  assert.match(CHROME, /document\.addEventListener\('dblclick', onDrawerDoubleClick, true\)/)
  assert.match(CHROME, /document\.removeEventListener\('dblclick', onDrawerDoubleClick, true\)/)
})

test('长按改义后，⋯ 菜单在触屏仍可达（_rowActions 常显）', () => {
  assert.match(
    LAYOUT_CSS,
    /\[data-mobile-nav="frame"\] \[class\*="sessionRow"\] \[class\*="_rowActions"\] \{\s*display: inline-flex !important;/,
  )
})
