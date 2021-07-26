/*! For license information please see main.d9a973cd.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-calendar-docs"]=this["webpackJsonpreact-calendar-docs"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=(a(13),a(14),a(1)),s=a(6),u=a.n(s),o={0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa"},d={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};function g(e){return""+e.getFullYear()+e.getMonth()+e.getDate()}function m(e,t){if(t.getFullYear()<e.getFullYear())return!0;if(t.getFullYear()===e.getFullYear()){if(t.getMonth()<e.getMonth())return!0;if(t.getMonth()===e.getMonth()&&t.getDate()<e.getDate())return!0}return!1}function h(e){return"undefined"!==typeof e&&null!==e&&e.getTime&&!isNaN(e.getTime())}function v(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function w(e,t,a){return e.getFullYear()<=a.getFullYear()&&a.getFullYear()<=t.getFullYear()&&(e.getFullYear()<a.getFullYear()&&a.getFullYear()<t.getFullYear()||(e.getFullYear()===t.getFullYear()?e.getMonth()<=a.getMonth()&&a.getMonth()<=t.getMonth()&&(e.getMonth()<a.getMonth()&&a.getMonth()<t.getMonth()||(e.getMonth()===t.getMonth()?e.getDate()<=a.getDate()&&a.getDate()<=t.getDate()&&a.getMonth()===t.getMonth():e.getMonth()===a.getMonth()?e.getDate()<=a.getDate():t.getMonth()===a.getMonth()&&a.getDate()<=t.getDate())):e.getFullYear()===a.getFullYear()?a.getMonth()>e.getMonth()||a.getMonth()===e.getMonth()&&a.getDate()>=e.getDate():t.getFullYear()===a.getFullYear()&&(a.getMonth()<t.getMonth()||a.getMonth()===t.getMonth()&&a.getDate()<=t.getDate())))}function f(e){return e%4===0&&e%100!==0||e%400===0}function b(e,t){return{0:31,1:f(e)?29:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31}[t]}function E(e){return b(e.getFullYear(),e.getMonth())===e.getDate()}function y(e){return 0===e?11:e-1}function D(e){return 11===e?0:e+1}function _(e){return 1===e?1:e-1}function M(e){return e+1}function S(e){return function(e){return 11===e.getMonth()&&E(e)}(e)?new Date(e.getFullYear()+1,0,1):E(e)?new Date(e.getFullYear(),e.getMonth()+1,1):new Date(e.getFullYear(),e.getMonth(),e.getDate()+1)}function p(e,t){return void 0===t&&(t=0),e>=t?e-t:6-t+1+e}function k(e,t){var a=6-t;return e<=a?e+t:e-a-1}function C(e){return e%20===0?20*(e/20-1)+1:20*Number((e/20).toFixed(0))+1}function O(e){for(var t=e.isRangeSelectModeOn,a=e.isRangeView,n=e.selectedDate,l=e.selectedRangeStart,r=e.selectedRangeEnd,i=e.highlightsMap,c=e.newSelectedRangeStart,s=e.newSelectedRangeEnd,u=e.isSelectMultiDate,o=e.selectedMultiDates,d=e.yearInView,g=e.monthInView,m=e.startOfTheWeek,h=e.isDisabled,v=e.checkIfWeekend,w=[[],[],[],[],[],[]],f=function(e,t,a){var n=new Date;return n.setDate(1),n.setMonth(t),n.setFullYear(e),p(n.getDay(),a)}(d,g,m),E=new Date,M=b(d,g),S=0===g,k=11===g,C=b(S?_(d):d,y(g)),O=0,R=0,Y=C-(f-1);Y<=C;Y++)7===R&&(R=0,O++),w[O].push(j({currDate:new Date(S?_(d):d,y(g),Y),activeMonthInView:!1,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:u,row:O,weekColumn:R,checkIfWeekend:v,today:E,selectedMultiDates:o,startOfTheWeek:m})),R++;for(var F=1;F<=M;F++)7===R&&(R=0,O++),w[O].push(j({currDate:new Date(d,g,F),activeMonthInView:!0,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:u,row:O,weekColumn:R,checkIfWeekend:v,today:E,selectedMultiDates:o,startOfTheWeek:m})),R++;for(var x=1;w[5].length<7;)7===R&&(R=0,O++),w[O].push(j({currDate:new Date(k?d+1:d,D(g),x),activeMonthInView:!1,highlightsMap:i,newSelectedRangeEnd:s,newSelectedRangeStart:c,selectedDate:n,selectedRangeEnd:r,selectedRangeStart:l,isDisabled:h,isRangeSelectModeOn:t,isRangeView:a,isSelectMultiDate:u,row:O,weekColumn:R,checkIfWeekend:v,today:E,selectedMultiDates:o,startOfTheWeek:m})),R++,x++;return w}function j(e){var t=e.currDate,a=e.activeMonthInView,n=e.highlightsMap,l=e.newSelectedRangeEnd,r=e.newSelectedRangeStart,i=e.selectedDate,c=e.selectedRangeEnd,s=e.selectedRangeStart,u=e.isDisabled,o=e.isRangeSelectModeOn,d=e.isRangeView,f=e.isSelectMultiDate,b=e.row,E=e.weekColumn,y=e.checkIfWeekend,D=e.today,_=e.selectedMultiDates,M=e.startOfTheWeek;return{date:t,dayOfMonth:t.getDate(),month:t.getMonth(),activeMonthInView:a,isHighlight:1===n[g(t)],isInRange:!!d&&(o?!(!h(r)||!h(l))&&(m(l,r)?w(r,l,t):w(l,r,t)):!!s&&!!c&&w(s,c,t)),isRangeStart:!!d&&(o?!!h(r)&&v(r,t):!!s&&v(s,t)),isRangeEnd:!!d&&(!o&&(!!c&&v(c,t))),year:t.getFullYear(),dayOfWeek:k(E,M),isWeekend:y(t),isToday:v(t,D),isFirstRow:0===b,isLastRow:5===b,isFirsColumn:0===E,isLastColumn:6===E,isSelected:f?!!_[g(t)]:!d&&(!!i&&(t.getMonth()===i.getMonth()&&t.getFullYear()===i.getFullYear()&&t.getDate()===i.getDate())),isDisabled:u(t)}}function R(e){var t=e.onClickPrev,a=e.onChangeViewType,n=e.onClickNext,r=e.viewType,i=e.viewingMonth,c=e.viewingYear,s=e.yearMatrixEnd,u=e.yearMatrixStart,o=e.layoutCalcs;return l.a.createElement("header",{style:o.root.arc_header,className:"arc_header"},l.a.createElement("button",{style:o.header.arc_header_nav,className:"arc_header_nav arc_header_nav-prev",onClick:t},l.a.createElement("span",null,"\u2190")),"month_dates"===r?l.a.createElement("button",{style:o.header.arch_header_label,className:"arc_header_label arc_header_label-days-of-month",onClick:function(){return a("years")}},l.a.createElement("div",null,l.a.createElement("span",null,d[i])),l.a.createElement("div",null,l.a.createElement("span",null,c))):"months"===r?l.a.createElement("button",{style:o.header.arch_header_label,className:"arc_header_label arc_header_label-months"},l.a.createElement("div",{onClick:function(){return a("years")}},l.a.createElement("span",null,c))):l.a.createElement("button",{style:o.header.arch_header_label,className:"arc_header_label arc_header_label-years",onClick:function(){return a("month_dates")}},l.a.createElement("div",null,l.a.createElement("span",null,u,"-",s))),l.a.createElement("button",{style:o.header.arc_header_nav,className:"arc_header_nav arc_header_nav-next",onClick:n},l.a.createElement("span",null,"\u2192")))}var Y=Object(n.memo)(R);function F(e){var t=e.onChangeViewingMonth,a=e.onChangeViewType,r=e.layoutCalcs,i=Object(n.useMemo)((function(){return function(e){var t=Array.from({length:12},(function(t,a){return{month:a,isCurrentMonth:(new Date).getMonth()===a,isSelectedMonth:1===e[a]}}));return[t.slice(0,3),t.slice(3,6),t.slice(6,9),t.slice(9,12)]}({})}),[]);return l.a.createElement("div",{style:r.root["arc_view-months"],className:"arc_view-months"},i.map((function(e,n){return l.a.createElement("div",{style:r.months.arc_view_row,className:"arc_view_row",key:n},e.map((function(e){return l.a.createElement("div",{style:r.months.arc_view_cell,className:"arc_view_cell"+(e.isCurrentMonth?" arc_this_month":""),key:e.month},l.a.createElement("button",{style:r.months.arc_view_cell_value_button,onClick:function(){t(e.month),a("month_dates")}},d[e.month]))})))})))}var x=Object(n.memo)(F);function N(e){var t=e.onChangeViewType,a=e.onChangeViewingYear,r=e.yearMatrixStart,i=e.layoutCalcs,c=Object(n.useMemo)((function(){return function(e,t){var a=Array.from({length:20},(function(a,n){return{year:e+n,isCurrentYear:(new Date).getFullYear()===e+n,isSelectedYear:1===t[e+n]}}));return[a.slice(0,5),a.slice(5,10),a.slice(10,15),a.slice(15,20)]}(r,{})}),[r]);return l.a.createElement("div",{style:i.root["arc_view-years"],className:"arc_view-years"},c.map((function(e,n){return l.a.createElement("div",{style:i.years.arc_view_row,className:"arc_view_row",key:n},e.map((function(e){return l.a.createElement("div",{style:i.years.arc_view_cell,className:"arc_view_cell"+(e.isCurrentYear?" arc_this_year":""),key:e.year},l.a.createElement("button",{style:i.months.arc_view_cell_value_button,onClick:function(){a(e.year),t("months")}},e.year))})))})))}var I=Object(n.memo)(N);function V(e){var t=e.weekStartIndex,a=e.weekendIndices,r=e.layoutCalcs,i=Object(n.useMemo)((function(){return function(e){void 0===e&&(e=0);var t=Object.keys(o).slice(e,7).concat(Object.keys(o).slice(0,e));return{map:t.reduce((function(e,t,a){return e[Number(a)]=o[Number(t)],e}),{}),order:t}}(t)}),[t]),c=i.order,s=i.map,u=Object(n.useMemo)((function(){return a.reduce((function(e,t){return e[t]=1,e}),{})}),[a]);return l.a.createElement("ul",{style:r.weekdaysRow.arc_view_weekdays,className:"arc_view_weekdays"},c.map((function(e,t){return l.a.createElement("li",{style:r.weekdaysRow.arc_view_weekdays_cell,key:e,className:"arc_view_weekdays_cell"+(u[t]?" arc_wknd":"")},l.a.createElement("div",{style:r.weekdaysRow.arc_view_weekdays_cell_value},l.a.createElement("span",null,s[t])))})))}var T=Object(n.memo)(V),A=function(){return(A=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};function W(e){var t=e.selectedDate,a=e.selectedRangeStart,r=e.selectedRangeEnd,i=e.newSelectedRangeStart,c=e.weekStartIndex,s=e.onChangeViewingYear,u=e.onChangeViewingMonth,o=e.newSelectedRangeEnd,d=e.isRangeSelectorView,w=e.skipDisabledDatesInRange,f=e.setIsRangeSelectModeOn,b=e.fixedRangeLength,E=e.isFixedRangeView,y=e.isRangeSelectModeOn,D=e.isDisabled,_=e.onChangenSelectedMultiDates,M=e.selectedMultiDates,p=e.isMultiSelectorView,k=e.today,C=e.viewingMonth,j=e.onChangenNewSelectedRangeEnd,R=e.onChangenNewSelectedRangeStart,Y=e.onChangenSelectedRangeEnd,F=e.onChangenSelectedRangeStart,x=e.onChangenSelectedDate,N=e.layoutCalcs,I=e.weekendIndices,V=e.onChange,T=e.viewingYear,W=e.allowFewerDatesThanRange,P=e.disableFuture,L=e.disablePast,z=e.lockView,J=e.checkIfWeekend,B=e.highlights,H=e.disableToday,q=Object(n.useState)((function(){return Array.isArray(B)?B.filter((function(e){return h(e)})).reduce((function(e,t){return e[g(t)]=1,e}),{}):{}}))[0],G=Object(n.useMemo)((function(){return O({selectedDate:t,selectedRangeStart:a,selectedRangeEnd:r,newSelectedRangeStart:i,newSelectedRangeEnd:o,checkIfWeekend:J,isRangeView:d||E,isRangeSelectModeOn:y,weekendIndexes:I,selectedMultiDates:M,highlightsMap:q,isSelectMultiDate:p,yearInView:T,monthInView:C,startOfTheWeek:c,disableFuture:P,disablePast:L,disableToday:H,isDisabled:D})}),[t,a,r,i,o,d,E,y,J,I,M,q,p,T,C,c,P,L,H,D]),K=Object(n.useCallback)((function(e){var t=e.date;if(!(z&&t.getMonth()!==C)){if(d&&!E)if(y&&i){var a=new Date(i.getFullYear(),i.getMonth(),i.getDate());if(m(a,t)){F(t),Y(a);var n=t,l=a;V&&V([n,l])}else{F(a),Y(t);n=a,l=t;V&&V([n,l])}j(void 0),f(!1)}else R(t),j(void 0),f(!0);else if(E){F(t);var r=function(e,t,a){for(var n=t,l=e,r=!1,i=0;n>0;){if(1500===i){r=!0;break}var c=S(l);if(a.upperLimit&&v(a.upperLimit,c)){r=!0;break}l=c,a.skipDisabledDatesInRange?a.skipDisabledDatesInRange&&!a.isDisabled(c)&&n--:n--,i++}return{endDate:l,limitReached:r}}(t,b,{isDisabled:D,skipDisabledDatesInRange:w,upperLimit:z?new Date(t.getFullYear(),t.getMonth()+1,1):P?S(k):void 0});l=r.endDate;r.limitReached&&!W?(F(void 0),Y(void 0)):(Y(l),V&&V([t,l]))}else if(p){var c=g(t),o=A({},M);M[c]?o[c]=void 0:o[c]=t,_(o),V&&V(Object.keys(o).filter((function(e){return!!o[e]})).map((function(e){return o[e]})))}else x(t),V&&V(t);u(e.month),s(e.year)}}),[z,C,d,E,p,u,s,y,i,j,f,F,Y,V,R,b,D,w,P,k,W,M,_,x]);return l.a.createElement("div",{style:N.dayOfMonth["arc_view-days-of-month"],className:"arc_view-days-of-month",role:"grid"},G.map((function(e,t){return l.a.createElement("div",{style:N.dayOfMonth.arc_view_row,className:"arc_view_row",key:t},e.map((function(e){return l.a.createElement("div",{style:N.dayOfMonth.arc_view_cell,onMouseEnter:function(){d&&y&&j(new Date(e.year,e.month,e.dayOfMonth))},key:e.dayOfMonth,className:"arc_view_cell"+(e.activeMonthInView?" arc_active":"")+(e.isWeekend?" arc_wknd":"")+(e.isToday?" arc_today":"")+(e.isFirstRow?" arc_fr":"")+(e.isToday?" arc_today":"")+(e.isHighlight?" arc_highlight":"")+(e.isLastRow?" arc_lr":"")+(e.isFirsColumn?" arc_fc":"")+(e.isLastColumn?" arc_lc":"")+(e.isSelected&&!d?" arc_selected":"")+(e.isDisabled?" arc_disabled":"")+(e.isInRange?" arc_in_range":"")+(e.isRangeStart?" arc_range_start":"")+(e.isRangeEnd?" arc_range_end":"")+(y?" arc_range_mode":"")},l.a.createElement("div",{style:N.dayOfMonth.arc_view_cell_value,className:"arc_view_cell_value"},l.a.createElement("button",{style:N.dayOfMonth.arc_view_cell_value_button,disabled:e.isDisabled,tabIndex:e.isDisabled?-1:0,onClick:function(){return K(e)}},e.dayOfMonth)))})))})))}var P=Object(n.memo)(W);function L(e){var t=e.value,a=e.isMultiSelector,r=e.className,i=void 0===r?"":r,c=e.isRangeSelector,s=e.useDarkMode,u=void 0!==s&&s,o=e.weekends,d=e.highlights,v=void 0===d?[]:d,w=e.skipWeekendsInRange,f=void 0!==w&&w,b=e.initialViewDate,E=e.allowFewerDatesThanRange,S=void 0!==E&&E,k=e.startOfWeek,O=void 0===k?1:k,j=e.maxAllowedDate,R=e.skipDisabledDatesInRange,F=void 0!==R&&R,N=e.minAllowedDate,V=e.fixedRange,A=e.isDisabled,W=e.onChange,L=e.lockView,z=void 0!==L&&L,J=e.disableFuture,B=void 0!==J&&J,H=e.size,q=void 0===H?276:H,G=e.fontSize,K=void 0===G?16:G,Q=e.disablePast,U=void 0!==Q&&Q,X=e.disableToday,Z=void 0!==X&&X,$=Object(n.useMemo)((function(){return function(e,t){return{root:{arc:{width:e+"px",height:e+"px",fontSize:t+"px",display:"flex",alignItems:"flex-start",flexDirection:"column",boxSizing:"border-box"},arc_view:{height:"88%",width:"100%"},"arc_view-months":{height:"100%"},"arc_view-years":{height:"100%"},arc_header:{height:"12%",padding:"1% 2%",display:"flex",alignTtems:"center",width:"100%"}},weekdaysRow:{arc_view_weekdays:{height:"14.001%",margin:"0 0 3.26% 0",padding:0,display:"flex",width:"100%",listStyle:"none"},arc_view_weekdays_cell:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexBasis:"14.286%",maxWidth:"14.286%"},arc_view_weekdays_cell_value:{width:"65.95%",display:"flex",alignItems:"center",justifyContent:"center"}},dayOfMonth:{"arc_view-days-of-month":{height:"82.179%"},arc_view_row:{height:"16.664%",display:"flex",width:"100%",alignItems:"center"},arc_view_cell:{flexBasis:"14.286%",maxWidth:"14.286%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},arc_view_cell_value:{width:"65.95%",height:"80.5%"},arc_view_cell_value_button:{width:"100%",height:"100%"}},months:{arc_view_row:{height:"24.9%",display:"flex",width:"100%"},arc_view_cell:{flexBasis:"33.33%",maxWidth:"33.33%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},arc_view_cell_value_button:{width:"78px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center"}},years:{arc_view_row:{height:"24.9%",display:"flex",width:"100%"},arc_view_cell:{width:"20%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},arc_view_cell_value_button:{width:"48px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center"}},header:{arc_header_nav:{width:"10.14%",height:"100%",flex:"0 0 auto"},arch_header_label:{width:"65.21%",height:"100%",margin:"0 4.34%",flex:"1 1 auto",display:"flex",justifyContent:"center",alignItems:"center"}}}}(q,K)}),[q,K]),ee=Object(n.useState)(new Date)[0],te=Object(n.useState)(!!c)[0],ae=Object(n.useState)(!te&&!!a)[0],ne=Object(n.useState)(!!(te&&"number"===typeof V&&V>0))[0],le=Object(n.useState)(!te&&!ae)[0],re=Object(n.useState)(!1),ie=re[0],ce=re[1];if(le&&Array.isArray(t))throw new Error("`value` should an instance of the Date class. Provided value is an Array.");var se=Object(n.useState)(ne?V:1)[0],ue=Object(n.useState)(O)[0],oe=Object(n.useState)((function(){return Array.isArray(o)&&(o.every((function(e){return"number"===typeof e}))||0===o.length)?o:function(e){return 0===e?[6,0]:1===e?[5,6]:2===e?[4,5]:3===e?[3,4]:4===e?[2,3]:5===e?[1,2]:[0,1]}(ue)}))[0],de=Object(n.useState)((function(){if(le&&h(t)){var e=t.getFullYear(),a=t.getMonth(),n=t.getDate();return new Date(e,a,n)}})),ge=de[0],me=de[1],he=Object(n.useState)((function(){return ae&&Array.isArray(t)&&t.every(h)?t.reduce((function(e,t){return h(t)&&(e[g(t)]=t),e}),{}):{}})),ve=he[0],we=he[1],fe=Object(n.useState)((function(){if(te&&Array.isArray(t)&&h(t[0])){var e=t[0].getFullYear(),a=t[0].getMonth(),n=t[0].getDate();return new Date(e,a,n)}})),be=fe[0],Ee=fe[1],ye=Object(n.useState)((function(){if(te&&be&&Array.isArray(t)&&h(t[1])&&m(t[1],be)){var e=t[1].getFullYear(),a=t[1].getMonth(),n=t[1].getDate();return new Date(e,a,n)}})),De=ye[0],_e=ye[1],Me=Object(n.useState)(be),Se=Me[0],pe=Me[1],ke=Object(n.useState)(De),Ce=ke[0],Oe=ke[1],je=Object(n.useState)("month_dates"),Re=je[0],Ye=je[1],Fe=Object(n.useState)(h(b)?b.getMonth():le&&h(t)?t.getMonth():te&&be?be.getMonth():ae&&Array.isArray(t)&&h(t[0])?t[0].getMonth():ee.getMonth()),xe=Fe[0],Ne=Fe[1],Ie=Object(n.useState)(h(b)?b.getFullYear():le&&h(t)?t.getFullYear():te&&be?be.getFullYear():ae&&Array.isArray(t)&&h(t[0])?t[0].getFullYear():ee.getFullYear()),Ve=Ie[0],Te=Ie[1],Ae=Object(n.useCallback)((function(e){!z&&Ne(e)}),[z,Ne]),We=Object(n.useCallback)((function(e){!z&&Te(e)}),[z,Te]),Pe=Object(n.useCallback)((function(e){!z&&Ye(e)}),[z,Ye]),Le=Object(n.useState)(C(Ve)),ze=Le[0],Je=Le[1];Object(n.useEffect)((function(){Je(C(Ve))}),[Ve,Je]);var Be=Object(n.useMemo)((function(){return[e=ze,e+19];var e}),[ze]),He=Be[0],qe=Be[1],Ge=Object(n.useCallback)((function(){var e;"month_dates"===Re&&(0===xe&&Te(_(Ve)),Ae(y(xe)));"years"===Re&&Je(1===(e=ze)?1:C(e-1)),"months"===Re&&We(1!==Ve?Ve-1:1)}),[Ae,xe,We,Ve,Re,Je,ze]),Ke=Object(n.useCallback)((function(){"month_dates"===Re&&(11===xe&&We(M(Ve)),Ae(D(xe)));"years"===Re&&Je(C(ze+20)),"months"===Re&&We(M(Ve))}),[Ae,xe,We,Ve,Re,Je,ze]),Qe=Object(n.useMemo)((function(){return"string"===typeof i?"arc "+(u?"dark":"")+" "+i:"arc "+(u?"dark":"")}),[i,u]),Ue=Object(n.useState)((function(){return h(j)?j:ee}))[0],Xe=Object(n.useState)((function(){return h(N)?N:ee}))[0],Ze=Object(n.useState)((function(){return!!h(j)&&(!h(N)||m(j,N))}))[0],$e=Object(n.useState)((function(){return!!h(N)&&(!h(j)||m(j,N))}))[0],et=Object(n.useMemo)((function(){return function(e){var t=e.disablePast,a=e.disableToday,n=e.disableFuture,l=e.customDisabledCheck,r=e.maxDate,i=e.minDate,c=e.applyMax,s=e.applyMin,u=new Date,o=u.getFullYear(),d=u.getMonth(),g=u.getDate();return function(e){if(t){if(e.getFullYear()<o)return!0;if(e.getFullYear()===o&&e.getMonth()<d)return!0;if(e.getFullYear()===o&&e.getMonth()===d&&e.getDate()<g)return!0}if(a&&e.getFullYear()===o&&e.getMonth()===d&&e.getDate()===g)return!0;if(n){if(e.getFullYear()>o)return!0;if(e.getFullYear()===o&&e.getMonth()>d)return!0;if(e.getFullYear()===o&&e.getMonth()===d&&e.getDate()>g)return!0}return!(!c||!m(e,r))||!(!s||!m(i,e))||"function"===typeof l&&l(e)}}({disablePast:U,disableToday:Z,disableFuture:B,customDisabledCheck:A,maxDate:Ue,minDate:Xe,applyMax:Ze,applyMin:$e})}),[Ze,$e,B,U,Z,A,Ue,Xe]),tt=Object(n.useMemo)((function(){return function(e,t){var a=e.reduce((function(e,t){return e[t]=1,e}),{});return function(e){return 1===a[p(e.getDay(),t)]}}(oe,ue)}),[ue,oe]);return l.a.createElement("section",{style:$.root.arc,className:Qe},l.a.createElement(Y,{layoutCalcs:$,onClickPrev:Ge,onClickNext:Ke,onChangeViewType:Pe,viewType:Re,viewingMonth:xe,viewingYear:Ve,yearMatrixStart:He,yearMatrixEnd:qe}),l.a.createElement("main",{style:$.root.arc_view,className:"arc_view"},"months"===Re&&l.a.createElement(x,{layoutCalcs:$,onChangeViewType:Pe,onChangeViewingMonth:Ae}),"years"===Re&&l.a.createElement(I,{layoutCalcs:$,onChangeViewType:Pe,onChangeViewingYear:We,yearMatrixStart:He,yearMatrixEnd:qe}),"month_dates"===Re&&l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{layoutCalcs:$,weekStartIndex:ue,weekendIndices:oe}),l.a.createElement(P,{isRangeSelectModeOn:ie,setIsRangeSelectModeOn:ce,layoutCalcs:$,skipDisabledDatesInRange:!!F,allowFewerDatesThanRange:!!S,selectedDate:ge,selectedRangeStart:be,selectedRangeEnd:De,lockView:!!z,newSelectedRangeStart:Se,weekStartIndex:ue,onChangeViewingYear:We,onChangeViewingMonth:Ae,onChangenSelectedMultiDates:we,onChangenNewSelectedRangeEnd:Oe,onChangenNewSelectedRangeStart:pe,onChangenSelectedRangeEnd:_e,onChangenSelectedRangeStart:Ee,onChangenSelectedDate:me,newSelectedRangeEnd:Ce,isRangeSelectorView:te,fixedRangeLength:se,isFixedRangeView:ne,isDisabled:et,checkIfWeekend:tt,selectedMultiDates:ve,isMultiSelectorView:ae,viewingMonth:xe,today:ee,maxAllowedDate:j,minAllowedDate:N,weekendIndices:oe,skipWeekendsInRange:!!f,onChange:W,viewingYear:Ve,disableFuture:B,disablePast:U,highlights:v,disableToday:Z}))))}var z=function(e){if(!Array.isArray(e))return[];var t=e[0],a=e[1];if(!h(t)||!h(a))return[];for(var n=t,l=[];m(a,n);)l.push(n),n=S(n);return l.push(a),l},J=function(e){return function(e){var t={YYYY:!0,MM:!0,DD:!0},a=e.split("-");if(3!==a.length)throw new Error("Date format is invalid.");if(!a.every((function(e){return t[e]})))throw new Error("Date format uses unknown parts.");return function(e,t){if(h(e)){var n="";return a.forEach((function(a,l){"YYYY"===a&&(n+=e.getFullYear()),"MM"===a&&(n+=e.getMonth()),"DD"===a&&(n+=e.getDate()),2!==l&&(n+=t)})),n}}}(e||"DD-MM-YYYY")},B=a(7);function H(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),s=Object(c.a)(i,2),o=(s[0],s[1]),d=Object(n.useCallback)((function(e){o(e)}),[o]),g=Object(n.useState)({}),m=Object(c.a)(g,2),h=(m[0],m[1]),v=Object(n.useCallback)((function(e){h(e)}),[h]),w=Object(n.useState)({}),f=Object(c.a)(w,2),b=(f[0],f[1]),E=Object(n.useCallback)((function(e){b(e)}),[b]),y=Object(n.useState)({}),D=Object(c.a)(y,2),_=(D[0],D[1]),M=Object(n.useCallback)((function(e){_(e)}),[_]),S=Object(n.useState)({}),p=Object(c.a)(S,2),k=(p[0],p[1]),C=Object(n.useCallback)((function(e){k(e)}),[k]),O=Object(n.useState)({}),j=Object(c.a)(O,2),R=(j[0],j[1]),Y=Object(n.useCallback)((function(e){R(e)}),[R]),F=Object(n.useState)({}),x=Object(c.a)(F,2),N=(x[0],x[1]),I=Object(n.useCallback)((function(e){N(e)}),[N]),V=Object(n.useState)({}),T=Object(c.a)(V,2),A=(T[0],T[1]),W=Object(n.useCallback)((function(e){A(e)}),[A]),P=Object(n.useState)({}),H=Object(c.a)(P,2),q=(H[0],H[1]),G=Object(n.useCallback)((function(e){q(e)}),[q]),K=Object(n.useState)({}),Q=Object(c.a)(K,2),U=Q[0],X=Q[1],Z=Object(n.useCallback)((function(e){X(e)}),[X]),$=Object(n.useState)({}),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useCallback)((function(e){ae(e)}),[ae]),le=Object(n.useState)({}),re=Object(c.a)(le,2),ie=(re[0],re[1]),ce=Object(n.useCallback)((function(e){ie(e)}),[ie]),se=Object(n.useState)([]),ue=Object(c.a)(se,2),oe=ue[0],de=ue[1],ge=Object(n.useCallback)((function(e){de(e)}),[de]),me=Object(n.useState)({}),he=Object(c.a)(me,2),ve=(he[0],he[1]),we=Object(n.useCallback)((function(e){ve(e)}),[ve]),fe=Object(n.useState)({}),be=Object(c.a)(fe,2),Ee=(be[0],be[1]),ye=Object(n.useCallback)((function(e){Ee(e)}),[Ee]),De=new Date(2021,7,28),_e=new Date(2021,7,4);return console.log(z(oe)),l.a.createElement("div",{className:"demo"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Default")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{onChange:G})))),l.a.createElement("div",null,l.a.createElement("div",{className:"desc"},l.a.createElement("p",null,"Multiple Dates View")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{value:[new Date(2021,6,22),new Date(2021,6,25),new Date(2021,6,9)],isMultiSelector:!0,disableToday:!0,onChange:d})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Range Select View")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{isRangeSelector:!0,disableToday:!0,value:[new Date(2021,0,8),new Date(2021,0,20)],onChange:E})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Range Select View With Min-Max Allowed Dates")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{initialViewDate:new Date(2021,7,10),isRangeSelector:!0,maxAllowedDate:De,minAllowedDate:_e,disableToday:!0,onChange:v})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Fixed Range View (6 Days)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{isRangeSelector:!0,fixedRange:6,onChange:ge})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Highlight Custom Dates")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{initialViewDate:new Date(2020,5,6),highlights:[new Date(2020,5,6),new Date(2020,5,12),new Date(2020,5,16),new Date(2020,5,24)],onChange:we})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can disable custom dates (here disabled if (date % 4 === 0))")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{isDisabled:function(e){return e.getDate()%4===0},onChange:ye})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can enable skipping disabled dates when doing fixed range(5 here) selections")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{isRangeSelector:!0,fixedRange:5,skipDisabledDatesInRange:!0,isDisabled:function(e){return e.getDate()%3===0},onChange:I})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can enable/disable selecting fewer dates than range if dates are not available"),l.a.createElement("small",null,"Normally it will select 4 dates after the first one but when future dates are disabled then it can even select lesser than 4 dates. This behaviour can be disabled.")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{allowFewerDatesThanRange:!0,disableFuture:!0,isRangeSelector:!0,fixedRange:4,onChange:ge})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can change start day of the week (Wed here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{startOfWeek:3,onChange:M})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can specify weekend days (Fri, Sat, Sun here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{weekends:[4,5,6],onChange:C})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can disable highlighting Weekends")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{weekends:[],onChange:C})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set if past,today,future is disabled by simple props")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{disablePast:!0,onChange:Y})),l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{disableToday:!0,value:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),onChange:I})),l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{disableFuture:!0,onChange:W})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can lock the calendar to a specific month/year")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{lockView:!0,onChange:Y})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set output date format (YYYY-DD-MM here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{onChange:Z})),l.a.createElement("div",{className:"json"},J("YYYY-DD-MM")(U,"-")))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can set output date separator (# here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{onChange:ne})),l.a.createElement("div",{className:"json"},l.a.createElement("div",{className:"json"},J("YYYY-DD-MM")(te,"#"))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can be rendered inside a popover")),l.a.createElement("div",{style:{justifyContent:"flex-start",width:"202px"}},l.a.createElement("div",{className:"input"},l.a.createElement("input",{value:J("YYYY-DD-MM")(U,"#")}),l.a.createElement(B.Popover,{isOpen:a,padding:6,positions:["bottom","top","left","right"],content:l.a.createElement(L,{value:U,onChange:function(e){X(e),r(!1)}})},l.a.createElement("div",{onClick:function(){return r(!a)}},"\ud83d\uddd3"))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can Set Initial Month&Date View To Show (Sept, 2020 here)")),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar"},l.a.createElement(L,{initialViewDate:new Date(2020,8,9),onChange:ce})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Easy to theme using CSS variables")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(L,{className:"green",isRangeSelector:!0})),l.a.createElement("div",null,l.a.createElement(L,{className:"brown"})),l.a.createElement("div",null,l.a.createElement(L,{className:"violet",isRangeSelector:!0,fixedRange:4})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"In-built and customizable dark mode")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(L,{useDarkMode:!0,isRangeSelector:!0})),l.a.createElement("div",null,l.a.createElement(L,{useDarkMode:!0})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can easily adjust scale")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(L,{fontSize:20,size:600,isRangeSelector:!0})),l.a.createElement("div",null,l.a.createElement(L,{fontSize:17,size:400,isMultiSelector:!0})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Can be rendered on the server-side"),l.a.createElement("small",null,"The following markup is created using ReactDomServer.renderToStaticMarkup() method")),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.a.renderToStaticMarkup(l.a.createElement(L,{value:[new Date(2021,6,22),new Date(2021,6,25),new Date(2021,6,9)],isMultiSelector:!0,disableToday:!0,onChange:d}))}})))}i.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d9a973cd.chunk.js.map