import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSignal = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 10a2 2 0 01.902 3.78l-.152.07V22a.75.75 0 01-1.493.102L11.25 22v-8.15A2 2 0 0112 10zM3.65 3.65l1.5 1.5v.01a9.694 9.694 0 00-.206 13.487l.206.213-1.5 1.5C-.876 15.82-.952 8.521 3.42 3.887l.23-.237zm16.705-.005c4.52 4.54 4.596 11.83.23 16.463l-.23.237-1.5-1.5a9.694 9.694 0 00.206-13.487l-.206-.213 1.5-1.5zM6.5 6.5L8 8a5.685 5.685 0 00-.195 7.846L8 16.05l-1.5 1.5a7.825 7.825 0 01-.19-10.853L6.5 6.5zm11.025 0a7.825 7.825 0 01.168 10.8l-.193.2L16 16a5.685 5.685 0 00.202-7.812L16.025 8l1.5-1.5z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12.04 10.024c1.077 0 1.959.882 1.959 1.96a1.92 1.92 0 01-1.08 1.748l-.145.064v7.984a.753.753 0 01-.734.734.757.757 0 01-.728-.638l-.007-.096v-7.984a1.922 1.922 0 01-1.224-1.812c0-1.078.881-1.96 1.959-1.96zM4.056 4l1.078 1.078a9.799 9.799 0 00-.255 13.597l.206.215-1.029 1.028C-.276 15.634-.35 8.654 3.832 4.23L4.056 4zm15.967 0c4.284 4.332 4.358 11.313.222 15.69l-.222.228-1.028-1.028c3.75-3.75 3.819-9.811.208-13.647l-.208-.214L20.023 4zM6.848 6.792L7.877 7.82a5.813 5.813 0 00-1.715 4.164c0 1.475.564 2.863 1.529 3.96l.186.203-1.029 1.029a7.34 7.34 0 01-2.155-5.192c0-1.856.703-3.625 1.943-4.972l.212-.22zm10.384 0a7.34 7.34 0 012.155 5.192 7.337 7.337 0 01-1.944 4.971l-.211.22-1.029-1.028a5.813 5.813 0 001.714-4.163c0-1.475-.52-2.864-1.52-3.961l-.194-.203 1.029-1.028z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-signal", {
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
  const components = ["scale-icon-content-signal"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-signal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentSignal);
      }
      break;
  } });
}

const ScaleIconContentSignal = ContentSignal;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentSignal, defineCustomElement };
