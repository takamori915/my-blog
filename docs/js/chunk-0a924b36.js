(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a924b36"],{"13f3":function(t,a,e){"use strict";e("fdaf")},"9c6d":function(t,a,e){"use strict";e.r(a);var s=e("b0af"),o=e("62ad"),c=e("a523"),i=e("ce7e"),n=e("adda"),r=e("490a"),d=e("0fd9"),l=function(){var t=this,a=t._self._c;return a("div",[a("section",{staticClass:"food"},[a("home-header"),a(c["a"],{staticClass:"food__container"},[t.isLoading?a(d["a"],{staticStyle:{height:"500px"},attrs:{"align-content":"center"}},[a(o["a"],{attrs:{cols:"12",align:"center"}},[a(r["a"],{attrs:{indeterminate:"",color:"deep-purple accent-4"}})],1)],1):t._e(),t.isLoading?t._e():a(d["a"],{staticClass:"food__contents"},[a(o["a"],{staticClass:"food__contents-main",attrs:{cols:"12",sm:"9"}},[a(d["a"],[a(o["a"],[a("h2",[t._v("最近の記事")]),a(i["a"]),0===t.articles.length?a("p",{staticClass:"pt-2"},[t._v("最近の記事はありません")]):t._e()],1)],1),a(d["a"],t._l(t.articles,(function(e){return a(o["a"],{key:e.id,attrs:{cols:"12",sm:"6",align:"left"}},[a("router-link",{staticClass:"food__router-link",attrs:{to:{name:"article-detail",params:{id:e.id}}}},[a(d["a"],{staticClass:"food__content-side"},[a(o["a"],{staticClass:"food__content-side-frame",attrs:{cols:"5"}},[a(n["a"],{staticClass:"food__content-side-img",attrs:{src:e.imgUrl1}},[a("div",{staticClass:"food__content-side-category"},[a("app-chip",{attrs:{text:e.categoryName}})],1)])],1),a(o["a"],{staticClass:"food__content-side-text",attrs:{cols:"7"}},[a("p",{staticClass:"food__content-side-created-at"},[t._v(" "+t._s(e.createdAt)+" ")]),a("h4",[t._v(t._s(e.title))]),a("p",{staticClass:"food__content-side-summary"},[t._v(t._s(e.summary))])])],1),a(i["a"])],1)],1)})),1)],1),a(o["a"],{staticClass:"food__contents-right",attrs:{cols:"12",sm:"3"}},[a(d["a"],[a(o["a"],{attrs:{cols:"12",align:"center"}},[a(s["a"],{attrs:{height:"300"}},[t._v(" 目次 "),a("br"),t._v(" 広告 "),a("br"),t._v(" GoogleAdsense ")])],1)],1)],1)],1)],1)],1)])},_=[],f=e("bc3a"),m=e.n(f),g=e("a6ab"),u=e("9dc8"),h=e("c1df"),p=e.n(h);p.a.locale("ja");var v={name:"food",components:{HomeHeader:g["a"],AppChip:u["a"]},data:()=>({articles:[],isLoading:!1}),mounted(){this.getData("filters=category[contains]ごはん").then(t=>{this.articles=t})},methods:{async getData(t){this.isLoading=!0;const a=await m.a.get("https://takamori-c.microcms.io/api/v1/articles?"+t,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});let e=a.data.contents;return e.forEach(t=>{var a,e;null!==(a=t.image1)&&void 0!==a&&a.url&&(t.imgUrl1=null===(e=t.image1)||void 0===e?void 0:e.url);t.category&&(t.categoryName=t.category[0]),t.created_at?t.createdAt=p()(t.created_at).format("YYYY年M月D日(dd)"):t.createdAt=""}),e.sort((t,a)=>t.created_at>a.created_at?-1:1),this.isLoading=!1,e}}},C=v,y=(e("13f3"),e("2877")),b=Object(y["a"])(C,l,_,!1,null,null,null);a["default"]=b.exports},fdaf:function(t,a,e){}}]);