(this.webpackJsonpMyAppReact=this.webpackJsonpMyAppReact||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3vH3E",photo:"ProfileInfo_photo__CQ08U"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__7XXyt",posts:"MyPosts_posts__3W5NG"}},296:function(e,t,a){e.exports={item:"Post_item__SMlIc"}},297:function(e,t,a){"use strict";a.r(t);var s=a(26),n=a(27),o=a(29),r=a(28),i=a(30),l=a(0),c=a.n(l),u=a(294),p=a.n(u),m=a(62),f=(a(126),function(e){return e.profile?5625===e.profile.userId?c.a.createElement("div",null,c.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/770122/200f9305-aa1c-442b-af09-227346adaedf/s1200",className:p.a.photo})):c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:e.profile.photos.large}))):c.a.createElement(m.a,null)}),d=a(92),h=a(39),b=a(295),E=a.n(b),v=a(296),g=a.n(v),P=function(e){return c.a.createElement("div",{className:g.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},k=a(124),_=a(125),j=a(52),O=a(63),y=c.a.memo((function(e){var t=Object(h.a)(e.posts).reverse().map((function(e){return c.a.createElement(P,{message:e.message,likesCount:e.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:E.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:E.a.posts},t))})),S=Object(j.a)(10),w=Object(_.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(k.a,{name:"newPostText",component:O.b,placeholder:"Post message",validate:[j.b,S]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),x=y,I=a(14),M=Object(I.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(d.a)(t))}}}))(x),N=function(e){return c.a.createElement("div",null,c.a.createElement(f,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(M,null))},A=a(33),B=a(7),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),setTimeout((function(){e.props.getStatus(t)}),1e3)}},{key:"render",value:function(){return c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(c.a.Component);t.default=Object(B.d)(Object(I.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:d.d,getStatus:d.c,updateStatus:d.e}),A.f)(C)}}]);
//# sourceMappingURL=3.45892b08.chunk.js.map