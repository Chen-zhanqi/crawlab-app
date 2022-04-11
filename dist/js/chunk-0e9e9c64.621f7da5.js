(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e9e9c64","chunk-9c7671c8"],{"06f7":function(t,e,n){"use strict";var a=n("36ba"),i=n.n(a);i.a},1349:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("v-tour",{attrs:{name:"node-detail",steps:t.tourSteps,callbacks:t.tourCallbacks,options:t.$utils.tour.getOptions(!0)}}),n("div",{staticClass:"selector"},[n("label",{staticClass:"label"},[t._v(t._s(t.$t("Node"))+": ")]),n("el-select",{attrs:{size:"small"},on:{change:t.onNodeChange},model:{value:t.nodeForm._id,callback:function(e){t.$set(t.nodeForm,"_id",e)},expression:"nodeForm._id"}},t._l(t.nodeList,(function(t){return n("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),n("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.onTabClick},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[n("el-tab-pane",{attrs:{label:t.$t("Overview"),name:"overview"}},[n("node-overview")],1),n("el-tab-pane",{attrs:{label:t.$t("Installation"),name:"installation"}},[n("node-installation")],1),n("el-tab-pane",{attrs:{label:t.$t("Monitor"),name:"monitor"}},["monitor"===this.activeTabName?n("node-monitor"):t._e()],1)],1)],1)},i=[],s=(n("053b"),n("e793")),r=n("9f3a"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:12}},[n("el-row",{staticClass:"latest-tasks-wrapper"},[n("task-table-view",{attrs:{title:t.$t("Latest Tasks")}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-row",{staticClass:"node-info-view-wrapper"},[n("node-info-view")],1)],1)],1)},c=[],l=n("54ee"),u=n("e593"),d={name:"NodeOverview",components:{NodeInfoView:u["a"],TaskTableView:l["a"]},computed:Object(s["a"])({id:function(){return this.$route.params.id}},Object(r["c"])("node",["nodeForm"])),created:function(){},methods:{}},h=d,p=(n("4166"),n("9ca4")),f=Object(p["a"])(h,o,c,!1,null,"120e999b",null),m=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node-installation"},[n("el-form",{staticClass:"search-form",attrs:{inline:""}},[n("el-form-item",["python"===t.activeLang.executable_name?n("el-autocomplete",{staticClass:"search-box",staticStyle:{width:"240px"},attrs:{size:"small",clearable:"",placeholder:t.$t("Search Dependencies"),"fetch-suggestions":t.fetchAllDepList,minlength:2},on:{select:t.onSearch,clear:t.onSearch},model:{value:t.depName,callback:function(e){t.depName=e},expression:"depName"}}):n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:t.$t("Search Dependencies")},model:{value:t.depName,callback:function(e){t.depName=e},expression:"depName"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"success"},on:{click:t.onSearch}},[t._v(" "+t._s(t.$t("Search"))+" ")])],1),n("el-form-item",[n("el-checkbox",{attrs:{label:t.$t("Show installed")},on:{change:t.onIsShowInstalledChange},model:{value:t.isShowInstalled,callback:function(e){t.isShowInstalled=e},expression:"isShowInstalled"}})],1)],1),n("el-tabs",{on:{"tab-click":t.onTabChange},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.langList,(function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.name,name:t.executable_name}})})),1),"installed"===t.activeLang.install_status?[["python","node"].includes(t.activeLang.executable_name)?[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{height:"calc(100vh - 280px)",data:t.computedDepList,"empty-text":t.depName?t.$t("No Data"):t.$t("Please search dependencies"),border:""}},[n("el-table-column",{attrs:{label:t.$t("Name"),prop:"name",width:"180"}}),n("el-table-column",{attrs:{label:t.isShowInstalled?t.$t("Version"):t.$t("Latest Version"),prop:"version",width:"100"}}),t.isShowInstalled?t._e():n("el-table-column",{attrs:{label:t.$t("Description"),prop:"description"}}),n("el-table-column",{attrs:{label:t.$t("Action")},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.installed?n("el-button",{attrs:{icon:t.getDepLoading(e.row)?"el-icon-loading":"",disabled:t.getDepLoading(e.row),size:"mini",type:"danger"},on:{click:function(n){return t.onClickUninstallDep(e.row)}}},[t._v(" "+t._s(t.$t("Uninstall"))+" ")]):n("el-button",{attrs:{icon:t.getDepLoading(e.row)?"el-icon-loading":"",disabled:t.getDepLoading(e.row),size:"mini",type:"primary"},on:{click:function(n){return t.onClickInstallDep(e.row)}}},[t._v(" "+t._s(t.$t("Install"))+" ")])]}}],null,!1,2908536074)})],1)]:[n("div",{staticClass:"install-wrapper"},[n("el-button",{attrs:{icon:"el-icon-check",disabled:"",type:"success"}},[t._v(" "+t._s(t.$t("Installed"))+" ")])],1)]]:"installing"===t.activeLang.install_status?[n("div",{staticClass:"install-wrapper"},[n("el-button",{attrs:{icon:"el-icon-loading",disabled:"",type:"warning"}},[t._v(" "+t._s(t.$t("Installing"))+" ")])],1)]:"installing-other"===t.activeLang.install_status?[n("div",{staticClass:"install-wrapper"},[n("el-button",{attrs:{loading:"el-icon-close",disabled:"",type:"warning"}},[t._v(" "+t._s(t.$t("Other language installing"))+" ")])],1)]:"not-installed"===t.activeLang.install_status?[n("div",{staticClass:"install-wrapper"},[n("h4",[t._v(t._s(t.$t("This language is not installed yet.")))]),n("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:t.onClickInstallLang}},[t._v(" "+t._s(t.$t("Install"))+" ")])],1)]:t._e()],2)},v=[],b=(n("f3dd"),n("0a51"),n("b4fb"),n("b130"),n("2eeb"),n("08d5"),n("e35a"),n("0d7a"),n("1fb3"),n("6a61"),n("cf7f")),$={name:"NodeInstallation",data:function(){return{activeTab:"",langList:[],depName:"",depList:[],loading:!1,isShowInstalled:!0,installedDepList:[],depLoadingDict:{},isLoadingInstallLang:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])("node",["nodeForm"])),{},{activeLang:function(){for(var t=0;t<this.langList.length;t++)if(this.langList[t].executable_name===this.activeTab)return this.langList[t];return{}},activeLangName:function(){return this.activeLang.executable_name},computedDepList:function(){return this.isShowInstalled?this.installedDepList:this.depList}}),created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.path.split("/"),a=n[n.length-1],e.next=4,t.$request.get("/nodes/".concat(a,"/langs"));case 4:i=e.sent,t.langList=i.data.data,t.activeTab=t.langList[0].executable_name||"",setTimeout((function(){t.getInstalledDepList()}),100);case 8:case"end":return e.stop()}}),e)})))()},methods:{getDepList:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.depList=[],e.next=4,t.$request.get("/nodes/".concat(t.nodeForm._id,"/deps"),{lang:t.activeLang.executable_name,dep_name:t.depName});case 4:n=e.sent,t.loading=!1,t.depList=n.data.data,"python"===t.activeLangName&&(t.depList=t.depList.sort((function(t,e){return t.name>e.name?1:-1})),t.depList.map(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request.get("/system/deps/".concat(t.activeLang.executable_name,"/").concat(n.name,"/json"));case 2:a=e.sent,a&&(n.version=a.data.data.version,n.description=a.data.data.description);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:case"end":return e.stop()}}),e)})))()},getInstalledDepList:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("installed"===t.activeLang.install_status){e.next=2;break}return e.abrupt("return");case 2:if(["Python","Node.js"].includes(t.activeLang.name)){e.next=4;break}return e.abrupt("return");case 4:return t.loading=!0,t.installedDepList=[],e.next=8,t.$request.get("/nodes/".concat(t.nodeForm._id,"/deps/installed"),{lang:t.activeLang.executable_name});case 8:n=e.sent,t.loading=!1,t.installedDepList=n.data.data;case 11:case"end":return e.stop()}}),e)})))()},fetchAllDepList:function(t,e){var n=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$request.get("/system/deps/".concat(n.activeLang.executable_name),{dep_name:t});case 2:i=a.sent,e(i.data.data?i.data.data.map((function(t){return{value:t,label:t}})):[]);case 4:case"end":return a.stop()}}),a)})))()},onSearch:function(){this.isShowInstalled=!1,this.getDepList(),this.$st.sendEv("节点详情","安装","搜索依赖")},onIsShowInstalledChange:function(t){t?this.getInstalledDepList():(this.depName="",this.depList=[]),this.$st.sendEv("节点详情","安装","点击查看已安装")},onClickInstallDep:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,i,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.name,e.$set(e.depLoadingDict,a,!0),i=e.$route.path.split("/"),s=i[i.length-1],n.next=6,e.$request.post("/nodes/".concat(s,"/deps/install"),{lang:e.activeLang.executable_name,dep_name:a});case 6:r=n.sent,!r||r.error?e.$notify.error({title:e.$t("Installing dependency failed"),message:e.$t("The dependency installation is unsuccessful: ")+a}):(e.$notify.success({title:e.$t("Installing dependency successful"),message:e.$t("You have successfully installed a dependency: ")+a}),t.installed=!0),e.$request.put("/actions",{type:"install_dep"}),e.$set(e.depLoadingDict,a,!1),e.$st.sendEv("节点详情","安装","安装依赖");case 11:case"end":return n.stop()}}),n)})))()},onClickUninstallDep:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,i,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.name,e.$set(e.depLoadingDict,a,!0),i=e.$route.path.split("/"),s=i[i.length-1],n.next=6,e.$request.post("/nodes/".concat(s,"/deps/uninstall"),{lang:e.activeLang.executable_name,dep_name:a});case 6:r=n.sent,!r||r.error?e.$notify.error({title:e.$t("Uninstalling dependency failed"),message:e.$t("The dependency uninstallation is unsuccessful: ")+a}):(e.$notify.success({title:e.$t("Uninstalling dependency successful"),message:e.$t("You have successfully uninstalled a dependency: ")+a}),t.installed=!1),e.$set(e.depLoadingDict,a,!1),e.$st.sendEv("节点详情","安装","卸载依赖");case 10:case"end":return n.stop()}}),n)})))()},getDepLoading:function(t){var e=t.name;return void 0!==this.depLoadingDict[e]&&this.depLoadingDict[e]},onClickInstallLang:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoadingInstallLang=!0,e.next=3,t.$request.post("/nodes/".concat(t.nodeForm._id,"/langs/install"),{lang:t.activeLang.executable_name});case 3:n=e.sent,!n||n.error?t.$notify.error({title:t.$t("Installing language failed"),message:t.$t("The language installation is unsuccessful: ")+t.activeLang.name}):t.$notify.success({title:t.$t("Installing language successful"),message:t.$t("You have successfully installed a language: ")+t.activeLang.name}),t.$request.put("/actions",{type:"install_lang"}),t.isLoadingInstallLang=!1,t.$st.sendEv("节点详情","安装","安装语言");case 8:case"end":return e.stop()}}),e)})))()},onTabChange:function(){this.isShowInstalled?this.getInstalledDepList():(this.depName="",this.depList=[]),this.$st.sendEv("节点详情","安装","切换标签")}}},w=$,y=(n("06f7"),Object(p["a"])(w,g,v,!1,null,"7976d19a",null)),_=y.exports,k=n("c368"),D={name:"NodeDetail",components:{NodeMonitor:k["a"],NodeOverview:m,NodeInstallation:_},data:function(){var t=this;return{activeTabName:"overview",tourSteps:[{target:".selector",content:this.$t("Switch between different nodes.")},{target:".latest-tasks-wrapper",content:this.$t("You can view the latest executed spider tasks."),params:{placement:"right"}},{target:".node-info-view-wrapper",content:this.$t("This is the detailed node info."),params:{placement:"left"}},{target:"#tab-installation",content:this.$t("Here you can install<br> dependencies and modules<br> that are required<br> in your spiders.")},{target:".search-box",content:this.$t('You can search dependencies in the search box and install them by clicking the "Install" button below.')}],tourCallbacks:{onStop:function(){t.$utils.tour.finishTour("node-detail")},onPreviousStep:function(e){3===e&&(t.activeTabName="overview"),t.$utils.tour.prevStep("node-detail",e)},onNextStep:function(e){2===e&&(t.activeTabName="installation"),t.$utils.tour.nextStep("node-detail",e)}}}},computed:Object(s["a"])({},Object(r["c"])("node",["nodeList","nodeForm"])),created:function(){this.$store.dispatch("node/getNodeList"),this.$store.dispatch("node/getNodeData",this.$route.params.id),this.$store.dispatch("node/getTaskList",this.$route.params.id)},mounted:function(){this.$utils.tour.isFinishedTour("node-detail")||this.$utils.tour.startTour(this,"node-detail")},methods:{onTabClick:function(t){this.$st.sendEv("节点详情","切换标签",t.name)},onNodeChange:function(t){this.$router.push("/nodes/".concat(t)),this.$st.sendEv("节点详情","切换节点")}}},x=D,L=(n("83c4"),n("71d4"),Object(p["a"])(x,a,i,!1,null,"6aac50e0",null));e["default"]=L.exports},"1d45":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",a="hour",i="day",s="week",r="month",o="quarter",c="year",l="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},p={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(a,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),i=e.add(a,r),s=n-i<0,o=e.add(a+(s?-1:1),r);return+(-(a+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:r,y:c,w:s,d:i,D:l,h:a,m:n,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",g={};g[m]=f;var v=function(t){return t instanceof y},b=function(t,e,n){var a;if(!t)return m;if("string"==typeof t)g[t]&&(a=t),e&&(g[t]=e,a=t);else{var i=t.name;g[i]=t,a=i}return!n&&a&&(m=a),a||!n&&m},$=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},w=p;w.l=b,w.i=v,w.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function h(t){this.$L=this.$L||b(t.locale,null,!0),this.parse(t)}var p=h.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(u);if(a){var i=a[2]-1||0,s=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return $(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<$(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,o){var u=this,d=!!w.u(o)||o,h=w.p(t),p=function(t,e){var n=w.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf(i)},f=function(t,e){return w.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case c:return d?p(1,0):p(31,11);case r:return d?p(1,g):p(0,g+1);case s:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return p(d?v-y:v+(6-y),g);case i:case l:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case n:return f(b+"Seconds",2);case e:return f(b+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(s,o){var u,d=w.p(s),h="set"+(this.$u?"UTC":""),p=(u={},u[i]=h+"Date",u[l]=h+"Date",u[r]=h+"Month",u[c]=h+"FullYear",u[a]=h+"Hours",u[n]=h+"Minutes",u[e]=h+"Seconds",u[t]=h+"Milliseconds",u)[d],f=d===i?this.$D+(o-this.$W):o;if(d===r||d===c){var m=this.clone().set(l,1);m.$d[p](f),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(t,o){var l,u=this;t=Number(t);var d=w.p(o),h=function(e){var n=$(u);return w.w(n.date(n.date()+Math.round(e*t)),u)};if(d===r)return this.set(r,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===i)return h(1);if(d===s)return h(7);var p=(l={},l[n]=6e4,l[a]=36e5,l[e]=1e3,l)[d]||1,f=this.$d.getTime()+t*p;return w.w(f,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$locale(),s=this.$H,r=this.$m,o=this.$M,c=i.weekdays,l=i.months,u=function(t,a,i,s){return t&&(t[a]||t(e,n))||i[a].substr(0,s)},h=function(t){return w.s(s%12||12,t,"0")},p=i.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:u(i.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,c,2),ddd:u(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:w.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,r,!0),A:p(s,r,!1),m:String(r),mm:w.s(r,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:a};return n.replace(d,(function(t,e){return e||f[t]||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,l,u){var d,h=w.p(l),p=$(t),f=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,g=w.m(this,p);return g=(d={},d[c]=g/12,d[r]=g,d[o]=g/3,d[s]=(m-f)/6048e5,d[i]=(m-f)/864e5,d[a]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[h]||m,u?g:w.a(g)},p.daysInMonth=function(){return this.endOf(r).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=b(t,e,!0);return a&&(n.$L=a),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),_=y.prototype;return $.prototype=_,[["$ms",t],["$s",e],["$m",n],["$H",a],["$W",i],["$M",r],["$y",c],["$D",l]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t(e,y,$),$},$.locale=b,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=g[m],$.Ls=g,$}))},"1fb5":function(t,e,n){},"2a9f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monitor node-monitor"},[n("div",{staticClass:"control-panel"},[n("monitor-time-range",{on:{change:t.onTimeRangeChange},model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}})],1),n("ul",{staticClass:"chart-list"},t._l(t.metrics,(function(t){return n("li",{key:t,staticClass:"chart-item",attrs:{id:t}})})),0)])},i=[],s=(n("2eeb"),n("053b"),n("513c"),n("e18c"),n("96db"),n("af86"),n("1fb3"),n("6a61"),n("cf7f")),r=n("e793"),o=n("9f3a"),c=n("1d45"),l=n.n(c),u=n("4d28"),d=n.n(u),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monitor-time-range"},[n("el-form",{attrs:{inline:""}},[n("el-form-item",{attrs:{label:t.$t("Time Range")}},[n("el-select",{on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t,e){return n("el-option",{key:e,attrs:{size:"small",value:t.name,label:t.label}})})),1)],1)],1)],1)},p=[],f=(n("dbb3"),{name:"MonitorTimeRange",props:{value:{type:String,default:"1h"}},data:function(){return{}},computed:{activeItem:function(){var t=this;return this.options.filter((function(e){return e.name===t.value}))[0]},options:function(){return[{name:"5m",label:"5 ".concat(this.$t("Minutes")),step:15,value:5,unit:"minute"},{name:"30m",label:"30 ".concat(this.$t("Minutes")),step:15,value:30,unit:"minute"},{name:"1h",label:"1 ".concat(this.$t("Hour")),step:15,value:1,unit:"hour"},{name:"6h",label:"6 ".concat(this.$t("Hours")),step:30,value:6,unit:"hour"},{name:"12h",label:"12 ".concat(this.$t("Hours")),step:60,value:12,unit:"hour"},{name:"1d",label:"1 ".concat(this.$t("Day")),step:60,value:1,unit:"day"},{name:"7d",label:"7 ".concat(this.$t("Days")),step:900,value:7,unit:"day"},{name:"14d",label:"14 ".concat(this.$t("Days")),step:3600,value:14,unit:"day"},{name:"30d",label:"30 ".concat(this.$t("Days")),step:3600,value:30,unit:"day"},{name:"3m",label:"3 ".concat(this.$t("Months")),step:86400,value:3,unit:"month"}]}},methods:{onChange:function(){this.$emit("input",this.activeName),this.$emit("change",this.activeItem)}}}),m=f,g=n("9ca4"),v=Object(g["a"])(m,h,p,!1,null,"1c243000",null),b=v.exports,$={name:"MonitorBase",components:{MonitorTimeRange:b},props:{nodeKey:{type:String,default:""}},data:function(){return{timeRange:"1h",timeRangeUnit:"hour",timeRangeValue:1,step:15,chartDict:{},dataDict:{},handle:void 0}},computed:Object(r["a"])({metrics:function(){return[]},internalNodeId:function(){return this.nodeKey||void 0}},Object(o["c"])("lang",["lang"])),watch:{lang:function(){this.getAllMetricsData()}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("monitor/getMetrics");case 2:return t.handle=setInterval(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAllMetricsData();case 2:case"end":return e.stop()}}),e)}))),15e3),e.next=5,t.getAllMetricsData();case 5:case"end":return e.stop()}}),e)})))()},destroyed:function(){clearInterval(this.handle)},methods:{getMetricData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$request.get("/monitor/prom/query-range/".concat(t),{node_key:e.internalNodeId,start:l()().subtract(e.timeRangeValue,e.timeRangeUnit).unix(),end:l()().unix(),step:e.step});case 2:if(a=n.sent,i=a.data.data.result[0],i){n.next=6;break}return n.abrupt("return");case 6:e.$set(e.dataDict,t,i.values.map((function(t){return t[0]=1e3*t[0],t[1]=Number(t[1]),t})));case 7:case"end":return n.stop()}}),n)})))()},renderMetricChart:function(t){var e=this,n=this.chartDict[t];n||(n=d.a.init(this.$el.querySelector("#"+t))),n.setOption({title:{text:this.$t(t)},tooltip:{trigger:"axis",axisPointer:{animation:!1}},xAxis:{type:"time"},yAxis:{type:"value",scale:!0,axisLabel:{formatter:function(n){return e.$utils.number.getMetricValueString(t,n)}}},series:[{name:t,type:"line",showSymbol:!1,hoverAnimation:!1,data:this.dataDict[t]}]})},getMetricsData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(t.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMetricData(n);case 2:e.renderMetricChart(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:case"end":return n.stop()}}),n)})))()},getAllMetricsData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMetricsData(t.metrics);case 2:case"end":return e.stop()}}),e)})))()},onTimeRangeChange:function(t){this.timeRange=t.name,this.timeRangeValue=t.value,this.timeRangeUnit=t.unit,this.step=t.step,this.getAllMetricsData()}}},w=$,y=(n("e2dd"),Object(g["a"])(w,a,i,!1,null,"14842610",null));e["a"]=y.exports},"36ba":function(t,e,n){},"3f85":function(t,e,n){"use strict";var a=n("8ede"),i=n.n(a);i.a},4166:function(t,e,n){"use strict";var a=n("4b16"),i=n.n(a);i.a},"4b16":function(t,e,n){},5215:function(t,e,n){},"54ee":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-table-view"},[n("el-row",{staticClass:"title-wrapper"},[n("h5",{staticClass:"title"},[t._v(t._s(t.title))]),n("el-button",{staticClass:"small-btn",attrs:{type:"success",plain:"",size:"mini",icon:"fa fa-refresh"},on:{click:t.onRefresh}})],1),n("el-table",{attrs:{data:t.taskList,border:"","header-cell-style":{background:"rgb(48, 65, 86)",color:"white"},height:"480px"},on:{"row-click":t.onClickTask}},[n("el-table-column",{attrs:{property:"node",label:t.$t("Node"),width:"120",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"a-tag",on:{click:function(n){return t.onClickNode(e.row)}}},[t._v(t._s(e.row.node_name))])]}}])}),n("el-table-column",{attrs:{property:"spider_name",label:t.$t("Spider"),width:"120",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"a-tag",on:{click:function(n){return t.onClickSpider(e.row)}}},[t._v(t._s(e.row.spider_name))])]}}])}),n("el-table-column",{attrs:{property:"param",label:t.$t("Parameters"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.param))])]}}])}),n("el-table-column",{attrs:{property:"result_count",label:t.$t("Results Count"),width:"60",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.result_count))])]}}])}),n("el-table-column",{attrs:{label:t.$t("Status"),align:"left",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("status-tag",{attrs:{status:t.row.status}})]}}])}),n("el-table-column",{attrs:{property:"create_ts",label:t.$t("Create Time"),width:"150",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"a-tag",attrs:{href:"javascript:"},on:{click:function(n){return t.onClickTask(e.row)}}},[t._v(" "+t._s(t.getTime(e.row.create_ts).format("YYYY-MM-DD HH:mm:ss"))+" ")])]}}])})],1)],1)},i=[],s=(n("e35a"),n("f4e3"),n("0d7a"),n("1fb3"),n("e793")),r=n("9f3a"),o=n("1d45"),c=n.n(o),l=n("c91b"),u={name:"TaskTableView",components:{StatusTag:l["a"]},props:{title:{type:String,default:""}},data:function(){return{handle:void 0,clicked:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])("spider",["spiderForm"])),Object(r["c"])("task",["taskList"])),mounted:function(){var t=this;this.handle=setInterval((function(){t.onRefresh()}),5e3)},destroyed:function(){clearInterval(this.handle)},methods:{onClickSpider:function(t){var e=this;this.clicked=!0,setTimeout((function(){e.clicked=!1}),100),this.$router.push("/spiders/".concat(t.spider_id)),this.$route.path.match(/\/nodes\//)&&this.$st.sendEv("节点详情","概览","查看爬虫")},onClickNode:function(t){var e=this;this.clicked=!0,setTimeout((function(){e.clicked=!1}),100),this.$router.push("/nodes/".concat(t.node_id)),this.$route.path.match(/\/spiders\//)&&this.$st.sendEv("爬虫详情","概览","查看节点")},onClickTask:function(t){this.clicked||(this.$router.push("/tasks/".concat(t._id)),this.$route.path.match(/\/nodes\//)?this.$st.sendEv("节点详情","概览","查看任务"):this.$route.path.match(/\/spiders\//)&&this.$st.sendEv("爬虫详情","概览","查看任务"))},onRefresh:function(){"spiders"===this.$route.path.split("/")[1]?this.$store.dispatch("spider/getTaskList",this.$route.params.id):"nodes"===this.$route.path.split("/")[1]&&this.$store.dispatch("node/getTaskList",this.$route.params.id)},getTime:function(t){return c()(t)}}},d=u,h=(n("bb68"),n("9ca4")),p=Object(h["a"])(d,a,i,!1,null,"4721b076",null);e["a"]=p.exports},"5f45":function(t,e,n){},"71d4":function(t,e,n){"use strict";var a=n("5f45"),i=n.n(a);i.a},"83c4":function(t,e,n){"use strict";var a=n("1fb5"),i=n.n(a);i.a},"8ede":function(t,e,n){},bb68:function(t,e,n){"use strict";var a=n("5215"),i=n.n(a);i.a},c368:function(t,e,n){"use strict";var a,i,s=n("e793"),r=n("9f3a"),o=n("2a9f"),c={name:"NodeMonitor",extends:o["a"],computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["c"])("node",["nodeForm"])),Object(r["b"])("monitor",["nodeMetrics"])),{},{metrics:function(){return this.nodeMetrics}})},l=c,u=n("9ca4"),d=Object(u["a"])(l,a,i,!1,null,null,null);e["a"]=d.exports},c91b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tag",{staticClass:"status-tag",attrs:{type:t.type}},[n("i",{class:t.icon}),t._v(" "+t._s(t.$t(t.label))+" ")])},i=[],s={name:"StatusTag",props:{status:{type:String,default:""}},data:function(){return{statusDict:{pending:{label:"Pending",type:"primary"},running:{label:"Running",type:"warning"},finished:{label:"Finished",type:"success"},error:{label:"Error",type:"danger"},cancelled:{label:"Cancelled",type:"info"},abnormal:{label:"Abnormal",type:"danger"}}}},computed:{type:function(){var t=this.statusDict[this.status];return t?t.type:""},label:function(){var t=this.statusDict[this.status];return t?t.label:"NA"},icon:function(){return"finished"===this.status?"el-icon-check":"pending"===this.status||"running"===this.status?"el-icon-loading":"error"===this.status?"el-icon-error":"cancelled"===this.status?"el-icon-video-pause":"abnormal"===this.status?"el-icon-warning":"el-icon-question"}}},r=s,o=n("9ca4"),c=Object(o["a"])(r,a,i,!1,null,"91717ea0",null);e["a"]=c.exports},cfca:function(t,e,n){},e2dd:function(t,e,n){"use strict";var a=n("cfca"),i=n.n(a);i.a},e593:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-view"},[n("el-row",[n("el-form",{ref:"nodeForm",staticClass:"node-form",attrs:{"label-width":"150px",model:t.nodeForm,"label-position":"right"}},[n("el-form-item",{attrs:{label:t.$t("Node Name")}},[n("el-input",{attrs:{placeholder:t.$t("Node Name"),disabled:t.isView},model:{value:t.nodeForm.name,callback:function(e){t.$set(t.nodeForm,"name",e)},expression:"nodeForm.name"}})],1),n("el-form-item",{attrs:{label:t.$t("Node IP"),prop:"ip",required:""}},[n("el-input",{attrs:{placeholder:t.$t("Node IP"),disabled:""},model:{value:t.nodeForm.ip,callback:function(e){t.$set(t.nodeForm,"ip",e)},expression:"nodeForm.ip"}})],1),n("el-form-item",{attrs:{label:t.$t("Node MAC"),prop:"ip",required:""}},[n("el-input",{attrs:{placeholder:t.$t("Node MAC"),disabled:""},model:{value:t.nodeForm.mac,callback:function(e){t.$set(t.nodeForm,"mac",e)},expression:"nodeForm.mac"}})],1),n("el-form-item",{attrs:{label:t.$t("Description")}},[n("el-input",{attrs:{type:"textarea",placeholder:t.$t("Description"),disabled:t.isView},model:{value:t.nodeForm.description,callback:function(e){t.$set(t.nodeForm,"description",e)},expression:"nodeForm.description"}})],1)],1)],1),t.isView?t._e():n("el-row",{staticClass:"button-container"},[n("el-button",{attrs:{size:"small",type:"success"},on:{click:t.onSave}},[t._v(t._s(t.$t("Save")))])],1)],1)},i=[],s=n("e793"),r=n("9f3a"),o={name:"NodeInfoView",props:{isView:{type:Boolean,default:!1}},computed:Object(s["a"])({},Object(r["c"])("node",["nodeForm"])),methods:{onSave:function(){var t=this;this.$refs.nodeForm.validate((function(e){e&&t.$store.dispatch("node/editNode").then((function(){t.$message.success(t.$t("Node info has been saved successfully"))}))})),this.$st.sendEv("节点详情","概览","保存")}}},c=o,l=(n("3f85"),n("9ca4")),u=Object(l["a"])(c,a,i,!1,null,"18e91fe8",null);e["a"]=u.exports}}]);