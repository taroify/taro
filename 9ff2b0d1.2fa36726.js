(window.webpackJsonp=window.webpackJsonp||[]).push([[1108],{1176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(1804)),l=["components"],b={title:"Image",sidebar_label:"Image"},o={unversionedId:"apis/canvas/Image",id:"version-2.x/apis/canvas/Image",isDocsHomePage:!1,title:"Image",description:"\u56fe\u7247\u5bf9\u8c61",source:"@site/versioned_docs/version-2.x/apis/canvas/Image.md",slug:"/apis/canvas/Image",permalink:"/taro/docs/2.x/apis/canvas/Image",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/Image.md",version:"2.x",sidebar_label:"Image",sidebar:"version-2.x/API",previous:{title:"Color",permalink:"/taro/docs/2.x/apis/canvas/Color"},next:{title:"ImageData",permalink:"/taro/docs/2.x/apis/canvas/ImageData"}},i=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u56fe\u7247\u5bf9\u8c61"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u56fe\u7247\u7684\u771f\u5b9e\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onerror"),Object(c.b)("td",null,Object(c.b)("code",null,"(...args: any[]) => any")),Object(c.b)("td",null,"\u56fe\u7247\u52a0\u8f7d\u53d1\u751f\u9519\u8bef\u540e\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"onload"),Object(c.b)("td",null,Object(c.b)("code",null,"(...args: any[]) => any")),Object(c.b)("td",null,"\u56fe\u7247\u52a0\u8f7d\u5b8c\u6210\u540e\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u56fe\u7247\u7684 URL")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u56fe\u7247\u7684\u771f\u5b9e\u5bbd\u5ea6")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Image"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0},1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,O=p["".concat(l,".").concat(s)]||p[s]||d[s]||c;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);