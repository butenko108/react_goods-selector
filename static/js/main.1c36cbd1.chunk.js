(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{54:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var o=c(39),a=c.n(o),n=c(40),r=c(41),s=c(42),i=c(45),l=c(0),d=(c(54),c(85)),j=c(43),h=c.n(j),p=c(87),u=c(88),b=c(83),m=c(84),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=c(3),x=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.chooseGood=function(t){e.setState({selectedGood:t})},e.removeGood=function(){e.setState({selectedGood:""})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("main",{className:"App",children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("header",{className:"App__header",children:[Object(v.jsx)("h1",{className:"App__title",children:t.length?"".concat(t," is selected"):"No goods selected"}),t&&Object(v.jsx)(p.a,{type:"button",className:"App__clear",onClick:this.removeGood,variant:"outlined",children:"Clear"})]})}),Object(v.jsx)(u.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:O.map((function(c){var o=t===c;return Object(v.jsxs)(b.a,{className:h()({"Good--active":o}),children:[Object(v.jsx)(m.a,{primary:c}),o?Object(v.jsx)(p.a,{type:"button",onClick:e.removeGood,variant:"outlined",children:"Remove"}):Object(v.jsx)(p.a,{type:"button",onClick:function(){return e.chooseGood(c)},variant:"outlined",children:"Select"})]},Object(d.a)())}))})]})})}}]),c}(l.Component);a.a.render(Object(v.jsx)(x,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.1c36cbd1.chunk.js.map