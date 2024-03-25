import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileBilling = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M19 4.03v1.5l1.145.105-1.4 15.435a1.5 1.5 0 01-1.5 1.365h-.14L7.15 21.53 7 21.5H4.67A3 3 0 007.015 23l9.985.925c.092.005.183.005.275 0a3 3 0 003-2.73L21.77 4.28 19 4.03zM7 4V0L1.5 5.5h4A1.5 1.5 0 007 4zm10.5 13V0H8v4a2.5 2.5 0 01-2.5 2.5h-4V17a3 3 0 003 3h10a3 3 0 003-3zm-5.535-2.135c-.162.064-.33.114-.5.15-.17.035-.34.06-.5.08-.16.02-.345 0-.5 0A3.235 3.235 0 018.43 14.5a3.3 3.3 0 01-1.115-2.045h-1l.355-1h.535v-.64h-.9l.355-1h.68c.096-.43.265-.842.5-1.215a2.92 2.92 0 01.73-.805 2.71 2.71 0 01.915-.455 3.775 3.775 0 011.015-.205 5.14 5.14 0 011.74.29l-.385 1.115a2.625 2.625 0 00-.555-.15 5.44 5.44 0 00-.75-.045c-.4-.011-.794.104-1.125.33a2.05 2.05 0 00-.715 1.08h2.84l-.285 1h-2.72a1.03 1.03 0 000 .17v.47h2.5l-.285 1H8.71c.109.433.352.82.695 1.105a2 2 0 001.265.375c.268.005.536-.03.795-.1.21-.06.41-.143.6-.25l.295 1.09c-.12.1-.253.185-.395.25z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M19 4.05l2.8.25-1.55 16.95a2.978 2.978 0 01-3.074 2.71L17 23.95 7 23a2.777 2.777 0 01-2.261-1.344L4.65 21.5H7a.161.161 0 00.112.05h.038l9.95.9a1.49 1.49 0 001.635-1.218l.015-.132 1.4-15.45-1.15-.1v-1.5zM17.5 0v17a3.01 3.01 0 01-2.824 2.995L14.5 20h-10a3.01 3.01 0 01-2.995-2.824L1.5 17V5l5-5h11zM16 1.5H7.5v3c0 .8-.576 1.423-1.352 1.493L6 6H3v11c0 .8.576 1.423 1.352 1.493l.148.007h10c.8 0 1.423-.576 1.493-1.352L16 17V1.5zM8.6 7.9c.941-.706 2.414-.747 3.5-.375l.2.075-.4 1.1c-.6-.25-1.75-.35-2.45.15a2.152 2.152 0 00-.64.92l-.06.18h2.85l-.3 1H8.55v.65h2.5l-.3 1H8.7c.15.5.4.85.7 1.1.562.422 1.608.536 2.52.096l.18-.096.3 1.1c-.85.6-2.8.65-3.95-.2-.5-.41-.835-.983-1.042-1.798l-.058-.252h-1l.35-1h.55v-.65h-.9l.35-1h.7c.2-.8.55-1.5 1.2-2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-billing", {
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
  const components = ["scale-icon-user-file-billing"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-billing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileBilling);
      }
      break;
  } });
}

const ScaleIconUserFileBilling = UserFileBilling;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileBilling, defineCustomElement };
