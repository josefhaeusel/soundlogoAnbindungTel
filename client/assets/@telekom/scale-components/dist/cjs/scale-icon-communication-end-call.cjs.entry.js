'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationEndCall = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M23.905 12.195c-.465-2.09-2.515-3.235-3.13-3.535C18.585 7.59 15.47 7 12 7c-3.47 0-6.585.59-8.775 1.66-.615.3-2.66 1.45-3.13 3.535-.315 1.42.15 2.92 1.39 4.47l.31.385 6.485-1.825V12.87c0-.375.285-.69.665-.735.71-.08 1.815-.17 3.055-.17 1.24 0 2.345.095 3.055.17.38.04.665.355.665.735v2.355l6.485 1.825.31-.385c1.24-1.545 1.705-3.05 1.39-4.47z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M23.905 12.195c-.465-2.09-2.515-3.235-3.13-3.535C18.585 7.59 15.47 7 12 7c-3.47 0-6.585.59-8.775 1.66-.615.3-2.66 1.45-3.13 3.535-.315 1.42.15 2.92 1.39 4.47l.31.385 6.485-1.825V12.87c0-.375.285-.69.665-.735.71-.08 1.815-.17 3.055-.17 1.24 0 2.345.095 3.055.17.38.04.665.355.665.735v2.355l6.485 1.825.31-.385c1.24-1.545 1.705-3.05 1.39-4.47zm-2.265 3.14l-4.42-1.245v-1.215c0-1.145-.86-2.1-2-2.225-2.175-.24-4.26-.24-6.435 0-1.14.125-2 1.08-2 2.225v1.215l-4.42 1.245c-.72-1.025-.99-1.965-.8-2.81.32-1.435 1.86-2.29 2.325-2.515C5.87 9.035 8.755 8.5 12 8.5c3.245 0 6.13.535 8.115 1.505.465.225 2.005 1.08 2.325 2.515.19.85-.08 1.795-.8 2.815z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CommunicationEndCall.style = iconCss;

exports.scale_icon_communication_end_call = CommunicationEndCall;
