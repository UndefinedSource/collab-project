(this["webpackJsonpquiz-demo"]=this["webpackJsonpquiz-demo"]||[]).push([[0],{29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(21),i=n.n(a),o=(n(29),n(11)),u=function(){return Object(c.jsxs)("div",{className:"home-container",children:[Object(c.jsx)("h1",{className:"quiz",children:"Quiz"}),Object(c.jsx)("div",{className:"home-container",children:Object(c.jsx)("p",{children:"This is a practice tool"})}),Object(c.jsx)("button",{children:Object(c.jsx)(o.b,{className:"start-btn",to:"/quiz",children:"Get Started"})})]})},j=n(2),b=(n(35),n(18)),l=n.n(b),d=n(23),h=n(13),O=n(19),f=n(8),m=function(e){var t=e.question,n=e.answers,r=e.questionNumber,s=e.totalQuestionCount,a=e.userAnswer,i=e.onClickQuestionAnswer;return Object(c.jsxs)("div",{className:"question-container",children:[Object(c.jsx)("p",{className:"question",children:t}),Object(c.jsxs)("p",{className:"number",children:["Question: ",r," / ",s]}),n.map((function(e,t){if(a){var n=a.correctAnswer===e;return Object(c.jsx)("button",{className:"answer-btn"+(n?"-correct":""),disabled:!!a,value:e,onClick:i,children:e},t)}return Object(c.jsx)("button",{className:"answer-btn",disabled:!!a,value:e,onClick:i,children:e},t)}))]})},p=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(0),i=Object(f.a)(a,2),o=i[0],u=i[1],j=Object(r.useState)(0),b=Object(f.a)(j,2),p=b[0],x=b[1],v=Object(r.useState)([]),w=Object(f.a)(v,2),N=w[0],q=w[1],g=Object(r.useState)(!0),C=Object(f.a)(g,2),k=C[0],S=C[1],y=Object(r.useState)(!1),A=Object(f.a)(y,2),Q=A[0],z=A[1];Object(r.useEffect)((function(){S(!0),F().then((function(e){var t=e.results.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{answers:T([].concat(Object(h.a)(e.incorrect_answers),[e.correct_answer]))})}));s(t),S(!1)}))}),[]);var F=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api.php?amount=10&category=18&difficulty=hard",e.next=3,fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard");case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){return Object(h.a)(e).sort((function(){return Math.random()-.5}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"score",children:["Your Score: ",p]}),k&&Object(c.jsx)("p",{children:"Loading...."}),!k&&Object(c.jsx)(m,{question:n[o].question,answers:n[o].answers,questionNumber:o+1,userAnswer:N?N[o]:void 0,totalQuestionCount:10,onClickQuestionAnswer:function(e){var t=e.target.value,c=n[o].correct_answer===t;c&&x((function(e){return e+1}));var r={question:n[o].question,answer:t,isCorrectAnswer:c,correctAnswer:n[o].correct_answer};q((function(e){return[].concat(Object(h.a)(e),[r])})),N.length+1===10&&setTimeout((function(){alert("idk just keep studying evne if you got 10/10")}),500)}})]}),Object(c.jsxs)("div",{className:"navigation-container",children:[Object(c.jsx)("button",{className:"quit-btn",onClick:function(){alert("quit")},children:"Quit"}),!Q&&!k&&9!==o&&Object(c.jsx)("button",{className:"next-btn",onClick:function(){var e=o+1;10===e?z(!0):u(e)},children:"Next"})]})]})},x=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(j.a,{path:"/quiz",component:p})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.f15020d9.chunk.js.map