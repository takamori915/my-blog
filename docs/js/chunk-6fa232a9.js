(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa232a9"],{"58a8":function(a,t,s){"use strict";s("bd79")},"757c":function(a,t,s){"use strict";s.r(t);var e=s("8336"),r=s("b0af"),i=s("99d9"),n=s("62ad"),c=s("a523"),o=s("ce7e"),l=s("adda"),d=s("0fd9"),_=s("2fa4"),m=function(){var a=this,t=a._self._c;return t("div",[t("section",{staticClass:"ranking"},[t("home-header"),t(c["a"],{staticClass:"ranking__container"},[t(d["a"],{staticClass:"ranking__contents"},[t(n["a"],{staticClass:"ranking__contents-main",attrs:{cols:"12",sm:"9"}},[t(d["a"],[t(n["a"],[t("h2",[a._v("最近の記事")]),t(o["a"])],1)],1),t(d["a"],a._l(a.articles,(function(s){return t(n["a"],{key:s.id,attrs:{cols:"12",sm:"6",align:"left"}},[t("router-link",{staticClass:"ranking__router-link",attrs:{to:{name:"article-detail",params:{id:s.id}}}},[t(d["a"],{staticClass:"ranking__content-side"},[t(n["a"],{staticClass:"ranking__content-side-frame",attrs:{cols:"5"}},[t(l["a"],{staticClass:"ranking__content-side-img",attrs:{src:s.imgUrl1}},[t("div",{staticClass:"ranking__content-side-category"},[t("app-chip",{attrs:{text:s.categoryName}})],1)])],1),t(n["a"],{staticClass:"ranking__content-side-text",attrs:{cols:"7"}},[t("p",{staticClass:"ranking__content-side-created-at"},[a._v(" "+a._s(s.createdAt)+" ")]),t("h4",[a._v(a._s(s.title))]),t("p",{staticClass:"ranking__content-side-summary"},[a._v(a._s(s.summary))])])],1),t(o["a"])],1)],1)})),1),t(d["a"],[t(n["a"],[t("h2",[a._v("おすすめの記事")]),t(o["a"])],1)],1),t(d["a"],{attrs:{justify:"center"}},a._l(a.articles,(function(s,c){return t("div",{key:s.id},[c<=2?t(n["a"],[t(r["a"],{attrs:{"max-width":"300"}},[t(l["a"],{staticClass:"white--text align-end",attrs:{height:"200",src:s.imgUrl1}},[t(i["b"],[a._v(a._s(s.title))])],1),t("div",{staticClass:"category"},[t("app-chip",{attrs:{text:s.categoryName}})],1),t("p",{staticClass:"ranking__content-recommend-summary text--primary text-left ma-2"},[a._v(a._s(s.summary))]),t("p",{staticClass:"ranking__content-recommend-created-at ma-2"},[a._v(" "+a._s(s.createdAt)+" ")]),t(i["a"],{},[t(_["a"]),t("router-link",{attrs:{to:{name:"article-detail",params:{id:s.id}}}},[t(e["a"],{attrs:{color:"orange",text:""}},[a._v("詳細")])],1)],1)],1)],1):a._e()],1)})),0)],1),t(n["a"],{staticClass:"ranking__contents-right",attrs:{cols:"12",sm:"3"}},[t(d["a"],[t(n["a"],{attrs:{cols:"12",align:"center"}},[t(r["a"],{attrs:{height:"300"}},[a._v(" 目次 "),t("br"),a._v(" 広告 "),t("br"),a._v(" GoogleAdsense ")])],1)],1)],1)],1)],1)],1)])},g=[],u=s("bc3a"),k=s.n(u),p=s("a6ab"),h=s("9dc8"),v=s("c1df"),f=s.n(v);f.a.locale("ja");var C={name:"ranking",components:{HomeHeader:p["a"],AppChip:h["a"]},data:()=>({articles:[]}),async mounted(){const a=await k.a.get("https://takamori-c.microcms.io/api/v1/articles?filters=category[contains]旅行",{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});this.articles=a.data.contents,this.articles.forEach(a=>{var t,s;null!==(t=a.image1)&&void 0!==t&&t.url&&(a.imgUrl1=null===(s=a.image1)||void 0===s?void 0:s.url);a.category&&(a.categoryName=a.category[0]),a.created_at?a.createdAt=f()(a.created_at).format("YYYY年M月D日(dd)"):a.createdAt=""}),this.articles.sort((a,t)=>a.created_at>t.created_at?-1:1)}},y=C,b=(s("58a8"),s("2877")),w=Object(b["a"])(y,m,g,!1,null,null,null);t["default"]=w.exports},bd79:function(a,t,s){}}]);