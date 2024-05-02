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
export class CommunicationMmsIncoming {
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
          h("path", { d: "M19.5 3v8.406l-6.32 4.088a1.5 1.5 0 00-.68 1.255c0 .215.05.422.136.611l.071.139H10.62l-3.274 3.274a1.63 1.63 0 01-1.166.491c-.812 0-1.592-.597-1.672-1.514l-.007-.156V17.5H3.358a2.857 2.857 0 01-2.852-2.69l-.005-.168V3h19zm0 10.15v2.849h3.75a.75.75 0 01.102 1.493l-.102.007H19.5v2.85l-5.5-3.6 5.5-3.6zm-4.575-4.906c-.767 0-1.355.495-1.355 1.287 0 .48.221.923.776 1.13l.146.046.476.136c.322.086.495.216.495.476 0 .266-.18.464-.538.464-.27 0-.48-.107-.576-.374l-.03-.108h-.83c.075.816.582 1.262 1.436 1.262.779 0 1.391-.464 1.391-1.293 0-.548-.327-.975-.859-1.164l-.137-.043-.476-.13c-.229-.062-.42-.167-.42-.458 0-.29.216-.451.5-.451.286 0 .455.122.528.366l.023.098h.817c-.08-.761-.532-1.244-1.367-1.244zm-5.41.093h-.767v4.133h.835v-2.333h.037l1.009 1.82h.266l1.015-1.82h.037v2.333h.829V8.337h-.768l-1.225 2.29h-.037l-1.23-2.29zm-5.012 0h-.767v4.133h.835v-2.333h.037l1.01 1.82h.265l1.015-1.82h.037v2.333h.829V8.337h-.767l-1.225 2.29h-.038l-1.23-2.29z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M19.5 3v8.357l-1.5.982V4.5H2v10.143c0 .704.54 1.285 1.227 1.35l.13.007H6v3.596c0 .07.045.131.105.157.055.023.122.017.18-.04L9.998 16H12.5v1.5h-1.881l-3.274 3.274a1.63 1.63 0 01-1.167.491c-.81 0-1.591-.597-1.671-1.514l-.007-.155V17.5H3.357a2.857 2.857 0 01-2.852-2.69L.5 14.644V3h19zm0 10.15V16h3.75a.75.75 0 01.102 1.493l-.102.007H19.5v2.85l-5.5-3.6 5.5-3.6zm-4.576-4.905c.783 0 1.23.424 1.348 1.104l.02.14h-.818c-.056-.31-.229-.465-.55-.465-.285 0-.502.161-.502.452 0 .259.152.37.347.436l.075.022.476.13c.612.161.996.613.996 1.207 0 .829-.612 1.292-1.392 1.292-.8 0-1.296-.391-1.416-1.113l-.02-.148h.83c.075.346.303.482.606.482.359 0 .539-.198.539-.464 0-.228-.133-.355-.382-.442l-.114-.034-.476-.136c-.662-.18-.922-.656-.922-1.176 0-.792.588-1.287 1.355-1.287zm-5.41.093l1.232 2.289h.037l1.225-2.29h.767v4.133h-.829v-2.332h-.037l-1.015 1.819h-.266L9.62 10.138h-.037v2.332h-.836V8.337h.768zm-5.012 0l1.231 2.289h.038l1.224-2.29h.768v4.133h-.829v-2.332h-.037l-1.016 1.819h-.265l-1.009-1.819H4.57v2.332h-.836V8.337h.768z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-communication-mms-incoming"; }
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
