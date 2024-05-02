import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as isPseudoClassSupported, e as emitEvent } from './utils.js';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$1 } from './action-checkmark.js';

const switchCss = "scale-switch{--width:42px;--height:24px;--offset:2px;--radius:1em;--transition-duration:var(--telekom-motion-duration-immediate);--transition-easing:var(--telekom-motion-easing-standard);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--spacing-x-label:var(--telekom-spacing-composition-space-04);--font-label:var(--telekom-text-style-ui);--font-io-text:var(--telekom-text-style-small-bold);--color-label:var(--telekom-color-text-and-icon-standard)}.switch{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-white, #fff);--_overlay-background:transparent;display:inline-block;position:relative}.switch__control{position:absolute;margin:0;top:0;width:var(--width);height:var(--height);opacity:0}.switch__wrapper{display:flex;align-items:center;cursor:pointer}.switch__toggle{position:relative;width:var(--width);height:var(--height);background:var(--_background);border-radius:var(--radius);transition-property:background;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.switch__toggle--overlay{position:absolute;width:var(--width);height:var(--height);border-radius:var(--radius);background:var(--_overlay-background)}[data-platform='android'] .switch__toggle--overlay{display:none}.switch:hover{--_overlay-background:var(--telekom-color-ui-state-fill-hovered)}.switch:active{--_overlay-background:var(--telekom-color-ui-state-fill-pressed)}.switch--checked{--_background:var(--telekom-color-primary-standard)}[data-platform='android'] .switch.switch--checked{--_background:var(--telekom-color-primary-standard);--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch{--_color-thumb:var(--telekom-color-ui-strong)}[data-platform='android'] .switch:hover{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:active{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:hover{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch:active{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch--checked:active,[data-platform='android'] .switch--checked:hover{--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch--checked:hover,.switch--checked:hover{--_background:var(--telekom-color-primary-hovered)}[data-platform='android'] .switch--checked:active,.switch--checked:active{--_background:var(--telekom-color-primary-pressed)}[data-platform='android'] .switch--disabled{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-border-disabled)}[data-platform='android'] .switch--disabled:hover{--_color-thumb:var(--telekom-color-ui-border-disabled);--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch--checked.switch--disabled:hover{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled,.switch--disabled:hover,.switch--disabled:active{--_background:var(--telekom-color-ui-disabled);--_color-thumb:var(--telekom-color-ui-faint);--_overlay-background:transparent}.switch--checked .switch--disabled,.switch--checked .switch--disabled:hover,.switch--checked .switch--disabled:active{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-disabled);box-shadow:var(--telekom-shadow-raised-standard);--_overlay-background:transparent}[data-platform='android'] .switch--disabled.switch--checked{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled .switch__wrapper{cursor:not-allowed}.switch--disabled .switch__thumb{box-shadow:var(--telekom-shadow-raised-standard)}.switch--size-large{--width:56px;--height:32px}.switch--focus-visible-not-supported :focus~.switch__toggle,:focus-visible~.switch__toggle{outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01)}.switch__thumb{--_size:calc(var(--height) - var(--offset) * 2);position:relative;z-index:2;box-sizing:border-box;width:var(--_size);height:var(--_size);aspect-ratio:1 / 1;background:var(--_color-thumb);border-radius:50%;box-shadow:var(--shadow-thumb);margin:var(--offset);transition-property:margin, width, height, background, color;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);color:transparent;border:1px solid rgba(0, 0, 0, 0.04);display:inline-block}.switch--checked .switch__thumb{margin-left:1em;margin-inline-start:calc(var(--width) - var(--height) + var(--offset))}.switch__io-text{position:absolute;z-index:1;top:0;left:0;display:flex;justify-content:center;align-items:center;width:50%;height:var(--height);margin-left:calc(50% - var(--offset));font:var(--font-io-text);line-height:var(--telekom-typography-line-spacing-none)}.switch--size-large .switch__io-text{margin-top:1px;font:var(--telekom-text-style-caption-bold)}.switch--checked .switch__io-text{margin-left:var(--offset);color:var(--telekom-color-text-and-icon-white-standard)}.switch--disabled .switch__io-text{color:var(--telekom-color-text-and-icon-disabled)}.switch__label-text{font:var(--font-label);margin-inline-start:var(--spacing-x-label);color:var(--color-label)}[data-platform='android'] scale-switch{--width:56px;--height:32px;--offset:7px}[data-platform='android'] .switch__thumb{width:18px;height:18px}[data-platform='android'] scale-switch:not([disabled]):active .switch__thumb{width:28px;height:28px;--offset:2px}[data-platform='android'] .switch--checked .switch__thumb{width:24px;height:24px;--offset:4px}[data-platform='android'] .switch__thumb{display:flex;justify-content:center;align-items:center;box-shadow:none}scale-switch scale-icon-action-success{display:none !important}[data-platform='android'] .switch--checked scale-icon-action-success{position:absolute;display:inline-block !important;margin-top:2px;margin-left:1px}[data-platform='android'] .switch--checked .switch__thumb{color:var(--_background)}[data-platform='android'] .switch__io-text{display:none}[data-platform='android'] .switch--checked .switch__thumb{color:var(--telekom-color-primary-standard)}[data-platform='android'] .switch--disabled .switch__thumb{color:var(--telekom-color-ui-strong)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.switch__toggle{border:1px solid}scale-icon-action-checkmark{visibility:hidden !important}}";

let i = 0;
// For chrome that applies :focus upon click, and :focus-visible isn't widely supported
const isFocusVisibleSupported = isPseudoClassSupported(':focus-visible');
const Switch = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Disabled switch */
    this.disabled = false;
    this.size = 'large';
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("label", { id: `${this.inputId}-label`, class: "switch__wrapper" }, h("input", { type: "checkbox", name: this.name, class: "switch__control", checked: this.checked, disabled: this.disabled, "aria-labelledby": `${this.inputId}-label`, id: this.inputId, onChange: (event) => {
        this.checked = event.target.checked;
        emitEvent(this, 'scaleChange', { value: this.checked });
      } }), h("span", { class: "switch__toggle", "aria-hidden": "true" }, h("span", { class: "switch__thumb" }, h("scale-icon-action-checkmark", { size: 12, decorative: true, selected: true })), h("span", { class: "switch__io-text" }, h("span", null, this.checked ? 'I' : '0'))), h("span", { class: "switch__toggle--overlay", "aria-hidden": "true" }), this.label && h("span", { class: "switch__label-text" }, this.label)))));
  }
  getCssClassMap() {
    return classnames('switch', this.checked && 'switch--checked', this.disabled && 'switch--disabled', this.size && `switch--size-${this.size}`, isFocusVisibleSupported && 'switch--focus-visible-supported', !isFocusVisibleSupported && 'switch--focus-visible-not-supported');
  }
  static get style() { return switchCss; }
}, [0, "scale-switch", {
    "checked": [1540],
    "disabled": [4],
    "name": [1],
    "inputId": [1025, "input-id"],
    "label": [1],
    "styles": [1],
    "size": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-switch", "scale-icon-action-checkmark"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Switch);
      }
      break;
    case "scale-icon-action-checkmark":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Switch as S, defineCustomElement as d };
