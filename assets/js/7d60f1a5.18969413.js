(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(112));const i={slug:"using-cascadetype-and-what-to-avoid",title:"CascadeType.ALL \u7684\u4f7f\u7528\u53ca\u5176\u6ce8\u610f\u9879",author:"Guan Chao",author_title:"\u5168\u6808\u5de5\u7a0b\u5e08",author_url:"https://github.com/levid-gc",author_image_url:"https://avatars.githubusercontent.com/u/6498582?v=4",tags:[]},o={permalink:"/spring-boot-persistence-best-practices/blog/using-cascadetype-and-what-to-avoid",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-04-14-using-cascadetype-and-what-to-avoid.md",source:"@site/blog/2021-04-14-using-cascadetype-and-what-to-avoid.md",description:"CascadeType.ALL \u7684\u542b\u4e49\u662f\u6307\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4f1a\u5c06\u6240\u6709\u7684 EntityManager \u64cd\u4f5c\uff08PERSIST, REMOVE, REFRESH, MERGE \u548c DETACH\uff09\u4f20\u9012\uff08\u7ea7\u8054\uff09\u7ed9\u6240\u6709\u4e0e\u4e4b\u5173\u8054\u7684\u5b9e\u4f53\u3002",date:"2021-04-14T00:00:00.000Z",formattedDate:"April 14, 2021",tags:[],title:"CascadeType.ALL \u7684\u4f7f\u7528\u53ca\u5176\u6ce8\u610f\u9879",readingTime:.17,truncated:!1,prevItem:{title:"SQL \u5f02\u8c61",permalink:"/spring-boot-persistence-best-practices/blog/sql-phenomena"},nextItem:{title:"JPA (Hibernate) \u57fa\u7840",permalink:"/spring-boot-persistence-best-practices/blog/jpa-fundamentals"}},c=[],p={toc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CascadeType.ALL")," \u7684\u542b\u4e49\u662f\u6307\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4f1a\u5c06\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager")," \u64cd\u4f5c\uff08",Object(a.b)("inlineCode",{parentName:"p"},"PERSIST"),", ",Object(a.b)("inlineCode",{parentName:"p"},"REMOVE"),", ",Object(a.b)("inlineCode",{parentName:"p"},"REFRESH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"MERGE")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"DETACH"),"\uff09\u4f20\u9012\uff08\u7ea7\u8054\uff09\u7ed9\u6240\u6709\u4e0e\u4e4b\u5173\u8054\u7684\u5b9e\u4f53\u3002"),Object(a.b)("p",null,"\u5177\u4f53\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Cascade")," \u7c7b\u578b\u63cf\u8ff0\u5982\u4e0b\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PERSIST"),"\uff1a\u5982\u679c\u7236\u7ea7\u5b9e\u4f53\u88ab\u6301\u4e45\u5316\u5230\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4e2d\uff0c\u90a3\u4e48\u6240\u6709\u76f8\u5173\u7684\u5b9e\u4f53\u540c\u6837\u4f1a\u88ab\u6301\u4e45\u5316\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MERGE"),"\uff1a\u5982\u679c\u7236\u7ea7\u5b9e\u4f53\u5408\u5e76\u5230\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4e2d\uff0c\u90a3\u4e48\u76f8\u5173\u7684\u5b9e\u4f53\u90fd\u4f1a\u88ab\u5408\u5e76\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"REFRESH"),"\uff1a\u5982\u679c\u5728\u5f53\u524d\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4e2d\u5237\u65b0\u4e86\u7236\u7ea7\u5b9e\u4f53\uff0c\u90a3\u4e48\u6240\u6709\u76f8\u5173\u7684\u5b9e\u4f53\u90fd\u4f1a\u88ab\u5237\u65b0\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DETACH"),"\uff1a\u5982\u679c\u7236\u7ea7\u5b9e\u4f53\u8131\u79bb\u5f53\u524d\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\uff0c\u90a3\u4e48\u6240\u6709\u76f8\u5173\u7684\u5b9e\u4f53\u90fd\u4f1a\u8131\u79bb\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"REMOVE"),"\uff1a\u5982\u679c\u7236\u7ea7\u5b9e\u4f53\u4ece\u5f53\u524d\u7684\u6301\u4e45\u5316\u4e0a\u4e0b\u6587\u4e2d\u79fb\u9664\uff0c\u90a3\u4e48\u6240\u6709\u76f8\u5173\u7684\u5b9e\u4f53\u90fd\u4f1a\u88ab\u79fb\u9664\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ALL"),"\uff1a\u6240\u6709\u63cf\u8ff0\u90fd\u4f1a\u88ab\u5e94\u7528\u5230\u5173\u8054\u7684\u5b9e\u4f53\u4e0a\u3002")),Object(a.b)("p",null,"\u7ea7\u8054\u662f\u6700\u654f\u611f\u7684\u8bbe\u7f6e\uff0c\u56e0\u4e3a\u5728\u66f4\u65b0\u6216\u8005\u5220\u9664\u7684\u65f6\u5019\uff0c\u5e38\u5e38\u4f1a\u53d1\u751f\u610f\u5916\u7684\u4e8b\u60c5\u3002\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"CascadeType.REMOVE")," \u7684\u4f8b\u5b50\u4e2d\uff0c\u6709\u65f6\u4f60\u5e0c\u671b\u7236\u7ea7\u88ab\u5220\u9664\u7684\u65f6\u5019\uff0c\u4e0d\u8981\u5f71\u54cd\u5b50\u8868\u4e2d\u7684\u884c\uff0c\u7279\u522b\u662f\u5728\u5b50\u8868\u8fd8\u548c\u5176\u4ed6\u7684\u8868\u5b58\u5728\u5173\u8054\u7684\u60c5\u51b5\u3002"),Object(a.b)("p",null,"TODO"),Object(a.b)("p",null,"[Reference: Rapid Java Persistence and Microservices]"))}l.isMDXComponent=!0}}]);