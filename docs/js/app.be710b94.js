(function(e){function a(a){for(var n,i,s=a[0],h=a[1],o=a[2],E=0,m=[];E<s.length;E++)i=s[E],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);l&&l(a);while(m.length)m.shift()();return c.push.apply(c,o||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],n=!0,s=1;s<t.length;s++){var h=t[s];0!==r[h]&&(n=!1)}n&&(c.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={app:0},c=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=a,s=s.slice();for(var o=0;o<s.length;o++)a(s[o]);var l=h;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"29af":function(e,a,t){},"3b56":function(e,a,t){e.exports=t.p+"img/jester_ui_category_icons.4f34941b.png"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("jester-menu",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"canvas-wrapper",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{attrs:{id:"preloadFont"}},[e._v("Preparing Font")]),n("div",{attrs:{id:"preloadFontChs"}},[e._v("Preparing Font")]),n("div",[n("canvas",{class:{jester:!e.isIceman,iceman:e.isIceman},attrs:{id:"canvas"},on:{mousemove:e.handleMouseMove,mousedown:e.handleMouseClick}})]),n("div",{staticClass:"switch-wrapper"},[n("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,"active-text":"中","inactive-text":"英"},on:{change:e.updateCanvas},model:{value:e.translated,callback:function(a){e.translated=a},expression:"translated"}}),n("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,"active-text":"Iceman","inactive-text":"Jester"},on:{change:e.selectAI},model:{value:e.isIceman,callback:function(a){e.isIceman=a},expression:"isIceman"}})],1),n("img",{staticStyle:{display:"none"},attrs:{id:"JuiCategory",src:t("3b56")}}),n("img",{staticStyle:{display:"none"},attrs:{id:"JuiTriangles",src:t("9c5e")}})])},s=[],h=(t("cb29"),t("7db0"),t("4160"),t("caad"),t("a15b"),t("d81d"),t("b0c0"),t("ac1f"),t("2532"),t("1276"),t("498a"),t("159b"),t("d4ec")),o=function e(a,t,n,r){Object(h["a"])(this,e),console.log(a,t,n,r)},l={states:{test:new o,conditions:{},mode:"",a2g:{weaponActive:"",aimMode:"",pair:"",fuze:"",quantity:"",timer:"",distance:""},a2a:{}},static:{mainMenu:"主菜单",press:"按下",category:{RADAR:"雷达",RADIO:"无线电",UTILITY:"通用",DEFENSIVE:"防御",NAVIGATION:"导航",WEAPONS:"武器","":""}},jester:[{name:"AN/ARC-182",a:"",category:"RADIO",parent:"",children:[{name:"USE GUARD 243.000",a:"使用救生频率 243.000",category:"RADIO",parent:"",children:[]},{name:"USE MANUAL 124.000",a:"使用手动频率 124.000",category:"RADIO",parent:"",children:[]},{name:["USE CHANNEL","CH1","124.000"],a:["使用预设波道","波道1","124.000"],category:"RADIO",parent:"",children:[]},{name:"TUNE MANUAL",a:"手动调谐频率",category:"RADIO",parent:"",children:[]},{name:"SELECT CHANNEL",a:"选择预设波道",category:"RADIO",parent:"",children:[{name:["PREV","CHHANNEL"],a:"上一波道",category:"RADIO",parent:"",children:[]},{name:["NEXT","CHHANNEL"],a:"下一波道",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","1-5"],a:"波道1-5",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","6-10"],a:"波道6-10",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","11-15"],a:"波道11-15",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","16-20"],a:"波道16-20",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","21-25"],a:"波道21-25",category:"RADIO",parent:"",children:[]},{name:["CHANNELS","36-30"],a:"波道36-30",category:"RADIO",parent:"",children:[]}]},{name:"SELECT MODE",a:"选择模式",category:"RADIO",parent:"",children:[{name:["MODE","OFF"],a:["模式","OFF"],category:"RADIO",parent:"",children:[]},{name:["MODE","TR"],a:["模式","收发"],category:"RADIO",parent:"",children:[]},{name:["MODE","TG/G"],a:["模式","收发/救生"],category:"RADIO",parent:"",children:[]},{name:["MODE","DF"],a:["模式","测向"],category:"RADIO",parent:"",children:[]},{name:["MODE","TEST"],a:["模式","检测"],category:"RADIO",parent:"",children:[]},{name:["MODULATION","MAN FM"],a:["调制","调频"],category:"RADIO",parent:"",children:[]}]},{name:"TUNE ATC",a:"调谐至空管",category:"RADIO",parent:"",children:[]},{name:"TUNE TAC",a:"调谐至战斗频率",category:"RADIO",parent:"",children:[{name:["ARCO 1-1","KC-135MPRS"],category:"RADIO",parent:"",children:[]},{name:["OVERLORD 1-1","E-2D"],category:"RADIO",parent:"",children:[]}]}]},{name:["BEYOND VISUAL","RANGE"],a:"超视距",category:"RADAR",parent:"",children:[{name:"STT LOCK",a:"单目标跟踪锁定",category:"RADAR",parent:"",children:[{name:"TARGET AHEAD",a:"前方的目标",category:"RADAR",parent:"",children:[]},{name:"ENEMY TARGET AHEAD",a:"前方的敌机",category:"RADAR",parent:"",children:[]},{name:"FRIENDLY TARGET AHEAD",a:"前方的友机",category:"RADAR",parent:"",children:[]},{name:"CHOOSE SPECIFIC TARGET",a:"选择特定目标",category:"RADAR",parent:"",children:[{name:["REL.AZ: -18 DEG","DISTANCE: 30 NM"],a:["相对方位：-18 度","距离：30 海里"],category:"RADAR",parent:"",children:[]},{name:["REL.AZ: 16 DEG","DISTANCE: 32 NM"],a:["相对方位：16 度","距离：32 海里"],category:"RADIO",parent:"",children:[]}]},{name:"FIRST TWS TARGET",a:"第一个 TWS 目标",category:"RADAR",parent:"",children:[]},{name:"TWS TARGET NUMBER",a:"TWS 目标序号",category:"RADAR",parent:"",children:[]}]},{name:"SCAN ELEVATION",a:"扫描仰角",category:"RADAR",parent:"",children:[{name:"SCAN UP OR DOWN",a:"向上或下方扫描",category:"RADAR",parent:"",children:[{name:"AUTO EL AND AZ",a:"自动仰角和方位角",category:"RADAR",parent:"",children:[]},{name:"LOW",a:"低",category:"RADAR",parent:"",children:[]},{name:["LOW","MIDDLE"],a:"中低",category:"RADAR",parent:"",children:[]},{name:"MIDDLE",a:"中",category:"RADAR",parent:"",children:[]},{name:["HIGH","MIDDILE"],a:"中高",category:"RADAR",parent:"",children:[]},{name:"HIGH",a:"高",category:"RADAR",parent:"",children:[]}]},{name:"SCAN ALTITUDE AT DISTANCE",a:"指定距离上扫描的高度",category:"RADAR",parent:"",children:[]}]},{name:"SCAN AZIMUTH",a:"扫描方位角",category:"RADAR",parent:"",children:[{name:["AUTO","ELEVATION AND AZIMUTH"],a:["自动","仰角和方位角"],category:"RADAR",parent:"",children:[]},{name:"LEFT",a:"左",category:"RADAR",parent:"",children:[]},{name:["LEFT","CENTER"],a:["左","中"],category:"RADAR",parent:"",children:[]},{name:"CENTER",a:"中间",category:"RADAR",parent:"",children:[]},{name:["RIGHT","CENTER"],a:["右","中"],category:"RADAR",parent:"",children:[]},{name:"RIGHT",a:"右",category:"RADAR",parent:"",children:[]}]},{name:"TID RANGE",a:"TID 显示距离",category:"RADAR",parent:"",children:[{name:"AUTO",a:"自动",category:"RADAR",parent:"",children:[]},{name:"25 NM",a:"25 海里",category:"RADAR",parent:"",children:[]},{name:"50 NM",a:"50 海里",category:"RADAR",parent:"",children:[]},{name:"100 NM",a:"100 海里",category:"RADAR",parent:"",children:[]},{name:"200 NM",a:"200 海里",category:"RADAR",parent:"",children:[]},{name:"400 NM",a:"400 海里",category:"RADAR",parent:"",children:[]}]},{name:"RADAR SETTING",a:"雷达设置",category:"RADAR",parent:"",children:[{name:"AUTO",a:"自动",category:"RADAR",parent:"",children:[]},{name:["TRACK WHILE SCAN","AUTO"],a:["边扫描边跟踪","自动"],category:"RADAR",parent:"",children:[]},{name:["TRACK WHILE SCAN","MANUAL"],a:["边扫描边跟踪","手动"],category:"RADAR",parent:"",children:[]},{name:"RANGE WHILE SEARCH",a:"边搜索边测距",category:"RADAR",parent:"",children:[]},{name:"TARGET SIZE SWITCH",a:"目标大小开关",category:"RADAR",parent:"",children:[{name:"NORMAL",a:"正常大小",category:"RADAR",parent:"",children:[]},{name:"LARGE",a:"大",category:"RADAR",parent:"",children:[]},{name:"SMALL",a:"小",category:"RADAR",parent:"",children:[]}]}]},{name:"TID GROUND STABILIZE",a:"TID 相对地面稳定",category:"RADAR",parent:"",children:[{name:"15 S",a:"15 秒",category:"RADAR",parent:"",children:[]},{name:"30 S",a:"30 秒",category:"RADAR",parent:"",children:[]},{name:"60 S",a:"60 秒",category:"RADAR",parent:"",children:[]},{name:"120 S",a:"120 秒",category:"RADAR",parent:"",children:[]},{name:"INDEFINITE",a:"无限",category:"RADAR",parent:"",children:[]}]},{name:"GO SILENT",a:"雷达静默",category:"RADAR",parent:"",children:[]}]},{name:["WITHIN VISUAL","RANGE"],a:"视距内",category:"RADAR",parent:"",children:[{name:"JETTISON DROP TANKS",a:"抛弃副油箱",category:"UTILITY",parent:"",children:[]}]},{name:"AIR TO GROUND",a:"空对地",category:"WEAPONS",parent:"",children:[{name:"SELECT ORDNANCE",a:"选择挂载",category:"WEAPONS",parent:"",children:[]},{name:"SET COMPUTER TARGET",alt:"",a:"设定计算机目标",category:"WEAPONS",parent:"",children:[]},{name:"SET PAIRS",a:"设定成对投放",category:"WEAPONS",parent:"",children:[]},{name:"SET MECHANICAL FUZE",a:"设定机械引信",category:"WEAPONS",parent:"",children:[{name:["NOSE","TAIL"],a:["头部","尾部"],category:"WEAPONS",parent:"",children:[]},{name:"NOSE",a:"头部",category:"WEAPONS",parent:"",children:[]},{name:"SAFE",a:"安全",category:"WEAPONS",parent:"",children:[]}]},{name:"RIPPLE SETTINGS",a:"连发设定",category:"WEAPONS",parent:"",children:[{name:"SET RIPPLE QUANTITY",a:"设定连发数量",category:"WEAPONS",parent:"",children:[]},{name:"SET RIPPLE TIMER",a:"设定连发时间间隔",category:"WEAPONS",parent:"",children:[]},{name:"SET RIPPLE DISTANCE",a:"设定连发命中点间距",category:"WEAPONS",parent:"",children:[]}]},{name:"JETTISON SELECTED",a:"抛弃选定的挂载",category:"WEAPONS",parent:"",children:[]},{name:"SELECT STATIONS",a:"选择挂点",category:"WEAPONS",parent:"",children:[]}],remark:"a2g | aimMode, pair, fuze, quantity, weaponActive"},{name:"NAVIGATION",a:"导航",category:"UTILITY",parent:"",children:[{name:["SELECT DESTINATION","STEER POINT"],a:["选择目标","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MAN",a:"手动",category:"UTILITY",parent:"",children:[]}]},{name:["RESTORE MISSION","STEER POINT"],a:["恢复任务","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:["MANUAL ENTER","STEER POINT"],a:["手动输入","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:["STEER POINT","FROM MAP"],a:["从地图读取","转向点"],category:"UTILITY",parent:"",children:[{name:"WPT 1",a:"航路点 1",category:"UTILITY",parent:"",children:[]},{name:"WPT 2",a:"航路点 2",category:"UTILITY",parent:"",children:[]},{name:"WPT 3",a:"航路点 3",category:"UTILITY",parent:"",children:[]},{name:"FIXED POINT",a:"固定点",category:"UTILITY",parent:"",children:[]},{name:"INITIAL POINT",a:"起始点",category:"UTILITY",parent:"",children:[]},{name:"SURFACE TARGET",a:"地面/水面目标点",category:"UTILITY",parent:"",children:[]},{name:"HOME BASE",a:"基地",category:"UTILITY",parent:"",children:[]},{name:"MORE STEERPOINTS",a:"更多转向点",category:"UTILITY",parent:"",children:[{name:"DEFENSE POINT",a:"防御点",category:"UTILITY",parent:"",children:[]},{name:"HOSTILE AREA",a:"敌区",category:"UTILITY",parent:"",children:[]}]}]},{name:"TACAN",a:"塔康",category:"RADIO",parent:"",children:[{name:"SELECT MODE",a:"选择模式",category:"RADIO",parent:"",children:[{name:["MODE","OFF"],a:["模式","关闭"],category:"RADIO",parent:"",children:[]},{name:["MODE","REC"],a:["模式","接收"],category:"RADIO",parent:"",children:[]},{name:["MODE","T/R"],a:["模式","收发"],category:"RADIO",parent:"",children:[]},{name:["MODE","A/A"],a:["模式","空空"],category:"RADIO",parent:"",children:[]},{name:["MODE","BCN"],a:["模式","信标"],category:"RADIO",parent:"",children:[]}]},{name:"SELECT CHANNEL",a:"选择波道",category:"RADIO",parent:"",children:[]},{name:["TUNE","GROUND","STATION"],a:["调谐至","地面台"],category:"RADIO",parent:"",children:[]},{name:["TUNE","TAC"],a:["调谐至","战斗波道"],category:"RADIO",parent:"",children:[]}]},{name:"NAVIGATION GRID",a:"导航网格",category:"UTILITY",parent:"",children:[{name:"ENABLE NAVGRID",a:"启用导航网格",category:"UTILITY",parent:"",children:[]},{name:["MANUAL ENTER","NAVGRID REF"],a:["手动输入","导航网格参考点"],category:"UTILITY",parent:"",children:[]},{name:["NAVGRID REF","FROM MAP"],a:["从地图读取","导航网格参考点"],category:"UTILITY",parent:"",children:[]},{name:"GRID HEADING RELATIVE",a:"网格相对航向",category:"UTILITY",parent:"",children:[{name:"+180 DEGREES",a:"+180 度",category:"UTILITY",parent:"",children:[]},{name:"+30 DEGREES",a:"+30 度",category:"UTILITY",parent:"",children:[]},{name:"+90 DEGREES",a:"+90 度",category:"UTILITY",parent:"",children:[]},{name:"+120 DEGREES",a:"+120 度",category:"UTILITY",parent:"",children:[]},{name:"+180 DEGREES",a:"+180 度",category:"UTILITY",parent:"",children:[]},{name:"-120 DEGREES",a:"-120 度",category:"UTILITY",parent:"",children:[]},{name:"-90 DEGREES",a:"-90 度",category:"UTILITY",parent:"",children:[]},{name:"-30 DEGREES",a:"-30 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID HEADING ABSOLUTE",a:"网格绝对航向",category:"UTILITY",parent:"",children:[{name:"0 DEGREES",a:"0 度",category:"UTILITY",parent:"",children:[]},{name:"45 DEGREES",a:"45 度",category:"UTILITY",parent:"",children:[]},{name:"90 DEGREES",a:"90 度",category:"UTILITY",parent:"",children:[]},{name:"135 DEGREES",a:"135 度",category:"UTILITY",parent:"",children:[]},{name:"180 DEGREES",a:"180 度",category:"UTILITY",parent:"",children:[]},{name:"225 DEGREES",a:"225 度",category:"UTILITY",parent:"",children:[]},{name:"270 DEGREES",a:"270 度",category:"UTILITY",parent:"",children:[]},{name:"315 DEGREES",a:"315 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID COVERAGE",a:"网格覆盖范围",category:"UTILITY",parent:"",children:[{name:"30 DEGREES",a:"30 度",category:"UTILITY",parent:"",children:[]},{name:"60 DEGREES",a:"60 度",category:"UTILITY",parent:"",children:[]},{name:"90 DEGREES",a:"90 度",category:"UTILITY",parent:"",children:[]},{name:"120 DEGREES",a:"120 度",category:"UTILITY",parent:"",children:[]},{name:"180 DEGREES",a:"180 度",category:"UTILITY",parent:"",children:[]}]},{name:"GRID SECTORS",a:"网格扇区",category:"UTILITY",parent:"",children:[{name:"1 SECTORS",a:"1 扇区",category:"UTILITY",parent:"",children:[]},{name:"2 SECTORS",a:"2 扇区",category:"UTILITY",parent:"",children:[]},{name:"3 SECTORS",a:"3 扇区",category:"UTILITY",parent:"",children:[]},{name:"4 SECTORS",a:"4 扇区",category:"UTILITY",parent:"",children:[]},{name:"5 SECTORS",a:"5 扇区",category:"UTILITY",parent:"",children:[]},{name:"6 SECTORS",a:"6 扇区",category:"UTILITY",parent:"",children:[]}]},{name:"CENTER AIRCRAFT",a:"飞机置中",category:"UTILITY",parent:"",children:[]}]}]},{name:"CMS & RWR",a:"电子对抗 & 雷达警告",category:"DEFENSIVE",parent:"",children:[{name:["CMS MODE","(FENCED IN)"],a:["对抗措施 模式","(进入战区)"],category:"DEFENSIVE",parent:"",children:[{name:["AUTO (C)","MAN (F)"],a:["自动（箔条）","手动（红外干扰弹）"],category:"DEFENSIVE",parent:"",children:[]},{name:["MAN (C,F)","(DEFAULT)"],a:["手动（箔条，红外干扰弹）","（默认）"],category:"DEFENSIVE",parent:"",children:[]},{name:"OFF",a:"关闭",category:"DEFENSIVE",parent:"",children:[]}]},{name:"FLARE MODE",a:"红外干扰弹模式",category:"DEFENSIVE",parent:"",children:[{name:["FLARE","PILOT"],a:["红外干扰弹","飞行员控制"],category:"DEFENSIVE",parent:"",children:[]},{name:["FLARE","NORMAL"],a:["红外干扰弹","正常"],category:"DEFENSIVE",parent:"",children:[]},{name:["FLARE","MULTI"],a:["红外干扰弹","齐射"],category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET CHAFF","PROGRAM"],a:["设定箔条","程序"],category:"DEFENSIVE",parent:"",children:[{name:["B:RAND * RAND","S:1 * 2 SEC"],a:["连投：随机 * 随机","齐射轮数：1 * 2 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * RAND","S:4 * 6 SEC"],a:["连投：随机 * 随机","齐射轮数：4 * 6 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * RAND","S:8 * 6 SEC"],a:["连投：随机 * 随机","齐射轮数：8 * 6 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:2 * 0.12 SEC","S:4 * 4 SEC"],a:["连投：2 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:2 * 0.12 SEC","S:8 * 4 SEC"],a:["连投：2 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:4 * 0.12 SEC","S:4 * 4 SEC"],a:["连投：4 * 0.12 秒间隔","齐射轮数：4 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:4 * 0.12 SEC","S:8 * 4 SEC"],a:["连投：4 * 0.12 秒间隔","齐射轮数：8 * 4 秒间隔"],category:"DEFENSIVE",parent:"",children:[]},{name:["B:RAND * 1 SEC","S:8 * 2 SEC"],a:["连投：随机 * 1 秒间隔","齐射轮数：8 * 2 秒间隔"],category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET FLARE","PROGRAM"],a:["设定红外干扰弹","程序"],category:"DEFENSIVE",parent:"",children:[{name:"S:2 * 2 SEC",a:"齐射轮数：2 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:4 * 2 SEC",a:"齐射轮数：4 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S10 * 2 SEC",a:"齐射轮数：10 * 2 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:4 * 6 SEC",a:"齐射轮数：4 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:8 * 6 SEC",a:"齐射轮数：8 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:10 * 6 SEC",a:"齐射轮数：10 * 6 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:6 * 10 SEC",a:"齐射轮数：6 * 10 秒间隔",category:"DEFENSIVE",parent:"",children:[]},{name:"S:10 * 10 SEC",a:"齐射轮数：10 * 10 秒间隔",category:"DEFENSIVE",parent:"",children:[]}]},{name:["CMS CONTROL","ORDER"],a:["对抗措施控制","命令"],category:"DEFENSIVE",parent:"",children:[{name:"CHAFF: PROGRAM",a:"箔条：程序",category:"DEFENSIVE",parent:"",children:[]},{name:"CHAFF: SINGLE",a:"箔条：单发",category:"DEFENSIVE",parent:"",children:[]},{name:"CHAFF: TIGHT",a:"箔条：密集",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: PROGRAM",a:"红外干扰弹：程序",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: SINGLE",a:"红外干扰弹：单发",category:"DEFENSIVE",parent:"",children:[]},{name:"FLARE: TIGHT",a:"红外干扰弹：密集",category:"DEFENSIVE",parent:"",children:[]}]},{name:["RWR DISPLAY","TYPE"],a:["RWR 显示","类型"],category:"DEFENSIVE",parent:"",children:[{name:"NORMAL",a:"正常",category:"DEFENSIVE",parent:"",children:[]},{name:["AIRBORNE","INTERCEPTOR"],a:["机载截击雷达"],category:"DEFENSIVE",parent:"",children:[]},{name:"AAA",a:"高射炮",category:"DEFENSIVE",parent:"",children:[]},{name:"UNKNOWN",a:"不明",category:"DEFENSIVE",parent:"",children:[]},{name:"FRIENDLY",a:"友机",category:"DEFENSIVE",parent:"",children:[]}]},{name:["SET JAMMER","XMIT"],a:["设定干扰机","发射"],category:"DEFENSIVE",parent:"",children:[]}]},{name:"DATA LINK",a:"数据链路",category:"RADIO",parent:"",children:[{name:"SET MODE",a:"设定模式",category:"RADIO",parent:"",children:[{name:"TACTICAL DATALINK SYSTEM",a:"战术数据链路系统",category:"RADIO",parent:"",children:[]},{name:"FIGHTER-TO-FIGHTER",a:"战机间",category:"RADIO",parent:"",children:[]},{name:"OFF",a:"关闭",category:"RADIO",parent:"",children:[]}]},{name:"SET FREQUENCY PRESET",a:"设定预设频率",category:"RADIO",parent:"",children:[{name:["300.00MHZ","(AI F2F)"],a:["300.00MHZ","(AI 战机间使用)"],category:"RADIO",parent:"",children:[]},{name:"300.10MHZ",a:"300.10MHZ",category:"RADIO",parent:"",children:[]},{name:"300.20MHZ",a:"300.20MHZ",category:"RADIO",parent:"",children:[]},{name:"300.30MHZ",a:"300.30MHZ",category:"RADIO",parent:"",children:[]},{name:"300.40MHZ",a:"300.40MHZ",category:"RADIO",parent:"",children:[]},{name:"300.50MHZ",a:"300.50MHZ",category:"RADIO",parent:"",children:[]},{name:"300.60MHZ",a:"300.60MHZ",category:"RADIO",parent:"",children:[]},{name:"300.70MHZ",a:"300.70MHZ",category:"RADIO",parent:"",children:[]}]},{name:"SET HOST",a:"设定主机",category:"RADIO",parent:"",children:[{name:["OVERLORD 1-1","E-2D","ATDS"],a:["OVERLORD 1-1","E-2D","空中战术数据系统"],category:"RADIO",parent:"",children:[]},{name:["OVERLORD 1-1","E-3A","ATDS"],a:["OVERLORD 1-1","E-3A","空中战术数据系统"],category:"RADIO",parent:"",children:[]},{name:["CVN-73",'CVN-73"George.Washington"',"NTDS"],a:["CVN-73",'CVN-73"乔治.华盛顿"',"海军战术数据系统"],category:"RADIO",parent:"",children:[]}]}]},{name:"CREW CONTRACT",a:"机组协议",category:"UTILITY",parent:"",children:[{name:"SET INACTIVE",a:"停用 Jester",category:"UTILITY",parent:"",children:[]},{name:"SET NO TALKING",a:"禁言 Jester",category:"UTILITY",parent:"",children:[]},{name:"SET EJECT BOTH",a:"设定为一起弹射",category:"UTILITY",parent:"",children:[]},{name:["DISABLE LANDING","CALLOUTS"],a:["禁用着陆","标注"],category:"UTILITY",parent:"",children:[]}]}],iceman:[{name:["SET HEADING","RELATIVE"],a:["设置","相对航向"],parent:"",children:[{name:["RIGHT","5 DEGREES"],a:["向右","5 度"],parent:"",children:[]},{name:["RIGHT","10 DEGREES"],a:["向右","10 度"],parent:"",children:[]},{name:["RIGHT","30 DEGREES"],a:["向右","30 度"],parent:"",children:[]},{name:["RIGHT","45 DEGREES"],a:["向右","45 度"],parent:"",children:[]},{name:["LEFT","45 DEGREES"],a:["向左","45 度"],parent:"",children:[]},{name:["LEFT","30 DEGREES"],a:["向左","30 度"],parent:"",children:[]},{name:["LEFT","10 DEGREES"],a:["向左","10 度"],parent:"",children:[]},{name:["LEFT","5 DEGREES"],a:["向左","5 度"],parent:"",children:[]}]},{name:["SET HEADING","ABSOLUTE"],a:["设置","绝对航向"],parent:"",children:[{name:"NORTH",a:"北",parent:"",children:[]},{name:"NORTH EAST",a:"东北",parent:"",children:[]},{name:"EAST",a:"东",parent:"",children:[]},{name:"SOUTH EAST",a:"东南",parent:"",children:[]},{name:"SOUTH",a:"南",parent:"",children:[]},{name:"SOUTH WEST",a:"西南",parent:"",children:[]},{name:"WEST",a:"西",parent:"",children:[]},{name:"NORTH WEST",a:"西北",parent:"",children:[]}]},{name:"SET SPEED",a:"设置空速",parent:"",children:[{name:"-200 IAKTS",a:"-200 节指示空速",parent:"",children:[]},{name:"-100 IAKTS",a:"-100 节指示空速",parent:"",children:[]},{name:"-50 IAKTS",a:"-50 节指示空速",parent:"",children:[]},{name:"+50 IAKTS",a:"+50 节指示空速",parent:"",children:[]},{name:"+100 IAKTS",a:"+100 节指示空速",parent:"",children:[]},{name:"+200 IAKTS",a:"+200 节指示空速",parent:"",children:[]}]},{name:["SET ANGELS","RELATIVE"],a:["设置","相对高度"],parent:"",children:[{name:"DESCEND 10000",a:"下降 10000",parent:"",children:[]},{name:"DESCEND 5000",a:"下降 5000",parent:"",children:[]},{name:"DESCEND 1000",a:"下降 1000",parent:"",children:[]},{name:"DESCEND 500",a:"下降 500",parent:"",children:[]},{name:"CLIMB 500",a:"爬升 500",parent:"",children:[]},{name:"CLIMB 1000",a:"爬升 1000",parent:"",children:[]},{name:"CLIMB 5000",a:"爬升 5000",parent:"",children:[]},{name:"CLIMB 10000",a:"爬升 10000",parent:"",children:[]}]},{name:["SET ANGELS","ABSOLUTE"],a:["设置","绝对高度"],parent:"",children:[{name:"ANGELS 1",a:"1000 英尺",parent:"",children:[]},{name:"ANGELS 5",a:"5000 英尺",parent:"",children:[]},{name:"ANGELS 10",a:"10000 英尺",parent:"",children:[]},{name:"ANGELS 15",a:"15000 英尺",parent:"",children:[]},{name:"ANGELS 20",a:"20000 英尺",parent:"",children:[]},{name:"ANGELS 25",a:"25000 英尺",parent:"",children:[]},{name:"ANGELS 30",a:"30000 英尺",parent:"",children:[]},{name:"ANGELS 35",a:"35000 英尺",parent:"",children:[]}]},{name:"_blank",a:[],parent:"",children:[]},{name:"_blank",a:[],parent:"",children:[]},{name:"HOLD CURRENT",a:"保持当前",parent:"",children:[]}],categories:[{name:"radar",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:6,startY:7,sizeX:50,sizeY:50,color:"#d4c618"},{name:"radio",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:326,startY:7,sizeX:50,sizeY:50,color:"#00acc3"},{name:"weapons",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:262,startY:7,sizeX:50,sizeY:50,color:"#fd9201"},{name:"defensive",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:198,startY:7,sizeX:50,sizeY:50,color:"#49c601"},{name:"utility",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:70,startY:7,sizeX:50,sizeY:50,color:"#3e8df0"},{name:"",value:"https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg",startX:70,startY:7,sizeX:50,sizeY:50,color:"#d8d8d8"}]},E=t("bee2"),m=function(){function e(){Object(h["a"])(this,e),this.data=[],this.top=0}return Object(E["a"])(e,[{key:"push",value:function(e){this.data[this.top]=e,this.top=this.top+1}},{key:"length",value:function(){return this.top}},{key:"peek",value:function(){return this.data[this.top-1]}},{key:"isEmpty",value:function(){return 0===this.top}},{key:"pop",value:function(){if(!1===this.isEmpty())return this.top=this.top-1,this.data.pop()}},{key:"clear",value:function(){this.data=[],this.top=0}},{key:"print",value:function(){var e=this.top-1;while(e>=0)console.log(this.data[e]),e--}},{key:"reverse",value:function(){this._reverse(this.top-1)}},{key:"_reverse",value:function(e){0!==e&&this._reverse(e-1),console.log(this.data[e])}}]),e}(),d=m,I={name:"JesterMenu",data:function(){return{isLoading:!0,isIceman:!1,translated:!0,mouseX:-1,mouseY:-1,trackAngle:-1,trackSector:-1,offsetX:-1,offsetY:-1,cx:0,cy:0,radialInnerRadius:115,radialOuterRadius:300,ctx:{type:CanvasRenderingContext2D},canvas:{type:HTMLCanvasElement},currentMenu:[],contextMenuName:l.static.mainMenu,contextMenuColor:"#fd9201",contextMenuRemark:"",contextMenuNameAlias:l.static.mainMenu,contextMenuNameRaw:"Main Menu",commandMenu:l.jester,icons:l.categories,menuStack:new d,menuNameStack:new d}},mounted:function(){var e=this;l.states.a2g={weaponActive:"MK-82",aimMode:"CPT/PLT",pair:"SGL",fuze:"N/T",quantity:"STEP",timer:"",distance:""},this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=1280,this.canvas.height=720,this.cx=this.canvas.width/2,this.cy=this.canvas.height/2,this.canvas.oncontextmenu=function(e){e.preventDefault(),e.stopPropagation()},this.currentMenu=this.commandMenu;var a=new Image;a.src="http://dcs.f-14.jester-radial-menu.font-preload",a.onerror=function(){e.drawRingFrame(),e.drawContextDetail(),e.isLoading=!1}},methods:{drawSelectorLine:function(e){var a=e.layerX,t=e.layerY;this.ctx.beginPath(),this.ctx.moveTo(this.cx,this.cy),this.ctx.lineTo(a,t),this.ctx.closePath(),this.ctx.stroke()},getPointRotateCoordinates:function(e,a,t,n,r,c){var i=e-t,s=a-n,h=i*Math.cos(c)-s*Math.sin(c),o=i*Math.sin(c)+s*Math.cos(c),l=h+t,E=o+n;return{fx:l,fy:E}},drawOctSector:function(e,a,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,this.radialOuterRadius,e-a,e+a),this.ctx.arc(this.cx,this.cy,this.radialInnerRadius,e+a,e-a,!0),this.ctx.closePath();var n=document.getElementById("JuiTriangles"),r=this.cx+this.radialOuterRadius*Math.sin(-e+a),c=this.cy+this.radialOuterRadius*Math.cos(-e+a);this.ctx.save(),this.ctx.translate(r,c),this.ctx.rotate(e-a),this.ctx.translate(-r,-c),this.ctx.drawImage(n,0,0,36,27,r-13,c-16,27,20),this.ctx.restore(),t&&(this.ctx.fillStyle=t,this.ctx.fill())},drawText:function(e,a,t){var n=this;e-=2*a,this.ctx.fillStyle="rgba(255, 255, 255, 1)",this.ctx.textAlign="center",this.ctx.font=this.translated?"16px DroidSansFallback":"16px Trebuchet MS";var r=this.cx+230*Math.sin(2*a-e),c=this.cy+230*Math.cos(2*a-e);if(t<this.currentMenu.length){if("_blank"===this.currentMenu[t].name)return;var i=document.getElementById("JuiTriangles"),s=this.cx+(this.radialInnerRadius-3)*Math.sin(2*a-e),h=this.cy+(this.radialInnerRadius-3)*Math.cos(2*a-e);if(this.ctx.save(),this.ctx.translate(s,h),this.ctx.rotate(e+6*a),this.ctx.translate(-s,-h),this.ctx.drawImage(i,36,0,36,27,s-16,h-16,27,20),this.ctx.restore(),this.translated)if(Array.isArray(this.currentMenu[t].a)){var o=c-18*this.currentMenu[t].a.length+25,E=document.getElementById("JuiCategory"),m=this.currentMenu[t].category||"",d=l.categories.find((function(e){return e.name===m.toLowerCase()}));this.isIceman||this.ctx.drawImage(E,d.startX,d.startY,d.sizeX,d.sizeY,r-24,o-48,48,48),this.currentMenu[t].a.forEach((function(e){n.ctx.fillText(e,r,o+=20)})),this.ctx.font="12px Microsoft YaHei",this.ctx.fillStyle=l.categories.find((function(e){return e.name===m.toLowerCase()})).color;var I=this.currentMenu[t].category;this.ctx.fillText(l.static.category[I]||"",r,c+50)}else{var T=document.getElementById("JuiCategory"),u=this.currentMenu[t].category||"",p=l.categories.find((function(e){return e.name===u.toLowerCase()}));this.isIceman||this.ctx.drawImage(T,p.startX,p.startY,p.sizeX,p.sizeY,r-24,c-58,48,48),this.ctx.fillText(this.currentMenu[t].a||this.currentMenu[t].name,r,c+10),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===u.toLowerCase()})).color;var A=this.currentMenu[t].category;this.ctx.fillText(l.static.category[A]||"",r,c+30)}else if(Array.isArray(this.currentMenu[t].name)){var g=c-18*this.currentMenu[t].name.length+25,R=document.getElementById("JuiCategory"),y=this.currentMenu[t].category||"",S=l.categories.find((function(e){return e.name===y.toLowerCase()}));this.isIceman||this.ctx.drawImage(R,S.startX,S.startY,S.sizeX,S.sizeY,r-24,g-48,48,48),this.currentMenu[t].name.forEach((function(e){n.ctx.fillText(e,r,g+=20)})),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===(n.currentMenu[t].category||"").toLowerCase()})).color,this.ctx.fillText(this.currentMenu[t].category||"",r,c+50)}else{var N=document.getElementById("JuiCategory"),M=this.currentMenu[t].category||"",D=l.categories.find((function(e){return e.name===M.toLowerCase()}));this.isIceman||this.ctx.drawImage(N,D.startX,D.startY,D.sizeX,D.sizeY,r-24,c-58,48,48),this.ctx.fillText(this.currentMenu[t].name,r,c+10),this.ctx.font="12px Trebuchet MS",this.ctx.fillStyle=l.categories.find((function(e){return e.name===(n.currentMenu[t].category||"").toLowerCase()})).color,this.ctx.fillText(this.currentMenu[t].category||"",r,c+30)}this.ctx.font=this.translated?"32px DroidSansFallback":"32px Trebuchet MS",r=this.cx+145*Math.sin(2*a-e),c=this.cy+145*Math.cos(2*a-e),this.ctx.fillText(t+1,r,c+16),this.ctx.font="10px Trebuchet MS",r=this.cx+145*Math.sin(2*a-e),c=this.cy+145*Math.cos(2*a-e),this.ctx.fillText(this.translated?l.static.press:"PRESS",r-25,c+16)}},drawContextDetail:function(){if(this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,this.radialInnerRadius,Math.PI/16,Math.PI-Math.PI/16),this.ctx.closePath(),this.ctx.font=this.translated?"bold 42px DroidSansFallback":"bold 42px Trebuchet MS",this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.ctx.fillText(this.isIceman?"ICEMAN":"JESTER",this.cx,this.cy+60),this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(this.contextMenuName.toUpperCase(),this.cx,this.cy+90),this.contextMenuRemark)if(this.ctx.beginPath(),this.ctx.beginPath(),this.ctx.arc(this.cx,this.cy,115,0,Math.PI/16),this.ctx.arc(this.cx,this.cy,115,Math.PI-Math.PI/16,Math.PI),this.ctx.closePath(),this.ctx.fillStyle="rgba(0, 0, 0, 0.2)",this.ctx.fill(),this.contextMenuRemark.includes("|")){var e=this.contextMenuRemark.split("|"),a=e[0].trim(),t=e[1].split(",").map((function(e){return e.trim()}));this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(t.map((function(e){return l.states[a][e]})).join(", ").toUpperCase(),this.cx,this.cy+18)}else this.ctx.font="20px BebasNeue",this.ctx.fillStyle=this.contextMenuColor,this.ctx.fillText(this.contextMenuName.toUpperCase(),this.cx,this.cy)},drawRingFrame:function(){for(var e=Math.PI/8,a=-Math.PI/2,t=this.getCurrentSectorIndex(),n=this.calcClickDistance(this.cx,this.cy,this.mouseX,this.mouseY),r=0;r<8;r++)t===r&&n>this.radialInnerRadius?this.currentMenu[t]&&this.currentMenu[t].name&&"_blank"===this.currentMenu[t].name?this.drawOctSector(a,e):this.drawOctSector(a,e,"rgba(255, 255, 255, 0.1)"):this.drawOctSector(a,e),this.drawText(a,e,r),a+=2*e},handleMouseMove:function(e){var a=e.layerX,t=e.layerY;this.mouseX=a,this.mouseY=t,this.offsetX=this.mouseX-this.canvas.width/2,this.offsetY=this.mouseY-this.canvas.height/2;var n=.375*-Math.PI,r=this.offsetX*Math.cos(n)-this.offsetY*Math.sin(n),c=this.offsetX*Math.sin(n)+this.offsetY*Math.cos(n);this.offsetX=r,this.offsetY=c,this.trackAngle=Math.atan2(this.offsetY,this.offsetX),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawRingFrame(),this.drawContextDetail(),this.drawSelectorLine({layerX:a,layerY:t})},handleMouseClick:function(e){var a=this;if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),2===e.button){var t=this.menuStack.pop(),n=this.menuNameStack.pop();t&&(0===this.menuStack.length()?(this.translated?this.contextMenuName=l.static.mainMenu:this.contextMenuName="Main Menu",this.contextMenuNameRaw="Main Menu",this.contextMenuNameAlias=l.static.mainMenu,this.contextMenuColor="#fd9201",this.contextMenuRemark=""):this.translated?(this.contextMenuName=String(n.alias),this.contextMenuNameRaw=String(n.raw),this.contextMenuNameAlias=String(n.alias)):(this.contextMenuName=String(n.name),this.contextMenuNameAlias=String(n.alias),this.contextMenuNameRaw=String(n.raw)),this.currentMenu=t)}else if(0===e.button)if(this.calcClickDistance(this.cx,this.cy,e.layerX,e.layerY)>this.radialInnerRadius){var r=this.trackAngle+1.25*Math.PI,c=Math.floor(r/(Math.PI/4))-1;console.log("switch to section -> ".concat(c)),this.currentMenu.length>c&&this.currentMenu[c].children&&this.currentMenu[c].children.length>0&&(this.menuStack.push(this.currentMenu),this.menuNameStack.push({raw:this.contextMenuNameRaw,alias:this.contextMenuNameAlias,name:this.contextMenuName}),this.translated?Array.isArray(this.currentMenu[c].a)?(this.contextMenuName=this.currentMenu[c].a.join(" "),this.contextMenuNameRaw=this.currentMenu[c].name.join(" "),this.contextMenuNameAlias=this.contextMenuName):(this.contextMenuName=this.currentMenu[c].a||this.currentMenu[c].name,this.contextMenuNameRaw=this.currentMenu[c].name,this.contextMenuNameAlias=this.contextMenuName):Array.isArray(this.currentMenu[c].name)?(this.contextMenuName=this.currentMenu[c].name.join(" "),this.contextMenuNameRaw=this.contextMenuName,this.currentMenu[c].a&&Array.isArray(this.currentMenu[c].a)?this.contextMenuNameAlias=this.currentMenu[c].a.join(" ")||this.contextMenuName:this.contextMenuNameAlias=this.contextMenuName):(this.contextMenuName=this.currentMenu[c].name,this.contextMenuNameRaw=this.contextMenuName,this.contextMenuNameAlias=this.currentMenu[c].a||this.contextMenuName),this.contextMenuColor=l.categories.find((function(e){return e.name===(a.currentMenu[c].category||"").toLowerCase()})).color,this.contextMenuRemark=this.currentMenu[c].remark||"",this.currentMenu=this.currentMenu[c].children)}else this.currentMenu=this.commandMenu,this.menuStack.clear(),this.menuNameStack.clear(),this.translated?this.contextMenuName=l.static.mainMenu:this.contextMenuName="Main Menu",this.contextMenuNameRaw="Main Menu",this.contextMenuNameAlias=l.static.mainMenu,this.contextMenuColor="#fd9201",this.contextMenuRemark="";this.drawRingFrame(),this.drawContextDetail(),this.drawSelectorLine(e)},getCurrentSectorIndex:function(){var e=this.trackAngle+1.25*Math.PI;return Math.floor(e/(Math.PI/4))-1},updateCanvas:function(){this.translated?this.contextMenuName=this.contextMenuNameAlias:this.contextMenuName=this.contextMenuNameRaw,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawRingFrame(),this.drawContextDetail()},calcClickDistance:function(e,a,t,n){return Math.sqrt(Math.pow(t-e,2)+Math.pow(n-a,2))},selectAI:function(){this.currentMenu=[],this.contextMenuName=l.static.mainMenu,this.contextMenuColor="#fd9201",this.contextMenuRemark="",this.contextMenuNameAlias=l.static.mainMenu,this.contextMenuNameRaw="Main Menu",this.commandMenu=l.jester,this.icons=l.categories,this.menuStack=new d,this.menuNameStack=new d,this.commandMenu=this.isIceman?l.iceman:l.jester,this.currentMenu=this.commandMenu,this.updateCanvas()}}},T=I,u=(t("9f9f"),t("2877")),p=Object(u["a"])(T,i,s,!1,null,null,null),A=p.exports,g={name:"App",components:{JesterMenu:A}},R=g,y=(t("034f"),Object(u["a"])(R,r,c,!1,null,null,null)),S=y.exports,N=t("5c96"),M=t.n(N);t("0fae");n["default"].config.productionTip=!1,n["default"].use(M.a,{size:"small"}),new n["default"]({render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,a,t){},"9c5e":function(e,a,t){e.exports=t.p+"img/jui_triangles.26810947.png"},"9f9f":function(e,a,t){"use strict";var n=t("29af"),r=t.n(n);r.a}});
//# sourceMappingURL=app.be710b94.js.map