import{r as t,h as i,a as s,g as a}from"./p-d52b3602.js";const e=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M18.5 10.75h-5.25V5.5a1.25 1.25 0 00-2.5 0v5.25H5.5a1.25 1.25 0 000 2.5h5.25v5.25a1.25 1.25 0 002.5 0v-5.25h5.25a1.25 1.25 0 000-2.5","fill-rule":"evenodd"}:{d:"M18.5 11.25h-5.75V5.5a.75.75 0 00-1.5 0v5.75H5.5a.75.75 0 000 1.5h5.75v5.75a.75.75 0 001.5 0v-5.75h5.75a.75.75 0 000-1.5","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_action_add}