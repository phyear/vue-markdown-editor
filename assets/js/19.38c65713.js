(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(e,t,n){var r=n(1),i=n(3),o=n(101).f;r({target:"Object",stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:o})},156:function(e,t,n){var r=n(1),i=n(3),o=n(5),a=Object.isFrozen;r({target:"Object",stat:!0,forced:i((function(){a(1)}))},{isFrozen:function(e){return!o(e)||!!a&&a(e)}})},165:function(e,t,n){"use strict";t.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Links\n\n- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js {1}\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/base-editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Usage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Refrence\n\n- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)\n- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)\n'},314:function(e,t,n){(function(e){var r,i,o;n(68),n(69),n(172),n(164),n(17),n(178),n(65),n(107),n(159),n(30),n(174),n(175),n(176),n(208),n(170),n(15),n(209),n(167),n(163),n(29),n(162),n(161),n(44),n(160),n(116),n(157),n(210),n(67);var a,s=n(177);"undefined"!=typeof self&&self,a=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==s(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,,function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return r}))},,function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r="data-v-md-line",i="data-v-md-heading",o="data-v-md-anchor"},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";var r=n(5),i=n(12),o=n.n(i),a={svg:[],altGlyph:[],altGlyphDef:[],altGlyphItem:[],animate:[],animateColor:[],animateMotion:[],animateTransform:[],circle:[],clipPath:[],"color-profile":[],cursor:[],"definition-src":[],defs:[],desc:[],ellipse:[],feBlend:[],feColorMatrix:[],feComponentTransfer:[],feComposite:[],feConvolveMatrix:[],feDiffuseLighting:[],feDisplacementMap:[],feDistantLight:[],feFlood:[],feFuncA:[],feFuncB:[],feFuncG:[],feFuncR:[],feGaussianBlur:[],feImage:[],feMerge:[],feMergeNode:[],feMorphology:[],feOffset:[],fePointLight:[],feSpecularLighting:[],feSpotLight:[],feTile:[],feTurbulence:[],filter:[],font:[],foreignObject:[],g:[],glyph:[],glyphRef:[],hkern:[],image:[],line:[],linearGradient:[],marker:[],mask:[],metadata:[],"missing-glyph":[],mpath:[],path:[],pattern:[],polygon:[],polyline:[],radialGradient:[],rect:[],set:[],stop:[],style:[],switch:[],symbol:[],text:[],textPath:[],title:[],tref:[],tspan:[],use:[],view:[],vkern:[]},s={math:[],annotation:[],semantics:[],mtext:[],mn:[],mo:[],mi:[],mspace:[],mover:[],munder:[],munderover:[],msup:[],msub:[],msubsup:[],mfrac:[],mroot:[],msqrt:[],mtable:[],mtr:[],mtd:[],mlabeledtr:[],mrow:[],menclose:[],mstyle:[],mpadded:[],mphantom:[],mglyph:[]},l=["style","align","class","id"],c=["data-"],u=Object(r.a)({tags:{input:["type"]}},s,{},a);Object.entries(u).forEach((function(e){var t=e[0],n=e[1];o.a.whiteList[t]=n}));var d={onIgnoreTagAttr:function(e,t,n){if(a[e]||s[e]||l.find((function(e){return e===t}))||c.find((function(e){return t.startsWith(e)})))return t+'="'+o.a.escapeAttrValue(n)+'"'}};t.a=new o.a.FilterXSS(d)},function(e,t,n){"use strict";function r(e){var t=0;return e===window?t=e.pageYOffset:e&&(t=e.scrollTop),t}function i(e,t){e===window?window.scrollTo(window.pageYOffset,t):e&&(e.scrollTop=t)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},function(e,t,n){"use strict";n.r(t),n.d(t,"version",(function(){return x})),n.d(t,"xss",(function(){return i.a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-md-editor-preview",class:[e.themeConfig.previewClass],on:{click:e.handlePreviewClick}},[n("div",{domProps:{innerHTML:e._s(e.html)}}),e.previewSrc?n("v-md-image-preview",{attrs:{src:e.previewSrc,"on-close":e.handleClosePreview}}):e._e()],1)};r._withStripped=!0;var i=n(6),o=n(7),a=n(11),s=n(4),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade",appear:""}},[n("div",{ref:"v-md-viewer__wrapper",staticClass:"v-md-viewer__wrapper",style:{"z-index":e.zIndex},attrs:{tabindex:"-1"}},[n("div",{staticClass:"v-md-viewer__mask",on:{click:e.hide}}),n("div",{staticClass:"v-md-viewer__btn v-md-viewer__actions"},[n("div",{staticClass:"v-md-viewer__actions__inner"},[n("i",{staticClass:"v-md-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),n("i",{staticClass:"v-md-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),n("i",{staticClass:"v-md-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),n("i",{staticClass:"v-md-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),n("div",{staticClass:"v-md-viewer__canvas"},[n("img",{ref:"img",staticClass:"v-md-viewer__img",style:e.imgStyle,attrs:{src:e.src},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}})])])])};l._withStripped=!0;var c=n(5),u=void 0!==window&&window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",d="",f={name:"v-md-image-preview",props:{src:String,zIndex:{type:Number,default:2e3},onClose:{type:Function,default:function(){}}},data:function(){return{isShow:!1,infinite:!0,loading:!1,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,r=e.offsetX,i=e.offsetY;return{transform:"scale("+t+") rotate("+n+"deg)",transition:e.enableTransition?"transform .3s":"","margin-left":r+"px","margin-top":i+"px",maxWidth:"100%",maxHeight:"100%"}}},mounted:function(){this.deviceSupportInstall(),this.$refs["v-md-viewer__wrapper"].focus(),d=document.body.style.overflow,document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow=d},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this.keyDownHandler=function(t){switch(t.keyCode){case 38:e.handleActions("zoomIn");break;case 40:e.handleActions("zoomOut")}},this.mouseWheelHandler=function(t){(t.wheelDelta?t.wheelDelta:-t.detail)>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})},document.addEventListener("keydown",this.keyDownHandler),document.addEventListener(u,this.mouseWheelHandler)},deviceSupportUninstall:function(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener(u,this.mouseWheelHandler),this.keyDownHandler=null,this.mouseWheelHandler=null},handleImgLoad:function(){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,r=n.offsetX,i=n.offsetY,o=e.pageX,a=e.pageY;this.dragHandler=function(e){t.transform.offsetX=r+e.pageX-o,t.transform.offsetY=i+e.pageY-a},document.addEventListener("mousemove",this.dragHandler),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",t.dragHandler)})),e.preventDefault()}},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},handleActions:function(e,t){if(void 0===t&&(t={}),!this.loading){var n=Object(c.a)({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),r=n.zoomRate,i=n.rotateDeg,o=n.enableTransition,a=this.transform;switch(e){case"zoomOut":a.scale>.2&&(a.scale=parseFloat((a.scale-r).toFixed(3)));break;case"zoomIn":a.scale=parseFloat((a.scale+r).toFixed(3));break;case"clocelise":a.deg+=i;break;case"anticlocelise":a.deg-=i}a.enableTransition=o}}}},p=(n(35),n(2)),m=Object(p.a)(f,l,[],!1,null,null,null);m.options.__file="src/components/image-preview.vue";var g,h=m.exports,v=function(e){return e},b={name:"v-md-preview",props:{text:{type:String,default:""},theme:Object,scrollContainer:{type:Function,default:function(){return window}},top:{type:Number,default:0}},components:(g={},g[h.name]=h,g),data:function(){return{html:"",previewSrc:""}},computed:{themeConfig:function(){return b.themeConfig||{}},markdownParser:function(){return this.themeConfig.markdownParser},markdownLoader:function(){var e;return(null==(e=this.markdownParser)?void 0:e.render.bind(this.markdownParser))||v}},watch:{text:function(){this.handleTextChange()}},created:function(){var e=this;this.theme&&b.use(this.theme),"function"!=typeof this.markdownLoader||this.markdownLoader===v?console.warn("Please configure your markdown parser"):b.markdownExtenders.forEach((function(t){t(e.markdownParser)})),this.handleTextChange()},methods:{handleClosePreview:function(){this.previewSrc=""},handlePreviewClick:function(e){var t=e.target;if("IMG"!==t.tagName){var n=t.getAttribute(s.a),r=this.$el.querySelector("["+s.b+'="'+n+'"]');r&&this.scrollToTarget({target:r,scrollContainer:this.scrollContainer(),top:this.top})}else{var i=t.getAttribute("src");this.previewSrc=i}},getOffsetTop:function(e,t){var n=e.getBoundingClientRect();return t===window||t===document.documentElement?n.top:n.top-t.getBoundingClientRect().top},scrollToTarget:function(e){var t=e.target,n=e.scrollContainer,r=void 0===n?this.scrollContainer():n,i=e.top,s=void 0===i?0:i,l=e.onScrollEnd,c=this.getOffsetTop(t,r),u=Object(o.a)(r)+c-s;Object(a.a)({scrollTarget:r,scrollToTop:u,onScrollEnd:l})},scrollToLine:function(e){var t=e.lineIndex,n=e.onScrollEnd;if(t){var r=this.$el.querySelector("["+s.c+'="'+t+'"]');r&&this.scrollToTarget({target:r,onScrollEnd:n})}},handleTextChange:function(){this.html=i.a.process(this.markdownLoader(this.text)),this.$emit("change",this.text,this.html)}},theme:function(e){b.themeConfig=e},markdownExtenders:[],extendMarkdown:function(e){b.markdownExtenders.push(e)}},w=b,y=(n(36),Object(p.a)(w,r,[],!1,null,null,null));y.options.__file="src/preview.vue";var k=y.exports,x=(n(30),"1.3.3"),T=function(e){e.component(k.name,k)};k.version=x,k.install=T,k.use=function(e,t){return"function"==typeof e?e(k,t):e.install(k,t),k},"undefined"!=typeof window&&window.Vue&&T(window.Vue),t.default=k},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(7);function i(e){var t=e.currentScrollTop,n=e.scrollToTop,r=e.scrollFn,i=e.percent,o=void 0===i?10:i,a=e.onScrollEnd,s=n>t?"down":"up",l=o/100*(n-t);window.requestAnimationFrame((function e(){t+=l,"down"===s&&t>=n||"up"===s&&t<=n?(r(n),window.cancelAnimationFrame(void 0),a&&window.requestAnimationFrame(a)):(r(t),window.requestAnimationFrame(e))}))}function o(e){var t=e.scrollTarget,n=e.scrollToTop,o=e.percent,a=void 0===o?10:o,s=e.onScrollEnd;i({currentScrollTop:Object(r.a)(t),scrollToTop:n,scrollFn:function(e){return Object(r.b)(t,e)},percent:a,onScrollEnd:s})}},function(e,t,n){var r=n(25),i=n(28),o=n(34);function a(e,t){return new o(t).process(e)}for(var s in(t=e.exports=a).filterXSS=a,t.FilterXSS=o,r)t[s]=r[s];for(var s in i)t[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=e.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)},,,function(e,t,n){var r=n(26),i=n(32);for(var o in(t=e.exports=function(e,t){return new i(t).process(e)}).FilterCSS=i,r)t[o]=r[o];"undefined"!=typeof window&&(window.filterCSS=e.exports)},function(e,t){e.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,i;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e);return t?t.index:-1}}},,,,,,,,,function(e,t,n){var r=n(15).FilterCSS,i=n(15).getDefaultWhiteList,o=n(16),a=new r;function s(e){return e.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,u=/"/g,d=/&quot;/g,f=/&#([a-zA-Z0-9]*);?/gim,p=/&colon;?/gim,m=/&newline;?/gim,g=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,h=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi;function b(e){return e.replace(u,"&quot;")}function w(e){return e.replace(d,'"')}function y(e){return e.replace(f,(function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}function k(e){return e.replace(p,":").replace(m," ")}function x(e){for(var t="",n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n);return o.trim(t)}function T(e){return x(e=k(e=y(e=w(e))))}function S(e){return s(e=b(e))}var C=/<!--[\s\S]*?-->/g;t.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},t.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}},t.onTag=function(e,t,n){},t.onIgnoreTag=function(e,t,n){},t.onTagAttr=function(e,t,n){},t.onIgnoreTagAttr=function(e,t,n){},t.safeAttrValue=function(e,t,n,r){if(n=T(n),"href"===t||"src"===t){if("#"===(n=o.trim(n)))return"#";if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(g.lastIndex=0,g.test(n))return""}else if("style"===t){if(h.lastIndex=0,h.test(n))return"";if(v.lastIndex=0,v.test(n)&&(g.lastIndex=0,g.test(n)))return"";!1!==r&&(n=(r=r||a).process(n))}return S(n)},t.escapeHtml=s,t.escapeQuote=b,t.unescapeQuote=w,t.escapeHtmlEntities=y,t.escapeDangerHtml5Entities=k,t.clearNonPrintableCharacter=x,t.friendlyAttrValue=T,t.escapeAttrValue=S,t.onIgnoreTagStripAll=function(){return""},t.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){});var n=!Array.isArray(e),r=[],i=!1;return{onIgnoreTag:function(a,s,l){if(function(t){return!!n||-1!==o.indexOf(e,t)}(a)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return r.push([!1!==i?i:l.position,u]),i=!1,c}return i||(i=l.position),"[removed]"}return t(a,s,l)},remove:function(e){var t="",n=0;return o.forEach(r,(function(r){t+=e.slice(n,r[0]),n=r[1]})),t+=e.slice(n)}}},t.stripCommentTag=function(e){return e.replace(C,"")},t.stripBlankChar=function(e){var t=e.split("");return(t=t.filter((function(e){var t=e.charCodeAt(0);return!(127===t||t<=31&&10!==t&&13!==t)}))).join("")},t.cssFilter=a,t.getDefaultCSSWhiteList=i},function(e,t){function n(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var r=/javascript\s*\:/gim;t.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},t.getDefaultWhiteList=n,t.onAttr=function(e,t,n){},t.onIgnoreAttr=function(e,t,n){},t.safeAttrValue=function(e,t){return r.test(t)?"":t}},function(e,t){e.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,i;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},function(e,t,n){var r=n(16);function i(e){var t=r.spaceIndex(e);if(-1===t)var n=e.slice(1,-1);else n=e.slice(1,t+1);return"/"===(n=r.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}function o(e){return"</"===e.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(e,t){for(;t<e.length;t++){var n=e[t];if(" "!==n)return"="===n?t:-1}}function l(e,t){for(;t>0;t--){var n=e[t];if(" "!==n)return"="===n?t:-1}}function c(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}t.parseTag=function(e,t,n){var r="",a=0,s=!1,l=!1,c=0,u=e.length,d="",f="";for(c=0;c<u;c++){var p=e.charAt(c);if(!1===s){if("<"===p){s=c;continue}}else if(!1===l){if("<"===p){r+=n(e.slice(a,c)),s=c,a=c;continue}if(">"===p){r+=n(e.slice(a,s)),d=i(f=e.slice(s,c+1)),r+=t(s,r.length,d,f,o(f)),a=c+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===e.charAt(c-1)){l=p;continue}}else if(p===l){l=!1;continue}}return a<e.length&&(r+=n(e.substr(a))),r},t.parseAttr=function(e,t){var n=0,i=[],o=!1,u=e.length;function d(e,n){if(!((e=(e=r.trim(e)).replace(a,"").toLowerCase()).length<1)){var o=t(e,n||"");o&&i.push(o)}}for(var f=0;f<u;f++){var p,m=e.charAt(f);if(!1!==o||"="!==m)if(!1===o||f!==n||'"'!==m&&"'"!==m||"="!==e.charAt(f-1)){if(/\s|\n|\t/.test(m)){if(e=e.replace(/\s|\n|\t/g," "),!1===o){if(-1===(p=s(e,f))){d(r.trim(e.slice(n,f))),o=!1,n=f+1;continue}f=p-1;continue}if(-1===(p=l(e,f-1))){d(o,c(r.trim(e.slice(n,f)))),o=!1,n=f+1;continue}}}else{if(-1===(p=e.indexOf(m,f+1)))break;d(o,r.trim(e.slice(n+1,p))),o=!1,n=(f=p)+1}else o=e.slice(n,f),n=f+1}return n<e.length&&(!1===o?d(e.slice(n)):d(o,c(r.trim(e.slice(n))))),r.trim(i.join(" "))}},,function(e,t,n){},,function(e,t,n){var r=n(26),i=n(33);function o(e){return null==e}function a(e){(e=function(e){var t={};for(var n in e)t[n]=e[n];return t}(e||{})).whiteList=e.whiteList||r.whiteList,e.onAttr=e.onAttr||r.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||r.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||r.safeAttrValue,this.options=e}n(27),a.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,n=t.whiteList,r=t.onAttr,a=t.onIgnoreAttr,s=t.safeAttrValue;return i(e,(function(e,t,i,l,c){var u=n[i],d=!1;if(!0===u?d=u:"function"==typeof u?d=u(l):u instanceof RegExp&&(d=u.test(l)),!0!==d&&(d=!1),l=s(i,l)){var f,p={position:t,sourcePosition:e,source:c,isWhite:d};return d?o(f=r(i,l,p))?i+":"+l:f:o(f=a(i,l,p))?void 0:f}}))},e.exports=a},function(e,t,n){var r=n(27);e.exports=function(e,t){";"!==(e=r.trimRight(e))[e.length-1]&&(e+=";");var n=e.length,i=!1,o=0,a=0,s="";function l(){if(!i){var n=r.trim(e.slice(o,a)),l=n.indexOf(":");if(-1!==l){var c=r.trim(n.slice(0,l)),u=r.trim(n.slice(l+1));if(c){var d=t(o,s.length,c,u,n);d&&(s+=d+"; ")}}}o=a+1}for(;a<n;a++){var c=e[a];if("/"===c&&"*"===e[a+1]){var u=e.indexOf("*/",a+2);if(-1===u)break;o=(a=u+1)+1,i=!1}else"("===c?i=!0:")"===c?i=!1:";"===c?i||l():"\n"===c&&l()}return r.trim(s)}},function(e,t,n){var r=n(15).FilterCSS,i=n(25),o=n(28),a=o.parseTag,s=o.parseAttr,l=n(16);function c(e){return null==e}function u(e){(e=function(e){var t={};for(var n in e)t[n]=e[n];return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=i.onIgnoreTagStripAll),e.whiteList=e.whiteList||i.whiteList,e.onTag=e.onTag||i.onTag,e.onTagAttr=e.onTagAttr||i.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||i.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||i.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||i.safeAttrValue,e.escapeHtml=e.escapeHtml||i.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new r(e.css))}u.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,n=t.whiteList,r=t.onTag,o=t.onIgnoreTag,u=t.onTagAttr,d=t.onIgnoreTagAttr,f=t.safeAttrValue,p=t.escapeHtml,m=this.cssFilter;t.stripBlankChar&&(e=i.stripBlankChar(e)),t.allowCommentTag||(e=i.stripCommentTag(e));var g=!1;t.stripIgnoreTagBody&&(g=i.StripTagBody(t.stripIgnoreTagBody,o),o=g.onIgnoreTag);var h=a(e,(function(e,t,i,a,g){var h,v={sourcePosition:e,position:t,isClosing:g,isWhite:n.hasOwnProperty(i)};if(!c(h=r(i,a,v)))return h;if(v.isWhite){if(v.isClosing)return"</"+i+">";var b=function(e){var t=l.spaceIndex(e);if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var n="/"===(e=l.trim(e.slice(t+1,-1)))[e.length-1];return n&&(e=l.trim(e.slice(0,-1))),{html:e,closing:n}}(a),w=n[i],y=s(b.html,(function(e,t){var n,r=-1!==l.indexOf(w,e);return c(n=u(i,e,t,r))?r?(t=f(i,e,t,m))?e+'="'+t+'"':e:c(n=d(i,e,t,r))?void 0:n:n}));return a="<"+i,y&&(a+=" "+y),b.closing&&(a+=" /"),a+">"}return c(h=o(i,a,v))?p(a):h}),p);return g&&(h=g.remove(h)),h},e.exports=u},function(e,t,n){"use strict";var r=n(9);n.n(r).a},function(e,t,n){"use strict";var r=n(10);n.n(r).a}]).default},"object"==s(t)&&"object"==s(e)?e.exports=a():(i=[],void 0===(o="function"==typeof(r=a)?r.apply(t,i):r)||(e.exports=o))}).call(this,n(171)(e))},315:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var r=n(143),i=n(314),o=n.n(i),a=(n(315),n(154)),s=n.n(a),l=n(165),c={components:Object(r.a)({},o.a.name,o.a),data:function(){return this.theme=s.a,{text:l.a}}},u=n(28),d=Object(u.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("v-md-preview",{attrs:{text:this.text,theme:this.theme,height:"500px"}})}),[],!1,null,null,null);t.default=d.exports}}]);