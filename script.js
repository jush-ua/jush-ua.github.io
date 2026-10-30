// Keep the static document readable; selectors and transitions are progressive enhancements.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function createSelector({ root, choices, panels, label }) {
  if (!root || !choices.length || choices.length !== panels.length) return;
  const list = choices[0].parentElement;
  list.setAttribute("role", "tablist");
  list.setAttribute("aria-orientation", "vertical");
  root.classList.add("enhanced");
  function select(index, focus = false) {
    if (choices[index].getAttribute("aria-selected") === "true") return;
    choices.forEach((choice, current) => {
      const active = current === index;
      choice.setAttribute("aria-selected", String(active));
      choice.tabIndex = active ? 0 : -1;
      panels[current].hidden = !active;
      panels[current].classList.remove("panel-enter");
    });
    if (!reducedMotion.matches) {
      void panels[index].offsetWidth;
      panels[index].classList.add("panel-enter");
    }
    if (focus) choices[index].focus();
  }
  choices.forEach((choice, index) => {
    choice.id = `${label}-tab-${index}`;
    choice.setAttribute("role", "tab");
    panels[index].setAttribute("role", "tabpanel");
    panels[index].setAttribute("aria-labelledby", choice.id);
    panels[index].tabIndex = 0;
    choice.addEventListener("click", () => select(index));
    choice.addEventListener("keydown", (event) => {
      let next;
      if (["ArrowDown", "ArrowRight"].includes(event.key))
        next = (index + 1) % choices.length;
      if (["ArrowUp", "ArrowLeft"].includes(event.key))
        next = (index - 1 + choices.length) % choices.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = choices.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(next, true);
      }
    });
  });
  select(0);
}

createSelector({
  root: document.querySelector(".project-workbench"),
  choices: [...document.querySelectorAll(".project-choice")],
  panels: [...document.querySelectorAll(".project-panel")],
  label: "project",
});
createSelector({
  root: document.querySelector(".stack-workbench"),
  choices: [...document.querySelectorAll(".kit-choice")],
  panels: [...document.querySelectorAll(".stack-group")],
  label: "kit",
});

document.querySelectorAll("[data-icon]").forEach((item) => {
  const icon = new Image(62, 62);
  icon.alt = "";
  icon.loading = "lazy";
  icon.decoding = "async";
  icon.addEventListener("error", () => icon.remove(), { once: true });
  icon.src = `./assets/icons/${encodeURIComponent(item.dataset.icon)}.svg`;
  item.querySelector("span").append(icon);
});

const menu = [...document.querySelectorAll(".main-menu a")];
menu.forEach((link, index) => {
  const highlight = () =>
    menu.forEach((item) => item.classList.toggle("is-selected", item === link));
  link.addEventListener("pointerenter", highlight);
  link.addEventListener("focus", highlight);
  link.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowDown") next = (index + 1) % menu.length;
    if (event.key === "ArrowUp") next = (index - 1 + menu.length) % menu.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = menu.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      menu[next].focus();
    }
  });
});

// Decorative sweeps never delay navigation, capture input, or run while simply scrolling.
const sweep = document.querySelector(".nav-sweep");
let sweepTimer;
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target || reducedMotion.matches || !target.matches(".section")) return;
    sweep.classList.remove("running");
    void sweep.offsetWidth;
    sweep.classList.add("running");
    clearTimeout(sweepTimer);
    sweepTimer = setTimeout(() => sweep.classList.remove("running"), 400);
    const heading = target.querySelector("h2");
    if (heading && typeof heading.animate === "function")
      heading.animate(
        [
          { transform: "translateX(18px) rotate(-2deg)" },
          { transform: "none" },
        ],
        { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" },
      );
  });
});
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) {
    sweep.classList.remove("running");
    document
      .querySelectorAll(".panel-enter")
      .forEach((panel) => panel.classList.remove("panel-enter"));
    document
      .querySelectorAll(".section h2")
      .forEach((heading) =>
        heading.getAnimations().forEach((animation) => animation.cancel()),
      );
  }
});

const dock = document.querySelector(".section-dock");
const links = [...dock.querySelectorAll("a")];
const sections = links.map((link) => document.querySelector(link.hash));
let scheduled = false;
function updateNavigation() {
  const positions = sections.map(
    (section) => section.getBoundingClientRect().top,
  );
  const show = positions[0] <= 80;
  dock.classList.toggle("visible", show);
  dock.inert = !show;
  let active = null;
  positions.forEach((top, index) => {
    if (top <= window.innerHeight * 0.35) active = sections[index].id;
  });
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 4
  )
    active = "contact";
  links.forEach((link) => {
    if (link.hash === `#${active}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scheduled = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateNavigation);
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateNavigation);
updateNavigation();
