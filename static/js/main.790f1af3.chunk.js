(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="GET_NEWS"},46:function(e,t,n){"use strict";n.d(t,"a",function(){return a});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},53:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(13),o=n(12),i=n(14),l=n(0),u=n.n(l),s=n(16),m=n(25),h=n(49),p=n.n(h),d=("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),"http://private-2063bf-chungvu.apiary-mock.com");var v=function(){return function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p()({method:t,url:"".concat(d,"/").concat(e),data:n,headers:{access_token:localStorage.getItem("access_token"),"content-type":a?"multipart/form-data":"application/json;charset=UTF-8"}}).then(function(e){return e.data})}("news","GET").then(function(t){e(f(t))})}},f=function(e){return{type:m.a,dataNews:e}},b=n(26),O=n(95),E=n(96),w=n(22),j=n.n(w);n(40);var g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews()}},{key:"render",value:function(){var e=this.props.dataReducer.news;return u.a.createElement("div",{className:"views_home"},u.a.createElement(O.a,null,e.data&&e.data.length>0&&e.data.map(function(e,t){return u.a.createElement(E.a,{md:"4",xs:"12",key:t},u.a.createElement("div",{style:{backgroundColor:"gray",color:"white",padding:"10px",border:"black solid 1px",marginBottom:"10px"}},u.a.createElement("p",null,"T\xean:",e.name),u.a.createElement("p",null,"V\u1ecb tr\xed:",e.position),u.a.createElement("p",null,"C\u1ed5 Ph\u1ea7n:",e.shares),u.a.createElement("p",null,"Ng\xe0y T\u1ea1o:",(n=e.created_at,j()(n).format("L")))));var n})))}}]),t}(l.Component),y=[{path:"{process.env.PUBLIC_URL + '/'home}",name:"Feature",component:Object(b.b)(function(e){return{dataReducer:e.newsReducer}},function(e){return{getNews:function(){e(v())}}})(g)},{path:"{process.env.PUBLIC_URL + '/'contact}",name:"Contact",component:function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"Contact")}}]),t}(l.Component)},{path:"{process.env.PUBLIC_URL + '/'about-us}",name:"About Us",component:function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"About Us")}}]),t}(l.Component)},{redirect:!0,path:"/",pathTo:"{process.env.PUBLIC_URL + '/home'}",name:"Home"}],k=n(21),C=n(97),_=n(98),N=n(99),U=n(102),T=n(100),L=n(101),R=n(19),A=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).toggle=n.toggle.bind(Object(k.a)(Object(k.a)(n))),n.state={isOpen:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(C.a,{color:"light",light:!0,expand:"md"},u.a.createElement(_.a,{href:"/"},"REACT - THUNK"),u.a.createElement(N.a,{onClick:this.toggle}),u.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},u.a.createElement(T.a,{className:"ml-auto",navbar:!0},u.a.createElement(L.a,null,u.a.createElement(R.a,{className:"nav-link",to:"/home"},"HOME")),u.a.createElement(L.a,null,u.a.createElement(R.a,{className:"nav-link",to:"/contact"},"Contact")),u.a.createElement(L.a,null,u.a.createElement(R.a,{className:"nav-link",to:"/about-us"},"About Us"))))))}}]),t}(l.Component),B=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props;return u.a.createElement("div",null,u.a.createElement(A,e),u.a.createElement(s.d,null,y.map(function(e,t){return e.redirect?u.a.createElement(s.a,{from:e.path,to:e.pathTo,key:t}):u.a.createElement(s.b,{path:e.path,component:e.component,key:t})})))}}]),t}(l.Component);t.a=B},54:function(e,t,n){"use strict";var a=n(17),r=n(33),c=n(25),o={news:[]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return e=Object(r.a)({},e,{news:t.dataNews});default:return Object(r.a)({},e)}},l=Object(a.c)({newsReducer:i});t.a=l},56:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(18),c=n.n(r),o=n(46),i=n(26),l=n(16),u=n(54),s=n(17),m=n(48),h=(n(66),n(67),n(6)),p=n(53);n(40);var d=n(45);e.jQuery=n(45),window.$=d;var v=Object(h.a)(),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,b=Object(s.e)(u.a,f(Object(s.a)(m.a)));c.a.render(a.a.createElement(i.a,{store:b},a.a.createElement(l.c,{history:v},a.a.createElement(p.a,{history:v}))),document.getElementById("root")),o.a()}.call(this,n(23))},66:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.790f1af3.chunk.js.map