(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{5553:function(e,t,r){"use strict";var n=r(5893),c=r(7294);t.Z=function(){return(0,n.jsx)(c.Fragment,{children:(0,n.jsxs)("footer",{children:[(0,n.jsx)("span",{children:"Copyright by Martin Lauff"}),(0,n.jsx)("span",{children:"\xa9 Quizeck 2021"})]})})}},6970:function(e,t,r){"use strict";r.d(t,{d:function(){return i},v:function(){return o}});var n=r(5893),c=r(7294),i=(0,c.createContext)(),o=function(e){var t=e.children,r=(0,c.useState)(!1),o=r[0],a=r[1],s=(0,c.useState)(0),u=s[0],l=s[1],x=(0,c.useState)(1),d=x[0],f=x[1],g=(0,c.useState)(!1),p=g[0],h=g[1],v=(0,c.useState)(0),m=v[0],_=v[1];return(0,n.jsx)(i.Provider,{value:{active:o,setActive:a,currentQuestionIndex:u,setCurrentQuestionIndex:l,order:d,setOrder:f,visibility:p,setVisibility:h,score:m,setScore:_},children:t})}},6071:function(e,t,r){"use strict";var n=r(3038),c=r(862);t.default=void 0;var i=c(r(7294)),o=r(1689),a=r(2441),s=r(5749),u={};function l(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(c?"%"+c:"")]=!0}}var x=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),c=r&&r.pathname||"/",x=i.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),r=n(t,2),i=r[0],a=r[1];return{href:i,as:e.as?(0,o.resolveHref)(c,e.as):a||i}}),[c,e.href,e.as]),d=x.href,f=x.as,g=e.children,p=e.replace,h=e.shallow,v=e.scroll,m=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var _=i.Children.only(g),j=_&&"object"===typeof _&&_.ref,b=(0,s.useIntersection)({rootMargin:"200px"}),y=n(b,2),w=y[0],C=y[1],q=i.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,i.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(d),n="undefined"!==typeof m?m:r&&r.locale,c=u[d+"%"+f+(n?"%"+n:"")];e&&!c&&l(r,d,f,{locale:n})}),[f,d,C,m,t,r]);var S={ref:q,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,r,n,c,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[c?"replace":"push"](r,n,{shallow:i,locale:s,scroll:a}))}(e,r,d,f,p,h,v,m)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(r,d,f,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var L="undefined"!==typeof m?m:r&&r.locale,M=r&&r.isLocaleDomain&&(0,o.getDomainLocale)(f,L,r&&r.locales,r&&r.domainLocales);S.href=M||(0,o.addBasePath)((0,o.addLocale)(f,L,r&&r.defaultLocale))}return i.default.cloneElement(_,S)};t.default=x},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=(0,c.useRef)(),u=(0,c.useState)(!1),l=n(u,2),x=l[0],d=l[1],f=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||x||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:c,elements:n}),r}(r),c=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),a.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,x]);return(0,c.useEffect)((function(){if(!o&&!x){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[x]),[f,x]};var c=r(7294),i=r(8391),o="undefined"!==typeof IntersectionObserver;var a=new Map},9070:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5893),c=r(7294),i=r(1664),o=r(6970),a=[{question:"Capital city of Hungary",img:"/hungary.jpg",answers:[{text:"Bucharest",correct:!1},{text:"Budapest",correct:!0},{text:"Warsaw",correct:!1},{text:"Athens",correct:!1}]},{question:"Highest mountain range in Europe",img:"/alps.jpg",answers:[{text:"Carpathians",correct:!1},{text:"Caucasus",correct:!1},{text:"Alps",correct:!0},{text:"Pyrenees",correct:!1}]},{question:"Longest river in the world",img:"/nile.jpg",answers:[{text:"Nile",correct:!0},{text:"Danube",correct:!1},{text:"Yangtze",correct:!1},{text:"Mississippi-Missouri",correct:!1}]},{question:"Longest river in the Europe",img:"/volga.jpg",answers:[{text:"Volga",correct:!0},{text:"Danube",correct:!1},{text:"Tisa",correct:!1},{text:"Dnieper",correct:!1}]},{question:"Location of Bangladesh",img:"/bangladesh.jpg",answers:[{text:"Africa",correct:!1},{text:"Europe",correct:!1},{text:"Oceania",correct:!1},{text:"Asia",correct:!0}]},{question:"White House is in...",img:"/whiteHouse.jpg",answers:[{text:"Washington D.C.",correct:!0},{text:"New York",correct:!1},{text:"Miami",correct:!1},{text:"Atlanta",correct:!1}]},{question:"Leaning Tower of Pisa is in..",img:"/pisa.jpg",answers:[{text:"France",correct:!1},{text:"Portugal",correct:!1},{text:"Italy",correct:!0},{text:"Spain",correct:!1}]},{question:"Capital city of Switzerland",img:"/swiss.jpg",answers:[{text:"Z\xfcrich",correct:!1},{text:"Bern",correct:!0},{text:"Berlin",correct:!1},{text:"Vienna",correct:!1}]},{question:"Capital city of Italy",img:"/italy.jpg",answers:[{text:"Marseille",correct:!1},{text:"Rome",correct:!0},{text:"Turin",correct:!1},{text:"Florence",correct:!1}]},{question:"Which river is in USA",img:"/usa.jpg",answers:[{text:"Thames",correct:!1},{text:"Colorado",correct:!0},{text:"Rhine",correct:!1},{text:"Mackenzie",correct:!1}]},{question:"Taj Mahal is in...",img:"/tajMahal.jpg",answers:[{text:"Nepal",correct:!1},{text:"Kyrgyzstan",correct:!1},{text:"India",correct:!0},{text:"Sri Lanka",correct:!1}]},{question:"Capital city of China",img:"/china.jpg",answers:[{text:"Shanghai",correct:!1},{text:"Seoul",correct:!1},{text:"Beijing",correct:!0},{text:"Singapore",correct:!1}]},{question:"The highest peak in the world",img:"/peak.jpg",answers:[{text:"Kilimanjaro",correct:!1},{text:"Mount everest",correct:!0},{text:"Mount Blanc",correct:!1},{text:"Olymp",correct:!1}]},{question:"Sagrada Familia is in...",img:"/sagrada.jpg",answers:[{text:"Barcelona",correct:!0},{text:"Valencia",correct:!1},{text:"Madrid",correct:!1},{text:"Paris",correct:!1}]},{question:"Location of Vietnam",img:"/vietnam.jpg",answers:[{text:"Caribbean",correct:!1},{text:"Asia",correct:!0},{text:"Oceania",correct:!1},{text:"Africa",correct:!1}]},{question:"Location of Morocco",img:"/morocco.jpg",answers:[{text:"Asia",correct:!1},{text:"America",correct:!1},{text:"Africa",correct:!0},{text:"Oceania",correct:!1}]},{question:"The biggest sand desert",img:"/desert.jpg",answers:[{text:"Syrian",correct:!1},{text:"Arabian",correct:!1},{text:"Gobi",correct:!1},{text:"Sahara",correct:!0}]},{question:"Statue of Liberty is in...",img:"/liberty.jpg",answers:[{text:"Boston",correct:!1},{text:"Philadelphia",correct:!1},{text:"New York",correct:!0},{text:"Houston",correct:!1}]},{question:"Capital city of Japan",img:"/japan.jpg",answers:[{text:"Hong Kong",correct:!1},{text:"Tokyo",correct:!0},{text:"Brunei",correct:!1},{text:"Kyoto",correct:!1}]},{question:"Capital city of Argentina",img:"/argentina.jpg",answers:[{text:"Buenos Aires",correct:!0},{text:"S\xe3o Paulo",correct:!1},{text:"Melbourne",correct:!1},{text:"Albuquerque",correct:!1}]}],s=r(5553),u=r(7466),l=r.n(u),x=function(e){var t=e.txt,r=e.correct,i=(0,c.useState)(!1),a=i[0],s=i[1],u=(0,c.useContext)(o.d),x=u.active,d=u.setActive,f=u.currentQuestionIndex,g=u.setCurrentQuestionIndex,p=u.visibility,h=u.setVisibility,v=u.setScore,m=u.score;return(0,n.jsx)("button",{className:a||l().nic,"data-ans":r,onClick:function(e){return function(e){e.target.dataset.ans?(s(l().correct),v(m+1)):s(l().wrong),d(!x),g(f+1),h(!p)}(e)},children:t})},d=function(e){var t=e.answers;if(!t)return(0,n.jsx)("div",{children:"Loading btns..."});return(0,n.jsx)(n.Fragment,{children:t.map((function(e,t){return(0,n.jsx)(x,{txt:e.text,correct:e.correct?e.correct:""},t)}))})},f=r(3125),g=r.n(f),p=function(){var e=(0,c.useContext)(o.d).visibility;return(0,n.jsx)("div",{className:"".concat(l().layer," ").concat(e?"":g().hide)})},h=r(1517),v=r.n(h),m=function(e){var t=e.currentQuestion,r=e.questionCount;if(!t)return(0,n.jsx)("div",{});var i=(0,c.useContext)(o.d).order;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:v().img,children:[(0,n.jsx)("span",{className:v().question,children:t.question}),(0,n.jsx)("img",{alt:"Quiz picture",width:300,height:130,src:t.img})]}),(0,n.jsxs)("div",{className:v().btns,children:[(0,n.jsx)(p,{}),(0,n.jsx)(d,{answers:t.answers})]}),(0,n.jsx)("div",{className:v().count,children:"Question ".concat(i," of ").concat(r)})]},t.question)})},_=function(){var e=(0,c.useState)(a),t=e[0],r=e[1],u=(0,c.useState)({}),l=u[0],x=u[1],d=(0,c.useState)(!1),f=d[0],p=d[1],h=(0,c.useContext)(o.d),v=h.active,_=h.setActive,j=h.setOrder,b=h.order,y=h.currentQuestionIndex,w=h.setCurrentQuestionIndex,C=h.visibility,q=h.setVisibility,S=h.score,L=h.setScore;(0,c.useEffect)((function(){M()}),[]);var M=function(){r(a.sort((function(){return Math.random()-.5}))),L(0),Q()},Q=function(){N(t[y])},N=function(e){y+1>t.length&&(p(!f),w(0),j(1)),x(e)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("div",{className:g().divBg,children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{children:"QUIZECK"})})})}),(0,n.jsx)("div",{className:g().barDiv,children:(0,n.jsx)("div",{className:"".concat(g().bar," ").concat(v||f?"":g().animation,"\n             ")})}),(0,n.jsxs)("div",{className:"".concat(g().endScreen," ").concat(f?"":g().hide),children:[(0,n.jsxs)("h2",{children:["Score: ",S]}),(0,n.jsx)("button",{onClick:function(){M(),p(!f)},children:"Start again"})]}),(0,n.jsx)(m,{questionCount:a.length,currentQuestion:l}),(0,n.jsx)("button",{onClick:function(){_(!v),j(b+1),q(!C),Q()},className:"".concat(g().modal," ").concat(v?"":g().hide),type:"button",children:"Next"})]}),(0,n.jsx)(s.Z,{})]})}},2353:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return r(9070)}])},7466:function(e){e.exports={correct:"Btns_correct__aL7EF",wrong:"Btns_wrong__3nnx-",nic:"Btns_nic__1NOd8",layer:"Btns_layer__1l1bV"}},1517:function(e){e.exports={question:"Question_question__3fcTu",img:"Question_img__3xlAq",count:"Question_count__soWLu",btns:"Question_btns__iSs6F"}},3125:function(e){e.exports={barDiv:"Quiz_barDiv__3Bxzm",bar:"Quiz_bar__2KAhE",animation:"Quiz_animation__ocoqk","progress-animation":"Quiz_progress-animation__QiHm-",divBg:"Quiz_divBg__1qtdA",modal:"Quiz_modal__2zUBE",hide:"Quiz_hide__2mRfd",endScreen:"Quiz_endScreen__xA0iP"}},1664:function(e,t,r){e.exports=r(6071)}},function(e){e.O(0,[774,351],(function(){return t=2353,e(e.s=t);var t}));var t=e.O();_N_E=t}]);