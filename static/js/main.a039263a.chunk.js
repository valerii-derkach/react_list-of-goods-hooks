(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(7),c=s.n(n),i=s(4),l=s(5),o=s(1),a=(s(12),s(13),s(0)),r=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=[1,2,3,4,5,6,7,8,9,10],b=function(){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),s=e[0],n=e[1],c=Object(o.useState)([].concat(r)),b=Object(l.a)(c,2),j=b[0],h=b[1],d=Object(o.useState)(1),m=Object(l.a)(d,2),O=m[0],x=m[1],p=function(){n(!s)},f=j.filter((function(t){return t.length>=O}));return Object(a.jsxs)("div",{className:"App",children:[!s&&Object(a.jsxs)("section",{className:"App__start",children:[Object(a.jsx)("button",{className:" button is-info is-outlined is-medium",type:"button",onClick:p,children:"Start"}),Object(a.jsx)("h2",{className:"title is-3 has-text-white mt-5",children:"press the button to start"})]}),s&&Object(a.jsxs)("section",{className:"box App__section",children:[Object(a.jsx)("div",{className:"App__title is-flex is-justify-content-center",children:Object(a.jsx)("h1",{className:" title is-1 is-inline-block has-text-white",children:"GoodsList:"})}),Object(a.jsxs)("div",{className:"level-right",children:[Object(a.jsx)("h3",{className:" mr-4 is-size-4 has-text-white",children:"min length:"}),Object(a.jsx)("div",{className:"select is-info",children:Object(a.jsx)("select",{value:O,onChange:function(t){x(+t.currentTarget.value)},children:u.map((function(t){return Object(a.jsx)("option",{value:t,children:t},t)}))})})]}),Object(a.jsx)("ul",{className:"is-flex is-flex-direction-column is-align-items-center mb-5",children:f.map((function(t){return Object(a.jsx)("li",{className:"m-1",children:Object(a.jsx)("h3",{className:"title is-4 has-text-white mb-1",children:t})},t)}))}),Object(a.jsxs)("div",{className:" buttons level has-background-black",children:[Object(a.jsx)("button",{className:"button is-info is-outlined",type:"button",onClick:function(){h((function(){return Object(i.a)(j).reverse()}))},children:"Reverse"}),Object(a.jsx)("button",{className:"button is-success is-outlined",type:"button",onClick:function(){h((function(){return Object(i.a)(j).sort()}))},children:"Sort alphabetically"}),Object(a.jsx)("button",{className:"button is-success is-outlined",type:"button",onClick:function(){h((function(){return Object(i.a)(j).sort((function(t,e){return t.length-e.length}))}))},children:"Sort by length"}),Object(a.jsx)("button",{className:"button is-danger is-outlined",type:"button",onClick:function(){h((function(){return[].concat(r)})),x(1)},children:"Reset"})]}),Object(a.jsx)("div",{className:"App__hide ",children:Object(a.jsx)("button",{className:"button is-danger is-outlined mb-5",type:"button",onClick:p,children:"Hide list"})})]})]})};c.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a039263a.chunk.js.map