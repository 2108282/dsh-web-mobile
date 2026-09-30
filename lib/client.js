window.__ModuleLoader__.load({ id: "dsh-web-mobile", factory: (require) => {
var __modules = {};
__modules["styles/base.css.js"] = function (require, module, exports) {
"use strict";
// base — split from src/client/mobile.css.ts (2026-08-16), order preserved.
// Do not reorder: styles/index.ts concatenates in this exact order.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_CSS = void 0;
exports.BASE_CSS = `
/* ---------- base control styles (rendered at any width, hidden where unused) ---------- */

[data-mobile-nav="toggle"],
[data-mobile-nav="files"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex: none;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--dsw-alias-label-secondary, inherit);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
[data-mobile-nav="toggle"]:hover,
[data-mobile-nav="files"]:hover,
[data-mobile-nav="toggle"]:active,
[data-mobile-nav="files"]:active {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, .06));
}
[data-mobile-nav="toggle"]:focus-visible,
[data-mobile-nav="files"]:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, #4f6ef7);
  outline-offset: 1px;
}

/* Drawer footer action: the relocated Session log download. The Files entry
   was removed on 2026-09-17 (see
   docs/specs/2026-09-17-sidebar-files-coexistence-design.md). */
[data-mobile-nav="drawer-actions"] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
[data-mobile-nav="session-log"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, .12));
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font-family: inherit;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
[data-mobile-nav="session-log"]:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, .06));
}
[data-mobile-nav="session-log"]:disabled {
  color: var(--dsw-alias-label-dimmed, rgba(0, 0, 0, .35));
  cursor: default;
}

[data-mobile-nav="delete-confirm-title"] {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--dsw-alias-text-primary, rgb(15, 17, 21));
}
[data-mobile-nav="delete-confirm-desc"] {
  font-size: 12px;
  line-height: 17px;
  color: var(--dsw-alias-label-secondary, inherit);
}
[data-mobile-nav="delete-confirm-actions"] {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 2px;
}
[data-mobile-nav="delete-confirm-actions"] > button {
  height: 36px;
  padding: 0 14px;
  border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, .12));
  border-radius: 18px;
  background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
[data-mobile-nav="delete-confirm-yes"] {
  border-color: transparent !important;
  background: var(--dsw-alias-state-error-primary, #b91c1c) !important;
  color: #ffffff !important;
}
[data-mobile-nav="delete-confirm-actions"] > button:disabled {
  opacity: .55;
  cursor: default;
}
[data-mobile-nav="delete-error"] {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: var(--dsw-alias-state-error-primary, #b91c1c);
}

/* Centered frosted-glass modal for the delete confirm / error card: the
   backdrop is a flex positioning container (centering + 16px inset padding)
   and the card rides inside it as a static child (session-menu.ts appends
   the card INTO the backdrop for exactly this reason). Look baseline = the
   host ⋯ menu's portal root, measured 2026-09-24: translucent
   rgba(248,249,250,.58) fill with blur(40px) saturate(1.5) frosted glass,
   16px radius, hairline + soft shadow. Geometry baseline = the host Dialog,
   measured the same day: centered modal, 16px/500 title, 36px pill buttons,
   solid-fill primary. [hidden] keeps the error line out of layout until a
   failure lands. */
[data-mobile-nav="delete-dialog-backdrop"] {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, .4);
  animation: dsh-web-mobile-fade .2s var(--ds-ease-in-out, ease-in-out);
}
[data-mobile-nav="delete-dialog"] {
  position: static;
  width: min(420px, calc(100vw - 32px));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(248, 249, 250, .58);
  -webkit-backdrop-filter: blur(40px) saturate(1.5);
  backdrop-filter: blur(40px) saturate(1.5);
  box-shadow: rgba(0, 0, 0, .04) 0 0 0 .5px, rgba(0, 0, 0, .04) 0 3px 8px 0, rgba(0, 0, 0, .05) 0 0 20px 0;
}
@media (prefers-reduced-motion: reduce) {
  [data-mobile-nav="delete-dialog-backdrop"],
  [data-mobile-nav="delete-dialog"] {
    animation: none !important;
  }
}

/* ---------- popover band above the open drawer (mobile only) ----------
   The host portals its menus to <body> as position: fixed with z-index 1100,
   while the drawer column carries 1300 and our backdrop 1250. A menu opened
   from inside the drawer therefore painted UNDER both: measured 2026-09-14 at
   390px on the session row's ⋯ menu — menu rect [160,454,218,168] z1100, and
   elementFromPoint at its centre AND at both of its ends returned drawer
   elements, so the whole menu was unreachable and the row could not be
   renamed/forked/archived/deleted from the phone (the second half of the
   owner's report: the popup the ⋯ opens is pressed under the drawer).
   The raise is gated on the open drawer: our backdrop makes that the only
   state in which a menu can be opened from the drawer, so the closed-drawer
   and desktop stacks keep the host's own ordering.
   The plugin's own confirm card sits in the same band: it mounts on
   document.body (NOT in the frame — see session-menu.ts, which appends the
   backdrop and the card there so the third-party dismiss shim's capture-phase
   click chain cannot swallow its buttons) and carried the base z 55/56, so the
   drawer covered its left 272px (measured: elementFromPoint inside that band hit
   the drawer's own button, and the confirm card is 358px wide starting at x=8). */
@media (max-width: 1023px) and (pointer: coarse) {
  body:has(:is([data-dsh-frame], [data-mobile-nav="frame"]):not([data-sidebar-collapsed])) [role="menu"] {
    z-index: 1400 !important;
  }
  /* Host modal dialogs (workspace rename, and any future dialog of the same
     shape) portal to a direct body child that carries the stacking context:
     body > div { position: fixed; z-index: 1000 } wrapping
     [role="dialog"][aria-modal="true"] (inner z-index: 1 — raising the dialog
     itself is useless, it only sorts inside that root).
     NOTE (2026-09-23): the hashes once recorded here (_root_w1urq_2 /
     _dialog_w1urq_22) are gone from both 0.1.7-alpha.1 and alpha.2, so this
     comment anchors on the SHAPE only — which is what the rule below already
     matches. Do not reintroduce a hash here without re-measuring.
     Measured 2026-09-19: with the drawer open (column z 1300) the workspace
     Rename dialog sat entirely under it and needed the drawer closed first.
     Raise the portal root, not the dialog.
     GATE (2026-09-25, real device): the gate is OUR BACKDROP'S PRESENCE, not
     the drawer-open marker. Marker and paint disagree for the whole close
     transition — the backdrop fades over .2s and is removed 260ms after the
     marker flips (overlay-backdrop-fab.ts), the column transitions .28s
     (layout.css.ts) and React swaps the pane subtree ~200ms late — so a
     marker-gated raise went dark inside that window and the drawer band
     covered any open modal. Measured on the reporter's phone (Android 16
     WebView) with the shortcut modal open: forcing data-sidebar-collapsed
     dropped this root 1400 -> 1000 and made elementsFromPoint(0.85w, .30h)
     return [data-mobile-nav="backdrop"] — rgba(0,0,0,.45) over the modal's
     white = luminance 141, matching the reporter's recording (140 behind a
     280px drawer edge). That is the "快捷键弹层抽搐/闪" report: a ~200-280ms
     dark frame with the drawer over the shortcut modal, not a compositing
     tear. The backdrop's presence IS the drawing condition, so gating on it
     has no such window; with no backdrop the host's own ordering stands (a
     menu opened inside a modal still sorts above it). Our own delete backdrop
     matches this rule too since the 2026-09-24 centered rework (its direct
     child card carries role=dialog) — harmlessly: it sets the same 1400 the
     dedicated rule below sets. */
  body:has([data-mobile-nav="backdrop"])
    > div:has(> [role="dialog"][aria-modal="true"]) {
    z-index: 1400 !important;
  }
  [data-mobile-nav="delete-dialog-backdrop"] {
    z-index: 1400 !important;
  }
  [data-mobile-nav="delete-dialog"] {
    z-index: 1401 !important;
  }
  /* dsh-usage-stats portals its panel to <body> as position: fixed with
     z-index 100 (desktop-designed; the drawer does not exist there). With our
     drawer open (column z 1300) the「用量/余额」panel sat under it: measured
     2026-09-20 at 390px — panel rect [12,91,366,625] z100 vs drawer 280px wide
     z1300, and elementFromPoint at the panel's centre AND its left corners
     returned drawer elements, so only a ~98px strip on the right stayed
     reachable. The plugin also unmounts the panel when the drawer closes
     (Escape-linked dismissal) and the badge only renders in the open drawer,
     so the open-drawer gate covers the panel's only reachable state; the
     closed-drawer and desktop stacks keep the plugin's own ordering. */
  body:has(:is([data-dsh-frame], [data-mobile-nav="frame"]):not([data-sidebar-collapsed]))
    [data-usage-stats-panel] {
    z-index: 1400 !important;
  }
  /* AppFrame overlayLayer band — the class self-fix of our own layering
     contract (NOT a per-plugin adaptation): plugin and host sheets portal
     INTO the AppFrame overlay layer (position: absolute; z-index 20 — its
     own stacking context), so no z-index on a sheet itself can out-rank the
     drawer column's 1300 in the root context, and every sheet opened from
     the drawer landed behind it. Measured 2026-09-22 at 390px with the
     drawer open: a probe sheet inside the layer stayed hit-blocked by
     drawer elements at z auto AND z 9999 alike, and only raising the layer
     ROOT revealed it (elementFromPoint). Raise the stacking root, not the
     children — the same shape as the dialog portal-root raise above. The
     body-ported bands keep their own raises (menus 1100, dialog root 1000,
     usage-stats panel 100): each is a per-surface adaptation patch for a
     portal OUTSIDE this layer. Closed-drawer and desktop stacks keep the
     host's own ordering. */
  body:has(:is([data-dsh-frame], [data-mobile-nav="frame"]):not([data-sidebar-collapsed]))
    [class*="_overlayLayer"] {
    z-index: 1400 !important;
  }
  /* 0.1.7 fullscreen sidebar panels (the sidebar terminal / files / preview /
     browser tabs) state the dockkit cell at z 40 — the host sets
     --dsh-dockkit-dock-layer: 40 on .panel[data-sidebar-right-panel=fullscreen]
     — which outranks the
     host's own overlay layer (20) and our FAB (21). Measured 2026-09-23 at
     390px with the terminal panel open: elementFromPoint at the FAB's centre
     returned a panel child, and a real tap on it left the drawer closed — the
     phone lost its only way back to navigation (the FAB is the screen's only
     control once a panel owns the main area, see overlay-backdrop-fab.ts).
     Raise OUR two surfaces for that state, the same "raise the root, not the
     children" shape as above; the FAB stays in the below-the-drawer band (55)
     so an open drawer keeps covering it. Gate on the open attribute: the
     presentation attribute alone survives a closed panel. Closed-panel,
     docked-panel (dock layer 10) and desktop stacks keep the host's order. */
  body:has([data-sidebar-right-open][data-sidebar-right-panel="fullscreen"]) [data-mobile-nav="fab"] {
    z-index: 55 !important;
  }
  body:has([data-sidebar-right-open][data-sidebar-right-panel="fullscreen"])
    [class*="_overlayLayer"] {
    z-index: 1400 !important;
  }
}

/* Floating fallback button (hero / blank phases without a session header).
   Top aligns with the session header's toggle row (that row sits 12px below
   the frame's safe-area padding); when the client has set viewport-fit=cover
   the safe-area inset moves it below the notch too. */
[data-mobile-nav="fab"] {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 12px);
  left: 10px;
  z-index: 21;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, .12));
  border-radius: 50%;
  background: var(--dsw-alias-button-floating-fill, #ffffff);
  color: var(--dsw-alias-label-primary, inherit);
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .18);
  -webkit-tap-highlight-color: transparent;
}
[data-mobile-nav="fab"]:hover {
  background: var(--dsw-alias-button-floating-hover, rgba(0, 0, 0, .08));
}
[data-mobile-nav="fab"]:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, #4f6ef7);
  outline-offset: 2px;
}

/* Dimmed backdrop under the open drawer; above every column, below the drawer.
   z 1250: 0.1.5 pins its native sidebarCol at z-index:1100 and paints mid
   layers up to that band; the backdrop must sit above the host stack
   (below the drawer's 1300) so the dim covers the content area on every
   host generation. Keep in sync with the drawer z in layout.css.ts. */
[data-mobile-nav="backdrop"] {
  position: absolute;
  inset: 0;
  z-index: 1250;
  background: rgba(0, 0, 0, .45);
  cursor: pointer;
  animation: dsh-web-mobile-fade .2s var(--ds-ease-in-out, ease-in-out);
  /* Fade-out twin of the mount animation: the task eases the dimming away
     (inline opacity 0 + pointer-events none) and removes the element after
     the fade. Also used by the gesture layer so the backdrop fades in step
     with a close-follow commit's slide-out. */
  transition: opacity .2s var(--ds-ease-in-out, ease-in-out);
  -webkit-tap-highlight-color: transparent;
}
@keyframes dsh-web-mobile-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  [data-mobile-nav="backdrop"] {
    animation: none !important;
    transition: none !important;
  }
}
/* Settings sheet entrance: the official dialog mounts with no animation at
   all, so it snaps in. A slight rise/scale reads as a proper sheet.
   No opacity arm (issue #124, 2026-09-25): checker scene 4 screencast caught
   the fade double-exposing the still-open drawer underneath the panel
   (frame a005) — sliding in fully opaque keeps the motion, drops the bleed. */
@keyframes dsh-web-mobile-sheet-in {
  from {
    transform: translateY(14px) scale(.98);
  }
  to {
    transform: none;
  }
}
/* Preview sheet rise: the aionui preview column opens as a bottom sheet. */
@keyframes dsh-web-mobile-sheet-up {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

`;
};
__modules["styles/layout.css.js"] = function (require, module, exports) {
"use strict";
// layout — split from src/client/mobile.css.ts (2026-08-16), order preserved.
// Self-contained: the mobile media query opens and closes in this file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LAYOUT_CSS = void 0;
exports.LAYOUT_CSS = `/* ---------- mobile-only layout (narrow viewport AND touch-primary pointer) ---------- */

@media (max-width: 1023px) and (pointer: coarse) {
  /* --- Phone chrome ---
     The system status bar stays visible (no fullscreen). Three adjustments
     make it behave:
     - touch-action: pan-y pinch-zoom kills double-tap-to-zoom (and the 300ms
       tap delay) while keeping vertical pan. Omitting pan-x (i.e. not using
       the manipulation alias) forbids HORIZONTAL pan on the root: a
       left-edge horizontal drag would otherwise be claimed by the browser as
       a pan (firing pointercancel) before the sidebar swipe layer can
       classify it. touch-action does not inherit and the behavior
       intersection stops at the first scroll container, so only touches
       landing directly on the root background are affected — inner
       horizontal scrolling of content containers is untouched. pinch-zoom is
       listed on purpose (#45): a bare pan-y also drops pinch, and then a
       zoom the browser applied by itself — iOS enlarges the viewport when a
       field under 16px takes focus — can no longer be undone by the user,
       so the app stays magnified until it is reopened or rotated. Two-finger
       zoom is also the WCAG 1.4.4 escape hatch and costs the gesture layer
       nothing: pinch is not a horizontal pan.
     - overscroll-behavior-x: none suppresses the browser's edge history
       navigation on the root scroller — Android Chrome claims a horizontal
       stroke that STARTS within its edge band (EDGE_WIDTH_DP=48dp,
       NavigationHandler.java) and navigates BACK, the exact gesture that
       opens the drawer ("页面直接返回上一页", 2026-08-29 user report). Only
       html/body count for this (Chromium issue 41483088: inner containers
       are ignored by the navigation path). iOS Safari's edge back-swipe has
       no CSS opt-out (WebKit bug 240183) — there the widened gesture start
       zone (START_ZONE_RATIO 0.45 of the viewport width, ~176px at 390px,
       past every browser's edge-claim strip) is the mitigation.
     - With the client's viewport-fit=cover, env(safe-area-inset-top) is the
       status bar / notch height; the rules below push the app content below
       it so the status bar never covers anything. Off notched phones (or in
       a normal browser tab where the layout viewport already sits below the
       status bar) the inset is 0 and nothing shifts. */
  html,
  body {
    touch-action: pan-y pinch-zoom !important;
    overscroll-behavior-x: none !important;
  }

  /* AppFrame: the drawer takes the sidebar column out of grid flow, so the
     remaining in-flow items (center, details) land in tracks 1..2: give the
     center every pixel and keep the details track at zero. The top padding
     clears the status bar / notch for every in-flow surface (session header,
     messages, composer); the absolutely-positioned drawer is unaffected (its
     containing block is the frame's padding box, i.e. still the frame top).
     box-sizing MUST be border-box: the official frame is height:100% of a
     100%-height body, and it is content-box by default, so the safe-area
     padding is ADDED on top of the full viewport height. The frame then grows
     to 100% + inset, the document itself becomes scrollable by exactly the
     inset, and the sticky composer seat (bottom:0 of the scroll body) lands
     below the visual viewport. Symptoms on a notched phone: the whole UI can
     be swiped up, the composer lifts off the bottom leaving a blank strip,
     and the newest message sits under the composer because the host's
     at-bottom follow scrolls its own scroll body, not the document. With
     border-box the padding is taken out of the 100% height instead, so the
     frame is exactly one viewport tall and the document never scrolls.

     The leading html element selector is load-bearing, not decoration: the
     third-party @linxin666/dsh-web-all sheet ships an equal-specificity
     !important grid-template-columns for this same element under
     (max-width: 768px), so without the extra element the winner is decided by
     which sheet happens to be injected later. Measured before and after with
     scripts/probes/cascade-conflict-probe.mjs: no computed value moves, the
     rule only stops depending on sheet order (audit D-5 option A). */
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) {
    box-sizing: border-box !important;
    position: relative !important;
    grid-template-columns: minmax(0, 1fr) 0 0 !important;
    padding-top: env(safe-area-inset-top, 0px) !important;
  }

  /* The sidebar column (first grid child) becomes a left drawer. The drawer
     hugs the sidebar content exactly (the wide sidebar carries an inline
     width, ~280px): a fixed 92vw box would leave a white strip where the
     container background shows beside the content.
     Closed state: translateX(-110%) — more than -100% of the max-content
     width — guarantees the whole drawer (and its shadow, had it one) leaves
     the viewport. A mere -100% leaves a sliver on screen; -105% (as used
     before) left 14px of the drawer plus a long 32px-blur shadow gradient
     visible along the left edge of the main UI. No box-shadow at all: the
     dimmed backdrop already separates drawer from content. */
  /* These legacy column rules stay armed on every host generation: the phone
     owner prefers this drawer over the official overlay one (2026-09-13). The
     host's own drawer ships NO full-screen backdrop, so the conversation beside
     it stays hit-testable - the rejection reason.
     Layering contract: this column is 1300 and the backdrop 1250 (base.css),
     both deliberately above the host's native sidebarCol at 1100. The earlier
     value of 40 sat BELOW that 1100: because this same rule also forces
     position/inset/width on the element, the column kept a correct-looking box
     while neither painting nor hit-testing, which is the "all black, click
     anywhere closes" root cause. The backdrop we append carries the dimming. */
  /* 移除左侧侧边栏功能：完全隐藏侧边栏及其所有相关触发按钮与容器 */
  [data-pane="sidebar"],
  html [data-dsh-frame] [data-pane="sidebar"],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-pane="sidebar"],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) > :first-child {
    display: none !important;
    width: 0 !important;
    min-width: 0 !important;
    max-width: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: none !important;
  }


  /* The host's own drawer handle. It renders the branded fish glyph (a 24x17
     path in a 23.16x17.04 viewBox) and the phone owner reads it as a stray
     "whale" sitting at the very top-left of the header: measured [10,14,44,44]
     against our own toggle at [8,12,28,28], i.e. the two overlap in the same
     corner. It also duplicates what our toggle already does, so on the mobile
     branch it is removed. The selector keys on the host's own label - the
     element carries no distinguishing class (hHd-Xa_iconButton is shared with
     every other icon button, and the label flips to "Collapse sidebar" when the
     drawer is open, which is why the attribute prefix matches both states and
     both get removed). Nothing in this plugin queries that element; the drawer
     still opens from our toggle, the edge swipe, and closes by tapping the
     backdrop or swiping it away. */
  /* Two selectors and both are needed. The competitor is NOT the host's own
     CSS: @linxin666/dsh-web-all injects, under (max-width: 768px),
     [data-dsh-frame][data-sidebar-collapsed] [data-pane="sidebar"]
     [data-dsh-responsive-part="sidebar-toggle"] { pointer-events: auto;
     display: inline-flex !important }. That is 4 attribute selectors AND
     !important - exactly what the first selector below is - so this is NOT an
     out-specify, it is a TIE decided by sheet order, and it holds only because
     our sheet is injected after theirs. Measured twice, not inferred:
     scripts/probes/cascade-conflict-probe.mjs reports both sides imp=true at
     (0,4,0) and lists this as a reviewed order-tie; if the injection order
     flips, the dismiss shadow returns as a visible inline-flex box with
     pointer-events restored. Done (audit D-5 option A, 2026-09-16): every
     selector below carries a leading html, which lifts the first one to
     (0,4,1) and ends the tie - the outcome no longer depends on which sheet is
     injected later. The hash class and the label stay as fallbacks for hosts
     without that hook. */
  html :is([data-dsh-frame], [data-mobile-nav="frame"])[data-sidebar-collapsed] [data-pane="sidebar"] [data-dsh-responsive-part="sidebar-toggle"],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-dsh-responsive-part="sidebar-toggle"],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="hHd-Xa_toggle"]:is([aria-label*="sidebar" i], [aria-label*="侧边栏"]),
  /* The label-only fallbacks MUST stay scoped to the seats the host's own
     drawer handle can live in. Unscoped they match by aria-label substring,
     and the session row's ⋯ carries 会话“<title>”的操作 — so any session
     whose title contains 侧边栏 (or "sidebar") lost its ⋯ menu entirely
     (2026-09-22 phone repro: title 侧边栏不见了 → rowActions button
     display:none, row height unchanged, time shifted right by the 16px the
     button would have taken). Anchor them to the frame's leading seat and to
     the header's leading cell instead. */
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-conversation-header-leading] button[aria-label*="sidebar" i],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-conversation-header-leading] button[aria-label*="侧边栏"],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-shell-leading] button[aria-label*="sidebar" i],
  html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-shell-leading] button[aria-label*="侧边栏"] {
    display: none !important;
  }

  /* The host's own right sidebar IS the Files panel on phones, and the host
     pins it as a fixed full-bleed sheet: [data-sidebar-right-panel=fullscreen]
     carries position:fixed; inset:0 and no inset of its own (the host CSS
     never mentions safe-area at all). Its top row - the tab strip holding the
     tab label, the + button and the Split / Exit-fullscreen pair at the right
     edge - therefore sat UNDER the status bar: measured at 390x844 with the
     panel open, the strip is [0,0,390,38] and the phone's status bar owns the
     top of the screen. The frame's own safe-area padding cannot reach it: a
     fixed element's containing block is the viewport, not the frame's padding
     box. Taking the inset as padding keeps the panel's own --dsw-alias-bg-base
     covering the whole viewport (no seam behind the status bar) and drops the
     entire row below it, with the right-hand buttons still on the right edge.
     ONLY the fullscreen form: the host's docked form (measured at 820x1180 -
     form=push, position:absolute, 365px right-anchored) has the frame's
     padding box as its containing block, so it already starts below the
     status bar; padding it too would add the inset a second time. A host
     generation that renames the form value should fail the probe loudly
     instead of silently double-padding. The rule lives in the mobile branch,
     so desktop keeps the host layout. */
  [data-sidebar-right-panel="fullscreen"] {
    padding-top: env(safe-area-inset-top, 0px) !important;
  }

  /* prefers-reduced-motion: the drawer's .28s slide is motion; drop it
     (audit S2 2026-08-27 — the old reduce block only covered the settings
     sheet and its mask). Same idiom as the animation:none blocks below. */
  @media (prefers-reduced-motion: reduce) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) > :first-child {
      transition: none !important;
    }
  }

  /* Drag handles are useless on touch and would float over the drawer. */
  [data-side="sidebar"],
  [data-side="details"] {
    display: none !important;
  }

  /* --- Conversation text on mobile ---
     The official message flow keeps desktop's 32px side gutters and 16px
     type. On a phone: shrink the type a notch and widen the lines by
     trimming the gutters (the sidebar drawer list keeps its size). The
     flow's scroll container holds the markdown <p> paragraphs; since
     DSH 0.1.2-rc.1 the composer is a Lexical contenteditable that also
     renders real <p> paragraphs inside its own _scroll container, so the
     composer must be excluded explicitly via
     :not(:has([data-composer-input])). */
  /* The official main scroll body reserves scrollbar-gutter for desktop
     scrollbars (8px), which shoves every column off-center on a phone.
     Classic desktop scrollbars (Edge/Chrome) also occupy ~8-17px in a
     phone-sized viewport, shifting the column further. Mobile scrolling
     is touch/wheel, so remove the scrollbar entirely on phones: the
     column is then exactly centered in every browser. */
  [data-phase] [class*="_scrollBody"] {
    scrollbar-gutter: auto !important;
    scrollbar-width: none;
  }
  [data-phase] [class*="_scrollBody"]::-webkit-scrollbar {
    display: none !important;
    width: 0;
    height: 0;
  }
  /* Message action rows (copy / run-time badges) can overflow the right
     edge on narrow screens — keep them inside the message width. */
  [data-phase] [class*="_actions"] {
    overflow: hidden;
  }
  [data-phase] [class*="_actions"] [class*="_timeEnd"] {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }

  /* Message tooltip bubbles (copy / feedback labels, message-row hover
     bubbles) are redundant on touch: the icon already flips to a checkmark.
     Suppress only inside the actions row — the fork's original scope. On
     this host (0.1.1-rc.2) NO tooltip renders as a visible bubble: the copy
     label is a visuallyHidden span and no client-ui package emits
     role="tooltip". The user message bubble (Sixlwa_bubble since the host moved
     it to dsh-client-ui-chat) and the goal
     bubble (oRe1gG_bubble) live in _userStack/_row, NOT in _actions — the
     previously unscoped selector hid every user message on touch devices
     (2026-09-06 live regression). role="tooltip" stays globally suppressed:
     genuine ARIA tooltips are exactly what the sticky-residue fix targets,
     and nothing legitimate carries the role today. The actions-row arm
     re-activates by itself when a host version renders tooltip labels
     inline in the actions row (DSH 0.1.2 shape). */
  @media (hover: none), (pointer: coarse) {
    [data-phase] [role="tooltip"],
    [data-phase] [class*="_actions"] [class*="_bubble"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  }

  [data-phase]
    [class*="_scroll"]:not([class*="_scrollBody"]):not(:has([data-composer-input])):has(p) {
    padding-left: 20px;
    padding-right: 20px;
    /* Message text follows the host's own font-size axis (Settings -> 字号大小)
       instead of a frozen phone constant. The host writes the user's choice to
       <body> as --dsh-content-font-size and derives the longhand token
       --dsw-font-markdown-base-font-size from it; the previous 15px !important
       cut that chain at the container, so settings 12-17 did nothing for message
       text while the host's own markdown blocks still moved — two sizes mixed in
       one column (#52). Read the longhand token only: the other token ending in
       -base is the font shorthand, an invalid font-size value that the parser
       drops and the cascade silently falls back on. The fallback chain ends at
       the host's own default axis value. */
    font-size: var(--dsw-font-markdown-base-font-size, var(--dsh-content-font-size, 14px)) !important;
  }
  /* Descendants only inherit: the host already resolves the same token on its
     own markdown blocks (and its styles pin 16px on paragraphs / list items),
     so a rule per p / li / user-message text would cut the axis a second time. */
  [data-phase]
    [class*="_scroll"]:not([class*="_scrollBody"]):not(:has([data-composer-input])):has(p) p,
  [data-phase]
    [class*="_scroll"]:not([class*="_scrollBody"]):not(:has([data-composer-input])):has(p) li,
  [data-phase]
    [class*="_scroll"]:not([class*="_scrollBody"]):not(:has([data-composer-input])):has(p) [
      class*="_text_"
    ] {
    font-size: inherit !important;
  }

  /* Markdown tables: the official table uses width:max-content, so on a phone
     it hugs the content and leaves dead space beside/inside the table. Force
     the table to fill the message column and let the table wrapper handle
     overflow if a cell is genuinely too wide. */
  [data-phase] table {
    width: 100%;
    max-width: 100%;
  }
  [data-phase] th,
  [data-phase] td {
    max-width: none;
    min-width: 0;
  }

  /* Markdown images: the official rule often forces width:100%, which
     upscales small square images to the full message column. Show small
     images at their intrinsic size; large / very wide images still scale
     down to fit the column (max-width:100% keeps horizontal panoramas
     adaptive without overflowing). */
  [data-phase] [class*="_scroll"]:not([class*="_scrollBody"]) img {
    width: auto !important;
    max-width: 100% !important;
    height: auto !important;
    /* Cap square / tall images so a big sticker does not dominate the
       narrow column; landscape images stay governed by max-width only.
       The plain px line is the fallback for engines without dvh. */
    max-height: 220px !important;
    max-height: min(40dvh, 220px) !important;
  }

  /* User bubbles: the official stack is capped at min(525px, 82%), which on a
     phone leaves a large blank strip on the left and pushes the bubble high.
     On mobile let the user message fill the same full width as assistant
     messages (the bubble background then spans the whole message column). */
  [data-phase] [class*="_userStack"],
  [data-phase] [class*="_userStack"] [class*="_bubble"] {
    box-sizing: border-box;
    width: fit-content;
    max-width: 100%;
  }

  /* --- Composer bottom row on mobile ---
     The official row contains two lanes: tools (plus + permission/mode
     controls) and trailing (model + context + send). The previous rules made
     the modes lane flex:none, so its full intrinsic width collided with the
     model selector on narrow phones. Keep fixed hit targets fixed, but let
     text-bearing controls shrink and ellipsize before they paint over the
     trailing lane. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) {
    box-sizing: border-box;
    container-type: inline-size;
    container-name: dsh-mobile-composer;
    flex-wrap: nowrap;
    /* 2026-09-23 店主："每个功能键隔的空间太多"。真机实测间距主要不是 gap（6px）
       而是各控件自己的内边距；这里 gap 收到 3px，配合下面模型 chip 的 padding
       收紧，把右簇焊成一团。 */
    gap: 3px;
    padding-left: 6px;
    padding-right: 6px;
    /* The dropdown menu is absolutely positioned inside this row; any
       overflow: hidden here would clip it. Inner lanes keep their own
       overflow clipping, so the row itself can stay visible. */
    overflow: visible;
  }
  /* Dual-primary form (subagent view: stop + send). The four-control
     cluster [model][meter][stop][send] overflows the single-row lane the
     nowrap rule above enforces; the model pill is the only shrinkable
     item, so it collapses to zero and the fixed trio loses its auto
     margin (all hug the lane's left edge, send may even paint off-view).
     Restore the official wrap for this form only: the trailing lane
     drops to a second full-width row where the four controls always
     fit. Main-session three-control form keeps single-row layout. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]):has([class*="_primary"] ~ [class*="_primary"]) {
    flex-wrap: wrap;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > :first-child {
    flex: 0 1 auto;
    min-width: 0;
    /* 2026-09-23 店主第三轮："左边那三个功能区挨得太近了，隔开一点点"。
       权限控件收窄 16px 后，📎 跟着整体左移、贴到了 ⌄ 上（实测墨迹间距只剩 ~3px）。
       工具道 gap 单列放宽到 8px（右簇仍 3px，保持焊在一起）。 */
    gap: 8px;
    /* The permission dropdown (Menu, side: top) pops upward from inside the
       tools lane; overflow hidden here would crop it, same as the row. Text
       ellipsis is handled by the trigger label itself. */
    overflow: visible;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] {
    flex: 1 1 auto;
    min-width: 0;
    gap: 3px;
    /* Must not clip the model dropdown; the model trigger clips its own label. */
    overflow: visible;
  }
  /* Permission / plan controls share the tools lane inside the a2-style
     'div.modes' container (class survives as 'css.modes'; audit doc §10.1 /
     E-1). The positional anchor '> :first-child > :nth-child(2)' was already
     off-target on rc.2 and dies entirely on a2, so the series re-anchors on
     the tools lane's modes container: '[class*="_tools"] > [class*="_modes"]'
     (live-verified on the rc.2 host: the modes div is a direct child of the
     tools lane, a grandchild of the row — a row-direct-child anchor matches
     nothing on either generation). The permission label uses the remaining
     tools width, while the lower-priority plan slot keeps an icon-sized
     target instead of stealing model width. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] {
    flex: 0 1 auto;
    min-width: 0;
    max-width: none;
    /* 2026-09-23 店主："左边那个权限的也缩一点点"：容器 gap 4→0。 */
    gap: 0;
    /* The permission Menu list (side: top) pops upward out of this lane;
       overflow hidden crops it. The trigger label clips its own text. */
    overflow: visible;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] > [class*="_trigger"] {
    flex: 1 1 auto;
    min-width: 28px;
    max-width: 100%;
    display: flex !important;
    overflow: hidden;
    /* 权限 trigger 自带内边距 + flex gap（图标与 ⌄ 之间），图标化后都是浪费：
       2026-09-23 按店主"缩一点点"归零（真机 44px 盒 → ~34px）。 */
    padding: 0 !important;
    gap: 0 !important;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] > [class*="_trigger"] > [class*="_triggerLabel"] {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  /* Slot wrappers such as the live plan chip are not trigger elements. Do
     not force them into an icon-sized box: their child button would overflow
     that wrapper and paint over PermissionSelect. Keep the wrapper intrinsic;
     the model lane below is the one that sacrifices width. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] > :not([class*="_trigger"]) {
    flex: 0 1 auto;
    min-width: 34px;
    max-width: max-content;
    overflow: visible;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] > [class*="_wrap"] > [class*="_chip"] {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  @container dsh-mobile-composer (max-width: 359px) {
    [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_tools"] > [class*="_modes"] > [class*="_trigger"] > [class*="_triggerLabel"] {
      display: none !important;
    }
  }
  /* 权限触发器（宿主 dsh-client-ui-permission-presets，样式哈希 iWlSmW_）自身带
     padding:0 4px 0 8px + gap:4px —— 与模型 chip 同款浪费（左 8px 是给文字留的）。
     2026-09-23 店主："左边那个权限的也缩一点点"。注意：它外面套了一层
     display:contents 包装（真机探针：modes[55,44] > div[contents] > root[55,44]），
     所以「_modes > _trigger」这类直接子代锚点命不中（上一版改了没反应），
     必须用哈希后代锚点；哈希变了整条自动失效，不会误伤别家。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="iWlSmW_trigger"] {
    padding: 0 !important;
    gap: 0 !important;
  }
  /* 2026-09-23 店主："权限的图标有点小，稍微大一点点，不然左边轻右边重"。
     宿主把图标包在 _triggerIcon 里、自己写死 14px（iWlSmW_triggerIcon svg
     的 width/height 都是 14px），与 + / 📎 的 16px 不齐。只放大那个包装里的
     svg：⌄ 箭头不在 _triggerIcon 内，不会被一起放大。盒子 28×28 不变（16 仍有余量）。
     注意：本文件是模板字符串，注释里**不能出现反引号**（会劈开 CSS）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="iWlSmW_triggerIcon"] svg {
    width: 16px !important;
    height: 16px !important;
  }

  /* Model selector: flexible and shrinkable, but never clipped.
     The root must be overflow:visible so the dropdown menu can render.
     The trigger itself clips the label text. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"]) {
    flex: 0 1 auto;
    min-width: 0;
    overflow: visible;
  }
  @container dsh-mobile-composer (max-width: 359px) {
    [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"]) {
      flex-basis: auto;
    }
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"]) > [class*="_trigger"] {
    display: flex !important;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"]) > [class*="_trigger"] > [class*="_triggerLabel"] {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_root"]:has(> [class*="_trigger"]):not(:has(> [class*="_trigger"][aria-haspopup="menu"])) {
    flex: 0 0 auto;
  }

  /* Model switcher menu: was centered here with left:50% + translateX(-50%), but the
     host now PORTALS the menu to <body> (measured 2026-09-23: _7KE1Ra_menu, role=menu,
     position:fixed, parent=BODY, inline left/top), so this child-chain selector stopped
     matching and the rule had been dead. The re-anchor lives in JS instead —
     effects/model-menu-anchor.ts centers the panel on the trigger and clamps it to the
     viewport. Do not re-add a CSS rule here without checking the portal parent. */

  /* --- Fix composer row overflow at narrow widths (320px-360px) ---
     Force every direct child of the tools and trailing lanes to shrink,
     so they can fit within the available space without causing horizontal
     overflow. The fixed-size icon buttons are exempt: officially both are
     flex:none at a fixed size (plus 28x28, send 34x34) and must stay put,
     not participate in adaptation. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > :first-child > :not([class*="_add"]) {
    flex-shrink: 1;
    min-width: 0;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] > :not([class*="_primary"]) {
    flex-shrink: 1;
    min-width: 0;
  }
  /* Pin the plus button at the left edge of the tools lane: official
     flex:none 28x28, never squeezed by narrower viewports. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > :first-child > [class*="_add"] {
    flex: none;
  }
  /* The context meter in the trailing lane is another fixed-size icon
     control: its trigger is officially width:28px flex:none, but the root
     itself is shrinkable, so a squeezed root lets the trigger paint over
     the pinned send button. Keep the whole meter at its natural size; its
     trigger uses aria-haspopup="dialog", so the model-selector menu rules
     (keyed on "menu") still do not apply. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] > [class*="_root"] {
    flex: none;
    min-width: 0;
  }
  /* --- 右簇贴右：2026-09-23 重新对锚（模型胶囊改"只留图标"后暴露的旧账）---
     宿主把右簇（模型座位 standardControls / 麦克风 activity / 发送 primary）
     放进可增长的 trailing 车道，靠"某个成员带 margin-left:auto"把整簇顶到右缘。
     插件原来把吸收器挂在模型 root 上：
       > [class*="_trailing"] [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"])
     但 0.1.7 的祖先链变成了
       trailing > standardControls(flex item) > div[display:contents] > _root > _trigger
     于是 root 只是 standardControls **内部**的 flex item，auto 外边距落在一个
     内容宽度的盒子里 ⇒ 等于失效。真机探针实测三者 ml 全 = 0px，就是铁证。
     2026-09-23 之前胶囊很宽、把车道填满，看不出来；胶囊一收成图标，右簇立刻
     塌到左边（发送 x≈316 → 224，右边空出 ~76px，店主一眼看出"位置被移了"）。
     修法：把吸收器改锚到「车道的第一个 flex item」，并只在模型座位在场时生效
     —— 那时宿主那条把 primary 的 auto 清零的规则也在生效，避免两个 auto 平分
     空隙；模型不在场（子代理视图）照旧由 primary 自己的 auto 收尾。
     justify-content: flex-end 是兜底：万一首个 child 是 display:none，auto
     无处可挂时仍能贴右（此时无 auto 外边距，flex-end 才起作用）。 */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"]:has([class*="_trigger"][aria-haspopup="menu"]) {
    justify-content: flex-end;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"]:has([class*="_trigger"][aria-haspopup="menu"]) > :first-child {
    margin-left: auto;
  }
  /* ContextMeter (JObwrW_ hash family) hugging the primary key. This single
     value is the whole spacing knob, and because the trigger box is centred on
     the ring ink it doubles as the ink offset:
       6px + margin-right = the sliver before the primary key = the ink's
       leftward shift. 0px (current) therefore shifts the ink 6px -- exactly the
       official lane gap, with no negative-margin trick left in the chain --
       while -6px pins the ink perfectly still and +8px was vetoed on
       2026-09-17 as "too much" (14px). The phone owner asked for a visible
       shift after 1px (-5px) proved imperceptible, and will re-tune this number
       by eye: change it and nothing else moves.
     Anchor on the unique aria-haspopup="dialog" trigger (no other composer
     control uses it), not the hashed class, so an upstream hash bump cannot
     silently unhook us. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] > [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="dialog"]) {
    margin-right: 0px;
  }
  /* The model pill joins the same right cluster: its margin-left:auto absorbs
     ALL trailing slack, so the adaptive void sits between the tools lane and
     the pill (visible on wide phones/tablets), while [pill][meter][send] stay
     welded together at the right edge on every width. Descendant combinator
     on purpose: the pill root sits behind a display:contents wrapper, so a
     direct-child combinator silently misses (probe-verified). Within the
     trailing lane aria-haspopup="menu" belongs to the model trigger alone. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="menu"]) {
    margin-left: auto;
    margin-right: -4px;
  }
  /* Grow only the invisible trigger BOX, never the ring ink: 24x24 -> 28x34.
     The WIDTH is capped at 28 by pure geometry, not by taste: the box is
     centred on the ink, and the primary key's hit box begins 14px right of the
     ink's centre, so 28 is the widest box that can reach that boundary without
     stealing a single pixel from the destructive key (the current 1px sliver
     is the spacing knob on the root rule above); the same arithmetic puts the
     left edge on the model pill's edge. The 34px HEIGHT is free: the primary
     key is already the tallest control in the lane, so the box cannot overlap
     anything vertically and the row height does not move. Hit area 576 -> 952
     square px (+65%) with the ink within 1px of its old spot (probe-asserted),
     and the ring's ink stays at its official 14px -- enlarging it is rejected
     as attention-grabbing. Knob: height can drop to 28 if the tap halo should
     be a circle rather than a stadium. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] > [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="dialog"]) > [class*="_trigger"] {
    width: 28px;
    height: 34px;
    padding: 0;
  }
  /* Slack-absorber priority in the trailing lane: model pill > meter > send.
     Exactly one element carries margin-left:auto so the adaptive void always
     sits BEFORE the welded right cluster, never inside it. The meter itself
     never had an auto before 2026-09-06: in subagent sessions the model seat
     is officially absent (the parent pins the model), and zeroing the send's
     auto on the meter's aria-haspopup="dialog" then left NOTHING to absorb
     slack -- the whole right cluster hugged the lane's left edge (user
     screenshot). Fix: when no model pill renders, the meter root becomes the
     absorber, welding [meter][send] at the right edge like the main view's
     [pill][meter][send]; the send's auto only survives when neither renders. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"]:not(:has([class*="_trigger"][aria-haspopup="menu"])) > [class*="_root"]:has(> [class*="_trigger"][aria-haspopup="dialog"]) {
    margin-left: auto;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] > [class*="_primary"] {
    flex: none;
    margin-left: auto;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"]:has([class*="_trigger"][aria-haspopup="menu"], > [class*="_root"] > [class*="_trigger"][aria-haspopup="dialog"]) > [class*="_primary"] {
    margin-left: 0;
  }

  /* --- Third-party model seats (issue #60: @hytime/dsh-thinking-effort) ---
     A seat registered on conversation.input.model replaces the official pill,
     so the trailing lane no longer contains an aria-haspopup="menu" trigger:
     the pill absorber rule above never matches, and the meter fallback below
     would split the slack with the seat (two auto margins share it), leaving
     the seat stranded mid-lane. Worse, in the seat's open state the root's
     only child is the absolutely positioned panel, so the root collapses to
     zero width and the panel's right:0 anchor (width min(336px, 100vw - 32px))
     sweeps 336px leftward from wherever the stranded root sits — 230px off
     screen at 393px (reporter-measured: root x=106, panel left=-230; with our
     stylesheet disabled the root sat at x=339 and the panel at +3, which pins
     the blame on our injection). Both repairs anchor on the plugin's own
     stable data-seat-* markers (identical across v0.2.3-v0.3.1) and leave the
     official pill untouched:
     1. the seat root stretches across the trailing lane with its content
        pushed to the right edge, so the closed chip welds onto the
        [meter][send] cluster AND the grown root consumes all free space,
        which zeroes the meter fallback's margin-left:auto (flexible lengths
        resolve before auto margins — no double void);
     2. while the panel is open its anchor is re-centered on the stretched
        root (the same left:50% + translateX recipe as the official menu
        rule), so the panel hugs the composer's right side and the plugin's
        own min(336px, 100vw - 32px) width keeps it inside the viewport at
        every width. The reporter's rejected translateX attempt centered on
        the UNFIXED zero-width root; centering only works once the root is
        stretched. */
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] [data-seat-root] {
    flex: 1 1 auto;
    justify-content: flex-end;
  }
  [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) > [class*="_trailing"] [data-seat-root] > [data-seat-panel] {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  /* --- Composer file entry (0.1.6 host) ---
     The 0.1.6-alpha.2 host deleted the composer's paperclip attach button, so
     the only file entry left is the 文件 row inside the "+" listbox. The
     control is contributed to the host-declared conversation.input.left list
     slot ("Compact controls at the left of the composer tool row"), inside the
     tools lane beside the plus button, so only its own box is needed here:
     28x28 like the plus button and fixed — one of the row's hit targets, never
     part of the adaptive shrink. Its click handler triggers the host's own
     hidden input[type=file], so intake validation and upload stay host-owned. */
  [data-composer-card] [data-mobile-nav="file-upload"] {
    flex: 0 0 auto !important;
    /* 2026-09-23 店主："触发点有点小，没那么容易点" ⇒ 盒子 28×28 → 34×34
       （面积 +47%），再由下面的 ::after 向外扩 4px（最终命中区约 42×42）。
       **图标位置不变**：盒宽 +6 后 margin-left 从 -10 收到 -13，图标中心原地不动；
       高度对齐发送键的 34px，行高不受影响。 */
    width: 34px !important;
    min-width: 34px !important;
    max-width: 34px !important;
    height: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    position: relative !important;
    /* 左移 10px + 图标 14→16px（2026-09-23，店主："太往右了、有点小"）：
       工具道现在是 [+][⚠⌄][📎]，宿主给 modes 控件留了较宽的尾部留白，📎 看着
       离左边一截。与参考图逐像素对齐（以 + 为锚点）：参考 📎 墨迹 107..117 CSS，
       我们原先是 114..123；而墨迹高度 48 vs 参考 54 物理 px ⇒ 图标 14 偏小，
       换成宿主通用的 16（+ / ⚠ 都是 16）。28px 盒 + 16px 图标居中 ⇒ 墨迹左缘
       = 盒左缘 + 8.85，故盒左缘取 98 ⇒ margin-left: -10px（吃掉 6px gap 后再
       压进 modes 尾部留白 4px，不碰它的墨迹：chevron 墨迹止于 ~91）。
       这一个数值就是"往左多少"的旋钮，可按眼睛调，别动别的。 */
    margin: 0 0 0 -11px !important;
    display: grid !important;
    place-items: center;
    border: 0 !important;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  /* 按下/悬停反馈：宿主其它按钮（加号常驻、模型与权限触发器按下）都有灰胶囊，
     只有我们这个是纯透明、也没有 :active —— 店主 2026-09-23："文件上传那个图标
     怎么没有胶囊？"（点了没反应）。用宿主自己的 hover token，视觉与官方一致。 */
  /* 可见胶囊只在 ::before 上画 28×28 的圆（与加号同尺寸，店主："胶囊有点太大"），
     按钮盒子仍是 34×34 + ::after 外扩 —— 命中区大、看起来小，两者解耦。 */
  [data-composer-card] [data-mobile-nav="file-upload"]::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 999px;
    background: transparent;
    transition: background .12s ease;
  }
  [data-composer-card] [data-mobile-nav="file-upload"]:hover::before,
  [data-composer-card] [data-mobile-nav="file-upload"]:active::before {
    background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, .06));
  }
  /* 压掉浏览器默认的淡蓝 tap 高亮（店主 2026-09-23："单纯点击图标，出现一个淡蓝色
     的原始的点击画面"）。读源码取证：宿主头部那几个包（dsh-client-ui-subagent /
     agent-preset / dsh-experimental-client-ui-agent-team / jobs）**都没有 :active、
     也没有任何 tap-highlight 处理**，触摸设备上点"标准模式 / Agent Team / 1 个子代理 /
     对话·轨迹"就会叠一层原始高亮；我们输入区的控件早已处理（见上面 file-upload 那组）。
     做法与输入区同源：高亮透明，按下反馈交给宿主自己的 :hover/:active token
     （那几个包各有 2~9 条 :hover 规则，触摸时 Chromium 会套用）。 */
  /* 覆盖范围放宽：宿主有些控件不是 button（实测输入区里就有 [role=button]、带
     tabindex 的 div 形态），所以三类一起收。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header button,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tab"],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="menuitem"],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="button"],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [tabindex],
  [data-composer-card] button,
  [data-composer-card] [role="button"],
  [data-composer-card] [tabindex] {
    -webkit-tap-highlight-color: transparent;
  }
  /* 头部 UI 的按下反馈（店主 2026-09-23："是头部 UI，没有触发反馈"）。
     取证：头部四个宿主包 :active 全为 0，反馈只挂 :hover。
     ⚠ 第一版我给整颗 button 上 background-color，店主实测"胶囊过宽、跑到子代理下面"
     —— 因为 button 盒比可见胶囊大（芯片文字只占盒的一部分）。所以改成**不改几何**的
     按下效果：整体压暗（.92 ≈ 宿主 token 的观感强度；太淡店主会觉得"没变"）。胶囊类的视觉仍由宿主自己的 chip 背景负责。
     不用 position/伪元素：头部芯片里挂着宿主的弹层，改 position 会挪动包含块。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header button:active,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tab"]:active {
    filter: brightness(.92);
  }
  /* 头部那些 v 的翻转：**标准模式那个现在会翻** —— 规则在本文件「DSHA 集成层：预设 chip」
     那一块（搜 data-dsha-agent-preset="header" 的 svg:last-of-type 两条）。这里留一段纠正记录，
     免得后人被已经作废的旧结论误导：

     · 旧结论（同日早先写的）称"本 WebView 里该 svg 的 CSS transform 完全失效"——**错的**。
       真因是预设 chip 的 > svg 上有一条我们自己写的
       [data-dsha-agent-preset="header"] > svg { transform: none !important }（DSHA 集成层拿它把
       图标拉回静态流）。**内联 transform: rotate(45deg) 没带 !important，被那条压掉**，
       于是量出"盒子不变、computed 仍是 none"，被我误判成 WebView 不吃 CSS transform。
     · 子代理 chip 的 v 一直是宿主自带：dsh-client-ui-subagent 的
       .ZKlsPq_trigger svg{transition:transform .12s} + 类 .ZKlsPq_triggerOpen{transform:rotate(180deg)}。
     · 禁止对头部 svg 写通配规则（header svg{...} / [class*=chevron]{...}）：那会覆盖子代理 chip
       自己的 triggerOpen 状态，出现"修一个压掉另一个"（这正是当时反复翻车的原因）。 */
  /* 输入区**宿主渲染**的功能键**不再自加胶囊**（店主 2026-09-23："点击功能键怎么有两个
     灰色的叠加？"）。
     原因：宿主本来就有自己的 hover 底色（conversation 包 13 条 :hover、model-selection 3 条、
     permission-presets 2 条、input-trigger 3 条），我们再加一层 ::before 就是**两层灰叠在一起**。
     教训：上一轮店主说"这几个功能没有触击反馈"，我据此加了胶囊 —— 实际是那次刚把浏览器默认
     淡蓝 tap 高亮压掉、观感反差的错觉；**宿主已有的反馈不要再叠一层**。
     我们自己注入的 📎（[data-mobile-nav="file-upload"]）例外：宿主没有对应控件、也就没有底色，
     它的胶囊留在上面那组规则里。 */
  /* 命中区外扩：::after 属于按钮本身，一起参与命中测试，视觉完全不变。 */
  [data-composer-card] [data-mobile-nav="file-upload"]::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 12px;
  }
  /* A busy submit phase or a subagent session refuses attachments. The host
     gates intake on canAcceptDrop (package-private), so this reads the closest
     observable facts — input phase and subagent — and keeps the control from
     opening a dialog the host would then reject. */
  [data-composer-card] [data-mobile-nav="file-upload"]:disabled {
    opacity: 0.38;
    cursor: default;
  }
  /* The hidden input[type=file] this control triggers only exists on
     0.1.6-alpha.2+ hosts (the rc generation's intake is paste/drop only),
     while the host renders the input.left seat on both generations. Hide the
     control wherever the host has no file input for it to trigger — its click
     would otherwise be a permanent silent no-op there (review 2026-09-19). */
  [data-composer-card]:not(:has(input[type=file])) [data-mobile-nav="file-upload"] {
    display: none !important;
  }

  /* --- Composer vertical slack on mobile (0.1.6 host) ---
     The host's own .card padding-top:8px + gap:12px and .row padding leave 29px of pure
     blank space in a 98px single-line card (measured). Only the vertical slack is trimmed;
     horizontal padding and both hit targets stay untouched. Scoped to the active phase on
     purpose: the hero composer's input carries the host's own min-height floor, and trimming
     it there re-creates the clip/scrollbar defect recorded under Pitfalls「hero 输入框下限」. */
  /* DSHA：输入卡片自身留白偏大。宿主那两声明全出自它自己的
     dsh-client-ui-conversation（.uV2eYG_card 是 padding-top:8px + gap:12px，
     .uV2eYG_row 再吃 padding:2px 8px 6px），单行输入时卡片 98px 里有 29px
     是纯空白。手机上只压纵向留白（真机实测 moderate 档）：
       卡片 98 -> 78、编辑器 36 -> 32、按钮行 42 -> 36、文字底到按钮顶 29 -> 19px。
     横向 padding（8px）与两个按钮尺寸（28/34px）一律不动，触控目标不变；
     编辑器仍是可增长的多行框（max-height 336px），只是单行时不再垫高。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase="active"] [data-composer-card] {
    padding-top: 2px !important;
    gap: 4px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase="active"] [data-composer-card] [class*="_row"] {
    padding: 0 8px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase="active"] [data-composer-card] [data-composer-input],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase="active"] [data-composer-card] [class*="_scroll"] {
    min-height: 28px !important;
    padding-top: 2px !important;
  }
  /* --- Session header on mobile ---
     Keep the host-owned metadata in one responsive row. The conversation
     title, the mode text and the running/subagent status all keep their
     words; the one tenant that yields width when a phone runs out of it is
     the background-job trigger's verbose label ("1 background job running"),
     while Files keeps its hit area. */
  /* Both !important flags are load-bearing. The host's session-controller sheet
     ships [data-dsh-frame] [data-dsh-responsive-part="conversation-header"] with
     padding-left: 60px !important under (max-width: 768px), so a plain
     declaration here loses however specific it is: measured 2026-09-13 at
     390px, the computed padding-left stayed 60px and the title still began at
     x=100 with our rule present, matching and later in source order. The value
     is 0 because our own toggle already occupies that left seat (painted at
     x=8-36), so the host reservation is pure dead space on a phone. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header {
    padding-left: 0 !important;
    padding-right: 8px !important;
    position: relative !important;
  }
  /* The hero phase's empty header must stay hidden on phones. The host hides
     it via the headerHidden class at (0,1,0), but its own session-controller
     sheet re-shows the conversation header as a grid at <=768px —
     [data-dsh-frame] [data-dsh-responsive-part="conversation-header"] with
     display grid at (0,2,0) — and that beats the hide on the very element
     carrying both classes. Result measured 2026-09-19 at 390px: an empty 85px
     header paints only its 1px border-bottom (--dsw-alias-border-l3) as a stray
     gray hairline under the status bar (pixel-scanned at y=84-85,
     rgb(224,224,224)); desktop keeps display none and no line. Our (0,3,1)
     re-hide needs no !important: the grid rule's display is a normal
     declaration and our style tag loads last. The header carries no children in
     hero (drawer entry is the FAB), so hiding it frees the dead 85px too. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header[class*="_headerHidden"] {
    display: none;
  }
  /* 0.1.6-alpha.2 renamed the hero-empty marker: headerHidden -> headerBlank
     (audit §1 row 3), so the rule above is a dead needle on alpha.2 and this
     one is dead on rc hosts — together they cover both generations. Same
     (0,3,1) shape, same no-!important reasoning as above. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header[class*="headerBlank"] {
    display: none;
  }
  /* Header popovers resolve against the header, not against their 28px flow
     box. 0.1.5's background-job chip anchors its menu with
     position:absolute; top:calc(100% + 5px) inside .QsffPG_root
     {position:relative} — a 28px-tall chip — so the menu was laid out at
     x=-16 (our right:8px resolved against that 156px chip root) and then
     clipped twice: by our own overflow:hidden on the chip root and by the
     host's [data-dsh-responsive-part="session-title-cluster"]
     {overflow:hidden}. The chip still reported aria-expanded=true with
     nothing painted and nothing hit-testable: measured 2026-09-14 at 390px,
     menu rect [-16,49,336,40], elementFromPoint at its centre returned the
     view tabs row. A positioned header plus a static chip root puts the same
     menu at [46,77,336,73] — inside the viewport, its rows hit-testable, and
     an outside tap still dismisses it (menus 1 -> 0). On 0.1.6-alpha.2 the
     chip leaves the flow entirely (absolute, in the gated block below), and
     this rule's higher specificity ((0,6,2) vs the new (0,4,1)) would pin it
     static there too — so it is excluded on alpha.2 hosts via :not(:has(...))
     and keeps governing rc hosts (review 2026-09-19).
     BOTH halves are load-bearing: forcing the chip root static without
     positioning the header moves the containing block out to the frame, and
     the menu lands at x=8 y=849 — past the 844px viewport (A/B 2026-09-13).
     Scoped to the header actions slot, so the subagent lineage root inside
     the crumbs keeps its own anchored, fixed-position menu. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:not(:has([class*="_headerLeading"])) [class*="_headerActions"] [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) {
    position: static !important;
  }
  /* The tab strip is a separate grid item from the title row and does not
     inherit the title row's inset, so after the header padding above went to 0
     it sat flush against the bezel (measured: tablist x=0, first tab 0..30
     while the title starts at 40). Give it the same left inset as the toggle so
     the two rows read as one column. */
  /* ---------- 手机档专属：头部留白收紧（≤767px + coarse）----------
     数值是照 360×754 真机量的（页签条 margin-top -4 / 页签下划线 5px /
     页签按钮去上内边距、靠底对齐 / 标题行回到内容高度）。**只对真·手机档生效**：
     768–1023 的平板档保持上游手机 UI 的排布，不套这台手机的魔数
     （仓库既有惯例，见文件末尾的 DSHA 预设块）。
     真机读数（修前 → 修后）：头部 77 → 67px、标题↔页签文字间距 22 → 15px。 */
  @media (max-width: 767px) and (pointer: coarse) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="wSkVaW_tabs"] {
      padding-left: 8px !important;
      /* 2026-09-23 店主："标题和下面『对话』中间的空白有点多"。
         宿主给这条页签条 margin-top:10px，页签按钮自己还带 padding-bottom:9px
         （给选中下划线留位），两行文字之间就空出一条。收紧：
         margin 归零（真机 4 → 0）+ 下划线贴到 5px（页签条 36 → 31px）。
         ⚠ 选择器必须用**后代**：页签条外面套了一层 display:contents 的 div
         （真机链：div.wSkVaW_tabs < div[0..0] < header.wSkVaW_header），
         所以原来的「header > [class*="wSkVaW_tabs"]」是条死规则 —— padding-left
         从来没生效过（现按后代写，值仍是实测的 8px，视觉不变）。 */
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="wSkVaW_tabs"] [class*="wSkVaW_tab"] {
      padding-bottom: 5px !important;
    }
    /* 真机诊断：页签条的 margin-top 计算值是 4px，但把 document.styleSheets 里
       所有能读的规则拿来和它 matches()，命中的 margin/padding 规则是 **0 条**
       —— 说明这 4px 来自一张读不到 cssRules 的表（跨源，App 自己注入的样式表），
       普通 !important 平级打不过它。所以这里加码：前缀 html + 钉住 header.wSkVaW_header，
       特异性抬到 (0,5,1)，实测能压过（页签条 4 → 0）。 */
    html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header.wSkVaW_header [class*="wSkVaW_tabs"] {
      margin-top: -4px !important;
    }
    /* 真机读数：头部的 grid-template-rows 被钉成固定的 40px 36px（宿主自己没写行高，
       是 DSHA 那张表给的），于是标题行、页签行都各留一截死空间。改成 auto：两行各自
       贴住内容，标题行按 36px 的预设 chip 走、页签行由页签按钮撑开。 */
    /* 标题行实测 40px 高，而里面最高的东西是 36px 的预设 chip（"标准模式"）——
       多出来的 4px 是死空间。让行高回到内容高度（用 auto + min-height:0，
       不写死 36：将来标题簇里出现更高的东西（子代理谱系等）也不会被裁）。 */
    html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header.wSkVaW_header [class*="wSkVaW_titleRow"] {
      height: auto !important;
      min-height: 0 !important;
    }
    /* 页签按钮文字上方还有 6px 空白（按钮被容器撑到 32px 高、文字居中）：去掉上内边距，
       下内边距 5px 已在上面钉住（下划线位置不变）。 */
    html :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header.wSkVaW_header [class*="wSkVaW_tab"] {
      padding-top: 0 !important;
      align-self: flex-end !important;
    }
  }
  /* NOTHING extra here on purpose. The header's own padding is already forced
     to 0 above, and the title row carries padding-left:40px of its own, so the
     title lands at x=40 - the toggle's right edge (36) plus 4px. A negative
     margin added on top of that over-corrected and pulled the title off the
     left edge (measured 2026-09-13: crumb x=20, and the string's first glyph
     painted partially outside the viewport), so the reclaim lives in exactly
     one place: the header padding. */

  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header > :first-child {
    display: flex !important;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    gap: 2px;
    /* Just enough for the toggle (28px at left:8 -> right edge 36) plus 4px of
       breathing room; the host's 60px rail reservation is neutralised above. */
    padding-left: 40px;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header > :first-child > :first-child {
    display: flex !important;
    align-items: center;
    flex: 1 1 auto;
    min-width: 0;
    gap: 2px;
  }
  /* The directory toggle stays at the far left of the header. */
  [data-mobile-nav="toggle"] {
    position: absolute !important;
    left: 8px !important;
    top: 12px !important;
    z-index: 2 !important;
  }
  /* The files opener is pinned to the header's right corner, mirroring the
     directory toggle on the left (same 8px edge, same 12px seat). In flow it
     can never reach that corner: the host reserves the last 44px of the title
     cluster for a utilities seat that is EMPTY on mobile - measured at 390px,
     headerUtilities sits at x=374 with width 0 while the title cluster carries
     padding-right: 44px - so the button stopped at x=300..328 and left 62px of
     bare header to its right (2026-09-14 phone-side report: the opener is not
     pinned to the top-right corner). Absolute positioning also returns its
     28px of flow width to the title lane, and the containing block is the same
     one the toggle resolves against, so both controls shift together with the
     frame's safe-area padding. The 44px reservation itself is trimmed to the
     28px band this button actually paints in the compact-rows block below, so
     the title lane keeps the difference. */
  [data-mobile-nav="files"] {
    position: absolute !important;
    right: 8px !important;
    left: auto !important;
    top: 12px !important;
    z-index: 2 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_headerActions"] {
    display: flex !important;
    align-items: center;
    box-sizing: border-box;
    flex: 0 1 auto;
    min-width: 0;
    max-width: calc(100% - 32px);
    margin-left: auto;
    justify-content: flex-end;
    gap: 2px;
  }
  /* The title takes the remaining width and never paints outside it; the
     metadata lane's mode text is what shrinks first. */
  /* min-width is a readable floor (2026-09-13 phone report: the title showed a
     single glyph then an ellipsis). This lane has flex basis 0, so it is the
     first thing every crowding neighbour eats: measured at 320px with a lineage
     chip in the row, the crumb client width collapsed to 16px and NOTHING of
     the title was painted. 30% of the row keeps 2-4 CJK glyphs plus the host's
     own ellipsis whatever else is pinned next to it. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_crumbs"] {
    flex: 1 1 0;
    min-width: 30%;
    max-width: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  /* Mode label: keep the icon AND the words. On a phone this chip is the only
     mode switcher there is, so its text is not the surplus it was once
     treated as: the longest preset name measured needs 121px including the
     18px icon seat, while the old cap min(22vw, 220px) allowed just 85.8px at
     390px — the text was clipped at every phone width even before the
     crowding rules below pinned it to the icon alone (2026-09-14 phone
     report: the mode label showed only its glyph). 38vw keeps the label whole
     from 320px up and still lets it ellipsize before the title on wider
     screens. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_label"]:has(> svg) {
    order: 1;
    flex: 0 1 auto;
    min-width: 0;
    max-width: min(38vw, 220px);
    display: block;
    position: relative;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_label"]:has(> svg) > svg {
    position: absolute !important;
    left: 0 !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
  /* Running/subagent controls keep their full status text and hit area; they
     do not give up width to the mode label. NOTE: the real subagent lineage
     root has class="ZKlsPq_root " — a TRAILING SPACE from the plugin's
     template-literal className — so [class$="_root"] never matches it. Use
     [class*="_root"] and exclude the switcher root ([class*="_switcherRoot"])
     so only the count/job roots get pinned (the switcher must stay shrinkable
     so its own title can ellipsize). */
  /* Pinned (flex 0 0 auto) with a max-width cap. A shrinkable chip is squeezed
     below its content and the count reads as clipped or overwritten (the
     2026-08-22 report), while a bare max-content pin eats the session title,
     whose flex basis is 0: measured 2026-09-13 at 320px, the crumb went 68px
     -> 16px and the painted title was EMPTY while the chip kept its full text.
     Pinned + capped + the crumbs min-width floor above is what holds both —
     the title ellipsizes, the count keeps its words, and the hit area stays
     one inline-flex button.
     NOTE: the popover containment lives with the header rules above, which
     force this root position:static. That only works together with the
     positioned header: static on its own moved the containing block out to
     the frame and the menu landed at x=8 y=849, past the 844px viewport
     (A/B 2026-09-13). */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) {
    order: 2;
    flex: 0 0 auto;
    min-width: 0;
    max-width: min(40vw, 180px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) > button {
    min-width: 0;
    max-width: 100%;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) > button > * {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) > button,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) > button * {
    white-space: nowrap !important;
  }
  /* The lineage count's leading "/" (ZKlsPq_separator — official desktop
     chrome rendered only for a root session inside the crumbs) looks like a
     stray extra breadcrumb level on small screens; hide it. The crumbSep "/"
     between ancestry segments (subagent sessions) is a real separator and
     stays. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_crumbs"] [class*="_separator"] {
    display: none !important;
  }
  /* The header's right-hand slot clips its own dropdown away (0.1.5 host bug).
     wSkVaW_headerUtilities is a 44x44 grid cell with overflow:auto, and the host
     mounts its "More actions" menu INSIDE it: the menu is 218x52, so the cell
     clipped it to 44x44 and the menu was never painted and never hit-testable
     (measured: menu rect 156,56 218x52, computed flex/visible/opacity 1, yet
     elementsFromPoint at the item centre returned the view tabs row and nothing
     from the menu). Raising the menu z-index cannot help - the cell's own
     stacking context traps it. Releasing the overflow paints the menu where the
     host positioned it, and the item then works (verified: a real tap opening
     the session-log export dialog, menus 1 -> 0 dialogs 1). Scoped to the mobile
     branch and to this one cell, so desktop keeps the host layout. The section
     is hidden on mobile anyway - the drawer footer carries the same action - but
     the release stays for any plugin that registers a header dropdown here. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="wSkVaW_headerUtilities"] {
    overflow: visible !important;
    /* The seat is empty on a phone (its only button is hidden just below) yet
       still 44px tall, which floors the whole title row — see the compact-rows
       block after the tab strip. */
    height: 30px !important;
    min-height: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="wSkVaW_headerUtilities"] [class*="nL4_yW_moreButton"] {
    display: none !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [data-mobile-nav="files"] {
    width: 28px;
  }
  /* Session log download: gone from the header row on mobile (the utilities
     seat holds only the session-log-export capsule). */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header > :first-child > :last-child {
    display: none !important;
  }
  /* View tabs strip (official [role="tablist"] under the crumbs row).
     Desktop ships a single flex row (gap: 36) sized for the two stock tabs
     (对话/轨迹). Plugins register further views (memory / skill / todo
     panels, per-plugin settings pages), and once the count passes two the
     shrinkable buttons collapse to their min-content: CJK labels stack one
     glyph per line (staircase), latin labels break word-per-line — the
     strip eats a screenful of vertical space (#41, 8 tabs, HarmonyOS
     browser). Scroll the strip horizontally instead — the standard mobile
     tab-bar pattern — with every label kept whole (flex-shrink: 0 +
     nowrap). Affordance is the peek: the naturally cut-off tab at the right
     edge says "more this way" (unlike the settings navList, whose buttons
     nearly fit and would show no cut edge), which is why this strip scrolls
     while that one wraps. touch-action: pan-x opts the strip into
     horizontal panning — the root's pan-y intersection stops at this first
     scroll container (same mechanism as the drawer's pan-y), so the page
     never scrolls sideways. overscroll-behavior-x: contain stops a flick
     from chaining past the ends; snap keeps tabs edge-aligned after a
     fling; the scrollbar stays hidden like every native tab bar. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tablist"] {
    flex-wrap: nowrap;
    gap: 0 16px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    touch-action: pan-x;
    scrollbar-width: none;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tablist"]::-webkit-scrollbar {
    display: none;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tablist"] > button {
    flex-shrink: 0;
    white-space: nowrap;
    scroll-snap-align: start;
  }
  /* Compact session header rows (2026-09-14 phone report: the top is very
     empty). The host's own mobile sheet lays the header out as
     grid-template-rows: minmax(32px, auto) minmax(44px, auto) with
     [role="tab"] { min-height: 44px }, and both rows then grow to 44: the
     title row is floored by the empty utilities seat above, the tab row by the
     buttons' own floor. Measured at 390px: header 97px = 8 padding + 44 + 44 +
     1 border, for 36px of painted content. Capping the rows at 36/32 and the
     tabs at their own content height gives 77px, with nothing else degraded —
     title, mode text, status chips, chevrons and both pinned corner buttons
     keep their measured geometry, and the tab strip keeps its #41 contract
     (horizontal scroll, 16px gap, whole labels, pan-x).
     The host's 8px padding-top is deliberately kept: the title row's 28px
     content then centres at y=26, exactly the centre of the pinned corner
     controls (toggle and Files opener both sit at top:12, 28px tall). Trimming
     that padding to 4 shaved 4 more px but left the text row visibly riding
     above both buttons (2026-09-14 phone report: the text row sits too high
     against the drawer and Files controls), so the row height is what pays for
     the compaction, not the alignment.
     :has(> *) guards the hero header: it is an EMPTY, host-hidden grid that
     still occupies 85px while the composer is laid out under it. In the hero
     the header has 0 element children, so the guard leaves it at its official
     height — measured, the hero composer rect [0,349,388,231] is identical
     with and without this block. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has(> *) {
    min-height: 0 !important;
    /* 2026-09-23 二轮：页签行地板 32 → 26（店主："标题和下面『对话』中间空白有点多"）。
       标题行地板保持 36 —— 它下面的文字要跟 top:6 的圆形按钮对齐（实测文字中心
       y=20 = 圆形按钮中心），压标题行会把文字顶得比按钮高（2026-09-14 已踩过）。
       页签按钮的 32px 地板同理下到 26px（文字 16px + 下划线留 5px），
       页签条的下沿随之从 76 收到 66。 */
    grid-template-rows: minmax(36px, auto) minmax(32px, auto) !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tab"] {
    min-height: 32px !important;
  }
  /* 手机档专属（≤767px + coarse）：页签行地板 32 → 26（下划线收到 5px 后仍够点）。
     平板档保留 32px 的既有值，不跟手机一起压。 */
  @media (max-width: 767px) and (pointer: coarse) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has(> *) {
      grid-template-rows: minmax(36px, auto) minmax(26px, auto) !important;
    }
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [role="tab"] {
      min-height: 26px !important;
    }
  }
  /* The title cluster reserves its last 44px for that empty utilities seat.
     The lane's right edge must stay clear of the Files opener's HIT BOX,
     otherwise the opener eats the trailing chips' taps. The pre-2026-09-22
     value (26px, a width optimisation) only cleared at the 390px test width:
     measured at 360x754 (dpr 4) the Agent Team chip ran to x=334 while the
     opener's 36px box started at x=316 — an 18px overlap, so tapping the
     chip's tail opened the Files panel. The reference phone UI shows the lane
     ending at ~314 with the opener box at 316..352, i.e. the full 44px seat
     plus 2px of breathing room, so restore that instead of narrowing the
     opener: 46px clears the 36px box at right:8 by 2px at every width. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="wSkVaW_titleCluster"] {
    padding-right: 46px !important;
  }
  /* Header crowding on narrow phones.
     Three tenants want the same row: the session title, the mode chip and the
     status chips. The status chips are the only ones whose words are
     redundant — the background-job chip keeps its state dot, its chevron and
     its aria-label, and the popover above now lists the jobs — so the job
     trigger's verbose label ("1 background job running") is what yields. The
     mode chip is the only mode switcher a phone has and the title is the only
     session identity, so both keep their words and the title ellipsizes
     instead (measured 2026-09-14 at 390px with a lineage chip present: after
     this the mode label keeps 101px of text and the crumb 135px).
     The lineage root (dsh-client-ui-subagent) sits in the crumbs for BOTH
     running and idle descendants, so the guards below key on that root rather
     than the transient running-state dot — otherwise the row would reflow the
     moment agents go idle. Match roots with [class*="_root"] (the real class
     carries a trailing space; [class$="_root"] matches nothing). */
  @media (max-width: 440px) {
    /* The job label is the single widest tenant of the actions lane and the
       only one whose text is already carried elsewhere (aria-label + popover).
       Truncating it to a number instead would print the wrong count for a
       double-digit job list, so it is dropped whole — dot, chevron and tap
       target stay. */
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_headerActions"] [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) [class*="_count"] {
      display: none !important;
    }
  }
  /* With the subagent lineage (any state) AND a background job present
     together, 390px cannot hold the title, the mode words, the lineage count
     and the job label at once; the job label goes first, above 440px too. */
  @media (max-width: 559px) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_crumbs"] {
      padding-right: 8px;
    }
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_crumbs"] [class*="_root"]) [class*="_headerActions"] [class*="_root"]:not([class*="_switcherRoot"]):has(> button[class*="_trigger"]) [class*="_count"] {
      display: none !important;
    }
  }
  /* Last resort on 320px-class screens: the title and both status chips cannot
     share the row with the mode words, so the mode chip keeps only its icon. */
  @media (max-width: 359px) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_crumbs"] [class*="_root"]):has([class*="_headerActions"] [class*="_root"]) [class*="_label"]:has(> svg) {
      display: none !important;
    }
  }

  /* --- Header popovers on mobile (dsh-client-ui-jobs / dsh-client-ui-subagent) --- */
  /* Both entries sit in the session header and both anchor their panel to the
     trigger's left edge (left:0 inside their own root), so clamp them to the
     viewport. The background-job menu resolves against the header (see the
     containment rules at the top of this section) and the subagent lineage
     menu is position:fixed, so right:8px pins either panel 8px from the
     phone's right edge: measured [46,77,336,73] for the job menu and
     [38,41,336,58] for the lineage menu at 390px, both fully inside the
     viewport. Do NOT clamp with left:8px: measured, that put the panel at
     x=350..686 (off-screen) against a right-anchored x=30..366. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header [class*="_menu"] {
    left: auto !important;
    right: 8px !important;
    width: min(336px, calc(100vw - 16px));
    max-width: none;
    max-height: min(420px, calc(100dvh - 120px));
  }

  /* --- 0.1.6-alpha.2 session-header adaptation (audited on a real device) ---
     The 16-item reconciliation in docs/upstream/2026-09-19-mobile-header-0.1.6-adaptation.md,
     landing the 14 items whose anchors exist in 0.1.6-alpha.2 host builds. Two preset items
     (#6/#7) are deliberately omitted: they anchor on .dsha-preset-header-anchor, a marker
     that exists only in the DSHA build, so they would be dead rules here.
     GENERATION GATING: only _headerLeading/_crumbCurrent/_crumbSeg/_headerCorner are
     alpha.2-only classes — every other anchor below (_titleCluster/_crumbs/_headerActions/
     _headerUtilities/tablist/QsffPG_/ZKlsPq_ and the :first-child chains) also exists on
     0.1.5-rc hosts, where these rules would silently re-tune geometry the older rules
     measured (review 2026-09-19). Every selector therefore carries
     header:has([class*="_headerLeading"]): the whole block is dead on pre-alpha.2 hosts and
     the rc-generation rules keep governing there unchanged. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) {
    /* 顶部留白收窄：宿主 header 自带 padding-top: 10px、标题行再垫 2px，
       叠在刘海/状态栏避让之上就显空。这两处一起清零。 */
    padding-left: 8px !important;
    padding-right: 8px !important;
    padding-top: 0 !important;
    /* 宿主 header 有 min-height: 76px，而内容只有 ~69px，底部会垫出 7.6px 空白
       （实测：标签行底边 106，header 底边 113.6）。贴底定位的状态 chip 会被这
       段空白顶下去、和标签行错开。手机上让 header 贴住内容高度。 */
    min-height: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) > :first-child {
    flex-wrap: nowrap !important;
    align-items: center !important;
    gap: 0 !important;
    padding-left: 32px !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
  }
  /* 目录开关跟着一起上移，保持与标题/按钮同一行居中。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [data-mobile-nav="toggle"] {
    top: 6px !important;
  }
   /* 空座位不判空、只塌宽：a2 槽位渲染器永远在 headerLeading 里挂一个
      [data-slot] 包装元素（display:contents、0×0），:empty 与 :not(:has(*))
      两种「空」判定都恒不命中（宿主自己的 :empty 规则同样失效），而
      display:none 又会在某代真的渲染控件时误藏真控件。这里不判定空不空，
      只把第三方误标进来的预留 padding 塌掉——web-all 兼容层按 0.1.5 结构
      把本座位误标成 session-title-cluster，注入 padding-inline-end:44px，
      座位于是 0 内容 + 44 padding = 44px 死占（实测 390px：座位
      [40,22,44,0]、titleCluster 被顶到 x=84）。padding 归零后空座位 = 0×0，
      真有内容的宿主也不受影响（内容盒照常渲染）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerLeading"] {
    /* 不能塌掉左侧座位本身：上面那条（> :first-child）给本座位留了
       padding-left:32px 作面板开关的座位，而 padding: 0 !important 是
       简写，会把它一并清零。两条规则特异性同为 (0,4,1)，按源序本块在后
       ⇒ 简写胜出，座位塌成 0×0、网格第一列 0px、标题直接压到 left:8 的
       面板按钮上（真机实测 2026-09-22，360x754@4：crumbs x=8、
       toggle 8,6 28x28；真机 DOM 规则枚举确认胜出者就是本块）。
       NOTE: 本文件整体是 JS 模板字符串，注释里绝不能出现反引号。 */
    padding: 0 !important;
    padding-left: 32px !important;
  }
  /* 0.1.6 的新头部里，titleRow 的第一个孩子是新增的空座位
     headerLeading（macOS 桌面控件，安卓上渲染 null）。插件按 0.1.5 老结构
     写的「header > :first-child > :first-child { flex: 1 1 auto }」现在套在
     这个空座位上，于是它吃掉全部剩余宽度、把标题顶到右侧（实测 411px 宽
     屏幕上标题被推到 131px 处）。让它不参与伸缩即可——有内容时也不会塌。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) > :first-child > :first-child {
    flex: 0 0 auto !important;
    width: auto !important;
    min-width: 0 !important;
    gap: 0 !important;
  }
   /* 第三方兼容层（@linxin666/dsh-web-all 的 web-ui-compat 行）按 0.1.5 结构
      把本代 titleCluster 误标成 session-utilities，给里面所有按钮注入
      min-width/min-height:44px + flex:none：toggle/files、模式/团队/面包屑
      按钮全被顶成 44 —— toggle (8,6,44,44) 中心 28、files (338,2,44,44)
      中心 24、标题带中心 22 三心不齐；files 加宽后越过 headerActions 流右缘
      6px（338 < 344）。宿主 0.1.6-alpha.2 自身没有任何 44px 下限（全包
      grep 零命中），这里把外来下限归零：控件回到各自设计尺寸（toggle 28
      来自 base.css、files 36 来自下面的 a2 专条、chips/面包屑回宿主自然
      高度），三心回到 20，titleCluster 的 min-height:40 !important 重新
      主导行高。QsffPG/ZKlsPq 两个状态 chip 用 :not 明确豁免：它们的
      25px 下限由后面 min-height:25px !important 专条供给，特异性 (0,4,1)
      低于本条 (0,7,1)，不豁免会被顺手压掉，不靠书写顺序。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_titleCluster"] :is(button, [role="button"]):not([class*="QsffPG_root"] button):not([class*="ZKlsPq_root"] button) {
    min-width: 0 !important;
    min-height: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_titleCluster"] {
    display: flex !important;
    flex-wrap: nowrap !important;
    flex: 1 1 auto !important;
    width: auto !important;
    max-width: none !important;
    min-width: 0 !important;
    min-height: 40px !important;
    /* 三级间隙 6 → 4（2026-09-23 用户拍板）：团队 chip 在手机档被宿主
       @container(width<=480px) 藏掉标签、只剩 14px 图标（对账见 §6），
       这一行不再需要 6px 的呼吸量；收成 4px 让「模式 / 团队 / 文件夹」
       看起来是一组。 */
    gap: 0 4px !important;
    justify-content: flex-start !important;
    align-items: center !important;
    /* 簇溢出守卫，随断点 A 无条件化并入本显示规则（原为独立条）：极端
       字体下 crumbs 触地板后的残余溢出保持可横滑，不依赖 web-all 垫片
       （缺席时簇溢出默认 visible，会压画到 corner 按钮上）；内容放得下时
       本声明完全惰性。x:auto 把 y 也算成 auto，簇内容高 ≤40px 恒不纵溢
       无实害；findHorizontalScroller 对 overflow-x 容器让位。 */
    overflow-x: auto !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_titleCluster"] > [class*="_crumbs"] {
    /* 标题改成自适应：面包屑条吃掉动作区之外的剩余宽度，标题多长就显示多少，
       装不下时由每一段自己的滑动窗口（见下）横向滑。min-width 保底 4 字，
       防止预设名字很长时把标题挤没。 */
    flex: 1 1 auto !important;
    width: auto !important;
    min-width: 72px !important;
    max-width: none !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    min-height: 0 !important;
    padding-right: 0 !important;
    overflow: visible !important;
    white-space: nowrap !important;
  }
  /* 标题本体：自适应宽度 + 横向滑动。宽度由上面面包屑条的剩余空间决定，
     装不下时在本段内左右滑（touch-action: pan-x 让浏览器先认领横滑，
     左缘抽屉手势不会抢走这一笔）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_crumbs"] [class*="_crumbCurrent"] {
    flex: 0 1 auto !important;
    width: auto !important;
    min-width: 0 !important;
    /* 6 个汉字上限：6×14px + 左右 padding 16px = 100px。再长就在本段内横滑，
       这样标题永远不会顶到右侧的预设。 */
    max-width: 100px !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    text-overflow: clip !important;
    white-space: nowrap !important;
    text-align: left !important;
    justify-content: flex-start !important;
    touch-action: pan-x !important;
    overscroll-behavior-x: contain !important;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_crumbs"] [class*="_crumbCurrent"]::-webkit-scrollbar {
    display: none;
  }
  /* 面包屑的父会话段同样是 <button>，不设窗口就会顶出去（子代理会话实测）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_crumbs"] [class*="_crumbSeg"] > button {
    flex: 0 1 auto !important;
    min-width: 0 !important;
    max-width: 100px !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    text-overflow: clip !important;
    white-space: nowrap !important;
    text-align: left !important;
    touch-action: pan-x !important;
    overscroll-behavior-x: contain !important;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_crumbs"] [class*="_crumbSeg"] {
    flex: 0 1 auto !important;
    min-width: 0 !important;
    justify-content: flex-start !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerActions"] {
    /* 断点 A（用户拍板 2026-09-19，全移动档无条件生效）：动作行不参与收缩，
       chips 按自然宽渲染，收缩职责全数交还 crumbs 滑动窗口当避震器。
       根因链：内容是字体相对的、预算是固定像素的——headless（CJK
       fallback 字体）文字窄、真机（另叠加 Android fontScale）文字宽，
       flex:0 1 auto 按 basis 比例收缩时行内唯一无下限的项是模式 label
       （min-width:0），真机截成「创造…」「Agent Te…」而 headless 全字。
       为什么无条件化：首版用 min-width:377 分档（按 390 假设视口的 k≈1.2
       破坏点推演），真机 diag 读数证伪——设备实测视口 360、dpr 3.5
       （vivo V2425A，Android 16，Chrome 151），整台设备落在档位之下，A 档
       从未绘制、旧收缩机制照跑、芯片照压；同一读数里无门的 stats 规则真机
       验证生效、A 档未生效，对照坐实是分档包裹死档而非声明无效。目标任何
       手机宽度芯片全字、极端窄屏靠滑窗降级不靠截断——分档与目标矛盾，删，
       flex 直接并入本几何规则唯一声明。新几何：lane 停缩后行内唯一可缩项
       是 crumbs（flex 1 1 auto，地板 72px；窗口帽 max-width:100px 是字体
       无关盒子，窗内 pan-x 滑动保证长标题可读），避震容量 = crumbs 自然
       宽−72（根会话约 28px、子代理会话双窗最多 128px；360 真机肥字体
       k>1.22 时 crumbs 触地板、残余走 cluster 横滑）。级联核查：本规则是
       全档唯一 flex 来源、无其他 flex 分量；rc 代 840 行是普通权重且
       prelude 不同（无 :has 门），被本条 importance 压制，无 order-tie。 */
    flex: 0 0 auto !important;
    width: auto !important;
    max-width: none !important;
    min-height: 36px !important;
    margin-left: auto !important;
    padding: 0 !important;
    border-top: 0 !important;
    justify-content: flex-end !important;
    /* 与 titleCluster 同步收到 4px（2026-09-23）：动作行里的 chip（任务 /
       谱系 / 团队）之间也只留 4px。 */
    gap: 4px !important;
    overflow-x: auto !important;
    scrollbar-width: none;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerActions"]::-webkit-scrollbar {
    display: none;
  }
  /* stats 行左端「N 轮」被裁且不可达（用户真机两帧 + headless 390 复现）：
     宿主 bOPqQW_root 是 justify-content:center 的横向滚动容器，内容溢出
     49px（scrollWidth 333 / clientWidth 284）时两侧对称各裁 ~50px——右侧
     scrollLeft 最大 49 可达，左侧起点 x=-34 是负坐标、scrollLeft 恒 ≥0
     永不可达，center+overflow 经典陷阱。改 flex-start 后溢出全落在右侧，
     滑动全程可达；取舍：内容放得下时行内从宿主的居中变左对齐（视觉差异
     仅空隙分布），功能缺陷（指标永久丢一段）优先。特异性 (0,3,0) 带
     !important 胜宿主 (0,1,0) 普通声明，与书写顺序无关；data-mobile-nav=
     "stats" 是 stats-line 效果打的稳定标记，无哈希、跨宿主代际可用。
     本条置于 ①嵌套块外：裁切陷阱与断点 A 的档位无关，全移动宽度生效。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [data-mobile-nav="stats"] {
    justify-content: flex-start !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [data-mobile-nav="files"] {
    width: 36px !important;
    height: 36px !important;
    flex: 0 0 36px !important;
    /* Keep the 36px seat the reference phone UI shows (opener box 316..352 at
       360px, icon 326..342): it is the geometry the lane's 46px reservation
       above is tuned against. Mirror the toggle's centre (top:6px for a 28px
       control -> centre y=20) by lifting the taller box to top:2px. */
    top: 2px !important;
  }
  /* 新宿主把「右侧栏入口」放进了 titleRow 的 headerCorner。手机上市宿右侧栏
     就是 Files 面板，所以它和插件的文件按钮是同一个面板的两个入口；而它带
     margin-right:-16px，36px 盒子在 360px 视口下会从文件按钮右侧漏出一角
     （2026-09-22 实测：corner [332,2 36x36]、图标 343..358 外露，被视口裁切），
     与参考图"右上角只有一个文件夹图标"不一致，也与插件自己的文件按钮重复。
     只针对标题行内的 corner，老一代宿主（corner 是唯一入口）不受影响。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="wSkVaW_titleRow"] > [class*="_headerCorner"] {
    display: none !important;
  }
  /* 右上角换人：0.1.6 把「右侧栏展开按钮」放进了 headerCorner，而插件的
     老规则「header > :first-child > :last-child 显示 none」在 0.1.5
     藏的是「会话日志胶囊」；新结构里 titleRow 的 :last-child 变成 corner，
     于是右侧栏入口被误藏、面板在手机上打不开。这里把 corner 放出来，
     同时让出「⋯」菜单那一格（360px 一行塞不下两个）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) > :first-child > :last-child[class*="_headerCorner"] {
    display: flex !important;
    flex: 0 0 auto !important;
    margin-left: 4px !important;
    margin-right: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerCorner"] button {
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
    min-height: 36px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerUtilities"] {
    display: none !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [role="tablist"] {
    width: 100% !important;
    margin-top: 4px !important;
  }
  /* 标签行右侧的两个状态 chip：
     · 后台任务 chip（dsh-client-ui-jobs 的 QsffPG_root）
     · 子代理谱系 chip（dsh-client-ui-subagent 的 ZKlsPq_root）
     它们在动作行里会和标题窗口 + 预设 + 文件抢同一条 flex，实测直接叠在一起
     （进子代理会话时最明显）。两块都绝对定位到「对话/轨迹」行右侧，动作行只留
     [预设][文件]；标签行右侧按 chip 宽度预留，标签变多横向滑动也不会钻到下面。
     两个 chip 同时存在时，子代理排在后台任务左边。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) {
    position: relative !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [role="tablist"] {
    padding-right: 8px !important;
    /* 宿主的标签行宽度是满宽、默认 content-box，加 padding 会把它顶到
       x=8..368（右缘越过 header 右缘 360 共 8px，header.scrollWidth-clientWidth=8），
       也就是下面那条 118px 预留里有 8px 落在屏外。补 border-box 把它收回来，
       预留才是"整整 118px"。 */
    box-sizing: border-box !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([class*="QsffPG_root"]) [role="tablist"] {
    padding-right: 118px !important;
  }
   /* Agent Team chip（VoX2oq_root，data-team-action）被 rc 代 pin 规则钉死
      （flex 0 0 auto + order 2，实测 98.7px），动作行里唯一可缩的模式 chip
      被压到 56.2px（390px 实测「创造模式」只剩「创造…」）。模式 chip 是
      手机端唯一的模式切换入口（pitfalls ⑤：必须保字），团队 chip 的完整
      文字在自己的面板里有承载（点开即达），所以让它先让：保持 order:2
      不变（创造在前、团队在后的次序不能翻），只把不可缩改成可缩，并加
      收缩下限保住图标点击区；内部省略号窗口由 rc 代的
      > button / > button > * 规则继续供给。特异性 (0,5,1) 高于 pin 规则
      (0,4,1)，且 !important，不依赖书写顺序；:has 门控保证 rc 宿主不命中。
      2026-09-23 下限 44 → 28（用户拍板）：宿主自己那条 @container(width<=480px)
      把标签藏了，手机档这颗 chip 实际只剩 14px 图标，44px 的盒子成了那一行
      最宽的空占位（真机 dpr 4：图标右缘 291 → 文件按钮图标左缘 326，观感 35px
      留白）。28 = 图标 14 + 宿主自带左右内边距 7（.VoX2oq_trigger padding），
      与本插件 toggle/files 同尺寸，不再额外扩拍击区。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [data-team-action][class*="_root"] {
    flex: 0 1 auto !important;
    min-width: 28px !important;
  }
  /* 团队 chip 图标在「标准模式」与文件按钮之间居中（2026-09-26 用户拍板）。
     真机 360px / dpr 4 实测（无障碍盒 = 绘制盒）：标准模式 205..274、团队 chip
     278..306、文件按钮 316..352 —— 左缝 4、右缝 10，盒心 292 落在区间心 295 左侧。
     只做绘制层位移（宿主 .VoX2oq_root 本来就是 position:relative，不新增包含块、
     也不动它自己的弹层锚定），布局一个像素不变：46px 承重预留保持原样（见
     pitfalls「header 拥挤」），文件按钮不会被压。位移后两缝 7/7，图标正好居中。
     只在真·手机档生效：768–1023 平板档排布不同，不套这台手机的魔数。 */
  @media (max-width: 767px) and (pointer: coarse) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [data-team-action][class*="_root"] {
      left: 3px !important;
    }
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_headerActions"] [class*="QsffPG_root"] {
    position: absolute !important;
    right: 8px !important;
    /* 和子代理 chip 同一套：贴 header 底边 + 下内边距 9px = 与标签文字齐平。 */
    bottom: 0 !important;
    height: 25px !important;
    min-height: 25px !important;
    /* 必须显式 flex：宿主 .QsffPG_root 只声明了 position:relative，是 block 容器，
       下面那条 align-items 在 block 上完全无效 —— 里面的 inline-flex 按钮会按基线
       落位，实测低 6.8px、内容挂出 header 下沿（69.5 -> 75.8），和第 11 条那类
       "chip 与标签行不齐平"是同一毛病。谱系 chip 的 .ZKlsPq_root 本身就是
       inline-flex，所以只有 jobs 这个 root 需要补。 */
    display: flex !important;
    align-items: stretch !important;
    z-index: 3 !important;
    margin: 0 !important;
    min-width: 0 !important;
    max-width: 118px !important;
    flex: 0 0 auto !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="QsffPG_root"] > button {
    height: 25px !important;
    min-height: 25px !important;
    padding: 0 2px 9px !important;
    line-height: 16px !important;
    align-items: center !important;
  }
  /* 头部弹层定位（jobs 任务列表 / subagent 谱系 / 预设菜单都会命中的同一族）：
     插件老规则是「弹层左缘 = chip 左缘 + 8px」，那条规则成立的年代 chip 都
     贴着 header 左缘；现在标题窗口 72px + 子代理 chip + 预设都靠中右，336px
     宽的面板会被整体推到视口外 —— 点开就像没反应。
     统一改成视口定位：贴在 header 下方、左右各留 8px 满宽展开；顺带脱离
     headerActions 的 overflow 裁剪（绝对定位的面板会被那个 auto 裁掉）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_menu"]:not([class*="_menuAnchor"]) {
    position: fixed !important;
    left: 8px !important;
    right: 8px !important;
    top: calc(env(safe-area-inset-top, 0px) + 80px) !important;
    bottom: auto !important;
    width: auto !important;
    max-width: none !important;
    max-height: calc(100dvh - 96px) !important;
  }
  /* 官方 agent-team 插件（@deepseek-ai/dsh-experimental-client-ui-agent-team）的
     TeamAction 弹层：根元素 data-team-action（VoX2oq_root，挂在 headerActions 槽
     order 20），面板 VoX2oq_panel 是 absolute 弹层。它和上面 _menu 族栽在同一个
     裁剪问题上 —— _headerActions 的 overflow 滚动盒把它整个裁掉（实测 390/360px
     视口均不可见、关闭键落在视口外），但类名不含 _menu，上面那条规则救不到，
     所以这里同款视口定位脱离裁剪。哈希前缀 VoX2oq_ 跨版本会变，按仓库约定用
     _panel 子串匹配；不会误伤其他弹层 —— data-team-action 根标记只有 agent-team
     插件在用，特异性 (0,5,1) 也高于 _menu 族的 (0,4,1)。代际上整条已由外层
     header:has([class*="_headerLeading"]) 门控，pre-alpha.2 宿主不命中。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [data-team-action] [class*="_panel"] {
    position: fixed !important;
    left: 8px !important;
    right: 8px !important;
    top: calc(env(safe-area-inset-top, 0px) + 80px) !important;
    bottom: auto !important;
    width: auto !important;
    max-width: none !important;
    /* 底部让位 composer 区：会话页 composer 卡顶缘实测 y=738、stats line
       到 840（844 视口，底部区共 106px）——原 max-height 100dvh-96px 让
       面板伸到 y=828，底部 90px 的任务列表被输入框盖住（2026-09-19 用户
       报障）。120px = composer 区 106px + 14px 呼吸间距；键盘弹出时 dvh
       收缩，面板随之再缩。 */
    max-height: calc(100dvh - 200px) !important;
    /* 面板虽被拖出头部渲染点，white-space 仍继承 0.1.6 头部的 nowrap
       （头部整行防换行是既有决策）——手机 374px 宽 + 长任务标题时内容
       单行撑出面板（实测 scrollWidth 541 / clientWidth 374，任务状态
       徽标被推到面板外 x=496 处）。恢复面板内正常换行。 */
    white-space: normal !important;
  }
  /* 子代理谱系 chip（ZKlsPq_root）：0.1.6 把它渲染在标题面包屑内部。进子代理
     会话时面包屑变成「父会话 / 当前会话」两段 + 这个 chip，动作行就叠在一起，
     所以整块搬到「对话/轨迹」这一行的空白区里居中，并与标签文字纵向对齐。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"] {
    position: absolute !important;
    /* 在「标签右侧的空白区」里居中（左边界让开对话/轨迹，约 104px），
       比整行居中往右一些。 */
    left: 104px !important;
    right: 8px !important;
    /* 纵向对齐标签：直接镜像标签的盒模型 —— 标签是「16px 行高 + 9px 下内边距」，
       总高 25px 且贴着 header 底边。chip 也做成 25px 高、bottom:0、下内边距 9px，
       内容区正好落在同一段 16px 里，文字必然与「对话/轨迹」齐平。 */
    bottom: 0 !important;
    height: 25px !important;
    min-height: 25px !important;
    align-items: stretch !important;
    z-index: 3 !important;
    margin: 0 auto !important;
    width: max-content !important;
    min-width: 0 !important;
    max-width: min(32vw, 116px) !important;
    flex: 0 0 auto !important;
  }
  /* 后台任务 chip 也在标签行时，聚合 chip 往左让出它那一格，仍保持居中。
     :not(_switcherRoot)：switcher 变体不参与让位——它由下面的专属定位规则
     右锚 right:8，若被本族 right:126 拖走，179.4 宽会横穿 tab 带（取证
     实测 84.6..264 盖住轨迹/记忆两 tab；headless 中任务已结束但
     QsffPG_root 仍在 DOM，:has 命中幽灵元素）；聚合态不受影响，让位语义
     原样保留。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([class*="QsffPG_root"]) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]) {
    right: 126px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"] > button {
    height: 25px !important;
    min-height: 25px !important;
    line-height: 16px !important;
    padding: 0 4px 9px !important;
    align-items: center !important;
  }
  /* 已知边界：标签行出现第三个标签时，标签总宽约
     252px，已经越过子代理 chip 居中区的左边界（104px），两者会叠在一起。
     这里用 :has() 按标签数量切换策略 —— ≥3 个标签时不再居中，改成停靠在标签行
     右侧的空白区（右缘 8px；有后台任务 chip 时让到 126px）。标签行本身可横向
     滑动，chip 不会被挤到下面，也不再盖住第三个标签：
       chip 占 268~352（宽 84），标签止于 8+252=260，右侧余量 8px。
     两个变体并列，兼容「tab 是 tablist 直接子按钮」与「tab 被容器包裹」两种渲染；
     两条变体均 (0,5,2)（带 QsffPG 的二次覆盖规则为 (0,6,2)），高于上面两条既有规则，
     不依赖书写顺序。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([role="tablist"] button:nth-of-type(3)) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]),
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([role="tablist"] > button:nth-child(3)) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]) {
    left: auto !important;
    right: 8px !important;
    margin: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([role="tablist"] button:nth-of-type(3)):has([class*="QsffPG_root"]) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]),
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]):has([role="tablist"] > button:nth-child(3)):has([class*="QsffPG_root"]) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]) {
    right: 126px !important;
  }
  /* 真机反馈：「标题下面多了一条灰色滑条」。第 4/5 条为了让长标题能左右拖着看，
     把面包屑做成了横向滚动容器 —— 实测 button.wSkVaW_crumb: overflow-x:auto、
     scrollWidth − clientWidth = 88；像素实测那条灰条是 x=40.0~89.5、高 7.8、
     拇指宽 ≈50 的圆角滚动条（100×100/188 ≈ 53，吻合）。
     本机 WebView 不认 scrollbar-width（CSS.supports 为 false），只有
     ::-webkit-scrollbar 生效；而且滚动条是「经典占位式」的 8px（合成容器实测
     offsetHeight − clientHeight = 8）。所以这里对整个会话头部统一掐掉滚动条：
     滑动能力保留，视觉上不再多一条。头部里任何位置的滚动条在 360px 宽的手机上
     都不是想要的，故不再按具体类名收窄范围。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]),
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) * {
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"])::-webkit-scrollbar,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) *::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  /* 单子代理运行态的 switcher 变体（宿主 SubagentHeaderLineage variant=
     "switcher"，根类是「基类 + 修饰类」双类 ZKlsPq_root ZKlsPq_switcherRoot，
     挂在 crumbs 内同一 lineage 槽位，a2 bundle line 615 实锤）：pin 规则按
     设计排除 _switcherRoot（切换器必须保持可缩），于是它从我方链里继承了
     零溢出约束——宿主 trigger 上限 max-width:244px 大于我方根帽 116px，
     根又没有 overflow，trigger 连同标题从右锚定的根左缘向右画出最多
     128px：真机 390 上文字冲到 ≈389、越过条带右缘 374，省略号点也在视口
     外，看起来像「无省略号」。聚合态「N 个子代理」类表不含 _switcherRoot，
     不被本条命中（结构锚区分，文本无关）。修法：根帽提到 min(46vw,180px)
     （数值可调，给运行中标题比计数 chip 更多余地）+ 根 overflow 收口 +
     trigger max-width:100%，让宿主自带的 title 省略号链（flex:1 +
     min-width:0 + ellipsis）在根内收口；svg 宿主自带 flex:none，⋮⋮/箭头
     图标与省略号共存；菜单是 position:fixed，不受根 overflow 裁剪，点击
     不受损。特异性与上面 ZKlsPq_root 规则同类同权 (0,4,1)，靠书写在后接管
     switcher 变体；h8S2Va 旧代是否有同名修饰类未取证，a2 (ZKlsPq_) 已实测
     对号。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_switcherRoot"] {
    max-width: min(46vw, 180px) !important;
    overflow: hidden !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="_switcherRoot"] > button {
    max-width: 100% !important;
    min-width: 0 !important;
  }
  /* switcher 定位（用户拍板 2026-09-19：右靠 + 与 tab 基线对齐）：基础规则
     把 switcher 与聚合 chip 一起居中/让位，取证实测 179.4 宽被推到
     84.6..264，整个压进 tab 带（tab 按钮 y 44-76、中心 y=60）盖住轨迹/
     记忆两 tab。本条用双类结构锚（聚合态类表无 _switcherRoot，零误伤）
     把 switcher 拉回右缘 8px 惯例位；top:48 使 25 高中心 60.5 ≈ tab 中心
     60，完成基线对齐——基础规则的 bottom:0 因 top+height+bottom 全非 auto
     过约束，按 spec 忽略 bottom、top 执政，行为确定。right:8 能落地靠上
     一条 yield 规则的 :not(_switcherRoot)（否则幽灵 QsffPG 在场时
     right:126 特异性更高会把 right:8 压掉，实测右缘 264 即此因）。
     360 真机推演：右锚后左缘 360−8−180=172 > tabs 端 ~126，46px 空隙，
     与 QsffPG 同场时本条让位取消后二者同靠右——QsffPG 真在场时由
     findHorizontalScroller/后续实测定去留（数值 48/8/180 均可调）。菜单
     position:fixed 独立定位层，不受本条影响（取证已证）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"][class*="_switcherRoot"] {
    left: auto !important;
    right: 8px !important;
    top: 48px !important;
  }
  /* 聚合 chip 右锚（用户拍板 2026-09-19：中置的子代理元素应右靠）：与
     switcher 同款右靠 + 基线（top:48 → 25 高中心 60.5 ≈ tab 中心 60；
     bottom:0 过约束被忽略、top 执政）。聚合 ~97 宽右锚后 285..382，无
     QsffPG 时零碰撞（tabs 端 ≤170）。:not(_switcherRoot) 把变体让给上面
     switcher 专属规则，二者匹配集不相交、无 order-tie。共场（QsffPG 在
     场）由既有 QsffPG yield 族接管（right:126 → 聚合 166.6..264）：126
     沿用 yield 族既有几何——按旧代 84 宽 chip（268..352）定的安全距，
     同时覆盖用户实测 31 窄态（349-380）；示例值 right:44 只够窄态、84 宽
     态会叠，不采纳。yield 的幽灵副作用（任务结束后聚合停在 264）无
     tab/QsffPG 重叠，属无害惰性，彻底解（JS 可见性标记）留 effects
     车道。聚合 max-width min(32vw,116) 沿用基础规则不动；数值 48/8 可
     调。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]) {
    left: auto !important;
    right: 8px !important;
    top: 48px !important;
  }
  /* 手机档（≤767 + coarse）：上面两条的 top:48 是按"标题行 40 + 页签行 36"的老几何
     推的（25 高中心 60.5 ≈ tab 中心 60）。本插件的手机档把页签行压到 26px 之后，
     真机页签文字落在 43..58（tab 盒 40..66），芯片还停在 48 ⇒ 文字 49..63、比
     "对话/轨迹"低 6px（店主 2026-09-23 截图报障："调了间距但忘记把这个调了"）。
     同特异性 + 同 !important 时后到先得，所以本条必须写在那两条之后：42 让芯片
     文字落到 43..57，与页签文字 43..58 对齐。平板档不压页签行，仍用 48。 */
  @media (max-width: 767px) and (pointer: coarse) {
    /* ⚠ 两个选择器都必须写成与上面两条**同特异性**：
       聚合变体的 48px 规则是 …[class*=ZKlsPq_root]:not([class*=_switcherRoot])，
       :not() 会把参数的特异性算进去 ⇒ (0,5,1)。我第一版第一个选择器写成通用的
       …[class*=ZKlsPq_root]（只有 (0,4,1)）⇒ 特异性输给那条 48px，
       店主实测"又没对齐了"（聚合芯片文字回到 49..63）。带上 :not(...) 才并列、
       再靠"后到先得"取胜。 */
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"]:not([class*="_switcherRoot"]),
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"][class*="_switcherRoot"] {
      top: 42px !important;
    }
  }
  /* 谱系 chip 里的文字（子代理标题 /「N 个子代理」）给一个规矩的省略号窗口：
     不要裁成半个字，也不要靠滚动去够剩下的字。 */
   /* :not([class*="_separator"])：rc 代有 (0,4,1) !important 的
      [class*="_crumbs"] [class*="_separator"] display:none 规则，专门隐藏
      谱系计数前的「/」（小屏上它读起来像多出一层面包屑层级）；本条原来
      同为 (0,4,1) !important 且书写在后，同特异性后到先得把 separator
      顶回 display:block（实测 390px separator [269.1,·,5.5,25] 实绘可见）。
      加 :not 把 separator 从本条管辖范围摘掉，隐藏权交还 rc 代那条。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([class*="_headerLeading"]) [class*="ZKlsPq_root"] span:not([class*="_separator"]) {
    display: block !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    min-width: 0 !important;
    max-width: 100% !important;
  }
  /* composer 模型选择 chip（dsh-client-ui-model-selection，样式哈希
     _7KE1Ra_）。2026-09-23 改档：真·手机档一律**只留图标**
     （IconDataOutlineRegular），模型名与 effort 不再常驻 —— 官方新加的语音
     按钮吃掉宽度后「图标+名字」把动作行挤爆；点图标打开菜单后再选模型。

     上游 0.1.7 已把这个能力做成契约：conversation 的 observeControlRow()
     实测 row 装不下时才打 data-model-compact，其 CSS
     「.uV2eYG_row[data-model-compact]」向下传
       --dsh-composer-model-text-display: none;
       --dsh-composer-model-icon-display: block;
     由 model-selection 消费：triggerIcon display:var(…icon…,none)、
     triggerLabel/triggerEffort display:var(…text…,block)。
     **旧规则 [class*="_7KE1Ra_triggerLabel"]{display:inline !important}
     正是把它顶掉的那一条** —— 图标被 compact 显形、名字又被我们拉回来，
     所以现场是"图标和名字同时出现"，也就是"上游代码里有、却不生效"。
     这里删掉它，并在 ≤767px 直接钉住这两个变量，不去赌宿主的实测结果
     （否则一旦某项变窄让 row 装得下，文字又会长回来，来回抖）。

     _7KE1Ra_ 是本代 model-selection 的样式哈希，包不在则整条死规则，无需
     另加代际门；必须带哈希前缀，裸 [class*=_triggerLabel] 会误伤
     permission-presets / settings-general 的同名片段。 */
  @media (max-width: 767px) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="_card"]:has(textarea, [data-composer-input]) [class*="_row"]:has([class*="_trailing"]) {
      --dsh-composer-model-text-display: none;
      --dsh-composer-model-icon-display: block;
    }
    /* 图标化后（上方变量钉死为 icon-only）宿主那套 padding:0 4px 0 8px 纯属
       浪费（左 8px 是给文字留的）。2026-09-23 店主第二轮："范围有点大、
       ⌄ 离图标远" ⇒ padding 归零、gap 归零，匣子只剩「图标 + ⌄」本身
       （实测墨迹间距 10px → ~4px，匣宽 46 → ~32px）。issue #101 对账：原与
       max-width 同块、无档位限定，768–1023 平板档文字在场时也被归零，chip
       内部「图标|模型名|effort|⌄」贴死 —— 2026-09-24 挪进本 ≤767 专档。 */
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="_7KE1Ra_trigger"] {
      padding: 0 !important;
      gap: 0 !important;
    }
    /* ⌄ 的 svg 自身带内边距（墨迹比 viewBox 窄），再拉近 2px。gap 归零后两个
       svg 的内边距会让墨迹直接贴住（实测墨迹连成一段），这里不再加负 margin，
       留 ~2px 呼吸 —— 间距从 10px 收到 2px。 */
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="_7KE1Ra_chevron"] {
      margin-left: 0 !important;
    }
  }
  /* 模型 chip 宽度预算（只对仍显示文字的 768–1023 平板档有意义）：宿主
     trigger 的 max-width min(360px,45cqw) 在窄容器下只给
     label+icon+effort+chevron 留 ~160px，模型名会省略成「GLM-5.3-Fla…」
     （headless 字体窄恰好放得下，同一盲区）。放宽到 60cqw，effort 有宿主
     自带 flex-shrink:1000 先让位。手机档文字已隐藏，这条不参与。特异性
     (0,3,0)+!important 胜宿主 (0,1,0) 普通声明；60 数值可调。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] [class*="_7KE1Ra_trigger"] {
    max-width: min(360px, 60cqw) !important;
    /* issue #101 对账：padding/gap 归零与 chevron margin-left:0 已分档至上方
       ≤767 专档（那是「图标化后」的前提）；768–1023 文字显示档保留宿主
       padding 0 4px 0 8px 与宿主 gap，⌄ 回宿主 margin。 */
  }
  /* --- Settings dialog on mobile ---
     Desktop: 800px two-column flex (188px nav + content). Mobile: a
     near-full-width sheet — nav tabs wrap into rows on top, option rows
     stay horizontal (title+description left, control right). Structural
     selectors are scoped to the unique aria-modal dialog; every
     settings-specific rule is gated with
     :has(> :first-child > :last-child > button) — the settings nav tab
     list holds <button> tabs, so the transient export dialog (the same
     primitives Modal, header(title+close)+description+body) keeps its
     official centered card layout. Requires :has() support
     (Chromium 105+, 2022).

     The directory picker (dsh-client-ui-directory-picker-browse) must be
     excluded too: its footer bar holds <button> children AND its breadcrumb
     trail (role="navigation") — which the role gate relies on to exclude
     it — is REPLACED by the path input in edit mode (pencil button), so
     without the ZuhsRW exclusion clicking the pencil would suddenly match
     this sheet rule: the dialog jumps to the top of the screen, the header
     (with the path input) is hidden by the > :first-child > :first-child
     display:none rule below, and the user can no longer type a path
     (issue #12, 2026-08-16). The picker family keeps the official layout
     on mobile in every mode.

     The keyboard-shortcut modal (dsh-client-ui-shortcuts, the same
     primitives Modal → data-shortcut-modal="shortcuts") needs the same
     exclusion for the same class of reason: its first child is the
     CONTENT column (nhfO0a_contents = header + search row + list +
     footer), not a nav row, and its footer holds <button> children, so
     the family predicate matched it and the sheet rules transposed the
     whole dialog — measured 2026-09-25 at 390px: the
     > :first-child { flex-direction: row } rule laid search row / list /
     footer SIDE BY SIDE (x=20 / 118 / 278, list 1296px tall, spilling
     far outside the sheet), and > :first-child > :first-child
     { display: none } swallowed the 「快捷键」 title together with its
     close button (owner report). The host tags every modal of this
     family: data-shortcut-modal="settings" on the settings sheet,
     "shortcuts" on this one — gating on that attribute (not on a hashed
     class) keeps the official centered card, the same treatment the
     export dialog gets. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) {
    position: absolute !important;
    left: 8px !important;
    /* Fixed top (no translateY): a transform on the panel combined with the
       panel overflowing the max-content drawer shifts the fixed overlay's
       coordinate frame, dragging the whole sidebar content off-screen. The
       safe-area inset keeps the sheet below the status bar / notch. */
    top: calc(env(safe-area-inset-top, 0px) + 12px) !important;
    width: calc(100vw - 16px);
    max-width: calc(100vw - 16px);
    /* Height follows the content (no dead space under a short page); it
       caps at the KEYBOARD-LESS viewport height minus 24 (less the safe-area
       top) and the options area scrolls only then. STABLE_VIEWPORT_VAR, not
       100dvh: measured 2026-09-25 on Android 16 WebView (adjustResize), the
       soft keyboard takes the layout viewport 754 -> 471 and vh / svh / lvh /
       dvh all follow it, so a dvh-sized sheet collapses a step the moment the
       shortcut modal's search field raises the keyboard — the reporter's
       「又闪一下」. The variable never moves for the keyboard, so the sheet
       keeps its size and the keyboard covers its lower half instead. */
    height: auto;
    max-height: min(800px, calc(100vh - 24px - env(safe-area-inset-top, 0px)));
    max-height: min(800px, calc(var(--dsh-web-mobile-vh, 100dvh) - 24px - env(safe-area-inset-top, 0px)));
    /* Only a real viewport change (rotation / window resize) reaches this now,
       so the short transition reads as a slide instead of a jump. */
    transition: max-height .2s var(--ds-ease-out, ease-in-out);
    flex-direction: column !important;
    border-radius: 14px !important;
    animation: dsh-web-mobile-sheet-in .22s var(--ds-ease-out, ease-in-out);
  }
  /* The settings sheet's dimmed mask fades in with the panel (the mask is
     the first child of the overlay that directly contains the sheet). */
  :has(> [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"])) > :first-child {
    animation: dsh-web-mobile-fade .18s var(--ds-ease-out, ease-in-out);
  }
  @media (prefers-reduced-motion: reduce) {
    [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]),
    :has(> [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"])) > :first-child {
      animation: none !important;
    }
  }
  /* The export dialog (not the settings sheet) must never overflow the
     viewport: the official centered card can be wider than 390px. */
  [aria-modal="true"]:not(:has(> :first-child > :last-child > button)) {
    max-width: calc(100vw - 32px);
  }
  /* Nav bar: hide the "Settings" caption (redundant on a full-width sheet)
     and wrap the tab list so every tab is visible — a horizontal scroll cut
     the last tab ("Plugins") off with no affordance to scroll. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child {
    width: 100%;
    flex-direction: row !important;
    align-items: center;
    gap: 6px;
    padding: 10px 12px 8px;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child > :first-child {
    display: none !important;
  }
  /* The tab strip stays clear of the toolbar: the toolbar (the close ✕ on
     this host — the config-file button is hidden below) is absolutely
     positioned over the nav row's right end (#105 A' — it stays at its
     React home in the content column; see below). The strip is pinned to
     ONE horizontal scroller: flex-wrap:nowrap + overflow-x:auto.
     2026-09-25, rc.2 portal regression: 0.1.7-rc.1 rendered this sheet in
     place (inside the app frame); rc.2 wraps it in
     createPortal(..., document.body) — diffed rc.1 vs rc.2 bundles, no
     createPortal before — so every :is([data-dsh-frame], [data-mobile-nav="frame"])-scoped
     dialog rule (the frame-era single-row scroller in compat.css among
     them) went dead the moment the overlay became a direct body child.
     What survived was this rule's own flex-wrap:wrap, which had been
     losing to the host's nowrap scroller and now had nothing to lose to:
     the cells broke into uneven rows (3/2/3/2/1 at 402px) whose first row
     slid under the 138px toolbar (config-file button + close) — the
     settings-sheet half of the owner's 2026-09-25 report. Pinning the
     scroller here makes the geometry host-generation independent again;
     the cells keep flex-shrink:0 + nowrap (rule below), the strip
     scrolls, and the hairline scrollbar is the affordance. The scroller
     VIEWPORT stops short of the toolbar zone: margin-right = toolbar
     width (36: the 32px round close + 4px) + 6px gap (measured
     2026-09-24) reproduces the reparent-era scroller geometry (its box
     ended 6px short of the toolbar). The strip must be anchored by its
     class. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navList"] {
    flex: 1 1 auto;
    min-width: 0;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    gap: 6px;
    margin-right: 42px;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }
  /* Hairline scrollbar for the tab strip: the default WebKit scrollbar
     reads fat on a phone; 2px keeps the scroll affordance without the
     bulk. (Portal-aware copies of the frame-scoped rules in compat.css,
     which died with the rc.2 portal move.) */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navList"]::-webkit-scrollbar {
    height: 2px !important;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navList"]::-webkit-scrollbar-thumb {
    background: var(--dsw-alias-border-l2, rgba(0, 0, 0, .22)) !important;
    border-radius: 1px !important;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navList"]::-webkit-scrollbar-track {
    background: transparent !important;
  }
  /* Cells stay whole inside the scroller: no shrink, no wrap, compact
     metrics. (Portal-aware copies of the frame-scoped rules in compat.css,
     which died with the rc.2 portal move.) */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navCell"] {
    flex: 0 0 auto !important;
    white-space: nowrap !important;
    padding: 6px 8px !important;
    gap: 6px !important;
    font-size: 13px !important;
    justify-content: flex-start !important;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :first-child [class*="_navCell"] svg {
    width: 14px !important;
    height: 14px !important;
    flex: none !important;
  }
  /* Content toolbar (close, plus the config-file button on hosts that
     render one): pinned over the nav row's right end, flush right.
     #105 A' — the toolbar stays at its React home (the content column's
     direct child) and is absolutely positioned against the dialog; the
     dialog is position:absolute itself, so it is the containing block
     and no new one is introduced. Constants measured 2026-09-24 (CDP,
     393px): the reparented toolbar — whose visual this replaces — sat
     at in-dialog dy=10 / fromRight=12, hence top 10px / right 12px.
     Out of flow, the toolbar's own row disappears and the options area
     starts right under the nav row; the navList's scroll viewport stops
     short of the toolbar with margin-right = toolbar width (36: the 32px
     round close + 4px) + 6px gap (measured). Children carry official
     auto-margins
     that would defeat flex-end, so neutralize them. The close button
     gets a round tappable base so it reads as its own control, not
     part of the outline button.
     Anchored structurally, not by class substring: a bare [class*="_header"]
     also matches every plugin settings card header in the options area —
     the official Plugins config cards (YyYd_a_header) and the dsh-web-ui-all
     group cards (Kwoi6G_header / Jh0q7G_header / rUBhvW_header; the bpnj3G_/jmhvDG_
     siblings were renamed upstream in dsh-web-all 0.3.20, verified 2026-09-18), all sharing the upstream template text-align:left,
     gap:12px, padding:14px 16px). The old broad anchor right-aligned their
     text, gutted the padding and painted a 32px gray circle behind the
     chevron (2026-09-05 sweep: 8 bleeding headers). The toolbar's one
     structural home is the content column's direct child (the panel's
     :last-child); the post-reparent nav-row home died with the
     settings-toolbar-reparent task. Card headers live deeper — inside
     the options scroll area — and match neither, so no per-plugin hash
     guards are needed. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > [class*="_header"]:not([class*="_headerActions"]) {
    position: absolute;
    top: 10px;
    right: 12px;
    /* z-index is load-bearing since 0.1.7-rc.2 (owner report 2026-09-25):
       the sheet is portaled to <body>, and the market page (dshmarket's
       nUhMVa_root, position:relative, z:auto) paints AFTER this header in
       DOM order — both are z:auto positioned, so the market head covered
       the pinned toolbar: the close ✕ stayed visible through the head's
       transparent right end but hit-testing returned the head, so tapping
       the ✕ did nothing ("按了关闭没用"). z-index lifts the toolbar into
       the painted-above layer: above the market root and its sticky list
       heads (.stickyHead z:5), still below the market's own transient
       layers (.opPanel z:40, .lightbox z:10000) which SHOULD cover it.
       Settings view: the toolbar sits over the nav row's reserved right
       end (margin-right 42px), so nothing there to cover or be covered. */
    z-index: 10;
    flex: 0 0 auto;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 0 0 0 4px;
    /* Hug the close ✕ only: the host header box is 54px tall, and with the
       actions hidden its empty lower half (above the market's "导出日志"
       button, which starts ~13px under the ✕) formed a dead zone that
       ate the export button's top-right corner once z-index lifted the
       toolbar above it (owner report follow-up 2026-09-25). 32px = the
       close's own height, so the toolbar's box ends where the ✕ ends. */
    height: 32px;
    min-height: 32px;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > [class*="_header"]:not([class*="_headerActions"]) > * {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > [class*="_header"]:not([class*="_headerActions"]) > :last-child {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50% !important;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, .06)) !important;
  }
  /* 32px is under the ~44px touch minimum and this ✕ shares the corner
     with the market's version text (above-left) and its export button
     (below-left) — the owner's "很容易误触" report 2026-09-25. Extend the
     HIT area only (no visual change): the pseudo-element grows up, left
     and right by 6px — never downward, where the market's "导出日志"
     button starts ~13px under the ✕'s bottom edge and must keep its own
     top-right corner. Anchored to the button (position:relative above),
     so the extension travels with the pinned toolbar. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > [class*="_header"]:not([class*="_headerActions"]) > :last-child::after {
    content: "";
    position: absolute;
    inset: -6px -6px 0 -6px;
    border-radius: 50%;
  }
  /* The config-file action (a settings.action slot — dsh-version-update's
     "打开配置文件") is hidden on phones: it is rarely needed here, and its
     ~94px next to the 32px close made the pinned toolbar 138px wide —
     wide enough to swallow the nav strip's first cells while the strip
     still wrapped (2026-09-25 report, the other half of the same
     regression as the scroller fix above). The close ✕ is the toolbar's
     SIBLING, not its child (verified in the live DOM: header children are
     [actions, close]), so hiding the actions never removes the way out.
     Desktop keeps the button: this whole block sits inside the mobile
     media wrapper. (Portal-aware replacement for the frame-scoped rule in
     compat.css, which died with the rc.2 portal move.) */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > [class*="_header"]:not([class*="_headerActions"]) [class*="_actions"] {
    display: none !important;
  }
  /* Appearance mode cards: the official cube row renders three tall
     vertical cards (~268px) that eat half the sheet. Turn them into a
     compact horizontal trio (icon + label inline, equal widths).
     Relies on the official cube-row class name of this version. */
  [aria-modal="true"] [class*="_cubeRow"] {
    gap: 6px;
  }
  [aria-modal="true"] [class*="_cubeRow"] > * {
    flex: 1 1 0;
    flex-direction: row !important;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 8px;
    min-height: 0;
  }
  /* Content: the options scroll area gets bottom breathing room so the last
     row never sits flush against the sheet's rounded corner. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child {
    flex: 1 1 auto;
    min-height: 0;
  }
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])):not([data-shortcut-modal="shortcuts"]) > :last-child > :last-child {
    padding: 0 12px 24px;
  }
  /* 0.1.6-alpha.2 宿主的插件管理页（dsh-client-ui-plugin-manager 渲染的
     section[data-plugin-panel]）。FAB 是全站恒定的左上角控件（用户明确
     要求：右下角不对，就放左上角），所以规则不做的是挪 FAB，做的是给
     面板自己的左上角内容让位。两个页面都要让，偏移量同一个：
     - 列表页：**有**内容在左上角 —— H1「插件」实测 [24,28,91,28]，与 FAB 盒
       [10,12,38,38] 重叠 24×22；点标题左缘命中的是 FAB 而不是标题
       （2026-09-19 报障）。上一版这里记的是「热区为空、零规则」，实测不成立。
     - 详情页（DetailTop 组件）：宿主返回键「返回插件列表」crumb，文字实测
       [24,28,70,19]，同样压在 FAB 左半——点它会触发开抽屉而不是返回。
       详情根的 data-* 标记有三种：内置插件详情 data-plugin-item-detail、市场
       插件详情 data-plugin-row-detail、builtin 详情 data-plugin-detail
       （实测「智能体团队」卡走的就是第三种），三条选择器并列全覆盖。
     让位量 = FAB 右缘（10 + 38 = 48）+ 8px 间距 = 56px，**写成相对量**：
     减掉宿主自己的 padding（clamp(24px,4vw,48px)），这样它跟着视口走，而不是
     把 390px 上量到的 32px 钉死（768px 平板上宿主 padding 是 30.7px，钉死的
     32px 会过量）。在 390px 上它算出来正好还是 32px，与上一版行为一致。
     锚点全部是宿主 data-* 标记，比 css-module 哈希类（X_2TxG_）稳定；
     pre-alpha.2 宿主没有这些标记，规则天然不命中（代际门控）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] {
    --dsh-web-mobile-panel-clearance: calc(56px - clamp(24px, 4vw, 48px));
  }
  /* 页首是宿主滚动盒的直接子元素，宿主给它 width:100%（.X_2TxG_page>*）。
     这种盒子上用 margin 会把整行顶出右缘、给面板加出一条横向滚动条，所以
     这里用 margin + 等量收窄：margin 盒仍是 100%，左缘让开 FAB，右缘不动
     （工具栏「添加插件」保持贴右）。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [class*="_pageHead"] {
    margin-left: var(--dsh-web-mobile-panel-clearance) !important;
    width: calc(100% - var(--dsh-web-mobile-panel-clearance)) !important;
  }
  /* 详情 crumb 是被拉伸的 flex item（没有 width:100%），margin 就是对的工具。
     **0.1.7-rc.2 起「直子」形态落空**：宿主把 crumb 套进了 DetailTop 的根盒
     （实测链 [data-plugin-detail] > div.X_2TxG_detailTop > button.X_2TxG_crumb），
     于是上面三条「> button:first-child」在详情页全部 matches()=false ——
     crumb 的 margin-left 计算值 0px，停在宿主 padding 上：盒 [24,28,342,14]、
     自带箭头图标 [24,28,14,14]、文字 span x=44，整条压在 FAB 盒
     [10,12,38,38]（右缘 48）里 —— 图标 14px 全遮、文字首字压 4px；
     elementFromPoint 在图标中心与文字首字处都命中 FAB，点「返回插件列表」
     实际触发的是 FAB 的 exit-panel（2026-09-25 报障截图同形）。
     所以保留直子三条（旧代宿主仍走它们），再按 crumb 自己的哈希片段补三条
     后代选择器。片段取「_crumb」：同前缀的 svg.crumbIcon 不是 button 天然排除，
     本子树里也没有别的 crumb 家族（文件面板 ZuhsRW_crumb* 在另一棵树）。
     实测让位后 crumb 变 [56,28,310,14] —— flex 拉伸项自己收窄 32px，无横向
     溢出（面板 scrollWidth 恒 390），点文字可正常返回列表。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-detail] > button:first-child,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-item-detail] > button:first-child,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-row-detail] > button:first-child,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-detail] button[class*="_crumb"],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-item-detail] button[class*="_crumb"],
  :is([data-dsh-frame], [data-mobile-nav="frame"]) section[data-plugin-panel] [data-plugin-row-detail] button[class*="_crumb"] {
    margin-left: var(--dsh-web-mobile-panel-clearance) !important;
  }
  /* 快捷键弹层在手机上的落地形态。上面那条 :not([data-shortcut-modal="shortcuts"])
     只是把它从设置面板家族里摘出来、还它官方的内部排版（2026-09-25 实测：纵向列
     回来了、标题「快捷键」回来了、列表 441px 可滚、无横向溢出、docScrollWidth
     恒 390）。但官方的外框在手机上仍会「抽搐」：宿主 Modal 的 _root 是
     position:fixed; inset:0; align-items:center（视口居中），而弹层打开时会自动
     聚焦搜索框（实测 activeElement = INPUT「搜索快捷键」），手机随即弹软键盘 ——
     视口一缩，居中卡片就整体重排/回弹，肉眼即抖动。所以这里给它插件自己的「纸片」
     几何：顶部锚定（键盘怎么变，上缘都钉在 12px）+ 与设置面板同款左缘/宽度/圆角/
     入场动画。高度沿用宿主的 600px：nhfO0a_contents 是 flex:1 1 0%，要有一个确定的
     高度才撑得开列表，故不改成 auto；max-height 再按视口收口，超出的部分进列表自己
     的 scroll（_list 已是 flex:1 + min-height:0 + overflow-y:auto），与设置面板同款。
     宿主那 30px 的 translateY 是桌面居中卡的微调，顶部锚定后必须归零。 */
  [aria-modal="true"][data-shortcut-modal="shortcuts"] {
    position: absolute !important;
    left: 8px !important;
    top: calc(env(safe-area-inset-top, 0px) + 12px) !important;
    width: calc(100vw - 16px) !important;
    max-width: calc(100vw - 16px) !important;
    /* 同上：键盘不进这层的高度。这一层下面就是键盘，卡片缩一次就一定被看见，
       所以用「不含键盘的视口高度」定高 → 点搜索框时卡片纹丝不动，键盘盖住下半截。 */
    max-height: min(760px, calc(var(--dsh-web-mobile-vh, 100dvh) - 24px - env(safe-area-inset-top, 0px))) !important;
    transition: max-height .2s var(--ds-ease-out, ease-in-out);
    transform: none !important;
    border-radius: 14px !important;
    /* 不做透明度淡入。改动前（#124 修法二刀，2026-09-25）设置面板的
       dsh-web-mobile-sheet-in 还带 opacity 段，而本层叠在**同样全宽全白**的
       设置面板上，淡入的 .22s 里两层文字互相透出：CDP screencast 逐帧实拍
       （390×844）第 10-15 帧能看到「权限/语言/外观」与「快捷键速查/新会话」
       重影，肉眼就是「闪」。该刀后 sheet-in 已是纯滑入，不再有透明度重影的
       机制；本层维持瞬时出现（不写 animation 会落回宿主的 _modalEnter，
       同样是透明度淡入）；遮罩自己的淡入保留，整体仍是一次正常的弹层出现。 */
    animation: none !important;
  }
  /* 手机档收掉搜索行（报障人拍板 2026-09-25：「加回来又闪了，不要这个了，手机上也不怎么用」）。
     因果已由报障人两次实机复现钉死：**行在 → 打开就闪；行藏 → 不闪**。机理：宿主 Modal 会把
     焦点抢到 [data-modal-autofocus]（就是这个搜索框），键盘在弹层打开那一瞬就抬起来，布局
     视口随之 754→471，整页重排 —— 就是「全屏闪」。收掉这个唯一的文本输入，弹层里就再也
     弹不出键盘，那一步不存在；而不是靠 focus 影子去拦（那条守卫在这台引擎上并不总是拦得住）。
     只做 CSS 隐藏，**绝不删宿主节点**：宿主是 React 渲染的，删掉它卸载时 parent.removeChild
     会抛 NotFoundError，被 SlotErrorBoundary 吞掉后整个 slot 变空白（见 pitfalls「搬宿主
     React 节点」）。想恢复搜索只需删掉这两行，但要接受打开瞬间那一下全屏闪。 */
  /* 手机档（窄屏）才收；768–1023 的平板档与桌面档照旧保留搜索
     （报障人 2026-09-25 拍板：「手机端不要了，平板电脑端照旧」）。 */
  @media (max-width: 767px) {
    [aria-modal="true"][data-shortcut-modal="shortcuts"] [class*="_searchRow"] {
      display: none !important;
    }
  }
  /* 这一层的遮罩也在每次挂载时跑宿主的 _modalEnter（0.2s 透明度淡入）：全屏亮度在
     0.24 档上渐变一次，肉眼看就是「全屏闪」。上一版只掐了卡片自己的动画、**故意保留**
     了遮罩的淡入；报障人 2026-09-25 的反馈（「全屏闪」）说明那一步同样看得见。
     这里连同卡片一起瞬时化：弹层与遮罩同帧出现、同帧消失，中间没有渐变。 */
  :has(> [aria-modal="true"][data-shortcut-modal="shortcuts"]) > [class*="_mask"]::after {
    animation: none !important;
    /* 手机档这个弹层只能从设置面板里打开，而设置面板自己已经压了一层 0.24 的遮罩；
       再叠一层就是全屏暗度 0.24 → 0.42 的一步 —— 报障人说的「全屏闪」。这一层不再
       重复变暗：屏幕的整体明暗在弹层开合前后完全一致，剩下的变化只有卡片本身。 */
    background: transparent !important;
  }
  /* ---------- sidebar panel enter / exit (see effects/panel-exit.ts) ----------
     A sidebar panel REPLACES the main area. Two motions, both short and
     horizontal, matching the drawer's own rail-in (.15s, translate + fade):
       · enter — the panel slides in from the right;
       · exit  — the panel does NOT animate out; the conversation it hands the
         main area back to fades in instead.
     The asymmetry is deliberate. selectPanel(null) remounts the whole
     conversation and that commit blocks the main thread long enough to matter
     (measured on a phone: ~390 ms for a long session), so fading the panel out
     first would leave the screen blank for that whole window — panel already
     transparent, conversation not mounted yet. Keeping the panel opaque until
     the commit means the two swap on one frame.
     The enter rule is a CSS condition on purpose: :has() matches in the same
     commit that swaps the main slot, so the animation is already running at the
     element's first style resolution and there is no full-opacity frame first.
     The exit marker is set by JS before the swap for the same reason. */
  @keyframes dsh-web-mobile-panel-in {
    from { opacity: 0; transform: translateX(16px); }
  }
  /* Deliberately NOT reusing dsh-web-mobile-fade: the exit cleanup listens on
     animationend BY NAME, and that keyframe also runs on the backdrop and the
     dialogs, which are frame descendants too — reusing it would end the
     transition early. */
  @keyframes dsh-web-mobile-panel-reveal {
    from { opacity: 0; }
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]):has([class*="panelRow"][aria-current="page"]) [class*="_centerCol"] > * > * {
    animation: dsh-web-mobile-panel-in .15s var(--ds-ease-in-out, ease-in-out) backwards;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-mobile-panel-exit]:not(:has([class*="panelRow"][aria-current="page"])) [class*="_centerCol"] > * > * {
    /* ease-out rather than the shared in-out curve: the panel vanishes and the
       conversation appears on the same frame, so the fade has to come up fast
       or the first frames read as a flash of empty background. */
    animation: dsh-web-mobile-panel-reveal .15s cubic-bezier(0, 0, .2, 1) backwards;
  }
  @media (prefers-reduced-motion: reduce) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]):has([class*="panelRow"][aria-current="page"]) [class*="_centerCol"] > * > *,
    :is([data-dsh-frame], [data-mobile-nav="frame"])[data-mobile-panel-exit]:not(:has([class*="panelRow"][aria-current="page"])) [class*="_centerCol"] > * > * {
      animation: none !important;
    }
  }

  /* ---------- DSHA 集成层：预设 chip 布局（宿主 @deepseek-ai/dsh-client-ui-agent-preset
     的 DSHA 补丁标记 .dsha-preset-header-anchor / [data-dsha-agent-preset]）。
     按 CSS 宽分两档，自动切换：
     ① 结构修正：图标与下拉箭头都是 position:absolute; left:0，会双双叠在
        「标准模式」文字上。这是宿主 DOM 决定的 bug，**任何手机档都要修** ——
        否则换到 768–1023 的平板/折叠屏就复现同一处叠字。
     ② 按 360px 实测钉出来的调优值（left 归零、团队 chip 在场时预设名 4 字上限）：
        只在「真·手机」档（CSS 宽 ≤ 767px，对齐上游 768px 平板档边界）生效；
        768–1023 保留上游手机 UI 的排布，不套这台手机的魔数。
     非 DSHA 宿主上没有这些标记，整块天然不命中（死规则）。 ---------- */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor {
    order: 1;
    width: max-content;
    flex: 0 1 auto;
    min-width: 0;
    max-width: min(40vw, 130px);
    margin-left: auto;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"] {
    display: inline-flex !important;
    align-items: center;
    gap: 4px;
    width: 100%;
    max-width: 100%;
    height: 36px !important;
    min-height: 36px !important;
    /* 左右内边距 6 → 4（2026-09-23 用户拍板）：与 6 → 4 的三级间隙一起，
       把「标准模式 / 智能体 / 文件夹」收成一组；文字本身不受影响。 */
    padding: 0 4px;
    border: 0;
    background: transparent;
    font: inherit;
    font-size: 12px;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"] > svg {
    position: static !important;
    transform: none !important;
    flex: 0 0 auto;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"] > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* 预设 chip 的 ⌄ 翻转（上游/DSHA 都没给这个 v 做开合指示；子代理 chip 有宿主自带的）。
     两件事必须同时成立才修得好：
     ① 上面那条 > svg 写过 transform: none !important，任何旋转都会被它压死 —— 这里用
        svg:last-of-type 提高特异性 + !important 接管，**不去删那条通用规则**（它还管着图标 svg）。
     ② 钩子各走各的：预设 chip 只有 aria-expanded 属性，子代理 chip 是宿主自己的
        .ZKlsPq_triggerOpen 类。所以这里只锚 [data-dsha-agent-preset="header"]，
        **完全不碰子代理芯片**，改这边不会把那边压掉。
     svg:last-of-type 取 chip 里最后一个 svg（下拉箭头）；只有一个 svg 时同样命中。
     时长 .12s 与子代理 chip 自带的 transition 一致，两个 v 观感统一。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"] > svg:last-of-type {
    transition: transform .12s;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"][aria-expanded="true"] > svg:last-of-type {
    transform: rotate(180deg) !important;
  }
  @media (prefers-reduced-motion: reduce) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor [data-dsha-agent-preset="header"] > svg:last-of-type {
      transition: none !important;
    }
  }
  /* ② 真·手机档（CSS 宽 ≤ 767px）才生效的调优值。 */
  @media (max-width: 767px) and (pointer: coarse) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header .dsha-preset-header-anchor {
      /* 宿主 cubgiG_menuAnchor 带 left:-8px（原本是给弹层对位用的），
         手机上和标题窗口右缘叠 2px；这里把它拉回 0，整体右移 8px。 */
      left: 0 !important;
    }
    /* 智能体团队 Web 开启后头部多一个 Agent Team chip；预设名超过 4 个字就会
       把它挤掉（实测 6 个字时 Agent Team 被裁成「Agent Te」并压住文件按钮）。
       此时把预设名收成 4 个字 + 省略号 —— 完整名字在预设菜单里点开即达。 */
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase] header:has([data-team-action]) .dsha-preset-header-anchor [data-dsha-agent-preset="header"] > span {
      max-width: 4em;
    }
  }
  /* ---------- 会话行的 ⋯ 菜单在触屏常显（2026-09-22 交互契约） ----------
     宿主只在 :hover 和 menuOpen 时显示 _rowActions，而手机没有 hover。
     长按以前是触屏进这个菜单的唯一路径，现在长按改成「改会话名」（见
     phone-chrome.ts 的 requestRowRename → 标题 dblclick），所以把锚点常显，
     删除 / 归档 / 分叉 继续有触屏入口。行内布局不动：标题是 flex:1 +
     min-width:0，自己让位并省略；host 的 time / pinIndicator 保持原样。
     只作用于抽屉里的会话行，搜索行（searchResultRow）不受影响。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="sessionRow"] [class*="_rowActions"] {
    display: inline-flex !important;
  }
}
`;
};
__modules["styles/compat.css.js"] = function (require, module, exports) {
"use strict";
// compat — split from src/client/mobile.css.ts (2026-08-16), order preserved.
// Self-contained: every rule here is mobile-only and the media query opens
// and closes in this file. Concatenation order still matters for the
// cascade (compat intentionally overrides layout), just not for syntax.
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPAT_CSS = void 0;
exports.COMPAT_CSS = `@media (max-width: 1023px) and (pointer: coarse) {
  /* ---------- dsh-web-ui family compatibility ----------
     The linxin666 plugin suite extends the shell frame directly:
       - aionui-panel appends two trailing grid columns (explorer / preview)
         plus absolute drag handles to [data-dsh-frame]; its 5-track inline
         grid is already overridden above, but the handles and columns would
         still float over the main UI. On mobile the columns leave the grid
         as floating bottom sheets and keep their own visibility state —
         the suite's collapse chevron / preview tabs still work, so no
         feature is lost. The task-board / ssh plugins inject sidebar
         entries and center-column takeover panels; the entries need
         spacing and the kanban needs scrollable columns. */

  /* Touch devices: the drag handles are useless — the floating expand
     button is the opener. */
  .aionui-explorer-handle,
  .aionui-preview-handle {
    display: none !important;
  }

  /* Shared base: both columns leave the grid as floating panels. The
     explorer is gated shut by default (its own persisted expanded state
     must never cover the mobile UI on load); the header Files action opens
     it via the frame marker below, and the sheet's own collapse chevron
     clears it. Preview stays owned by the suite (hidden while no tab is
     open). The per-column rules below override the geometry. */
  [data-aionui-explorer-col],
  [data-aionui-preview-col] {
    position: fixed !important;
    z-index: 55 !important;
    background: var(--aion-bg-base, #ffffff) !important;
    border-left: none !important;
  }
  /* Explorer (file tree) bottom sheet: bottom edge aligned exactly with
     the composer card's bottom line — the card sits 36px above the
     viewport bottom (8px composer padding + the 28px stats strip below
     the card), so the sheet uses the same 36px bottom offset. */
  [data-aionui-explorer-col] {
    visibility: hidden !important;
    left: 8px !important;
    right: 8px !important;
    top: auto !important;
    bottom: 36px !important;
    width: auto !important;
    height: min(55dvh, 460px) !important;
    max-height: calc(100dvh - 44px) !important;
    border-radius: 14px !important;
    overflow: hidden !important;
    box-shadow: 0 -4px 28px rgba(0, 0, 0, .18) !important;
    animation: dsh-web-mobile-sheet-up .24s var(--ds-ease-out, ease-in-out) !important;
  }
  /* Preview (file content) bottom sheet. Gated shut by default: the suite
     persists open preview tabs in localStorage and restores them on load,
     which would pop the sheet over the fresh UI. The client only sets the
     frame marker after the user taps a file row in the explorer; the
     suite's own collapse chevron clears it via the visibility watcher. */
  [data-aionui-preview-col] {
    visibility: hidden !important;
    position: fixed !important;
    left: 8px !important;
    right: 8px !important;
    top: auto !important;
    bottom: 40px !important;
    width: auto !important;
    height: min(50dvh, 420px) !important;
    max-height: calc(100dvh - 48px) !important;
    border-radius: 14px !important;
    overflow: hidden !important;
    box-shadow: 0 -4px 28px rgba(0, 0, 0, .18) !important;
    z-index: 56 !important;
    animation: dsh-web-mobile-sheet-up .24s var(--ds-ease-out, ease-in-out) !important;
    /* Fullscreen toggle (issue #8): animate the geometry change instead of
       snapping. visibility is deliberately not listed, so opening/closing
       the sheet stays instant; the open/close keyframes own transform. */
    transition:
      left .24s var(--ds-ease-out, ease-in-out),
      right .24s var(--ds-ease-out, ease-in-out),
      top .24s var(--ds-ease-out, ease-in-out),
      bottom .24s var(--ds-ease-out, ease-in-out),
      width .24s var(--ds-ease-out, ease-in-out),
      height .24s var(--ds-ease-out, ease-in-out),
      border-radius .24s var(--ds-ease-out, ease-in-out),
      box-shadow .24s var(--ds-ease-out, ease-in-out),
      padding-top .24s var(--ds-ease-out, ease-in-out) !important;
  }
  /* User-opened preview sheet (frame marker, set on file-row tap). */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-aionui-preview-open] [data-aionui-preview-col] {
    visibility: visible !important;
  }
  /* The Files action opens the explorer sheet (frame marker). */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-aionui-explorer-open] [data-aionui-explorer-col] {
    visibility: visible !important;
  }
  /* While the preview sheet is up, the explorer sheet yields (two stacked
     bottom sheets would read as one broken overlay). Closing the preview
     via its collapse chevron / tab close clears the marker, and the
     explorer sheet returns. Same specificity as the explorer-open rule, so
     this must stay AFTER it. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-aionui-preview-open] [data-aionui-explorer-col] {
    visibility: hidden !important;
  }
  /* The open drawer must never sit under a sheet: while the frame is in the
     narrow-expanded state both sheets yield (later in the file than the
     open marker rule, so it wins at equal specificity). The fullscreen
     toggle is a descendant of this column, so it is hidden with the rest of
     the column — there is no separate drawer-open rule for it. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]):not([data-sidebar-collapsed]) [data-aionui-explorer-col],
  :is([data-dsh-frame], [data-mobile-nav="frame"]):not([data-sidebar-collapsed]) [data-aionui-preview-col] {
    visibility: hidden !important;
    display: none !important;
  }
  /* The suite's own expand button reads the store state we bypass on
     mobile — hide it; the header Files action is the opener. */
  .aionui-floating-expand {
    display: none !important;
  }

  /* Preview sheet fullscreen toggle (issue #8): a fixed button parked in the
     sheet's titlebar row, just left of the suite's collapse chevron (24px at
     right:8px of the sheet, and the sheet spans 8px..(100vw-8px)). The top
     calc mirrors the sheet geometry above (bottom 40px + min(50dvh, 420px));
     when the frame carries "data-mobile-preview-full" the sheet goes
     fullscreen and the button moves to the viewport corner. */
  [data-mobile-nav="preview-full-toggle"] {
    position: absolute !important;
    right: 36px !important;
    top: 8px !important;
    z-index: 57 !important;
    display: none !important;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: var(--aion-text-secondary, var(--dsw-alias-label-secondary, inherit));
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    /* Native look: same size/radius/hover language as the suite's tab-bar
       icon buttons (the 20px panelCollapse next to it). The button lives
       INSIDE the preview column, so it rides the sheet's own open
       animation and geometry transition — no curve matching needed. */
    transition: background-color .15s, top .24s var(--ds-ease-out, ease-in-out);
  }
  [data-mobile-nav="preview-full-toggle"]:hover {
    background: var(--aion-bg-3, rgba(0, 0, 0, .22));
  }
  [data-mobile-nav="preview-full-toggle"]:active {
    background: var(--aion-bg-active, rgba(0, 0, 0, .28));
  }
  [data-mobile-nav="preview-full-toggle"]:focus-visible {
    outline: 2px solid var(--dsw-alias-state-business-primary, #4f6ef7);
    outline-offset: 2px;
  }
  [data-mobile-nav="preview-full-toggle"] svg {
    width: 14px;
    height: 14px;
  }
  /* Keep the last tab (and the "+" URL-tab trigger) from sliding under the
     fullscreen toggle: reserve the right end of the preview tab row. */
  [data-aionui-preview-col] [class*="_tabScroll"] {
    padding-right: 34px !important;
  }
  /* Visible only while the preview sheet is open. Visibility itself is
     inherited from the column, so the sheet's own hide rules (collapse,
     drawer open) cover the button too. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-aionui-preview-open] [data-aionui-preview-col] [data-mobile-nav="preview-full-toggle"] {
    display: inline-flex !important;
  }
  /* Icon swap on the frame fullscreen marker. */
  [data-mobile-nav="preview-full-toggle"] .dsh-web-mobile-full-out {
    display: none !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-mobile-preview-full] [data-aionui-preview-col] [data-mobile-nav="preview-full-toggle"] .dsh-web-mobile-full-in {
    display: none !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-mobile-preview-full] [data-aionui-preview-col] [data-mobile-nav="preview-full-toggle"] .dsh-web-mobile-full-out {
    display: inline !important;
  }
  /* Fullscreen preview: the sheet fills the whole viewport (notch included);
     the safe-area padding drops the titlebar row below the status bar, and
     the toggle follows the titlebar into the top corner. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-aionui-preview-open][data-mobile-preview-full] [data-aionui-preview-col] {
    inset: 0 !important;
    left: 0 !important;
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100dvh !important;
    max-height: none !important;
    box-sizing: border-box !important;
    padding-top: env(safe-area-inset-top, 0px) !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    z-index: 57 !important;
    animation: none !important;
  }
  /* Fullscreen: the column fills the viewport, so the button follows the
     titlebar row down below the notch. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-mobile-preview-full] [data-aionui-preview-col] [data-mobile-nav="preview-full-toggle"] {
    top: calc(env(safe-area-inset-top, 0px) + 8px) !important;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-aionui-preview-col],
    [data-mobile-nav="preview-full-toggle"] {
      transition: none !important;
      animation: none !important;
    }
  }

  /* dsh-web-ui sidebar entries (task board / ssh) sit flush against each
     other — give the injected rows breathing room. */
  button[data-dsh-taskboard-entry],
  button[data-dsh-ssh-entry] {
    margin-bottom: 8px !important;
  }

  /* Task board: five kanban columns at minmax(0,1fr) crush into ~78px phone
     strips. Give every column a usable minimum and let the row scroll. */
  [data-dsh-taskboard-board] > [class*="_columns"] {
    grid-template-columns: repeat(5, minmax(240px, 1fr)) !important;
    overflow-x: auto !important;
  }
  /* The floating button must not float over a takeover panel (task board /
     ssh own the center column while active). */
  html[data-dsh-taskboard-active] [data-mobile-nav="fab"],
  html[data-dsh-ssh-active] [data-mobile-nav="fab"],
  html[data-dsh-taskboard-active] [data-mobile-nav="backdrop"],
  html[data-dsh-ssh-active] [data-mobile-nav="backdrop"] {
    display: none !important;
  }
  /* Board header: let the search field take the slack instead of squeezing
     the action buttons. */
  [data-dsh-taskboard-board] > [class*="_boardHeader"] [class*="_search"] {
    flex: 1 1 auto !important;
    min-width: 80px !important;
  }

  /* ---------- dsh-web-ui polish: plugin market search ----------
     The market tab row (Discover / Themes / Installed + the plugin search
     box) is a no-wrap flex: at 390px the tabs plus the ~218px search box
     (~475px total) overflow the ~334px sheet and the search box runs off
     the right edge of the screen (it also forces a horizontal scrollbar on
     the sheet's options area). Let the row wrap: the tabs keep the first
     line and the search box gets its own full-width second line. */

  [aria-modal="true"] [class*="_tabs"] {
    flex-wrap: wrap !important;
    row-gap: 8px !important;
  }
  [aria-modal="true"] [class*="_searchInline"] {
    flex: 1 1 100% !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  /* iOS Safari auto-zooms a focused input whose computed font-size is below
     16px. dshmarket's tab search uses the shared primitive Input at 13px;
     raise only this market-owned field on mobile so focusing it keeps the
     current viewport scale. Scoped to the market root to avoid changing
     unrelated settings/search fields; pinch zoom stays available. */
  [data-dsh-market-root] [class*="tabSearch"] input,
  [data-dsh-market-root] input[class*="tabSearch"] {
    font-size: 16px !important;
  }

  /* ---------- dshmarket polish: Tasks operations popup ----------
     Upstream .opPanel is a small dropdown pinned to the right edge of its
     ~54px trigger button; on a phone it reads as stuck to the sheet edge
     instead of centered. Promote it to a fixed, viewport-centered card:
     no ancestor between the popup and the viewport carries a transform,
     so position:fixed centers against the real viewport (a plain left:50%
     would resolve against the tiny relative trigger wrapper and land even
     further right). The upstream 86vw width cap, 70vh max-height and
     internal scroll all still apply; the close button stays inside.
     2026-09-25: re-anchored from :is([data-dsh-frame], [data-mobile-nav="frame"]) [aria-modal]
     to the market's own root marker — since rc.2 the whole settings
     sheet (market included) is portaled to <body> and no longer matches a
     frame-descendant selector. */
  [data-dsh-market-root] [class*="_opPanel"] {
    position: fixed !important;
    top: 50% !important;
    bottom: auto !important;
    left: 50% !important;
    right: auto !important;
    transform: translate(-50%, -50%) !important;
  }

  /* ---------- dshmarket polish: header title row ----------
     The title row (icon + title + repo link + version + optional
     "Update market" / "Update all" buttons) is a nowrap flex whose
     natural width (~450px with both update buttons) exceeds the ~334px
     sheet. Flex then crushes the flexible items below their content
     width and every label wraps word-by-word — the "text turns
     vertical" report. Trigger is state-dependent (the buttons only
     exist while plugin updates are pending), which explains the
     sometimes-horizontal/sometimes-vertical flapping. Let the row wrap
     instead: line 1 keeps icon + title + repo + version, the update
     buttons get their own full-width-feeling second line, and the title
     itself is locked to one ellipsized line no matter what follows it.
     2026-09-25: re-anchored from :is([data-dsh-frame], [data-mobile-nav="frame"]) [aria-modal]
     to the market's own root marker — since rc.2 the whole settings
     sheet (market included) is portaled to <body> and no longer matches a
     frame-descendant selector. Same day, second pass: the ported rule's
     flex:1 1 auto on the title GREW it to fill the row, which pushed the
     repo link and the version "v1.65.1" to the far right — exactly where
     the pinned toolbar's close ✕ sits, crowding the corner the owner
     reported as "很容易误触" (hit-test: the version box reached x≈378,
     the close ✕ starts at x=350). flex:0 1 auto keeps the title at its
     natural width (repo + version pack left, as upstream intends) while
     still letting it shrink-and-ellipsize when the update buttons force a
     wrap — the wrap rule above, not flex-grow, is what makes room for
     them. */
  [data-dsh-market-root] [class*="_titleRow"] {
    flex-wrap: wrap !important;
    row-gap: 6px !important;
  }
  [data-dsh-market-root] [class*="_titleRow"] [class*="_title"] {
    flex: 0 1 auto !important;
    min-width: 0 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  [data-dsh-market-root] [class*="_titleRow"] button {
    white-space: nowrap !important;
  }

  /* ---------- dshmarket polish: card byline stays on one line ----------
     The byline (avatar · owner · version · ↓downloads · ★stars) is a
     wrapping flex row by upstream design — the market would rather drop
     the counts to a second line than over-shrink the owner name (its
     .owner carries flex:0 1 auto + ellipsis + min-width:44px exactly for
     that). At a phone's card width the break point lands mid-row though:
     everything but the star fits, so a lone "· ★ 8k" wraps onto its own
     line under the author — inconsistent with the cards that happen to
     fit, which reads as a rendering bug (owner report 2026-09-25,
     IMG_4208: dsh-remote-web-ui and dsh-skill-explorer both orphaned the
     star). Pin the row to one line instead: the owner is the market's own
     flexible item, so it absorbs the squeeze and the counts stay whole.
     Desktop cards are far wider than the row and never wrapped anyway. */
  [data-dsh-market-root] [class*="_byline"] {
    flex-wrap: nowrap !important;
  }

  /* ---------- dshmarket polish: top inset ----------
     The sheet is pinned to the top of the screen (A': top = safe-area +
     12px) and the market page started FLUSH against the sheet's top
     edge — measured 2026-09-25: the title row's gap from the sheet's top
     was 0px while the pinned close ✕ sat 10px under it, so the whole
     page read as crushed against the boundary (owner report, IMG_4211:
     "最上面快要顶到边界了... 把整体往下移一点，有点留白会更美观").
     Give the page the same 12px inset its own horizontal padding already
     has (the root box was 12px from each side, 0px from the top), so the
     title lands ~12px under the sheet's rounded corner, level with the
     close ✕. The market page is the sheet's CONTENT, so it moves; the
     pinned toolbar (close ✕) belongs to the sheet and deliberately does
     NOT move ("关闭按钮可以不动"). Scrolls away naturally with the page.
     Desktop market is vertically centered with the host's own clearance
     and never had this read; the rule is mobile-only. */
  [data-dsh-market-root] {
    margin-top: 12px !important;
  }
  /* Below ~360px the fixed-width counts plus the owner's 44px min overrun
     the card, so the ellipsis eats most of the name ("omds..."). Trade text
     size for name length on the smallest phones: 11px → 10px text and
     6px → 4px gaps buy the owner roughly a third more room while the row
     stays one line. Tablet/phone tiers above this width are unaffected. */
  @media (max-width: 360px) {
    [data-dsh-market-root] [class*="_byline"] {
      gap: 4px !important;
      font-size: 10px !important;
    }
    [data-dsh-market-root] [class*="_byline"] [class*="_dot"] {
      margin-left: 3px !important;
    }
  }

  /* ---------- dshmarket 1.20+ compat: keep the settings nav visible ----------
     Upstream Market.module.css hides the host dialog's nav on phones
     ([role=dialog]:has([data-dsh-market-root]) > nav { display:none } at
     max-width:560px) so the market can take over the dialog; its comment
     assumes the host keeps "its own close button in the content header".
     Our host's only close ✕ lives inside that very nav, so the market
     would leave no categories and no way back or out (dead-end UI,
     2026-08-23). Mirror upstream's exact media condition and restore the
     nav: categories row + ✕ stay above the inline market page.
     2026-09-25 (rc.2 regression): 0.1.7-rc.2 renders this sheet through
     createPortal(..., document.body), so the frame-scoped selector matches
     nothing on rc.2+ hosts and the market takeover silently won — no
     categories row above the market page on every updated phone. The twin
     rule below carries the same declaration on a structural anchor
     ([role=dialog]:has(...) > nav, no frame prefix): on rc.1 hosts the
     frame-scoped rule does the work and the twin is inert (the sheet is a
     frame descendant there); on rc.2+ the twin carries it. Both stay
     inside this file's mobile media wrapper, so desktop never sees them.
     Premise note: this host generation keeps its close ✕ in the CONTENT
     header (pinned top-right — see layout.css), so the dead-end half of
     the 2026-08-23 report no longer applies; the rule is kept and twinned
     for the categories row it restores (guarded by the test suite). */
  @media (max-width: 560px) {
    :is([data-dsh-frame], [data-mobile-nav="frame"]) [role="dialog"]:has([data-dsh-market-root]) > nav {
      display: flex !important;
    }
    [role="dialog"]:has([data-dsh-market-root]) > nav {
      display: flex !important;
    }
  }

  /* ---------- dsh-usage-stats polish: usage & balance panel ----------
     The panel's stats row shows three token counters side by side
     (today / month / total). The counters use tabular nowrap figures whose
     min-content width overflows the ~336px panel body on a phone: figures
     clip at the row's edges and the panel grows a horizontal scrollbar.
     Stack the three counters vertically — full-width rows, so the figures
     always fit. */

  [class*="usg_"][class*="_statsRow"] {
    flex-direction: column !important;
  }
  [class*="usg_"][class*="_stat"]:not([class*="_statsRow"]) {
    flex: 0 0 auto !important;
    width: 100% !important;
    min-width: 0 !important;
  }

  /* ---------- dsh-web-ui polish: settings sheet ----------
     Keep the nav tabs on ONE horizontally scrolling row. Setting rows need
     no mobile rework: the host redesigned them into compact space-between
     rows (text left, control right — verified in
     dsh-client-ui-settings-general .Pt1bsG_row, 2026-09-24). The old
     "stack each row" rules, written for the previous two-column generation
     with its dead label/control gap, now fight that design and double every
     row's height; they were removed (see the tombstone below). */

  /* Nav tabs + toolbar: TOMBSTONE (2026-09-25). This whole family —
     the single-row scroller, its hairline scrollbar, the compact cells and
     the hidden "Open configuration file" button — was scoped to
     :is([data-dsh-frame], [data-mobile-nav="frame"]) because rc.1 rendered the settings sheet in
     place, inside the app frame. rc.2 wraps the sheet in
     createPortal(..., document.body): the overlay is a direct body child,
     nothing inside it matches a frame-descendant selector, and every rule
     here went dead at once. The live symptoms were the nav cells wrapping
     into uneven rows that slid under the 138px toolbar and the config-file
     button reappearing in that toolbar (owner report 2026-09-25). The
     portal-aware replacements live in layout.css.ts, in the "Settings
     dialog on mobile" section, anchored on the same structural
     :has(> :first-child > :last-child > button) gate (settings sheet only;
     export dialog and directory picker stay excluded). Nothing to restore
     here — do not re-add behind a frame selector. */
  /* Setting rows: no mobile rework — the host renders compact space-between
     rows natively (.Pt1bsG_row: text left, control right, 16px vertical
     padding, .5px divider). The previous "stack each row" rule family
     (column + gap:8 + control width:100% + the 36×20 switch cap that undid
     it) was written for the old two-column generation; on the redesigned
     host it doubled every row's height — the "settings feel vertically
     empty" report 2026-09-24 — and was removed in full. If an older host
     generation ever needs stacking again, reintroduce behind a generation
     guard, not as a blanket [class*="_row"] override. */
  /* Models provider editor: a CLOSED <details> ("_customized", the customized
     models section) must not paint its body. This engine paints the ~1500px
     model catalog of the closed details as a ghost layer anyway: it overlays
     the editor's own action rows (Fetch/Cancel/Apply/Add model) and the
     provider rows BEFORE the editor row in DOM order (those paint under the
     ghost and lose hit-testing), while rows after it paint above. Result
     (owner report 2026-09-19): providers cannot be deleted, "fetch available
     models" does nothing — every tap lands on whatever row overlaps the
     ghost. The host layout is computed for the collapsed details (editor
     217px, rows 903px), so the fix is to restore what the browser should do
     on its own: hide the body while the details is closed. Tapping the
     summary then opens it for real (details 33 → 1532px, rows re-flow,
     every button hittable — verified in place before this rule was written). */
  [aria-modal="true"] details[class*="_customized"]:not([open]) > [class*="_customizedBody"] {
    display: none !important;
  }
  /* Owner dialog footers (_w1urq family: the provider delete confirm, the
     workspace rename dialog, ...): the footer buttons keep white-space
     normal, so any width squeeze — a narrow viewport, a long provider name,
     Android font scaling (owner report 2026-09-19, verified at 320px with a
     1.3x font bump) — wraps the label inside the fixed 36px row where the
     second line clips. Keep each label on one line and let the footer wrap
     whole buttons to a second row instead. */
  [role="dialog"][aria-modal="true"] [class*="_footer"] {
    flex-wrap: wrap !important;
  }
  [role="dialog"][aria-modal="true"] [class*="_footer"] button[class*="_button"] {
    white-space: nowrap !important;
  }
  /* Appearance mode group: give the cube row a consistent bordered
     segmented look (the official borders differ per state). */
  [aria-modal="true"] [class*="_cubeRow"] > * {
    border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, .12)) !important;
  }

  /* ---------- dsh-web-ui polish: explorer sheet ----------
     The aionui explorer was designed for a desktop side column: compact the
     header, search box and tree rows so a phone shows more entries, and pad
     the scroll bottom so the last row never sits flush on the edge. */

  [data-aionui-explorer-col] [class*="_tabBar"]:not([class*="_tabBarRight"]) {
    height: 36px !important;
  }
  [data-aionui-explorer-col] [class*="_tabBtn"],
  [data-aionui-explorer-col] [class*="_tabBtnActive"] {
    padding: 0 12px !important;
    font-size: 13px !important;
  }
  [data-aionui-explorer-col] [class*="_searchBox"] {
    height: 32px !important;
    font-size: 13px !important;
  }
  [data-aionui-explorer-col] [class*="_treeRow"] {
    height: 30px !important;
    font-size: 13px !important;
  }
  [data-aionui-explorer-col] [class*="_treeRow"] svg {
    width: 14px !important;
    height: 14px !important;
  }
  [data-aionui-explorer-col] [class*="_scrollArea"] {
    padding-bottom: 28px !important;
  }

  /* ---------- dsh-web-ui polish: drawer footer ----------
     The single injected footer action (the session-log download) becomes a
     full-width pill instead of a text-width capsule. */

  /* The official footerActions row also hosts the remote-web-ui entry
     row (two icon buttons); without wrapping the two groups squeeze each
     other on one line. Wrap so each group gets its own full-width row. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="_footerActions"] {
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  [data-mobile-nav="drawer-actions"] {
    width: 100% !important;
  }
  [data-mobile-nav="drawer-actions"] > button {
    flex: 1 1 0 !important;
    padding: 0 8px !important;
    white-space: nowrap !important;
  }

  /* ---------- dsh-web-ui polish: floating pet ----------
     The whale-girl pet (dsh-pet) floats at the viewport corner with a
     persisted, draggable position. On phones the pet is scaled down so
     it does not dominate the screen; the plugin's own drag + persist
     still work (the position itself is left alone — the mobile default
     position is seeded via the pet API to just above the composer). */

  body > [class*="_float"]:has([class*="_sprite"][role="button"]) {
    transform: scale(.66);
    transform-origin: bottom right;
  }
  /* While a modal dialog (settings sheet / export) owns the screen the pet
     floats ABOVE it and covers the dialog content; modal semantics say the
     background is inert, so hide the pet for the modal's lifetime. */
  body:has([aria-modal="true"]) > [class*="_float"]:has([class*="_sprite"][role="button"]) {
    display: none !important;
  }

  /* ---------- dsh-web-ui polish: conversation stats line ----------
     The official session-status row (turns / steps / LLM time / TTFT /
     cache) is long. The client marks the exact row with
     [data-mobile-nav="stats"] (text-anchored, hashed classes can't be
     targeted). Layout: ONE fixed-height (28px) flex strip that scrolls
     horizontally — the full metrics stream stays reachable by swiping,
     the row never grows vertically, no ellipsis or fade, 12px gaps
     between metric groups, a 2px scrollbar as the swipe affordance.

     2026-09-23 改档（店主："把那个滑动的压缩一下，固定住，不再滑动"）：
     真机探针实测 可见宽 251px、内容 390px（"10 轮 268 步·244 tok/s" 178 +
     "57.5M tok·缓存命中 99%" 187，gap 12、font 12），右边 ~75px 被 dock 里的
     上下文百分比那块占着 ⇒ 一行本来就放不下。按店主选择：**保持一行 + 末尾
     省略号**。做法：字号 12→10（≈0.83×）、组间距 12→6、去掉为滚动条留的
     4px 下内边距；overflow 改 hidden（不可滑）、滚动条显式干掉；第一组
     flex:0 0 auto 保持完整，最后一组 flex:0 1 auto + min-width:0 自己吃掉
     差额并在末尾出省略号（实测截到"…缓存命…"，tok 数字仍完整可读）。
     高度仍是 28px：composer 的底部占位（8px + 28px）不变，其它几何不跟着动。 */

  [data-mobile-nav="stats"] {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: center !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    height: 28px !important;
    min-height: 28px !important;
    max-height: 28px !important;
    box-sizing: border-box !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    overscroll-behavior-x: none;
    scrollbar-width: none !important;
    padding: 0 !important;
    line-height: 18px !important;
    font-size: 10px !important;
  }
  [data-mobile-nav="stats"]::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  [data-mobile-nav="stats"] > * {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: center !important;
    white-space: nowrap !important;
    margin-right: 6px !important;
    padding: 0 !important;
  }
  /* 第一组（轮次·步数·tok/s）保持完整。 */
  [data-mobile-nav="stats"] > *:first-child {
    flex: 0 0 auto !important;
    width: max-content !important;
    min-width: max-content !important;
    max-width: none !important;
  }
  /* 最后一组（tok 总量·缓存命中）吃掉剩余宽度，末尾省略号。
     2026-09-23 第二版修正：第一版把整组改成 display:block + 子元素 inline，
     结果药丸里的图标变成 inline、基线对齐错位（店主："图标都出现位移"）。
     这版保持 flex 对齐，只让药丸**内部的文字 span** 收缩 + 出省略号；
     图标 svg 固定不缩。另外把两组药丸的左右内边距压到 6px、组间距压到 4px，
     抠出来的宽度全部让给第二组（实测它原本只分到 76px 而需要 156px）。 */
  [data-mobile-nav="stats"] > *:last-child {
    display: flex !important;
    align-items: center !important;
    flex: 0 1 auto !important;
    width: auto !important;
    min-width: 0 !important;
    max-width: none !important;
    overflow: hidden !important;
    margin-right: 0 !important;
  }
  [data-mobile-nav="stats"] > *:last-child > * {
    display: flex !important;
    align-items: center !important;
    min-width: 0 !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }
  [data-mobile-nav="stats"] > *:last-child svg {
    flex: 0 0 auto !important;
  }
  [data-mobile-nav="stats"] > *:last-child span {
    flex: 0 1 auto !important;
    min-width: 0 !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  [data-mobile-nav="stats"] button {
    padding: 0 3px !important;
    margin: 0 !important;
    min-width: 0 !important;
    max-width: 100% !important;
  }
  /* 药丸内部的 span/svg 有自己的字号（宿主 .pill 自带），只在外层设 10px 不会被
     继承进去 —— 真机上第二组仍差 ~20px 被省略号切掉，所以这里显式压到内部。 */
  [data-mobile-nav="stats"] button,
  [data-mobile-nav="stats"] button span,
  [data-mobile-nav="stats"] button svg,
  [data-mobile-nav="stats"] > * {
    font-size: 10px !important;
    line-height: 18px !important;
  }
  [data-mobile-nav="stats"] > *:not(:last-child) {
    margin-right: 3px !important;
  }
  [data-mobile-nav="stats"] * {
    white-space: nowrap !important;
  }
  /* 「上下文环」显示在输入框行的右簇（店主 2026-09-23 确认：
     环要、百分比数字不要）。font-size:0 只塌掉文本、环 svg 有显式尺寸不受
     影响；绝对定位盖在自建占位上（见下方 #104 注释），不再搬动节点。 */
  [data-mobile-nav="stats-ring"] {
    position: absolute !important;
    flex: 0 0 auto !important;
    display: inline-flex !important;
    align-items: center !important;
    min-width: 0 !important;
    margin: 0 2px 0 0 !important;
    padding: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    border: 0 !important;
  }
  /* 文本要连**药丸内部**一起塌掉：药丸自带字号，只在外层设 0 不继承进去，
     真机上会留下半个 "46"。整棵子树 font-size:0，环 svg 用显式 px 不受影响。 */
  [data-mobile-nav="stats-ring"],
  [data-mobile-nav="stats-ring"] * {
    font-size: 0 !important;
  }
  [data-mobile-nav="stats-ring"] button {
    padding: 0 !important;
    margin: 0 !important;
    gap: 0 !important;
    min-width: 0 !important;
    width: auto !important;
    /* 宿主给药丸画的灰底/描边在输入框行里显得比环大一倍（店主："圆圈占了很多空间"），
       全去掉，只留环本身。 */
    background: transparent !important;
    box-shadow: none !important;
    border: 0 !important;
  }
  [data-mobile-nav="stats-ring"] svg {
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    flex: 0 0 auto !important;
  }
  /* 环与 TPS 读数不再搬动宿主 React 节点（#104：搬动后宿主卸载调 removeChild
     对不上父节点直接抛 NotFoundError，SlotErrorBoundary 把整个 composer 槽位
     清空）。节点留在 React 渲染的原位，可见槽位由插件自建占位顶住，宿主节点
     绝对定位盖在占位上；占位是插件节点，宿主重建/卸载都不经过它。 */
  [data-mobile-nav="stats-ring-reserve"],
  [data-mobile-nav="stats-tps-reserve"] {
    visibility: hidden !important;
    pointer-events: none !important;
  }
  [data-mobile-nav="stats-ring-reserve"] {
    flex: 0 0 auto !important;
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    margin: 0 2px 0 0 !important;
    padding: 0 !important;
  }
  [data-mobile-nav="stats-tps"] {
    display: flex !important;
    flex-flow: row nowrap !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 10px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  [data-mobile-nav="stats-tps"] * {
    white-space: nowrap !important;
  }
  [data-mobile-nav="stats-tps"] span {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    min-width: 0 !important;
  }
  /* overlay 的定位上下文：宿主自己没定位时才生效（无 !important，宿主样式随时
     可以接管；stats-line 每帧按真实 positioned ancestor 计算，不受影响）。 */
  [data-mobile-nav="stats-ring-dock"],
  [data-mobile-nav="stats-tps-row"] {
    position: relative;
  }

  /* ---------- dsh-genui panel dock ----------
     The genui panel docks above the composer (conversation.input.dock,
     id genui-panel). On a phone its business-blue outline, generous chrome
     and single-line ellipsis read as an unfinished artifact: long titles
     truncate mid-word ("…default b···") with the chevron glued to the
     ellipsis, and the pill crowds the composer. Mobile treatment: neutral
     card border matching the composer, tighter chrome so the full title
     fits, chevron with breathing room. Scoped to the mobile frame marker —
     desktop keeps genui's own styling untouched. */

  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-genui-panel] {
    margin: 6px 12px 4px !important;
    border-color: var(--dsw-alias-border-l1, rgba(0, 0, 0, .12)) !important;
    border-radius: 12px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-genui-panel] [class*="_panelToggle"] {
    padding: 7px 12px !important;
    gap: 8px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-genui-panel] [class*="_panelBadge"] {
    padding: 0 7px !important;
    border-radius: 5px !important;
    font-size: 10.5px !important;
    line-height: 1.7 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-genui-panel] [class*="_panelTitle"] {
    flex: 1 1 auto !important;
    min-width: 0 !important;
    font-size: 12.5px !important;
    line-height: 1.45 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-genui-panel] [class*="_panelChevron"] {
    flex: none !important;
    margin-left: 0 !important;
    padding-left: 4px !important;
  }

  /* ---------- git-graph branch chip: CSS re-anchor, no reparent (A′) ----------
     The branch chip (conversation.input.dock) floats between the dock rows
     and the input card; on a phone it reads as a stray capsule crowding the
     composer. #105: the old fix reparented the chip INTO the composer card,
     and React's unmount removeChild then threw NotFoundError into the
     SlotErrorBoundary (same root cause as #104). A′ re-anchors instead:
     the chip stays where React rendered it (inside the dock subtree) and
     the composerStack becomes the containing block, with the anchor
     constants = the card's static offset inside the stack + the original
     (12,12) corner offset. Constants measured 2026-09-24 (CDP, 393px):
     conversation phase card offset (16,0) → top 12 / left 28; hero phase
     card offset (16,122.9) → top 134.9 / left 28 (hero override below).
     The plugin's own sheet sets all four offsets on the anchor, so
     right/bottom must be neutralized too. Desktop untouched: the frame
     marker only exists below 1024px. Chip row geometry (2026-08-16, user
     feedback): 48px padding left a 16px dead gap and made the composer read
     too tall; 40px = chip (24px) at corner +12 + ~4px to the textarea; the
     chip has since grown to 28px (git-graph chip CSS), so the row is 44px
     (2026-09-06). The 44px clearance now keys off a STACK-level :has() —
     the chip is no longer a card descendant, so a card-level :has() could
     never match; the card disambiguation keeps non-composer cards (e.g. a
     todo card sharing the stack) out of the chip row. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="_composerStack"] {
    position: relative;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-gitgraph-chip-anchor] {
    position: absolute !important;
    top: 12px !important;
    left: 28px !important;
    right: auto !important;
    bottom: auto !important;
    z-index: 1 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [data-phase="hero"] [data-gitgraph-chip-anchor] {
    top: 134.9px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="_composerStack"]:has([data-gitgraph-chip-anchor]) [class*="_card"]:has(textarea, [data-composer-input]) {
    padding-top: 44px !important;
  }

  /* ---------- dsh-meme 表情选择卡片：右缘安全距离 ----------
     The meme picker (conversation.input.overlay, id meme-picker) is
     absolutely positioned left:0 inside the composer's overlay anchor with
     width:min(360px,90vw). That 90vw resolves against the VIEWPORT, not the
     anchor, and with the picker's own padding+border the border-box
     (377px on a 390px phone) exceeds the 356px anchor — the card's right
     edge then runs past the anchor and off the right screen edge, while the
     left edge keeps the anchor's 17px safe inset. Stretch the card to the
     anchor on both sides (left/right 0, width auto, border-box) so the
     right gap mirrors the left; cap at the card's original border-box size
     (360px content + 24px padding + 2px border) so tablets keep the
     intended card width instead of stretching. Desktop is untouched: the
     frame marker only exists below 1024px. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker {
    left: 0 !important;
    right: 0 !important;
    width: auto !important;
    box-sizing: border-box !important;
    max-width: 386px !important;
  }

  /* dsh-meme 网格缩略图：自适应铺满卡片,保留 8px 间隙。
     dsh-meme 的 .mp-grid 是 flex-wrap + 固定 76px 的 .mp-cell(行内 style 再压到 74px):
     3 列(390px 手机)时每行右侧剩 ~78px 空白,卡片没有铺满。换成响应式 grid:
     repeat(auto-fill, minmax(64px,1fr)) 让列数随可用宽度伸缩、卡片 width:100% +
     aspect-ratio:1 随轨道自适应(方形,cover 裁切不变),gap 仍是 dsh-meme 的 8px。
     行内 width/height 用 !important 覆盖;手机端约 4 列、平板端约 5 列,均满宽。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker .mp-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr)) !important;
    scrollbar-width: thin !important;
    scrollbar-color: var(--dsw-alias-label-tertiary, rgba(0, 0, 0, .3)) transparent !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker .mp-cell {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 1 !important;
  }
  /* dsh-meme 网格右侧滚动条：默认 WebKit 滚动条在手机上看太粗,压成 4px
     细条——保留滚动指示又不占横向空间,thumb 圆角浅色、轨道透明。 */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker .mp-grid::-webkit-scrollbar {
    width: 4px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker .mp-grid::-webkit-scrollbar-thumb {
    background: var(--dsw-alias-label-tertiary, rgba(0, 0, 0, .3)) !important;
    border-radius: 999px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .meme-picker .mp-grid::-webkit-scrollbar-track {
    background: transparent !important;
  }

  /* ---------- agent preset 模式选择菜单：手机端紧凑底部弹层 ----------
     The official agent-preset menu (role=menu, portal mounted on body) uses
     position:fixed + max-height:820px + bottom:12px, so on a phone it
     stretches from the trigger down to 12px above the screen bottom —
     effectively filling the screen. Turn it into a polished bottom sheet:
     cap the height, center it horizontally (the official max-width 360px
     left-anchors at left:12px, leaving 12/18px asymmetric gaps), add a
     drag-handle affordance, breathing room, and softer top radius; the
     inner viewport keeps scrolling. Scoped to the agent-preset item class
     (cubgiG_*) so other role=menu dropdowns (model/access mode) are
     untouched. Desktop ≥1024px is outside the media query, so it keeps the
     official large dropdown. */
  /* agent-preset 菜单依赖 @deepseek-ai/dsh-client-ui-agent-preset 的 CSS Module 哈希 (cubgiG_*)，升级该包时需验证此选择器是否仍有效 */
  [role="menu"]:has([class*="cubgiG_item"]) {
    top: auto !important;
    left: 50% !important;
    right: auto !important;
    bottom: 12px !important;
    transform: translateX(-50%) !important;
    width: min(100% - 24px, 360px) !important;
    max-width: 360px !important;
    max-height: min(55dvh, 440px) !important;
    padding: 30px 6px 10px !important;
    border-radius: 16px !important;
  }
  [role="menu"]:has([class*="cubgiG_item"])::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 4px;
    border-radius: 999px;
    background: var(--dsw-alias-border-l2, rgba(0, 0, 0, .22)) !important;
    pointer-events: none;
  }
  /* 菜单内部滚动条：默认 WebKit 滚动条在竖屏太粗,会占 ~15px 宽度把文字描述
     挤窄,导致描述换行/截断不自然。压成 4px 细条(与表情网格一致),文字区域
     恢复自适应宽度。 */
  [role="menu"]:has([class*="cubgiG_item"]) [class*="_viewport_"] {
    scrollbar-width: thin !important;
    scrollbar-color: var(--dsw-alias-label-tertiary, rgba(0, 0, 0, .3)) transparent !important;
  }
  [role="menu"]:has([class*="cubgiG_item"]) [class*="_viewport_"]::-webkit-scrollbar {
    width: 4px !important;
  }
  [role="menu"]:has([class*="cubgiG_item"]) [class*="_viewport_"]::-webkit-scrollbar-thumb {
    background: var(--dsw-alias-label-tertiary, rgba(0, 0, 0, .3)) !important;
    border-radius: 999px !important;
  }
  [role="menu"]:has([class*="cubgiG_item"]) [class*="_viewport_"]::-webkit-scrollbar-track {
    background: transparent !important;
  }

/* 搜索框底部间距修复 */
  [aria-modal="true"] [class*="tabSearchRow"] {
  padding: 2px 4px 16px !important;
  }


  /* ===== 已安装列表：路径单行截断 ===== */
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > div > [class*="spec"] {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 100% !important;
  font-size: 12px !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > div > [class*="nm"] {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 100% !important;
  }
  /* ===== 已安装列表：手机端纵向重排 ===== */
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) {
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 4px 10px !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > div:first-child {
    flex: 1 1 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > [class*="grow"] {
    flex: 1 1 auto !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > button {
    flex: 0 0 auto !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > button[class*="switch"] {
    order: 3 !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > button:not([class*="switch"]) {
    order: 2 !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > [class*="owner"] {
    order: 1 !important;
  }
  [class*="irow"]:not([class*="irowActions"]):not([class*="irowTrailing"]) > [class*="grow"] {
    order: 0 !important;
  }
  /* ===== 市场卡片图片容器：横向滚动 ===== */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="cardShots"] {
  display: flex !important;
  flex-wrap: nowrap !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  scrollbar-width: thin !important;
  min-width: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  gap: 8px !important;
  padding: 4px 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="cardShots"] > [class*="cardShot"] {
  flex: 0 0 min(100%, 420px) !important;
  width: min(100%, 420px) !important;
  max-width: 100% !important;
  height: auto !important;
  display: block !important;
  object-fit: contain !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="cardShots"]::-webkit-scrollbar {
  height: 4px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="cardShots"]::-webkit-scrollbar-thumb {
  background: var(--ds-border-color, #ccc) !important;
  border-radius: 4px !important;
}

  /* ---------- dsh-file-viewer (conversation.view tab「文件查看器」) ----------
     The plugin ships NO responsive CSS: its min-width:0 flex panels overflow
     on a phone — the titlebar caps the path at 520px beside a 5-button action
     row, and CSV/code headers row-stick inside content scrollers. It renders
     inline into the conversation view region (stable 'dsfv-*' prefix, injected
     <style>), not a modal sheet, so the fixes here are: stop the PANEL from
     scrolling horizontally (leave horizontal scrolling inside the content
     scrollers), compress the titlebar/statusbar, enlarge touch targets, and
     scope everything under [data-file-viewer-open] so only the active
     file-viewer tab is affected. The marker is owned by the
     file-viewer-open-marker reconciler task; nothing leaks to desktop because
     this whole block lives inside the mobile media query.
     (Port of community fork fix 2ff7976.) */

  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-panel {
    min-width: 0 !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  /* Titlebar: single compact row; path truncates, secondary meta hides on
     narrow, the 5-button action row wraps to two rows of tall targets. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-titlebar {
    gap: 4px !important;
    padding: 6px 8px !important;
    flex-wrap: nowrap !important;
    min-width: 0 !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-titlebar-path {
    min-width: 0 !important;
    padding-right: 4px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-path {
    font-size: 13px !important;
    min-width: 0 !important;
    max-width: 220px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-titlebar-actions {
    flex-wrap: wrap !important;
    gap: 4px !important;
    justify-content: flex-end !important;
    margin-left: auto !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-toolbar-btn {
    min-height: 34px !important;
    padding: 0 10px !important;
    font-size: 13px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-icon-btn,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-back-btn {
    min-height: 34px !important;
    min-width: 34px !important;
  }
  @media (max-width: 480px) {
    :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-meta {
      display: none !important;
    }
  }
  /* Status bar: wrap, safe-area bottom padding, compact. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-statusbar {
    flex-wrap: wrap !important;
    gap: 4px 10px !important;
    padding: 4px 8px calc(4px + env(safe-area-inset-bottom, 0px)) !important;
    font-size: 12px !important;
  }
  /* Content scrollers must own horizontal scrolling; the flex columns and the
     renderer stack must not let content push the panel wide. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-renderer,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-renderer-stack,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-scroll,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-csv-scroll,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-code-body {
    min-width: 0 !important;
    max-width: 100% !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-scroll,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-csv-scroll {
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
  }
  /* Browser / subtoolbar rows wrap; file rows get touch-friendly height. */
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-browser-nav,
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-subtoolbar {
    flex-wrap: wrap !important;
    gap: 6px !important;
    padding: 4px 8px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-file-row {
    min-height: 44px !important;
    padding: 8px 10px !important;
  }
  :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] .dsfv-file-list [class*="name"] {
    min-width: 0 !important;
  }
  /* Produced-file chips render in the conversation tail, outside the viewer
     tab — keep tappable but not scoped to the marker. */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .dsfv-produced-chip,
  :is([data-dsh-frame], [data-mobile-nav="frame"]) .dsfv-produced-folder {
    min-height: 40px !important;
    padding: 0 12px !important;
  }
  @media (prefers-reduced-motion: reduce) {
    :is([data-dsh-frame], [data-mobile-nav="frame"])[data-file-viewer-open] [class*="dsfv-"] {
      transition: none !important;
      animation: none !important;
    }
  }

  /* ---------- dsh-agy (Antigravity) mobile layout safeguard ----------
     1. In mobile settings sheet, release the nested 300px scroller on .agy-rows
        so the list expands naturally and uses the sheet's smooth scrolling.
     2. Ensure action buttons (especially Delete at the edge) have safe touch targets,
        manipulation touch-action, higher z-index, and never get obscured by scrollbars. */
  [aria-modal="true"] .agy-split .agy-rows {
    max-height: none !important;
    overflow-y: visible !important;
  }
  [aria-modal="true"] .agy-rowactions {
    max-width: 100% !important;
  }
  [aria-modal="true"] .agy-rowbtns {
    margin-left: auto !important;
  }
  [aria-modal="true"] .agy-btn,
  [aria-modal="true"] .agy-rowactions button {
    touch-action: manipulation !important;
    position: relative !important;
    z-index: 2 !important;
  }
}

`;
};
__modules["styles/misc.css.js"] = function (require, module, exports) {
"use strict";
// misc — split from src/client/mobile.css.ts (2026-08-16), order preserved.
// Self-contained: each section (composer / tablet / desktop) carries its own
// media query.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MISC_CSS = void 0;
exports.MISC_CSS = `@media (max-width: 1023px) and (pointer: coarse) {
  /* ---------- hero composer on mobile ----------
     The official hero card carries a 2-line textarea plus a tall tool row,
     which reads oversized on a phone. Tighten the empty-state rhythm: keep
     the official centered hero, shrink the textarea line box, slim the card
     padding and the tool row, and close the gap under the headline. */

  [data-phase="hero"] [class*="_card"]:has(textarea, [data-composer-input]) {
    gap: 8px !important;
  }
  /* Composer stacks carrying the git branch chip must keep compat.css's 44px
     chip clearance: that rule sets padding-top: 44px on the composer card of
     any stack that contains the absolutely-positioned chip anchor (A′, #105:
     the chip stays in the dock subtree and is re-anchored to the stack, so
     the exclusion moved from the card level to this stack-level :not(:has())
     — a card-level :has() could never match anymore). Chip geometry: top
     corner +12 + 28px chip — the chip grew 24→28px, so the clearance grew
     40→44px to keep the same ~4px breathing gap (2026-09-06). This compact
     override used to stomp the clearance back to 6px with the same
     specificity (this sheet loads after compat), so on the hero empty state
     the chip painted over the input line (2026-09-06). Excluding
     chip-bearing stacks restores the clearance; the textarea collapse below
     still applies to them. */
  [data-phase="hero"] [class*="_composerStack"]:not(:has([data-gitgraph-chip-anchor])) [class*="_card"]:has(textarea, [data-composer-input]) {
    padding-top: 6px !important;
  }
  /* The official composer autosizes the textarea and writes an inline
     height (2 lines on the hero empty state) on the textarea's scroll/grow
     wrappers. :placeholder-shown lets us collapse the EMPTY state to one
     line with !important; as soon as the user types, the pseudo-class no
     longer matches and the autosizer's inline height takes over again — so
     multi-line growth keeps working. */
  [data-phase="hero"] textarea:placeholder-shown {
    height: 28px !important;
  }
  [data-phase="hero"] [class*="_card"]:has(textarea:placeholder-shown) > [class*="_scroll"],
  [data-phase="hero"] [class*="_card"]:has(textarea:placeholder-shown) [class*="_grow"] {
    height: 28px !important;
  }
  /* The one-line collapse above is deliberately NOT mirrored onto the Lexical
     generation (0.1.2+), even though it signals its empty state with the
     separate [data-composer-placeholder] node. That host pins the hero input
     itself — hero-scoped min-height: 52px, because its hero hint wraps to two
     lines — and a min-height floor beats an outer height: the 28px wrappers of
     2026-09-05 only shrank the scrollport under a 52px input, i.e. overflow-y
     auto with scrollHeight 52 against clientHeight 28 → scrollbar plus a
     clipped first input line and hint line (phone report 2026-09-14, probe
     scripts/probes/hero-composer-clip-probe.mjs). The textarea generation this
     collapse was written for has no such floor — its input is a transparent
     height:100% layer over the wrappers — so it still collapses there. */
  [data-phase="hero"] [class*="_card"]:has(textarea, [data-composer-input]) > [class*="_row"] {
    padding-top: 2px !important;
  }
  [data-phase="hero"] [class*="_headline"] {
    line-height: 1.15 !important;
    margin-bottom: 0 !important;
  }
  [data-phase="hero"] [class*="_stack"] {
    gap: 0 !important;
  }

  /* ---------- composer dock: swap git branch chip with the todo card ----------
     The git-graph branch chip (conversation.input.dock, order 100) floats
     alone at the bottom-left above the input card, with a dead zone to its
     right; the full-width todo card (order 0) sits above it. Swap them so
     the chip reads as the stack's top row and the todo card fills the row
     above the composer. The dock container itself is display:contents
     (inline style) — its children are direct flex items of the composer
     stack, so order on the children is what reorders them. Only the chip
     needs an order change: -1 puts it before the todo card (order 0) and
     before the input card (order 0, later in DOM). The todo card must KEEP
     its order 0 — raising it past the input card's order 0 would drop it
     below the composer entirely (2026-08-16 regression, fixed). The queue
     strip (order 20) keeps hugging the input card. Desktop untouched (this
     block lives inside the max-width: 1023px media query). */
  [data-slot="conversation.input.dock"] [data-gitgraph-chip-anchor] {
    order: -1 !important;
  }
  /* Mobile tap target + feedback for the branch chip (git-graph, 24px
     desktop spec). Two real-world problems: ① the chip is tiny and sits
     right above the expandable todo card — mis-taps land on the todo card;
     ② opening the popover waits for the host's /git/branches round-trip
     (~700ms on device) with zero feedback, so users tap again and toggle
     the popover closed. Enlarge the target, kill double-tap zoom delay,
     and give an instant pressed state so a tap reads as registered. */
  [data-slot="conversation.input.dock"] [data-gitgraph-chip-anchor] [data-gitgraph-chip] {
    touch-action: manipulation !important;
    min-height: 34px !important;
    padding: 0 12px !important;
    font-size: 13px !important;
  }
  [data-slot="conversation.input.dock"] [data-gitgraph-chip-anchor] [data-gitgraph-chip]:active {
    transform: scale(.96) !important;
    transition: transform .12s !important;
  }

  /* ---------- ask question composer (ask_user_question): kill iOS Safari
      input-focus auto-zoom ----------
      Safari on iPhone enlarges the whole viewport when a focused <input> /
      <textarea> computes font-size < 16px, and only reverts on blur. The ask
      dialog is a modal composer takeover, so taps outside never blur the
      field and the magnification persists until the field loses focus
      (e.g. the dialog is dismissed). The ask
      composer's custom-answer <input> (.customInput) and optionless free-form
      <textarea> (.customTextarea) both ship at 14px (ui-user-questions
      QuestionComposer.module.css). Raise them to 16px on iOS only, where the
      zoom can actually happen: on Android and desktop there is nothing to
      suppress, so they keep the compact size they were designed with
      (2026-09-16, audit D-1 option A; the iOS WebKit floor below covers these
      fields too, this rule keeps the requirement stated where it applies).
      Scoped to the ask
      composer's stable [data-question-key] root (AGENTS.md: scope hashed-class
      selectors to the owning region, prefer stable data-* markers); the
      class-name suffix match follows the plugin's established harness
      CSS-module convention (verified against the live app: generated names
      end with the original local name, e.g. uV2eYG_input / bhn1Oq_searchInput). */
  html[data-mobile-nav-ios] [data-question-key] [class*="_customInput"],
  html[data-mobile-nav-ios] [data-question-key] [class*="_customTextarea"] {
    font-size: 16px !important;
  }

  /* ---------- dsh-file-viewer inputs: kill iOS Safari auto-zoom ----------
     Same rule as the ask composer above: the file viewer's search / jump-to-
     line / pdf-page fields ship at 13-14px, which Safari auto-magnifies on
     focus inside a panel that does not blur on tap-away. Raise them to 16px
     on iOS only for the same reason as the ask composer above (2026-09-16,
     audit D-1 option A). Scoped to the frame marker; the
     viewer itself is scoped by its stable dsfv prefix.
     (Port of community fork fix 2ff7976.) */
  html[data-mobile-nav-ios] :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="dsfv-search-input"],
  html[data-mobile-nav-ios] :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="dsfv-jump-input"],
  html[data-mobile-nav-ios] :is([data-dsh-frame], [data-mobile-nav="frame"]) [class*="dsfv-page-input"] {
    font-size: 16px !important;
  }

  /* ---------- iOS WebKit: hold every text field at >=16px so Safari never
      focus-zooms the viewport (#45) ----------
      Report (iPhone 15 Pro Max): the page magnifies as soon as a field takes
      focus, sometimes also when switching sessions (the host composer mounts
      with autoFocus), and it stays magnified until the app is closed and
      reopened or rotated landscape->portrait.
      Mechanism: iOS Safari enlarges the visual viewport whenever a focused
      input / textarea computes below 16px, and it only zooms back out on
      blur — a chat shell keeps the composer focused, so the zoom has no
      moment to revert; before this fix the root touch-action also withheld
      pinch-zoom, so the user could not pull it back out either (see
      layout.css.ts). maximum-scale=1 in the viewport meta is NOT the fix:
      iOS 10+ ignores it for user pinch zoom while other engines honor it, so
      writing it would only take zoom away from Android. Raising the fields is
      the fix that stays inside the standard.
      Gated on html[data-mobile-nav-ios] (phone-chrome.ts detectIosWebKit)
      because only WebKit on iOS zooms on focus: Android and desktop keep the
      compact 13px search boxes they were designed with. The floor covers
      every text-entry field on the page, including the ones portalled
      outside the frame (settings dialogs, the market sheet, third-party
      panels) — a phone can reach all of them. Button-like and widget inputs
      are excluded (nothing to type, no keyboard), and select is left alone on
      purpose: it would break the composer's 28px access-mode control, and a
      native picker overlays the screen instead of leaving a zoomed page
      behind. The composer's mirror / backdrop layers ride along with the
      textarea: they measure the autosize height and paint the highlight, so
      all three must share one font-size or the caret drifts off the text
      (they inherit 16px from the host card today — the rule locks that in on
      hosts whose composer ships smaller).
      The contenteditable branch is the forward-looking one: dsh
      0.1.2-rc.1 replaces the composer textarea with a Lexical
      contenteditable whose card reads font-size:
      var(--dsh-content-font-size, 14px), i.e. 14px by default — squarely in
      the zoom-triggering range. Match the attribute rather than the value
      "true" (Lexical writes "true", other hosts use plaintext-only or the
      bare attribute) and exclude contenteditable="false", which Lexical puts
      on decorator nodes inside the editor. */
  html[data-mobile-nav-ios] textarea,
  html[data-mobile-nav-ios] [contenteditable]:not([contenteditable="false"]),
  html[data-mobile-nav-ios] [data-input-mirror],
  html[data-mobile-nav-ios] [data-input-backdrop],
  html[data-mobile-nav-ios] input:not([type="button"]):not([type="checkbox"]):not([type="color"]):not([type="file"]):not([type="hidden"]):not([type="image"]):not([type="radio"]):not([type="range"]):not([type="reset"]):not([type="submit"]) {
    font-size: 16px !important;
  }

  /* ---------- drawer session tree: skip off-screen rendering ----------
     The drawer mounts ~389 nodes at once (the open gesture early-commits
     the host state while the drawer is still off-screen), and during
     streaming every token commit re-lays-out tree rows that are not even
     visible. content-visibility: auto lets the engine skip layout and
     paint of the session tree while it is outside the viewport (the arm
     moment of the open gesture) and of off-screen rows when the drawer is
     open on a long conversation. contain-intrinsic-size keeps the scroll
     geometry stable while rows are skipped. Scoped to the drawer tree via
     the frame marker + first child so the explorer sheet tree (a different
     subtree) is not affected. Measured with CDP Tracing on an empty
     conversation at 1x CPU (2026-08-29): biggest script task 104 -> 66ms,
     max rAF gap 167 -> 33ms; the benefit scales with conversation length.
     Desktop untouched (this block lives inside the max-width: 1023px
     media query). */
  :is([data-dsh-frame], [data-mobile-nav="frame"]) > :first-child [role="tree"] {
    content-visibility: auto;
    contain-intrinsic-size: auto 600px;
  }
}

/* ---------- tablet / wide mobile: keep sheets from becoming full-width ----------
   Below 768px the near-full-width sheets are the right call for a phone.
   On wider but still sub-desktop viewports (foldables, tablet portrait,
   desktop-mode tall windows) the same full-bleed sheet leaves content
   clustered at the left edge with a large dead zone on the right. Cap and
   center the modal sheets and the aionui bottom sheets instead. */
@media (min-width: 768px) and (max-width: 1023px) and (pointer: coarse) {
  /* Centered, never edge-to-edge — for the modal shapes below, not for every
     modal dialog. Covered: modals that are not sheet-shaped, plus sheet-shaped
     ones with neither a navigation element nor a directory picker. A modal
     that is sheet-shaped AND carries the directory picker is left out on
     purpose — layout.css.ts holds the dedicated rule for it. The settings
     sheet has a higher-specificity full-width rule above, so repeat its
     selector here to win; the generic export/other-modal rule is covered by
     the second selector. */
  [aria-modal="true"]:has(> :first-child > :last-child > button):not(:has([role="navigation"])):not(:has([class*="ZuhsRW"])),
  [aria-modal="true"]:not(:has(> :first-child > :last-child > button)) {
    left: 0 !important;
    right: 0 !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: min(calc(100vw - 32px), 720px) !important;
    max-width: min(calc(100vw - 32px), 720px) !important;
  }

  /* The dsh-web-ui explorer / preview bottom sheets: same treatment — keep
     the mobile bottom-sheet behavior, but stop them spanning the full width. */
  [data-aionui-explorer-col],
  [data-aionui-preview-col] {
    left: 0 !important;
    right: 0 !important;
    width: min(calc(100vw - 32px), 720px) !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* Settings sections (e.g. Agent presets) often carry a desktop max-width
     (720px) that leaves a dead strip on the right once the sheet is capped to
     the same width; let them fill the sheet body instead. */
  [aria-modal="true"] [class*="_section"] {
    width: 100% !important;
    max-width: none !important;
  }
}

/* ---------- desktop / non-touch: the mobile controls must never appear ----------
   Exact complement of the mobile query "(max-width: 1023px) and (pointer:
   coarse)" as a comma list (NOT A or NOT B): any viewport ≥1024px, plus any
   narrow viewport whose primary pointer is a mouse (fine) or absent (none).
   The pointer terms are what keep the header Files button off narrow desktop
   windows — the slot renders the buttons at every width, so before this the
   only guard was the width term (2026-08-30 PC leak: split windows and OS
   display scaling dropped the CSS viewport below 1024px and armed the whole
   mobile shell on desktop).

   The session-delete trio (menu item + confirm/error dialog) is the ONE
   deliberate exception: its effect arms on TOUCH_QUERY (pointer: coarse at
   every width — large tablets in landscape), so it lives in the pointer-only
   block below instead of this width arm. */

@media (min-width: 1024px), (pointer: fine), (pointer: none) {
  [data-mobile-nav="toggle"],
  [data-mobile-nav="files"],
  [data-mobile-nav="file-upload"],
  [data-mobile-nav="fab"],
  [data-mobile-nav="backdrop"],
  [data-mobile-nav="session-log"],
  [data-mobile-nav="preview-full-toggle"],
  [data-mobile-nav="drawer-actions"] {
    display: none !important;
  }
}

/* Session-delete trio: hide on mouse-driven or pointer-less windows at ANY
   width. No width term — the injection is armed on touch at every width, so
   a width arm here would hide the item on wide touch (the device class the
   injection exists for). */
@media (pointer: fine), (pointer: none) {
  [data-mobile-nav="session-delete"],
  [data-mobile-nav="delete-dialog-backdrop"],
  [data-mobile-nav="delete-dialog"] {
    display: none !important;
  }
}
`;
};
__modules["styles/index.js"] = function (require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOBILE_CSS = void 0;
const base_css_ts_1 = require("./styles/base.css.js");
const layout_css_ts_1 = require("./styles/layout.css.js");
const compat_css_ts_1 = require("./styles/compat.css.js");
const misc_css_ts_1 = require("./styles/misc.css.js");
/**
 * All mobile styles, concatenated in the exact order of the original
 * single-file stylesheet (base → layout → compat → misc, where misc keeps
 * composer → tablet → desktop). Injected as ONE <style data-plugin> tag —
 * do not reorder.
 */
exports.MOBILE_CSS = [base_css_ts_1.BASE_CSS, layout_css_ts_1.LAYOUT_CSS, compat_css_ts_1.COMPAT_CSS, misc_css_ts_1.MISC_CSS].join('\n');
};
__modules["index.js"] = function (require, module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inject = void 0;
exports.apply = apply;
const index_ts_1 = require("./styles/index.js");
exports.inject = [];
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
function apply(ctx) {
    ctx.effect(() => {
        for (const stale of document.querySelectorAll('style[data-plugin-css="dsh-web-mobile/mobile.css"]')) {
            stale.remove();
        }
        const tag = document.createElement('style');
        tag.dataset.plugin = 'dsh-web-mobile';
        tag.dataset.pluginCss = 'dsh-web-mobile/mobile.css';
        tag.textContent = index_ts_1.MOBILE_CSS;
        document.head.appendChild(tag);
        setTimeout(() => {
            if (tag.isConnected)
                document.head.appendChild(tag);
        }, 0);
        return () => {
            tag.remove();
        };
    }, 'dsh-web-mobile: styles');
}
};
var __cache = {};
function __localRequire(id) {
  if (id.charCodeAt(0) !== 46) return require(id);
  id = id.slice(2);
  var cached = __cache[id];
  if (cached) return cached.exports;
  var module = { exports: {} };
  __cache[id] = module;
  __modules[id](__localRequire, module, module.exports);
  return module.exports;
}
var module = { exports: {} };
__modules["index.js"](__localRequire, module, module.exports);
return module.exports; } });
