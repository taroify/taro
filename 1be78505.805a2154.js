(window.webpackJsonp=window.webpackJsonp||[]).push([[207,1359,1735],{1800:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1804),c=a(22),i=a(27),o=a(1818),s=a(3),m=a(7),h=a(1805),u=a(1814),v=a(1806),d=a(1848),b=a(1849),f=a(1847),p=a(1812),E=a(1815),_=a(1865),k=a(269),g=a.n(k),N=["item","onItemClick","collapsible","activePath"],j=["item","onItemClick","activePath","collapsible"];var M=function e(t,a){return"link"===t.type?Object(u.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function O(e){var t,a,r,c=e.item,i=e.onItemClick,o=e.collapsible,u=e.activePath,v=Object(m.a)(e,N),d=c.items,b=c.label,f=M(c,u),p=(a=f,r=Object(n.useRef)(a),Object(n.useEffect)((function(){r.current=a}),[a]),r.current),E=Object(n.useState)((function(){return!!o&&(!f&&c.collapsed)})),_=E[0],k=E[1],j=Object(n.useRef)(null),O=Object(n.useState)(void 0),C=O[0],z=O[1],y=function(e){var t;void 0===e&&(e=!0),z(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!p&&_&&k(!1)}),[f,p,_]);var I=Object(n.useCallback)((function(e){e.preventDefault(),C||y(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===d.length?null:l.a.createElement("li",{className:Object(h.a)("menu__list-item",{"menu__list-item--collapsed":_}),key:b},l.a.createElement("a",Object(s.a)({className:Object(h.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&f},t[g.a.menuLinkText]=!o,t)),onClick:o?I:void 0,href:o?"#!":void 0},v),b),l.a.createElement("ul",{className:"menu__list",ref:j,style:{height:C},onTransitionEnd:function(){_||y(!1)}},d.map((function(e){return l.a.createElement(w,{tabIndex:_?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:u})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(m.a)(e,j)),c=t.href,i=t.label,o=M(t,n);return l.a.createElement("li",{className:"menu__list-item",key:i},l.a.createElement(p.a,Object(s.a)({className:Object(h.a)("menu__link",{"menu__link--active":o}),to:c},Object(E.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},r),i))}function w(e){switch(e.item.type){case"category":return l.a.createElement(O,e);case"link":default:return l.a.createElement(C,e)}}var z=function(e){var t,a,r=e.path,c=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,m=e.isHidden,p=Object(n.useState)(!1),E=p[0],k=p[1],N=Object(u.useThemeConfig)(),j=N.navbar.hideOnScroll,M=N.hideableSidebar,O=Object(v.a)().isAnnouncementBarClosed,C=Object(f.a)().scrollY;Object(d.a)(E);var z=Object(b.a)();return Object(n.useEffect)((function(){z===b.b.desktop&&k(!1)}),[z]),l.a.createElement("div",{className:Object(h.a)(g.a.sidebar,(t={},t[g.a.sidebarWithHideableNavbar]=j,t[g.a.sidebarHidden]=m,t))},j&&l.a.createElement(_.a,{tabIndex:-1,className:g.a.sidebarLogo}),l.a.createElement("div",{className:Object(h.a)("menu","menu--responsive","thin-scrollbar",g.a.menu,(a={"menu--show":E},a[g.a.menuWithAnnouncementBar]=!O&&0===C,a))},l.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!E)}},E?l.a.createElement("span",{className:Object(h.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:o,activePath:r})})))),M&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(h.a)("button button--secondary button--outline",g.a.collapseSidebarButton),onClick:s}))},y=a(1828),I=a(1840),S=a(1816),x=a(275),T=a.n(x);function P(e){var t,a,i,s,m=e.currentDocRoute,v=e.versionMetadata,d=e.children,b=Object(c.default)(),f=b.siteConfig,p=b.isClient,E=v.pluginId,_=v.permalinkToSidebar,k=v.docsSidebars,g=v.version,N=_[m.path],j=k[N],M=Object(n.useState)(!1),O=M[0],C=M[1],w=Object(n.useState)(!1),I=w[0],S=w[1],x=Object(n.useCallback)((function(){I&&S(!1),C(!O)}),[I]);return l.a.createElement(o.a,{key:p,searchMetadatas:{version:g,tag:Object(u.docVersionSearchTag)(E,g)}},l.a.createElement("div",{className:T.a.docPage},j&&l.a.createElement("div",{className:Object(h.a)(T.a.docSidebarContainer,(t={},t[T.a.docSidebarContainerHidden]=O,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(T.a.docSidebarContainer)&&O&&S(!0)},role:"complementary"},l.a.createElement(z,{key:N,sidebar:j,path:m.path,sidebarCollapsible:null===(a=null===(i=f.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===a||a,onCollapse:x,isHidden:I}),I&&l.a.createElement("div",{className:T.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:x,onClick:x})),l.a.createElement("main",{className:T.a.docMainContainer},l.a.createElement("div",{className:Object(h.a)("container padding-vert--lg",T.a.docItemWrapper,(s={},s[T.a.docItemWrapperEnhanced]=O,s))},l.a.createElement(r.a,{components:y.a},d)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,r=t.find((function(e){return Object(S.matchPath)(n.pathname,e)}));return r?l.a.createElement(P,{currentDocRoute:r,versionMetadata:a},Object(i.a)(t)):l.a.createElement(I.default,e)}},1819:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"grid_c1 footer_cont"},l.a.createElement("div",{className:"footer_logo_container"},l.a.createElement("div",{className:"footer_logo"}),l.a.createElement("span",{className:"footer_designedby"})),l.a.createElement("div",{className:"footer_link_container"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),l.a.createElement("p",{className:"footer_link_connect_wrap"},l.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",l.a.createElement("span",{className:"wechat_qrcode_icon"},l.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},l.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),l.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),l.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),l.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),l.a.createElement("span",{className:"footer_link_wechat_img"},l.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1840:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1818),c=a(1816),i=a(22),o=a(1813);t.default=function(){var e,t,a,n,s=Object(c.useLocation)().pathname,m=void 0===s?"":s,h=Object(i.default)().siteConfig.baseUrl,u=void 0===h?"":h,v=Object(o.a)(m);if(v.endsWith(".html")){var d=(e=[u,u],a=t||"/",n=new RegExp(a+"{1,}","g"),e.join(a).replace(n,a));return l.a.createElement(c.Redirect,{to:v.slice(v.startsWith(d)?u.length-1:0,-5)})}return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"404"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);