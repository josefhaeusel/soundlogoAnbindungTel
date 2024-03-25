import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentOutOfStock = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M3.5 20a2 2 0 110 4 2 2 0 010-4zM23.94.456a.75.75 0 01-.304.939l-.09.046-2.271.973a1.5 1.5 0 00-.882 1.092l-.021.147-.62 6.61a7.753 7.753 0 00-9.251 4.741l-5.886-.38a2.986 2.986 0 01-2.77-2.527l-.023-.183-.897-9.412h18.24a2.998 2.998 0 011.32-1.372l.198-.094L22.954.06a.75.75 0 01.985.394zm-6.19 11.046a6.25 6.25 0 110 12.499 6.25 6.25 0 010-12.5zm-1.544 3.65a.75.75 0 00-.986 1.129l1.47 1.47-1.47 1.47-.077.09a.745.745 0 00.077.97.75.75 0 001.06 0l1.47-1.47 1.47 1.47.084.073a.75.75 0 00.976-1.133l-1.47-1.47 1.47-1.47.077-.09a.745.745 0 00-.077-.97.745.745 0 00-1.06 0l-1.47 1.47-1.47-1.47zM2.75 17.5h7.262l-.007.286.002.226c0 .04.003.083.005.128l.023.295c.01.108.025.227.043.358l.032.207H2.75a.75.75 0 01-.102-1.494l.102-.006z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M3.5 20a2 2 0 110 4 2 2 0 010-4zm14.25-8.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm-1.47 3.72a.75.75 0 00-1.133.977l.072.084 1.47 1.47-1.47 1.469a.75.75 0 00.969 1.14l.093-.08 1.469-1.47 1.47 1.47a.748.748 0 001.06 0 .75.75 0 00.073-.976l-.073-.084-1.47-1.47 1.47-1.469a.75.75 0 00-.977-1.133l-.084.072-1.47 1.47-1.469-1.47zM2.75 17.5h7.262l-.012.25c0 .32.024.634.065.943l.045.307H2.75a.75.75 0 01-.102-1.493l.102-.007zM22.954.06a.75.75 0 01.682 1.333l-.09.046-2.271.973a1.5 1.5 0 00-.882 1.092l-.021.147-.621 6.62a7.679 7.679 0 00-1.104-.21l-.38-.035L18.833 4H2.573l.741 7.77a1.493 1.493 0 001.26 1.34l.136.015 6.534.421a7.73 7.73 0 00-.611 1.152l-.123.304-5.896-.38a2.986 2.986 0 01-2.77-2.527l-.023-.183L.925 2.5h18.24a2.998 2.998 0 011.32-1.372l.198-.094L22.954.06z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ContentOutOfStock.style = iconCss;

export { ContentOutOfStock as scale_icon_content_out_of_stock };
