(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{8282:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/control/Dashboard",function(){return s(6736)}])},9712:function(e,t,s){"use strict";s.d(t,{Z:function(){return C}});var a=s(5893),l=s(755),i=s(2640),r=s(2498),n=s(3838),o=s(9222),c=s(8911),d=s(1163),u=s(7294),x=s(9583),h=s(5675),m=s.n(h);let j=()=>(0,a.jsx)("div",{className:"logo",children:"Thianella"});var p=s(1664),f=s.n(p);let g=e=>{let{text:t,href:s,icon:l,active:i}=e;return(0,a.jsx)(f(),{href:s,className:"transition-all delay-5 hover:text-gray-500",children:(0,a.jsxs)("span",{className:"flex items-center justify-start gap-3 nav__item ".concat(l," ").concat(i?"active":""),children:[l," ",t]})})};var v=s(9352);let b=[{text:"Home",href:"/",icon:(0,a.jsx)(x.xng,{size:25})},{text:"Dashboard",href:"/control/Dashboard",icon:(0,a.jsx)(v.Ez2,{size:25})}],N=[{text:"Home",href:"/",icon:(0,a.jsx)(x.xng,{size:25})},{text:"Posts",href:"/Posts",icon:(0,a.jsx)(x.kpq,{size:25})},{text:"Login",href:"/control",icon:(0,a.jsx)(x.d7k,{})}],y=()=>{let{toggleColorMode:e,colorMode:t}=(0,r.If)(),{isLoggedIn:s,user:h,Name:p}=(0,i.Z)(),{push:f}=(0,d.useRouter)(),v=()=>{l.I.signOut(),f("/")},[y,w]=(0,u.useState)(null),[S,C]=(0,u.useState)(-1);return(0,a.jsx)("header",{className:"z-30",children:(0,a.jsxs)("nav",{className:"nav flex justify-between items-center p-1 border-b border-gray-300",children:[(0,a.jsx)(n.r,{href:"/",children:(0,a.jsx)("h1",{className:"logo",children:(0,a.jsx)(j,{})})}),(0,a.jsxs)("div",{onClick:()=>w(!y),className:"nav__menu-bar flex flex-col gap-2 cursor-pointer",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsx)("div",{className:"".concat(y?"active bg-white text-xl":""," nav__menu-list"),children:s?b.map((e,t)=>(0,a.jsx)("div",{className:y&&"border-b border-gray-300 pl-4",onClick:()=>{C(t),w(!1)},children:(0,a.jsx)(g,{active:S===t,...e})},e.text)):N.map((e,t)=>(0,a.jsx)("div",{className:y&&"border-b border-gray-300 pl-4",onClick:()=>{C(t),w(!1)},children:(0,a.jsx)(g,{active:S===t,...e})},e.text))}),s&&(0,a.jsxs)("div",{className:"userData flex items-center justify-center gap-3",children:[(0,a.jsx)(o.z,{size:"sm",className:"w-auto",onClick:()=>e(),children:"light"==t?(0,a.jsx)(x.Mei,{}):(0,a.jsx)(x.TLr,{})}),"",(0,a.jsxs)("div",{className:"flex items-bottom justify-center",children:[(0,a.jsx)(m(),{src:h.photoURL,alt:p.displayName,width:45,height:20,className:"rounded-full mx-2"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(c.x,{color:"greem.500",fontSize:"md",children:p.displayName}),(0,a.jsx)(c.x,{color:"greem.500",fontSize:"xs",children:h.email})]})]}),(0,a.jsx)(n.r,{color:"green.500",decoration:"none",className:"text-center hover:text-red-400",onClick:()=>v(),children:(0,a.jsx)(x.d7k,{className:"mx-auto text-2xl"})})]})]})})},w=()=>(0,a.jsx)("div",{className:"h-10 border-t border-gray-300",children:"Footer"});var S=s(6979);function C(e){let{children:t}=e;return(0,a.jsxs)("div",{className:"flex flex-col h-screen justify-between",children:[(0,a.jsx)(y,{}),(0,a.jsx)(S.W,{maxW:"7xl",className:"pt-4 flex-grow",children:t}),(0,a.jsx)(w,{})]})}},755:function(e,t,s){"use strict";s.d(t,{I:function(){return n},db:function(){return o}});var a=s(3977),l=s(1259),i=s(9828);let r=(0,a.ZF)({apiKey:"AIzaSyCrKueXxR-xk7KqaCP6WWwHlaD5lGJ9ASA",authDomain:"thianella-42f63.firebaseapp.com",databaseURL:"https://thianella-42f63-default-rtdb.firebaseio.com",projectId:"thianella-42f63",storageBucket:"thianella-42f63.appspot.com",messagingSenderId:"1029883663033",appId:"1:1029883663033:web:ecd443ed9250ad26488168"}),n=(0,l.v0)(r),o=(0,i.ad)(r)},2640:function(e,t,s){"use strict";var a=s(7294),l=s(755);let i=()=>{let[e,t]=(0,a.useState)(null),[s,i]=(0,a.useState)(!1),[r,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{l.I.onAuthStateChanged(e=>{i(!!e&&!!e.uid),t(e),n(e)})}),{user:e,isLoggedIn:s,Name:r}};t.Z=i},6736:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});var a=s(5893),l=s(7294),i=s(7350),r=s(3100),n=s(7306),o=s(8129),c=s(1753),d=s(8691),u=s(9222),x=s(2640),h=s(755),m=s(9828);let j=new Date().getFullYear(),p=new Date().getMonth()+1,f=new Date().getDate(),g=new Date().getHours(),v=new Date().getMinutes(),b=new Date().getSeconds();f<10&&(f="0"+f),p<10&&(p="0"+p);let N=async e=>{let{userId:t,titulo:s,descripcion:a,autor:l,categoria:i,status:r,letras:n}=e;try{await (0,m.ET)((0,m.hJ)(h.db,"posts"),{user:t,titulo:s,descripcion:a,autor:l,categoria:i,status:r,letras:n,createdAt:j+"-"+p+"-"+f+"_"+g+":"+v+":"+b,updatedAt:null})}catch(e){}},y=async(e,t)=>{console.log("Lista => ",e);try{let s=(0,m.JU)(h.db,"posts",t);await (0,m.r7)(s,{user:e.userId,titulo:e.titulo,descripcion:e.descripcion,autor:e.autor,categoria:e.categoria,status:e.status,letras:e.letras,updatedAt:j+"-"+p+"-"+f+"_"+g+":"+v+":"+b})}catch(e){console.log(e)}},w=async e=>{let{docId:t,status:s}=e;console.log(t,s);try{let e=(0,m.JU)(h.db,"posts",t);await (0,m.r7)(e,{status:s})}catch(e){}},S=async e=>{try{let t=(0,m.JU)(h.db,"posts",e);await (0,m.oe)(t)}catch(e){}};var C=s(5152),z=s.n(C);let _=z()(()=>Promise.all([s.e(717),s.e(584),s.e(686)]).then(s.bind(s,5257)),{loadableGenerated:{webpack:()=>[5257]},ssr:!1}),k=e=>{let{edit:t,reset:s,reselect:h,canceler:m}=e,[j,p]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),[v,b]=(0,l.useState)(),[w,S]=(0,l.useState)(""),[C,z]=(0,l.useState)("Inishial esteit"),[k,D]=(0,l.useState)(""),[I,E]=(0,l.useState)(""),[P,L]=(0,l.useState)(!1),A=(0,i.p)(),{isLoggedIn:J,user:Z,Name:H}=(0,x.Z)();(0,l.useEffect)(()=>{null==t||""==t?console.log("nulo",t):t.map(e=>{p(e.titulo),g(e.descripcion),z(e.letras),b(e.autor),S(e.categoria),D(e.status)})},[t]),(0,l.useEffect)(()=>{m&&U()},[m]);let T=async()=>{if(!J){A({titulo:"Debe loguearse para crear una nota",status:"error",duration:9e3,isClosable:!0});return}L(!0),null==t||""==t?await N({titulo:j,descripcion:f,autor:H.displayName,categoria:w,letras:C,status:k,userId:Z.uid}).then(U):await y({titulo:j,descripcion:f,autor:H.displayName,categoria:w,letras:C,status:k,userId:Z.uid},t[0].id).then(U),L(!1),p(""),g(""),z(""),b(""),S(""),D(""),A(null==t||""==t?{title:"Nota creada",status:"success"}:{title:"Nota actualizada",status:"success"}),h("misposts")},U=()=>{L(!1),p(""),g(""),z(""),b(""),S(""),D(""),s("all")};return(0,a.jsxs)(r.xu,{w:"100%",margin:"0 auto",display:"block",mt:5,children:[(0,a.jsxs)(n.K,{spacing:4,direction:"row",children:[(0,a.jsxs)(r.xu,{p:5,w:"full",shadow:"md",borderWidth:"1px",children:[(0,a.jsx)(o.I,{placeholder:"Titulo",value:j,className:"mb-4",onChange:e=>p(e.target.value)}),(0,a.jsx)(c.g,{placeholder:"Descripcion",value:f,className:"mb-4",onChange:e=>g(e.target.value)}),(0,a.jsx)(r.xu,{className:"p-2 mb-4 text-gray-500",children:(0,a.jsx)("span",{children:v})}),(0,a.jsxs)(d.P,{value:w,className:"mb-4",onChange:e=>S(e.target.value),children:[(0,a.jsx)("option",{children:"Secci\xf3n"}),(0,a.jsx)("option",{value:"poemas",children:"Poemas"}),(0,a.jsx)("option",{value:"historia-corta",children:"Historia corta"}),(0,a.jsx)("option",{value:"devaneos",children:"Devaneos"})]})]}),(0,a.jsxs)(r.xu,{p:5,w:"full",shadow:"md",borderWidth:"1px",children:[(0,a.jsx)(_,{value:C,onChange:z,id:"rte",h:"85%",controls:[["bold","italic","underline"],["unorderedList","orderedList","h1","h2","h3"],["alignLeft","alignCenter","alignRight"]],children:(0,a.jsx)(c.g,{className:"mb-2"})}),(0,a.jsxs)(d.P,{value:k,onChange:e=>D(e.target.value),children:[(0,a.jsx)("option",{children:"Status"}),(0,a.jsx)("option",{value:"pendiente",children:"Pendiente"}),(0,a.jsx)("option",{value:"publicado",children:"Publicado"})]})]})]}),(0,a.jsx)(n.K,{className:"mt-4",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(u.z,{className:"w-full",onClick:()=>T(),disabled:j.length<1||f.length<1||P,variantcolor:"teal",variant:"solid",children:null!=t?"Guardar cambios":"Postear"})}),(0,a.jsx)("div",{children:(0,a.jsx)(u.z,{className:"w-full",onClick:()=>U(),variantcolor:"teal",variant:"solid",children:"Cancelar"})})]})})]})};var D=s(9712),I=s(6137),E=s(4418),P=s(8911),L=s(1689),A=s(9583);let J=e=>{let{postData:t}=e,[s,n]=(0,l.useState)([]),{user:o,Name:c}=(0,x.Z)(),d=(0,i.p)(),u=()=>{if(!o){n([]);return}let e=(0,m.IO)((0,m.hJ)(h.db,"posts"),(0,m.ar)("user","==",o.uid));(0,m.cf)(e,e=>{let t=[];e.docs.forEach(e=>{t.push({id:e.id,...e.data()})}),n(t)})};(0,l.useEffect)(()=>{u()},[o]);let j=async e=>{confirm("\xbfSeguro que desea eliminar nota?")&&(S(e),d({title:"Nota borrada",status:"success"}))},p=e=>{let s=(0,m.IO)((0,m.hJ)(h.db,"posts"),(0,m.ar)("user","==",o.uid));(0,m.cf)(s,s=>{let a=[];s.docs.forEach(e=>{a.push({id:e.id,...e.data()})}),t(a.filter(t=>t.id==e))})},f=async(e,s)=>{console.log(e,s,"=>id Status");let a="publicado"==s?"pendiente":"publicado";await w({docId:e,status:a}),t(""),d({title:"Post ".concat(a),status:"publicado"==a?"success":"warning"})};return(0,a.jsx)(r.xu,{mt:5,children:(0,a.jsx)(I.M,{columns:{base:1,md:1},spacing:8,children:s&&s.map(e=>(0,a.jsxs)(r.xu,{p:3,boxShadow:"md",transition:"0.2s",_hover:{boxShadow:"sm"},className:"grid grid-cols-2 gap-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(E.X,{as:"h3",fontSize:"md",children:e.titulo}),(0,a.jsx)(P.x,{fontSize:"sm",children:e.descripcion})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,a.jsx)(L.C,{float:"right",opacity:"0.8",className:"text-2xl rounded rounded-lg px-2 w-3/12 text-center",bg:"pendiente"==e.status?"yellow.200":"green.200",children:e.categoria}),(0,a.jsx)(L.C,{color:"green.500"==e.categoria,bg:"inherit",transition:"0.2s",_hover:{bg:"inherit",transform:"scale(1.2)"},float:"right",size:"2xl",onClick:t=>f(e.id,e.status),children:"pendiente"==e.status?(0,a.jsx)(A.uYB,{size:25}):(0,a.jsx)(A.NCu,{size:25})}),(0,a.jsx)(L.C,{bg:"inherit",transition:"0.2s",_hover:{bg:"inherit",transform:"scale(1.2)"},float:"right",size:"2xl",onClick:t=>p(e.id),children:(0,a.jsx)(A.fmQ,{size:18})}),(0,a.jsx)(L.C,{color:"red.500",bg:"inherit",transition:"0.2s",_hover:{bg:"inherit",transform:"scale(1.2)"},float:"right",size:"sm",onClick:t=>j(e.id),children:(0,a.jsx)(A.Xm5,{size:18})})]})]},e.id))})})};s(1163);var Z=s(9352);let H=()=>{let{isLoggedIn:e,user:t}=(0,x.Z)(),[s,i]=(0,l.useState)(!1),[r,n]=(0,l.useState)("misposts"),[c,d]=(0,l.useState)(null),[u,h]=(0,l.useState)(!1),m=()=>{s?i(!1):i(!0)},j=e=>{console.log("Desde editar",e),e?(d(e),n("nuevo")):d(null)},p=e=>{console.log("de handleditar",e),"all"==e&&(d(null),n("misposts"))};return(0,l.useEffect)(()=>{d(null),n("misposts"),h(!1)},[u]),console.log(c),e?(0,a.jsxs)(D.Z,{children:[(0,a.jsx)("div",{className:"ilButton flex items-center justify-start gap-0 cursor-pointer absolute left-0 z-20",onClick:e=>m(),children:s?(0,a.jsx)(A.H_v,{size:30}):(0,a.jsx)(A._HU,{size:30})}),(0,a.jsxs)("div",{className:"head grid grid-cols-3 gap-2 transition-all delay-500 ease-in-out absolute left-0 ".concat(s?"w-0 opacity-0":"w-full opacity-1"),children:[(0,a.jsxs)("div",{className:"hover:text-gray-500 transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer",onClick:e=>{n("misposts"),h(!0)},children:[(0,a.jsx)(Z.JXj,{className:"md:text-4xl text-2xl"}),(0,a.jsx)("span",{className:"md:text-md sm:text-sm",children:"Listado"})]}),(0,a.jsxs)("div",{className:"hover:text-gray-500 transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer",onClick:e=>n("nuevo"),children:[(0,a.jsx)(Z.vV,{className:"md:text-4xl text-2xl"}),(0,a.jsx)("span",{className:"md:text-md sm:text-sm",children:"Nuevo"})]}),(0,a.jsxs)("div",{className:"hover:text-gray-500 transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer",children:[(0,a.jsx)(Z.t2h,{className:"md:text-4xl text-2xl"}),(0,a.jsx)(o.I,{variant:"outline",placeholder:"Buscar",w:"70%"})]})]}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsxs)("div",{className:"w-auto pt-10 ".concat("nuevo"==r?"visible":"hidden"),children:[(0,a.jsx)("h1",{className:"pl-4 text-lg font-bold border-b border-gray-300",children:"Nuevo post"}),(0,a.jsx)(k,{edit:c,reset:p,reselect:n,canceler:u})]}),(0,a.jsxs)("div",{className:"w-auto pt-10 ".concat("misposts"==r?"visible":"hidden"),children:[(0,a.jsx)("h1",{className:"pl-4 text-lg font-bold border-b border-gray-300",children:"Mis Posts"}),(0,a.jsx)(J,{postData:j})]})]})]}):(0,a.jsx)("div",{className:"flex items-center justify-center h-full",children:"Acceso no autorizado"})};var T=H}},function(e){e.O(0,[445,16,278,937,945,603,813,774,888,179],function(){return e(e.s=8282)}),_N_E=e.O()}]);