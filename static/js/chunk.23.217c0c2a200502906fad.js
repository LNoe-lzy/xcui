webpackJsonp([23],{406:function(t,s,n){var a=n(0)(n(477),n(478),null,null,null);t.exports=a.exports},431:function(t,s,n){var a=n(432);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(391)("30a4fb3e",a,!0)},432:function(t,s,n){(t.exports=n(390)(!1)).push([t.i,"",""])},477:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),n(431),n(431),s.default={methods:{notice0:function(){this.$Notice.open({title:"这是通知标题",desc:""})},notice1:function(){this.$Notice.open({title:"这是通知标题",desc:"这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述"})},notice2:function(){this.$Notice.info({title:"这是通知标题",desc:"这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述"})},notice3:function(){this.$Notice.success({title:"这是通知标题",desc:"这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述"})},notice4:function(){this.$Notice.warning({title:"这是通知标题",desc:"这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述"})},notice5:function(){this.$Notice.error({title:"这是通知标题",desc:"这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述"})},notice6:function(){this.$Notice.info({title:"这是通知标题",desc:"这条通知不会自动关闭，需要点击关闭按钮才能关闭",duration:0})}}}},478:function(t,s){t.exports={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h1",[this._v("Notice 通知提醒")]),this._v(" "),this._m(0,!1,!1),this._v(" "),this._m(1,!1,!1),this._v(" "),s("xcui-demo",[s("div",{attrs:{slot:"source"},slot:"source"},[s("x-button",{on:{click:this.notice0}},[this._v("展示提醒（仅标题）")]),this._v(" "),s("x-button",{attrs:{type:"primary"},on:{click:this.notice1}},[this._v("展示提醒")])],1),this._v(" "),s("span",{attrs:{slot:"info-title"},slot:"info-title"},[this._v("说明")]),this._v(" "),s("div",{attrs:{slot:"info"},slot:"info"},[s("p",[this._v("基本使用，默认在4.5s后关闭。如果"),s("code",[this._v("desc")]),this._v("选项未填，则仅展示标题。")])]),this._v(" "),s("div",{attrs:{slot:"highlight"},slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice0"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("展示提醒（仅标题）"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("primary"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice1"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("展示提醒"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),s("span",{staticClass:"token script language-javascript"},[this._v("\n    "),s("span",{staticClass:"token keyword"},[this._v("export")]),this._v(" "),s("span",{staticClass:"token keyword"},[this._v("default")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n        methods"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice0")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("open")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("''")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice1")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("open")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n    "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n")]),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n")])])]),this._v(" "),s("h2",[this._v("不同类型的通知消息")]),this._v(" "),s("xcui-demo",[s("div",{attrs:{slot:"source"},slot:"source"},[s("x-button",{attrs:{type:"info"},on:{click:this.notice2}},[this._v("info")]),this._v(" "),s("x-button",{attrs:{type:"success"},on:{click:this.notice3}},[this._v("success")]),this._v(" "),s("x-button",{attrs:{type:"warning"},on:{click:this.notice4}},[this._v("warning")]),this._v(" "),s("x-button",{attrs:{type:"danger"},on:{click:this.notice5}},[this._v("error")])],1),this._v(" "),s("span",{attrs:{slot:"info-title"},slot:"info-title"},[this._v("说明")]),this._v(" "),s("div",{attrs:{slot:"info"},slot:"info"},[s("p",[this._v("通过使用 "),s("code",[this._v(".info()")]),this._v(", "),s("code",[this._v(".success()")]),this._v(", "),s("code",[this._v(".warning()")]),this._v(", "),s("code",[this._v(".error()")]),this._v(" 展示不同类型的通知消息")])]),this._v(" "),s("div",{attrs:{slot:"highlight"},slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("info"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice2"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("info"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("success"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice3"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("success"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("warning"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice4"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("warning"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("danger"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice5"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("error"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),s("span",{staticClass:"token script language-javascript"},[this._v("\n    "),s("span",{staticClass:"token keyword"},[this._v("export")]),this._v(" "),s("span",{staticClass:"token keyword"},[this._v("default")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n        methods"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice2")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("info")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice3")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("success")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice4")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("warning")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice5")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("error")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这里是通知描述这里是通知描述这里是通知描述这里是通知描述这里是通知描述'")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n    "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n")]),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n")])])]),this._v(" "),s("h2",[this._v("自定义时长")]),this._v(" "),s("xcui-demo",[s("div",{attrs:{slot:"source"},slot:"source"},[s("x-button",{attrs:{type:"info"},on:{click:this.notice6}},[this._v("不自动关闭")])],1),this._v(" "),s("span",{attrs:{slot:"info-title"},slot:"info-title"},[this._v("说明")]),this._v(" "),s("div",{attrs:{slot:"info"},slot:"info"},[s("p",[this._v("设置"),s("code",[this._v("duration")]),this._v("选项为0时，不会自动关闭。"),s("code",[this._v("duration")]),this._v("的单位为毫秒。")])]),this._v(" "),s("div",{attrs:{slot:"highlight"},slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("x-button")]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("info"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),this._v(" "),s("span",{staticClass:"token attr-name"},[this._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[this._v("=")]),s("span",{staticClass:"token punctuation"},[this._v('"')]),this._v("notice6"),s("span",{staticClass:"token punctuation"},[this._v('"')])]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("不自动关闭"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("x-button")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("template")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("<")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),s("span",{staticClass:"token script language-javascript"},[this._v("\n    "),s("span",{staticClass:"token keyword"},[this._v("export")]),this._v(" "),s("span",{staticClass:"token keyword"},[this._v("default")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n        methods"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n            "),s("span",{staticClass:"token function"},[this._v("notice6")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                "),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("info")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n                    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这是通知标题'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    desc"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'这条通知不会自动关闭，需要点击关闭按钮才能关闭'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n                    duration"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token number"},[this._v("0")]),this._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),this._v("\n    "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n")]),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[this._v("</")]),this._v("script")]),s("span",{staticClass:"token punctuation"},[this._v(">")])]),this._v("\n\n")])])]),this._v(" "),s("h2",[this._v("API")]),this._v(" "),s("p",[this._v("通过以下方法来使用：")]),this._v(" "),this._m(2,!1,!1),this._v(" "),s("h3",[this._v("Config API")]),this._v(" "),this._m(3,!1,!1),this._v(" "),s("h3",[this._v("全局配置")]),this._v(" "),s("p",[this._v("另外提供了全局配置、全局关闭某个通知和全局销毁的方法：")]),this._v(" "),this._m(4,!1,!1),this._v(" "),this._m(5,!1,!1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("相对于"),s("code",[this._v("Message")]),this._v(", "),s("code",[this._v("Notice")]),this._v("通知提醒的方式更加醒目，常用于系统推送、主动通知等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("XCUI为"),s("code",[this._v("Vue.prototype")]),this._v("添加了全局方法"),s("code",[this._v("$Notice")]),this._v(", 如果您完整引入了XCUI， 可以直接使用如"),s("code",[this._v("this.$Notice.info('some message')")]),this._v("的方式进行通知提示操作。"),s("br"),this._v("\n当然，您也可以使用"),s("code",[this._v("import Notice from 'xcui/lib/notice'")]),this._v(" 的单组件方式调用。"),s("br"),this._v("\nNotice在XCUI中被注册为一个"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html"}},[this._v("Vue 插件")]),this._v(", 在"),s("strong",[this._v("单文件引入")]),this._v("时，请使用"),s("code",[this._v("Vue.use(Notice)")]),this._v(" 挂载，再进行使用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("span",{staticClass:"token comment"},[this._v("// 普通通知")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("info")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("config"),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 成功通知")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("success")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("config"),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 警告通知")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("warning")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("config"),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 错误通知")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("error")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("config"),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 举例")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("info")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n    title"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'title'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n    content"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token string"},[this._v("'content'")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n    "),s("span",{staticClass:"token comment"},[this._v("//...")]),this._v("\n"),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v("\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("参数")]),this._v(" "),s("th",[this._v("类型")]),this._v(" "),s("th",[this._v("默认")]),this._v(" "),s("th",[this._v("描述")]),this._v(" "),s("th",[this._v("是否必选")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("title")]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("无")]),this._v(" "),s("td",[this._v("标题")]),this._v(" "),s("td",[this._v("可选")])]),this._v(" "),s("tr",[s("td",[this._v("content")]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("无")]),this._v(" "),s("td",[this._v("提示信息内容")]),this._v(" "),s("td",[this._v("可选")])]),this._v(" "),s("tr",[s("td",[this._v("duration")]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("4500")]),this._v(" "),s("td",[this._v("自动关闭延时，单位: 毫秒, 默认4500毫秒后自动关闭。设置0则不会自动关闭")]),this._v(" "),s("td",[this._v("可选")])]),this._v(" "),s("tr",[s("td",[this._v("onClose")]),this._v(" "),s("td",[this._v("Function")]),this._v(" "),s("td",[this._v("无")]),this._v(" "),s("td",[this._v("关闭后的回调函数")]),this._v(" "),s("td",[this._v("可选")])]),this._v(" "),s("tr",[s("td",[this._v("uuid")]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("自动生成")]),this._v(" "),s("td",[this._v("当前通知的唯一标识")]),this._v(" "),s("td",[this._v("可选")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("span",{staticClass:"token comment"},[this._v("// 全局配置")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("config")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("options"),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 全局关闭")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("close")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),this._v("uuid"),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v("\n\n"),s("span",{staticClass:"token comment"},[this._v("// 全局销毁")]),this._v("\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("destroy")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),this._v("\n\n"),s("span",{staticClass:"token keyword"},[this._v("this")]),s("span",{staticClass:"token punctuation"},[this._v(".")]),this._v("$Notice"),s("span",{staticClass:"token punctuation"},[this._v(".")]),s("span",{staticClass:"token function"},[this._v("config")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("{")])]),this._v("\n    top"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token number"},[this._v("50")]),s("span",{staticClass:"token punctuation"},[this._v(",")]),this._v("\n    duration"),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" "),s("span",{staticClass:"token number"},[this._v("3")]),this._v("\n"),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[this._v("}")])]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(";")]),this._v("\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[this._v("属性")]),this._v(" "),s("th",[this._v("说明")]),this._v(" "),s("th",[this._v("类型")]),this._v(" "),s("th",[this._v("默认值")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("top")]),this._v(" "),s("td",[this._v("通知组件距离顶端的距离，单位像素")]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("24")])]),this._v(" "),s("tr",[s("td",[this._v("duration")]),this._v(" "),s("td",[this._v("默认自动关闭的延时，单位毫秒")]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("4500")])]),this._v(" "),s("tr",[s("td",[this._v("insertTo")]),this._v(" "),s("td",[this._v("DOMElement")]),this._v(" "),s("td",[this._v("document.body")]),this._v(" "),s("td",[this._v("message的dom元素插入位置")])])])])}]}}});