(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,g=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(g,c(c({ref:t},s),{},{components:r})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},131:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/figureA-1-5e6da0f68a10140848379d9f0c8643ef.png"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(115)),i={slug:"jpa-fundamentals",title:"JPA (Hibernate) \u57fa\u7840",author:"Guan Chao",author_title:"\u5168\u6808\u5de5\u7a0b\u5e08",author_url:"https://github.com/levid-gc",author_image_url:"https://avatars.githubusercontent.com/u/6498582?v=4",tags:["JPA","Hibernate","EntityManager","EntityManagerFactory"]},c={permalink:"/spring-boot-persistence-best-practices/blog/jpa-fundamentals",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-04-14-jpa-fundamentals.md",source:"@site/blog/2021-04-14-jpa-fundamentals.md",description:"\u6301\u4e45\u5316\u5355\u5143\u662f\u4ec0\u4e48\uff1f",date:"2021-04-14T00:00:00.000Z",formattedDate:"April 14, 2021",tags:[{label:"JPA",permalink:"/spring-boot-persistence-best-practices/blog/tags/jpa"},{label:"Hibernate",permalink:"/spring-boot-persistence-best-practices/blog/tags/hibernate"},{label:"EntityManager",permalink:"/spring-boot-persistence-best-practices/blog/tags/entity-manager"},{label:"EntityManagerFactory",permalink:"/spring-boot-persistence-best-practices/blog/tags/entity-manager-factory"}],title:"JPA (Hibernate) \u57fa\u7840",readingTime:1.845,truncated:!0,nextItem:{title:"CascadeType.ALL \u7684\u4f7f\u7528\u53ca\u5176\u6ce8\u610f\u9879",permalink:"/spring-boot-persistence-best-practices/blog/using-cascadetype-and-what-to-avoid"}},p=[{value:"\u6301\u4e45\u5316\u5355\u5143\u662f\u4ec0\u4e48\uff1f",id:"\u6301\u4e45\u5316\u5355\u5143\u662f\u4ec0\u4e48\uff1f",children:[]}],s={toc:p};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u6301\u4e45\u5316\u5355\u5143\u662f\u4ec0\u4e48\uff1f"},"\u6301\u4e45\u5316\u5355\u5143\u662f\u4ec0\u4e48\uff1f"),Object(o.b)("p",null,"\u53ef\u4ee5\u5c06\u6301\u4e45\u5316\u5355\u5143\u60f3\u8c61\u6210\u4e00\u4e2a\u76d2\u5b50\uff0c\u5b83\u91cc\u9762\u88c5\u4e0b\u4e86\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManagerFactory")," \u5b9e\u4f8b\u6240\u6709\u5fc5\u8981\u7684\u4fe1\u606f\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Figure A-1. Persistence unit",src:r(131).default}),"\n",Object(o.b)("em",{parentName:"p"},"Figure A-1. Persistence unit")),Object(o.b)("p",null,"\u8fd9\u4e9b\u4fe1\u606f\u4e2d\uff0c\u6709\u5173\u4e8e\u6570\u636e\u6e90\u7684\u8be6\u7ec6\u4fe1\u606f\uff08JDBC URL\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\uff0cSQL dialect\uff0c\u7b49\u7b49\uff09\uff0c\u88ab\u6258\u7ba1\u7684\u5b9e\u4f53\u5217\u8868\uff0c\u4ee5\u53ca\u4e00\u4e9b\u5176\u4ed6\u7684\u5c5e\u6027\u3002\u5f53\u7136\uff0c\u6301\u4e45\u5316\u5355\u5143\u7c7b\u578b\u53ef\u4ee5\u662f ",Object(o.b)("strong",{parentName:"p"},"\u672c\u5730\u8d44\u6e90")," \uff08\u5355\u6570\u636e\u6e90\uff09\u6216\u8005 ",Object(o.b)("strong",{parentName:"p"},"JTA")," \uff08\u591a\u6570\u636e\u6e90\uff09\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f60\u8bbe\u5b9a\u7684\u540d\u79f0\u6765\u533a\u5206\u6301\u4e45\u5316\u5355\u5143\u3002\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u4e2d\uff0c\u4f60\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a\u6301\u4e45\u5316\u5355\u5143\uff0c\u7136\u540e\u901a\u8fc7\u5404\u81ea\u7684\u540d\u79f0\u6765\u8bc6\u522b\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u5e94\u7528\u4e2d\u8fde\u63a5\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002"))}l.isMDXComponent=!0}}]);