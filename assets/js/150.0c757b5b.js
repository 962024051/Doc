(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{502:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),n("h2",{attrs:{id:"接口定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口定义"}},[t._v("#")]),t._v(" 接口定义")]),t._v(" "),n("p",[t._v("对复杂的对象类型进行标注的一种方式，或者给其它代码定义一种契约")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("接口名")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    属性名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数据类型"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    属性名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数据类型"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n声明 变量"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("接口名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    属性名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 属性值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    属性名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 属性值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tom"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"接口语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口语法"}},[t._v("#")]),t._v(" 接口语法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 接口名 {\n    属性名: 数据类型;\n    //可选属性\n    属性名?: 数据类型;\n    //只读属性\n    readonly 属性名: 数据类型;\n    //任意属性\n    [属性名: 数据类型1]: 数据类型2;\n    //可索引的类型\n \t[index: 数据类型1]: 数据类型2;\n}\n")])])]),n("h2",{attrs:{id:"接口示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口示例"}},[t._v("#")]),t._v(" 接口示例")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface Person {\n    name: string;\n    //可选属性\n    age?: number;\n     //只读属性\n    readonly id: number;\n    //任意属性\n    [propName: string]:  number;\n    //可索引的类型\n \t[index: number]: string;\n}\n\nlet tom:Person={\n    name: 'Tom',\n    //可选属性  属性可有可无\n    age: 25,\n    //未定义属性报错\n    //gender: 'male',\n     //只读属性\n    id:89745，\n    //任意属性和任意值数据类型\n    gender1: 'male'\n}\n//只读属性报错\ntom.id=7851\n//可索引的类型\ntom[0]\n")])])]),n("h2",{attrs:{id:"函数接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数接口"}},[t._v("#")]),t._v(" 函数接口")]),t._v(" "),n("p",[t._v("接口参数名和函数参数名 也可以不一致")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 接口名 {\n  (参数名: 数据类型, 参数名: 数据类型): 返回数据类型;\n}\nlet 变量：接口名 = function(参数名: 数据类型, 参数名: 数据类型):返回数据类型 {\n  return 返回值;\n}\n")])])]),n("h2",{attrs:{id:"类接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类接口"}},[t._v("#")]),t._v(" 类接口")]),t._v(" "),n("p",[t._v("与C#或Java里接口的基本作用一样，强制一个类去符合某种契约")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 接口名 {\n\t//属性\n    属性名: 数据类型;\n    //方法\n    方法名(参数名: 数据类型);\n}\n\nclass 类名 implements 接口名 {\n    属性名: 属性值;\n    方法名(参数名: 数据类型) {\n        执行方法语句\n    }\n    //构造器\n    constructor(参数名: 数据类型,参数名: 数据类型) { }\n}\n")])])]),n("h2",{attrs:{id:"接口进阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口进阶"}},[t._v("#")]),t._v(" 接口进阶")]),t._v(" "),n("h3",{attrs:{id:"接口合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口合并"}},[t._v("#")]),t._v(" 接口合并")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 接口名 {\n    属性名1: 数据类型;\n    属性名2: 数据类型;\n}\n\ninterface 接口名 {\n     属性名3: 数据类型;\n}\nlet 变量: 接口名 = { 属性名1: 属性值, 属性名2: 属性值, 属性名3: 属性值}\n")])])]),n("h3",{attrs:{id:"接口单继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口单继承"}},[t._v("#")]),t._v(" 接口单继承")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 父接口名 {\n     属性名1: 数据类型;\n}\n\ninterface 子接口名 extends 父接口名 {\n    属性名2: 数据类型;\n}\nlet 变量: 子接口名 = { 属性名1: 属性值, 属性名2: 属性值}\n")])])]),n("h3",{attrs:{id:"接口多继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口多继承"}},[t._v("#")]),t._v(" 接口多继承")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("interface 父接口名1 {\n     属性名1: 数据类型;\n}\ninterface 父接口名2 {\n     属性名3: 数据类型;\n}\ninterface 子接口名 extends 父接口名1 ，父接口名2{\n    属性名2: 数据类型;\n}\nlet 变量: 子接口名 = { 属性名1: 属性值, 属性名2: 属性值，属性名3: 属性值}\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);