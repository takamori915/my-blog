(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dddbbb60"],{6906:function(t,a,e){"use strict";e.r(a);var s=e("b0af"),c=e("62ad"),r=e("a523"),i=e("ce7e"),n=e("adda"),o=e("490a"),l=e("0fd9"),d=function(){var t=this,a=t._self._c;return a("div",[a("section",{staticClass:"purchase"},[a("home-header"),a(r["a"],{staticClass:"purchase__container"},[t.isLoading?a(l["a"],{staticStyle:{height:"500px"},attrs:{"align-content":"center"}},[a(c["a"],{attrs:{cols:"12",align:"center"}},[a(o["a"],{attrs:{indeterminate:"",color:"deep-purple accent-4"}})],1)],1):t._e(),t.isLoading?t._e():a(l["a"],{staticClass:"purchase__contents"},[a(c["a"],{staticClass:"purchase__contents-main",attrs:{cols:"12",sm:"9"}},[a(l["a"],[a(c["a"],[a("h2",[t._v("最近の記事")]),a(i["a"]),0===t.articles.length?a("p",{staticClass:"pt-2"},[t._v("最近の記事はありません")]):t._e()],1)],1),a(l["a"],t._l(t.articles,(function(e){return a(c["a"],{key:e.id,attrs:{cols:"12",sm:"6",align:"left"}},[a("router-link",{staticClass:"purchase__router-link",attrs:{to:{name:"article-detail",params:{id:e.id}}}},[a(l["a"],{staticClass:"purchase__content-side"},[a(c["a"],{staticClass:"purchase__content-side-frame",attrs:{cols:"5"}},[a(n["a"],{staticClass:"purchase__content-side-img",attrs:{src:e.imgUrl1}},[a("div",{staticClass:"purchase__content-side-category"},[a("app-chip",{attrs:{text:e.categoryName}})],1)])],1),a(c["a"],{staticClass:"purchase__content-side-text",attrs:{cols:"7"}},[a("p",{staticClass:"purchase__content-side-created-at"},[t._v(" "+t._s(e.createdAt)+" ")]),a("h4",[t._v(t._s(e.title))]),a("p",{staticClass:"purchase__content-side-summary"},[t._v(t._s(e.summary))])])],1),a(i["a"])],1)],1)})),1)],1),a(c["a"],{staticClass:"purchase__contents-right",attrs:{cols:"12",sm:"3"}},[a(l["a"],[a(c["a"],{attrs:{cols:"12",align:"center"}},[a(s["a"],{attrs:{height:"300"}},[t._v(" 目次 "),a("br"),t._v(" 広告 "),a("br"),t._v(" GoogleAdsense ")])],1)],1)],1)],1)],1)],1)])},_=[],u=e("bc3a"),h=e.n(u),p=e("a6ab"),m=e("9dc8"),g=e("c1df"),v=e.n(g);v.a.locale("ja");var f={name:"purchase",components:{HomeHeader:p["a"],AppChip:m["a"]},data:()=>({articles:[],isLoading:!1}),mounted(){this.getData("filters=category[contains]商品").then(t=>{this.articles=t})},methods:{async getData(t){this.isLoading=!0;const a=await h.a.get("https://takamori-c.microcms.io/api/v1/articles?"+t,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});let e=a.data.contents;return e.forEach(t=>{var a,e;null!==(a=t.image1)&&void 0!==a&&a.url&&(t.imgUrl1=null===(e=t.image1)||void 0===e?void 0:e.url);t.category&&(t.categoryName=t.category[0]),t.created_at?t.createdAt=v()(t.created_at).format("YYYY年M月D日(dd)"):t.createdAt=""}),e.sort((t,a)=>t.created_at>a.created_at?-1:1),this.isLoading=!1,e}}},C=f,b=(e("8392"),e("2877")),y=Object(b["a"])(C,d,_,!1,null,null,null);a["default"]=y.exports},8392:function(t,a,e){"use strict";e("839b")},"839b":function(t,a,e){}}]);