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
export class HomeWifiManualLogin {
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
          h("path", { d: "M12.006 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.399c.15.682.394 1.329.722 1.924a4.494 4.494 0 00-3.502 2.163l-.11.195L6.6 16.394a6.49 6.49 0 014.326-2.793zm7.018-7.226a5.687 5.687 0 110 11.375 5.687 5.687 0 010-11.375zm.512 7.069v1.153h-1.154v-1.153h1.154zm-7.013-4.428a7.118 7.118 0 00-.611 2.062 8.985 8.985 0 00-5.802 3.251l-.189.241-1.408-1.46a10.98 10.98 0 018.01-4.094zm6.517.312c.92 0 1.645.61 1.645 1.514 0 .552-.265.88-.546 1.147l-.309.283c-.16.152-.291.304-.33.495l-.012.132h-1.059v-.16c0-.529.289-.816.578-1.058l.212-.176c.203-.174.366-.35.366-.613 0-.351-.219-.546-.545-.546-.3 0-.502.17-.563.508l-.015.118h-1.099c.024-.887.618-1.644 1.677-1.644zM12.006 4.5c1.469 0 2.889.205 4.236.588a7.16 7.16 0 00-2.922 1.479 13.465 13.465 0 00-11.404 4.47l-.229.263L.293 9.854A15.464 15.464 0 0112.006 4.5z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M12.006 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.399c.15.682.394 1.329.722 1.924a4.494 4.494 0 00-3.502 2.163l-.11.195L6.6 16.394a6.49 6.49 0 014.326-2.793zm7.018-7.226a5.687 5.687 0 110 11.375 5.687 5.687 0 010-11.375zm0 1.5a4.193 4.193 0 00-4.188 4.187 4.193 4.193 0 004.188 4.188 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.187-4.187zm.512 5.569v1.153h-1.154v-1.153h1.154zm-7.013-4.428a7.118 7.118 0 00-.611 2.062 8.985 8.985 0 00-5.802 3.251l-.189.241-1.408-1.46a10.98 10.98 0 018.01-4.094zm6.517.312c.92 0 1.645.61 1.645 1.514 0 .552-.265.88-.546 1.147l-.309.283c-.16.152-.291.304-.33.495l-.012.132h-1.059v-.16c0-.529.289-.816.578-1.058l.212-.176c.203-.174.366-.35.366-.613 0-.351-.219-.546-.545-.546-.3 0-.502.17-.563.508l-.015.118h-1.099c.024-.887.618-1.644 1.677-1.644zM12.006 4.5c1.469 0 2.889.205 4.236.588a7.16 7.16 0 00-2.922 1.479 13.465 13.465 0 00-11.404 4.47l-.229.263L.293 9.854A15.464 15.464 0 0112.006 4.5z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-home-wifi-manual-login"; }
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
