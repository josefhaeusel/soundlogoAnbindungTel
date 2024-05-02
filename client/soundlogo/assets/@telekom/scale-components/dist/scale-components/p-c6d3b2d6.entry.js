import{r as t,c as i,h as a,F as r,a as s,g as e}from"./p-d52b3602.js";import{c as o}from"./p-c608c6dc.js";import{g as h,e as l}from"./p-086c9d13.js";import{s as n}from"./p-c5a89792.js";const d=class{constructor(a){t(this,a),this.scaleChange=i(this,"scale-change",7),this.scaleChangeLegacy=i(this,"scaleChange",7),this.scaleInput=i(this,"scale-input",7),this.scaleInputLegacy=i(this,"scaleInput",7),this.value=0,this.range=!1,this.valueFrom=0,this.valueTo=0,this.min=0,this.max=100,this.step=1,this.showStepMarks=!1,this.showValue=!0,this.unit="",this.unitPosition="after",this.decimals=0,this.disabled=!1,this.innerAriaValueText="$from to $to",this.position=0,this.positionFrom=25,this.positionTo=75,this.activeRangeThumb=null,this.internalId=h(),this.lastThumbZIndex=3,this.onButtonDown=t=>{this.disabled||(this.setActiveRangeThumbFromEvent(t),this.onDragStart(),this.addGlobalListeners(t))},this.onKeyDown=t=>{let i=0;this.setActiveRangeThumbFromEvent(t),["ArrowRight","ArrowLeft"].includes(t.key)&&(i="ArrowRight"===t.key?this.step:-this.step),["ArrowUp","ArrowDown"].includes(t.key)&&(i="ArrowUp"===t.key?10*this.step:10*-this.step);const a=this.getKeyFor("value");this.setValue(this[a]+i,a),l(this,"scaleChange",this.range?[this.valueFrom,this.valueTo]:this.value)},this.onDragStart=()=>{const t=this.getKeyFor("offsetLeft");this.dragging=!0,this[t]=this.sliderTrack.getBoundingClientRect().left},this.onDragging=t=>{if(!this.dragging)return;const i=this.getKeyFor("value"),a=this[this.getKeyFor("offsetLeft")],r=this.handleTouchEvent(t).clientX,s=Math.ceil(((r-a)/this.sliderTrack.offsetWidth*100*(this.max-this.min)/100+this.min)/this.step)*this.step;this.setValue(s,i)},this.onDragEnd=()=>{this.dragging=!1,l(this,"scaleChange",this.range?[this.valueFrom,this.valueTo]:this.value),this.removeGlobalListeners()},this.setValue=(t,i="value")=>{this[i]=this.clamp(t),l(this,"scaleInput",this.range?[this.valueFrom,this.valueTo]:this.value)},this.setActiveRangeThumbFromEvent=t=>{this.activeRangeThumb=this.range?t.target.part.contains("from")?"From":"To":null},this.setPosition=t=>{const i=this.getKeyFor("value",t),a=this.getKeyFor("position",t),r=this.clamp(this[i]);this[a]=100*(r-this.min)/(this.max-this.min)},this.getKeyFor=(t,i)=>{var a;return this.range?`${t}${null!==(a=this.activeRangeThumb)&&void 0!==a?a:i}`:t},this.getTextValue=()=>{var t,i,a,r;if(this.range){const a=null===(t=this.valueFrom)||void 0===t?void 0:t.toFixed(this.decimals),r=null===(i=this.valueTo)||void 0===i?void 0:i.toFixed(this.decimals);return"before"===this.unitPosition?`${this.unit}${a} - ${this.unit}${r}`:`${a}${this.unit} - ${r}${this.unit}`}return"before"===this.unitPosition?`${this.unit}${null===(a=this.value)||void 0===a?void 0:a.toFixed(this.decimals)}`:`${null===(r=this.value)||void 0===r?void 0:r.toFixed(this.decimals)}${this.unit}`},this.getNumberOfSteps=()=>[...Array((this.max-this.min)/this.step+1).keys()],this.clamp=t=>{let i=this.min,a=this.max;return this.range&&("From"===this.activeRangeThumb?a=Math.min(this.valueTo,this.max):"To"===this.activeRangeThumb&&(i=Math.max(this.valueFrom,this.min))),Math.min(Math.max(t,i),a)},this.onDragging=this.onDragging.bind(this),this.onDragEnd=this.onDragEnd.bind(this)}handleValueChange(){this.setPosition()}componentWillLoad(){null==this.sliderId&&(this.sliderId="slider-"+this.internalId),this.range?(this.setPosition("From"),this.setPosition("To")):this.setPosition()}disconnectedCallback(){this.removeGlobalListeners()}componentDidLoad(){void 0!==this.customColor&&n({tag:"deprecated",message:'Property "customColor" is deprecated. \n          Please use css variable "--background-bar" to set the slider-bar color;\n          e.g. <scale-slider value="20" style="--background-bar: green"></scale-slider>',type:"warn",source:this.hostElement}),void 0!==this.thumbLarge&&n({tag:"deprecated",message:'Property "thumbLarge" is deprecated.',type:"warn",source:this.hostElement}),void 0!==this.trackSmall&&n({tag:"deprecated",message:'Property "trackSmall" is deprecated.',type:"warn",source:this.hostElement})}handleTouchEvent(t){return 0===t.type.indexOf("touch")?t.touches[0]:t}addGlobalListeners(t){this.lastThumbZIndex=this.lastThumbZIndex+1,t.target.parentNode.style.zIndex=this.lastThumbZIndex.toString(),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd),window.addEventListener("touchmove",this.onDragging),window.addEventListener("touchend",this.onDragEnd)}removeGlobalListeners(){window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("touchmove",this.onDragging),window.removeEventListener("touchend",this.onDragEnd)}getRangeAriaValueText(){return this.innerAriaValueText.replace(/\$from/g,`${this.valueFrom}`).replace(/\$to/g,`${this.valueTo}`)}render(){const t=`helper-message-${this.internalId}`,i={"aria-describedBy":t};return a(s,null,this.styles&&a("style",null,this.styles),a("div",{part:o("base",this.disabled&&"disabled")},a("div",{part:"label-wrapper"},!!this.label&&a("label",{part:"label",id:`${this.sliderId}-label`,htmlFor:this.sliderId},this.label),this.showValue&&a("div",{part:"value-text"},this.getTextValue())),a("div",{part:"track-wrapper"},a("div",{part:"track",ref:t=>this.sliderTrack=t},a("div",{part:"bar",style:{left:(this.range?this.positionFrom:0)+"%",width:`${this.range?this.positionTo-this.positionFrom:this.position}%`}}),this.showStepMarks&&a("div",{part:"step-marks"},this.getNumberOfSteps().map((()=>a("span",{part:"step-mark"})))),a("div",{part:"inner-track"},this.range?a(r,null,a("div",{part:"thumb-wrapper from",style:{left:`${this.positionFrom}%`},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},a("div",Object.assign({part:"thumb from",tabindex:"0",role:"slider",id:this.sliderId+"-from","aria-valuemin":this.min,"aria-valuenow":`${this.valueFrom} to ${this.valueTo}`,"aria-valuemax":this.max,"aria-valuetext":`${this.valueFrom} to ${this.valueTo}`,"aria-labelledby":`${this.sliderId}-label`,"aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?i:{},{onKeyDown:this.onKeyDown}))),a("div",{part:"thumb-wrapper to",style:{left:`${this.positionTo}%`},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},a("div",Object.assign({part:"thumb to",tabindex:"0",role:"slider",id:this.sliderId+"-to","aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":this.getRangeAriaValueText(),"aria-labelledby":`${this.sliderId}-label`,"aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?i:{},{onKeyDown:this.onKeyDown})))):a("div",{part:"thumb-wrapper",style:{left:`${this.position}%`},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},a("div",Object.assign({part:"thumb",tabindex:"0",role:"slider",id:this.sliderId,"aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":`${this.value}`,"aria-labelledby":`${this.sliderId}-label`,"aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?i:{},{onKeyDown:this.onKeyDown})))))),a("input",{type:"hidden",value:this.getTextValue(),name:this.name}),this.helperText&&a("div",{part:"meta",id:t,"aria-live":"polite","aria-relevant":"additions removals"},a("div",{part:"helper-text"},this.helperText))))}get hostElement(){return e(this)}static get watchers(){return{value:["handleValueChange"],valueFrom:["handleValueChange"],valueTo:["handleValueChange"]}}};d.style=":host{--width:368px;--height-track:6px;--background-track:var(--telekom-color-ui-faint);--radius-track:var(--telekom-radius-pill);--spacing-track:var(--telekom-spacing-composition-space-07) 0\n    var(--telekom-spacing-composition-space-06);--spacing-x-inner-track:10px;--background-bar:var(--telekom-color-primary-standard);--radius-thumb:var(--telekom-radius-circle);--size-thumb:24px;--border-color-thumb:rgba(0, 0, 0, 0.05);--background-thumb:var(--telekom-color-ui-white);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--color-focus:var(--telekom-color-functional-focus-standard);--spacing-x-step-marks:8px;--color-step-mark:var(--telekom-color-text-and-icon-additional);--radius-step-mark:var(--telekom-radius-circle);--size-step-mark:4px;--font-label:var(--telekom-text-style-ui);--font-helper-text:var(--telekom-text-style-small-bold);--color-helper-text:var(--telekom-color-text-and-icon-additional)}[part~='base']{width:var(--width)}[part='label-wrapper']{display:flex;justify-content:space-between;align-items:flex-start}[part='label']{font:var(--font-label)}[part='value-text']{font:var(--font-label);font-variant-numeric:tabular-nums}[part='track-wrapper']{display:flex;position:relative;align-items:center}[part='track']{position:relative;box-sizing:border-box;display:flex;align-items:center;margin:var(--spacing-track);width:100%;height:var(--height-track);background:var(--background-track);border-radius:var(--radius-track);border:1px solid transparent}[part='inner-track']{position:absolute;display:flex;align-items:center;left:var(--spacing-x-inner-track);width:calc(100% - var(--spacing-x-inner-track) * 2);height:100%}[part='bar']{height:100%;position:absolute;z-index:1;border-radius:var(--radius-track);background-color:var(--background-bar);border:1px solid transparent}[part~='thumb-wrapper']{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-left:-16px;background-color:transparent}[part~='thumb']{--_border:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--border-color-thumb);width:var(--size-thumb);height:var(--size-thumb);box-sizing:border-box;border-radius:var(--radius-thumb);background-color:var(--background-thumb);box-shadow:var(--_border), var(--shadow-thumb);border:1px solid transparent}[part~='thumb']:focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:1px}[part='step-marks']{width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;padding:0 var(--spacing-x-step-marks)}[part='step-mark']{width:var(--size-step-mark);height:var(--size-step-mark);background:var(--color-step-mark);border-radius:var(--telekom-radius-circle)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='step-mark']{border:2px solid}}[part='meta']{display:flex;justify-content:space-between}[part='helper-text']{font:var(--font-helper-text);color:var(--color-helper-text)}[part~='disabled'] [part='label-wrapper'],[part~='disabled'] [part='helper-text']{color:var(--telekom-color-text-and-icon-disabled)}[part~='disabled'] [part='bar']{background-color:var(--telekom-color-ui-border-disabled)}[part~='disabled'] [part~='thumb-wrapper']{display:none}[part~='thumb-wrapper']:hover{cursor:grab}[part~='thumb-wrapper']:active{cursor:grabbing}[part~='disabled'] [part='track-wrapper']{cursor:not-allowed}:host-context([data-platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host([platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host-context([data-platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host([platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host-context([data-platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}:host([platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}";export{d as scale_slider}