(this.webpackJsonpzoom=this.webpackJsonpzoom||[]).push([[0],{126:function(t,e,n){"use strict";(function(t){n(139);var o=n(27),c=n(0),a=n(129),s=n.n(a),i=n(9),r=n(163);var u="XykCKrLwTey3_WSCiW96ag",m="";e.a=function(e){var n=e.location,a=(e.match,s.a.parse(n.search));(function(e,n,o,c){return new Promise((function(a,s){var i=(new Date).getTime()-3e4,u=t.from(e+o+i+c).toString("base64"),m=r.createHmac("sha256",n).update(u).digest("base64");return a(t.from("".concat(e,".").concat(o,".").concat(i,".").concat(c,".").concat(m)).toString("base64"))}))})(u,"dhBozo3a4lFanaBbxXBOcSNYylqh8BdvMtkP",a.meetingNumber,0).then((function(t){m=t})),Object(c.useEffect)((function(){l(),o.ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.5/lib","/av"),o.ZoomMtg.preLoadWasm(),o.ZoomMtg.prepareJssdk(),f()}),[]);var l=function(){document.getElementById("zmmtg-root").style.display="block"},f=function(){o.ZoomMtg.init({leaveUrl:"http://localhost:3000",isSupportAV:!0,success:function(t){console.log(t),o.ZoomMtg.join({signature:m,userName:"WebSDK",apiKey:u,userEmail:"com@globalcomms.co.kr",meetingNumber:a.meetingNumber,passWord:a.passWord,success:function(t){console.log(t)},error:function(t){console.log(t)}})},error:function(t){console.log(t)}})};return Object(i.jsx)("div",{className:"App",children:"Zoom"})}}).call(this,n(6).Buffer)},135:function(t,e,n){},139:function(t,e,n){},165:function(t,e){},167:function(t,e){},177:function(t,e){},179:function(t,e){},206:function(t,e){},207:function(t,e){},212:function(t,e){},214:function(t,e){},221:function(t,e){},240:function(t,e){},261:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(125),s=n.n(a),i=(n(135),n(41)),r=n.p+"static/media/logo.6ce24c58.svg",u=(n(69),n(9));var m=function(t){var e=Object(o.useState)(!1),n=Object(i.a)(e,2);return n[0],n[1],Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"\ud68c\uc758\uac00 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]})})},l=n(126),f=n(3);var b=function(){var t=Object(o.useState)(!1),e=Object(i.a)(t,2);return e[0],e[1],Object(u.jsxs)("div",{children:[Object(u.jsx)(f.a,{path:"/",component:m}),Object(u.jsx)(f.a,{path:"/room/:roomId?",component:l.a})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),a(t),s(t)}))},p=n(65);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p.a,{basename:"/zoom-k",children:Object(u.jsx)(b,{})})}),document.getElementById("root")),g()},69:function(t,e,n){}},[[261,1,2]]]);
//# sourceMappingURL=main.1c6a6a11.chunk.js.map