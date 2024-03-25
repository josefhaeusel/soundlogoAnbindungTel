import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceSmartSpeaker = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 7.55c1.711 0 3.422.363 4.663.712l.501.148.436.14h1.1c1.05 0 1.9.75 2 1.8l.223 2.86.077 1.062.067 1.056c.05.866.083 1.689.083 2.372 0 2.226-1.405 4.17-3.444 4.656l-.206.044v.1c0 .51-.388.935-.884.993l-.116.007h-9c-.51 0-.935-.388-.993-.884L6.5 22.5v-.05C4.35 22 2.85 20 2.85 17.7c0-.732.032-1.617.082-2.546L3 14.025c.012-.19.026-.379.039-.567l.084-1.113.044-.535.09-1.003.043-.457c.095-.95.867-1.72 1.844-1.794L5.3 8.55h1.15l.347-.113.408-.125.463-.132c1.14-.312 2.687-.63 4.332-.63zm1 9.95v2h-2v-2h2zM12.25 4c1.364 0 2.645.248 3.805.669l.345.131-.7 1.35a8.86 8.86 0 00-3.45-.7c-1.273 0-2.463.29-3.57.755l-.33.145-.7-1.3C9.05 4.4 10.6 4 12.25 4zm0-3.5c1.95 0 3.77.388 5.462 1.124l.388.176-.7 1.3C15.8 2.4 14.1 2 12.25 2c-1.857 0-3.628.388-5.233 1.124L6.65 3.3 5.95 2C7.85 1.05 10 .5 12.25.5z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 7.55c1.711 0 3.422.363 4.663.712l.501.148.436.14h1.1c1.05 0 1.9.75 2 1.8l.223 2.86.077 1.062.067 1.056c.05.866.083 1.689.083 2.372 0 2.226-1.405 4.17-3.444 4.656l-.206.044v.1c0 .51-.388.935-.884.993l-.116.007h-9c-.51 0-.935-.388-.993-.884L6.5 22.5v-.05C4.35 22 2.85 20 2.85 17.7c0-.732.032-1.617.082-2.546L3 14.025c.012-.19.026-.379.039-.567l.084-1.113.044-.535.09-1.003.043-.457c.095-.95.867-1.72 1.844-1.794L5.3 8.55h1.15l.347-.113.408-.125.463-.132c1.14-.312 2.687-.63 4.332-.63zM18.7 10H5.3c-.25 0-.5.2-.5.45l-.208 2.566-.073.984-.066.993-.054.97c-.03.63-.049 1.225-.049 1.737 0 1.786 1.212 3.2 2.826 3.295L7.35 21h9.3c1.7 0 3-1.45 3-3.3 0-.494-.017-1.057-.044-1.653l-.048-.915-.06-.935-.068-.93-.23-2.817c-.044-.219-.202-.4-.409-.44L18.7 10zM13 17.5v2h-2v-2h2zM12.25 4c1.364 0 2.645.248 3.805.669l.345.131-.7 1.35a8.86 8.86 0 00-3.45-.7c-1.273 0-2.463.29-3.57.755l-.33.145-.7-1.3C9.05 4.4 10.6 4 12.25 4zm0-3.5c1.95 0 3.77.388 5.462 1.124l.388.176-.7 1.3C15.8 2.4 14.1 2 12.25 2c-1.857 0-3.628.388-5.233 1.124L6.65 3.3 5.95 2C7.85 1.05 10 .5 12.25.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceSmartSpeaker.style = iconCss;

export { DeviceSmartSpeaker as scale_icon_device_smart_speaker };
