import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationAvailable = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm5.53 8.295l-6.865 6.865-4.195-4.195a.75.75 0 111.06-1.06l3.135 3.135 5.805-5.805a.755.755 0 011.06 0 .745.745 0 010 1.06z", "fill-rule": "evenodd" }))) : (h("g", null, h("g", { "fill-rule": "evenodd" }, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20.5c-5.239 0-9.5-4.262-9.5-9.5 0-5.239 4.261-9.5 9.5-9.5 5.238 0 9.5 4.261 9.5 9.5 0 5.238-4.262 9.5-9.5 9.5z" }), h("path", { d: "M16.47 8.236l-5.803 5.803-3.137-3.136a.75.75 0 10-1.06 1.06l4.197 4.197 6.864-6.863a.75.75 0 10-1.061-1.061z" }))))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-communication-available", {
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
  const components = ["scale-icon-communication-available"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-communication-available":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CommunicationAvailable);
      }
      break;
  } });
}

const ScaleIconCommunicationAvailable = CommunicationAvailable;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconCommunicationAvailable, defineCustomElement };