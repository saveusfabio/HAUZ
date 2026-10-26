# Paint motion — implementation and performance review

Updated 2026-10-25. The continuous ripple appearance and mobile layout have been reviewed. Preserve the ripple shape and strength when optimizing; each of the five selected colors has its own lighter, softly lit image and distinct flow shape.

## Visual contract

- One continuous tone-specific paint image in a circle. No moving strips or decorative rings.
- Slow ambient deformation bends the veins even without a pointer.
- Pointer movement deposits expanding, fading waves. Refraction strength stays at 0.19, with three folds per wave. Each palette choice loads its own colorway; do not add a second CSS tint over those images.
- Inertia follows the gesture direction: velocity is filtered and capped, then the displacement coasts to rest over several seconds. Leaving the circle does not clear this momentum.
- A tap creates one larger ripple. Touch scrolling does not deposit a continuous trail or prevent scrolling.
- Selected paint controls the texture image, hero ground and site accents.

## What the reference actually does

The [React Bits Ripple Distortion documentation and source](https://reactbits.dev/animations/ripple-distortion) were read in the interactive Code tab. The implementation renders accumulated expanding brush marks into a displacement texture, then refracts the source image with that texture. Its defaults include 100 wave slots, a low-quality displacement scale of 0.4, DPR up to 2 and an ongoing animation loop.

Our buildless implementation uses the same visual principle in native WebGL, with no React or OGL dependency. It is an adaptation, not a claim of pixel-identical rendering. The limited circle gives us a much smaller rendering budget than a large page-wide effect.

## Current resource budget

| Resource | Limit / behavior |
| --- | --- |
| Source images | Five local colorways, 768 × 768, about 77–127 KB each; only the current tone loads |
| Displacement texture | 128 × 128 RGBA8, linearly sampled |
| Output canvas | At most 400 × 400; DPR capped at 1.25 |
| Mobile circle | 160–190 CSS px; output at most 238 × 238 |
| Wave slots | Fixed pool of 16; no unbounded trail |
| Input | At least 38 ms and 9 CSS px between hover deposits |
| Render scheduling | At most 30 fps with waves, 24 fps at rest; actual rate depends on display timing |
| Draw calls | Two with active waves; one at rest |
| Offscreen / hidden tab | Timer and RAF cancelled, no draws |
| Reduced motion / WebGL failure | Static image; color picker remains usable |

Only the chosen texture loads. It is uploaded once when the visitor changes color; the renderer, wave pool and displacement map remain allocated. The final image pass at its maximum desktop size shades 160,000 pixels per frame. The wave pass shades 16,384. These are workload bounds, not measured GPU milliseconds or a benchmark against the earlier implementation. Mobile's smaller image pass shades at most 56,644 pixels, while retaining the same ripple parameters.

## Optimizations that preserve the accepted look

1. Reuse the image texture and displacement target; no uploads, FBO attachment changes or shader compilation during animation.
2. Cache attribute and uniform locations at initialization. No WebGL getters or pixel readbacks in the render loop.
3. Reuse typed uniform arrays and the wave pool, avoiding per-wave array allocation each frame.
4. Skip the displacement render pass once the last wave fades. Skip displacement sampling and its trigonometry in the image shader at rest.
5. Skip the inertial branch when momentum becomes visually negligible. The ambient motion continues.
6. Reject pixels outside each wave with squared distance before evaluating its square root, exponential and rings. This preserves the wave formula.
7. Initialize only when the image is ready and the circle is visible; suspend when offscreen or the tab is hidden.
8. Preserve the existing quality, strength, texture, color treatment and active wave count. Do not silently lower fidelity as a performance fix.

These choices follow the relevant guidance in [MDN WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices): bounded drawing buffers, avoiding blocking API calls in production and reusing resources. Hardware performance still requires profiling on physical target phones; the desktop browser's responsive viewport is a layout test, not a mobile GPU benchmark.

## Inertia parameters

The velocity of accepted pointer samples becomes a capped displacement target (maximum 0.072 UV). The visible displacement follows it with an exponential response of 5/s, while the target decays at 1.05/s. A broad local influence around the latest contact and a small perpendicular bend produce carry-over through the pigment. Ambient displacement is now roughly 2–3% of the texture coordinates, driven by the same overlapping slow sine/cosine fields, so the image remains visibly alive at rest. This only changes the existing displacement multiplier: there are no added render passes, loops, or frame requests. Pointer carry and ripple amplitude/ring geometry remain unchanged.

## Mobile layout

At widths up to 760 px, explicitly remove the obsolete photo-hero offsets and translateY from the text block. Center the eyebrow, title, description, CTAs, circle and picker. Let the title reflow as normal text (34–44 px, line height 1.1); disable the desktop line-entry clipping on mobile. Use 14 px body copy and a 160–200 px circle. Hide the tiny caption inside the circle because the same color name appears in the picker. Keep a clear tap target and avoid duplicate metadata at the bottom of the hero.

On desktop, keep both columns in the same frame and draw them slightly inward: the copy sits in the left column with a little more width, while the art offsets toward the central grid. The title is 54–72 px and body copy 17–19 px. A fine gradient underline and restrained halo on “website” and “your work” follow the selected pigment; the primary CTA gets a fine pigment line and both CTA arrows use the accent. Keep the swatches visible by default, with one short line of color copy that changes with selection. These are accent details, not a second headline color.

## Verification

- Browser shader compilation: succeeded; native WebGL renderer active.
- Desktop: observed continuous refraction on click and pointer movement, without strip seams.
- Mobile 390 px: title/body readable and centered, circle approximately 164 px, caption outside the circle, no horizontal document overflow.
- All five palette entries: matching image, displayed name, short line and site accent updated; the existing WebGL renderer stayed active.
- Five painterly image assets are 77–127 KB each; only the selected image is loaded into the renderer.
- Navigation away from hero: renderer state changed to paused; returning resumed it.
- JavaScript syntax and whitespace checks run before handoff.
- No physical-device GPU or battery benchmark performed; no FPS improvement percentage claimed.

Keep this file and `DESIGN-GUIDELINE.md` aligned when adjusting the motion.


## Explicit motion control

The caption sits below the circle, outside its clip. Pause motion / Play motion is keyboard accessible and exposes aria-pressed. Pausing cancels both timer and RAF and displays the source image, so changing paint remains immediately visible. Reduced motion or a WebGL fallback hides this unnecessary control. The deformation, wave strength and rendering budget remain unchanged. See REVIEW-2026-10-25.md for the latest viewport and accessibility checks.
