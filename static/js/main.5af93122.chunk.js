(this.webpackJsonpquizclient=this.webpackJsonpquizclient||[]).push([[0],{130:function(e,t){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(99),a(83)),l=a(29),u=a(135),m=a(81),s=r.a.createContext({current:0,total:0,quizData:{name:""}}),E=a(176);function d(e){var t=e.timer,a=100-Math.floor(t.current/t.total*100),n="inherit";return t.total-t.current<10&&(n="secondary"),r.a.createElement(E.a,{size:30,variant:"static",value:a,color:n})}var v=Object(m.a)({root:{width:"100%",textAlign:"center",paddingLeft:30},timer:{float:"right"}});function f(e){var t=0,a=0,c=Object(n.useContext)(s),o=c.questionData,i=c.timer,l=c.quizData,m=v();return o&&(t=o.total,a=o.current),r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:m.timer},r.a.createElement("div",{className:m.button},r.a.createElement(d,{timer:i}))),r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},l.name," ",a?r.a.createElement("span",null,"[",a," / ",t,"]"):""))}var b=a(136),p=a(180),O=a(12),N=a(11),g=a(82),j=a.n(g),h=Object({NODE_ENV:"production",PUBLIC_URL:""}).HOST||"https://app.master-7rqtwti-xzpc4qbs5kuvs.eu-2.platformsh.site/",I=j()(h),q=function(e,t){!function(e){var t=e.setValue;I.on("QUESTION-DETAILS",(function(e){t((function(t){return Object(N.a)({},t,{questionData:e})}))})),I.on("QUESTION-TIMER-START",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-UPDATE",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-STOP",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUIZ-JOINED",(function(e){t((function(t){return Object(N.a)({},t,{quizData:e})}))}))}({setValue:e.setValue}),function(e){I.emit("QUIZ-JOIN-PROJECTOR",e)}(t)},z=function(e){var t=e.quizId,a=Object(n.useState)({current:1,total:1,timer:{total:60,current:0},quizData:{name:""}}),c=Object(O.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){return q({setValue:i},t)}),[t]),r.a.createElement(s.Provider,{value:o},e.children)},T=Object(m.a)({root:{width:"100%",marginTop:25,textAlign:"center"}});function x(e){var t=T(),a=window.location.protocol,n=window.location.host;return r.a.createElement("div",{className:t.root},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},"Join this Quiz:",r.a.createElement("br",null),r.a.createElement("br",null),a,"//",n,"/play/",e.quizId,"/"))}var C=Object(m.a)({root:{width:"100%",marginTop:25}});function w(e){var t=Object(n.useContext)(s).questionData,a=C();return t&&t.current?r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},t.question)):r.a.createElement(x,{quizId:e.quizId})}var S=Object(m.a)({root:{width:"100%",marginTop:25},list:{marginBottom:30}});function k(e){var t=Object(n.useContext)(s).questionData,a=S();if(t&&t.current){var c=Object.keys(t.answers).map((function(e){return r.a.createElement("li",{key:e,className:a.list},t.answers[e].value)}));return r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},r.a.createElement("ol",{type:"A"},c)))}return""}var U=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.backgroundColor},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function y(e){var t=e.match.params.quizId,a=U();return r.a.createElement(z,{quizId:t},r.a.createElement("div",{className:a.root},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:10},r.a.createElement(b.a,{className:a.paper},r.a.createElement(f,{quizId:t}))),r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:10},r.a.createElement(b.a,{className:a.paper},r.a.createElement(w,{quizId:t})),r.a.createElement(b.a,{className:a.paper},r.a.createElement(k,null))),r.a.createElement(p.a,{item:!0,xs:1}))))}var D=r.a.createContext({selectedAnswer:-1,current:0,total:0,timer:{},quizData:{name:""}}),A=function(e){I.emit("QUIZ-CHANGE-USERNAME",e)},Q=function(e){I.emit("QUESTION-ANSWER",e)},B=function(e,t,a){!function(e){var t=e.setValue;I.on("QUESTION-DETAILS",(function(e){console.log(e),t((function(t){return Object(N.a)({},t,{questionData:e})}))})),I.on("QUESTION-TIMER-START",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-UPDATE",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-STOP",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUIZ-JOINED",(function(e){t((function(t){return Object(N.a)({},t,{quizData:e})}))}))}({setValue:e.setValue}),function(e,t){e&&t&&I.emit("QUIZ-JOIN",e,t)}(t,a)},R=function(e){var t=e.quizId,a=e.userName,c=Object(n.useState)({name:"",selectedAnswer:-1,current:1,total:1,timer:{},quizData:{name:""}}),o=Object(O.a)(c,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){return B({setValue:l},t,a)}),[t,a]),r.a.createElement(D.Provider,{value:i},e.children)},M=a(196),P=Object(m.a)({root:{width:"100%",marginTop:25},rootCentered:{width:"100%",marginTop:25,textAlign:"center"},list:{marginBottom:30},noBullets:{listStyleType:"none",textAlign:"center"},button:{width:250,padding:20}});function V(e){var t=Object(n.useState)(-1),a=Object(O.a)(t,2),c=a[0],o=a[1],i=Object(n.useContext)(D),l=i.questionData,m=i.timer,s=P(),E=!1;if(m.show||(E=!0),l&&l.current){var d=Object.keys(l.answers).map((function(e){return r.a.createElement("li",{key:e,className:s.list},r.a.createElement(M.a,{key:e,variant:"contained",color:l.selectedAnswer===e?"primary":"default",className:s.button,onClick:function(){o(e),function(e,t){t.selectedAnswer=e,Q(e)}(e,l)},disabled:E},l.answers[e].option))}));return r.a.createElement("div",{className:s.root},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},r.a.createElement("ul",{className:s.noBullets,key:c},d)))}return r.a.createElement("div",{className:s.rootCentered},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},"Waiting for quiz to start!"))}var J=a(184),W=a(198),L=a(183),Z=a(182),G=a(181),H=a(195);function _(e){var t=Object(n.useState)(e.userName),a=Object(O.a)(t,2),c=a[0],o=a[1];var i=function(){e.setOpen(!1)};return r.a.createElement(W.a,{open:e.open,onClose:i,"aria-labelledby":"form-dialog-title"},r.a.createElement(G.a,{id:"form-dialog-title"},"Change Username"),r.a.createElement(Z.a,null,r.a.createElement(H.a,{variant:"filled",autoFocus:!0,margin:"dense",id:"username",label:"Username",value:c,type:"text",fullWidth:!0,onChange:function(e){o(e.target.value)}})),r.a.createElement(L.a,null,r.a.createElement(M.a,{onClick:i,variant:"contained",color:"default"},"Cancel"),r.a.createElement(M.a,{onClick:function(){c&&(e.setOpen(!1),e.setUserName(c),A(c))},variant:"contained",color:"primary"},"Update")))}var F=Object(m.a)({root:{width:"100%",textAlign:"center"},avatar:{float:"left",width:30,height:30},timer:{float:"right"}});function X(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),c=a[0],o=a[1],i=Object(n.useContext)(D),l=i.questionData,m=i.timer,s=i.quizData,E=e.quizId,v=e.userName||"",f=0,b=0,p=F();l&&(f=l.total,b=l.current);var N=v.charAt(0);return r.a.createElement("div",{className:p.root},r.a.createElement("div",{className:p.timer},r.a.createElement("div",{className:p.button},r.a.createElement(d,{timer:m}))),E&&v?r.a.createElement(J.a,{size:30,className:p.avatar,onClick:function(){o(!0)}},N):"",r.a.createElement(_,{open:c,setOpen:o,userName:v,setUserName:e.setUserName}),r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},E&&v?s.name:"Join a Quiz!",b?r.a.createElement("span",null," [",b," / ",f,"]"):""))}var K=a(13),Y=Object(m.a)({root:{width:"100%",marginTop:25},rootCentered:{width:"100%",marginTop:25,textAlign:"center"},button:{width:250,padding:20}});function $(e){var t=Object(n.useState)({quizId:e.quizId,userName:e.userName}),a=Object(O.a)(t,2),c=a[0],o=a[1];function i(e){o(Object(N.a)({},c,Object(K.a)({},e.target.id,e.target.value)))}var l=Y();return r.a.createElement("div",{className:l.rootCentered},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},"Enter QuizId and/or Username to continue"),r.a.createElement("form",{className:l.rootCentered},r.a.createElement(H.a,{id:"quizId",label:"QuizId",value:c.quizId,variant:"filled",onChange:i})," \xa0",r.a.createElement(H.a,{id:"userName",label:"Username",value:c.userName,variant:"filled",onChange:i}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.a,{onClick:function(){e.setQuizId(c.quizId),e.setUserName(c.userName)},color:"primary",variant:"contained"},"Start")))}var ee=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.backgroundColor},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function te(e){var t=Object(n.useState)(e.match.params.quizId),a=Object(O.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(localStorage.getItem("userName")),l=Object(O.a)(i,2),u=l[0],m=l[1],s=ee();return r.a.createElement(R,{quizId:c,userName:u},r.a.createElement("div",{className:s.root},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:10},r.a.createElement(b.a,{className:s.paper},r.a.createElement(X,{quizId:c,userName:u,setUserName:m}))),r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:1}),r.a.createElement(p.a,{item:!0,xs:10},r.a.createElement(b.a,{className:s.paper},c&&u?r.a.createElement(V,null):r.a.createElement($,{quizId:c,userName:u,setQuizId:o,setUserName:function(e){m(e),localStorage.setItem("userName",e)}}))),r.a.createElement(p.a,{item:!0,xs:1}))))}var ae=r.a.createContext({quizData:{quizId:"",users:{},scoreboard:{},questions:{},question:{},allowed:!0}}),ne=Object(m.a)({root:{width:"100%",textAlign:"center"},buttons:{float:"right"}});function re(){var e=Object(n.useContext)(ae).quizData,t=ne(),a="/projector/"+e.quizId+"/";return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.buttons},r.a.createElement(M.a,{variant:"contained",onClick:function(){return window.open(a,"_blank")}},"Projector")),r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},"Quiz Master ",e.quizId))}var ce=function(){I.emit("QUESTION-NEXT")},oe=function(){I.emit("QUESTION-TIMER-START")},ie=Object(m.a)({root:{width:"100%"},buttons:{float:"right"},button:{marginLeft:10,float:"right"}});function le(){var e=Object(n.useContext)(ae),t=e.quizData,a=e.timer,c=ie(),o=!1,i="Next Question",l=!0;return t&&0===t.current&&(i="Start Quiz",l=!1),t&&t.current>0&&t.current>=t.questions.length&&(o=!0),r.a.createElement("div",{className:c.root},r.a.createElement("div",{className:c.buttons},r.a.createElement("div",{className:c.button},r.a.createElement(M.a,{variant:"contained",color:"primary",onClick:ce,disabled:o},i)),r.a.createElement("div",{className:c.button},l?r.a.createElement(M.a,{variant:"contained",color:"secondary",onClick:oe},"Start Timer"):""),r.a.createElement("div",{className:c.button},l?r.a.createElement(d,{timer:a}):"")),r.a.createElement(u.a,{variant:"h6",gutterBottom:!1},"Question"))}var ue=Object(m.a)({root:{width:"100%",marginTop:25},list:{marginBottom:30}});function me(){var e=Object(n.useContext)(ae).quizData,t=ue(),a="";return e&&e.current>0&&(a=Object.keys(e.questions[e.current-1].answers).map((function(a){return r.a.createElement("li",{key:a,className:t.list},e.questions[e.current-1].answers[a].value)}))),r.a.createElement("div",{className:t.root},e.current?r.a.createElement("div",{className:t.root},r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},e.questions[e.current-1].question),r.a.createElement(u.a,{variant:"h5",gutterBottom:!1},r.a.createElement("ol",{type:"A"},a))):"")}function se(){return r.a.createElement("div",{className:"question"},r.a.createElement(le,null),r.a.createElement(me,null))}var Ee=Object(m.a)({root:{width:"100%",textAlign:"center"}});function de(){var e=Ee();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{variant:"h6",gutterBottom:!1},"Scoreboard"))}var ve=a(186),fe=a(185);function be(e){var t=Object(n.useContext)(ae).quizData.scoreboard[e.userId];return r.a.createElement(fe.a,{key:t.socket},r.a.createElement(ve.a,{component:"th",scope:"row"},t.username),r.a.createElement(ve.a,{align:"right"},t.points))}var pe=a(187),Oe=a(189),Ne=a(188),ge=Object(m.a)({root:{width:"100%"},tableWrapper:{height:300,maxHeight:300,overflow:"auto"}});function je(e){var t=Object(n.useContext)(ae).quizData,a=ge(),c=[];return Object.keys(t.scoreboard).map((function(e){return c.push({id:e,points:t.scoreboard[e].points})})),c.sort((function(e,t){return t.points-e.points})),r.a.createElement("div",{className:a.tableWrapper},r.a.createElement(pe.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(Ne.a,null,r.a.createElement(fe.a,null,r.a.createElement(ve.a,null,"Username"),r.a.createElement(ve.a,{align:"right",sortDirection:"desc"},"Score"))),r.a.createElement(Oe.a,null,Object.keys(c).map((function(e){return r.a.createElement(be,{key:e,userId:c[e].id})})))))}function he(){return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(de,null),r.a.createElement(je,null))}var Ie=Object(m.a)({root:{width:"100%"}});function qe(){var e=Object(n.useContext)(ae).quizData,t=Ie(),a=e.users;return r.a.createElement("div",{className:t.root},r.a.createElement(u.a,{variant:"h6",gutterBottom:!0},"Contenders (",Object.keys(a).length,")"))}var ze=a(191),Te=a(192),xe=a(51),Ce=a(190),we=a(52),Se=Object(m.a)({card:{width:275,marginLeft:15,marginBottom:15,float:"left"},stateWait:{backgroundColor:xe.a[500]},stateCorrect:{backgroundColor:Ce.a[500]},stateWrong:{backgroundColor:we.a[500]}});function ke(e){var t=Object(n.useContext)(ae).quizData,a=Se(),c=t.users[e.userId],o="".concat(a.card," ");return 1===c.currentAnswer?o+="".concat(a.stateCorrect):2===c.currentAnswer?o+="".concat(a.stateWrong):o+="".concat(a.stateWait),r.a.createElement(ze.a,{className:o},r.a.createElement(Te.a,null,r.a.createElement(u.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},c.username),r.a.createElement(u.a,{variant:"body2",component:"p"},"Total points:  ",c.points)))}function Ue(e){var t=Object(n.useContext)(ae).quizData;return r.a.createElement("div",null,Object.keys(t.users).map((function(e){return r.a.createElement(ke,{key:e,userId:e})})))}var ye=Object(m.a)({root:{overflow:"auto",paddingBottom:5}});function De(){var e=ye();return r.a.createElement("div",{className:e.root},r.a.createElement(qe,null),r.a.createElement(Ue,null))}var Ae=function(e){!function(e){var t=e.setValue;I.on("QUIZ-UPDATE",(function(e){t((function(t){return Object(N.a)({},t,{quizData:e})})),e&&e.current>0&&e.questions[e.current-1].autostartTimer&&oe()})),I.on("QUESTION-TIMER-START",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-UPDATE",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))})),I.on("QUESTION-TIMER-STOP",(function(e){t((function(t){return Object(N.a)({},t,{timer:e})}))}))}({setValue:e.setValue}),I.emit("QUIZ-CREATE")},Qe=function(e){var t=Object(n.useState)({quizData:{quizId:"",users:{},scoreboard:{},questions:{},question:{},allowed:!0},timer:{total:60,current:0}}),a=Object(O.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){return Ae({setValue:o})}),[]),r.a.createElement(ae.Provider,{value:c},e.children)},Be=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.backgroundColor},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function Re(e){var t=Be();return r.a.createElement(Qe,null,r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(b.a,{className:t.paper},r.a.createElement(re,null))),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(b.a,{className:t.paper},r.a.createElement(se,null))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{className:t.paper},r.a.createElement(he,null))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(b.a,{className:t.paper},r.a.createElement(De,null))))))}var Me=Object(m.a)((function(e){return{root:{paddingTop:15}}}));var Pe=a(193),Ve=a(194),Je=a(85),We=Object(Je.a)({palette:{type:"dark"}});o.a.render(r.a.createElement(Pe.a,{theme:We},r.a.createElement(Ve.a,null),r.a.createElement((function(){var e=Me();return r.a.createElement(i.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/projector/:quizId",component:y}),r.a.createElement(l.a,{path:"/quizmaster/",component:Re}),r.a.createElement(l.a,{path:"/play/:quizId",component:te}),r.a.createElement(l.a,{path:"/",component:te}))))}),null)),document.getElementById("root"))},94:function(e,t,a){e.exports=a(134)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.5af93122.chunk.js.map