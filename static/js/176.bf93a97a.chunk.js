"use strict";(self.webpackChunkRent_Car_In_Ukraine=self.webpackChunkRent_Car_In_Ukraine||[]).push([[176],{3792:function(n,e,t){t.d(e,{u:function(){return _}});var r,i,o,c,l,s,d,u,a,h,p,x,f,g,m=t(2791),j=t(4164),b=t(168),v=t(5867),k=v.ZP.div(r||(r=(0,b.Z)(["\n  display: inline-block;\n  padding: 7px 14px;\n  align-items: center;\n  border-radius: 35px;\n  background: #f9f9f9;\n  width: auto;\n  color: ",";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"])),(function(n){return n.theme.colors.dark})),w=(v.ZP.h2(i||(i=(0,b.Z)(["\n  color: #6150f7;\n  -webkit-text-stroke: 0.2px white;\n  margin-bottom: 5px;\n"]))),v.ZP.span(o||(o=(0,b.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue}))),Z=v.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 8px;\n"]))),y=v.ZP.span(l||(l=(0,b.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue})),z=v.ZP.div(s||(s=(0,b.Z)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  position: relative;\n  width: 541px;\n  height: 100vh;\n  max-height: 752px;\n  background: white;\n  border-radius: 24px;\n  flex-shrink: 0;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    width: 10px;\n    height: 100px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #666666;\n    border-radius: 10px;\n  }\n  .scroll-container::-webkit-scrollbar-thumb:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),P=v.ZP.a(d||(d=(0,b.Z)(["\n  display: inline-block;\n  padding: 12px 50px;\n  text-decoration: none;\n  border-radius: 12px;\n  background: ",";\n  width: fit-content;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 24px;\n"])),(function(n){return n.theme.colors.blue})),C=v.ZP.div(u||(u=(0,b.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n  stroke: black;\n"]))),L=v.ZP.div(a||(a=(0,b.Z)(["\n  height: 268px;\n  width: 100%;\n  border-radius: 14px;\n  background: url(","), lightgray 50% / cover no-repeat;\n  background-size: cover;\n  background-position: left;\n  background-repeat: no-repeat;\n"])),(function(n){return n.$imageUrl})),M=v.ZP.div(h||(h=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.3;\n  padding-top: 8px;\n  padding-bottom: 8px;\n"]))),$=v.ZP.figure(p||(p=(0,b.Z)(["\n  margin: 0px;\n"]))),S=v.ZP.div(x||(x=(0,b.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"]))),V=v.ZP.div(f||(f=(0,b.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.4;\n  padding-top: 14px;\n  /* padding-bottom: 24px; */\n"]))),E=v.ZP.h3(g||(g=(0,b.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42;\n  margin: 0px;\n  padding-bottom: 8px;\n  padding-top: 24px;\n"]))),T=t(1442),W=t(6043),F=t(184),R=document.querySelector("#modal-root"),_=function(n){var e=n.onClose,t=n.children.props.children,r=function(n){"Escape"===n.code&&e()},i=t.rentalConditions.split("\n"),o=i[0].match(/\d+/g).join("");return(0,m.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}})),(0,j.createPortal)((0,F.jsx)("div",{children:(0,F.jsx)("div",{className:"overlay",onClick:function(n){n.target===n.currentTarget&&e()},children:(0,F.jsxs)(z,{children:[(0,F.jsxs)($,{children:[(0,F.jsx)(L,{$imageUrl:t.img,alt:t.model}),(0,F.jsxs)(M,{children:[t.make," ",(0,F.jsx)(w,{children:t.model}),","," ",t.year]})]}),(0,F.jsx)(C,{onClick:function(){e()},children:(0,F.jsx)(W.m,{name:"icon-x"})}),(0,F.jsxs)(S,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," | Year:"," ",t.year," | Type: ",t.type]}),(0,F.jsxs)(S,{children:["Fuel Consumption ",t.fuelConsumption," | Engine Size:"," ",t.engineSize]}),(0,F.jsx)(V,{children:t.description}),(0,F.jsx)(E,{children:"Accessories and functionalities:"}),(0,F.jsxs)(S,{children:[t.accessories[0]," | ",t.accessories[1]," | ",t.accessories[2]]}),(0,F.jsxs)(S,{children:[t.functionalities[0]," | ",t.functionalities[1]," |"," ",t.functionalities[2]]}),(0,F.jsx)(E,{children:"Rental conditions:"}),(0,F.jsxs)(Z,{children:[(0,F.jsxs)(k,{children:["Minimum age:"," ",(0,F.jsx)(y,{children:o})," "]}),(0,F.jsxs)(k,{children:[i[1]," "]}),(0,F.jsxs)(k,{children:[i[2]," "]}),(0,F.jsxs)(k,{children:["Mileage:"," ",(0,F.jsx)(y,{children:(0,T._A)(t.mileage)})," "]}),(0,F.jsxs)(k,{children:["Price:"," ",(0,F.jsxs)(y,{children:[t.rentalPrice.match(/\d+/g),"$"]})]})]}),(0,F.jsx)(P,{href:"tel:+380730000000",children:"Rental car"})]})})}),R)}},6043:function(n,e,t){t.d(e,{m:function(){return i}});t(2791);var r=t(184),i=function(n){switch(n.name){case"hart":return(0,r.jsx)("svg",{id:"icon-hart",viewBox:"0 0 32 32",children:(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.6667",d:"M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963 0-1.917 0.19-2.807 0.559s-1.698 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z"})});case"icon-x":return(0,r.jsxs)("svg",{id:"icon-x",viewBox:"0 0 32 32",children:[(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.4",d:"M24 8l-16 16"}),(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.4",d:"M8 8l16 16"})]});case"chevron-down":return(0,r.jsx)("svg",{id:"icon-chevron-down",viewBox:"0 0 32 32",children:(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"3.2",d:"M8 12l8 8 8-8"})});case"chevron-up":return(0,r.jsx)("svg",{id:"icon-chevron-up",viewBox:"0 0 32 32",children:(0,r.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"3.2",d:"M8 20l8-8 8 8"})});default:return"SVG not found"}}},1442:function(n,e,t){function r(n){var e=n.toString().split("."),t=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.length>1?t+"."+e[1]:t}function i(n,e){return"rentalPrice"===e?n.map((function(n){return n[e].replace(/\$/g,"")})).filter((function(n,e,t){return t.indexOf(n)===e})).filter((function(n){return parseInt(n)%10===0})).sort((function(n,e){return n-e})):n.map((function(n){return n[e]})).filter((function(n,e,t){return t.indexOf(n)===e}))}t.d(e,{MV:function(){return i},_A:function(){return r}})},2176:function(n,e,t){t.r(e);var r=t(9439),i=t(3792),o=t(2791),c=t(9434),l=t(9873),s=t(8811),d=t(8391),u=t(8534),a=t(6043),h=t(1442),p=t(184);e.default=function(){var n=(0,c.I0)(),e=(0,o.useState)(null),t=(0,r.Z)(e,2),x=t[0],f=t[1],g=(0,c.v9)(d.Q$),m=(0,c.v9)(d.Wz),j=(0,c.v9)(d.IT),b=(0,c.v9)(d.pN),v=(0,o.useState)(""),k=(0,r.Z)(v,2),w=k[0],Z=k[1],y=(0,o.useState)(""),z=(0,r.Z)(y,2),P=z[0],C=z[1],L=(0,o.useState)(!1),M=(0,r.Z)(L,2),$=M[0],S=M[1];(0,o.useEffect)((function(){n((0,l.R)(g)),n((0,l.V)())}),[n,g]),(0,o.useEffect)((function(){return function(){n((0,s.Nk)())}}),[n]);var V=(0,c.v9)(d.eA);return(0,p.jsxs)(u.lx,{children:[(0,p.jsx)(u.X0,{children:"Catalog here"}),(0,p.jsxs)(u.Ac,{onSubmit:function(e){e.preventDefault();var t=j.filter((function(n){return!(w&&n.make!==w||P&&!(Number(n.rentalPrice.slice(1))<=P))}));n((0,s.U7)(t)),S(!0)},children:[(0,p.jsxs)(u.jF,{children:[(0,p.jsx)("div",{children:"Car brand"}),(0,p.jsxs)(u.V$,{placeholder:"select the brand",defaultValue:"",onChange:function(n){return Z(n.target.value)},children:[(0,p.jsx)("option",{value:"",disabled:!0,children:"Select the brand"}),(0,h.MV)(j,"make").map((function(n){return(0,p.jsx)("option",{children:n},n)}))]})]}),(0,p.jsxs)(u.jF,{children:[(0,p.jsx)("div",{children:"Price/ 1 hour"}),(0,p.jsxs)(u.V$,{placeholder:"To $",defaultValue:"",onChange:function(n){return C(n.target.value)},children:[(0,p.jsx)("option",{value:"",disabled:!0,children:"To $"}),(0,h.MV)((0,c.v9)(d.IT),"rentalPrice").map((function(n){return(0,p.jsx)("option",{children:n},n)}))]})]}),(0,p.jsxs)(u.jF,{children:[(0,p.jsx)("div",{children:" "}),(0,p.jsx)(u.cl,{type:"submit",children:"Search"})]}),(0,p.jsxs)(u.jF,{children:[(0,p.jsx)("div",{children:" "}),(0,p.jsx)(u.cl,{type:"reset",onClick:function(){n((0,s.Nk)()),window.location.reload()},children:"Reset"})]})]}),(0,p.jsx)(u.mJ,{children:m.map((function(e){var t=e.make.length+e.model.length<13&&e.make.length<6;return(0,p.jsxs)(u.MZ,{children:[(0,p.jsx)(u.dy,{onClick:function(){return function(e){V.some((function(n){return e.id===n.id}))?n((0,s.ku)(e)):n((0,s.dB)(e))}(e)},children:V.some((function(n){return e.id===n.id}))?(0,p.jsx)(u.rF,{children:(0,p.jsx)(a.m,{name:"hart"})}):(0,p.jsx)(u.qe,{children:(0,p.jsx)(a.m,{name:"hart"})})}),(0,p.jsx)(u.mv,{children:(0,p.jsx)(u.L6,{$imageUrl:e.img,alt:e.model})}),(0,p.jsxs)(u.Y9,{children:[(0,p.jsxs)(u.El,{children:[e.make,t?(0,p.jsxs)(u.RT,{children:[" ",e.model]}):null,", ",e.year]}),(0,p.jsx)("div",{children:e.rentalPrice})]}),(0,p.jsxs)(u.bv,{children:[e.address.split(",")[1]," | ",e.address.split(",")[2]," |"," ",e.rentalCompany.replace("/\bPremium\b/gi",""),(e.address.split(",")[1]+e.address.split(",")[2]+e.rentalCompany).length<37?"| Premium":null]}),(0,p.jsxs)(u.bv,{children:[e.type," | ",e.model," | ",e.id," |"," ",e.accessories[Math.floor(3*Math.random())]]}),(0,p.jsx)(u.cv,{onClick:function(){f(e)},children:"Learn More"})]},e.id)}))}),!$&&g<b?(0,p.jsx)(u.CQ,{onClick:function(){n((0,s.bh)())},children:"Load More"}):null,x&&(0,p.jsx)(i.u,{onClose:function(){return f((n="")||""),void f(n);var n},children:(0,p.jsx)("div",{children:x})})]})}},8534:function(n,e,t){t.d(e,{Ac:function(){return M},CQ:function(){return U},El:function(){return W},L6:function(){return E},MZ:function(){return S},RT:function(){return F},V$:function(){return I},X0:function(){return L},Y9:function(){return T},bv:function(){return R},cl:function(){return A},cv:function(){return _},dy:function(){return N},jF:function(){return B},lx:function(){return C},mJ:function(){return $},mv:function(){return V},qe:function(){return q},rF:function(){return Q}});var r,i,o,c,l,s,d,u,a,h,p,x,f,g,m,j,b,v,k,w,Z,y,z=t(168),P=t(5867),C=P.zo.div(r||(r=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),L=P.zo.h2(i||(i=(0,z.Z)(["\n  display: none;\n"]))),M=P.zo.form(o||(o=(0,z.Z)(["\n  display: flex;\n  gap: 18px;\n  align-items: flex-end;\n"]))),$=P.zo.ol(c||(c=(0,z.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 29px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1400px;\n"]))),S=P.zo.li(l||(l=(0,z.Z)(["\n  display: flex;\n  width: 274px;\n  height: 426px;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-shrink: 0;\n  overflow-x: hidden;\n  position: relative;\n"]))),V=P.zo.div(s||(s=(0,z.Z)(["\n  height: auto;\n  width: 100%;\n  border-radius: 14px;\n"]))),E=P.zo.div(d||(d=(0,z.Z)(["\n  aspect-ratio: 268 / 401;\n  max-height: 268px;\n  width: 100%;\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    url(","), lightgray 50% / cover no-repeat;\n  background-size: cover;\n  background-position: left;\n  background-repeat: no-repeat;\n"])),(function(n){return n.$imageUrl})),T=P.zo.div(u||(u=(0,z.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),W=P.zo.div(a||(a=(0,z.Z)(["\n  align-items: center;\n"]))),F=P.zo.span(h||(h=(0,z.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue})),R=P.zo.div(p||(p=(0,z.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  /* text-overflow: ellipsis; */\n"]))),_=P.zo.button(x||(x=(0,z.Z)(["\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  border: 0;\n  margin-top: 28px;\n  &:hover {\n    background: #0b44cd;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.lightWhite})),A=P.zo.button(f||(f=(0,z.Z)(["\n  padding: 14px;\n  border-radius: 10px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  border: 0;\n  display: inline-flex;\n  align-items: flex-end;\n  gap: 18px;\n  &:hover {\n    background: #0b44cd;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.lightWhite})),I=P.zo.select(g||(g=(0,z.Z)(["\n  display: flex;\n  padding: 14px 89px 14px 18px;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  border-radius: 14px;\n  background: #f7f7fb;\n"]))),U=P.zo.button(m||(m=(0,z.Z)(["\n  border: 0;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  background-color: white;\n  padding-top: 100px;\n  padding-bottom: 150px;\n\n  &:hover {\n    color: #0b44cd;\n  }\n"])),(function(n){return n.theme.colors.blue})),B=(P.zo.select(j||(j=(0,z.Z)(["\n  display: flex;\n  padding: 14px 89px 14px 18px;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n"]))),P.zo.select(b||(b=(0,z.Z)([""]))),P.zo.select(v||(v=(0,z.Z)([""]))),P.zo.div(k||(k=(0,z.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.colors.grey}))),N=P.zo.div(w||(w=(0,z.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n"]))),Q=P.zo.div(Z||(Z=(0,z.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.colors.perple}),(function(n){return n.theme.colors.perple})),q=P.zo.div(y||(y=(0,z.Z)(["\n  stroke: ",";\n  fill: transparent;\n"])),(function(n){return n.theme.colors.light}))},8391:function(n,e,t){t.d(e,{H5:function(){return o},IT:function(){return s},Q$:function(){return c},Wz:function(){return r},eA:function(){return i},pN:function(){return l}});var r=function(n){return n.cars.items},i=function(n){return n.favoriteList},o=function(n){return n.itemsOnPage},c=function(n){return n.currentPage},l=function(n){return n.totalPages},s=function(n){return n.cars.allList}}}]);
//# sourceMappingURL=176.bf93a97a.chunk.js.map