(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f32a04"],{"3a27":function(t,a,e){"use strict";e("8471")},8471:function(t,a,e){},b9d5:function(t,a,e){"use strict";e.r(a);var s=e("b0af"),n=e("62ad"),c=e("a523"),i=e("ce7e"),o=e("adda"),r=e("490a"),l=e("0fd9"),d=function(){var t=this,a=t._self._c;return a("div",[a("section",{staticClass:"onsen"},[a("home-header"),a(c["a"],{staticClass:"onsen__container"},[t.isLoading?a(l["a"],{staticStyle:{height:"500px"},attrs:{"align-content":"center"}},[a(n["a"],{attrs:{cols:"12",align:"center"}},[a(r["a"],{attrs:{indeterminate:"",color:"deep-purple accent-4"}})],1)],1):t._e(),t.isLoading?t._e():a(l["a"],{staticClass:"onsen__contents"},[a(n["a"],{staticClass:"onsen__contents-main",attrs:{cols:"12",sm:"9"}},[a(l["a"],[a(n["a"],[a("h2",[t._v("最近の記事")]),a(i["a"])],1)],1),a(l["a"],t._l(t.articles,(function(e){return a(n["a"],{key:e.id,attrs:{cols:"12",sm:"6",align:"left"}},[a("router-link",{staticClass:"onsen__router-link",attrs:{to:{name:"article-detail",params:{id:e.id}}}},[a(l["a"],{staticClass:"onsen__content-side"},[a(n["a"],{staticClass:"onsen__content-side-frame",attrs:{cols:"5"}},[a(o["a"],{staticClass:"onsen__content-side-img",attrs:{src:e.imgUrl1}},[a("div",{staticClass:"onsen__content-side-category"},[a("app-chip",{attrs:{text:e.categoryName}})],1)])],1),a(n["a"],{staticClass:"onsen__content-side-text",attrs:{cols:"7"}},[a("p",{staticClass:"onsen__content-side-created-at"},[t._v(" "+t._s(e.createdAt)+" ")]),a("h4",[t._v(t._s(e.title))]),a("p",{staticClass:"onsen__content-side-summary"},[t._v(t._s(e.summary))])])],1),a(i["a"])],1)],1)})),1)],1),a(n["a"],{staticClass:"onsen__contents-right",attrs:{cols:"12",sm:"3"}},[a(l["a"],[a(n["a"],{attrs:{cols:"12",align:"center"}},[a(s["a"],{attrs:{height:"300"}},[t._v(" 目次 "),a("br"),t._v(" 広告 "),a("br"),t._v(" GoogleAdsense ")])],1)],1)],1)],1)],1)],1)])},_=[],m=e("bc3a"),g=e.n(m),u=e("a6ab"),h=e("9dc8"),p=e("c1df"),f=e.n(p);f.a.locale("ja");var v={name:"onsen",components:{HomeHeader:u["a"],AppChip:h["a"]},data:()=>({articles:[],isLoading:!1}),mounted(){this.getData("filters=category[contains]温泉").then(t=>{this.articles=t})},methods:{async getData(t){this.isLoading=!0;const a=await g.a.get("https://takamori-c.microcms.io/api/v1/articles?"+t,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});let e=a.data.contents;return e.forEach(t=>{var a,e;null!==(a=t.image1)&&void 0!==a&&a.url&&(t.imgUrl1=null===(e=t.image1)||void 0===e?void 0:e.url);t.category&&(t.categoryName=t.category[0]),t.created_at?t.createdAt=f()(t.created_at).format("YYYY年M月D日(dd)"):t.createdAt=""}),e.sort((t,a)=>t.created_at>a.created_at?-1:1),this.isLoading=!1,e}}},C=v,y=(e("3a27"),e("2877")),b=Object(y["a"])(C,d,_,!1,null,null,null);a["default"]=b.exports}}]);