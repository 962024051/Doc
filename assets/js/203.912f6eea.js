(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{555:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),e("h2",{attrs:{id:"mutation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" mutation")]),t._v(" "),e("h3",{attrs:{id:"commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),e("p",[t._v("提交mutation")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("commit(type: string, payload?: any, options?: Object)")])]),t._v(" "),e("li",[e("code",[t._v("commit(mutation: Object, options?: Object)")])])]),t._v(" "),e("h3",{attrs:{id:"subscribe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),e("p",[t._v("订阅 store 的 mutation")]),t._v(" "),e("p",[t._v("subscribe(handler: Function, options?: Object): Function")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("store.subscribe((mutation, state) => {\n  console.log(mutation.type)\n  console.log(mutation.payload)\n})\n")])])]),e("h2",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),e("h3",{attrs:{id:"dispatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dispatch"}},[t._v("#")]),t._v(" dispatch")]),t._v(" "),e("p",[t._v("分发action")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("dispatch(type: string, payload?: any, options?: Object): Promise<any>")])]),t._v(" "),e("li",[e("code",[t._v("dispatch(action: Object, options?: Object): Promise<any>")])])]),t._v(" "),e("h3",{attrs:{id:"subscribeaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribeaction"}},[t._v("#")]),t._v(" subscribeAction")]),t._v(" "),e("p",[t._v("订阅 store 的 action")]),t._v(" "),e("p",[t._v("subscribeAction(handler: Function, options?: Object): Function")]),t._v(" "),e("p",[t._v("订阅")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("store.subscribeAction((action, state) => {\n  console.log(action.type)\n  console.log(action.payload)\n})\nstore.subscribeAction(handler, { prepend: true })\n")])])]),e("p",[t._v("生命周期")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("store.subscribeAction({\n  before: (action, state) => {\n    console.log(`before action ${action.type}`)\n  },\n  after: (action, state) => {\n    console.log(`after action ${action.type}`)\n  }，\n   error: (action, state, error) => {\n    console.log(`error action ${action.type}`)\n    console.error(error)\n  }\n})\n")])])]),e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),e("h3",{attrs:{id:"replacestate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replacestate"}},[t._v("#")]),t._v(" replaceState")]),t._v(" "),e("p",[t._v("替换 store 的根状态，仅用状态合并或时光旅行调试")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("replaceState(state: Object)")])])]),t._v(" "),e("h3",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),e("p",[t._v("响应式地侦听 "),e("code",[t._v("fn")]),t._v(" 的返回值")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watch(fn: Function, callback: Function, options?: Object): Function")])])]),t._v(" "),e("h2",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),e("h3",{attrs:{id:"registermodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registermodule"}},[t._v("#")]),t._v(" registerModule")]),t._v(" "),e("p",[t._v("registerModule(path: string | Array<string>, module: Module, options?: Object)")]),t._v(" "),e("p",[t._v("注册一个动态模块")]),t._v(" "),e("h3",{attrs:{id:"unregistermodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unregistermodule"}},[t._v("#")]),t._v(" unregisterModule")]),t._v(" "),e("p",[t._v("卸载一个动态模块")]),t._v(" "),e("p",[t._v("unregisterModule(path: string | Array<string>)")]),t._v(" "),e("h3",{attrs:{id:"hasmodule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hasmodule"}},[t._v("#")]),t._v(" hasModule")]),t._v(" "),e("p",[t._v("asModule(path: string | Array<string>): boolean")]),t._v(" "),e("p",[t._v("检查该模块的名字是否已经被注册")]),t._v(" "),e("h2",{attrs:{id:"热更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[t._v("#")]),t._v(" 热更新")]),t._v(" "),e("h3",{attrs:{id:"hotupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hotupdate"}},[t._v("#")]),t._v(" hotUpdate")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hotUpdate(newOptions: Object)\n")])])]),e("p",[t._v("热替换新的 action 和 mutation")])])}),[],!1,null,null,null);a.default=r.exports}}]);