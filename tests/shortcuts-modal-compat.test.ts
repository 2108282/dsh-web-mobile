import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LAYOUT_CSS } from '../src/client/styles/layout.css.ts'
import { MISC_CSS } from '../src/client/styles/misc.css.ts'

test('all settings sheet structural selectors carry the shortcuts exclusion gate', () => {
  // Every selector targeting the settings sheet through structural child inspection
  // must exclude [data-shortcut-modal="shortcuts"] so the hotkey reference dialog
  // is never mistaken for the settings sheet (which would collapse its header and skew its layout).
  const settingsSelectorArms = LAYOUT_CSS.split('\n')
    .map((line) => line.trim())
    .filter((line) => line.includes('[aria-modal="true"]:has(> :first-child > :last-child > button)'))

  assert.ok(settingsSelectorArms.length >= 15, `expected at least 15 settings selectors, found ${settingsSelectorArms.length}`)

  for (const arm of settingsSelectorArms) {
    assert.ok(
      arm.includes(':not([data-shortcut-modal="shortcuts"])'),
      `Settings selector missing shortcuts exclusion gate: ${arm}`,
    )
  }

  // Also verify misc.css tablet sheet centering carries the gate
  assert.ok(
    MISC_CSS.includes(':has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"])'),
    'misc.css tablet sheet centering must carry the shortcuts gate',
  )
})

test('dedicated mobile rules for shortcuts modal are registered with exact selectors', () => {
  // Shortcuts modal must have dedicated mobile rules scoped strictly to its unique marker
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*\{[\s\S]*?transform:\s*none\s*!important/,
    'shortcuts modal must clear desktop translateY',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*\{[\s\S]*?width:\s*min\(440px,\s*calc\(100vw\s*-\s*24px\)\)\s*!important/,
    'shortcuts modal must cap width adaptively',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*\{[\s\S]*?flex-direction:\s*column\s*!important/,
    'shortcuts modal must maintain column flow',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*ul\[class\*="_rows"\]\s*\{[\s\S]*?flex-direction:\s*column\s*!important/,
    'shortcuts list rows container must be a vertical column',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*li\[class\*="_row"\]\s*\{[\s\S]*?justify-content:\s*space-between\s*!important/,
    'shortcuts each row must justify content horizontally',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*header\[class\*="_header"\]\s*\{[\s\S]*?display:\s*flex\s*!important/,
    'shortcuts header must be restored and displayed',
  )
  assert.match(
    LAYOUT_CSS,
    /\[role="dialog"\]\[data-shortcut-modal="shortcuts"\]\s*\[class\*="_commandLabel"\]\s*\{[\s\S]*?text-overflow:\s*ellipsis\s*!important/,
    'shortcuts command label must support text truncation',
  )
})
