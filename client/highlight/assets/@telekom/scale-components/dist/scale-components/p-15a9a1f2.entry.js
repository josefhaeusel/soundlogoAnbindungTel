import{r as t,h as i,a as s,g as e}from"./p-d52b3602.js";const l=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M18.014 16.046c-.304 0-.61-.11-.85-.333l-5.166-4.792-5.166 4.792a1.25 1.25 0 01-1.7-1.834l6.866-6.368 6.867 6.368a1.252 1.252 0 01-.851 2.167","fill-rule":"evenodd"}:{d:"M18.51 14.218L12 8.21l-6.509 6.008a.75.75 0 101.017 1.102L12 10.251l5.491 5.069a.748.748 0 001.06-.042.75.75 0 00-.042-1.06","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};l.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{l as scale_icon_navigation_top_up}