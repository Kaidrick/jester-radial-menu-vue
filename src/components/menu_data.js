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
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'USE MANUAL 124.000',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: ['USE CHANNEL', 'CH1', '124.000'],
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE MANUAL',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT CHANNEL',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT MODE',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE ATC',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE TAC',
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
            children: [],
        },
        {
            name: ['WITHIN VISUAL', 'RANGE'],
            a: '视距内',
            category: 'RADAR',
            parent: '',
            children: [
                {
                    name: 'JETTISON DROP TANKS',
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
                    a: '',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET PAIRS',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET MECHANICAL FUZE',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'RIPPLE SETTINGS',
                    category: 'WEAPONS',
                    parent: '',
                    children: [
                        {
                            name: 'SET RIPPLE QUANTITY',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE TIMER',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE DISTANCE',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'JETTISON SELECTED',
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


    // TODO -> use actually image from game and pair start coordinates and size
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