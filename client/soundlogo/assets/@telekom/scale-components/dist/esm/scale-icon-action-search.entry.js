import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionSearch = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M10 4.125A5.88 5.88 0 0115.875 10a5.8 5.8 0 01-1.13 3.445l-.545.755-.755.545A5.8 5.8 0 0110 15.875a5.875 5.875 0 010-11.75M10 2a8 8 0 104.7 14.465l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77l-4.92-4.915A8 8 0 0010 2z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M21.4 19.6l-4.9-4.9a8.02 8.02 0 001.55-4.7c0-4.4-3.6-8-8-8S2 5.6 2 10s3.6 8 8 8c1.75 0 3.4-.55 4.7-1.55l4.9 4.9c.5.5 1.3.5 1.75 0 .5-.45.5-1.25.05-1.75zM3.5 10c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionSearch.style = iconCss;

export { ActionSearch as scale_icon_action_search };
