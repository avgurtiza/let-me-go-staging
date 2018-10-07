(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"+X4G":function(t,e,i){},"+s12":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.doorClass,style:t.doorStyle,domProps:{textContent:t._s(t.doorLabel)},on:{click:t.doorInteracted}},[t.hasImage?i("img",{attrs:{src:t.toggle.image,alt:t.toggle.label}}):t._e()])])},o=[];s._withStripped=!0;i("f3/d");var a={props:{door:{type:Object,default:null}},computed:{doorLabel:function(){return this.door.showLabel?this.door.label:""},doorClass:function(){return"interactable-door "+this.door.cssClass},hasImage:function(){return this.door.image},doorStyle:function(){if(this.door.position&&this.door.size)return"top: ".concat(this.door.position.top,"; left: ").concat(this.door.position.left,"; width: ").concat(this.door.size.width,"; height: ").concat(this.door.size.height,"; ")}},methods:{doorInteracted:function(){var t=this.$gamestate.isDoorUnlocked(this.door.name);if(!t&&this.door.locked){var e=this.$gamestate.getActiveItem();if(null===e||e.name!==this.door.key)return this.$root.$emit("alertMe",this.door.messages.locked||"Door is locked."),!1;var i=this.door.needsEnvironment;if(i&&!this.$gamestate.environmentHas(i))return this.$root.$emit("alertMe",this.door.messages.lacksEnvironment),!1;this.$root.$emit("alertMe",this.door.messages.unlocking)}this.$root.$emit("doorOpened",{door:this.door})}}},n=a,r=(i("9dzi"),i("KHd+")),c=Object(r["a"])(n,s,o,!1,null,null,null);c.options.__file="Door.vue";e["a"]=c.exports},"20Lr":function(t,e,i){},"2fjQ":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.overlayCss},[i("div",{class:t.backgroundCss})])},o=[];s._withStripped=!0;var a={props:{no_power:{type:Boolean,default:!1}},data:function(){return{}},computed:{backgroundCss:function(){var t="dark";return this.$gamestate.environmentHas("hasFlashlightCharge")&&(t="light"),this.$gamestate.environmentHas("generatorRunning")&&(this.no_power&&!this.$gamestate.environmentHas("hasFlashlightCharge")?t="dark":this.no_power||(t="")),!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="light"),t},overlayCss:function(){var t="overlay";return!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="overlay dim"),t}},mounted:function(){this.updateOverlay()},methods:{updateOverlay:function(){}}},n=a,r=(i("Tvcl"),i("KHd+")),c=Object(r["a"])(n,s,o,!1,null,null,null);c.options.__file="Overlay.vue";e["a"]=c.exports},"9XRE":function(t,e,i){},"9dzi":function(t,e,i){"use strict";var s=i("9XRE"),o=i.n(s);o.a},"GM/Q":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"illusion walkway"},[i("Overlay",{attrs:{no_power:!0}}),i("Backpack"),i("Hand"),i("Door",{attrs:{door:t.toHouse}}),i("Door",{attrs:{door:t.toStart}})],1)},o=[];s._withStripped=!0;var a=i("2fjQ"),n=i("Xn2k"),r=i("wkVo"),c=i("NHfG"),l=i("+s12"),u={components:{Overlay:a["a"],Item:n["a"],Backpack:r["a"],Hand:c["a"],Door:l["a"]},data:function(){return{toStart:{label:"Back to start",name:"backTostart",destination:"garden-start",cssClass:"backButton",hasNoGeneratorCoverage:!0,showLabel:!0},toHouse:{name:"walkwayPath",label:"Our house is a very fine house",destination:"house-frontdoor",cssStyle:"",position:{top:"0",left:"35%"},size:{width:"30%",height:"60%"},hasNoGeneratorCoverage:!0}}},methods:{changeLocation:function(t){console.log("Fire event"),this.$root.$emit("locationChangeRequested",{path:t})}}},m=u,d=(i("l8Zi"),i("KHd+")),h=Object(d["a"])(m,s,o,!1,null,null,null);h.options.__file="Walkway.vue";e["default"]=h.exports},NHfG:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hand",on:{click:t.toggleBackpack}},[t.activeItem?i("div",{class:t.itemClass,attrs:{title:t.activeItem.label}}):t._e()])},o=[];s._withStripped=!0;var a={data:function(){return{activeItem:this.$gamestate.getActiveItem()}},computed:{itemClass:function(){return"item "+this.activeItem.cssClass}},mounted:function(){var t=this;this.$root.$on("setActiveItem",function(e){t.$root.$emit("closeBackpack"),t.$gamestate.setActiveItem(e),t.activeItem=e}),this.$root.$on("itemsChanged",function(){t.activeItem&&!t.$gamestate.hasItem(t.activeItem)&&(t.$gamestate.setActiveItem(null),t.activeItem=null)})},methods:{toggleBackpack:function(){this.$root.$emit("toggleBackpack")}}},n=a,r=(i("n9Y7"),i("KHd+")),c=Object(r["a"])(n,s,o,!1,null,null,null);c.options.__file="Hand.vue";e["a"]=c.exports},Tvcl:function(t,e,i){"use strict";var s=i("uRmG"),o=i.n(s);o.a},Xn2k:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.itemClass,style:t.itemStyle,on:{click:t.itemInteracted}},[t.hasImage?i("img",{attrs:{src:t.item.image,alt:t.item.label}}):t._e()])])},o=[];s._withStripped=!0;var a={props:{item:{type:Object,default:null}},computed:{itemClass:function(){return"interactable-item "+this.item.cssClass},hasImage:function(){return this.item.image},itemStyle:function(){return"top: ".concat(this.item.position.top,"; left: ").concat(this.item.position.left,"; width: ").concat(this.item.size.width,"; height: ").concat(this.item.size.height,"; ")}},methods:{itemInteracted:function(){this.$emit("itemInteracted",{item:this.item})}}},n=a,r=i("KHd+"),c=Object(r["a"])(n,s,o,!1,null,null,null);c.options.__file="Item.vue";e["a"]=c.exports},l8Zi:function(t,e,i){"use strict";var s=i("+X4G"),o=i.n(s);o.a},n9Y7:function(t,e,i){"use strict";var s=i("20Lr"),o=i.n(s);o.a},rHVV:function(t,e,i){"use strict";var s=i("ykYr"),o=i.n(s);o.a},uRmG:function(t,e,i){},wkVo:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.active?i("div",{staticClass:"backpack"},[i("div",{staticClass:"backpack--items"},[t._l(t.items,function(e){return i("div",{key:e.name,class:t.itemCss(e),attrs:{title:e.description},on:{click:function(i){t.describeItem(e)}}})}),i("div",{staticStyle:{clear:"both"}})],2),t.selectedItem?i("div",{staticClass:"backpack--description"},[i("label",{domProps:{textContent:t._s(t.selectedItem.label)}}),i("div",{domProps:{textContent:t._s(t.selectedItem.description)}}),t.isActive?t._e():i("span",{staticClass:"item-for-hand make-active",on:{click:t.setActiveItem}},[t._v("Use")]),t.isActive?i("span",{staticClass:"item-for-hand"},[t._v("You're holding this!")]):t._e()]):t._e(),i("button",{staticClass:"close-backpack",on:{click:t.closeBackpack}},[t._v("Close backpack")])]):t._e()},o=[];s._withStripped=!0;i("f3/d");var a={props:{},data:function(){return{active:!1,selectedItem:null,items:[]}},computed:{isActive:function(){return this.$gamestate.getActiveItem()&&this.selectedItem.name===this.$gamestate.getActiveItem().name}},mounted:function(){var t=this;this.$root.$on("toggleBackpack",function(){t.active=!t.active,t.active&&(t.$root.$emit("closeNotification"),t.items=t.$gamestate.getItems())}),this.$root.$on("closeBackpack",function(){t.active=!1,t.selectedItem=null}),this.$root.$on("itemsChanged",function(){t.items=t.$gamestate.getItems()})},methods:{itemCss:function(t){return"item "+t.cssClass},describeItem:function(t){this.selectedItem=t},setActiveItem:function(t){this.$root.$emit("setActiveItem",this.selectedItem)},closeBackpack:function(){this.$root.$emit("closeBackpack")}}},n=a,r=(i("rHVV"),i("KHd+")),c=Object(r["a"])(n,s,o,!1,null,null,null);c.options.__file="Backpack.vue";e["a"]=c.exports},ykYr:function(t,e,i){}}]);