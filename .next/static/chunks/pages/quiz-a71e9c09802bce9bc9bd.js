(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{5553:function(e,t,n){"use strict";var r=n(5893),i=n(7294);t.Z=function(){return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("footer",{children:[(0,r.jsx)("span",{children:"Copyright by Martin Lauff"}),(0,r.jsx)("span",{children:"\xa9 Quizeck 2021"})]})})}},6970:function(e,t,n){"use strict";n.d(t,{d:function(){return c},v:function(){return o}});var r=n(5893),i=n(7294),c=(0,i.createContext)(),o=function(e){var t=e.children,n=(0,i.useState)(!1),o=n[0],s=n[1],a=(0,i.useState)(0),u=a[0],l=a[1],f=(0,i.useState)(1),d=f[0],x=f[1],v=(0,i.useState)(!1),h=v[0],p=v[1],g=(0,i.useState)(0),_=g[0],m=g[1];return(0,r.jsx)(c.Provider,{value:{active:o,setActive:s,currentQuestionIndex:u,setCurrentQuestionIndex:l,order:d,setOrder:x,visibility:h,setVisibility:p,score:_,setScore:m},children:t})}},6071:function(e,t,n){"use strict";var r=n(3038),i=n(862);t.default=void 0;var c=i(n(7294)),o=n(1689),s=n(2441),a=n(5749),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),i=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,o.resolveHref)(i,e.as):s||c}}),[i,e.href,e.as]),d=f.href,x=f.as,v=e.children,h=e.replace,p=e.shallow,g=e.scroll,_=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),j=m&&"object"===typeof m&&m.ref,b=(0,a.useIntersection)({rootMargin:"200px"}),y=r(b,2),w=y[0],C=y[1],Q=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,c.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof _?_:n&&n.locale,i=u[d+"%"+x+(r?"%"+r:"")];e&&!i&&l(n,d,x,{locale:r})}),[x,d,C,_,t,n]);var E={ref:Q,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,c,s,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:c,locale:a,scroll:s}))}(e,n,d,x,h,p,g,_)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,d,x,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof _?_:n&&n.locale,L=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(x,N,n&&n.locales,n&&n.domainLocales);E.href=L||(0,o.addBasePath)((0,o.addLocale)(x,N,n&&n.defaultLocale))}return c.default.cloneElement(m,E)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,a=(0,i.useRef)(),u=(0,i.useState)(!1),l=r(u,2),f=l[0],d=l[1],x=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){if(!o&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[x,f]};var i=n(7294),c=n(8391),o="undefined"!==typeof IntersectionObserver;var s=new Map},9070:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(7294),c=n(1664),o=n(6970),s=[{question:"Capital city of Hungary",img:"/hungary.jpg",answers:[{text:"Bucharest",correct:!1},{text:"Budapest",correct:!0},{text:"Warsaw",correct:!1},{text:"Athens",correct:!1}]},{question:"Highest mountain range in Europe",img:"/alps.jpg",answers:[{text:"Carpathians",correct:!1},{text:"Caucasus",correct:!1},{text:"Alps",correct:!0},{text:"Pyrenees",correct:!1}]},{question:"Longest river in the world",img:"/nile.jpg",answers:[{text:"Nile",correct:!0},{text:"Danube",correct:!1},{text:"Yangtze",correct:!1},{text:"Mississippi-Missouri",correct:!1}]},{question:"Longest river in the Europe",img:"/volga.jpg",answers:[{text:"Volga",correct:!0},{text:"Danube",correct:!1},{text:"Tisa",correct:!1},{text:"Dnieper",correct:!1}]},{question:"Location of Bangladesh",img:"/bangladesh.jpg",answers:[{text:"Africa",correct:!1},{text:"Europe",correct:!1},{text:"Oceania",correct:!1},{text:"Asia",correct:!0}]},{question:"White House is in...",img:"/whiteHouse.jpg",answers:[{text:"Washington D.C.",correct:!0},{text:"New York",correct:!1},{text:"Miami",correct:!1},{text:"Atlanta",correct:!1}]},{question:"Leaning Tower of Pisa is in..",img:"/pisa.jpg",answers:[{text:"France",correct:!1},{text:"Portugal",correct:!1},{text:"Italy",correct:!0},{text:"Spain",correct:!1}]}],a=n(5553),u=n(7466),l=n.n(u),f=function(e){var t=e.txt,n=e.correct,c=(0,i.useState)(!1),s=c[0],a=c[1],u=(0,i.useContext)(o.d),f=u.active,d=u.setActive,x=u.setCurrentQuestionIndex,v=u.visibility,h=u.setVisibility,p=u.setScore;return(0,r.jsx)("button",{className:s||l().nic,"data-ans":n,onClick:function(e){return function(e){e.target.dataset.ans?(a(l().correct),p((function(e){return e+1}))):a(l().wrong),d(!f),x((function(e){return e+1})),h(!v)}(e)},children:t})},d=function(e){var t=e.answers;if(!t)return(0,r.jsx)("div",{children:"Loading btns..."});return(0,r.jsx)(r.Fragment,{children:t.map((function(e,t){return(0,r.jsx)(f,{txt:e.text,correct:e.correct?e.correct:""},t)}))})},x=n(3125),v=n.n(x),h=function(){var e=(0,i.useContext)(o.d).visibility;return(0,r.jsx)("div",{className:"".concat(l().layer," ").concat(e?"":v().hide)})},p=n(1517),g=n.n(p),_=function(e){var t=e.currentQuestion,n=e.questionCount;if(!t)return(0,r.jsx)("div",{});var c=(0,i.useContext)(o.d).order;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:g().img,children:[(0,r.jsx)("span",{className:g().question,children:t.question}),(0,r.jsx)("img",{alt:"Quiz picture",width:300,height:130,src:t.img})]}),(0,r.jsxs)("div",{className:g().btns,children:[(0,r.jsx)(h,{}),(0,r.jsx)(d,{answers:t.answers})]}),(0,r.jsx)("div",{className:g().count,children:"Question ".concat(c," of ").concat(n)})]},t.question)})},m=function(){var e=(0,i.useState)(s),t=e[0],n=e[1],u=(0,i.useState)({}),l=u[0],f=u[1],d=(0,i.useState)(!1),x=d[0],h=d[1],p=(0,i.useContext)(o.d),g=p.active,m=p.setActive,j=p.setOrder,b=(p.order,p.currentQuestionIndex),y=p.setCurrentQuestionIndex,w=p.visibility,C=p.setVisibility,Q=p.score,E=p.setScore;(0,i.useEffect)((function(){N()}),[]);var N=function(){n(s.sort((function(){return Math.random()-.5}))),E(0),L()},L=function(){S(t[b])},S=function(e){b+1>t.length&&(h(!x),y(0),j(1)),f(e)};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:v().divBg,children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{children:"QUIZECK"})})})}),(0,r.jsx)("div",{className:v().barDiv,children:(0,r.jsx)("div",{className:"".concat(v().bar," ").concat(g||x?"":v().animation,"\n             ")})}),(0,r.jsxs)("div",{className:"".concat(v().endScreen," ").concat(x?"":v().hide),children:[(0,r.jsxs)("h2",{children:["Score: ",Q]}),(0,r.jsx)("button",{onClick:function(){N(),h(!x)},children:"Start again"})]}),(0,r.jsx)(_,{questionCount:s.length,currentQuestion:l}),(0,r.jsx)("button",{onClick:function(){m(!g),j((function(e){return e+1})),C(!w),L()},className:"".concat(v().modal," ").concat(g?"":v().hide),type:"button",children:"Next"})]}),(0,r.jsx)(a.Z,{})]})}},2353:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return n(9070)}])},7466:function(e){e.exports={correct:"Btns_correct__aL7EF",wrong:"Btns_wrong__3nnx-",nic:"Btns_nic__1NOd8",layer:"Btns_layer__1l1bV"}},1517:function(e){e.exports={question:"Question_question__3fcTu",img:"Question_img__3xlAq",count:"Question_count__soWLu",btns:"Question_btns__iSs6F"}},3125:function(e){e.exports={barDiv:"Quiz_barDiv__3Bxzm",bar:"Quiz_bar__2KAhE",animation:"Quiz_animation__ocoqk","progress-animation":"Quiz_progress-animation__QiHm-",divBg:"Quiz_divBg__1qtdA",modal:"Quiz_modal__2zUBE",hide:"Quiz_hide__2mRfd",endScreen:"Quiz_endScreen__xA0iP"}},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,351],(function(){return t=2353,e(e.s=t);var t}));var t=e.O();_N_E=t}]);