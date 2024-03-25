'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceReplacementMobilephone = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M7.03 3l-.023.25L7 3.5v1H4.5a1.5 1.5 0 00-1.493 1.356L3 6v14.5a1.5 1.5 0 001.356 1.493L4.5 22h2.765c.166.475.413.917.727 1.309l.163.191H4.5a3 3 0 01-2.995-2.824L1.5 20.5V6a3 3 0 012.824-2.995L4.5 3h2.53zM19.5.5a3 3 0 012.995 2.824l.005.176v17a3 3 0 01-2.824 2.995l-.176.005h-8a3 3 0 01-2.995-2.824L8.5 20.5v-6.25h2.25v3.5l7.62-5-7.62-5v3.5H8.5V3.5A3 3 0 0111.324.505L11.5.5h8zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm-4-9.6l5.5 3.6-5.5 3.6V13.5H6.75a.75.75 0 01-.102-1.493L6.75 12h4.75V9.15zm6-6.9h-4v1h4v-1z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M7.05 3a1.339 1.339 0 00-.05.38V4.5H4.5c-.8 0-1.423.576-1.493 1.352L3 6v14.5c0 .8.576 1.423 1.352 1.493L4.5 22h2.75c.167.458.403.882.708 1.27l.192.23H4.5a3.01 3.01 0 01-2.995-2.824L1.5 20.5V6a3.01 3.01 0 012.824-2.995L4.5 3h2.55zM19.5.5a3.01 3.01 0 012.995 2.824l.005.176v17a3.01 3.01 0 01-2.824 2.995l-.176.005h-8a3.01 3.01 0 01-2.995-2.824L8.5 20.5V15H10v5.5c0 .8.576 1.423 1.352 1.493L11.5 22h8c.8 0 1.423-.576 1.493-1.352L21 20.5v-17c0-.8-.576-1.423-1.352-1.493L19.5 2h-2v1.5h-4V2h-2c-.8 0-1.423.576-1.493 1.352L10 3.5v7H8.5v-7A3.01 3.01 0 0111.324.505L11.5.5h8zm-4 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4-9.35l5.5 3.6-5.5 3.6V13.5H6.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L6.75 12h4.75V9.15z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceReplacementMobilephone.style = iconCss;

exports.scale_icon_device_replacement_mobilephone = DeviceReplacementMobilephone;
