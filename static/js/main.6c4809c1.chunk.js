(this["webpackJsonpr6-coinflip"]=this["webpackJsonpr6-coinflip"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(30),o=n.n(c),a=n(87),d=(n(101),n(102),n(44)),s=n(128),l=n(132),j=n(131),u=n(129),b=n(112),h=n(33),g=n(130),f=(n(103),n.p+"static/media/banner.a5723d17.jpg"),O=n(74),p=function(e){var t=String(e).split(/[eE]/);if(1==t.length)return t[0];var n="",i=e<0?"-":"",r=t[0].replace(".",""),c=Number(t[1])+1;if(c<0){for(n=i+"0.";c++;)n+="0";return n+r.replace(/^\-/,"")}for(c-=r.length;c--;)n+="0";return r+n},x=function(e,t){return{top:1,bottom:(n=Math.round(100/t),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))};var n},m=function(e,t,n){return e>t&&e<n},v=n(4);var w=function(){var e,t=function(){var e=Object(i.useState)(window.innerWidth),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(window.innerHeight),o=Object(d.a)(c,2),a=o[0],s=o[1],l=function(){s(window.innerHeight),r(window.innerWidth)};return Object(i.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]),{windowWidth:n,windowHeight:a}}(),n=t.windowWidth,r=t.windowHeight,c=Object(i.useState)(3),o=Object(d.a)(c,2),a=o[0],w=o[1],y=Object(i.useState)(3),S=Object(d.a)(y,2),k=S[0],z=S[1],U=function(){for(var e=1,t=1;t<k/3+1;t++)e*=(100-3*t)/100;return e},H=[{name:"Odds \ud83c\udfb2",stat:Object(v.jsxs)(v.Fragment,{children:["~",Object(v.jsx)("sup",{children:"1"}),"\u2044",Object(v.jsx)("sub",{children:x(0,U()).bottom})]})},{name:"Rounds \ud83e\uddfe",stat:Object(v.jsxs)(v.Fragment,{children:["~",k/3," Games Played"]})},{name:"Score \ud83d\udcaf",stat:Object(v.jsxs)(v.Fragment,{children:['"',(e=k,m(e,2,13)?"Not Even Hard Silly \ud83c\udf46":m(e,13,23)?"Kinda Unlucky \ud83d\ude08":m(e,23,33)?"Bad Luck Kiddo \ud83d\udca9":m(e,33,43)?"Pretty Unlucky \ud83c\udf80":m(e,43,53)?"Super Unlucky \ud83d\udcb0":m(e,53,63)?"Ultra Unlucky \u2b50":m(e,63,73)?"Monster Unlucky \ud83c\udf1f":m(e,73,83)?"God-Like Unlucky \u2728":m(e,83,100)?"Stop lying to me and yourself \ud83c\udf20":void 0),'"']})}],C=r/2,E=C-C/4,W=n>400?n<992?n/22:50:18,B=W/2;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"banner",style:{resizeMode:"cover",backgroundImage:"url(".concat(f,")"),backgroundRepeat:"no-repeat",backgroundPosition:"bottom",backgroundSize:"cover",height:C,width:"100%",position:"absolute"}}),Object(v.jsx)(s.a,{style:{paddingTop:E,paddingRight:n>1200?"6%":"2%",paddingLeft:n>1200?"6%":"2%",marginBottom:0,paddingBottom:0},fluid:!0,children:Object(v.jsxs)(l.a,{padded:!0,inverted:!0,style:{backgroundImage:"linear-gradient(#1b1c1d, #212121)"},children:[Object(v.jsx)(j.a,{style:{fontSize:W},dividing:!0,inverted:!0,children:"Rainbow Six Seige Coin-flip Statistics \ud83e\uddee"}),Object(v.jsx)("div",{children:Object(v.jsx)(u.a,{action:Object(v.jsxs)(b.a,{onClick:function(){var e=parseInt(a),t=!1;e%3!==0&&((e+1)%3===0&&(e+=1,t=!0),(e-1)%3!==0||t||(e-=1,t=!0)),e>99&&(e=99),e<3&&(e=3),w(e),z(e)},positive:!0,icon:!0,labelPosition:"right",children:[Object(v.jsx)(h.a,{name:"sync"}),"Update"]}),size:"big",placeholder:"Current Spin Chance Percentage",fluid:!0,type:"number",min:3,max:99,value:a,onChange:function(e,t){w(t.value)}})}),Object(v.jsx)(g.a,{section:!0}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(j.a,{style:{fontSize:B},children:"Chance Of Getting This Far:"}),Object(v.jsx)("div",{style:{width:"100%",fontSize:W,lineHeight:1,overflow:"hidden",fontWeight:"bold"},children:Object(v.jsx)(O.a,{content:"~ "+p(100*U())+" %"})})]}),Object(v.jsx)(g.a,{hidden:!0}),Object(v.jsx)(l.a.Group,{horizontal:!0,children:H.map((function(e){return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(j.a,{textAlign:"center",style:{fontSize:W},children:e.name}),Object(v.jsx)("div",{style:{width:"100%",fontSize:B,lineHeight:2,overflow:"hidden",fontWeight:"bolder",textAlign:"center"},children:Object(v.jsx)(O.a,{content:e.stat})})]})}))})]})})]})},y=function(){return Object(v.jsx)(a.a,{children:Object(v.jsx)(w,{})})};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.6c4809c1.chunk.js.map