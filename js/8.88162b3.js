(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"+s12":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{class:t.doorClass,style:t.doorStyle,domProps:{textContent:t._s(t.doorLabel)},on:{click:t.doorInteracted}},[t.hasImage?o("img",{attrs:{src:t.toggle.image,alt:t.toggle.label}}):t._e()])])},i=[];s._withStripped=!0;o("f3/d");var n={props:{door:{type:Object,default:null}},computed:{doorLabel:function(){return this.door.showLabel?this.door.label:""},doorClass:function(){return"interactable-door "+this.door.cssClass},hasImage:function(){return this.door.image},doorStyle:function(){if(this.door.position&&this.door.size)return"top: ".concat(this.door.position.top,"; left: ").concat(this.door.position.left,"; width: ").concat(this.door.size.width,"; height: ").concat(this.door.size.height,"; ")}},methods:{doorInteracted:function(){var t=this.$gamestate.isDoorUnlocked(this.door.name);if(!t&&this.door.locked){var e=this.$gamestate.getActiveItem();if(null===e||e.name!==this.door.key)return this.$root.$emit("alertMe",this.door.messages.locked||"Door is locked."),!1;var o=this.door.needsEnvironment;if(o&&!this.$gamestate.environmentHas(o))return this.$root.$emit("alertMe",this.door.messages.lacksEnvironment),!1;this.$root.$emit("alertMe",this.door.messages.unlocking)}this.$root.$emit("doorOpened",{door:this.door})}}},a=n,r=(o("9dzi"),o("KHd+")),c=Object(r["a"])(a,s,i,!1,null,null,null);c.options.__file="Door.vue";e["a"]=c.exports},"20Lr":function(t,e,o){},"2fjQ":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.overlayCss},[o("div",{class:t.backgroundCss})])},i=[];s._withStripped=!0;var n={props:{no_power:{type:Boolean,default:!1}},data:function(){return{}},computed:{backgroundCss:function(){var t="dark";return this.$gamestate.environmentHas("hasFlashlightCharge")&&(t="light"),this.$gamestate.environmentHas("generatorRunning")&&(this.no_power&&!this.$gamestate.environmentHas("hasFlashlightCharge")?t="dark":this.no_power||(t="")),!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="light"),t},overlayCss:function(){var t="overlay";return!this.$gamestate.environmentHas("generatorRunning")&&this.$gamestate.environmentHas("hasLowFlashlightCharge")&&(t="overlay dim"),t}},mounted:function(){this.updateOverlay()},methods:{updateOverlay:function(){}}},a=n,r=(o("Tvcl"),o("KHd+")),c=Object(r["a"])(a,s,i,!1,null,null,null);c.options.__file="Overlay.vue";e["a"]=c.exports},"9XRE":function(t,e,o){},"9dzi":function(t,e,o){"use strict";var s=o("9XRE"),i=o.n(s);i.a},NHfG:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hand",on:{click:t.toggleBackpack}},[t.activeItem?o("div",{class:t.itemClass,attrs:{title:t.activeItem.label}}):t._e()])},i=[];s._withStripped=!0;var n={data:function(){return{activeItem:this.$gamestate.getActiveItem()}},computed:{itemClass:function(){return"item "+this.activeItem.cssClass}},mounted:function(){var t=this;this.$root.$on("setActiveItem",function(e){t.$root.$emit("closeBackpack"),t.$gamestate.setActiveItem(e),t.activeItem=e}),this.$root.$on("itemsChanged",function(){t.activeItem&&!t.$gamestate.hasItem(t.activeItem)&&(t.$gamestate.setActiveItem(null),t.activeItem=null)})},methods:{toggleBackpack:function(){this.$root.$emit("toggleBackpack")}}},a=n,r=(o("n9Y7"),o("KHd+")),c=Object(r["a"])(a,s,i,!1,null,null,null);c.options.__file="Hand.vue";e["a"]=c.exports},Tvcl:function(t,e,o){"use strict";var s=o("uRmG"),i=o.n(s);i.a},ZV2y:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.utilityCssClass},[o("Overlay"),o("Backpack"),o("Hand"),t.seenPainting?o("Door",{attrs:{door:t.toSecretRoom}}):t._e(),o("Door",{attrs:{door:t.toBasement}}),o("Door",{attrs:{door:t.toF1H1}})],1)},i=[];s._withStripped=!0;var n=o("wkVo"),a=o("NHfG"),r=o("+s12"),c=o("2fjQ"),l={components:{Overlay:c["a"],Backpack:n["a"],Hand:a["a"],Door:r["a"]},data:function(){return{toF1H1:{label:"Back to F1H1",name:"backToF1H1",destination:"house-f1H1",cssClass:"backButton",showLabel:!0},toSecretRoom:{label:"To the secret room",name:"secretRoomHole",destination:"house-secret",position:{top:"220px",left:"20px"},size:{width:"100px",height:"250px"},locked:!0,key:"flashlight",messages:{locked:"The wall is solid.",unlocking:"Using the flashlight, you found a hidden lever and you pull it.  You found a secret room!"}},toBasement:{label:"Descend stairs",name:"basementStaircase",destination:"house-basement",position:{top:"350px",left:"500px"},size:{width:"180px",height:"100px"}}}},computed:{seenPainting:function(){return this.$gamestate.environmentHas("seenPainting")},utilityCssClass:function(){var t="illusion utility";return this.$gamestate.environmentHas("seenPainting")&&(t+=" open-secret-room"),t}},methods:{changeLocation:function(t){console.log(t),this.$root.$emit("locationChangeRequested",{path:t})}}},u=l,m=(o("xkS0"),o("KHd+")),d=Object(m["a"])(u,s,i,!1,null,null,null);d.options.__file="Utility.vue";e["default"]=d.exports},n9Y7:function(t,e,o){"use strict";var s=o("20Lr"),i=o.n(s);i.a},qe70:function(t,e,o){},rHVV:function(t,e,o){"use strict";var s=o("ykYr"),i=o.n(s);i.a},uRmG:function(t,e,o){},wkVo:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.active?o("div",{staticClass:"backpack"},[o("div",{staticClass:"backpack--items"},[t._l(t.items,function(e){return o("div",{key:e.name,class:t.itemCss(e),attrs:{title:e.description},on:{click:function(o){t.describeItem(e)}}})}),o("div",{staticStyle:{clear:"both"}})],2),t.selectedItem?o("div",{staticClass:"backpack--description"},[o("label",{domProps:{textContent:t._s(t.selectedItem.label)}}),o("div",{domProps:{textContent:t._s(t.selectedItem.description)}}),t.isActive?t._e():o("span",{staticClass:"item-for-hand make-active",on:{click:t.setActiveItem}},[t._v("Use")]),t.isActive?o("span",{staticClass:"item-for-hand"},[t._v("You're holding this!")]):t._e()]):t._e(),o("button",{staticClass:"close-backpack",on:{click:t.closeBackpack}},[t._v("Close backpack")])]):t._e()},i=[];s._withStripped=!0;o("f3/d");var n={props:{},data:function(){return{active:!1,selectedItem:null,items:[]}},computed:{isActive:function(){return this.$gamestate.getActiveItem()&&this.selectedItem.name===this.$gamestate.getActiveItem().name}},mounted:function(){var t=this;this.$root.$on("toggleBackpack",function(){t.active=!t.active,t.active&&(t.$root.$emit("closeNotification"),t.items=t.$gamestate.getItems())}),this.$root.$on("closeBackpack",function(){t.active=!1}),this.$root.$on("itemsChanged",function(){t.items=t.$gamestate.getItems()})},methods:{itemCss:function(t){return console.log(t),"item "+t.cssClass},describeItem:function(t){this.selectedItem=t},setActiveItem:function(t){this.$root.$emit("setActiveItem",this.selectedItem)},closeBackpack:function(){this.$root.$emit("closeBackpack")}}},a=n,r=(o("rHVV"),o("KHd+")),c=Object(r["a"])(a,s,i,!1,null,null,null);c.options.__file="Backpack.vue";e["a"]=c.exports},xkS0:function(t,e,o){"use strict";var s=o("qe70"),i=o.n(s);i.a},ykYr:function(t,e,o){}}]);