# Joshua Urrea — Developer Portfolio

An original Persona-inspired portfolio built with HTML, CSS, and vanilla JavaScript. No framework, runtime packages, installation, or client-side secrets. Source repository: [jush-ua/jush-ua.github.io](https://github.com/jush-ua/jush-ua.github.io). Intended URL: **https://jush-ua.github.io/**.

## Reference-led refinement

The current version uses an original graphic opening scene, mixed cut-paper lettering, selectable project case files, a developer profile plate, and a four-category equipment menu. See [REFINEMENT.md](REFINEMENT.md) for the reference analysis, changes, interactions, and verification.

## Assessment and implementation

The inspected `main` branch at `0718d10` contained only a zero-byte `index.html`. There were no components, dependencies, images, styles, routing rules, or Actions workflows to retain. Repository-level Pages settings were not available through the connected tools, so their current state is unverified.

The implementation keeps the site static: semantic sections and normal URL fragments work without a router. Relative asset paths work at the domain root and a subdirectory. `script.js` progressively adds project tabs, keyboard selection, active section navigation, and optional icons. With JavaScript disabled, all three current projects and all four technology categories remain readable and native disclosures still work.

## Preview

From this folder, run:

```powershell
npm run check
npm run build
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open **http://127.0.0.1:4173/**. Stop the server with Ctrl+C. Node.js runs the optional packaging script; Python runs the preview server. There is no `npm install` step. For editing without rebuilding, omit `--directory dist` and serve the source root locally.

## Deploy when ready

Every push to **`main`** automatically runs the JavaScript check, builds the static site, and deploys to GitHub Pages. A failed check or build stops publication. Manual runs remain available for redeployment.

1. Review the local changes, then commit and push them to `main` in `jush-ua/jush-ua.github.io`.
2. Open **Actions → Deploy portfolio to GitHub Pages** to follow the automatically triggered run.
3. Wait for the workflow to pass, then visit **https://jush-ua.github.io/**.

The repository's **Settings → Pages → Build and deployment → Source** is configured as **GitHub Actions**. To redeploy manually, use **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`.

The workflow checks JavaScript, packages only the public site into `dist/`, and uploads that directory. Development briefs, screenshots, Git metadata, and this README stay outside the published artifact. No custom domain or project base URL is introduced. Push the reviewed source to `main` for subsequent automatic deployments. Pushes to other branches do not trigger deployment.

This follows GitHub's [Pages publishing guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [official static workflow](https://github.com/actions/starter-workflows/blob/main/pages/static.yml), with a `main` push trigger, optional manual trigger, and an explicit public-file allowlist.

## Files and maintenance

- `index.html`: biography, projects, stack, social links, metadata, and original SVG symbols.
- `styles.css`: color/type/layout tokens, responsive layouts, focus states, and reduced-motion rules.
- `script.js`: project tabs (Up/Down/Home/End), panel wipes, optional technology icons, and scroll navigation.
- `assets/`: local fonts, their licenses, and an original favicon.
- `tools/build.mjs`, `package.json`: dependency-free checks and public artifact packaging.
- `.github/workflows/pages.yml`: automatic Pages deployment on pushes to `main`, plus manual redeployment.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: development context and design documentation, excluded from `dist/`.

Edit project content directly in the HTML. Each project selector's `aria-controls` must match its corresponding panel ID. Technology icons use `data-icon` values from Skill Icons; concepts without a matching icon use labeled badges. Keep status copy explicit when projects evolve, and only add repository links or screenshots after verifying them.

## Content and asset provenance

Personal and project copy comes from the supplied brief and the public [profile README](https://github.com/jush-ua/jush-ua). The four archive repositories were verified through GitHub. Public repositories for TanikaLaya, POSTURE-CHECK, and AFAIK were not verified, so those projects have no invented repository URLs. AFAIK speech recognition and feedback remain explicitly planned. No project screenshots were available in the portfolio repository; the workflow diagrams are conceptual, not product screenshots.

Barlow, Barlow Condensed, and Alfa Slab One are self-hosted from [Google Fonts](https://github.com/google/fonts), under the SIL Open Font License; copies are in `assets/fonts/`. All star geometry and the favicon are original SVG. No Persona art, game logos, characters, music, or interface assets are used. MIT-licensed [Skill Icons](https://github.com/tandpfun/skill-icons) are bundled in `assets/icons/` with their license and load lazily from the same origin. A failed local image request leaves a readable badge. Decorative badge abbreviations are hidden from assistive technology so technology names are announced once. Fonts use locally hosted Latin-subset WOFF2 files. The Barlow families total 67,412 bytes, down from 322,328 bytes of TTF; Alfa Slab One adds the new expressive display voice. Other writing scripts use the system fallback. Optional external GitHub statistics are omitted; the site links to the actual GitHub profile instead of presenting cached or invented counts.

## Validation and limits

- JavaScript syntax check and static build pass; `git diff --check` passes.
- Unique IDs, fragment destinations, project control references, and every local asset were checked; all local asset requests returned HTTP 200.
- Browser checks covered 390, 490, 768, and 1440 px viewports with no horizontal overflow, project clicking, keyboard selection/focus, and disclosure expansion.
- Follow-up review covered 320, 390, 768, and 1440 px widths, enlarged small links to 44px targets, and checked all 15 local icons. See `REVIEW.md`.
- Responsive screenshot inspection covered mobile, tablet, and desktop. Reduced motion is implemented in both CSS and JavaScript; OS-level reduced-motion emulation was not available in this browser tool.
- This is browser and source QA, not a full assistive-technology or cross-browser certification. Actual GitHub Pages deployment remains untested until you run the manual workflow.
