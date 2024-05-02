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
export class ContentESim {
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
          h("g", { "fill-rule": "evenodd" },
            h("path", { d: "M20 3a3 3 0 012.995 2.824L23 6v12a3 3 0 01-2.824 2.995L20 21h-.5v-2.5h.5a.5.5 0 00.492-.41L20.5 18V6a.5.5 0 00-.41-.492L20 5.5H8.535L3.5 10.535V15H1V9.5L7.5 3H20z" }),
            h("path", { d: "M2.95 16.65c1.05 0 1.736.774 1.796 1.976l.004.174v.4h-2.6c.05.75.35 1 .8 1 .262 0 .487-.115.606-.311L3.6 19.8h1.15c-.2.85-.9 1.35-1.8 1.35-1.15 0-1.9-.85-1.9-2.25 0-1.45.75-2.25 1.9-2.25zM7.3 15c1.09 0 1.73.628 1.88 1.587l.02.163H8.05c-.05-.45-.3-.65-.75-.65-.4 0-.7.25-.7.65 0 .36.243.517.51.618l.09.032.65.2c.85.25 1.4.9 1.4 1.6 0 1.15-.85 1.8-1.95 1.8-1.137 0-1.825-.539-1.98-1.573l-.02-.177h1.15c.1.5.4.7.85.7.5 0 .75-.3.75-.65 0-.315-.203-.509-.571-.617l-.129-.033-.65-.2c-.95-.25-1.3-.9-1.3-1.65 0-1.1.8-1.8 1.9-1.8zm3.9.2V21h-1.15v-5.8h1.15zm2.2 0l1.75 3.2h.05l1.7-3.2H18V21h-1.2v-3.3h-.05l-1.4 2.6h-.4l-1.4-2.6h-.05V21h-1.15v-5.8h1.05zM2.95 17.6c-.367 0-.65.168-.77.62l-.03.13H3.7c-.1-.55-.4-.75-.75-.75z" })))) : (h("g", null,
          h("path", { d: "M2.95 16.65c1.05 0 1.736.774 1.796 1.976l.004.174v.4h-2.6c.05.75.35 1 .8 1 .262 0 .487-.115.606-.311L3.6 19.8h1.15c-.2.85-.9 1.35-1.8 1.35-1.15 0-1.9-.85-1.9-2.25 0-1.45.75-2.25 1.9-2.25zM20 3a3.01 3.01 0 012.995 2.824L23 6v12a3.01 3.01 0 01-2.824 2.995L20 21h-.5v-1.5h.5c.8 0 1.423-.576 1.493-1.352L21.5 18V6c0-.8-.576-1.423-1.352-1.493L20 4.5H8.1l-5.6 5.6V15H1V9.5L7.5 3H20zM7.3 15c1.09 0 1.73.628 1.88 1.587l.02.163H8.05c-.05-.45-.3-.65-.75-.65-.4 0-.7.25-.7.65 0 .36.243.517.51.618l.09.032.65.2c.85.25 1.4.9 1.4 1.6 0 1.15-.85 1.8-1.95 1.8-1.137 0-1.825-.539-1.98-1.573l-.02-.177h1.15c.1.5.4.7.85.7.5 0 .75-.3.75-.65 0-.315-.203-.509-.571-.617l-.129-.033-.65-.2c-.95-.25-1.3-.9-1.3-1.65 0-1.1.8-1.8 1.9-1.8zm3.9.2V21h-1.15v-5.8h1.15zm2.2 0l1.75 3.2h.05l1.7-3.2H18V21h-1.2v-3.3h-.05l-1.4 2.6h-.4l-1.4-2.6h-.05V21h-1.15v-5.8h1.05zM2.95 17.6c-.367 0-.65.168-.77.62l-.03.13H3.7c-.1-.55-.4-.75-.75-.75z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-content-e-sim"; }
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