(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{1489:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Posts",function(){return t(3259)}])},9712:function(e,s,t){"use strict";t.d(s,{Z:function(){return k}});var a=t(5893),r=t(755),n=t(2640),i=t(2498),l=t(3838),c=t(9222),o=t(8911),d=t(1163),x=t(7294),u=t(9583),h=t(5675),f=t.n(h);let m=()=>(0,a.jsx)("div",{className:"logo",children:"Thianella"});var j=t(1664),v=t.n(j);let p=e=>{let{text:s,href:t,icon:r,active:n}=e;return(0,a.jsx)(v(),{href:t,className:"transition-all delay-5 hover:text-gray-500",children:(0,a.jsxs)("span",{className:"flex items-center justify-start gap-3 nav__item ".concat(r," ").concat(n?"active":""),children:[r," ",s]})})};var N=t(9352);let b=[{text:"Home",href:"/",icon:(0,a.jsx)(u.xng,{size:25})},{text:"Dashboard",href:"/control/Dashboard",icon:(0,a.jsx)(N.Ez2,{size:25})}],g=[{text:"Home",href:"/",icon:(0,a.jsx)(u.xng,{size:25})},{text:"Posts",href:"/Posts",icon:(0,a.jsx)(u.kpq,{size:25})}],_=()=>{let{toggleColorMode:e,colorMode:s}=(0,i.If)(),{isLoggedIn:t,user:h}=(0,n.Z)(),{push:j}=(0,d.useRouter)(),v=()=>{r.I.signOut(),j("/")},[N,_]=(0,x.useState)(null),[y,w]=(0,x.useState)(-1);return(0,a.jsx)("header",{className:"z-30",children:(0,a.jsxs)("nav",{className:"nav flex justify-between items-center p-1 border-b border-gray-300",children:[(0,a.jsx)(l.r,{href:"/",children:(0,a.jsx)("h1",{className:"logo",children:(0,a.jsx)(m,{})})}),(0,a.jsxs)("div",{onClick:()=>_(!N),className:"nav__menu-bar flex flex-col gap-2 cursor-pointer",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsx)("div",{className:"".concat(N?"active bg-white text-xl":""," nav__menu-list"),children:t?b.map((e,s)=>(0,a.jsx)("div",{className:N&&"border-b border-gray-300 pl-4",onClick:()=>{w(s),_(!1)},children:(0,a.jsx)(p,{active:y===s,...e})},e.text)):g.map((e,s)=>(0,a.jsx)("div",{className:N&&"border-b border-gray-300 pl-4",onClick:()=>{w(s),_(!1)},children:(0,a.jsx)(p,{active:y===s,...e})},e.text))}),t&&(0,a.jsxs)("div",{className:"userData flex items-center justify-center gap-3",children:[(0,a.jsx)(c.z,{size:"sm",className:"w-auto",onClick:()=>e(),children:"light"==s?(0,a.jsx)(u.Mei,{}):(0,a.jsx)(u.TLr,{})}),"",(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)(f(),{src:h.photoURL,alt:h.displayName||h.providerData[0].displayName,width:40,height:40,className:"rounded-full mx-2"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.x,{color:"greem.500",fontSize:"md",children:h.displayName||h.providerData[0].displayName}),(0,a.jsx)(o.x,{color:"greem.500",fontSize:"xs",children:h.email})]})]}),(0,a.jsx)(l.r,{color:"green.500",decoration:"none",className:"text-center hover:text-red-400",onClick:()=>v(),children:(0,a.jsx)(u.d7k,{className:"mx-auto text-2xl"})})]})]})})},y=()=>(0,a.jsx)("div",{className:"h-10 border-t border-gray-300",children:"Footer"});var w=t(6979);function k(e){let{children:s}=e;return(0,a.jsxs)("div",{className:"flex flex-col h-screen justify-between",children:[(0,a.jsx)(_,{}),(0,a.jsx)(w.W,{maxW:"7xl",className:"pt-4 flex-grow",children:s}),(0,a.jsx)(y,{})]})}},2998:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(5893);function r(){return(0,a.jsx)("span",{children:"Posts"})}},755:function(e,s,t){"use strict";t.d(s,{I:function(){return l},db:function(){return c}});var a=t(3977),r=t(1259),n=t(9828);let i=(0,a.ZF)({apiKey:"AIzaSyCrKueXxR-xk7KqaCP6WWwHlaD5lGJ9ASA",authDomain:"thianella-42f63.firebaseapp.com",databaseURL:"https://thianella-42f63-default-rtdb.firebaseio.com",projectId:"thianella-42f63",storageBucket:"thianella-42f63.appspot.com",messagingSenderId:"1029883663033",appId:"1:1029883663033:web:ecd443ed9250ad26488168"}),l=(0,r.v0)(i),c=(0,n.ad)(i)},2640:function(e,s,t){"use strict";var a=t(7294),r=t(755);let n=()=>{let[e,s]=(0,a.useState)(null),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{r.I.onAuthStateChanged(e=>{n(!!e&&!!e.uid),s(e)})}),{user:e,isLoggedIn:t}};s.Z=n},3259:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var a=t(5893),r=t(9712),n=t(2998);function i(){return(0,a.jsx)(r.Z,{children:(0,a.jsx)(n.Z,{})})}}},function(e){e.O(0,[445,16,278,937,945,603,774,888,179],function(){return e(e.s=1489)}),_N_E=e.O()}]);