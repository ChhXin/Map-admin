webpackJsonp([9],{ARoL:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Dd8w"),o=e.n(a),i=e("NYxO"),s=e("jkKj"),r=e.n(s),c={name:"dashboard",computed:o()({},Object(i.b)(["name","roles"])),data:function(){return{dialogVisible:!1}},mounted:function(){(new r.a.Geolocation).getCurrentPosition(function(n){alert("您的经纬度位置："+n.point.lng+","+n.point.lat)})},methods:{handleClose:function(n){this.$confirm("确认关闭？").then(function(t){n()}).catch(function(n){})}}},l={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"dashboard-container"},[t("div",[t("el-alert",{attrs:{title:"首页登录成功",type:"success",closable:!1,description:"模拟不同权限不同经纬度的人员单位在地图中的定位显示"}})],1)])},staticRenderFns:[]};var d=e("VU/8")(c,l,!1,function(n){e("ehy+")},"data-v-03399774",null);t.default=d.exports},JZGV:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.dashboard-container[data-v-03399774] {\n  margin: 30px;\n}\n.dashboard-text[data-v-03399774] {\n  font-size: 20px;\n  line-height: 46px;\n}\n",""])},"ehy+":function(n,t,e){var a=e("JZGV");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("2f9c4c79",a,!0)}});