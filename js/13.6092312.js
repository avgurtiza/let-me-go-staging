(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"+s12":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.doorClass,style:t.doorStyle,domProps:{textContent:t._s(t.doorLabel)},on:{click:t.doorInteracted}})])},s=[];n._withStripped=!0;i("f3/d");var o={props:{door:{type:Object,default:null}},computed:{doorLabel:function(){return this.door.showLabel?this.door.label:""},doorClass:function(){return"interactable-door "+this.door.cssClass},hasImage:function(){return this.door.image},doorStyle:function(){if(this.door.position&&this.door.size)return"top: ".concat(this.door.position.top,"; left: ").concat(this.door.position.left,"; width: ").concat(this.door.size.width,"; height: ").concat(this.door.size.height,"; ")}},methods:{doorInteracted:function(){var t=this.$gamestate.isDoorUnlocked(this.door.name);if(!t&&this.door.locked){var e=this.$gamestate.getActiveItem();if(null===e||e.name!==this.door.key)return this.$root.$emit("alertMe",this.door.messages.locked||"Door is locked."),!1;var i=this.door.needsEnvironment;if(i&&!this.$gamestate.environmentHas(i))return this.$root.$emit("alertMe",this.door.messages.lacksEnvironment),!1;this.$root.$emit("alertMe",this.door.messages.unlocking)}this.$root.$emit("doorOpened",{door:this.door})}}},a=o,c=(i("9dzi"),i("KHd+")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Door.vue";e["a"]=r.exports},"20Lr":function(t,e,i){},"2fjQ":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.overlayCss},[i("div",{class:t.backgroundCss})])},s=[];n._withStripped=!0;var o={props:{no_power:{type:Boolean,default:!1}},data:function(){return{}},computed:{backgroundCss:function(){var t="dark";return this.$gamestate.environmentHas("hasFlashlightCharge")&&(t="light"),this.$gamestate.environmentHas("generatorRunning")&&(this.no_power&&!this.$gamestate.environmentHas("hasFlashlightCharge")?t="dark":this.no_power||(t="")),!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="light"),t},overlayCss:function(){var t="overlay";return!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="overlay dim"),t}},mounted:function(){this.updateOverlay()},methods:{updateOverlay:function(){}}},a=o,c=(i("Tvcl"),i("KHd+")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Overlay.vue";e["a"]=r.exports},"4uJY":function(t,e,i){"use strict";var n=i("JRnr"),s=i.n(n);s.a},"9XRE":function(t,e,i){},"9dzi":function(t,e,i){"use strict";var n=i("9XRE"),s=i.n(n);s.a},GFra:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.containerClass,style:t.containerStyle,domProps:{textContent:t._s(t.containerLabel)},on:{click:t.containerInteracted}},[t.hasImage?i("img",{attrs:{src:t.container.image,alt:t.containerLabel}}):t._e()])])},s=[];n._withStripped=!0;i("f3/d");var o={props:{container:{type:Object,default:null}},computed:{containerLabel:function(){return this.container.showLabel?this.container.label:""},containerClass:function(){return"interactable-container "},hasImage:function(){return""},containerStyle:function(){if(this.container.position&&this.container.size)return"top: ".concat(this.container.position.top,"; left: ").concat(this.container.position.left,"; width: ").concat(this.container.size.width,"; height: ").concat(this.container.size.height,"; ")}},methods:{containerInteracted:function(){var t=this.$gamestate.isContainerUnlocked(this.container.name);if(this.container.locked||t)if(this.container.locked||!t)if(t&&this.container.locked)this.$root.$emit("alertMe",this.container.messages.unlocked);else if(!this.container.needsEnvironment||this.$gamestate.environmentHas(this.container.needsEnvironment)){if(!t&&this.container.locked){var e=this.$gamestate.getActiveItem();return null!==e&&e.name===this.container.key?(this.$root.$emit("alertMe",this.container.messages.unlocking),this.$root.$emit("containerOpened",{container:this.container}),!0):(this.$root.$emit("alertMe",this.container.messages.locked),!1)}}else this.$root.$emit("alertMe",this.container.messages.lacksEnvironment);else this.$root.$emit("alertMe",this.container.messages.unlocked);else this.$root.$emit("containerOpened",{container:this.container})}}},a=o,c=(i("iLHv"),i("KHd+")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Container.vue";e["a"]=r.exports},JRnr:function(t,e,i){},NHfG:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hand",on:{click:t.toggleBackpack}},[t.activeItem?i("div",{class:t.itemClass,attrs:{title:t.activeItem.label}}):t._e()])},s=[];n._withStripped=!0;var o={data:function(){return{activeItem:this.$gamestate.getActiveItem()}},computed:{itemClass:function(){return"item "+this.activeItem.cssClass}},mounted:function(){var t=this;this.$root.$on("setActiveItem",function(e){t.$root.$emit("closeBackpack"),t.$gamestate.setActiveItem(e),t.activeItem=e}),this.$root.$on("itemsChanged",function(){t.activeItem&&!t.$gamestate.hasItem(t.activeItem)&&(t.$gamestate.setActiveItem(null),t.activeItem=null)})},methods:{toggleBackpack:function(){this.$root.$emit("toggleBackpack")}}},a=o,c=(i("n9Y7"),i("KHd+")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Hand.vue";e["a"]=r.exports},SV2G:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"illusion f2h1"},[i("Overlay"),i("Backpack"),i("Hand"),i("Door",{attrs:{door:t.toAttic}}),i("Door",{attrs:{door:t.toF1H2}}),i("Door",{attrs:{door:t.toF2H2}}),i("Container",{attrs:{container:t.fuses}})],1)},s=[];n._withStripped=!0;var o=i("Xn2k"),a=i("wkVo"),c=i("NHfG"),r=i("+s12"),l=i("2fjQ"),u=i("GFra"),m={components:{Overlay:l["a"],Item:o["a"],Backpack:a["a"],Hand:c["a"],Door:r["a"],Container:u["a"]},data:function(){return{fuses:{label:"Fuses",name:"fuses",position:{top:"45%",left:"57%"},size:{width:"10%",height:"15%"},cssClass:"",popupCssClasses:{opened:"safe-opened",closed:"safe-closed",empty:"safe-empty"},messages:{unlocking:"You picked up a couple of fuses",unlocked:"It's empty."},contents:[{name:"fuses",label:"10A fuses",description:"Old fuses.  Looks cheap.",cssClass:"fuses",image:"",messages:{got:"You picked up a couple of fuses.",lost:"You lost the fuses."}}]},toF1H2:{label:"Descend stairs",name:"toF1H2fromF2H1",destination:"house-f1h2",position:{top:"80%",left:"65%"},size:{width:"20%",height:"20%"}},toAttic:{label:"Enter attic",name:"toAttic",destination:"house-attic",position:{top:"5%",left:"20%"},size:{width:"20%",height:"10%"}},toF2H2:{label:"Enter F2H2",name:"toF2H2",destination:"house-f2h2",position:{top:"40%",left:"25%"},size:{width:"10%",height:"30%"}},canGetFuses:!1}},mounted:function(){this.canGetFuses=!this.$gamestate.hasItem("fuses")&&!this.$gamestate.environmentHas("fusesInstalled")&&!this.$gamestate.environmentHas("fusesWereInstalled")},methods:{changeLocation:function(t){console.log(t),this.$root.$emit("locationChangeRequested",{path:t})},gotFuses:function(t){this.canGetFuses=!1,this.$root.$emit("itemInteracted",{action:"got",item:t.item})}}},h=m,d=(i("4uJY"),i("KHd+")),f=Object(d["a"])(h,n,s,!1,null,null,null);f.options.__file="F2H1.vue";e["default"]=f.exports},Tvcl:function(t,e,i){"use strict";var n=i("uRmG"),s=i.n(n);s.a},Xn2k:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.itemClass,style:t.itemStyle,on:{click:t.itemInteracted}},[t.hasImage?i("img",{attrs:{src:t.item.image,alt:t.item.label}}):t._e()])])},s=[];n._withStripped=!0;var o={props:{item:{type:Object,default:null}},computed:{itemClass:function(){return"interactable-item "+this.item.cssClass},hasImage:function(){return this.item.image},itemStyle:function(){return"top: ".concat(this.item.position.top,"; left: ").concat(this.item.position.left,"; width: ").concat(this.item.size.width,"; height: ").concat(this.item.size.height,"; ")}},methods:{itemInteracted:function(){this.$emit("itemInteracted",{item:this.item})}}},a=o,c=i("KHd+"),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Item.vue";e["a"]=r.exports},ZYQV:function(t,e,i){},iLHv:function(t,e,i){"use strict";var n=i("ZYQV"),s=i.n(n);s.a},n9Y7:function(t,e,i){"use strict";var n=i("20Lr"),s=i.n(n);s.a},rHVV:function(t,e,i){"use strict";var n=i("ykYr"),s=i.n(n);s.a},uRmG:function(t,e,i){},wkVo:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.active?i("div",{staticClass:"backpack"},[i("div",{staticClass:"backpack--items"},[t._l(t.items,function(e){return i("div",{key:e.name,class:t.itemCss(e),attrs:{title:e.description},on:{click:function(i){t.describeItem(e)}}})}),i("div",{staticStyle:{clear:"both"}})],2),t.selectedItem?i("div",{staticClass:"backpack--description"},[i("label",{domProps:{textContent:t._s(t.selectedItem.label)}}),i("div",{domProps:{textContent:t._s(t.selectedItem.description)}}),t.isActive?t._e():i("span",{staticClass:"item-for-hand make-active",on:{click:t.setActiveItem}},[t._v("Use")]),t.isActive?i("span",{staticClass:"item-for-hand"},[t._v("You're holding this!")]):t._e()]):t._e(),i("button",{staticClass:"close-backpack",on:{click:t.closeBackpack}},[t._v("Close backpack")])]):t._e()},s=[];n._withStripped=!0;i("f3/d");var o={props:{},data:function(){return{active:!1,selectedItem:null,items:[]}},computed:{isActive:function(){return this.$gamestate.getActiveItem()&&this.selectedItem.name===this.$gamestate.getActiveItem().name}},mounted:function(){var t=this;this.$root.$on("toggleBackpack",function(){t.active=!t.active,t.active&&(t.$root.$emit("closeNotification"),t.items=t.$gamestate.getItems())}),this.$root.$on("closeBackpack",function(){t.active=!1,t.selectedItem=null}),this.$root.$on("itemsChanged",function(){t.items=t.$gamestate.getItems()})},methods:{itemCss:function(t){return"item "+t.cssClass},describeItem:function(t){this.selectedItem=t},setActiveItem:function(t){this.$root.$emit("setActiveItem",this.selectedItem)},closeBackpack:function(){this.$root.$emit("closeBackpack")}}},a=o,c=(i("rHVV"),i("KHd+")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Backpack.vue";e["a"]=r.exports},ykYr:function(t,e,i){}}]);