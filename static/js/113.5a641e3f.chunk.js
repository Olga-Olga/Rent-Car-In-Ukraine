"use strict";(self.webpackChunkRent_Car_In_Ukraine=self.webpackChunkRent_Car_In_Ukraine||[]).push([[113],{5209:function(n,e,t){t.d(e,{u:function(){return A}});var i,r,o,c,l,s,d,a,u,h,p,x,f,g,m=t(2791),v=t(4164),b=t(168),k=t(5867),j=k.ZP.div(i||(i=(0,b.Z)(["\n  display: inline-block;\n  padding: 7px 14px;\n  align-items: center;\n  border-radius: 35px;\n  background: #f9f9f9;\n  width: auto;\n  color: ",";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"])),(function(n){return n.theme.colors.dark})),w=(k.ZP.h2(r||(r=(0,b.Z)(["\n  color: #6150f7;\n  -webkit-text-stroke: 0.2px white;\n  margin-bottom: 5px;\n"]))),k.ZP.span(o||(o=(0,b.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue}))),Z=k.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 8px;\n"]))),y=k.ZP.span(l||(l=(0,b.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue})),z=k.ZP.div(s||(s=(0,b.Z)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  position: relative;\n  width: 541px;\n  height: 100vh;\n  max-height: 752px;\n  background: white;\n  border-radius: 24px;\n  flex-shrink: 0;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    width: 10px;\n    height: 100px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #666666;\n    border-radius: 10px;\n  }\n  .scroll-container::-webkit-scrollbar-thumb:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),P=k.ZP.a(d||(d=(0,b.Z)(["\n  display: inline-block;\n  padding: 12px 50px;\n  text-decoration: none;\n  border-radius: 12px;\n  background: ",";\n  width: fit-content;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 24px;\n"])),(function(n){return n.theme.colors.blue})),C=k.ZP.div(a||(a=(0,b.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n  stroke: black;\n"]))),L=k.ZP.div(u||(u=(0,b.Z)(["\n  height: 268px;\n  width: 100%;\n  border-radius: 14px;\n  background: url(","), lightgray 50% / cover no-repeat;\n  background-size: cover;\n  background-position: left;\n  background-repeat: no-repeat;\n"])),(function(n){return n.$imageUrl})),M=k.ZP.div(h||(h=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.3;\n  padding-top: 8px;\n  padding-bottom: 8px;\n"]))),E=k.ZP.figure(p||(p=(0,b.Z)(["\n  margin: 0px;\n"]))),R=k.ZP.div(x||(x=(0,b.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n"]))),W=k.ZP.div(f||(f=(0,b.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.4;\n  padding-top: 14px;\n  /* padding-bottom: 24px; */\n"]))),$=k.ZP.h3(g||(g=(0,b.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42;\n  margin: 0px;\n  padding-bottom: 8px;\n  padding-top: 24px;\n"])));function B(n){var e=n.toString().split("."),t=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.length>1?t+"."+e[1]:t}var S=t(6043),U=t(184),_=document.querySelector("#modal-root"),A=function(n){var e=n.onClose,t=n.children.props.children,i=function(n){"Escape"===n.code&&e()},r=t.rentalConditions.split("\n"),o=r[0].match(/\d+/g).join("");return(0,m.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}})),(0,v.createPortal)((0,U.jsx)("div",{children:(0,U.jsx)("div",{className:"overlay",onClick:function(n){n.target===n.currentTarget&&e()},children:(0,U.jsxs)(z,{children:[(0,U.jsxs)(E,{children:[(0,U.jsx)(L,{$imageUrl:t.img,alt:t.model}),(0,U.jsxs)(M,{children:[t.make," ",(0,U.jsx)(w,{children:t.model}),","," ",t.year]})]}),(0,U.jsx)(C,{onClick:function(){e()},children:(0,U.jsx)(S.m,{name:"icon-x"})}),(0,U.jsxs)(R,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," | Year:"," ",t.year," | Type: ",t.type]}),(0,U.jsxs)(R,{children:["Fuel Consumption ",t.fuelConsumption," | Engine Size:"," ",t.engineSize]}),(0,U.jsx)(W,{children:t.description}),(0,U.jsx)($,{children:"Accessories and functionalities:"}),(0,U.jsxs)(R,{children:[t.accessories[0]," | ",t.accessories[1]," | ",t.accessories[2]]}),(0,U.jsxs)(R,{children:[t.functionalities[0]," | ",t.functionalities[1]," |"," ",t.functionalities[2]]}),(0,U.jsx)($,{children:"Rental conditions:"}),(0,U.jsxs)(Z,{children:[(0,U.jsxs)(j,{children:["Minimum age:"," ",(0,U.jsx)(y,{children:o})," "]}),(0,U.jsxs)(j,{children:[r[1]," "]}),(0,U.jsxs)(j,{children:[r[2]," "]}),(0,U.jsxs)(j,{children:["Mileage:"," ",(0,U.jsx)(y,{children:B(t.mileage)})," "]}),(0,U.jsxs)(j,{children:["Price:"," ",(0,U.jsxs)(y,{children:[t.rentalPrice.match(/\d+/g),"$"]})]})]}),(0,U.jsx)(P,{href:"tel:+380730000000",children:"Rental car"})]})})}),_)}},6043:function(n,e,t){t.d(e,{m:function(){return r}});t(2791);var i=t(184),r=function(n){switch(n.name){case"hart":return(0,i.jsx)("svg",{id:"icon-hart",viewBox:"0 0 32 32",children:(0,i.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.6667",d:"M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963 0-1.917 0.19-2.807 0.559s-1.698 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z"})});case"icon-x":return(0,i.jsxs)("svg",{id:"icon-x",viewBox:"0 0 32 32",children:[(0,i.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.4",d:"M24 8l-16 16"}),(0,i.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2.4",d:"M8 8l16 16"})]});case"chevron-down":return(0,i.jsx)("svg",{id:"icon-chevron-down",viewBox:"0 0 32 32",children:(0,i.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"3.2",d:"M8 12l8 8 8-8"})});case"chevron-up":return(0,i.jsx)("svg",{id:"icon-chevron-up",viewBox:"0 0 32 32",children:(0,i.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"3.2",d:"M8 20l8-8 8 8"})});default:return"SVG not found"}}},8534:function(n,e,t){t.d(e,{CQ:function(){return U},El:function(){return W},L6:function(){return E},MZ:function(){return L},RT:function(){return $},X0:function(){return P},Y9:function(){return R},bv:function(){return B},cv:function(){return S},dy:function(){return _},lx:function(){return z},mJ:function(){return C},mv:function(){return M},qe:function(){return Q},rF:function(){return A}});var i,r,o,c,l,s,d,a,u,h,p,x,f,g,m,v,b,k,j,w,Z=t(168),y=t(5867),z=y.zo.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 115px;\n  padding-right: 129px;\n"]))),P=y.zo.h2(r||(r=(0,Z.Z)(["\n  display: none;\n"]))),C=(y.zo.form(o||(o=(0,Z.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),y.zo.ol(c||(c=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 29px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n"])))),L=y.zo.li(l||(l=(0,Z.Z)(["\n  display: flex;\n  width: 274px;\n  height: 426px;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-shrink: 0;\n  overflow-x: hidden;\n  position: relative;\n"]))),M=y.zo.div(s||(s=(0,Z.Z)(["\n  height: auto;\n  width: 100%;\n  border-radius: 14px;\n"]))),E=y.zo.div(d||(d=(0,Z.Z)(["\n  aspect-ratio: 268 / 401;\n  max-height: 268px;\n  width: 100%;\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    url(","), lightgray 50% / cover no-repeat;\n  background-size: cover;\n  background-position: left;\n  background-repeat: no-repeat;\n"])),(function(n){return n.$imageUrl})),R=y.zo.div(a||(a=(0,Z.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),W=y.zo.div(u||(u=(0,Z.Z)(["\n  align-items: center;\n"]))),$=y.zo.span(h||(h=(0,Z.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.blue})),B=y.zo.div(p||(p=(0,Z.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  /* text-overflow: ellipsis; */\n"]))),S=y.zo.button(x||(x=(0,Z.Z)(["\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  border: 0;\n  margin-top: 28px;\n  &:hover {\n    background: #0b44cd;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.lightWhite})),U=y.zo.button(f||(f=(0,Z.Z)(["\n  border: 0;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  background-color: white;\n  padding-top: 100px;\n  padding-bottom: 150px;\n\n  &:hover {\n    color: #0b44cd;\n  }\n"])),(function(n){return n.theme.colors.blue})),_=(y.zo.select(g||(g=(0,Z.Z)(["\n  display: flex;\n  padding: 14px 89px 14px 18px;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n"]))),y.zo.select(m||(m=(0,Z.Z)([""]))),y.zo.select(v||(v=(0,Z.Z)([""]))),y.zo.div(b||(b=(0,Z.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.colors.grey})),y.zo.div(k||(k=(0,Z.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 14px;\n  right: 14px;\n"])))),A=y.zo.div(j||(j=(0,Z.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.theme.colors.perple}),(function(n){return n.theme.colors.perple})),Q=y.zo.div(w||(w=(0,Z.Z)(["\n  stroke: ",";\n  fill: transparent;\n"])),(function(n){return n.theme.colors.light}))},113:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i,r,o=t(9439),c=t(9434),l=t(8391),s=t(8534),d=t(8811),a=t(6043),u=t(2791),h=t(5209),p=t(1087),x=t(168),f=t(5867),g=(f.ZP.h2(i||(i=(0,x.Z)(["\n  color: #6150f7;\n  -webkit-text-stroke: 0.2px white;\n  margin-bottom: 5px;\n"]))),f.ZP.div(r||(r=(0,x.Z)(["\n  height: 100vh;\n  width: 100vw;\n  padding: 50px;\n  font-size: 36px;\n  color: #fff;\n  text-align: center;\n  background-image: linear-gradient(\n      rgba(200, 200, 200, 0.7),\n      rgba(20, 20, 20, 0.7)\n    ),\n    url('https://hips.hearstapps.com/hmg-prod/images/editors-choice-main-landing-illustration-by-ryan-olbrysh-01-1676994537.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"])))),m=t(184),v=function(){var n=(0,c.I0)(),e=(0,c.v9)(l.eA),t=(0,c.v9)(l.Q$),i=(0,c.v9)(l.H5),r=(0,u.useState)(null),x=(0,o.Z)(r,2),f=x[0],v=x[1],b=t*i,k=(0,c.v9)(l.eA).slice(0,b),j=k.length<(0,c.v9)(l.eA).length;return(0,m.jsxs)(s.lx,{children:[e.length?null:(0,m.jsxs)(g,{children:["No any cars are now in your favorite list. Click"," ",(0,m.jsx)(p.OL,{to:"/catalog",children:"here"})," to Review the Catalog"]}),(0,m.jsx)(s.mJ,{children:k.map((function(t){var i=t.make.length+t.model.length<13&&t.make.length<6;return(0,m.jsxs)(s.MZ,{children:[(0,m.jsx)(s.dy,{onClick:function(){return function(t){e.some((function(n){return t.id===n.id}))?n((0,d.ku)(t)):n((0,d.dB)(t))}(t)},children:e.some((function(n){return t.id===n.id}))?(0,m.jsx)(s.rF,{children:(0,m.jsx)(a.m,{name:"hart"})}):(0,m.jsx)(s.qe,{children:(0,m.jsx)(a.m,{name:"hart"})})}),(0,m.jsx)(s.mv,{children:(0,m.jsx)(s.L6,{$imageUrl:t.img,alt:t.model})}),(0,m.jsxs)(s.Y9,{children:[(0,m.jsxs)(s.El,{children:[t.make,i?(0,m.jsxs)(s.RT,{children:[" ",t.model]}):null,", ",t.year]}),(0,m.jsx)("div",{children:t.rentalPrice})]}),(0,m.jsxs)(s.bv,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," |"," ",t.rentalCompany.replace("/\bPremium\b/gi",""),(t.address.split(",")[1]+t.address.split(",")[2]+t.rentalCompany).length<37?"| Premium":null]}),(0,m.jsxs)(s.bv,{children:[t.type," | ",t.model," | ",t.id," |"," ",t.accessories[Math.floor(3*Math.random())]]}),(0,m.jsx)(s.cv,{onClick:function(){v(t)},children:"Learn More"})]},t.id)}))}),f&&(0,m.jsx)(h.u,{onClose:function(){return v((n="")||""),void v(n);var n},children:(0,m.jsx)("div",{children:f})}),j?(0,m.jsx)(s.CQ,{onClick:function(){n((0,d.bh)())},children:"Load More"}):null]})}},8391:function(n,e,t){t.d(e,{H5:function(){return o},Q$:function(){return c},Wz:function(){return i},eA:function(){return r},pN:function(){return l}});var i=function(n){return n.cars.items},r=function(n){return n.favoriteList},o=function(n){return n.itemsOnPage},c=function(n){return n.currentPage},l=function(n){return n.totalPages}}}]);
//# sourceMappingURL=113.5a641e3f.chunk.js.map