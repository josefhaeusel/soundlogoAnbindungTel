import{r as e,h as n,a as i}from"./p-d52b3602.js";import{c as r}from"./p-c608c6dc.js";let s=0;const t=class{constructor(n){e(this,n),this.variant="primary",this.alignment="horizontal",this.size="small"}componentWillLoad(){s++}render(){return n(i,null,n("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},n("div",{part:"container",class:"spinner__container"},n("svg",{class:"spinner__circle",viewBox:"0 0 50 50","aria-hidden":"true"},n("circle",{class:"path",cx:"25",cy:"25",r:"22.5",fill:"none","stroke-width":"4"})),n("svg",{class:"spinner__circle-background",viewBox:"0 0 50 50","aria-hidden":"true"},n("circle",{class:"path",cx:"25",cy:"25",r:"22.5",fill:"none","stroke-width":"4"}))),n("div",{class:"sr-only","aria-live":"polite",id:`spinner-label-${s}`},this.accessibilityTitle?this.accessibilityTitle:this.text||"Loading"),this.text?n("div",{part:"text",class:"spinner__text","aria-hidden":"true"},this.text):n("div",null)))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(e){const n="basePart"===e?"":"spinner--";return r("spinner",this.alignment&&`${n}alignment-${this.alignment}`,this.variant&&`${n}variant-${this.variant}`,this.size&&`${n}size-${this.size}`,this.text&&`${n}text`)}};t.style=":host{display:inline-flex;--size-outer-small:24px;--size-outer-large:48px;--size-inner-small:24px;--size-inner-large:48px;--line-height-size-small:24px;--line-height-size-large:48px;--font:var(--telekom-text-style-ui-bold);--color-circle-primary:var(--telekom-color-primary-standard);--color-circle-primary-inner:var(--telekom-color-ui-subtle);--color-text-primary:var(--telekom-color-text-and-icon-additional);--color-circle-white:var(--telekom-color-ui-base);--color-circle-white-inner:var(--telekom-color-ui-regular);--color-text-white:var(--telekom-color-text-and-icon-white-standard);--spacing-vertical:var(--telekom-spacing-composition-space-05);--spacing-horizontal:var(--telekom-spacing-composition-space-06)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.spinner{display:inline-flex;align-items:center}.spinner.spinner--alignment-vertical{flex-direction:column}.spinner .spinner__text{font:var(--telekom-text-style-ui-bold);color:var(--color-text-primary)}.spinner.spinner--variant-white .spinner__text{color:var(--color-text-white)}.spinner.spinner--alignment-horizontal .spinner__text{display:flex;align-self:center;margin-left:var(--spacing-horizontal)}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__text{line-height:var(--line-height-size-small)}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__text{line-height:var(--line-height-size-large)}.spinner.spinner--alignment-vertical .spinner__text{margin-top:var(--spacing-vertical)}.spinner.spinner--alignment-vertical.spinner--size-small .spinner__container{height:var(--size-inner-small);width:var(--size-inner-small)}.spinner.spinner--alignment-vertical.spinner--size-large .spinner__container{height:var(--size-outer-large);width:var(--size-outer-large)}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__container{height:var(--size-inner-small);width:var(--size-inner-small);text-align:left}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__container{height:var(--size-outer-large);width:var(--size-outer-large);text-align:left}.spinner .spinner__container{align-items:center;display:inline-flex}.spinner .spinner__container .spinner__circle{animation:rotate 2s linear infinite;z-index:2;position:absolute;width:var(--size-inner-small);height:var(--size-inner-small)}.spinner .spinner__container .spinner__circle-background{animation:rotate 2s linear infinite;position:absolute;width:var(--size-outer-small);height:var(--size-outer-small)}.spinner.spinner--size-large .spinner__container .spinner__circle-background{width:var(--size-outer-large);height:var(--size-outer-large)}.spinner.spinner--size-large .spinner__container .spinner__circle{width:var(--size-inner-large);height:var(--size-inner-large)}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-white-inner)}.spinner .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-primary-inner)}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}.spinner .spinner__container .spinner__circle .path{animation:dash 1.5s ease-in-out infinite;stroke:var(--color-circle-primary)}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@media screen and (forced-colors: active), (-ms-high-contrast: active){.spinner .spinner__container .spinner__circle-background .path{stroke:none}.spinner .spinner__container .spinner__circle .path{stroke:white}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:none}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}}";export{t as scale_loading_spinner}