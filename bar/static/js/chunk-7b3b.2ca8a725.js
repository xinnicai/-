(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7b3b"],{HLJ2:function(t,e,s){},MX0e:function(t,e,s){"use strict";var n=s("HLJ2");s.n(n).a},lAbF:function(t,e,s){"use strict";s.r(e);var n=s("QbLZ"),r=s.n(n),a=s("L2JU"),o=s("Q2AE");var i={name:"Dashboard",computed:r()({},Object(a.b)(["name","roles"]),{showRouter:function(){return console.log("全部路由信息",this.$store.getters.routerList),this.$store.getters.routerList.length>0?this.$store.getters.routerList[3].name:""}}),methods:{toggleUser:function(){var t=this;"editor"===this.name?this.$store.dispatch("Login",{username:"admin",password:""}).then(function(){location.reload()}).catch(function(){t.$message("接口出现了一些问题....")}):this.$store.dispatch("Login",{username:"editor",password:""}).then(function(){location.reload()}).catch(function(){t.$message("接口出现了一些问题....")})},basePermit:function(t){return function(t){return o.a.getters.roles.includes(t)}(t)}}},v=(s("MX0e"),s("KHd+")),_=Object(v.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("div",{staticClass:"dashboard-text"},[t._v("name:"+t._s(t.name))]),t._v(" "),s("div",{staticClass:"dashboard-text"},[t._v("roles:"+t._s(t.roles))]),t._v(" "),s("h2",[t._v("关于路由")]),t._v(" "),s("div",[t._v(t._s(t.name)+" 的路由为 "+t._s(t.showRouter))]),t._v(" "),s("div",[t._v("未解析路由信息请看NetWork的,解析完成的路由信息请看控制台")]),t._v(" "),s("h2",[t._v("关于权限")]),t._v(" "),s("p",[t._v("这里做了简单的权限区分,")]),t._v(" "),s("p",[t._v('\n    admin 用户存在 "增加", "删除", "修改", "查看" 权限\n    ,所以根据自定义指令管理员可以操作的按钮都会被渲染出来\n  ')]),t._v(" "),s("p",[t._v('\n    editor 用户 只存在 "修改", "查看" ,所以自定义指令不会渲染 增加 与 删除\n  ')]),t._v(" "),s("h3",[t._v("自定义指令的实现")]),t._v(" "),s("h3",[t._v("v-if的实现")]),t._v(" "),t.basePermit("add")?s("el-button",{attrs:{type:"primary"}},[t._v("增加")]):t._e(),t._v(" "),t.basePermit("delete")?s("el-button",{attrs:{type:"danger"}},[t._v("删除")]):t._e(),t._v(" "),t.basePermit("edit")?s("el-button",{attrs:{type:"warning"}},[t._v("修改")]):t._e(),t._v(" "),t.basePermit("view")?s("el-button",{attrs:{type:"success"}},[t._v("查看")]):t._e(),t._v(" "),s("div",{staticClass:"toggle"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.toggleUser}},[t._v("切换用户")])],1)],1)},[],!1,null,"17ad47a8",null);_.options.__file="index.vue";e.default=_.exports}}]);