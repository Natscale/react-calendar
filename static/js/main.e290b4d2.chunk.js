(this["webpackJsonpreact-calendar-docs"]=this["webpackJsonpreact-calendar-docs"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),c=(a(19),a(20),a(2)),s=a(9),o=a.n(s),u=a(14),d=function(){return(d=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},g={0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa"},m={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};function h(e){return""+e.getFullYear()+e.getMonth()+e.getDate()}function v(e,t){if(t.getFullYear()<e.getFullYear())return!0;if(t.getFullYear()===e.getFullYear()){if(t.getMonth()<e.getMonth())return!0;if(t.getMonth()===e.getMonth()&&t.getDate()<e.getDate())return!0}return!1}function f(e){return"undefined"!==typeof e&&null!==e&&e.getTime&&!isNaN(e.getTime())}function w(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function b(e,t,a){var n=e.getFullYear(),l=e.getMonth(),r=e.getDate(),i=t.getFullYear(),c=t.getMonth(),s=t.getDate(),o=a.getFullYear(),u=a.getMonth(),d=a.getDate();return n<=o&&o<=i&&(n<o&&o<i||(n===i?l<=u&&u<=c&&(l<u&&u<c||(l===c?r<=d&&d<=s&&u===c:l===u?r<=d:c===u&&d<=s)):n===o?u>l||u===l&&d>=r:i===o&&(u<c||u===c&&d<=s)))}function E(e){return e%4===0&&e%100!==0||e%400===0}function D(e,t){return{0:31,1:E(e)?29:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31}[t]}function S(e){return D(e.getFullYear(),e.getMonth())===e.getDate()}function y(e){return 0===e?11:e-1}function k(e){return 11===e?0:e+1}function p(e){return 1===e?1:e-1}function M(e){return e+1}function _(e){return function(e){return 11===e.getMonth()&&S(e)}(e)?new Date(e.getFullYear()+1,0,1):S(e)?new Date(e.getFullYear(),e.getMonth()+1,1):new Date(e.getFullYear(),e.getMonth(),e.getDate()+1)}function R(e,t){return void 0===t&&(t=0),e>=t?e-t:6-t+1+e}function C(e,t){var a=6-t;return e<=a?e+t:e-a-1}function O(e){return e%20===0?20*(e/20-1)+1:20*Number((e/20).toFixed(0))+1}function j(e){for(var t=e.isRangeSelectModeOn,a=e.isRangeView,n=e.selectedDate,l=e.selectedRangeStart,r=e.selectedRangeEnd,i=e.highlightsMap,c=e.newSelectedRangeStart,s=e.newSelectedRangeEnd,o=e.isSelectMultiDate,u=e.selectedMultiDates,d=e.yearInView,g=e.monthInView,m=e.startOfTheWeek,h=e.isDisabled,v=e.checkIfWeekend,f=[[],[],[],[],[],[]],w=function(e,t,a){var n=new Date;return n.setDate(1),n.setMonth(t),n.setFullYear(e),R(n.getDay(),a)}(d,g,m),b=new Date,E=D(d,g),S=0===g,M=11===g,_=D(S?p(d):d,y(g)),C=0,O=0,j=_-(w-1);j<=_;j++)7===O&&(O=0,C++),f[C].push(x({currDate:new Date(S?p(d):d,y(g),j),activeMonthInView:!1,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:o,row:C,weekColumn:O,checkIfWeekend:v,today:b,selectedMultiDates:u,startOfTheWeek:m})),O++;for(var Y=1;Y<=E;Y++)7===O&&(O=0,C++),f[C].push(x({currDate:new Date(d,g,Y),activeMonthInView:!0,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:o,row:C,weekColumn:O,checkIfWeekend:v,today:b,selectedMultiDates:u,startOfTheWeek:m})),O++;for(var F=1;f[5].length<7;)7===O&&(O=0,C++),f[C].push(x({currDate:new Date(M?d+1:d,k(g),F),activeMonthInView:!1,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:o,row:C,weekColumn:O,checkIfWeekend:v,today:b,selectedMultiDates:u,startOfTheWeek:m})),O++,F++;return f}function x(e){var t=e.currDate,a=e.activeMonthInView,n=e.highlightsMap,l=e.newSelectedRangeEnd,r=e.newSelectedRangeStart,i=e.selectedDate,c=e.selectedRangeEnd,s=e.selectedRangeStart,o=e.isDisabled,u=e.isRangeSelectModeOn,d=e.isRangeView,g=e.isSelectMultiDate,m=e.row,E=e.weekColumn,D=e.checkIfWeekend,S=e.today,y=e.selectedMultiDates,k=e.startOfTheWeek;return{date:t,dayOfMonth:t.getDate(),month:t.getMonth(),activeMonthInView:a,isHighlight:1===n[h(t)],isInRange:!!d&&(u?!(!f(r)||!f(l))&&(v(l,r)?b(r,l,t):b(l,r,t)):!!s&&!!c&&b(s,c,t)),isRangeStart:!!d&&(u?!!f(r)&&w(r,t):!!s&&w(s,t)),isRangeEnd:!!d&&(!u&&(!!c&&w(c,t))),year:t.getFullYear(),dayOfWeek:C(E,k),isWeekend:D(t),isToday:w(t,S),isFirstRow:0===m,isLastRow:5===m,isFirsColumn:0===E,isLastColumn:6===E,isSelected:g?!!y[h(t)]:!d&&(!!i&&(t.getMonth()===i.getMonth()&&t.getFullYear()===i.getFullYear()&&t.getDate()===i.getDate())),isDisabled:o(t)}}var Y={root:{height:"12%",padding:"1% 2%",display:"flex",alignTtems:"center",width:"100%"},arc_header_nav:{width:"10.14%",height:"100%",flex:"0 0 auto"},arch_header_label:{width:"65.21%",height:"100%",margin:"0 4.34%",flex:"1 1 auto",display:"flex",justifyContent:"center",alignItems:"center"}};function F(e){var t=e.onClickPrev,a=e.onChangeViewType,n=e.onClickNext,r=e.viewType,i=e.viewingMonth,c=e.viewingYear,s=e.yearMatrixEnd,o=e.yearMatrixStart;return l.a.createElement("header",{style:Y.root,className:"arc_header"},l.a.createElement("button",{style:Y.arc_header_nav,className:"arc_header_nav arc_header_nav-prev",onClick:t},l.a.createElement("span",null,"\u2190")),"month_dates"===r?l.a.createElement("button",{style:Y.arch_header_label,className:"arc_header_label arc_header_label-days-of-month",onClick:function(){return a("years")}},l.a.createElement("div",null,l.a.createElement("span",null,m[i])),l.a.createElement("div",null,l.a.createElement("span",null,c))):"months"===r?l.a.createElement("button",{style:Y.arch_header_label,className:"arc_header_label arc_header_label-months"},l.a.createElement("div",{onClick:function(){return a("years")}},l.a.createElement("span",null,c))):l.a.createElement("button",{style:Y.arch_header_label,className:"arc_header_label arc_header_label-years",onClick:function(){return a("month_dates")}},l.a.createElement("div",null,l.a.createElement("span",null,o,"-",s))),l.a.createElement("button",{style:Y.arc_header_nav,className:"arc_header_nav arc_header_nav-next",onClick:n},l.a.createElement("span",null,"\u2192")))}var N=Object(n.memo)(F),I={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},V={width:"95%",height:"45%",display:"flex",alignItems:"center",justifyContent:"center"};function T(e){var t=e.cell,a=e.onMonthClicked;return l.a.createElement("div",{style:I},l.a.createElement("button",{style:V,onClick:function(){a(t)}},m[t.month]))}var A=Object(n.memo)(T),W={root:{height:"100%"},arc_view_row:{height:"24.9%",display:"flex",width:"100%"},arc_view_cell:{flexBasis:"33.33%",maxWidth:"33.33%",height:"100%"}};function P(e){var t=e.onChangeViewingMonth,a=e.onChangeViewType,r=Object(n.useMemo)((function(){return function(e){var t=Array.from({length:12},(function(t,a){return{month:a,isCurrentMonth:(new Date).getMonth()===a,isSelectedMonth:1===e[a]}}));return[t.slice(0,3),t.slice(3,6),t.slice(6,9),t.slice(9,12)]}({})}),[]);return l.a.createElement("div",{role:"grid",style:W.root,className:"arc_view-months"},r.map((function(e,n){return l.a.createElement("div",{style:W.arc_view_row,className:"arc_view_row",key:n},e.map((function(e){return l.a.createElement("div",{style:W.arc_view_cell,className:"arc_view_cell"+(e.isCurrentMonth?" arc_this_month":""),key:e.month},l.a.createElement(A,{cell:e,onMonthClicked:function(e){t(e.month),a("month_dates")}}))})))})))}var L=Object(n.memo)(P),z={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},q={width:"95%",height:"45%",display:"flex",alignItems:"center",justifyContent:"center"};function B(e){var t=e.cell,a=e.onYearClicked;return l.a.createElement("div",{style:z},l.a.createElement("button",{style:q,onClick:function(){a(t)}},t.year))}var H=Object(n.memo)(B),J={root:{height:"100%"},arc_view_row:{height:"24.9%",display:"flex",width:"100%"},arc_view_cell:{width:"20%",height:"100%"}};function U(e){var t=e.onChangeViewType,a=e.onChangeViewingYear,r=e.yearMatrixStart,i=Object(n.useMemo)((function(){return function(e,t){var a=Array.from({length:20},(function(a,n){return{year:e+n,isCurrentYear:(new Date).getFullYear()===e+n,isSelectedYear:1===t[e+n]}}));return[a.slice(0,5),a.slice(5,10),a.slice(10,15),a.slice(15,20)]}(r,{})}),[r]);return l.a.createElement("div",{role:"grid",style:J.root,className:"arc_view-years"},i.map((function(e,n){return l.a.createElement("div",{style:J.arc_view_row,className:"arc_view_row",key:n},e.map((function(e){return l.a.createElement("div",{style:J.arc_view_cell,className:"arc_view_cell"+(e.isCurrentYear?" arc_this_year":""),key:e.year},l.a.createElement(H,{cell:e,onYearClicked:function(e){a(e.year),t("months")}}))})))})))}var G=Object(n.memo)(U),K={arc_view_weekdays:{height:"15%",margin:"0",padding:0,display:"flex",width:"100%",listStyle:"none"},arc_view_weekdays_cell:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexBasis:"14.286%",maxWidth:"14.286%"},arc_view_weekdays_cell_value:{width:"65.95%",display:"flex",alignItems:"center",justifyContent:"center"}};function Q(e){var t=e.weekStartIndex,a=e.weekendIndices,r=Object(n.useMemo)((function(){return function(e){void 0===e&&(e=0);var t=Object.keys(g).slice(e,7).concat(Object.keys(g).slice(0,e));return{map:t.reduce((function(e,t,a){return e[Number(a)]=g[Number(t)],e}),{}),order:t}}(t)}),[t]),i=r.order,c=r.map,s=Object(n.useMemo)((function(){return a.reduce((function(e,t){return e[t]=1,e}),{})}),[a]);return l.a.createElement("ul",{style:K.arc_view_weekdays,className:"arc_view_weekdays"},i.map((function(e,t){return l.a.createElement("li",{style:K.arc_view_weekdays_cell,key:e,className:"arc_view_weekdays_cell"+(s[t]?" arc_wknd":"")},l.a.createElement("div",{style:K.arc_view_weekdays_cell_value},l.a.createElement("span",null,c[t])))})))}var X=Object(n.memo)(Q),Z={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},$={width:"69.80%",height:"80%",display:"flex",alignItems:"center",justifyContent:"center"},ee={width:"100%",height:"100%"};function te(e){var t=e.cell,a=e.onDateClicked;return l.a.createElement("div",{style:Z},l.a.createElement("div",{style:$,className:"arc_view_cell_value"},l.a.createElement("button",{style:ee,disabled:t.isDisabled,tabIndex:t.isDisabled?-1:0,onClick:function(){return a(t)}},t.dayOfMonth)))}var ae=Object(n.memo)(te),ne={"arc_view-days-of-month":{height:"85%"},arc_view_row:{height:"16.664%",display:"flex",width:"100%",alignItems:"center"},arc_view_cell:{flexBasis:"14.286%",maxWidth:"14.286%",height:"100%"}};function le(e){var t=e.selectedDate,a=e.selectedRangeStart,r=e.selectedRangeEnd,i=e.newSelectedRangeStart,c=e.weekStartIndex,s=e.onChangeViewingYear,o=e.onChangeViewingMonth,u=e.newSelectedRangeEnd,g=e.isRangeSelectorView,m=e.skipDisabledDatesInRange,b=e.setIsRangeSelectModeOn,E=e.fixedRangeLength,D=e.isFixedRangeView,S=e.isRangeSelectModeOn,y=e.isDisabled,k=e.onChangenSelectedMultiDates,p=e.selectedMultiDates,M=e.isMultiSelectorView,R=e.today,C=e.viewingMonth,O=e.onChangenNewSelectedRangeEnd,x=e.onChangenNewSelectedRangeStart,Y=e.onChangenSelectedRangeEnd,F=e.onChangenSelectedRangeStart,N=e.onChangenSelectedDate,I=e.weekendIndices,V=e.onChange,T=e.viewingYear,A=e.allowFewerDatesThanRange,W=e.disableFuture,P=e.disablePast,L=e.lockView,z=e.checkIfWeekend,q=e.onPartialRangeSelect,B=e.onEachMultiSelect,H=e.highlights,J=e.disableToday,U=Object(n.useState)((function(){return Array.isArray(H)?H.filter((function(e){return f(e)})).reduce((function(e,t){return e[h(t)]=1,e}),{}):{}}))[0],G=Object(n.useMemo)((function(){return j({selectedDate:t,selectedRangeStart:a,selectedRangeEnd:r,newSelectedRangeStart:i,newSelectedRangeEnd:u,checkIfWeekend:z,isRangeView:g||D,isRangeSelectModeOn:S,weekendIndexes:I,selectedMultiDates:p,highlightsMap:U,isSelectMultiDate:M,yearInView:T,monthInView:C,startOfTheWeek:c,disableFuture:W,disablePast:P,disableToday:J,isDisabled:y})}),[t,a,r,i,u,g,D,S,z,I,p,U,M,T,C,c,W,P,J,y]),K=Object(n.useCallback)((function(e){var t=e.date;if(!(L&&t.getMonth()!==C)){if(g&&!D)if(S&&i){var a=new Date(i.getFullYear(),i.getMonth(),i.getDate());if(v(a,t)){F(t),Y(a);var n=t,l=a;V&&V([n,l])}else{F(a),Y(t);n=a,l=t;V&&V([n,l])}O(void 0),b(!1)}else x(t),O(void 0),b(!0),q&&q(t);else if(D){F(t);var r=function(e,t,a){for(var n=t,l=e,r=!1,i=0;n>0;){if(1500===i){r=!0;break}var c=_(l);if(a.upperLimit&&w(a.upperLimit,c)){r=!0;break}l=c,a.skipDisabledDatesInRange?a.skipDisabledDatesInRange&&!a.isDisabled(c)&&n--:n--,i++}return{endDate:l,limitReached:r}}(t,E,{isDisabled:y,skipDisabledDatesInRange:m,upperLimit:L?new Date(t.getFullYear(),t.getMonth()+1,1):W?_(R):void 0});l=r.endDate;r.limitReached&&!A?(F(void 0),Y(void 0)):(Y(l),V&&V([t,l]))}else if(M){var c=h(t),u=d({},p);p[c]?u[c]=void 0:u[c]=t,k(u),B&&B(t),V&&V(Object.keys(u).filter((function(e){return!!u[e]})).map((function(e){return u[e]})))}else N(t),V&&V(t);o(e.month),s(e.year)}}),[L,C,g,D,M,o,s,S,i,O,b,F,Y,V,x,q,E,y,m,W,R,A,p,k,B,N]);return l.a.createElement("div",{style:ne["arc_view-days-of-month"],className:"arc_view-days-of-month",role:"grid"},G.map((function(e,t){return l.a.createElement("div",{style:ne.arc_view_row,className:"arc_view_row",key:t},e.map((function(e){return l.a.createElement("div",{style:ne.arc_view_cell,onMouseEnter:function(){g&&S&&O(new Date(e.year,e.month,e.dayOfMonth))},key:h(e.date),className:"arc_view_cell"+(e.activeMonthInView?" arc_active":"")+(e.isWeekend?" arc_wknd":"")+(e.isToday?" arc_today":"")+(e.isFirstRow?" arc_fr":"")+(e.isToday?" arc_today":"")+(e.isHighlight?" arc_highlight":"")+(e.isLastRow?" arc_lr":"")+(e.isFirsColumn?" arc_fc":"")+(e.isLastColumn?" arc_lc":"")+(e.isSelected&&!g?" arc_selected":"")+(e.isDisabled?" arc_disabled":"")+(e.isInRange?" arc_in_range":"")+(e.isRangeStart?" arc_range_start":"")+(e.isRangeEnd?" arc_range_end":"")+(S?" arc_range_mode":"")},l.a.createElement(ae,{cell:e,onDateClicked:K}))})))})))}var re=Object(n.memo)(le),ie={height:"88%",width:"100%"};function ce(e){var t=Object(n.useMemo)((function(){return t=e.size,a=e.fontSize,{root:{arc:{width:t+"px",height:t+"px",fontSize:a+"px",display:"flex",alignItems:"flex-start",flexDirection:"column",boxSizing:"border-box"}}};var t,a}),[e.size,e.fontSize]),a=Object(n.useState)("month_dates"),r=a[0],i=a[1],c=Object(n.useState)((function(){var t=f(e.viewDate)?e.viewDate.getMonth():e.isNormalView&&f(e.value)?e.value.getMonth():e.isRangeSelectorView&&e.selectedRangeStart?e.selectedRangeStart.getMonth():e.isMultiSelectorView&&Array.isArray(e.value)&&f(e.value[0])?e.value[0].getMonth():f(e.minAllowedDate)?e.minAllowedDate.getMonth():f(e.maxAllowedDate)?e.maxAllowedDate.getMonth():e.today.getMonth();return e.isSecondary?k(t):t})),s=c[0],o=c[1],u=Object(n.useState)(f(e.viewDate)?e.viewDate.getFullYear():e.isNormalView&&f(e.value)?e.value.getFullYear():e.isRangeSelectorView&&e.selectedRangeStart?e.selectedRangeStart.getFullYear():e.isMultiSelectorView&&Array.isArray(e.value)&&f(e.value[0])?e.value[0].getFullYear():f(e.minAllowedDate)?e.minAllowedDate.getFullYear():f(e.maxAllowedDate)?e.maxAllowedDate.getFullYear():e.today.getFullYear()),d=u[0],g=u[1];Object(n.useEffect)((function(){f(e.viewDate)&&(o(e.viewDate.getMonth()),g(e.viewDate.getFullYear()))}),[e.viewDate]);var m=Object(n.useCallback)((function(t){!e.lockView&&o(t)}),[e.lockView,o]),h=Object(n.useCallback)((function(t){!e.lockView&&g(t)}),[e.lockView,g]),v=Object(n.useCallback)((function(t){!e.lockView&&i(t)}),[e.lockView,i]),w=Object(n.useState)(O(d)),b=w[0],E=w[1];Object(n.useEffect)((function(){E(O(d))}),[d,E]);var D=Object(n.useMemo)((function(){return[e=b,e+19];var e}),[b]),S=D[0],_=D[1],R=Object(n.useCallback)((function(){var e;"month_dates"===r&&(0===s&&g(p(d)),m(y(s)));"years"===r&&E(1===(e=b)?1:O(e-1)),"months"===r&&h(1!==d?d-1:1)}),[m,s,h,d,r,E,b]),C=Object(n.useCallback)((function(){"month_dates"===r&&(11===s&&h(M(d)),m(k(s)));"years"===r&&E(O(b+20)),"months"===r&&h(M(d))}),[m,s,h,d,r,E,b]),j=Object(n.useRef)(null),x=Object(n.useRef)([]),Y=Object(n.useState)(!1),F=Y[0],I=Y[1];return Object(n.useEffect)((function(){if(F){var e=j.current;if(e){x.current=e?Array.from(e.querySelectorAll('[role="grid"] button:not([disabled])')):[];var t=x.current[0],a=x.current[x.current.length-1],n=e.querySelector('[role="grid"]'),l=e.querySelector('[role="grid"] .arc_selected button')||e.querySelector('[role="grid"] .arc_range_end button')||e.querySelector('[role="grid"] .arc_range_start button'),i=e.querySelector('[role="grid"] .arc_active button'),c=e.querySelector("header .arc_header_nav-prev"),s=e.querySelector("header .arc_header_nav-next"),o=e.querySelector("header .arc_header_label");n&&!n.contains(document.activeElement)&&(l?l.focus():i?i.focus():t.focus());var u=function(e,a){var n=a===t;return e?function(e){var t=x.current.indexOf(e);return n?t<x.current.length-1?x.current[t+1]:a:t-1>-1?x.current[t-1]:a}(e):null};return e.addEventListener("keydown",d,{capture:!0}),function(){e.removeEventListener("keydown",d,{capture:!0})}}}function d(n){var l=n.target,i=x.current&&x.current.find((function(e){return e===l}));if(i){if("Tab"===n.key)n.preventDefault(),(g=u(i,t))===t?null===c||void 0===c||c.focus():document.activeElement===s?null===t||void 0===t||t.focus():document.activeElement===o?null===s||void 0===s||s.focus():document.activeElement===c?null===o||void 0===o||o.focus():null===g||void 0===g||g.focus();if("ArrowDown"===n.key){n.preventDefault();for(var d="month_dates"===r?7:"months"===r?3:5,g=i;d>0;)g=u(g,t),d--;null===g||void 0===g||g.focus()}if("ArrowUp"===n.key){n.preventDefault();d="month_dates"===r?7:"months"===r?3:5;for(var g=i;d>0;)g=u(g,a),d--;null===g||void 0===g||g.focus()}if("ArrowLeft"===n.key)n.preventDefault(),null===(g=u(i,a))||void 0===g||g.focus();if("ArrowRight"===n.key)n.preventDefault(),null===(g=u(i,t))||void 0===g||g.focus();"Home"===n.key&&(n.preventDefault(),t.focus()),"End"===n.key&&(n.preventDefault(),a.focus()),"Escape"===n.key&&(n.preventDefault(),i.blur(),null===e||void 0===e||e.blur())}}}),[j,r,F,s]),l.a.createElement("div",{onFocus:function(){!F&&I(!0)},onBlur:function(e){e.currentTarget.contains(e.target)||I(!1)},style:t.root.arc,className:"arc",ref:j},l.a.createElement(N,{onClickPrev:R,onClickNext:C,onChangeViewType:v,viewType:r,viewingMonth:s,viewingYear:d,yearMatrixStart:S,yearMatrixEnd:_}),l.a.createElement("div",{style:ie,className:"arc_view"},"months"===r&&l.a.createElement(L,{onChangeViewType:v,onChangeViewingMonth:m}),"years"===r&&l.a.createElement(G,{onChangeViewType:v,onChangeViewingYear:h,yearMatrixStart:S,yearMatrixEnd:_}),"month_dates"===r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(X,{weekStartIndex:e.weekStartIndex,weekendIndices:e.weekendIndices}),l.a.createElement(re,{isRangeSelectModeOn:e.isRangeSelectModeOn,setIsRangeSelectModeOn:e.setIsRangeSelectModeOn,skipDisabledDatesInRange:e.skipDisabledDatesInRange,allowFewerDatesThanRange:e.allowFewerDatesThanRange,selectedDate:e.selectedDate,selectedRangeStart:e.selectedRangeStart,selectedRangeEnd:e.selectedRangeEnd,lockView:e.lockView,newSelectedRangeStart:e.newSelectedRangeStart,weekStartIndex:e.weekStartIndex,onChangeViewingYear:h,onChangeViewingMonth:m,onChangenSelectedMultiDates:e.onChangenSelectedMultiDates,onChangenNewSelectedRangeEnd:e.onChangenNewSelectedRangeEnd,onChangenNewSelectedRangeStart:e.onChangenNewSelectedRangeStart,onChangenSelectedRangeEnd:e.onChangenSelectedRangeEnd,onChangenSelectedRangeStart:e.onChangenSelectedRangeStart,onChangenSelectedDate:e.onChangenSelectedDate,onPartialRangeSelect:e.onPartialRangeSelect,onEachMultiSelect:e.onEachMultiSelect,newSelectedRangeEnd:e.newSelectedRangeEnd,isRangeSelectorView:e.isRangeSelectorView,fixedRangeLength:e.fixedRangeLength,isFixedRangeView:e.isFixedRangeView,isDisabled:e.isDisabled,checkIfWeekend:e.checkIfWeekend,selectedMultiDates:e.selectedMultiDates,isMultiSelectorView:e.isMultiSelectorView,viewingMonth:s,today:e.today,maxAllowedDate:e.maxAllowedDate,minAllowedDate:e.minAllowedDate,weekendIndices:e.weekendIndices,skipWeekendsInRange:e.skipWeekendsInRange,onChange:e.onChange,viewingYear:d,disableFuture:e.disableFuture,disablePast:e.disablePast,highlights:e.highlights,disableToday:e.disableToday}))))}var se=[],oe={display:"inline-flex"};function ue(e,t){var a=e.value,r=e.isMultiSelector,i=e.className,c=void 0===i?"":i,s=e.isRangeSelector,o=e.useDarkMode,u=void 0!==o&&o,g=e.weekends,m=e.highlights,w=void 0===m?se:m,b=e.skipWeekendsInRange,E=void 0!==b&&b,D=e.viewDate,S=e.allowFewerDatesThanRange,y=void 0!==S&&S,k=e.startOfWeek,p=void 0===k?1:k,M=e.maxAllowedDate,_=e.skipDisabledDatesInRange,C=void 0!==_&&_,O=e.minAllowedDate,j=e.fixedRange,x=e.isDisabled,Y=e.onPartialRangeSelect,F=e.onEachMultiSelect,N=e.onChange,I=e.lockView,V=void 0!==I&&I,T=e.disableFuture,A=void 0!==T&&T,W=e.size,P=void 0===W?276:W,L=e.fontSize,z=void 0===L?16:L,q=e.disablePast,B=void 0!==q&&q,H=e.disableToday,J=void 0!==H&&H,U=e.showDualCalendar,G=void 0!==U&&U,K=Object(n.useState)(new Date)[0],Q=Object(n.useState)(!!s)[0],X=Object(n.useState)(Q&&!!G)[0],Z=Object(n.useState)(!Q&&!!r)[0],$=Object(n.useState)(!!(Q&&"number"===typeof j&&j>0))[0],ee=Object(n.useState)(!Q&&!Z)[0],te=Object(n.useState)(!1),ae=te[0],ne=te[1];if(ee&&Array.isArray(a))throw new Error("`value` should an instance of the Date class. Provided value is an Array.");var le=Object(n.useState)($?j:1)[0],re=Object(n.useState)(p)[0],ie=Object(n.useState)((function(){return Array.isArray(g)&&(g.every((function(e){return"number"===typeof e}))||0===g.length)?g:function(e){return 0===e?[6,0]:1===e?[5,6]:2===e?[4,5]:3===e?[3,4]:4===e?[2,3]:5===e?[1,2]:[0,1]}(re)}))[0],ue=Object(n.useState)((function(){if(ee&&f(a)){var e=a.getFullYear(),t=a.getMonth(),n=a.getDate();return new Date(e,t,n)}})),de=ue[0],ge=ue[1],me=Object(n.useState)((function(){return Z&&Array.isArray(a)&&a.every(f)?a.reduce((function(e,t){return f(t)&&(e[h(t)]=t),e}),{}):{}})),he=me[0],ve=me[1],fe=Object(n.useState)((function(){if(Q&&Array.isArray(a)&&f(a[0])){var e=a[0].getFullYear(),t=a[0].getMonth(),n=a[0].getDate();return new Date(e,t,n)}})),we=fe[0],be=fe[1],Ee=Object(n.useState)((function(){if(Q&&we&&Array.isArray(a)&&f(a[1])&&v(a[1],we)){var e=a[1].getFullYear(),t=a[1].getMonth(),n=a[1].getDate();return new Date(e,t,n)}})),De=Ee[0],Se=Ee[1],ye=Object(n.useState)(we),ke=ye[0],pe=ye[1],Me=Object(n.useState)(De),_e=Me[0],Re=Me[1],Ce=Object(n.useState)((function(){return f(M)?M:K}))[0],Oe=Object(n.useState)((function(){return f(O)?O:K}))[0],je=Object(n.useState)((function(){return!!f(M)&&(!f(O)||v(M,O))}))[0],xe=Object(n.useState)((function(){return!!f(O)&&(!f(M)||v(M,O))}))[0],Ye=Object(n.useMemo)((function(){return function(e){var t=e.disablePast,a=e.disableToday,n=e.disableFuture,l=e.customDisabledCheck,r=e.maxDate,i=e.minDate,c=e.applyMax,s=e.applyMin,o=new Date,u=o.getFullYear(),d=o.getMonth(),g=o.getDate();return function(e){if(t){if(e.getFullYear()<u)return!0;if(e.getFullYear()===u&&e.getMonth()<d)return!0;if(e.getFullYear()===u&&e.getMonth()===d&&e.getDate()<g)return!0}if(a&&e.getFullYear()===u&&e.getMonth()===d&&e.getDate()===g)return!0;if(n){if(e.getFullYear()>u)return!0;if(e.getFullYear()===u&&e.getMonth()>d)return!0;if(e.getFullYear()===u&&e.getMonth()===d&&e.getDate()>g)return!0}return!(!c||!v(e,r))||!(!s||!v(i,e))||"function"===typeof l&&l(e)}}({disablePast:B,disableToday:J,disableFuture:A,customDisabledCheck:x,maxDate:Ce,minDate:Oe,applyMax:je,applyMin:xe})}),[je,xe,A,B,J,x,Ce,Oe]),Fe=Object(n.useMemo)((function(){return function(e,t){var a=e.reduce((function(e,t){return e[t]=1,e}),{});return function(e){return 1===a[R(e.getDay(),t)]}}(ie,re)}),[re,ie]),Ne=Object(n.useMemo)((function(){return{isDualMode:X,value:a,viewDate:D,useDarkMode:u,className:c,isNormalView:ee,size:P,fontSize:z,weekStartIndex:re,weekendIndices:ie,isRangeSelectModeOn:ae,setIsRangeSelectModeOn:ne,skipDisabledDatesInRange:!!C,allowFewerDatesThanRange:!!y,selectedDate:de,selectedRangeStart:we,selectedRangeEnd:De,lockView:!!V,newSelectedRangeStart:ke,onChangenSelectedMultiDates:ve,onChangenNewSelectedRangeEnd:Re,onChangenNewSelectedRangeStart:pe,onChangenSelectedRangeEnd:Se,onChangenSelectedRangeStart:be,onChangenSelectedDate:ge,onPartialRangeSelect:Y,onEachMultiSelect:F,newSelectedRangeEnd:_e,isRangeSelectorView:Q,fixedRangeLength:le,isFixedRangeView:$,isDisabled:Ye,checkIfWeekend:Fe,selectedMultiDates:he,isMultiSelectorView:Z,today:K,maxAllowedDate:M,minAllowedDate:O,skipWeekendsInRange:!!E,onChange:N,disableFuture:A,disablePast:B,highlights:w,disableToday:J}}),[y,Ye,Fe,c,A,B,J,le,z,w,D,X,$,Z,ee,ae,Q,V,M,O,_e,ke,N,F,Y,de,he,De,we,P,C,E,re,K,u,a,ie]),Ie=Object(n.useMemo)((function(){return"string"===typeof c?"arc_root"+(u?" arc_dark":"")+(X?" arc_dual":"")+" "+c:"arc_root"+(u?" arc_dark":"")+(X?" arc_dual":"")}),[c,u,X]);return l.a.createElement("div",{className:Ie,style:oe,ref:t},X?l.a.createElement(l.a.Fragment,null,l.a.createElement(ce,d({isSecondary:!1},Ne)),l.a.createElement(ce,d({isSecondary:!0},Ne))):l.a.createElement(ce,d({isSecondary:!1},Ne)))}var de=l.a.forwardRef(ue),ge=function(e){return function(e){var t={YYYY:!0,MM:!0,DD:!0},a=e.split("-");if(3!==a.length)throw new Error("Date format is invalid.");if(!a.every((function(e){return t[e]})))throw new Error("Date format uses unknown parts.");return function(e,t){if(f(e)){var n="";return a.forEach((function(a,l){"YYYY"===a&&(n+=e.getFullYear()),"MM"===a&&(n+=e.getMonth()),"DD"===a&&(n+=e.getDate()),2!==l&&(n+=t)})),n}}}(e||"DD-MM-YYYY")},me=a(13);a(29);function he(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),s=Object(c.a)(i,2),d=(s[0],s[1]),g=Object(n.useCallback)((function(e){d(e)}),[d]),m=Object(n.useState)({}),h=Object(c.a)(m,2),v=(h[0],h[1]),f=Object(n.useCallback)((function(e){v(e)}),[v]),w=Object(n.useState)({}),b=Object(c.a)(w,2),E=(b[0],b[1]),D=Object(n.useCallback)((function(e){E(e)}),[E]),S=Object(n.useState)({}),y=Object(c.a)(S,2),k=(y[0],y[1]),p=Object(n.useCallback)((function(e){k(e)}),[k]),M=Object(n.useState)({}),_=Object(c.a)(M,2),R=(_[0],_[1]),C=Object(n.useCallback)((function(e){R(e)}),[R]),O=Object(n.useState)({}),j=Object(c.a)(O,2),x=(j[0],j[1]),Y=Object(n.useCallback)((function(e){x(e)}),[x]),F=Object(n.useState)({}),N=Object(c.a)(F,2),I=(N[0],N[1]),V=Object(n.useCallback)((function(e){I(e)}),[I]),T=Object(n.useState)({}),A=Object(c.a)(T,2),W=(A[0],A[1]),P=Object(n.useCallback)((function(e){W(e)}),[W]),L=Object(n.useState)({}),z=Object(c.a)(L,2),q=(z[0],z[1]),B=Object(n.useCallback)((function(e){q(e)}),[q]),H=Object(n.useState)({}),J=Object(c.a)(H,2),U=J[0],G=J[1],K=Object(n.useCallback)((function(e){G(e)}),[G]),Q=Object(n.useState)({}),X=Object(c.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useCallback)((function(e){$(e)}),[$]),te=Object(n.useState)({}),ae=Object(c.a)(te,2),ne=(ae[0],ae[1]),le=Object(n.useCallback)((function(e){ne(e)}),[ne]),re=Object(n.useState)([]),ie=Object(c.a)(re,2),ce=(ie[0],ie[1]),se=Object(n.useCallback)((function(e){ce(e)}),[ce]),oe=Object(n.useState)({}),ue=Object(c.a)(oe,2),he=(ue[0],ue[1]),ve=Object(n.useCallback)((function(e){he(e)}),[he]),fe=Object(n.useState)(400),we=Object(c.a)(fe,2),be=we[0],Ee=we[1],De=Object(n.useState)({}),Se=Object(c.a)(De,2),ye=(Se[0],Se[1]),ke=Object(n.useCallback)((function(e){ye(e)}),[ye]),pe=Object(n.useState)(new Date),Me=Object(c.a)(pe,2),_e=Me[0],Re=Me[1],Ce=new Date(2021,7,28),Oe=new Date(2021,7,4);return l.a.createElement("div",{className:"demo"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Default")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{onChange:B})))),l.a.createElement("div",null,l.a.createElement("div",{className:"desc"},l.a.createElement("p",null,"Multiple Dates View")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{value:[new Date(2021,6,22),new Date(2021,6,25),new Date(2021,6,9)],isMultiSelector:!0,disableToday:!0,onChange:g})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Range Select View")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{showDualCalendar:!0,isRangeSelector:!0,disableToday:!0,value:[new Date(2021,0,8),new Date(2021,0,20)],onChange:D})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Range Select View With Min-Max Allowed Dates")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{isRangeSelector:!0,maxAllowedDate:Ce,minAllowedDate:Oe,disableToday:!0,onChange:f})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Fixed Range View (6 Days)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{isRangeSelector:!0,fixedRange:6,onChange:se})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Highlight Custom Dates")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{initialViewDate:new Date(2020,5,6),highlights:[new Date(2020,5,6),new Date(2020,5,12),new Date(2020,5,16),new Date(2020,5,24)],onChange:ve})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can disable custom dates (here disabled if (date % 4 === 0))")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{isDisabled:function(e){return e.getDate()%4===0},onChange:ke})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can enable skipping disabled dates when doing fixed range(5 here) selections")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{isRangeSelector:!0,fixedRange:5,skipDisabledDatesInRange:!0,isDisabled:function(e){return e.getDate()%3===0},onChange:V})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can enable/disable selecting fewer dates than range if dates are not available"),l.a.createElement("small",null,"Normally it will select 4 dates after the first one but when future dates are disabled then it can even select lesser than 4 dates. This behaviour can be disabled.")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{allowFewerDatesThanRange:!0,disableFuture:!0,isRangeSelector:!0,fixedRange:4,onChange:se})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can change start day of the week (Wed here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{viewDate:_e,startOfWeek:3,onChange:p}))),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){Re(new Date(2016,1,13))}},"Move to 2016, Feb, 13"),l.a.createElement("button",{style:{marginLeft:"16px"},onClick:function(){Re(new Date)}},"Move to Today"))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can specify weekend days (Fri, Sat, Sun here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{weekends:[4,5,6],onChange:C})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can disable highlighting Weekends")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{weekends:[],onChange:C})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set if past,today,future is disabled by simple props")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{disablePast:!0,onChange:Y})),l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{disableToday:!0,value:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),onChange:V})),l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{disableFuture:!0,onChange:P})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can lock the calendar to a specific month/year")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{lockView:!0,onChange:Y})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set output date format (YYYY-DD-MM here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{onChange:K})),l.a.createElement("div",{className:"json"},ge("YYYY-DD-MM")(U,"-")))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set output date separator (# here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{onChange:ee})),l.a.createElement("div",{className:"json"},l.a.createElement("div",{className:"json"},ge("YYYY-DD-MM")(Z,"#"))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can be rendered inside a popover")),l.a.createElement("div",{style:{justifyContent:"flex-start",width:"202px"}},l.a.createElement("div",{className:"input"},l.a.createElement("input",{value:ge("YYYY-DD-MM")(U,"#")}),l.a.createElement(me.Popover,{isOpen:a,padding:6,positions:["bottom","top","left","right"],content:l.a.createElement(de,{value:U,onChange:function(e){G(e),r(!1)}})},l.a.createElement("div",{onClick:function(){return r(!a)}},"\ud83d\uddd3"))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can Set Initial Month&Date View To Show (Sept, 2020 here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(de,{viewDate:new Date(2020,8,9),onChange:le})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Easy to theme using CSS variables")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(de,{className:"green",isRangeSelector:!0})),l.a.createElement("div",null,l.a.createElement(de,{className:"brown"})),l.a.createElement("div",null,l.a.createElement(de,{className:"violet",isRangeSelector:!0,fixedRange:4})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"In-built and customizable dark mode")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(de,{useDarkMode:!0,isRangeSelector:!0})),l.a.createElement("div",null,l.a.createElement(de,{useDarkMode:!0})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can easily adjust scale")),l.a.createElement("div",null,l.a.createElement("div",{style:{width:"300px",marginTop:"24px",marginBottom:"24px"}},l.a.createElement("p",{style:{marginBottom:"16px"}},"Use slider to update size"),l.a.createElement(u.a,{step:50,min:350,max:1200,value:be,onChange:function(e){return Ee(e)}})),l.a.createElement("div",null,l.a.createElement(de,{fontSize:20,size:be,isRangeSelector:!0})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can be rendered on the server-side"),l.a.createElement("small",null,"The following markup is created using ReactDomServer.renderToStaticMarkup() method")),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.a.renderToStaticMarkup(l.a.createElement(de,{value:[new Date(2021,6,22),new Date(2021,6,25),new Date(2021,6,9)],isMultiSelector:!0,disableToday:!0,onChange:g}))}})))}i.a.render(l.a.createElement(he,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e290b4d2.chunk.js.map