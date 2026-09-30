import test from 'node:test'
import assert from 'node:assert/strict'
import { MOBILE_CSS } from '../src/client/styles/index.ts'
import { BASE_CSS } from '../src/client/styles/base.css.ts'
import { LAYOUT_CSS } from '../src/client/styles/layout.css.ts'
import { COMPAT_CSS } from '../src/client/styles/compat.css.ts'
import { MISC_CSS } from '../src/client/styles/misc.css.ts'
import { inject, apply } from '../src/client/index.tsx'

test('MOBILE_CSS intactly concatenates all 4 original style sheets', () => {
  assert.ok(MOBILE_CSS.includes(BASE_CSS))
  assert.ok(MOBILE_CSS.includes(LAYOUT_CSS))
  assert.ok(MOBILE_CSS.includes(COMPAT_CSS))
  assert.ok(MOBILE_CSS.includes(MISC_CSS))
})

test('Sidebar rail and handle are completely hidden in mobile layout', () => {
  assert.match(LAYOUT_CSS, /\[class\*="_sidebarCol"\]/)
  assert.match(LAYOUT_CSS, /display:\s*none\s*!important/)
  assert.match(LAYOUT_CSS, /\[class\*="_handle"\]/)
})

test('Styles support both native _frame class and data-mobile-nav frame attribute', () => {
  assert.match(LAYOUT_CSS, /\[class\*="_frame"\]/)
  assert.match(LAYOUT_CSS, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*0\s*0/)
})

test('Client entry exports slots and layout injects', () => {
  assert.ok(inject.includes('slots'))
  assert.ok(inject.includes('layout'))
  assert.equal(typeof apply, 'function')
})
