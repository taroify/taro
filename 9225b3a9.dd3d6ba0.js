(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1073:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(1804)),c=["components"],i={title:"\u7f16\u8bd1\u914d\u7f6e"},l={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"\u7f16\u8bd1\u914d\u7f6e",description:"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 config \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6\uff1a",source:"@site/docs/config.md",slug:"/config",permalink:"/taro/docs/next/config",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/config.md",version:"current",sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/taro/docs/next/folder"},next:{title:"\u8bbe\u8ba1\u7a3f\u53ca\u5c3a\u5bf8\u5355\u4f4d",permalink:"/taro/docs/next/size"}},u=[{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",children:[]}],s={rightToc:u};function p(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u7f16\u8bd1\u914d\u7f6e\u5b58\u653e\u4e8e\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"config")," \u76ee\u5f55\u4e2d\uff0c\u5305\u542b\u4e09\u4e2a\u6587\u4ef6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"index.js")," \u662f\u901a\u7528\u914d\u7f6e"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dev.js")," \u662f\u9879\u76ee\u9884\u89c8\u65f6\u7684\u914d\u7f6e"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prod.js")," \u662f\u9879\u76ee\u6253\u5305\u65f6\u7684\u914d\u7f6e")),Object(a.b)("p",null,"\u8be6\u7ec6\u7684\u7f16\u8bd1\u914d\u7f6e\u6587\u6863\u8bf7\u67e5\u9605\uff1a",Object(a.b)("a",{parentName:"p",href:"./config-detail"},"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5")),Object(a.b)("h3",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  // \u9879\u76ee\u540d\u79f0\n  projectName: 'Awesome Next',\n  // \u9879\u76ee\u521b\u5efa\u65e5\u671f\n  date: '2020-6-2',\n  // \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\n  designWidth: 750,\n  // \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\u6362\u7b97\u89c4\u5219\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2\n  },\n  // \u9879\u76ee\u6e90\u7801\u76ee\u5f55\n  sourceRoot: 'src',\n  // \u9879\u76ee\u4ea7\u51fa\u76ee\u5f55\n  outputRoot: 'dist',\n  // Taro \u63d2\u4ef6\u914d\u7f6e\n  plugins: [],\n  // \u5168\u5c40\u53d8\u91cf\u8bbe\u7f6e\n  defineConstants: {},\n  // \u6587\u4ef6 copy \u914d\u7f6e\n  copy: {\n    patterns: [\n    ],\n    options: {\n    }\n  },\n  // \u6846\u67b6\uff0creact\uff0cnerv\uff0cvue, vue3 \u7b49\n  framework: 'react',\n  // \u5c0f\u7a0b\u5e8f\u7aef\u4e13\u7528\u914d\u7f6e\n  mini: {\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      // \u5c0f\u7a0b\u5e8f\u7aef\u6837\u5f0f\u5f15\u7528\u672c\u5730\u8d44\u6e90\u5185\u8054\u914d\u7f6e\n      url: {\n        enable: true,\n        config: {\n          limit: 10240\n        }\n      },\n      cssModules: {\n        enable: false, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    },\n    // \u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\n    webpackChain (chain, webpack) {}\n  },\n  // H5 \u7aef\u4e13\u7528\u914d\u7f6e\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      cssModules: {\n        enable: false, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    },\n    // \u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\n    webpackChain (chain, webpack) {},\n    devServer: {}\n  }\n};\n\nmodule.exports = function(merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'));\n  }\n  return merge({}, config, require('./prod'));\n};\n")))}p.isMDXComponent=!0},1804:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);