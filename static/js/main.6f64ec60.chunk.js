(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(5),r=n.n(o),i=(n(11),n(4)),u=n.n(i),s=n(6),p=n(2),f=(n(13),n(1));var d=function(){var t=Object(c.useState)([]),e=Object(p.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)([]),r=Object(p.a)(o,2),i=r[0],d=r[1],h=Object(c.useState)([]),b=Object(p.a)(h,2),j=(b[0],b[1]);return Object(c.useEffect)((function(){(function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.geolocation.getCurrentPosition((function(t){a(t.coords.latitude),d(t.coords.longitude)})),t.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(n,"&lon=").concat(i,"$units=metric&APPID=").concat("e64c18c45dd0eeaed6c5cb4a9d9a509e")).then((function(t){return t.json()})).then((function(t){j(t),console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[n,i]),Object(f.jsx)("div",{className:"App"})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};n(15);r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.6f64ec60.chunk.js.map