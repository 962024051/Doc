(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{398:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局"}},[t._v("#")]),t._v(" 弹性布局")]),t._v(" "),a("h2",{attrs:{id:"基础单位-父盒子设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础单位-父盒子设置"}},[t._v("#")]),t._v(" 基础单位(父盒子设置)")]),t._v(" "),a("h3",{attrs:{id:"初始化盒子空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化盒子空间"}},[t._v("#")]),t._v(" 初始化盒子空间")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("flex-basis ： content | <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width'")]),t._v(">\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("基于 flex 的元素的内容自动调整大小空间")])]),t._v(" "),a("tr",[a("td",[t._v("<width>")]),t._v(" "),a("td",[t._v("参考宽度 数据类型")])])])]),t._v(" "),a("h3",{attrs:{id:"扩展剩余空间比率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展剩余空间比率"}},[t._v("#")]),t._v(" 扩展剩余空间比率")]),t._v(" "),a("p",[t._v("剩余盒子空间进行按份数分配各自盒子扩展空间")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("flex-grow ： <number>\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("当前盒子初始化大小=外边距+边框+内边距+内容空间\n当前盒子扩展空间=剩余容器空间 / 总份数 * 当前盒子设置份数 + 当前盒子空间\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("<number>")]),t._v(" "),a("td",[t._v("扩展值，不能负值")])])])]),t._v(" "),a("h3",{attrs:{id:"收缩溢出空间比率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收缩溢出空间比率"}},[t._v("#")]),t._v(" 收缩溢出空间比率")]),t._v(" "),a("p",[t._v("溢出盒子空间进行按份数分配各自盒子缩小空间")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("flex-shrink  ： <number>\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("总空间集合=盒子1*缩小1比例+盒子2*缩小2比例+盒子3*缩小3比例+。。。盒子n*缩小n比例\n当前收缩盒子空间= (当前盒子初始大小 * 缩小比例) / 总空间集合 * 溢出空间\n当前盒子最终空间=当前盒子初始大小 - 当前收缩盒子空间\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("<number>")]),t._v(" "),a("td",[t._v("缩放值，不能负值")])])])]),t._v(" "),a("h3",{attrs:{id:"简写属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简写属性"}},[t._v("#")]),t._v(" 简写属性")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("flex：none|[<"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(">? || <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基础值 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*一个值，数字类型: flex-grow 扩展剩余空间  */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*一个值，长度数据类型（宽度/高度）: flex-basis 初始化盒子空间*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 俩个值: flex-grow | flex-basis */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 俩个值: 扩展剩余空间 | 初始化盒子空间 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 俩个值: flex-grow | flex-shrink */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 俩个值: 扩展剩余空间 | 伸缩溢出空间 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 三个值: flex-grow | flex-shrink | flex-basis  */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 俩个值: 扩展剩余空间 | 伸缩溢出空间  | 初始化盒子空间 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2 2 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("auto")]),t._v(" "),a("td",[t._v("自动放大扩展或缩小溢出盒子空间 ，相当于 flex: 1 1 auto")])]),t._v(" "),a("tr",[a("td",[t._v("none")]),t._v(" "),a("td",[t._v("不会扩展或缩小盒子空间，相当于 flex: 0 0 auto")])]),t._v(" "),a("tr",[a("td",[t._v("<flex-grow>")]),t._v(" "),a("td",[t._v("按比例进行扩展剩余空间")])]),t._v(" "),a("tr",[a("td",[t._v("<flex-shrink>")]),t._v(" "),a("td",[t._v("按比例进行缩小溢出空间")])]),t._v(" "),a("tr",[a("td",[t._v("<flex-basis>")]),t._v(" "),a("td",[t._v("初始化盒子空间大小")])])])]),t._v(" "),a("h2",{attrs:{id:"方向与拆行-子盒子设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方向与拆行-子盒子设置"}},[t._v("#")]),t._v(" 方向与拆行(子盒子设置)")]),t._v(" "),a("h3",{attrs:{id:"方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方向"}},[t._v("#")]),t._v(" 方向")]),t._v(" "),a("p",[t._v("控制盒子元素排列的方向。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" flex-direction ： row | row-reverse | column | column-reverse\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("row")]),t._v(" "),a("td",[t._v("元素盒子沿着 X 轴（水平方向）依次从左到右排列")])]),t._v(" "),a("tr",[a("td",[t._v("row-reverse")]),t._v(" "),a("td",[t._v("元素盒子沿着 X 轴（水平方向）依次从右到左排列")])]),t._v(" "),a("tr",[a("td",[t._v("column")]),t._v(" "),a("td",[t._v("元素盒子沿着 Y 轴（垂直方向）依次从顶部到底部排列")])]),t._v(" "),a("tr",[a("td",[t._v("<flex-shrink>")]),t._v(" "),a("td",[t._v("元素盒子沿着 Y 轴（垂直方向）依次从底部到顶部排列")])])])]),t._v(" "),a("h3",{attrs:{id:"拆行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆行"}},[t._v("#")]),t._v(" 拆行")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nowrap")]),t._v(" "),a("td",[t._v("盒子单行排列，部分盒子会溢出容器外边")])]),t._v(" "),a("tr",[a("td",[t._v("wrap")]),t._v(" "),a("td",[t._v("盒子换行排列，不会溢出容器")])]),t._v(" "),a("tr",[a("td",[t._v("wrap-reverse")]),t._v(" "),a("td",[t._v("与 warp 换行方向相反，其余效果一样")])])])]),t._v(" "),a("h3",{attrs:{id:"简写属性-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简写属性-2"}},[t._v("#")]),t._v(" 简写属性")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-direction'")]),t._v("> || <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-wrap'")]),t._v(">\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单值: <'flex-direction'> */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单值: <'flex-wrap'> */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 双值: <'flex-direction'> and <'flex-wrap'> */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column-reverse wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("<flex-direction>")]),t._v(" "),a("td",[t._v("控制")])]),t._v(" "),a("tr",[a("td",[t._v("<flex-wrap>")]),t._v(" "),a("td",[t._v("盒子换行排列，不会溢出容器")])])])]),t._v(" "),a("h2",{attrs:{id:"排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("order ： <integer>\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("<integer>")]),t._v(" "),a("td",[t._v("整型类型 控制弹性盒子位置 数字越小越在前面")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);