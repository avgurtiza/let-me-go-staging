(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"+s12":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.doorClass,style:t.doorStyle,domProps:{textContent:t._s(t.doorLabel)},on:{click:t.doorInteracted}},[t.hasImage?i("img",{attrs:{src:t.toggle.image,alt:t.toggle.label}}):t._e()])])},n=[];s._withStripped=!0;i("f3/d");var a={props:{door:{type:Object,default:null}},computed:{doorLabel:function(){return this.door.showLabel?this.door.label:""},doorClass:function(){return"interactable-door "+this.door.cssClass},hasImage:function(){return this.door.image},doorStyle:function(){if(this.door.position&&this.door.size)return"top: ".concat(this.door.position.top,"; left: ").concat(this.door.position.left,"; width: ").concat(this.door.size.width,"; height: ").concat(this.door.size.height,"; ")}},methods:{doorInteracted:function(){var t=this.$gamestate.isDoorUnlocked(this.door.name);if(!t&&this.door.locked){var e=this.$gamestate.getActiveItem();if(null===e||e.name!==this.door.key)return this.$root.$emit("alertMe",this.door.messages.locked||"Door is locked."),!1;var i=this.door.needsEnvironment;if(i&&!this.$gamestate.environmentHas(i))return this.$root.$emit("alertMe",this.door.messages.lacksEnvironment),!1;this.$root.$emit("alertMe",this.door.messages.unlocking)}this.$root.$emit("doorOpened",{door:this.door})}}},o=a,c=(i("9dzi"),i("KHd+")),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Door.vue";e["a"]=r.exports},"20Lr":function(t,e,i){},"2fjQ":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.overlayCss},[i("div",{class:t.backgroundCss})])},n=[];s._withStripped=!0;var a={props:{no_power:{type:Boolean,default:!1}},data:function(){return{}},computed:{backgroundCss:function(){var t="dark";return this.$gamestate.environmentHas("hasFlashlightCharge")&&(t="light"),this.$gamestate.environmentHas("generatorRunning")&&(this.no_power&&!this.$gamestate.environmentHas("hasFlashlightCharge")?t="dark":this.no_power||(t="")),!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="light"),t},overlayCss:function(){var t="overlay";return!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="overlay dim"),t}},mounted:function(){this.updateOverlay()},methods:{updateOverlay:function(){}}},o=a,c=(i("Tvcl"),i("KHd+")),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Overlay.vue";e["a"]=r.exports},"9XRE":function(t,e,i){},"9dzi":function(t,e,i){"use strict";var s=i("9XRE"),n=i.n(s);n.a},GFra:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.containerClass,style:t.containerStyle,domProps:{textContent:t._s(t.containerLabel)},on:{click:t.containerInteracted}},[t.hasImage?i("img",{attrs:{src:t.container.image,alt:t.containerLabel}}):t._e()])])},n=[];s._withStripped=!0;i("f3/d");var a={props:{container:{type:Object,default:null}},computed:{containerLabel:function(){return this.container.showLabel?this.container.label:""},containerClass:function(){return"interactable-container "},hasImage:function(){return""},containerStyle:function(){if(this.container.position&&this.container.size)return"top: ".concat(this.container.position.top,"; left: ").concat(this.container.position.left,"; width: ").concat(this.container.size.width,"; height: ").concat(this.container.size.height,"; ")}},methods:{containerInteracted:function(){var t=this.$gamestate.isContainerUnlocked(this.container.name);if(this.container.locked||t)if(this.container.locked||!t)if(t&&this.container.locked)this.$root.$emit("alertMe",this.container.messages.unlocked);else if(!this.container.needsEnvironment||this.$gamestate.environmentHas(this.container.needsEnvironment)){if(!t&&this.container.locked){var e=this.$gamestate.getActiveItem();return null!==e&&e.name===this.container.key?(this.$root.$emit("alertMe",this.container.messages.unlocking),this.$root.$emit("containerOpened",{container:this.container}),!0):(this.$root.$emit("alertMe",this.container.messages.locked),!1)}}else this.$root.$emit("alertMe",this.container.messages.lacksEnvironment);else this.$root.$emit("alertMe",this.container.messages.unlocked);else this.$root.$emit("containerOpened",{container:this.container})}}},o=a,c=(i("iLHv"),i("KHd+")),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Container.vue";e["a"]=r.exports},Lwom:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"illusion attic"},[i("Overlay"),i("Backpack"),i("Hand"),i("Door",{attrs:{door:t.toF2H1}}),i("Container",{attrs:{container:t.cardboardBox}}),i("Toggle",{attrs:{toggle:t.painting},on:{switchInteracted:t.switchInteracted}})],1)},n=[];s._withStripped=!0;var a=i("dcap"),o=i("Xn2k"),c=i("wkVo"),r=i("NHfG"),l=i("+s12"),h=i("GFra"),m=i("2fjQ"),u={components:{Overlay:m["a"],Item:o["a"],Backpack:c["a"],Hand:r["a"],Door:l["a"],Toggle:a["a"],Container:h["a"]},data:function(){return{toF2H1:{label:"Exit attic",name:"toF2H1fromAttic",destination:"house-f2h1",cssClass:"backButton",showLabel:!0},painting:{environmentChange:"seenPainting",label:"You see the site map of the house",description:"Framed site map.",image:"",position:{top:"35%",left:"55%"},size:{width:"12%",height:"25%"},messages:{ifActivated:"You see the site map.  *There is a room beside the utility room.  There was a construction area where the bushes in the garden are now.*",activate:"Whoa.  Site map."}},cardboardBox:{label:"Cardboard box",name:"cardboardBox",cssClass:"",position:{top:"70%",left:"22%"},size:{width:"20%",height:"12%"},locked:!1,messages:{locked:"Meh",unlocking:"You opened the box",unlocked:"It's empty."},contents:[{name:"shovel",label:"Rusty shovel",description:"Old but sturdy",image:"",cssClass:"shovel",messages:{got:"You got the shovel.",lost:"You dropped the shovel."}}]}}},methods:{switchInteracted:function(t){var e=t.switch;this.$gamestate.switchIsActive(e)?(console.log("Environment already altered."),this.$root.$emit("alertMe",e.messages.ifActivated||e.messages.default)):this.$root.$emit("switchInteracted",{action:"activate",switch:t.switch})}}},d=u,g=(i("gx75"),i("KHd+")),v=Object(g["a"])(d,s,n,!1,null,null,null);v.options.__file="Attic.vue";e["default"]=v.exports},NHfG:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hand",on:{click:t.toggleBackpack}},[t.activeItem?i("div",{class:t.itemClass,attrs:{title:t.activeItem.label}}):t._e()])},n=[];s._withStripped=!0;var a={data:function(){return{activeItem:this.$gamestate.getActiveItem()}},computed:{itemClass:function(){return"item "+this.activeItem.cssClass}},mounted:function(){var t=this;this.$root.$on("setActiveItem",function(e){t.$root.$emit("closeBackpack"),t.$gamestate.setActiveItem(e),t.activeItem=e}),this.$root.$on("itemsChanged",function(){t.activeItem&&!t.$gamestate.hasItem(t.activeItem)&&(t.$gamestate.setActiveItem(null),t.activeItem=null)})},methods:{toggleBackpack:function(){this.$root.$emit("toggleBackpack")}}},o=a,c=(i("n9Y7"),i("KHd+")),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Hand.vue";e["a"]=r.exports},Tvcl:function(t,e,i){"use strict";var s=i("uRmG"),n=i.n(s);n.a},Xn2k:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.itemClass,style:t.itemStyle,on:{click:t.itemInteracted}},[t.hasImage?i("img",{attrs:{src:t.item.image,alt:t.item.label}}):t._e()])])},n=[];s._withStripped=!0;var a={props:{item:{type:Object,default:null}},computed:{itemClass:function(){return"interactable-item "+this.item.cssClass},hasImage:function(){return this.item.image},itemStyle:function(){return"top: ".concat(this.item.position.top,"; left: ").concat(this.item.position.left,"; width: ").concat(this.item.size.width,"; height: ").concat(this.item.size.height,"; ")}},methods:{itemInteracted:function(){this.$emit("itemInteracted",{item:this.item})}}},o=a,c=i("KHd+"),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Item.vue";e["a"]=r.exports},ZYQV:function(t,e,i){},dcap:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{class:t.switchClass,style:t.switchStyle,attrs:{title:t.switchLabel},on:{click:t.switchInteracted}},[t.hasImage?i("img",{attrs:{src:t.toggle.image,alt:t.toggle.label}}):t._e()])])},n=[];s._withStripped=!0;var a={props:{toggle:{type:Object,default:null}},computed:{switchLabel:function(){return this.toggle.label},switchClass:function(){return"interactable-switch "+this.toggle.cssClass},hasImage:function(){return this.toggle.image},switchStyle:function(){return"top: ".concat(this.toggle.position.top,"; left: ").concat(this.toggle.position.left,"; width: ").concat(this.toggle.size.width,"; height: ").concat(this.toggle.size.height,"; ")}},methods:{switchInteracted:function(){var t=this.toggle;if(t.activatedByItem&&!this.$gamestate.switchEnvironmentChangeIsActive(t.environmentChange)){if(!this.$gamestate.hasItem(t.activatedByItem))return console.log("Missing item fails. "+t.environmentChange),this.$root.$emit("alertMe",t.messages.lacksItem||t.messages.default),!1;if(!this.$gamestate.switchIsActivatableByItem(t))return console.log("Inactive item fails. "+t.activatedByItem),this.$root.$emit("alertMe",t.messages.itemInactive||t.messages.default),!1}if(t.activatedByEnvironment&&!this.$gamestate.switchIsActivatableByEnvironment(t))return console.log("Environment fails. "+t.activatedByEnvironment),this.$root.$emit("alertMe",t.messages.lacksEnvironment||t.messages.default),!1;this.$emit("switchInteracted",{switch:this.toggle})}}},o=a,c=i("KHd+"),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Switch.vue";e["a"]=r.exports},gx75:function(t,e,i){"use strict";var s=i("l5O0"),n=i.n(s);n.a},iLHv:function(t,e,i){"use strict";var s=i("ZYQV"),n=i.n(s);n.a},l5O0:function(t,e,i){},n9Y7:function(t,e,i){"use strict";var s=i("20Lr"),n=i.n(s);n.a},rHVV:function(t,e,i){"use strict";var s=i("ykYr"),n=i.n(s);n.a},uRmG:function(t,e,i){},wkVo:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.active?i("div",{staticClass:"backpack"},[i("div",{staticClass:"backpack--items"},[t._l(t.items,function(e){return i("div",{key:e.name,class:t.itemCss(e),attrs:{title:e.description},on:{click:function(i){t.describeItem(e)}}})}),i("div",{staticStyle:{clear:"both"}})],2),t.selectedItem?i("div",{staticClass:"backpack--description"},[i("label",{domProps:{textContent:t._s(t.selectedItem.label)}}),i("div",{domProps:{textContent:t._s(t.selectedItem.description)}}),t.isActive?t._e():i("span",{staticClass:"item-for-hand make-active",on:{click:t.setActiveItem}},[t._v("Use")]),t.isActive?i("span",{staticClass:"item-for-hand"},[t._v("You're holding this!")]):t._e()]):t._e(),i("button",{staticClass:"close-backpack",on:{click:t.closeBackpack}},[t._v("Close backpack")])]):t._e()},n=[];s._withStripped=!0;i("f3/d");var a={props:{},data:function(){return{active:!1,selectedItem:null,items:[]}},computed:{isActive:function(){return this.$gamestate.getActiveItem()&&this.selectedItem.name===this.$gamestate.getActiveItem().name}},mounted:function(){var t=this;this.$root.$on("toggleBackpack",function(){t.active=!t.active,t.active&&(t.$root.$emit("closeNotification"),t.items=t.$gamestate.getItems())}),this.$root.$on("closeBackpack",function(){t.active=!1,t.selectedItem=null}),this.$root.$on("itemsChanged",function(){t.items=t.$gamestate.getItems()})},methods:{itemCss:function(t){return"item "+t.cssClass},describeItem:function(t){this.selectedItem=t},setActiveItem:function(t){this.$root.$emit("setActiveItem",this.selectedItem)},closeBackpack:function(){this.$root.$emit("closeBackpack")}}},o=a,c=(i("rHVV"),i("KHd+")),r=Object(c["a"])(o,s,n,!1,null,null,null);r.options.__file="Backpack.vue";e["a"]=r.exports},ykYr:function(t,e,i){}}]);