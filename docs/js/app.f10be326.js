(function(e){function a(a){for(var n,i,o=a[0],h=a[1],s=a[2],E=0,I=[];E<o.length;E++)i=o[E],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&I.push(r[i][0]),r[i]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);l&&l(a);while(I.length)I.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],n=!0,o=1;o<t.length;o++){var h=t[o];0!==r[h]&&(n=!1)}n&&(c.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={app:0},c=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=a,o=o.slice();for(var s=0;s<o.length;s++)a(o[s]);var l=h;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"29af":function(e,a,t){},"3b56":function(e,a,t){e.exports=t.p+"img/jester_ui_category_icons.4f34941b.png"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("jester-menu",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"canvas-wrapper",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{attrs:{id:"preloadFont"}},[e._v("Preparing Font")]),n("div",{attrs:{id:"preloadFontChs"}},[e._v("Preparing Font")]),n("div",[n("canvas",{attrs:{id:"canvas"},on:{mousemove:e.handleMouseMove,mousedown:e.handleMouseClick}})]),n("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,"active-text":"中","inactive-text":"英"},on:{change:e.updateCanvas},model:{value:e.translated,callback:function(a){e.translated=a},expression:"translated"}}),n("img",{staticStyle:{display:"none"},attrs:{id:"JuiCategory",src:t("3b56")}}),n("img",{staticStyle:{display:"none"},attrs:{id:"JuiTriangles",src:t("9c5e")}})],1)},o=[],h=(t("cb29"),t("7db0"),t("4160"),t("caad"),t("a15b"),t("d81d"),t("b0c0"),t("ac1f"),t("2532"),t("1276"),t("498a"),t("159b"),t("d4ec")),s=function e(a,t,n,r){Object(h["a"])(this,e),console.log(a,t,n,r)},l={states:{test:new s,conditions:{},mode:"",a2g:{weaponActive:"",aimMode:"",pair:"",fuze:"",quantity:"",timer:"",distance:""},a2a:{}},static:{mainMenu:"主菜单",press:"按下",category:{RADAR:"雷达",RADIO:"无线电",UTILITY:"通用",DEFENSIVE:"防御",NAVIGATION:"导航",WEAPONS:"武器"}},jester:[{name:"AN/ARC-182",a:"",category:"RADIO",parent:"",children:[{name:"USE GUARD 243.000",a:"使用救生频率 243.000",category:"RADIO",parent:"",children:[]},{name:"USE MANUAL 124.000",a:"使用手动频率 124.000",category:"RADIO",parent:"",children:[]},{name:["USE CHANNEL","CH1","124.000"],a:["使用预设波道","波道1","124.000"],category:"RADIO",parent:"",children:[]},{name:"TUNE MANUAL",a:"手动调谐频率",category:"RADIO",parent:"",children:[]},{name:"SELECT CHANNEL",a:"选择预设波道",category:"RADIO",parent:"",children:[{name:["PREV","CHHANNEL"],a:"上一波道",category:"RADIO",parent:"",children:[]},{name:["NEXT","CHHANNEL"],a:"下一波道",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","1-5"],a:"波道1-5",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","6-10"],a:"波道6-10",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","11-15"],a:"波道11-15",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","16-20"],a:"波道16-20",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","21-25"],a:"波道21-25",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","36-30"],a:"波道36-30",category:"RADIO",parent:"",children:[]}]},{name:"SELECT MODE",a:"选择模式",category:"RADIO",parent:"",children:[{name:["MODE","OFF"],a:["模式","OFF"],category:"RADIO",parent:"",children:[]},{name:["MODE","TR"],a:["模式","收发"],category:"RADIO",parent:"",children:[]},{name:["MODE","TG/G"],a:["模式","收发/救生"],category:"RADIO",parent:"",children:[]},{name:["MODE","DF"],a:["模式","测向"],category:"RADIO",parent:"",children:[]},{name:["MODE","TEST"],a:["模式","检测"],category:"RADIO",parent:"",children:[]},{name:["MODULATION","MAN FM"],a:["调制","调频"],category:"RADIO",parent:"",children:[]}]},{name:"TUNE ATC",a:"调谐至空管",category:"RADIO",parent:"",children:[]},{name:"TUNE TAC",a:"调谐至战斗频率",category:"RADIO",parent:"",children:[{name:["ARCO 1-1","KC-135MPRS"],category:"RADIO",parent:"",children:[]},{name:["OVERLORD 1-1","E-2D"],category:"RADIO",parent:"",children:[]}]}]},{name:["BEYOND VISUAL","RANGE"],a:"超视距",category:"RADAR",parent:"",children:[{name:"STT LOCK",a:"单目标跟踪锁定",category:"RADAR",parent:"",children:[{name:"TARGET AHEAD",a:"前方的目标",category:"RADAR",parent:"",children:[]},{name:"ENEMY TARGET AHEAD",a:"前方的敌机",category:"RADAR",parent:"",children:[]},{name:"FRIENDLY TARGET AHEAD",a:"前方的友机",category:"RADAR",parent:"",children:[]},{name:"CHOOSE SPECIFIC TARGET",a:"选择特定目标",category:"RADAR",parent:"",children:[{name:["REL.AZ: -18 DEG","DISTANCE: 30 NM"],a:["相对方位：-18 度","距离：30 海里"],category:"RADAR",parent:"",children:[]},{name:["REL.AZ: 16 DEG","DISTANCE: 32 NM"],a:["相对方位：16 度","距离：32 海里"],category:"RADIO",parent:"",children:[]}]},{name:"FIRST TWS TARGET",a:"第一个 TWS 目标",category:"RADAR",parent:"",children:[]},{name:"TWS TARGET NUMBER",a:"TWS 目标序号",category:"RADAR",parent:"",children:[]}]},{name:"SCAN ELEVATION",a:"扫描仰角",category:"RADAR",parent:"",children:[{name:"SCAN UP OR DOWN",a:"向上或下方扫描",category:"RADAR",parent:"",children:[{name:"AUTO EL AND AZ",a:"自动仰角和方位角",category:"RADAR",parent:"",children:[]},{name:"LOW",a:"低",category:"RADAR",parent:"",children:[]},{name:["LOW","MIDDLE"],a:"中低",category:"RADAR",parent:"",children:[]},{name:"MIDDLE",a:"中",category:"RADAR",parent:"",children:[]},{name:["HIGH","MIDDILE"],a:"中高",category:"RADAR",parent:"",children:[]},{name:"HIGH",a:"高",category:"RADAR",parent:"",children:[]}]},{name:"SCAN ALTITUDE AT DISTANCE",a:"指定距离上扫描的高度",category:"RADAR",parent:"",children:[]}]},{name:"SCAN AZIMUTH",a:"扫描方位角",category:"RADAR",parent:"",children:[{name:["AUTO","ELEVATION AND AZIMUTH"],a:["自动","仰角和方位角"],category:"RADAR",parent:"",children:[]},{name:"LEFT",a:"左",category:"RADAR",parent:"",children:[]},{name:["LEFT","CENTER"],a:["左","中"],category:"RADAR",parent:"",children:[]},{name:"CENTER",a:"中间",category:"RADAR",parent:"",children:[]},{name:["RIGHT","CENTER"],a:["右","中"],category:"RADAR",parent:"",children:[]},{name:"RIGHT",a:"右",category:"RADAR",parent:"",children:[]}]},{name:"SCAN DISTANCE",a:"扫描距离",category:"RADAR",parent:"",children:[{name:"AUTO",a:"自动",category:"RADAR",parent:"",children:[]},{name:"25 NM",a:"25 海里",category:"RADAR",parent:"",children:[]},{name:"50 NM",a:"50 海里",category:"RADAR",parent:"",children:[]},{name:"100 NM",a:"100 海里",category:"RADAR",parent:"",children:[]},{name:"200 NM",a:"200 海里",category:"RADAR",parent:"",children:[]},{name:"400 NM",a:"400 海里",category:"RADAR",parent:"",children:[]}]},{name:"RADAR MODE",a:"雷达模式",category:"RADAR",parent:"",children:[{name:"AUTO",a:"TWS-自动",category:"RADAR",parent:"",children:[]},{name:"TRACK WHILE SCAN",a:"边扫描边跟踪",category:"RADAR",parent:"",children:[]},{name:"RANGE WHILE SEARCH",a:"边搜索边测距",category:"RADAR",parent:"",children:[]}]},{name:"GROUND STABILIZE",a:"相对地面稳定",category:"RADAR",parent:"",children:[{name:"15 S",a:"15 秒",category:"RADAR",parent:"",children:[]},{name:"30 S",a:"30 秒",category:"RADAR",parent:"",children:[]},{name:"60 S",a:"60 秒",category:"RADAR",parent:"",children:[]},{name:"120 S",a:"120 秒",category:"RADAR",parent:"",children:[]},{name:"INDEFINITE",a:"无限",category:"RADAR",parent:"",children:[]}]},{name:"GO SILENT",a:"雷达静默",category:"RADAR",parent:"",children:[]}]},{name:["WITHIN VISUAL","RANGE"],a:"视距内",category:"RADAR",parent:"",children:[{name:"JETTISON DROP TANKS",a:"抛弃副油箱",category:"UTILITY",parent:"",children:[]}]},{name:"AIR TO GROUND",a:"空对地",category:"WEAPONS",parent:"",children:[{name:"SELECT ORDNANCE",a:"选择挂载",category:"WEAPONS",parent:"",children:[]},{name:"SET COMPUTER TARGET",alt:"",a:"设定计算机目标",category:"WEAPONS",parent:"",children:[]},{name:"SET PAIRS",a:"设定成对投放",category:"WEAPONS",parent:"",children:[]},{name:"SET MECHANICAL FUZE",a:"设定机械引信",category:"WEAPONS",parent:"",children:[{name:["NOSE","TAIL"],a:["头部","尾部"],category:"WEAPONS",parent:"",children:[]},{name:"NOSE",a:"头部",category:"WEAPONS",parent:"",children:[]},{name:"SAFE",a:"安全",category:"WEAPONS",parent:"",children:[]}]},{name:"RIPPLE SETTINGS",a:"连发设定",category:"WEAPONS",parent:"",children:[{name:"SET RIPPLE QUANTITY",a:"设定连发数量",category:"WEAPONS",parent:"",children:[]},{name:"SET RIPPLE TIMER",a:"设定连发时间间隔",category:"WEAPONS",parent:"",children:[]},{name:"SET RIPPLE DISTANCE",a:"设定连发命中点间距",category:"WEAPONS",parent:"",children:[]}]},{name:"JETTISON SELECTED",a:"抛弃选定的挂载",category:"WEAPONS",parent:"",children:[]},{name:"SELECT STATIONS",a:"选择挂点",category:"WEAPONS",parent:"",children:[]}],remark:"a2g | aimMode, pair, fuze, quantity, weaponActive"},{name:"NAVIGATION",a:"导航",category:"UTILITY",parent:"",children:[{name:["SELECT DESTINATION","STEER POINT"],a:["选择目标","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MAN",a:"手动",category:"UTILITY",parent:"",children:[]}]},{name:["RESTORE MISSION","STEER POINT"],a:["恢复任务","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:["MANUAL ENTER","STEER POINT"],a:["手动输入","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:["STEER POINT","FROM MAP"],a:["从地图读取","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:"TACAN",a:"塔康",category:"RADIO",parent:"",children:[{name:"SELECT MODE",a:"选择模式",category:"RADIO",parent:"",children:[{name:["MODE","OFF"],a:["模式","关闭"],category:"RADIO",parent:"",children:[]},{name:["MODE","REC"],a:["模式","接收"],category:"RADIO",parent:"",children:[]},{name:["MODE","T/R"],a:["模式","收发"],category:"RADIO",parent:"",children:[]},{name:["MODE","A/A"],a:["模式","空空"],category:"RADIO",parent:"",children:[]},{name:["MODE","BCN"],a:["模式","信标"],category:"RADIO",parent:"",children:[]}]},{name:"SELECT CHANNEL",a:"选择波道",category:"RADIO",parent:"",children:[]},{name:["TUNE","GROUND","STATION"],a:["调谐至","地面台"],category:"RADIO",parent:"",children:[]},{name:["TUNE","TAC"],a:["调谐至","战斗波道"],category:"RADIO",parent:"",children:[]}]},{name:"NAVIGATION GRID",a:"导航网格",category:"UTILITY",parent:"",children:[{name:"ENABLE NAVGRID",a:"启用导航网格",category:"UTILITY",parent:"",children:[]},{name:["MANUAL ENTER","NAVGRID REF"],a:["手动输入","导航网格参考点"],category:"UTILITY",parent:"",children:[]},{name:["NAVGRID REF","FROM MAP"],a:["从地图读取","导航网格参考点"],category:"UTILITY",parent:"",children:[]},{name:"GRID HEADING RELATIVE",a:"网格相对航向",category:"UTILITY",parent:"",children:[{name:"+180 DEGREES",a:"+180 度",category:"UTILITY",parent:"",children:[]},{name:"+30 DEGREES",a:"+30 度",category:"UTILITY",parent:"",children:[]},{name:"+90 DEGREES",a:"+90 度",category:"UTILITY",parent:"",children:[]},{name:"+120 DEGREES",a:"+120 度",category:"UTILITY",parent:"",children:[]},{name:"+180 DEGREES",a:"+180 度",category:"UTILITY",parent:"",children:[]},{name:"-120 DEGREES",a:"-120 度",category:"UTILITY",parent:"",children:[]},{name:"-90 DEGREES",a:"-90 度",category:"UTILITY",parent:"",children:[]},{name:"-30 DEGREES",a:"-30 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID HEADING ABSOLUTE",a:"网格绝对航向",category:"UTILITY",parent:"",children:[{name:"0 DEGREES",a:"0 度",category:"UTILITY",parent:"",children:[]},{name:"45 DEGREES",a:"45 度",category:"UTILITY",parent:"",children:[]},{name:"90 DEGREES",a:"90 度",category:"UTILITY",parent:"",children:[]},{name:"135 DEGREES",a:"135 度",category:"UTILITY",parent:"",children:[]},{name:"180 DEGREES",a:"180 度",category:"UTILITY",parent:"",children:[]},{name:"225 DEGREES",a:"225 度",category:"UTILITY",parent:"",children:[]},{name:"270 DEGREES",a:"270 度",category:"UTILITY",parent:"",children:[]},{name:"315 DEGREES",a:"315 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID COVERAGE",a:"网格覆盖范围",category:"UTILITY",parent:"",children:[{name:"30 DEGREES",a:"30 度",category:"UTILITY",parent:"",children:[]},{name:"60 DEGREES",a:"60 度",category:"UTILITY",parent:"",children:[]},{name:"90 DEGREES",a:"90 度",category:"UTILITY",parent:"",children:[]},{name:"120 DEGREES",a:"120 度",category:"UTILITY",parent:"",children:[]},{name:"180 DEGREES",a:"180 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID SECTORS",a:"网格扇区",category:"UTILITY",parent:"",children:[{name:"1 SECTORS",a:"1 扇区",category:"UTILITY",parent:"",children:[]},{name:"2 SECTORS",a:"2 扇区",category:"UTILITY",parent:"",children:[]},{name:"3 SECTORS",a:"3 扇区",category:"UTILITY",parent:"",children:[]},{name:"4 SECTORS",a:"4 扇区",category:"UTILITY",parent:"",children:[]},{name:"5 SECTORS",a:"5 扇区",category:"UTILITY",parent:"",children:[]},{name:"6 SECTORS",a:"6 扇区",category:"UTILITY",parent:"",children:[]}]},{name:"CENTER AIRCRAFT",a:"飞机置中",category:"UTILITY",parent:"",children:[]}]}]},{name:"CMS & RWR",a:"电子对抗 & 雷达警告",category:"DEFENSIVE",parent:"",children:[{name:["CMS MODE","(FENCED IN)"],a:["对抗措施 模式","(进入战区)"],category:"DEFENSIVE",parent:"",children:[{name:["AUTO (C)","MAN (F)"],a:["自动（箔条）","手动（红外干扰弹）"],category:"DEFENSIVE",parent:"",children:[]},{name:["MAN (C,F)","(DEFAULT)"],a:["手动（箔条，红外干扰弹）","（默认）"],category:"DEFENSIVE",parent:"",children:[]},{name:"OFF",a:"关闭",category:"DEFENSIVE",parent:"",children:[]}]},{name:"FLARE MODE",a:"红外干扰弹模式",category:"DEFENSIVE",parent:"",children:[{name:["FLARE","PILOT"],a:["红外干扰弹","飞行员控制"],category:"DEFENSIVE",parent:"",children:[]},{name:["FLARE","NORMAL"],a:["红外干扰弹","正常"],category:"DEFENSIVE",parent:"",children:[]},{name:["FLARE","MULTI"],a:["红外干扰弹","齐射"],category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET CHAFF","PROGRAM"],a:["设定箔条","程序"],category:"DEFENSIVE",parent:"",children:[{name:["B:RAND * RAND","S:1 * 2 SEC"],a:["连投：随机 * 随机","齐射轮数：1 * 2 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * RAND","S:4 * 6 SEC"],a:["连投：随机 * 随机","齐射轮数：4 * 6 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * RAND","S:8 * 6 SEC"],a:["连投：随机 * 随机","齐射轮数：8 * 6 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:2 * 0.12 SEC","S:4 * 4 SEC"],a:["连投：2 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:2 * 0.12 SEC","S:8 * 4 SEC"],a:["连投：2 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:4 * 0.12 SEC","S:4 * 4 SEC"],a:["连投：4 * 0.12 秒间隔","齐射轮数：4 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:4 * 0.12 SEC","S:8 * 4 SEC"],a:["连投：4 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * 1 SEC","S:8 * 2 SEC"],a:["连投：随机 * 1 秒间隔","齐射轮数：8 * 2 秒间隔"],category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET FLARE","PROGRAM"],a:["设定红外干扰弹","程序"],category:"DEFENSIVE",parent:"",children:[{name:"S:2 * 2 SEC",a:"齐射轮数：2 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:4 * 2 SEC",a:"齐射轮数：4 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S10 * 2 SEC",a:"齐射轮数：10 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:4 * 6 SEC",a:"齐射轮数：4 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:8 * 6 SEC",a:"齐射轮数：8 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:10 * 6 SEC",a:"齐射轮数：10 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:6 * 10 SEC",a:"齐射轮数：6 * 10 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:10 * 10 SEC",a:"齐射轮数：10 * 10 秒间隔",category:"DEFENSIVE",parent:"",children:[]}]},{name:["CMS CONTROL","ORDER"],a:["对抗措施控制","命令"],category:"DEFENSIVE",parent:"",children:[{name:"CHAFF: PROGRAM",a:"箔条：程序",category:"DEFENSIVE",parent:"",children:[]},{name:"CHAFF: SINGLE",a:"箔条：单发",category:"DEFENSIVE",parent:"",children:[]},{name:"CHAFF: TIGHT",a:"箔条：密集",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: PROGRAM",a:"红外干扰弹：程序",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: SINGLE",a:"红外干扰弹：单发",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: TIGHT",a:"红外干扰弹：密集",category:"DEFENSIVE",parent:"",children:[]}]},{name:["RWR DISPLAY","TYPE"],a:["RWR 显示","类型"],category:"DEFENSIVE",parent:"",children:[{name:"NORMAL",a:"正常",category:"DEFENSIVE",parent:"",children:[]},{name:["AIRBORNE","INTERCEPTOR"],a:["空基","拦截器"],category:"DEFENSIVE",parent:"",children:[]},{name:"AAA",a:"高射炮",category:"DEFENSIVE",parent:"",children:[]},{name:"UNKNOWN",a:"不明",category:"DEFENSIVE",parent:"",children:[]},{name:"FRIENDLY",a:"友机",category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET JAMMER","XMIT"],a:["设定干扰机","发射"],category:"DEFENSIVE",parent:"",children:[]}]},{name:"DATA LINK",a:"数据链路",category:"RADIO",parent:"",children:[{name:"SET MODE",a:"设定模式",category:"RADIO",parent:"",children:[{name:"TACTICAL DATALINK SYSTEM",a:"战术数据链路系统",category:"RADIO",parent:"",children:[]},{name:"FIGHTER-TO-FIGHTER",a:"战机间",category:"RADIO",parent:"",children:[]},{name:"OFF",a:"关闭",category:"RADIO",parent:"",children:[]}]},{name:"SET FREQUENCY PRESET",a:"设定预设频率",category:"RADIO",parent:"",children:[{name:["300.00MHZ","(AI F2F)"],a:["300.00MHZ","(AI 战机间使用)"],category:"RADIO",parent:"",children:[]},{name:"300.10MHZ",a:"300.10MHZ",category:"RADIO",parent:"",children:[]},{name:"300.20MHZ",a:"300.20MHZ",category:"RADIO",parent:"",children:[]},{name:"300.30MHZ",a:"300.30MHZ",category:"RADIO",parent:"",children:[]},{name:"300.40MHZ",a:"300.40MHZ",category:"RADIO",parent:"",children:[]},{name:"300.50MHZ",a:"300.50MHZ",category:"RADIO",parent:"",children:[]},{name:"300.60MHZ",a:"300.60MHZ",category:"RADIO",parent:"",children:[]},{name:"300.70MHZ",a:"300.70MHZ",category:"RADIO",parent:"",children:[]}]},{name:"SET HOST",a:"设定主机",category:"RADIO",parent:"",children:[{name:["OVERLORD 1-1","E-2D","ATDS"],a:["OVERLORD 1-1","E-2D","空中战术数据系统"],category:"RADIO",parent:"",children:[]},{name:["OVERLORD 1-1","E-3A","ATDS"],a:["OVERLORD 1-1","E-3A","空中战术数据系统"],category:"RADIO",parent:"",children:[]},{name:["CVN-73",'CVN-73"George.Washington"',"NTDS"],a:["CVN-73",'CVN-73"乔治.华盛顿"',"海军战术数据系统"],category:"RADIO",parent:"",children:[]}]}]},{name:"CREW CONTRACT",a:"机组协议",category:"UTILITY",parent:"",children:[{name:"SET INACTIVE",a:"停用 Jester",category:"UTILITY",parent:"",children:[]},{name:"SET NO TALKING",a:"禁言 Jester",category:"UTILITY",parent:"",children:[]},{name:"SET EJECT BOTH",a:"设定为一起弹射",category:"UTILITY",parent:"",children:[]},{name:["DISABLE LANDING","CALLOUTS"],a:["禁用着陆","标注"],category:"UTILITY",parent:"",children:[]}]}],iceman:[],categories:[{name:"radar",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:6,startY:7,sizeX:50,sizeY:50,color:"#d4c618"},{name:"radio",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:326,startY:7,sizeX:50,sizeY:50,color:"#00acc3"},{name:"weapons",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:262,startY:7,sizeX:50,sizeY:50,color:"#fd9201"},{name:"defensive",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:198,startY:7,sizeX:50,sizeY:50,color:"#49c601"},{name:"utility",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:70,startY:7,sizeX:50,sizeY:50,color:"#3e8df0"}]},E={name:"JesterMenu",data:function(){return{isLoading:!0,translated:!0,mouseX:-1,mouseY:-1,trackAngle:-1,trackSector:-1,offsetX:-1,offsetY:-1,cx:0,cy:0,radialInnerRadius:115,radialOuterRadius:300,ctx:{type:CanvasRenderingContext2D},canvas:{type:HTMLCanvasElement},currentMenu:[],contextMenuName:l.static.mainMenu,contextMenuColor:"#fd9201",contextMenuRemark:"",contextMenuNameAlias:l.static.mainMenu,contextMenuNameRaw:"Main Menu",commandMenu:l.jester,icons:l.categories}},mounted:function(){var e=this;l.states.a2g={weaponActive:"MK-82",aimMode:"CPT/PLT",pair:"SGL",fuze:"N/T",quantity:"STEP",timer:"",distance:""},this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=1280,this.canvas.height=720,this.cx=this.canvas.width/2,this.cy=this.canvas.height/2,this.canvas.oncontextmenu=function(e){e.preventDefault(),e.stopPropagation()},this.currentMenu=this.commandMenu;var a=new Image;a.src="http://dcs.f-14.jester-radial-menu.font-preload",a.onerror=function(){e.drawRingFrame(),e.drawContextDetail(),e.isLoading=!1}},methods:{drawSelectorLine:function(e){var a=e.layerX,t=e.layerY;this.ctx.beginPath(),this.ctx.moveTo(this.cx,this.cy),this.ctx.lineTo(a,t),this.ctx.closePath(),this.ctx.stroke()},getPointRotateCoordinates:function(e,a,t,n,r,c){var i=e-t,o=a-n,h=i*Math.cos(c)-o*Math.sin(c),s=i*Math.sin(c)+o*Math.cos(c),l=h+t,E=s+n;return{fx:l,fy:E}},drawOctSector:function(e,a,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,this.radialOuterRadius,e-a,e+a),this.ctx.arc(this.cx,this.cy,this.radialInnerRadius,e+a,e-a,!0),this.ctx.closePath();var n=document.getElementById("JuiTriangles"),r=this.cx+this.radialOuterRadius*Math.sin(-e+a),c=this.cy+this.radialOuterRadius*Math.cos(-e+a);this.ctx.save(),this.ctx.translate(r,c),this.ctx.rotate(e-a),this.ctx.translate(-r,-c),this.ctx.drawImage(n,0,0,36,27,r-13,c-16,27,20),this.ctx.restore(),t&&(this.ctx.fillStyle=t,this.ctx.fill())},drawText:function(e,a,t){var n=this;e-=2*a,this.ctx.fillStyle="rgba(255, 255, 255, 1)",this.ctx.textAlign="center",this.ctx.font=this.translated?"16px DroidSansFallback":"16px Trebuchet MS";var r=this.cx+230*Math.sin(2*a-e),c=this.cy+230*Math.cos(2*a-e);if(t<this.currentMenu.length){var i=document.getElementById("JuiTriangles"),o=this.cx+(this.radialInnerRadius-3)*Math.sin(2*a-e),h=this.cy+(this.radialInnerRadius-3)*Math.cos(2*a-e);if(this.ctx.save(),this.ctx.translate(o,h),this.ctx.rotate(e+6*a),this.ctx.translate(-o,-h),this.ctx.drawImage(i,36,0,36,27,o-16,h-16,27,20),this.ctx.restore(),this.translated)if(Array.isArray(this.currentMenu[t].a)){var s=c-18*this.currentMenu[t].a.length+25,E=document.getElementById("JuiCategory"),I=this.currentMenu[t].category,d=l.categories.find((function(e){return e.name===I.toLowerCase()}));this.ctx.drawImage(E,d.startX,d.startY,d.sizeX,d.sizeY,r-24,s-48,48,48),this.currentMenu[t].a.forEach((function(e){n.ctx.fillText(e,r,s+=20)})),this.ctx.fillStyle=l.categories.find((function(e){return e.name===n.currentMenu[t].category.toLowerCase()})).color;var T=this.currentMenu[t].category;this.ctx.fillText(l.static.category[T],r,c+50)}else{var m=document.getElementById("JuiCategory"),g=this.currentMenu[t].category,A=l.categories.find((function(e){return e.name===g.toLowerCase()}));this.ctx.drawImage(m,A.startX,A.startY,A.sizeX,A.sizeY,r-24,c-58,48,48),this.ctx.fillText(this.currentMenu[t].a||this.currentMenu[t].name,r,c+10),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===n.currentMenu[t].category.toLowerCase()})).color;var u=this.currentMenu[t].category;this.ctx.fillText(l.static.category[u],r,c+30)}else if(Array.isArray(this.currentMenu[t].name)){var R=c-18*this.currentMenu[t].name.length+25,p=document.getElementById("JuiCategory"),y=this.currentMenu[t].category,S=l.categories.find((function(e){return e.name===y.toLowerCase()}));this.ctx.drawImage(p,S.startX,S.startY,S.sizeX,S.sizeY,r-24,R-48,48,48),this.currentMenu[t].name.forEach((function(e){n.ctx.fillText(e,r,R+=20)})),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===n.currentMenu[t].category.toLowerCase()})).color,this.ctx.fillText(this.currentMenu[t].category,r,c+50)}else{var D=document.getElementById("JuiCategory"),N=this.currentMenu[t].category,M=l.categories.find((function(e){return e.name===N.toLowerCase()}));this.ctx.drawImage(D,M.startX,M.startY,M.sizeX,M.sizeY,r-24,c-58,48,48),this.ctx.fillText(this.currentMenu[t].name,r,c+10),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===n.currentMenu[t].category.toLowerCase()})).color,this.ctx.fillText(this.currentMenu[t].category,r,c+30)}this.ctx.font=this.translated?"32px DroidSansFallback":"32px Trebuchet MS",r=this.cx+145*Math.sin(2*a-e),c=this.cy+145*Math.cos(2*a-e),this.ctx.fillText(t+1,r,c+16),this.ctx.font="10px Trebuchet MS",r=this.cx+145*Math.sin(2*a-e),c=this.cy+145*Math.cos(2*a-e),this.ctx.fillText(this.translated?l.static.press:"PRESS",r-25,c+16)}},drawContextDetail:function(){if(this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,this.radialInnerRadius,Math.PI/16,Math.PI-Math.PI/16),this.ctx.closePath(),this.ctx.fillStyle="rgba(0, 0, 0, 0.45)",this.ctx.fill(),this.ctx.font=this.translated?"bold 42px DroidSansFallback":"bold 42px Trebuchet MS",this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.ctx.fillText("JESTER",this.cx,this.cy+60),this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(this.contextMenuName.toUpperCase(),this.cx,this.cy+90),this.contextMenuRemark)if(this.ctx.beginPath(),this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,115,0,Math.PI/16),this.ctx.arc(this.cx,this.cy,115,Math.PI-Math.PI/16,Math.PI),this.ctx.closePath(),this.ctx.fillStyle="rgba(0, 0, 0, 0.2)",this.ctx.fill(),this.contextMenuRemark.includes("|")){var e=this.contextMenuRemark.split("|"),a=e[0].trim(),t=e[1].split(",").map((function(e){return e.trim()}));this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(t.map((function(e){return l.states[a][e]})).join(", ").toUpperCase(),this.cx,this.cy+18)}else this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(this.contextMenuName.toUpperCase(),this.cx,this.cy)},drawRingFrame:function(){for(var e=Math.PI/8,a=-Math.PI/2,t=this.getCurrentSectorIndex(),n=this.calcClickDistance(this.cx,this.cy,this.mouseX,this.mouseY),r=0;r<8;r++)t===r&&n>this.radialInnerRadius?this.drawOctSector(a,e,"rgba(255, 255, 255, 0.1)"):this.drawOctSector(a,e),this.drawText(a,e,r),a+=2*e},handleMouseMove:function(e){var a=e.layerX,t=e.layerY;this.mouseX=a,this.mouseY=t,this.offsetX=this.mouseX-this.canvas.width/2,this.offsetY=this.mouseY-this.canvas.height/2;var n=.375*-Math.PI,r=this.offsetX*Math.cos(n)-this.offsetY*Math.sin(n),c=this.offsetX*Math.sin(n)+this.offsetY*Math.cos(n);this.offsetX=r,this.offsetY=c,this.trackAngle=Math.atan2(this.offsetY,this.offsetX),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawRingFrame(),this.drawContextDetail(),this.drawSelectorLine({layerX:a,layerY:t})},handleMouseClick:function(e){var a=this;if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),2===e.button)this.currentMenu=this.commandMenu,this.translated?this.contextMenuName=l.static.mainMenu:this.contextMenuName="Main Menu",this.contextMenuNameRaw="Main Menu",this.contextMenuNameAlias=l.static.mainMenu,this.contextMenuColor="#fd9201",this.contextMenuRemark="";else if(0===e.button&&this.calcClickDistance(this.cx,this.cy,e.layerX,e.layerY)>this.radialInnerRadius){var t=this.trackAngle+1.25*Math.PI,n=Math.floor(t/(Math.PI/4))-1;console.log("switch to section -> ".concat(n)),this.currentMenu.length>n&&this.currentMenu[n].children&&this.currentMenu[n].children.length>0&&(this.translated?Array.isArray(this.currentMenu[n].a)?(this.contextMenuName=this.currentMenu[n].a.join(" "),this.contextMenuNameRaw=this.currentMenu[n].name.join(" "),this.contextMenuNameAlias=this.contextMenuName):(this.contextMenuName=this.currentMenu[n].a||this.currentMenu[n].name,this.contextMenuNameRaw=this.currentMenu[n].name,this.contextMenuNameAlias=this.contextMenuName):Array.isArray(this.currentMenu[n].name)?(this.contextMenuName=this.currentMenu[n].name.join(" "),this.contextMenuNameRaw=this.contextMenuName,this.currentMenu[n].a&&Array.isArray(this.currentMenu[n].a)?this.contextMenuNameAlias=this.currentMenu[n].a.join(" ")||this.contextMenuName:this.contextMenuNameAlias=this.contextMenuName):(this.contextMenuName=this.currentMenu[n].name,this.contextMenuNameRaw=this.contextMenuName,this.contextMenuNameAlias=this.currentMenu[n].a||this.contextMenuName),this.contextMenuColor=l.categories.find((function(e){return e.name===a.currentMenu[n].category.toLowerCase()})).color,this.contextMenuRemark=this.currentMenu[n].remark||"",this.currentMenu=this.currentMenu[n].children)}this.drawRingFrame(),this.drawContextDetail(),this.drawSelectorLine(e)},getCurrentSectorIndex:function(){var e=this.trackAngle+1.25*Math.PI;return Math.floor(e/(Math.PI/4))-1},updateCanvas:function(){this.translated?this.contextMenuName=this.contextMenuNameAlias:this.contextMenuName=this.contextMenuNameRaw,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawRingFrame(),this.drawContextDetail()},calcClickDistance:function(e,a,t,n){return Math.sqrt(Math.pow(t-e,2)+Math.pow(n-a,2))}}},I=E,d=(t("9f9f"),t("2877")),T=Object(d["a"])(I,i,o,!1,null,null,null),m=T.exports,g={name:"App",components:{JesterMenu:m}},A=g,u=(t("034f"),Object(d["a"])(A,r,c,!1,null,null,null)),R=u.exports,p=t("5c96"),y=t.n(p);t("0fae");n["default"].config.productionTip=!1,n["default"].use(y.a,{size:"small"}),new n["default"]({render:function(e){return e(R)}}).$mount("#app")},"85ec":function(e,a,t){},"9c5e":function(e,a,t){e.exports=t.p+"img/jui_triangles.26810947.png"},"9f9f":function(e,a,t){"use strict";var n=t("29af"),r=t.n(n);r.a}});
//# sourceMappingURL=app.f10be326.js.map