(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{461:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bigint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigint"}},[t._v("#")]),t._v(" BigInt")]),t._v(" "),a("h2",{attrs:{id:"类型信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型信息"}},[t._v("#")]),t._v(" 类型信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("typeof 1n === 'bigint'; // true\ntypeof BigInt('1') === 'bigint'; // true\ntypeof Object(1n) === 'object'; // true\n")])])]),a("h2",{attrs:{id:"运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[t._v("#")]),t._v(" 运算")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" previousMaxSafe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BigInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_SAFE_INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 9007199254740991n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" maxPlusOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previousMaxSafe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 9007199254740992n")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" theFuture "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previousMaxSafe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 9007199254740993n, this works now!")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previousMaxSafe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 18014398509481982n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subtr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multi – "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 18014398509481972n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 2n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bigN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 18014398509481984n")]),t._v("\n\nbigN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ –18014398509481984n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" expected "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 2n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rounded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 2n, not 2.5n")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n")])])]),a("h2",{attrs:{id:"条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[t._v("#")]),t._v(" 条件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello from the if!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello from the else!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ↪ "Hello from the else!"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 12n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ 0n")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ↪ true")]),t._v("\n")])])]),a("h2",{attrs:{id:"构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造器"}},[t._v("#")]),t._v(" 构造器")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BigInt(value);\n")])])]),a("h2",{attrs:{id:"静态方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("BigInt.asIntN()")]),t._v(" "),a("p",[t._v("将 BigInt 值转换为一个 -2width -1 与 2width-1 -1 之间的有符号整数。")])]),t._v(" "),a("li",[a("p",[t._v("BigInt.asUintN()")]),t._v(" "),a("p",[t._v("将一个 BigInt 值转换为 0 与 2width -1 之间的无符号整数。")])])]),t._v(" "),a("h2",{attrs:{id:"实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("BigInt.prototype.toLocaleString()")]),t._v(" "),a("p",[t._v("返回此数字的 language-sensitive 形式的字符串。")])]),t._v(" "),a("li",[a("p",[t._v("BigInt.prototype.toString()")]),t._v(" "),a("p",[t._v("返回以指定基数(base)表示指定数字的字符串")])]),t._v(" "),a("li",[a("p",[t._v("BigInt.prototype.valueOf()")]),t._v(" "),a("p",[t._v("返回指定对象的基元值")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);