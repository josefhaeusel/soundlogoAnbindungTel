import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileSwitchUsers = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M18 18.65v1.85h2.75c.4 0 .75.35.75.75a.772.772 0 01-.651.743L20.75 22H18v1.85l-4-2.6 4-2.6zM7.1 15.5l2.9 2.9 2.85-2.9h2c-.3.45-.45 1.05-.3 1.7.089.489.375.899.719 1.23l.131.12L13.15 20H.6l.15-.8a4.402 4.402 0 014.136-3.695L5.1 15.5h2zm12.4-1.35l4 2.6-4 2.6V17.5h-2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L16.75 16h2.75v-1.85zM10 2.25c3.2 0 5.55 2.35 5.55 5.55 0 3.1-2.25 6.45-5.55 6.45S4.45 10.9 4.45 7.8c0-3.2 2.35-5.55 5.55-5.55z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M18 18.65v1.85h2.75c.4 0 .75.35.75.75a.772.772 0 01-.651.743L20.75 22H18v1.85l-4-2.6 4-2.6zM7.1 15.5l2.9 2.9 2.85-2.9h2c-.3.45-.45 1.05-.3 1.7.089.489.375.899.719 1.23l.131.12L13.15 20H.6l.15-.8a4.402 4.402 0 014.136-3.695L5.1 15.5h2zm12.4-1.35l4 2.6-4 2.6V17.5h-2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L16.75 16h2.75v-1.85zM10 2.25c3.2 0 5.55 2.35 5.55 5.55 0 3.1-2.25 6.45-5.55 6.45S4.45 10.9 4.45 7.8c0-3.2 2.35-5.55 5.55-5.55zm0 1.5c-2.35 0-4.05 1.7-4.05 4.05 0 2.4 1.65 4.95 4.05 4.95s4.05-2.55 4.05-4.95c0-2.35-1.7-4.05-4.05-4.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-switch-users", {
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
  const components = ["scale-icon-user-file-switch-users"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-switch-users":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileSwitchUsers);
      }
      break;
  } });
}

const ScaleIconUserFileSwitchUsers = UserFileSwitchUsers;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileSwitchUsers, defineCustomElement };