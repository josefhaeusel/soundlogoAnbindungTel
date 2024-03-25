'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');
const utils = require('./utils-e9c3b953.js');

const chipCss = ":host{--height:32px;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--font-weight:var(--telekom-typography-font-weight-bold);--color-focus:var(--telekom-color-functional-focus-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--box-shadow:0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);--background-standard-selected:var(--telekom-color-ui-extra-strong);--color-standard-selected:var(\n    --telekom-color-text-and-icon-inverted-standard\n  )}.chip{box-sizing:border-box;border:var(--telekom-spacing-composition-space-01) solid transparent;display:inline-flex;outline:none;padding:0 var(--telekom-spacing-composition-space-05);text-align:center;align-items:center;white-space:nowrap;border-radius:1rem;border-color:rgba(255, 255, 255, 0.14);height:var(--height);vertical-align:baseline;justify-content:center;cursor:default;color:var(--telekom-color-text-and-icon-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-ui-border-standard)}.chip.chip--selected.chip--type-dynamic{padding-right:var(--telekom-spacing-composition-space-03)}.chip.chip--selected.chip--type-dynamic button{border:none;cursor:pointer;padding:0;height:24px;width:24px;outline:none;background:transparent;border-radius:var(--telekom-radius-circle);display:flex;justify-content:center;align-items:center;background-color:transparent}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:hover{background:var(--telekom-color-ui-state-fill-hovered-inverted)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:active{background:var(--telekom-color-ui-state-fill-pressed-inverted)}.chip.chip--selected.chip--type-dynamic button:focus{justify-content:center;outline:var(--focus-outline)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):not(.chip--type-dynamic):focus,.chip.chip--type-dynamic:not(.chip--selected):focus{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}.chip:not(.chip--disabled):not(.chip--type-dynamic):hover,.chip.chip--type-dynamic:not(.chip--selected):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):not(.chip--type-dynamic):active,.chip.chip--type-dynamic:not(.chip--selected):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip--selected{background:var(--background-standard-selected);color:var(--color-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered-inverted),\n      var(--telekom-color-ui-state-fill-hovered-inverted)\n    ),\n    var(--background-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed-inverted),\n      var(--telekom-color-ui-state-fill-pressed-inverted)\n    ),\n    var(--background-standard-selected)}.chip-label{padding:0 var(--telekom-spacing-composition-space-03) 0\n    var(--telekom-spacing-composition-space-03);font-weight:var(--telekom-typography-font-weight-bold);font-size:1rem;line-height:100%}.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-04)}.chip--type-dynamic.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-03)}.chip slot[name='chip-icon']::slotted(*){padding-right:var(--telekom-spacing-composition-space-03);padding-top:var(--telekom-spacing-composition-space-03)}.chip.chip--disabled:not(.chip--type-dynamic){color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip--selected:not(.chip--variant-outlined):not(.chip--type-dynamic).chip--disabled{background:var(--telekom-color-ui-disabled);color:var(--telekom-color-text-and-icon-disabled);border:none}.chip--variant-outlined.chip--selected.chip--disabled:not(.chip--type-dynamic){background-color:var(--telekom-color-text-and-icon-inverted-standard);color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected{color:var(--telekom-color-text-and-icon-primary-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover{background:var(--telekom-color-ui-state-fill-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active{background:var(telekom-color-ui-state-fill-pressed)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-pressed)}";

const Chip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleChange = index.createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = index.createEvent(this, "scaleChange", 7);
    this.scaleClose = index.createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = index.createEvent(this, "scaleClose", 7);
    /** (optional) */
    this.variant = 'standard';
    /** (optional) */
    this.type = 'persistent';
    /** (optional) */
    this.selected = false;
    /** (optional) chip aria-role */
    this.ariaRoleTitle = 'switch';
    /** @deprecated (optional) chip aria-checked - should be derived from selected state attribute */
    this.ariaCheckedState = false;
    /** (optional) chip disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled && this.type !== 'dynamic') {
        return;
      }
      utils.emitEvent(this, 'scaleClose', event);
    };
    this.handleClick = (event) => {
      if (this.type !== 'dynamic') {
        this.selected = !this.selected;
      }
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled && this.type !== 'dynamic') {
        return;
      }
      utils.emitEvent(this, 'scaleChange', event);
    };
  }
  componentDidRender() {
    // handle no setted icon size attribute
    const defaultIconSize = 24;
    const iconSlot = this.hostElement.querySelector('[slot="chip-icon"]');
    if (iconSlot !== null) {
      if (iconSlot.children[0].getAttribute('size') === String(defaultIconSize)) {
        iconSlot.children[0].setAttribute('size', String(16));
      }
      if (this.selected) {
        iconSlot.children[0].setAttribute('selected', String(true));
      }
      else {
        iconSlot.children[0].setAttribute('selected', String(false));
      }
    }
  }
  disconnectedCallback() { }
  getIcon() {
    if (this.type === 'dynamic' && this.selected) {
      return (index.h("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: !this.disabled ? this.handleClose : null }, index.h("scale-icon-action-close", { "accessibility-title": "close", size: 16, selected: true })));
    }
    else if (this.type === 'persistent' && this.selected) {
      return (index.h("scale-icon-action-checkmark", { "accessibility-title": "success", size: 16, selected: true }));
    }
    else if (this.type === 'persistent') {
      return (index.h("scale-icon-action-checkmark", { "accessibility-title": "success", size: 16 }));
    }
  }
  render() {
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), this.type === 'dynamic' && this.selected ? (index.h("span", { role: this.ariaRoleTitle, tabindex: this.selected ? '0' : '-1', part: this.getBasePartMap(), class: this.getCssClassMap(), "aria-checked": this.selected.toString(), onClick: !this.disabled || this.type === 'dynamic'
        ? this.handleClick
        : null }, index.h("slot", { name: "chip-icon" }), index.h("span", { class: "chip-label" }, index.h("slot", null)), this.selected ? this.getIcon() : null)) : (index.h("span", { role: this.ariaRoleTitle, "aria-checked": this.selected.toString(), tabindex: this.selected ? '0' : '-1', part: this.getBasePartMap(), class: this.getCssClassMap(), onClick: !this.disabled || this.type === 'dynamic'
        ? this.handleClick
        : null }, index.h("slot", { name: "chip-icon" }), index.h("span", { class: "chip-label" }, index.h("slot", null)), this.selected ? this.getIcon() : null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'chip';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return index$1.classnames(mode === 'basePart' ? 'base' : component, !!this.selected && `${prefix}selected`, !!this.disabled && `${prefix}disabled`, this.type && `${prefix}type-${this.type}`, this.variant && `${prefix}variant-${this.variant}`);
  }
  get hostElement() { return index.getElement(this); }
};
Chip.style = chipCss;

exports.scale_chip = Chip;
