(this.webpackJsonpMyAppReact=this.webpackJsonpMyAppReact||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n(131),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5d175713-4917-4275-a86b-fff09cb4878d"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e.id))},unfollow:function(e){return r.delete("follow/".concat(e.id))},getProfile:function(e){return o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(39),r=n(8),i={dialogs:[{id:1,name:"Maksimka"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"What's up men?"},{id:2,message:"How is your React?"},{id:3,message:"I'm a boss...!"},{id:4,message:"[\u0305\u0332L\u0305\u0332][\u0305\u0332o\u0305\u0332][\u0305\u0332v\u0305\u0332][\u0305\u0332e\u0305\u0332]\u266a \u266b \u266c\u2581\u2582\u2583\u2584 |\u0332\u0305\u0305\u25cf\u0332\u0305\u0305|\u0332\u0305\u0305=\u0332\u0305\u0305|\u0305\u25cf\u0332\u0305\u0305| \u2584\u2583\u2582\u2581\u266c \u266b \u266a[\u0305\u0332M\u0305\u0332][\u0305\u0332u\u0305\u0332][\u0305\u0332s\u0305\u0332][\u0305\u0332i\u0305\u0332][\u0305\u0332c\u0305\u0332]"},{id:5,message:"I'm easy!"},{id:6,message:"Never look back!"},{id:7,message:"Strive for greatness...!"},{id:8,message:"You are your only limit"}]},o=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__5C-wI",item:"Navbar_item__2cjN1",activeLink:"Navbar_activeLink__2AhMC"}},130:function(e,t,n){e.exports=n.p+"static/media/preloader.8e72d903.svg"},133:function(e,t,n){e.exports={userPhoto:"users_userPhoto__NmT98",selectedPage:"users_selectedPage__1ofd2"}},134:function(e,t,n){e.exports=n.p+"static/media/user.02bee6ca.png"},163:function(e,t,n){e.exports=n(292)},168:function(e,t,n){},169:function(e,t,n){},193:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(61),o=n.n(i),s=(n(168),n(26)),c=n(27),u=n(29),l=n(28),m=n(30),d=(n(169),n(13)),f=n.n(d),g=n(12),p=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.active)},r.a.createElement(g.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/users",activeClassName:f.a.activeLink},"Users")),r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"settings",activeClassName:f.a.activeLink},"Settings")))},h=n(33),E=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null," React JS news ...."))},v=n(14),b=n(62),w=n(9),P=n.n(w),_=n(39),O=n(8),S=n(11),y=function(e,t,n,a){e.map((function(e){return e[n]===t?Object(O.a)({},e,{},a):e}))},C={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},j=function(e){return{type:"FOLLOW",userId:e}},k=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},N=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(e,t,n,a){return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e(I(!0,t)),n.next=3,P.a.awrap(S.c.follow(t));case 3:0==n.sent.data.resultCode&&e(j(t)),e.toggleFollowingProgress(!1,t);case 6:case"end":return n.stop()}}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)({},e,{users:y(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)({},e,{users:y(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(O.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(O.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},U=n(7),x=n(51),A=n(66),M=n(126),F=n(69),R=n.n(F),z=n(132),G=n.n(z),D=function(e){for(var t=e.totalItemsCount,n=e.pageSize,i=e.currentPage,o=e.onPageChanged,s=e.portionSize,c=void 0===s?10:s,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var d=Math.ceil(u/c),f=Object(a.useState)(1),g=Object(M.a)(f,2),p=g[0],h=g[1],E=(p-1)*c+1,v=p*c;return r.a.createElement("div",{className:R.a.pagination},p>1&&r.a.createElement("button",{onClick:function(){h(p-1)}},"PREV"),l.filter((function(e){return function(e){return E&&e<=v}})).map((function(e){return r.a.createElement("span",{className:G()(Object(A.a)({},R.a.selectedPage,i===e),R.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),d>p&&r.a.createElement("button",{onClick:function(){h(p+1)}},"NEXT"))},W=n(133),B=n.n(W),H=n(134),V=n.n(H),J=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,i=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(g.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:V.a,className:B.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e==t.id})),onClick:function(){i(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status),r.a.createElement("div",null,t.location)),r.a.createElement("span",null,r.a.createElement("div",null,"u.lookingForAJob"),r.a.createElement("div",null,"u.location.city"))))},X=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,i=e.pageSize,o=e.users,s=Object(x.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return r.a.createElement("div",null,r.a.createElement(D,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:i}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(J,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow,key:e.id})}))))},Y=n(135),q=Object(Y.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Q=function(e){return e.usersPage.pageSize},Z=function(e){return e.usersPage.totalUsersCount},K=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.isFetching},ee=function(e){return e.usersPage.followingInProgress},te=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(b.a,null):null,r.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),ne=Object(U.d)(Object(v.b)((function(e){return{users:q(e),pageSize:Q(e),totalUsersCount:Z(e),currentPage:K(e),isFetching:$(e),followingInProgress:ee(e)}}),{follow:function(e){return function(t){return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:S.c.follow.bind(S.c),T(t,e);case 2:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:S.c.unfollow.bind(S.c),T(t,e);case 2:case"end":return n.stop()}}))}},setCurrentPage:k,toggleFollowingProgress:I,getUsers:function(e,t){return function(n){var a;return P.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(N(!0)),n(k(e)),r.next=4,P.a.awrap(S.c.getUsers(e,t));case 4:a=r.sent,n(N(!1)),n({type:"SET_USERS",users:a.items}),n({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return r.stop()}}))}}}))(te);var ae=function(e){var t=e.isMusicPlaying?"play active":"play";return r.a.createElement("a",{onClick:e.onClick,href:"#",title:"Play audio",className:t})},re=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isMusicPlaying:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.state.isMusicPlaying?this.audio.pause():this.audio.play(),this.setState((function(e){return{isMusicPlaying:!e.isMusicPlaying}}))}},{key:"render",value:function(){var e=this,t=this.state.isMusicPlaying?"Playing :)":"Not playing :(";return r.a.createElement("div",null,r.a.createElement(ae,{onClick:this.handleClick.bind(this),isMusicPlaying:this.state.isMusicPlaying}),r.a.createElement("audio",{id:"audio",ref:function(t){e.audio=t}}),r.a.createElement("br",null),r.a.createElement("h1",null,t),r.a.createElement("br",null),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"hook"}),r.a.createElement("h1",null,"Play Music"),r.a.createElement("input",{type:"file",id:"files",name:"files[]",multiple:!0})))}}]),t}(r.a.Component),ie=(n(193),function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is a music songs..."),r.a.createElement(re,null))}),oe=n(89),se=n.n(oe),ce=function(e){return r.a.createElement("header",{className:se.a.header},r.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:se.a.loginBlock},e.isAuth?r.a.createElement("h2",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(g.b,{to:"/login"},"Login")))},ue=n(36),le={userId:null,email:null,login:null,isAuth:!1},me=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},de=function(){return function(e){var t,n,a,r,i;return P.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,P.a.awrap(S.a.me());case 2:0===(t=o.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.login,i=n.email,e(me(a,i,r,!0)));case 4:case"end":return o.stop()}}))}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(O.a)({},e,{},t.payload);default:return e}},ge=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),t}(r.a.Component),pe=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.awrap(S.a.logout());case 2:0===t.sent.data.resultCode&&e(me(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(ge),he=n(124),Ee=n(125),ve=n(63),be=n(52),we=n(48),Pe=n.n(we),_e=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(he.a,{placeholder:"Email",name:"email",component:ve.a,validate:[be.b]})),r.a.createElement("div",null,r.a.createElement(he.a,{placeholder:"Password",name:"password",type:"password",component:ve.a,validate:[be.b]})),r.a.createElement("div",null,r.a.createElement(he.a,{type:"checkbox",name:"rememberMe",component:ve.a}),"remember me"),n&&r.a.createElement("div",{className:Pe.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null," Login ")))})),Oe=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,i;return P.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,P.a.awrap(S.a.login(e,t,n));case 2:0===(r=o.sent).data.resultCode?a(de()):(i=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(ue.a)("login",{_error:i})));case 4:case"end":return o.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(h.a,{to:"/profile/5236"}):r.a.createElement("div",null,r.a.createElement("h1",null,"You need registration or authorization!"),r.a.createElement("br",null),r.a.createElement(_e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Se={initialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(O.a)({},e,{initialized:!0});default:return e}},Ce=n(92),je=n(123),ke={},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return e},Ie=n(137),Te=n(127),Le=Object(U.c)({profilePage:Ce.b,dialogsPage:je.a,sidebar:Ne,usersPage:L,auth:fe,form:Te.a,app:ye}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,xe=Object(U.e)(Le,Ue(Object(U.a)(Ie.a)));window.__store__=xe;var Ae=xe,Me=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Fe=r.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Re=r.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),ze=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(pe,null),r.a.createElement(p,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.b,{path:"/dialogs",render:Me(Fe)}),r.a.createElement(h.b,{path:"/profile/:userId?",render:Me(Re)}),r.a.createElement(h.b,{path:"/news",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(h.b,{path:"/music",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(h.b,{path:"/settings",render:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Change configuration here!"))}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(Oe,null)}}))):r.a.createElement(b.a,null)}}]),t}(r.a.Component),Ge=Object(U.d)(h.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ze),De=function(e){return r.a.createElement(g.a,null,r.a.createElement(v.a,{store:Ae},r.a.createElement(Ge,null)))},We=document.createElement("h1");We.innerHTML="This is a social network for dizainers!",document.querySelector("body").appendChild(We),o.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__CagPa",error:"FormsControls_error__163uL",formSummaryError:"FormsControls_formSummaryError__ESHTc"}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},62:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(130),o=n.n(i);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"lightslategrey"}},r.a.createElement("img",{src:o.a}))}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(51),r=n(0),i=n.n(r),o=n(48),s=n.n(o),c=(n(52),function(e){e.input;var t=e.meta,n=e.children,a=t.touched&&t.error;return i.a.createElement("div",{className:s.a.formControl+" "+(a?s.a.error:"")},i.a.createElement("div",null,n),a&&i.a.createElement("span",null,t.error))}),u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(c,e,i.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(c,e,i.a.createElement("input",Object.assign({},t,n)))}},69:function(e,t,n){e.exports={userPhoto:"Pagination_userPhoto__EFQSu",pagination:"Pagination_pagination__3FvWy",pageNumber:"Pagination_pageNumber__Cybs4",selectedPage:"Pagination_selectedPage__RNFgo"}},89:function(e,t,n){e.exports={header:"Header_header__QzVnM",loginBlock:"Header_loginBlock__1E31-"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return f}));var a=n(9),r=n.n(a),i=n(39),o=n(8),s=n(11),c={posts:[{id:1,message:"Never regret anything that made you smile",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Imagination rules the world!",likesCount:21},{id:4,message:"Remember that the most dangerous prison is the one in your head.",likesCount:11},{id:5,message:"Do something with passion or not it all",likesCount:4}],profile:null,status:""},u=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(s.c.getProfile(e));case 2:n=a.sent,t({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},d=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(s.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}}))}},f=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(s.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(o.a)({},e,{post:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.12d540cd.chunk.js.map