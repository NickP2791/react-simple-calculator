(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{10:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),u=n(4),i=n.n(u),a=(n(9),n(2)),o=(n(10),n(0)),l={countAcc:0,recOper:""},s=function(e,c){var n={"+":function(e,c){return e+c},"-":function(e,c){return e-c},"*":function(e,c){return e*c},"/":function(e,c){return e/c}};switch(c.type){case"divide":return{countAcc:""===e.recOper?e.countAcc+c.value:n[e.recOper](e.countAcc,c.value),recOper:"/"};case"multiply":return{countAcc:""===e.recOper?e.countAcc+c.value:n[e.recOper](e.countAcc,c.value),recOper:"*"};case"subtract":return{countAcc:""===e.recOper?e.countAcc+c.value:n[e.recOper](e.countAcc,c.value),recOper:"-"};case"add":return{countAcc:""===e.recOper?e.countAcc+c.value:n[e.recOper](e.countAcc,c.value),recOper:"+"};case"equals":return{countAcc:n[e.recOper](e.countAcc,c.value),recOper:""};case"erase":return l;default:return e}};var d=function(){var e=Object(t.useState)(""),c=Object(a.a)(e,2),n=c[0],r=c[1],u=Object(t.useState)("0"),i=Object(a.a)(u,2),d=i[0],b=i[1],p=Object(t.useState)(""),f=Object(a.a)(p,2),O=f[0],j=f[1],v=Object(t.useReducer)(s,l),m=Object(a.a)(v,2),h=m[0],x=m[1],A=function(e){var c=e.target.value,n=new RegExp(/^-?\d+\.?\d*$/),t="0"===d&&""===O&&"."===c?d+c:"0"===d&&""===O||"-"===c?c:d+c;if(n.test(t)||"-"===t)if(""===h.recOper&&""===O&&"0"===d)b(t),j(t);else if(""===h.recOper&&"0"===O&&"0"===d)b((function(e){return"."===c?e+c:e})),j((function(e){return"."===c?e+c:e}));else{if(h.countAcc.toString()===d&&"0"===O)return;b((function(e){return e+c})),j((function(e){return e+c}))}};Object(t.useEffect)((function(){""===h.recOper&&0===h.countAcc?(r((function(){return""})),C()):""===h.recOper&&""!==h.countAcc?(r((function(e){return e+"".concat(O,"=").concat(h.countAcc)})),b((function(){return"".concat(h.countAcc)})),j((function(){return"0"}))):""!==h.recOper&&"0"===O?(r("".concat(h.countAcc).concat(h.recOper)),b((function(){return""})),j((function(){return""}))):(r((function(e){return e+"".concat(O).concat(h.recOper)})),b((function(){return""})),j((function(){return""})))}),[h]),Object(t.useEffect)((function(){y()}),[n]);var y=function(){r(n.replace(/[-/*+]\+/,"+").replace(/[-+*/]\//,"/").replace(/[-/+*]\*/,"*").replace("--","+").replace("+-","-"))},C=function(){b((function(){return"0"})),j((function(){return""}))},N=function(){return"-"===h.recOper||"+"===h.recOper?0:1};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsx)("div",{className:"display display-main span-4",children:n}),Object(o.jsx)("div",{className:"display display-second span-4",id:"display",children:d}),Object(o.jsx)("button",{className:"function clear span-2",id:"clear",onClick:n?function(){return x({type:"erase"})}:C,children:"AC"}),Object(o.jsx)("button",{className:"function",id:"divide",onClick:""===O||"-"===O?function(){return x({type:"divide",value:N()})}:function(){return x({type:"divide",value:"0"===O?0:+d})},children:"/"}),Object(o.jsx)("button",{className:"function",id:"multiply",onClick:""===O||"-"===O?function(){return x({type:"multiply",value:N()})}:function(){return x({type:"multiply",value:"0"===O?0:+d})},children:"X"}),Object(o.jsx)("button",{className:"numbers",id:"seven",value:"7",onClick:A,children:"7"}),Object(o.jsx)("button",{className:"numbers",id:"eight",value:"8",onClick:A,children:"8"}),Object(o.jsx)("button",{className:"numbers",id:"nine",value:"9",onClick:A,children:"9"}),Object(o.jsx)("button",{className:"function",id:"subtract",value:"-",onClick:"-"===h.recOper&&"-"===O?"":""===O?A:"-"===O?function(){return x({type:"subtract",value:N()})}:function(){return x({type:"subtract",value:"0"===O?0:+d})},children:"-"}),Object(o.jsx)("button",{className:"numbers",id:"four",value:"4",onClick:A,children:"4"}),Object(o.jsx)("button",{className:"numbers five",id:"five",value:"5",onClick:A,children:"5"}),Object(o.jsx)("button",{className:"numbers six",id:"six",value:"6",onClick:A,children:"6"}),Object(o.jsx)("button",{className:"function add",id:"add",onClick:""===O||"-"===O?function(){return x({type:"add",value:N()})}:function(){return x({type:"add",value:"0"===O?0:+d})},children:"+"}),Object(o.jsx)("button",{className:"numbers one",id:"one",value:"1",onClick:A,children:"1"}),Object(o.jsx)("button",{className:"numbers two",id:"two",value:"2",onClick:A,children:"2"}),Object(o.jsx)("button",{className:"numbers three",id:"three",value:"3",onClick:A,children:"3"}),Object(o.jsx)("button",{className:"function equal span-2v",id:"equals",value:"=",onClick:function(){return h.recOper&&x({type:"equals",value:+d})},children:"="}),Object(o.jsx)("button",{className:"numbers zero span-2",id:"zero",value:"0",onClick:A,children:"0"}),Object(o.jsx)("button",{className:"numbers decimal",id:"decimal",value:".",onClick:A,children:"."})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,u=c.getLCP,i=c.getTTFB;n(e),t(e),r(e),u(e),i(e)}))};i.a.render(Object(o.jsxs)(r.a.StrictMode,{children:[Object(o.jsx)(d,{}),","]}),document.getElementById("root")),b()},9:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e8e4d33c.chunk.js.map