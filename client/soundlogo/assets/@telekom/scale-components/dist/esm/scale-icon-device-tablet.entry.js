import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceTablet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M20 13.25a1 1 0 11.001-2 1 1 0 010 2m.5-9.75h-17a3 3 0 00-3 3v11a3 3 0 003 3h17a3 3 0 003-3v-11a3 3 0 00-3-3", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M20 11.25a1 1 0 100 2 1 1 0 000-2zm2 6.25c0 .827-.672 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5h17c.828 0 1.5.673 1.5 1.5v11zm-1.5-14h-17a3 3 0 00-3 3v11a3 3 0 003 3h17a3 3 0 003-3v-11a3 3 0 00-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceTablet.style = iconCss;

export { DeviceTablet as scale_icon_device_tablet };
