import{r as t,h as i,a as s,g as e}from"./p-d52b3602.js";const n=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{},this.focusable?{tabindex:0}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("defs",null,i("path",this.selected?{d:"M11.5 4.5c-.3 0-.6-.15-.85-.35l-.45-.45c-.7-.75-1.65-1.2-2.7-1.2H1V19c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V4.5H11.5z",id:"a"}:{d:"M7.5 2.5c1.05 0 2 .45 2.7 1.2l.45.45c.25.2.55.35.85.35H23V19c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V2.5zm0 1.5h-5v15c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V6h-10c-.7 0-1.4-.3-1.9-.85l-.45-.45C8.7 4.25 8.1 4 7.5 4z",id:"a"})),i("use",{xlinkHref:"#a","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};n.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{n as scale_icon_content_folder}