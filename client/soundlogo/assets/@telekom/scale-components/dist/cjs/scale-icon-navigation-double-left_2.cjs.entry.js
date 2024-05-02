'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const NavigationDoubleLeft = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M19.814 18.28a1.249 1.249 0 00-.208-1.755l-5.735-4.523 5.735-4.522a1.249 1.249 0 10-1.547-1.963l-8.224 6.485 8.224 6.486a1.248 1.248 0 001.755-.208m-7.594.476c-.271 0-.544-.088-.773-.268l-8.223-6.486 8.223-6.485a1.25 1.25 0 011.548 1.963L7.26 12.002l5.734 4.523a1.25 1.25 0 01-.775 2.231", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M19.294 16.911l-6.22-4.91 6.22-4.913a.75.75 0 10-.928-1.178L10.652 12l7.712 6.088a.75.75 0 10.929-1.177m-6.69 0l-6.221-4.91 6.22-4.913a.751.751 0 00-.93-1.178L3.963 12l7.712 6.088a.748.748 0 001.054-.124.75.75 0 00-.124-1.053", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
NavigationDoubleLeft.style = iconCss$1;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const NavigationDoubleRight = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M5.943 18.488l8.224-6.485-8.224-6.485A1.25 1.25 0 004.395 7.48l5.735 4.522-5.735 4.522a1.249 1.249 0 00.775 2.232c.27 0 .544-.088.773-.27m5.838.27a1.249 1.249 0 01-.775-2.232l5.735-4.522-5.735-4.522a1.25 1.25 0 011.548-1.963l8.224 6.485-8.224 6.485a1.243 1.243 0 01-.773.269", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M12.327 5.911a.75.75 0 10-.93 1.178L17.62 12l-6.222 4.911a.75.75 0 10.931 1.177L20.04 12l-7.712-6.089zm-6.69 0a.75.75 0 10-.93 1.178L10.927 12l-6.22 4.911a.75.75 0 00.93 1.177L13.347 12 5.636 5.911z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
NavigationDoubleRight.style = iconCss;

exports.scale_icon_navigation_double_left = NavigationDoubleLeft;
exports.scale_icon_navigation_double_right = NavigationDoubleRight;
