(this.webpackJsonpzoom=this.webpackJsonpzoom||[]).push([[0],{126:function(e,t,n){"use strict";(function(e){n(139);var o=n(27),c=n(0),i=n(129),s=n.n(i),a=n(9),r=n(163);var u="NAB_DGqhQlSfkCWp6UlvEg",m="";t.a=function(t){var n=t.location,i=(t.match,s.a.parse(n.search));console.log(i.meetingNumber),console.log(i.pwd),function(t,n,o,c){return new Promise((function(i,s){var a=(new Date).getTime()-3e4,u=e.from(t+o+a+c).toString("base64"),m=r.createHmac("sha256",n).update(u).digest("base64");return i(e.from("".concat(t,".").concat(o,".").concat(a,".").concat(c,".").concat(m)).toString("base64"))}))}(u,"V7vjAfl2QvpIbX0wp52oqCjO86tHOgjughbp",i.meetingNumber,0).then((function(e){m=e})),Object(c.useEffect)((function(){l(),o.ZoomMtg.setZoomJSLib("node_modules/@zoomus/websdk/dist/lib","/av"),o.ZoomMtg.preLoadWasm(),o.ZoomMtg.prepareJssdk(),f()}),[]);var l=function(){document.getElementById("zmmtg-root").style.display="block"},f=function(){o.ZoomMtg.init({leaveUrl:"https://gustmdwns.github.io/zoom-k/",isSupportAV:!0,success:function(e){console.log(e),o.ZoomMtg.join({signature:m,userName:"WebSDK",apiKey:u,userEmail:"photonicskorea@naver.com",meetingNumber:i.meetingNumber,passWord:i.pwd,success:function(e){console.log(e)},error:function(e){console.log(e)}})},error:function(e){console.log(e)}})};return Object(a.jsx)("div",{className:"App",children:"Zoom"})}}).call(this,n(6).Buffer)},135:function(e,t,n){},139:function(e,t,n){},165:function(e,t){},167:function(e,t){},177:function(e,t){},179:function(e,t){},206:function(e,t){},207:function(e,t){},212:function(e,t){},214:function(e,t){},221:function(e,t){},240:function(e,t){},261:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(125),s=n.n(i),a=(n(135),n(41)),r=(n.p,n(69),n(9));var u=function(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2);return n[0],n[1],Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("p",{children:"\ud68c\uc758\uac00 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})})},m=n(126),l=n(3);var f=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2);return t[0],t[1],Object(r.jsx)("div",{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/:roomId?",component:m.a}),Object(r.jsx)(l.a,{exact:!0,path:"/join",component:u})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),i(e),s(e)}))},p=n(65);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p.a,{basename:"/zoom-k",children:Object(r.jsx)(f,{})})}),document.getElementById("root")),b()},69:function(e,t,n){}},[[261,1,2]]]);
//# sourceMappingURL=main.8835551c.chunk.js.map