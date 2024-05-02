import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationMobilePhoneNumber = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12.001.5a3 3 0 012.995 2.824l.005.176V6H23v6.5a4.5 4.5 0 01-4.288 4.495L18.5 17h-3.499v3.5a3 3 0 01-2.823 2.994L12 23.5H4a3 3 0 01-2.994-2.824L1 20.5v-17A3 3 0 013.825.505L4.001.5h8zm-4 18a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm13.5-11H6.502v6l-2 2h14a3.003 3.003 0 002.994-2.824l.005-.176v-5zm-4.019 1.71c.911 0 1.521.706 1.521 1.476 0 .53-.173.93-.427 1.305l-.1.14-1.129 1.468H16.34l1.11-1.437-.013-.013h-.045c-.866 0-1.437-.705-1.437-1.463 0-.77.61-1.475 1.527-1.475zm-2.454.103v2.663h.455v.77h-.455v.853H14.2v-.853h-1.867v-.982l1.912-2.45h.783zm-4.46.674v1.116h1.116v.706h-1.116v1.116h-.706V11.81H8.746v-.706h1.116V9.987h.706zm3.632.687h-.038l-1.033 1.27v.032H14.2v-1.302zM17.482 10c-.41 0-.673.308-.673.686 0 .372.263.668.673.668.405 0 .68-.29.68-.668a.666.666 0 00-.68-.686zm-7.48-8h-4v1.5h4V2z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 .5a3 3 0 012.98 2.65l.015.174V6h-1.5V3.375a1.501 1.501 0 00-1.359-1.369L12 2l-2 .002V3.5H6V2.004l-2.125.001a1.5 1.5 0 00-1.369 1.358L2.5 3.5l.005 17.125a1.5 1.5 0 001.358 1.369L4 22l8.125-.005a1.5 1.5 0 001.369-1.358l.006-.137-.001-3.5h1.5v3.5a3 3 0 01-2.65 2.98l-.173.015L4 23.5a3 3 0 01-2.98-2.65l-.015-.174L1 3.5A3.002 3.002 0 013.65.52l.174-.015L12 .5zm-4 18A1.25 1.25 0 118 21a1.25 1.25 0 010-2.5zm13.5-11v5l-.005.176a3.005 3.005 0 01-2.82 2.819l-.175.005h-14l2-2v-6h15zm-4.02 1.711c-.917 0-1.526.706-1.526 1.476 0 .712.506 1.38 1.287 1.456l.15.007h.045l.013.012-1.111 1.438h1.008l1.129-1.469.1-.14c.254-.375.427-.774.427-1.304 0-.77-.61-1.476-1.521-1.476zm-2.454.103h-.782l-1.912 2.451v.981h1.867v.854h.827v-.854h.456v-.77h-.456V9.314zm-4.46.674h-.705v1.116H8.745v.706H9.86v1.116h.706V11.81h1.116v-.706h-1.116V9.988zm3.633.686v1.302h-1.072v-.031l1.033-1.271h.039zM17.48 10c.404 0 .68.308.68.687 0 .378-.276.667-.68.667a.645.645 0 01-.674-.667c0-.379.263-.687.674-.687z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-communication-mobile-phone-number", {
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
  const components = ["scale-icon-communication-mobile-phone-number"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-communication-mobile-phone-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CommunicationMobilePhoneNumber);
      }
      break;
  } });
}

const ScaleIconCommunicationMobilePhoneNumber = CommunicationMobilePhoneNumber;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconCommunicationMobilePhoneNumber, defineCustomElement };
