(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(388)}])},388:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var s=r(5893),n=r(4036),a=r.n(n),c=r(7294),o=r(6792);const l=["xxl","xl","lg","md","sm","xs"],i=c.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},c)=>{const i=(0,o.vE)(e,"row"),u=`${i}-cols`,d=[];return l.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const s="xs"!==e?`-${e}`:"";null!=r&&d.push(`${u}${s}-${r}`)})),(0,s.jsx)(r,{ref:c,...n,className:a()(t,i,...d)})}));i.displayName="Row";var u=i;const d=["xxl","xl","lg","md","sm","xs"];const f=c.forwardRef(((e,t)=>{const[{className:r,...n},{as:c="div",bsPrefix:l,spans:i}]=function({as:e,bsPrefix:t,className:r,...s}){t=(0,o.vE)(t,"col");const n=[],c=[];return d.forEach((e=>{const r=s[e];let a,o,l;delete s[e],"object"===typeof r&&null!=r?({span:a,offset:o,order:l}=r):a=r;const i="xs"!==e?`-${e}`:"";a&&n.push(!0===a?`${t}${i}`:`${t}${i}-${a}`),null!=l&&c.push(`order${i}-${l}`),null!=o&&c.push(`offset${i}-${o}`)})),[{...s,className:a()(r,...n,...c)},{as:e,bsPrefix:t,spans:n}]}(e);return(0,s.jsx)(c,{...n,ref:t,className:a()(r,!i.length&&l)})}));f.displayName="Col";var m=f,h=(r(2473),r(5446)),p=r(1311),b=r(1176),x=r(3716),g=r(7126);const j=c.forwardRef((({bsPrefix:e,active:t,disabled:r,eventKey:n,className:c,variant:l,action:i,as:u,...d},f)=>{e=(0,o.vE)(e,"list-group-item");const[m,h]=(0,x.v)({key:(0,g.h)(n,d.href),active:t,...d}),p=(0,b.Z)((e=>{if(r)return e.preventDefault(),void e.stopPropagation();m.onClick(e)}));r&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);const j=u||(i?d.href?"a":"button":"div");return(0,s.jsx)(j,{ref:f,...d,...m,onClick:p,className:a()(c,e,h.isActive&&"active",r&&"disabled",l&&`${e}-${l}`,i&&`${e}-action`)})}));j.displayName="ListGroupItem";var v=j;const y=c.forwardRef(((e,t)=>{const{className:r,bsPrefix:n,variant:c,horizontal:l,numbered:i,as:u="div",...d}=(0,h.Ch)(e,{activeKey:"onSelect"}),f=(0,o.vE)(n,"list-group");let m;return l&&(m=!0===l?"horizontal":`horizontal-${l}`),(0,s.jsx)(p.Z,{ref:t,...d,as:u,className:a()(r,f,c&&`${f}-${c}`,m&&`${f}-${m}`,i&&`${f}-numbered`)})}));y.displayName="ListGroup";var N=Object.assign(y,{Item:v});const w=c.forwardRef((({bsPrefix:e,className:t,children:r,aspectRatio:n,style:l,...i},u)=>{e=(0,o.vE)(e,"ratio");const d="number"===typeof n;return(0,s.jsx)("div",{ref:u,...i,style:{...l,...d&&{"--bs-aspect-ratio":(f=n,f<=0||f>100?"100%":f<1?100*f+"%":`${f}%`)}},className:a()(e,t,!d&&`${e}-${n}`),children:c.Children.only(r)});var f}));w.defaultProps={aspectRatio:"1x1"};var O=w,P=r(682),$=r(1664),k=r(387);function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function C(e){var t=e.children,r=e.src,n=S(e,["children","src"]),a=(0,k.useRouter)();return(0,s.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){E(e,t,r[t])}))}return e}({src:a.basePath+"/"+r},n,{children:t}))}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _(e){var t=e.children,r=e.src,n=R(e,["children","src"]),a=(0,k.useRouter)(),c={backgroundImage:"url('".concat(a.basePath,"/").concat(r,"')")};return(0,s.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){I(e,t,r[t])}))}return e}({style:c},n,{children:t}))}function Z(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P.Z,{fluid:!0,className:"text-center vh-100 p-0",children:(0,s.jsx)(_,{src:"images/landing.jpg",className:"landing",children:(0,s.jsx)(u,{className:"align-items-center h-100 g-0",children:(0,s.jsxs)(m,{children:[(0,s.jsx)("h1",{className:"display-4",children:"Animefest 2022"}),(0,s.jsx)("p",{className:"lead",children:"February 12 at UC San Diego's Price Center"})]})})})}),(0,s.jsxs)(P.Z,{fluid:!0,className:"p-4 text-center",children:[(0,s.jsxs)(N,{horizontal:!0,className:"justify-content-center",children:[(0,s.jsx)(N.Item,{className:"bg-transparent",children:(0,s.jsx)(C,{src:"images/discord.svg",alt:"Discord",height:50})}),(0,s.jsx)(N.Item,{className:"bg-transparent",children:(0,s.jsx)($.default,{href:"https://twitter.com/ucsdanimeclub",children:(0,s.jsx)("a",{children:(0,s.jsx)(C,{src:"images/twitter.svg",alt:"Twitter",height:50})})})}),(0,s.jsx)(N.Item,{className:"bg-transparent",children:(0,s.jsx)($.default,{href:"https://www.facebook.com/groups/CALAnimageBeta/",children:(0,s.jsx)("a",{children:(0,s.jsx)(C,{src:"images/facebook.png",alt:"Facebook",height:50})})})}),(0,s.jsx)(N.Item,{className:"bg-transparent",children:(0,s.jsx)($.default,{href:"https://www.instagram.com/ucsdanimagebeta/",children:(0,s.jsx)("a",{children:(0,s.jsx)(C,{src:"images/instagram.png",alt:"Instagram",height:50})})})})]}),"Contact us and get live event coverage on our social media!"]}),(0,s.jsxs)(P.Z,{fluid:!0,className:"p-5 section",id:"about",children:[(0,s.jsx)("h1",{className:"text-left mb-4",children:"About"}),"Welcome to Animefest 2022! For a taste of the con, take a look at our recap video of Animefest 2019:",(0,s.jsx)("div",{className:"video-player mx-auto",children:(0,s.jsx)(O,{aspectRatio:"16x9",children:(0,s.jsx)("iframe",{className:"mt-4",src:"https://www.youtube-nocookie.com/embed/eITsJPrRF4c",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]}),(0,s.jsxs)(P.Z,{fluid:!0,className:"p-5 mt-4 section",id:"map",children:[(0,s.jsx)("h1",{className:"text-left mb-4",children:"Map and Schedule"}),"Coming Soon!"]}),(0,s.jsxs)(P.Z,{fluid:!0,className:"p-5 mt-4 section",id:"location",children:[(0,s.jsx)("h1",{className:"text-left mb-4",children:"Location and Parking"}),"Coming Soon!"]}),(0,s.jsxs)(P.Z,{fluid:!0,className:"p-5 mt-4 section",id:"sponsors",children:[(0,s.jsx)("h1",{className:"text-left mb-4",children:"Sponsors"}),"Coming Soon!"]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);