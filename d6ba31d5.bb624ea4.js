(window.webpackJsonp=window.webpackJsonp||[]).push([[1472],{1539:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(1804)),c=["components"],i={title:"Taro.getStorageSync(key)",sidebar_label:"getStorageSync"},l={unversionedId:"apis/storage/getStorageSync",id:"version-3.x/apis/storage/getStorageSync",isDocsHomePage:!1,title:"Taro.getStorageSync(key)",description:"Taro.getStorage \u7684\u540c\u6b65\u7248\u672c",source:"@site/versioned_docs/version-3.x/apis/storage/getStorageSync.md",slug:"/apis/storage/getStorageSync",permalink:"/taro/docs/apis/storage/getStorageSync",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/storage/getStorageSync.md",version:"3.x",sidebar_label:"getStorageSync",sidebar:"version-3.x/API",previous:{title:"Taro.removeStorage(option)",permalink:"/taro/docs/apis/storage/removeStorage"},next:{title:"Taro.getStorageInfoSync()",permalink:"/taro/docs/apis/storage/getStorageInfoSync"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro.getStorage \u7684\u540c\u6b65\u7248\u672c"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"(key: string) => any\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"key"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.getStorage({\n  key: 'key',\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"try {\n  var value = Taro.getStorageSync('key')\n  if (value) {\n    // Do something with return value\n  }\n} catch (e) {\n  // Do something when catch error\n}\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.getStorageSync"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},1804:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,d=u["".concat(c,".").concat(g)]||u[g]||s[g]||o;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);