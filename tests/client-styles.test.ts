import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { MOBILE_CSS } from '../src/client/styles/index.ts'
import { BASE_CSS } from '../src/client/styles/base.css.ts'
import { LAYOUT_CSS } from '../src/client/styles/layout.css.ts'
import { COMPAT_CSS } from '../src/client/styles/compat.css.ts'
import { MISC_CSS } from '../src/client/styles/misc.css.ts'

test('MOBILE_CSS intactly concatenates all 4 original style sheets', () => {
  assert.ok(MOBILE_CSS.includes(BASE_CSS))
  assert.ok(MOBILE_CSS.includes(LAYOUT_CSS))
  assert.ok(MOBILE_CSS.includes(COMPAT_CSS))
  assert.ok(MOBILE_CSS.includes(MISC_CSS))
})

test('Drawer behaves as a float overlay and slides in on expand', () => {
  assert.match(LAYOUT_CSS, /translateX\(-110%\)/)
  assert.match(LAYOUT_CSS, /:not\(\[data-sidebar-collapsed\]\)\s*>\s*:first-child/)
  assert.match(LAYOUT_CSS, /transform:\s*none\s*!important/)
})

test('Main conversation area takes full width without fixed left rail', () => {
  assert.match(LAYOUT_CSS, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*0\s*0/)
})

test('Client entry bundle contains both toggle and file upload slots', async () => {
  const content = await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')
  assert.ok(content.includes('mobile-nav-toggle'))
  assert.ok(content.includes('mobile-nav-file-upload'))
})
