import{r as t,h as i,a as s,g as e}from"./p-d52b3602.js";const a=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{d:"M5.25 1l3.6 5.5H6.5V17h2.35l-3.6 5.5-3.6-5.5H4V6.5H1.65L5.25 1zm15.499 15.52a1.25 1.25 0 01.128 2.494l-.128.007H11v-2.5h9.749zM11 10.477l9.753.034a1.25 1.25 0 01.123 2.494l-.132.006L11 12.976v-2.5zM20.749 4.5a1.25 1.25 0 01.128 2.493L20.749 7H11V4.5h9.749z","fill-rule":"evenodd"}:{d:"M22 5.75a.75.75 0 00-.75-.75H11v1.5h10.25a.75.75 0 00.75-.75zM8.85 6.5L5.25 1l-3.6 5.5H4.5V17H1.65l3.6 5.5 3.6-5.5H6V6.5h2.85zm12.4 4.5H11v1.5h10.25a.75.75 0 100-1.5zm0 6H11v1.5h10.25a.75.75 0 100-1.5z","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};a.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{a as scale_icon_action_arrange}