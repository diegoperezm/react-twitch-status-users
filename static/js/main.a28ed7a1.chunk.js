(this["webpackJsonpreact-twitch-status-users"]=this["webpackJsonpreact-twitch-status-users"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=(a(34),a(12)),o=a.n(s),u=a(18),m=a(15),i=a(10),A=a(3),f=(a(36),a(37),a(25)),E=a(26),b=a(27),d=a(13),h=function(e){return e.isLoading?r.a.createElement("div",null,r.a.createElement("div",{className:"message"},r.a.createElement("h1",null,"Loading\xa0..."))):r.a.createElement(d.a,{variant:"pills",className:"mt-2 mb-2"},r.a.createElement(d.a.Item,null,r.a.createElement(i.b,{className:"links",exact:!0,to:"/",activeStyle:{color:"#fff",backgroundColor:"#007bff"}},"All")),r.a.createElement(d.a.Item,null,r.a.createElement(i.b,{className:"links",exact:!0,to:"/online",activeStyle:{color:"#fff",backgroundColor:"#007bff"}},"Online")),r.a.createElement(d.a.Item,null,r.a.createElement(i.b,{className:"links",exact:!0,to:"/offline",activeStyle:{color:"#fff",backgroundColor:"#007bff"}},"Offline")))},O=a(14),_=a(7),g=a(47);var v=function(e){var t=e.list,a=e.status,n=Object(_.formatUsersData)(t,a).filter((function(e){return"online"===e.status})).map((function(e){return r.a.createElement("tr",{key:Object(g.a)(),className:"table__tr  table__tr--".concat(e.status)},r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},r.a.createElement("img",{key:"".concat(e.name,"-img"),alt:"",src:e.logo,onError:function(e){void 0!==_.PLACEHOLDER&&(e.target.src=_.PLACEHOLDER)},className:"table__td__img"})),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.name),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.status),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.game))}));return r.a.createElement(r.a.Fragment,null,n)};var p=function(e){var t=e.list,a=e.status,n=Object(_.formatUsersData)(t,a).filter((function(e){return"offline"===e.status})).map((function(e){return r.a.createElement("tr",{key:Object(g.a)(),className:"table__tr  table__tr--".concat(e.status)},r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},r.a.createElement("img",{key:Object(g.a)(),alt:"",src:e.logo,onError:function(e){void 0!==_.PLACEHOLDER&&(e.target.src=_.PLACEHOLDER)},className:"table__td__img"})),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.name),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.status),r.a.createElement("td",{key:Object(g.a)(),className:"table__td"},e.game))}));return r.a.createElement(r.a.Fragment,null,n)},k=function(e){var t=e.isLoading,a=e.list,n=e.status;return t?null:r.a.createElement(O.a,{hover:!0,responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table__th"},r.a.createElement("th",null,"Logo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Game")),r.a.createElement(v,{list:a,status:n}),r.a.createElement(p,{list:a,status:n})))},N=function(e){var t=e.isLoading,a=e.list,n=e.status;return t?null:r.a.createElement(O.a,{hover:!0,responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table__th"},r.a.createElement("th",null,"Logo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Game")),r.a.createElement(v,{list:a,status:n})))},j=function(e){var t=e.isLoading,a=e.list,n=e.status;return t?null:r.a.createElement(O.a,{hover:!0,responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table__th"},r.a.createElement("th",null,"Logo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Game")),r.a.createElement(p,{list:a,status:n})))};var L=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),d=s[0],O=s[1],g=Object(n.useState)([]),v=Object(m.a)(g,2),p=v[0],L=v[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=_.USER_URL_ARR.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))})),Promise.all(t).then((function(e){return O(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=_.STREAM_URL_ARR.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))})),Promise.all(t).then((function(e){return L(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),l(!1)}),[]),r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{xs:12},r.a.createElement(h,{isLoading:a}),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/"},r.a.createElement(k,{isLoading:a,list:d,status:p})),r.a.createElement(A.a,{exact:!0,path:"/online"},r.a.createElement(N,{isLoading:a,list:d,status:p})),r.a.createElement(A.a,{exact:!0,path:"/offline"},r.a.createElement(j,{isLoading:a,list:d,status:p})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t){var a=["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"],n="https://wind-bow.glitch.me/twitch-api",r=a.map((function(e){return"".concat(n).concat("/users/").concat(e)})),l=a.map((function(e){return"".concat(n).concat("/streams/").concat(e)})),c="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEXMzMyWlpa3t7eqqqqcnJyj o6PFxcWxsbG+vr6NAD6nAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACjklEQVR4nO3XO2/bMBDA8fNT Gn2OlGS00S8QAWnnaKi7xnBQdJSBFl3joY/RRpHv3SNFykYtdKOm/w8BHOkOIM3HkRYBAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/uddvWvsI38sj+7xT/2lJ2n8WH64iMbkdCaqurTPteqd a98eX6+zKnu9OkdDckIH3W21kbmWlR5F9rrT+6ukTMv3ettFY3JC9UZyfZBJ0czrZxuWjXwtr5Km RSOnmy4ak9PJ3bc+PMveJvJ0a+OwslfNv1knG6Ks7KIhOaGxulYXsl7YmNy1j/XV4nLRXLtoSE4o czN2epLK5mRSuj/x/7tuPImfOfHDKXnRRUNyaq6l17bhu7aX/q1N1fY8Va7TIRqSE/tuS2a78i3N ludu7QsbsW4+54dlFw3JadVqM1Uf3b6XqSsO+4V/n+nrtGt7qrZdYzQkp6WuFLUtNW3DYebqzXoZ k0ZqWzZGQ3LqblmLvhFtRq5Ho9Ct9c25OI1c52M0JKftlrzpc+9ozfSilOfbctjRsv226FtbtuBv LpJmOuza8hW7Zyfa4lpeJFl5H24nZr/Fz4srReNQt9ahW5nGpn8d/azFaEhOyJ8hNi+HtnBn5yrv ClcsW+44slmL0UPyKj8Jh0/fmVjd12HxV+3hM+CZ6DZUFW4Q9+GOcPShuT6sw5o/3PovEKMhOaG5 frZBWPXdt2a2xkMV2JeNuNI62H1LqmJXF9J3O7XbQ65t4xP9+OguFMPdTr9Zkd9I313eLaxt28X5 VtUuqAPe5eVH/ckalPyl/THzFn/5jF0H9qEMZC/Fz4toTAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAEjpL514clJrNSt2AAAAAElFTkSuQmCC";t.formatUsersData=function(e,t){var a=t.filter((function(e){return null!=e.stream})).map((function(e){return e.stream.channel._id})),n=e.filter((function(e){return!a.includes(e._id)})).map((function(e){return Object.assign({},{name:e.display_name,logo:e.logo||c,id:e._id,status:"offline",game:""})}));return t.filter((function(e){return null!=e.stream})).map((function(e){return Object.assign({},{name:e.stream.channel.display_name,logo:e.stream.channel.logo||c,id:e.stream.channel._id,status:"online",game:e.stream.game})})).concat(n)},t.USER_URL_ARR=r,t.STREAM_URL_ARR=l,t.PLACEHOLDER=c}},[[29,1,2]]]);
//# sourceMappingURL=main.a28ed7a1.chunk.js.map