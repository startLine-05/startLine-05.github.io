(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{556:function(t,a,v){"use strict";v.r(a);var r=v(3),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("ul",[v("li",[t._v("浏览器中除了渲染DOM外，javaScript 解析与编译任然是开销最昂贵的")])]),t._v(" "),v("h2",{attrs:{id:"代码开销在哪"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码开销在哪"}},[t._v("#")]),t._v(" 代码开销在哪")]),t._v(" "),v("ul",[v("li",[t._v("加载阶段")]),t._v(" "),v("li",[t._v("执行阶段")]),t._v(" "),v("li",[t._v("解析阶段")])]),t._v(" "),v("h2",{attrs:{id:"解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),v("ul",[v("li",[t._v("Code splitting代码拆分,按需加载")]),t._v(" "),v("li",[t._v("Tree shaking代码减重")])]),t._v(" "),v("h2",{attrs:{id:"具体解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#具体解决方案"}},[t._v("#")]),t._v(" 具体解决方案")]),t._v(" "),v("h3",{attrs:{id:"一-减少主线程工作量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-减少主线程工作量"}},[t._v("#")]),t._v(" 一：减少主线程工作量")]),t._v(" "),v("ul",[v("li",[t._v("避免长任务")]),t._v(" "),v("li",[t._v("避免超过1kB的行间脚本")]),t._v(" "),v("li",[t._v("使用rAF和rIC进行时间调度")])]),t._v(" "),v("blockquote",[v("p",[t._v("避免长任务: 比如一个元素尽量少写行内样式，和执行方法")])]),t._v(" "),v("h3",{attrs:{id:"二-progressive-bootstrapping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-progressive-bootstrapping"}},[t._v("#")]),t._v(" 二：Progressive Bootstrapping")]),t._v(" "),v("ul",[v("li",[t._v("可见不可交互vs最小可交互资源集")])]),t._v(" "),v("blockquote",[v("p",[t._v("优先加载显示的资源")])]),t._v(" "),v("h2",{attrs:{id:"浏览器针对性优化-v8优化机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器针对性优化-v8优化机制"}},[t._v("#")]),t._v(" 浏览器针对性优化（V8优化机制）")]),t._v(" "),v("ul",[v("li",[t._v("脚本流")]),t._v(" "),v("li",[t._v("字节码缓存")]),t._v(" "),v("li",[t._v("懒解析")])]),t._v(" "),v("h2",{attrs:{id:"函数的解析方式优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数的解析方式优化"}},[t._v("#")]),t._v(" 函数的解析方式优化")]),t._v(" "),v("ul",[v("li",[t._v("lazy parsing懒解析VS eager parsing饥饿解析")]),t._v(" "),v("li",[t._v("利用Optimize.js优化初次加载时间")])]),t._v(" "),v("h2",{attrs:{id:"对象优化可以做哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对象优化可以做哪些"}},[t._v("#")]),t._v(" 对象优化可以做哪些")]),t._v(" "),v("ul",[v("li",[t._v("以相同顺序初始化对象成员,避免隐藏类的调整")]),t._v(" "),v("li",[t._v("实例化后避免添加新属性")]),t._v(" "),v("li",[t._v("尽量使用Array代替array-like 对象")]),t._v(" "),v("li",[t._v("避免读取超过数组的长度")]),t._v(" "),v("li",[t._v("避免元素类型转换")])])])}),[],!1,null,null,null);a.default=s.exports}}]);