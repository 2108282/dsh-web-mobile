import test from 'node:test'
import assert from 'node:assert/strict'
import { MOBILE_CSS } from '../src/client/styles/index.ts'
import { BASE_CSS } from '../src/client/styles/base.css.ts'
import { LAYOUT_CSS } from '../src/client/styles/layout.css.ts'
import { COMPAT_CSS } from '../src/client/styles/compat.css.ts'
import { MISC_CSS } from '../src/client/styles/misc.css.ts'
import { inject, apply } from '../src/client/index.ts'

test('MOBILE_CSS intactly concatenates all 4 original style sheets', () => {
  assert.ok(MOBILE_CSS.includes(BASE_CSS))
  assert.ok(MOBILE_CSS.includes(LAYOUT_CSS))
  assert.ok(MOBILE_CSS.includes(COMPAT_CSS))
  assert.ok(MOBILE_CSS.includes(MISC_CSS))
})

test('Sidebar is removed and hidden in mobile layout', () => {
  assert.match(LAYOUT_CSS, /\[data-pane="sidebar"\]/)
  assert.match(LAYOUT_CSS, /display:\s*none\s*!important/)
})

test('Styles support native data-dsh-frame attribute', () => {
  assert.match(LAYOUT_CSS, /\[data-dsh-frame\]/)
})

test('Client entry exports clean inject array without UI dependencies', () => {
  assert.deepEqual(inject, [])
  assert.equal(typeof apply, 'function')
})
