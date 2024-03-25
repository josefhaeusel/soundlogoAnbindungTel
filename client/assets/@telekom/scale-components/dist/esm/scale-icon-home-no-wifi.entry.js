import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeNoWifi = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 18a2 2 0 110 4 2 2 0 010-4zM1.57 1.97a.744.744 0 01.975-.073l.085.073 18 18a.745.745 0 010 1.06.754.754 0 01-.53.22.755.755 0 01-.437-.141l-.093-.079-18-18a.75.75 0 010-1.06zm8.615 11.795l1.74 1.735a4.5 4.5 0 00-3.789 2.193l-.106.187-1.435-1.49a6.495 6.495 0 013.314-2.538l.276-.087zM12 9c3.35 0 6.349 1.5 8.365 3.863l.205.247-1.405 1.46a9.012 9.012 0 00-4.823-3.258l-.327-.082-2.225-2.225L12 9zm-5.245 1.335l1.49 1.49a9.047 9.047 0 00-3.2 2.478l-.21.267-1.405-1.46a11.063 11.063 0 012.978-2.578l.347-.197zM3.48 7.06l1.445 1.445A13.644 13.644 0 002 10.941l-.315.359L.29 9.855c.827-.951 1.768-1.8 2.8-2.528l.39-.267zM12 4.5c4.542 0 8.623 1.955 11.46 5.069l.255.286L22.32 11.3a13.465 13.465 0 00-12.319-4.647l-.486.082-1.67-1.67A15.608 15.608 0 0112 4.5z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 18a2 2 0 110 4 2 2 0 010-4zM1.57 1.97a.744.744 0 01.975-.073l.085.073 18 18a.745.745 0 010 1.06.754.754 0 01-.53.22.755.755 0 01-.437-.141l-.093-.079-18-18a.75.75 0 010-1.06zm8.615 11.795l1.74 1.735a4.5 4.5 0 00-3.789 2.193l-.106.187-1.435-1.49a6.495 6.495 0 013.314-2.538l.276-.087zM12 9c3.35 0 6.349 1.5 8.365 3.863l.205.247-1.405 1.46a9.012 9.012 0 00-4.823-3.258l-.327-.082-2.225-2.225L12 9zm-5.245 1.335l1.49 1.49a9.047 9.047 0 00-3.2 2.478l-.21.267-1.405-1.46a11.063 11.063 0 012.978-2.578l.347-.197zM3.48 7.06l1.445 1.445A13.644 13.644 0 002 10.941l-.315.359L.29 9.855c.827-.951 1.768-1.8 2.8-2.528l.39-.267zM12 4.5c4.542 0 8.623 1.955 11.46 5.069l.255.286L22.32 11.3a13.465 13.465 0 00-12.319-4.647l-.486.082-1.67-1.67A15.608 15.608 0 0112 4.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
HomeNoWifi.style = iconCss;

export { HomeNoWifi as scale_icon_home_no_wifi };
