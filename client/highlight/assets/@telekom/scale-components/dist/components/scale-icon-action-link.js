import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionLink = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12.225 8.37a5.75 5.75 0 012.068 9.21l-.173.18-3.711 3.711a5.75 5.75 0 01-8.13-8.13L5.99 9.65a5.71 5.71 0 011.31-1 6.845 6.845 0 00-.105 1.155c0 .532.064 1.06.188 1.577l.082.308-3.245 3.24a3.255 3.255 0 004.449 4.732l.151-.132 3.535-3.535a3.26 3.26 0 00.135-4.456l-.259-.277a2.23 2.23 0 01-.118-2.748l.112-.144zm1.19-6.165a5.75 5.75 0 018.13 0 5.75 5.75 0 01.174 7.89l-.174.185-3.535 3.535a5.66 5.66 0 01-1.305 1c.02-.1.044-.211.059-.326l.011-.174a6.72 6.72 0 00-.163-2.194l-.082-.306 3.25-3.245a3.255 3.255 0 10-4.453-4.749l-3.682 3.684a3.26 3.26 0 00-.135 4.456l.259.278a2.25 2.25 0 01.016 2.896A5.64 5.64 0 019.88 13.87a5.745 5.745 0 01-.197-7.924l.197-.206 3.535-3.535z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M11.94 8.8c.665.255 1.29.645 1.82 1.18a5.245 5.245 0 01.18 7.235l-.18.19-3.535 3.535a5.215 5.215 0 01-3.71 1.535c-1.34 0-2.685-.51-3.71-1.535a5.26 5.26 0 01-.17-7.247l.17-.178L6.34 9.98c.27-.275.565-.505.875-.705a6.149 6.149 0 00.049 1.52l.056.325-3.455 3.455a3.76 3.76 0 000 5.305 3.76 3.76 0 005.15.146l.155-.146 3.535-3.535a3.755 3.755 0 000-5.305 3.857 3.857 0 00-.935-.68c-.05-.18-.08-.365-.08-.555 0-.355.095-.695.25-1.005zm1.825-6.24a5.26 5.26 0 017.425 0 5.242 5.242 0 01.162 7.246l-.172.179-3.535 3.535c-.27.275-.565.505-.875.705.04-.496.022-.989-.048-1.473l-.062-.362 3.465-3.465a3.76 3.76 0 000-5.305 3.736 3.736 0 00-2.65-1.095 3.74 3.74 0 00-2.478.933l-.172.162-3.535 3.535c-.71.705-1.1 1.65-1.1 2.65s.39 1.94 1.1 2.65c.28.28.595.505.93.68.065.25.1.505.075.77-.02.22-.085.5-.23.795a5.188 5.188 0 01-1.835-1.185 5.2 5.2 0 01-1.54-3.71c0-1.313.483-2.555 1.36-3.52l.18-.19 3.535-3.535z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-link", {
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
  const components = ["scale-icon-action-link"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionLink);
      }
      break;
  } });
}

const ScaleIconActionLink = ActionLink;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionLink, defineCustomElement };