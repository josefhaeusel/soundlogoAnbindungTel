import{r as t,h as i,a as s,g as e}from"./p-d52b3602.js";const l=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M12.445 1.535l8.78 1.3 1.295 8.78L12.215 21.92a3.052 3.052 0 01-4.153.155l-.167-.155-5.76-5.76a3.05 3.05 0 01-.133-4.179l.133-.141 10.31-10.305zM17.5 5.5a1 1 0 110 2 1 1 0 010-2z","fill-rule":"evenodd"}:{d:"M12.445 1.535l8.78 1.3 1.295 8.78L12.215 21.92a3.052 3.052 0 01-4.153.155l-.167-.155-5.76-5.76a3.05 3.05 0 01-.133-4.179l.133-.141 10.31-10.305zm.525 1.59L3.195 12.9A1.543 1.543 0 002.74 14c0 .363.122.707.35.985l.105.115 5.765 5.76c.295.295.685.455 1.1.455.363 0 .707-.123.985-.35l.115-.105 9.77-9.77-1.03-6.935-6.93-1.03zM17.5 5.5a1 1 0 110 2 1 1 0 010-2z","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};l.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{l as scale_icon_content_price_tag}