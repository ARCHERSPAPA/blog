webpackJsonp([7],{M2rI:function(t,e){},Qt9A:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),r={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;console.log(t),n.a.getIndexBlogs({page:t}).then(function(a){console.log(a),e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[t._l(t.blogs,function(e){return a("div",{staticClass:"content"},[a("figure",{staticClass:"user"},[a("img",{attrs:{src:e.user.avatar,alt:""}}),t._v(" "),a("p",[a("a",{attrs:{href:""}},[t._v(t._s(e.user.username))])])]),t._v(" "),a("router-link",{attrs:{to:"/detail/"+e.id}},[a("div",{staticClass:"text"},[a("h3",[t._v("\n          "+t._s(e.title)+"\n          "),a("span",[t._v("发表日期:"+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])])],1)}),t._v(" "),a("router-view"),t._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],2)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("M2rI")},null,null);e.default=o.exports}});
//# sourceMappingURL=7.812d0ac5e8378923c29f.js.map