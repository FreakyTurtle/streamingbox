(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var i,a=n(0),c=n.n(a),r=n(30),o=n.n(r),s=(n(105),n(13)),l=n(5),p=n(180),d=n(181),m=n(178),u=n(182),h=n(183),b=n(166),j=n(184),g=n(185),v=n(186),f=n(187),x=n(188),O=n(163),w=n(171),y=n.p+"static/media/sling.d927620e.png",k=n.p+"static/media/peacock.89da9276.png",C=n.p+"static/media/nbcsports.08a4cd0f.png",S=n.p+"static/media/netflix.4a9d8652.png",T=n.p+"static/media/btsport.7aaf3422.png",B=n.p+"static/media/iplayer.d73ab700.png",D=n.p+"static/media/itv.56933a2c.png",F=n.p+"static/media/channel4.2e7fac8a.png",V=n.p+"static/media/disneyplus.15bc10cb.png",z=n.p+"static/media/primevideo.18f10de5.png",I=n.p+"static/media/appletvplus.7e480da0.png",P=n.p+"static/media/discovery.9ab9de91.png",L=n.p+"static/media/youtube.55199598.png",W=n.p+"static/media/zoom.74e7e684.png";!function(e){e.sport="Sport",e.entertainment="Entertainment",e.movies="Movies",e.casual="Casual",e.documentaries="Documentaries",e.livetv="Live TV",e.american="American TV",e.british="British TV"}(i||(i={}));var N=[{name:"Zoom",link:"https://us02web.zoom.us/join",logo:W,categories:[i.livetv,i.sport,i.casual]},{name:"Sling TV",logo:y,link:"https://watch.sling.com/browse/my-tv",categories:[i.livetv,i.sport,i.entertainment,i.american]},{name:"NBC Peacock",logo:k,link:"https://peacocktv.com",categories:[i.livetv,i.sport,i.entertainment,i.movies,i.american]},{name:"NBC Sports",logo:C,link:"https://www.nbcsports.com/live",categories:[i.livetv,i.sport,i.american]},{name:"Netflix",logo:S,link:"https://netflix.com",categories:[i.movies,i.entertainment,i.documentaries,i.british]},{name:"BT Sport",logo:T,link:"https://www.bt.com/sport/watch",categories:[i.livetv,i.sport,i.british]},{name:"BBC iPlayer",logo:B,link:"https://bbc.co.uk/iplayer",categories:[i.british,i.documentaries,i.livetv,i.entertainment]},{name:"ITV",logo:D,link:"https://itv.com",categories:[i.british,i.livetv,i.entertainment]},{name:"Channel 4",logo:F,link:"https://www.channel4.com/",categories:[i.british,i.entertainment]},{name:"Disney +",logo:V,link:"https://www.disneyplus.com/",categories:[i.british,i.movies,i.documentaries,i.entertainment]},{name:"Amazon Prime Video",logo:z,link:"https://www.amazon.co.uk/Instant-Video/",categories:[i.british,i.movies,i.documentaries,i.entertainment]},{name:"Apple TV+",logo:I,link:"https://www.apple.com/uk/apple-tv-plus/",categories:[i.british,i.movies,i.entertainment]},{name:"Discovery +",logo:P,link:"https://www.discoveryplus.co.uk/",categories:[i.british,i.documentaries]},{name:"Youtube",logo:L,link:"https://youtube.com",categories:[i.british,i.casual,i.entertainment]}],R=n(66),A=n.n(R),M=n(85),U=n(154),E=n(173),J=n(175),G=n(176),H=n(177),Y=n(172),Z=n(179),q=n(48),K=n.n(q),Q=n(1),X=function(e){var t=e.Channel,n=e.delay,c=void 0===n?0:n,r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],p=o[1],d=function(){var e=Object(M.a)(A.a.mark((function e(){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),n=t.categories.includes(i.american)?"connect":"disconnect",e.next=4,K.a.get("http://localhost:8080/".concat(n));case 4:if(200!==e.sent.status){e.next=7;break}return e.abrupt("return",window.location.href=t.link);case 7:alert("There was an error, please contact support"),p(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(U.a,{in:!0,style:{transitionDelay:"".concat(c,"ms")},children:Object(Q.jsx)(w.a,{item:!0,xs:"auto",children:Object(Q.jsx)(E.a,{sx:{width:260},children:Object(Q.jsxs)(J.a,{onClick:function(){d()},children:[Object(Q.jsx)(G.a,{component:"img",height:260,src:t.logo,alt:t.name,sx:{objectFit:"contain",padding:4}}),Object(Q.jsx)(H.a,{children:Object(Q.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"div",children:t.name})})]})})})}),Object(Q.jsxs)(Y.a,{sx:{backgroundColor:function(e){return"".concat(e.palette.primary.main,"DB")},zIndex:function(e){return e.zIndex.drawer+1},flexDirection:"column"},open:l,children:[Object(Q.jsx)(Z.a,{color:"inherit"}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(m.a,{variant:"h4",sx:{fontWeight:800},children:["One moment. ",t.categories.includes(i.american)?"Connecting to":"Disconnecting from"," the Virtual Private Network"]})]})]})},$=function(e){var t=e.searchTerm;if(!t)return Object(Q.jsx)(w.a,{container:!0,spacing:2,children:Object.values(i).map((function(e){var t=N.filter((function(t){return t.categories.includes(e)}));return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(w.a,{item:!0,xs:12,sx:{borderBottom:1,borderColor:"secondary.main"},children:Object(Q.jsx)(m.a,{variant:"h5",children:e})}),t.map((function(e,t){return Object(Q.jsx)(X,{Channel:e,delay:100*t})}))]})}))});var n=N.filter((function(e){return!!e.name.toUpperCase().includes(t.toUpperCase())||!!e.categories.find((function(e){return e.toUpperCase().includes(t.toUpperCase())}))}));return Object(Q.jsx)(w.a,{container:!0,spacing:2,children:n.map((function(e,t){return Object(Q.jsx)(X,{Channel:e,delay:100*t})}))})},_=n(87),ee=n(7),te=n(156),ne=n(168),ie=n(89),ae=n.n(ie),ce=Object(l.a)("div")((function(e){var t=e.theme;return Object(ee.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(te.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(te.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),re=Object(l.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,2),color:t.palette.secondary.main,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),oe=Object(l.a)(ne.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(ee.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),se=function(e){return Object(Q.jsxs)(ce,{children:[Object(Q.jsx)(re,{children:Object(Q.jsx)(ae.a,{})}),Object(Q.jsx)(oe,Object(_.a)({placeholder:"Search\u2026",inputProps:{"aria-label":"search"}},e))]})},le=Object(l.a)("div")((function(e){return{color:e.theme.palette.secondary.main,fontSize:"0.8em",fontWeight:800,display:"inline-block",position:"relative",left:"-2px",top:"-18px"}})),pe=Object(l.a)("span")((function(e){return{color:e.theme.palette.primary.contrastText,fontStyle:"italic",fontSize:"1.3em",fontWeight:800}})),de=Object(l.a)("span")((function(e){return{color:e.theme.palette.text.primary,fontStyle:"italic",fontWeight:800}})),me=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(s.a)(c,2),o=r[0],l=r[1];return Object(Q.jsxs)("main",{children:[Object(Q.jsx)(p.a,{color:"primary",enableColorOnDark:!0,elevation:0,children:Object(Q.jsxs)(d.a,{children:[Object(Q.jsxs)(m.a,{variant:"h4",component:"div",sx:{flexGrow:1,letterSpacing:2},children:[Object(Q.jsx)(de,{children:"guest"}),Object(Q.jsx)(pe,{children:"tv"}),Object(Q.jsx)(le,{children:"+"})]}),Object(Q.jsx)(se,{value:n,onChange:function(e){var t=e.target;return i(t.value)}}),Object(Q.jsx)(u.a,{onClick:function(){return l(!0)},children:Object(Q.jsx)(O.a,{})})]})}),Object(Q.jsx)(h.a,{maxWidth:"lg",sx:{marginTop:18,marginBottom:18},children:Object(Q.jsx)($,{searchTerm:n})}),Object(Q.jsxs)(b.a,{open:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(Q.jsx)(j.a,{id:"alert-dialog-title",children:"Reboot Device"}),Object(Q.jsx)(g.a,{children:Object(Q.jsx)(v.a,{id:"alert-dialog-description",children:"Are you sure you would like to restart the device? Rebooting can take several minutes."})}),Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(x.a,{onClick:function(){return l(!1)},color:"secondary",children:"Cancel"}),Object(Q.jsx)(x.a,{onClick:function(){K.a.get("http://localhost:8080/reboot").then((function(e){return l(!1)}))},autoFocus:!0,children:"Restart"})]})]})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},he=n(170),be=n(90),je=n(165),ge=n(164),ve={palette:{mode:"dark",primary:{main:"#0a1929",contrastText:"#66b2ff"},secondary:{main:"#f50057"},background:{default:"#0a1929",paper:"#001e3c"},text:{primary:"#f3f6f9"}},typography:{fontFamily:"Nunito"},components:{MuiCssBaseline:{styleOverrides:{body:Object(ge.a)()}}}};o.a.render(Object(Q.jsx)(c.a.StrictMode,{children:Object(Q.jsxs)(he.a,{theme:Object(be.a)(ve),children:[Object(Q.jsx)(je.a,{}),Object(Q.jsx)("div",{style:{minWidth:"100%",minHeight:"100vh"},children:Object(Q.jsx)(me,{})})]})}),document.getElementById("root")),ue()}},[[132,1,2]]]);
//# sourceMappingURL=main.4903a1c3.chunk.js.map