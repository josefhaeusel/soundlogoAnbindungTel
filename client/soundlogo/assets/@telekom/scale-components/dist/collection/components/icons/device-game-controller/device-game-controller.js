/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Prop, Host, Element, h } from '@stencil/core';
export class DeviceGameController {
  constructor() {
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
    return (h(Host, null,
      h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable),
        this.accessibilityTitle && h("title", null, this.accessibilityTitle),
        h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null,
          h("path", { d: "M19 15.5a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0M16 13a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0m-5.25 1.25a.75.75 0 00-.75-.75H8.5V12A.75.75 0 107 12v1.5H5.5a.75.75 0 100 1.5H7v1.5a.75.75 0 001.5 0V15H10a.75.75 0 00.75-.75m12.562 7.129a4.11 4.11 0 01-2.561 2.035 4.176 4.176 0 01-4.215-1.271L14.66 20H9.34l-1.874 2.143a4.175 4.175 0 01-4.216 1.271 4.113 4.113 0 01-2.56-2.035 4.12 4.12 0 01-.292-3.259L3.707 8h16.588l3.309 10.12a4.115 4.115 0 01-.292 3.259M12 2.056c1.724 0 3.279.728 4.383 1.889l1.107-1.009A7.527 7.527 0 0012 .556a7.527 7.527 0 00-5.49 2.38l1.107 1.009A6.034 6.034 0 0112 2.056m0 1.503c1.285 0 2.446.537 3.275 1.397l-1.107 1.009A3.037 3.037 0 0012 5.058a3.04 3.04 0 00-2.168.906L8.726 4.956A4.53 4.53 0 0112 3.559", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M17.75 14.25a1.25 1.25 0 10-.001 2.498 1.25 1.25 0 00.002-2.498m-3-2.5a1.25 1.25 0 10-.002 2.498 1.25 1.25 0 00.002-2.498M10 13.5H8.5V12A.75.75 0 107 12v1.5H5.5a.75.75 0 100 1.5H7v1.5a.75.75 0 101.5 0V15H10a.75.75 0 100-1.5m11.99 7.167a2.625 2.625 0 01-1.635 1.3 2.667 2.667 0 01-2.692-.811L15.34 18.5H8.66l-2.323 2.655a2.667 2.667 0 01-2.692.812 2.63 2.63 0 01-1.636-1.3 2.626 2.626 0 01-.185-2.08L4.795 9.5h14.412l2.97 9.087a2.618 2.618 0 01-.186 2.08m1.612-2.547L20.295 8H3.707L.397 18.12a4.119 4.119 0 00.293 3.259 4.112 4.112 0 002.562 2.035 4.171 4.171 0 004.214-1.271L9.34 20h5.32l1.875 2.143a4.173 4.173 0 004.215 1.271 4.113 4.113 0 002.56-2.035 4.11 4.11 0 00.292-3.259M12 2.056c1.725 0 3.279.729 4.383 1.889l1.107-1.009A7.533 7.533 0 0012 .556a7.531 7.531 0 00-5.49 2.38l1.107 1.009A6.032 6.032 0 0112 2.056m-3.275 2.9l1.106 1.008a3.045 3.045 0 014.338.001l1.106-1.009a4.537 4.537 0 00-6.55 0", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-device-game-controller"; }
  static get originalStyleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) The width and height in pixels"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "24"
    },
    "fill": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Sets the icon color via the `fill` attribute"
      },
      "attribute": "fill",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Alias for `fill`"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "selected": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true`, the icon changes visually"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "decorative": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true` the SVG element will get `aria-hidden=\"true\"`"
      },
      "attribute": "decorative",
      "reflect": false,
      "defaultValue": "false"
    },
    "accessibilityTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) When using the icon standalone, make it meaningful for accessibility"
      },
      "attribute": "accessibility-title",
      "reflect": false
    },
    "focusable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true` the icon can receive focus"
      },
      "attribute": "focusable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
