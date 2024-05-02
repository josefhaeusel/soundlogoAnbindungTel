import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileCommunities = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M15.7 14.6a3.542 3.542 0 013.462 2.763l.038.187.25 1.45H4.6l.25-1.4a3.45 3.45 0 013.257-2.945l.193-.005h1.35L12 17l2.35-2.4h1.35zm4.65-.05c1.39 0 2.595.964 2.914 2.277L23.3 17l.4 2h-1.55l-.35-1.75c-.093-.653-.666-1.132-1.31-1.193l-.14-.007h-.05a5.02 5.02 0 00-.833-1.27l-.217-.23h1.1zm-15.55 0c-.375.375-.68.785-.946 1.23l-.154.27h-.05c-.653 0-1.22.436-1.414 1.063l-.036.137L1.85 19H.3l.4-2c.24-1.39 1.398-2.366 2.77-2.445l.18-.005H4.8zM12 4.25c2.5 0 4.4 1.9 4.4 4.4 0 2.45-1.8 5.05-4.4 5.05-2.6 0-4.4-2.65-4.4-5.05 0-2.5 1.9-4.4 4.4-4.4zm-5.6 1.1c.2 0 .45 0 .65.05-.25.45-.5.95-.65 1.45-1.35 0-2.3.95-2.3 2.3 0 1.35.95 2.85 2.3 2.85.15 0 .35-.05.5-.1.25.45.5.85.85 1.25-.4.2-.85.3-1.35.3-2.1 0-3.8-1.95-3.8-4.3 0-2.15 1.65-3.8 3.8-3.8zm11.2-.1c2.15 0 3.8 1.65 3.8 3.8 0 2.4-1.7 4.35-3.8 4.35-.45 0-.9-.1-1.35-.3.35-.35.6-.8.85-1.25.15.05.3.1.5.1 1.4 0 2.3-1.45 2.3-2.85 0-1.35-.95-2.3-2.3-2.35-.15-.55-.35-1-.65-1.45.2-.05.4-.05.65-.05z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M15.7 14.6a3.542 3.542 0 013.462 2.763l.038.187.25 1.45H4.6l.25-1.4a3.45 3.45 0 013.257-2.945l.193-.005h1.35L12 17l2.35-2.4h1.35zm4.65-.05c1.39 0 2.595.964 2.914 2.277L23.3 17l.4 2h-1.55l-.35-1.75c-.093-.653-.666-1.132-1.31-1.193l-.14-.007h-.05a5.02 5.02 0 00-.833-1.27l-.217-.23h1.1zm-15.55 0c-.375.375-.68.785-.946 1.23l-.154.27h-.05c-.653 0-1.22.436-1.414 1.063l-.036.137L1.85 19H.3l.4-2c.24-1.39 1.398-2.366 2.77-2.445l.18-.005H4.8zM12 4.25c2.5 0 4.4 1.9 4.4 4.4 0 2.45-1.8 5.05-4.4 5.05-2.6 0-4.4-2.65-4.4-5.05 0-2.5 1.9-4.4 4.4-4.4zm-5.6 1.1c.2 0 .45 0 .65.05-.25.45-.5.95-.65 1.45-1.35 0-2.3.95-2.3 2.3 0 1.35.95 2.85 2.3 2.85.15 0 .35-.05.5-.1.25.45.5.85.85 1.25-.4.2-.85.3-1.35.3-2.1 0-3.8-1.95-3.8-4.3 0-2.15 1.65-3.8 3.8-3.8zm11.2-.1c2.15 0 3.8 1.65 3.8 3.8 0 2.4-1.7 4.35-3.8 4.35-.45 0-.9-.1-1.35-.3.35-.35.6-.8.85-1.25.15.05.3.1.5.1 1.4 0 2.3-1.45 2.3-2.85 0-1.35-.95-2.3-2.3-2.35-.15-.55-.35-1-.65-1.45.2-.05.4-.05.65-.05zm-5.6.5c-1.7 0-2.9 1.15-2.9 2.9 0 1.7 1.15 3.55 2.9 3.55s2.9-1.8 2.9-3.55c0-1.7-1.2-2.9-2.9-2.9z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-communities", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"],
    "focusable": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-user-file-communities"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-communities":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileCommunities);
      }
      break;
  } });
}

const ScaleIconUserFileCommunities = UserFileCommunities;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileCommunities, defineCustomElement };
