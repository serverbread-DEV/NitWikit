"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1707],{44089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(86070),s=n(31503),i=n(44238);const c={title:"\u57fa\u7840\u77e5\u8bc6",slug:"/basic",sidebar_position:1},a="\u57fa\u7840\u77e5\u8bc6",o={id:"start/basic/basic",title:"\u57fa\u7840\u77e5\u8bc6",description:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002",source:"@site/docs-java/start/basic/basic.md",sourceDirName:"start/basic",slug:"/basic",permalink:"/NitWikit/Java/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/basic/basic.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1727693356e3,sidebarPosition:1,frontMatter:{title:"\u57fa\u7840\u77e5\u8bc6",slug:"/basic",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u9636\u6bb5",permalink:"/NitWikit/Java/start"},next:{title:"\u4ec0\u4e48\u662f\u670d\u52a1\u7aef\uff1f",permalink:"/NitWikit/Java/start/basic/what-is-server"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u57fa\u7840\u77e5\u8bc6",children:"\u57fa\u7840\u77e5\u8bc6"})}),"\n",(0,r.jsx)(t.p,{children:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6587\u6863\u6682\u65f6\u5c31\u5f00\u670d\u6700\u91cd\u8981\u7684\u57fa\u7840\u6982\u5ff5\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5982\u679c\u6709\u4f60\u81ea\u8ba4\u4e3a\u975e\u5e38\u4e86\u89e3\u6216\u8005\u4e0d\u91cd\u8981\u7684\u90e8\u5206\uff0c"}),"\n",(0,r.jsx)(t.p,{children:"\u8df3\u8fc7\u4ed6\u5427\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u540e\u9762\u518d\u6b21\u63d0\u5230\u8fd9\u4e9b\u6982\u5ff5\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u8df3\u8f6c\u5230\u5bf9\u5e94\u94fe\u63a5\u3002"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},44238:(e,t,n)=>{n.d(t,{A:()=>b});n(30758);var r=n(13526),s=n(60343),i=n(87026),c=n(76252),a=n(77546),o=n(68019),l=n(80292);const u={cardContainer:"cardContainer_vFvC",cardTitle:"cardTitle_lCqt",cardDescription:"cardDescription_Nnt4"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},76252:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(88182);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},31503:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(30758);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);