(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e94915"],{"0380":function(t,a,e){},3e3:function(t,a,e){"use strict";e("0380")},a0be:function(t,a,e){"use strict";e.r(a);var s=e("b0af"),i=e("62ad"),c=e("a523"),n=e("490a"),r=e("0fd9"),o=function(){var t=this,a=t._self._c;return a("section",{staticClass:"map"},t._l(this.articles,(function(e){return a("div",{key:e.id},[a(c["a"],{staticClass:"map__container"},[t.isLoading?a(r["a"],{staticStyle:{height:"500px"},attrs:{"align-content":"center"}},[a(i["a"],{attrs:{cols:"12",align:"center"}},[a(n["a"],{attrs:{indeterminate:"",color:"deep-purple accent-4"}})],1)],1):t._e(),t.isLoading?t._e():a(r["a"],{staticClass:"map__contents"},[a(i["a"],{attrs:{cols:"12",sm:"9"}},[a(r["a"],[a(i["a"],{staticClass:"map__contents-img",attrs:{cols:"12"}},[a(s["a"],{staticClass:"map__contents-img",attrs:{height:"600px"}},[a("iframe-custom",{attrs:{src:String(e.map)}})],1)],1)],1)],1),a(i["a"],{attrs:{cols:"12",sm:"3"}},[a(r["a"],[a(i["a"],{attrs:{cols:"12",align:"center"}},[a(s["a"],{attrs:{height:"300"}},[t._v(" 目次 "),a("br"),t._v(" 広告 "),a("br"),t._v(" GoogleAdsense ")])],1)],1)],1)],1)],1)],1)})),0)},l=[],d=e("bc3a"),m=e.n(d),g=e("5e22"),u=e.n(g),p=e("ca0d"),f={name:"Map",data:()=>({articles:[],isLoading:!1}),components:{IframeCustom:p["a"]},mounted(){this.getData("filters=category[contains]地図").then(t=>{this.articles=t})},methods:{async getData(t){this.isLoading=!0;const a=await m.a.get("https://takamori-c.microcms.io/api/v1/articles?"+t,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});let e=a.data.contents;return e.forEach(t=>{t.category&&(t.categoryName=t.category[0])}),e.sort((t,a)=>t.created_at>a.created_at?-1:1),this.isLoading=!1,e}},computed:{sanitizedBody(){return u.a.defaults.allowedTags=u.a.defaults.allowedTags.concat(["img","iframe"]),u.a.defaults.allowedAttributes["iframe"]=["*"],u()(this.article.body)}}},h=f,_=(e("3000"),e("2877")),b=Object(_["a"])(h,o,l,!1,null,"2c6a93a6",null);a["default"]=b.exports}}]);