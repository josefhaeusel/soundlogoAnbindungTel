import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationBlog = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M11.775 19.452l1.898 1.9-2.607.707.71-2.607zm9.836-9.307a1.376 1.376 0 011.073 2.238l-.1.112-8.044 8.037-1.946-1.947 8.044-8.037c.269-.268.62-.403.973-.403zM19.115 2v8.047l-5.781 5.777h-2.686l-3.122 3.122a1.556 1.556 0 01-1.112.469c-.771 0-1.513-.566-1.593-1.436l-.007-.156v-1.998h-1.09a2.724 2.724 0 01-2.719-2.558L1 13.1V2h18.115z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M11.775 19.452l1.898 1.9-2.607.707.71-2.607zm9.836-9.307a1.376 1.376 0 011.073 2.238l-.1.112-8.044 8.037-1.946-1.947 8.044-8.037c.269-.268.62-.403.973-.403zM19.115 2v8.047l-1.431 1.43V3.43H2.43v9.67c0 .67.51 1.221 1.162 1.288l.132.006h2.52v3.429c0 .114.086.148.135.157l.035.005a.11.11 0 00.07-.023l.031-.027 3.54-3.54 4.71-.001-1.431 1.43h-2.686l-3.122 3.122a1.556 1.556 0 01-1.112.469c-.771 0-1.513-.566-1.593-1.436l-.007-.156v-1.998h-1.09a2.724 2.724 0 01-2.719-2.558L1 13.1V2h18.115z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-communication-blog", {
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
  const components = ["scale-icon-communication-blog"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-communication-blog":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CommunicationBlog);
      }
      break;
  } });
}

const ScaleIconCommunicationBlog = CommunicationBlog;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconCommunicationBlog, defineCustomElement };