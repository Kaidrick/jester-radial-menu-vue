/**
 * Entry类
 * 字段：
 * - name           菜单的名称；字符串或数组，数组每个元素一行
 * - a              菜单的翻译；字符串或数组，数组每个元素一行
 * - category       菜单的类别
 * - parent         菜单的父节点pid（暂未使用）
 * - children       菜单的子节点；数组，数组中是一个Entry类
 * - binary         二选一；根据条件变化的菜单，需要指定条件变量
 * - alt            二选一对立条件下的菜单名；同name
 * - b              二选一对立条件下的菜单翻译；同b
 */

class Entry {
    constructor(name, category, parent, children) {
        console.log(name, category, parent, children)
    }
}

export default {
    states: {
        test: new Entry(),

        conditions: {

        },

        mode: '',
        a2g: {
            weaponActive: '',
            aimMode: '',
            pair: '',
            fuze: '',
            quantity: '',
            timer: '',
            distance: '',
        },
        a2a: {

        },
    },

    static: {
        mainMenu: '主菜单',
        press: '按下',

        category: {
            "RADAR": "雷达",
            "RADIO": "无线电",
            "UTILITY": "通用",
            "DEFENSIVE": "防御",
            "NAVIGATION": "导航",
            "WEAPONS": "武器",
        }
    },

    jester: [
        {
            name: 'AN/ARC-182',
            a: '',
            category: 'RADIO',
            parent: '',
            children: [
                {
                    name: 'USE GUARD 243.000',
                    a: '使用救生频率-243.000',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'USE MANUAL 124.000',
                    a: '使用手动频率-124.000',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: ['USE CHANNEL', 'CH1', '124.000'],
                    a: ['使用预设波道波道', '波道', '124.000'],
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE MANUAL',
                    a: '手动调谐频率',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT CHANNEL',
                    a: '选择预设波道',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['PREV', 'CHHANNEL'],
                            a: '上一波道',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['NEXT', 'CHHANNEL'],
                            a: '下一波道',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '1-5'],
                            a: '波道1-5',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '6-10'],
                            a: '波道6-10',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '11-15'],
                            a: '波道11-15',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '16-20'],
                            a: '波道16-20',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '21-25'],
                            a: '波道21-25',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '36-30'],
                            a: '波道36-30',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SELECT MODE',
                    a: '选择模式',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['MODE', 'OFF'],
                            a: '模式-关闭',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TR'],
                            a: '模式-收发',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TG/G'],
                            a: '模式-收发/救生',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'DF'],
                            a: '模式-测向',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TEST'],
                            a: '模式-检测',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODULATION', 'MAN FM'],
                            a: '调制-调频',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'TUNE ATC',
                    a: '调谐至空管',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE TAC',
                    a: '调谐至战斗频率',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: ['BEYOND VISUAL', 'RANGE'],
            a: '超视距',
            category: 'RADAR',
            parent: '',
            children: [
                {
                    name: 'STT LOCK',
                    a: '单目标跟踪锁定',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'TARGET AHEAD',
                            a: '前方的目标',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'ENEMY TARGET AHEAD',
                            a: '前方的敌机',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FRIENDLY TARGET AHEAD',
                            a: '前方的友机',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CHOOSE SPECIFIC TARGET',
                            a: '选择特定目标',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIRST TWS TARGET',
                            a: '第一个 TWS 目标',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'TWS TARGET NUMBER',
                            a: 'TWS 目标序号',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SCAN ELEVATION',
                    a: '扫描仰角',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'SCAN UP OR DOWN',
                            a: '向上或下方扫描',
                            category: 'RADAR',
                            parent: '',
                            children: [
                                {
                                    name: 'AUTO EL AND AZ',
                                    a: '自动仰角和方位角',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'LOW',
                                    a: '低',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['LOW', 'MIDDLE'],
                                    a: '中低',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'MIDDLE',
                                    a: '中',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['HIGH', 'MIDDILE'],
                                    a: '中高',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'HIGH',
                                    a: '高',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                }
                            ],
                        },
                        {
                            name: 'SCAN ALTITUDE AT DISTANCE',
                            a: '指定距离上扫描的高度',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SCAN AZIMUTH',
                    a: '扫描方位角',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: ['AUTO', 'ELEVATION AND AZIMUTH'],
                            a: ['自动', '仰角和方位角'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'LEFT',
                            a: '左',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['LEFT', 'CENTER'],
                            a: ['左', '中'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CENTER',
                            a: '中间',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['RIGHT', 'CENTER'],
                            a: ['右', '中'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'RIGHT',
                            a: '右',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SCAN DISTANCE',
                    a: '扫描距离',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'AUTO',
                            a: '自动',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '25 NM',
                            a: '25 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '50 NM',
                            a: '50 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '100 NM',
                            a: '100 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '200 NM',
                            a: '200 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '400 NM',
                            a: '400 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'RADAR MODE',
                    a: '雷达模式',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'AUTO',
                            a: 'TWS-自动',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'TRACK WHILE SCAN',
                            a: '边扫描边跟踪',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'RANGE WHILE SEARCH',
                            a: '边搜索边测距',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'GROUND STABILIZE',
                    a: '相对地面稳定',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: '15 S',
                            a: '15 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '30 S',
                            a: '30 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '60 S',
                            a: '60 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '120 S',
                            a: '120 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INDEFINITE',
                            a: '无限',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'GO SILENT',
                    a: '雷达静默',
                    category: 'RADAR',
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: ['WITHIN VISUAL', 'RANGE'],
            a: '视距内',
            category: 'RADAR',
            parent: '',
            children: [
                {
                    name: 'JETTISON DROP TANKS',
                    a: '抛弃副油箱',
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                }
            ],
        },
        {
            name: 'AIR TO GROUND',
            a: '空对地',
            category: 'WEAPONS',
            parent: '',
            children: [
                {
                    name: 'SELECT ORDNANCE',
                    a: '选择挂载',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET COMPUTER TARGET',
                    alt: '',
                    a: '设定计算机目标',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET PAIRS',
                    a: '设定成对投放',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET MECHANICAL FUZE',
                    a: '设定机械引信',
                    category: 'WEAPONS',
                    parent: '',
                    children: [
                        {
                            name: ['NOSE', 'TAIL'],
                            a: ['头部', '尾部'],
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['NOSE'],
                            a: '头部',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['SAFE'],
                            a: '安全',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'RIPPLE SETTINGS',
                    a: '连发设定',
                    category: 'WEAPONS',
                    parent: '',
                    children: [
                        {
                            name: 'SET RIPPLE QUANTITY',
                            a: '设定连发数量',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE TIMER',
                            a: '设定连发时间间隔',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE DISTANCE',
                            a: '设定连发命中点间距',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'JETTISON SELECTED',
                    a: '抛弃选定的挂载',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT STATIONS',
                    a: '选择挂点',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
            ],
            remark: 'a2g | aimMode, pair, fuze, quantity, weaponActive'
        },
        {
            name: 'NAVIGATION',
            a: '导航',
            category: 'UTILITY',
            parent: '',
            children: [],
        },
        {
            name: 'CMS & RWR',
            a: '电子对抗 & 雷达警告',
            category: 'DEFENSIVE',
            parent: '',
            children: [],
        },
        {
            name: 'DATA LINK',
            a: '数据链路',
            category: 'RADIO',
            parent: '',
            children: [],
        },
        {
            name: 'CREW CONTRACT',
            a: '机组协议',
            category: 'UTILITY',
            parent: '',
            children: [],
        },
    ],

    iceman: [],

    categories: [
        {
            // basic
            name: 'radar',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            // icon
            startX: 6,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            // color
            color: '#d4c618'
        },
        {
            name: 'radio',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 326,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#00acc3'
        },
        {
            name: 'weapons',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 262,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#fd9201'
        },
        {
            name: 'defensive',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 198,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#49c601'
        },
        {
            name: 'utility',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 70,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#3e8df0'
        },
    ],

}