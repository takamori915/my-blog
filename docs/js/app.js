(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-e8f305c2":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],f.parentNode.removeChild(f),a(s)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-blog/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([4,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},"1a5d":function(t,e,a){"use strict";a("c4c2")},"1be1":function(t,e,a){"use strict";a("bc07")},2:function(t,e){},2799:function(t,e,a){},"29ae":function(t,e,a){},"2c95":function(t,e,a){},3:function(t,e){},4:function(t,e,a){t.exports=a("56d7")},"4e83":function(t,e,a){"use strict";a("4f08")},"4f08":function(t,e,a){},5:function(t,e){},"52f4":function(t,e,a){"use strict";a("a657")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("7496"),i=a("a523"),s=function(){var t=this,e=t._self._c;return e(n["a"],[e("app-header"),e(i["a"],{attrs:{fluid:""}},[e("router-view")],1),e("app-footer")],1)},o=[],c=a("40dc"),l=a("5bc1"),u=a("8860"),d=a("da13"),f=a("5d23"),m=a("f774"),p=a("2fa4"),h=a("71a3"),g=a("fe57"),v=a("2a7f"),_=function(){var t=this,e=t._self._c;return e("header",[e(c["a"],{attrs:{app:"",dark:""}},[e(l["a"],{on:{click:function(e){t.drawer=!0}}}),e(v["a"],[t._v("Taka-Cafe")]),e(g["a"],t._l(t.menuItems,(function(a,r){return e(h["a"],{key:r,attrs:{to:a.url}},[t._v(" "+t._s(a.name)+" ")])})),1),e(p["a"])],1),e(m["a"],{attrs:{fixed:"",temporary:"",link:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(u["a"],{attrs:{nav:"",dense:""}},t._l(t.menuItems,(function(a,r){return e(d["a"],{key:r,attrs:{to:a.url}},[e(f["a"],[e(f["b"],[t._v(" "+t._s(a.name))])],1)],1)})),1)],1)],1)},b=[],y={menuItems:[{name:"HOME",url:"/"},{name:"温泉",url:"/onsen"},{name:"旅行",url:"/travel"},{name:"ラーメン",url:"/ramen"},{name:"購入品",url:"/items"},{name:"ランキング",url:"/ranking"},{name:"ABOUT",url:"/about"}]},C={data:()=>({drawer:!1,menuItems:y.menuItems})},w=C,x=(a("9aa1"),a("2877")),k=Object(x["a"])(w,_,b,!1,null,"3c45fea4",null),O=k.exports,j=a("553a"),A=function(){var t=this,e=t._self._c;return e(j["a"],{attrs:{dark:"",absolute:""}},[e("div",{staticClass:"footer"},[t._v(" Copyright test 2022. All right reserved ")])])},S=[],E=(a("7d51"),{}),P=Object(x["a"])(E,A,S,!1,null,"0fd085c3",null),T=P.exports,I={name:"app",components:{AppHeader:O,AppFooter:T}},M=I,U=(a("1be1"),Object(x["a"])(M,s,o,!1,null,"aec08aa6",null)),H=U.exports,N=a("f309");r["a"].use(N["a"]);var B=new N["a"]({}),L=a("8c4f"),q=a("8336"),z=a("b0af"),D=a("99d9"),K=a("62ad"),F=a("adda"),J=a("0fd9"),R=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"home"},[e("home-header"),e(J["a"],[e(K["a"],{attrs:{cols:"12",sm:"8"}},[e(J["a"],{attrs:{"no-gutters":""}},t._l(t.articles,(function(a){return e(K["a"],{key:a.id,staticClass:"ma-3"},[e(z["a"],{attrs:{width:"300",height:"330"}},[e(F["a"],{staticClass:"white--text align-end",attrs:{height:"200",src:a.imgUrl1}},[e(D["c"],[t._v(t._s(a.title+" - "+a.category))])],1),e(D["b"],{staticClass:"text--primary"},[e("div",[t._v(t._s(a.summary))])]),e(D["a"],[e("router-link",{attrs:{to:{name:"article-detail",params:{id:a.id}}}},[e(q["a"],{attrs:{color:"orange",text:""}},[t._v("詳細")])],1)],1)],1)],1)})),1)],1),e(K["a"],{attrs:{cols:"12",sm:"4"}},[e(J["a"],t._l(t.articles,(function(a){return e(K["a"],{key:a.id,attrs:{cols:"12"}},[a.map?e(z["a"],{attrs:{height:"300"}},[e("iframe-custom",{attrs:{src:String(a.map)}})],1):t._e()],1)})),1)],1)],1)],1)])},X=[],Y=a("bc3a"),$=a.n(Y),G=function(){var t=this;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"home-header"})])}],V=(a("52f4"),{}),W=Object(x["a"])(V,G,Q,!1,null,"51685eb4",null),Z=W.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"yt-responsive"},[e("iframe",{attrs:{src:t.src,allowfullscreen:"",loading:"lazy",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",referrerpolicy:"no-referrer-when-downgrade"}})])},et=[],at={props:{src:{type:String,required:!0},_class:{type:String,default:"border:0;"}}},rt=at,nt=(a("b0ae"),Object(x["a"])(rt,tt,et,!1,null,null,null)),it=nt.exports,st={name:"Home",components:{HomeHeader:Z,IframeCustom:it},data:()=>({articles:[]}),async mounted(){const t=await $.a.get("https://takamori-c.microcms.io/api/v1/articles",{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});this.articles=t.data.contents,this.articles.forEach(t=>{var e,a;null!==(e=t.image1)&&void 0!==e&&e.url&&(t.imgUrl1=null===(a=t.image1)||void 0===a?void 0:a.url)})}},ot=st,ct=(a("1a5d"),Object(x["a"])(ot,R,X,!1,null,null,null)),lt=ct.exports,ut=a("5e66"),dt=a("3e35"),ft=function(){var t=this,e=t._self._c;return e("section",{staticClass:"article-detail"},[e("div",{staticClass:"section__title"},[e("div",{staticClass:"section__title-text"},[t._v(t._s(t.article.title))]),e("div",{staticClass:"section__title-subtext"},[t._v(t._s(t.article.categoryName))]),e("div",{staticClass:"section__title-summary"},[t._v(t._s(t.article.summary))])]),e(i["a"],{attrs:{fluid:""}},[e(J["a"],{staticClass:"article-detail__contents"},[e(K["a"],{staticClass:"article-detail__contents-text",attrs:{cols:"12",md:"6"}},[e("div",{domProps:{innerHTML:t._s(t.sanitizedBody)}})]),e(K["a"],{staticClass:"article-detail__contents-img",attrs:{cols:"12",md:"6"}},[e(z["a"],{attrs:{height:"400"}},[e("iframe-custom",{attrs:{src:String(t.article.map)}})],1)],1),e(K["a"],{staticClass:"article-detail__contents-img",attrs:{cols:"12",md:"6"}},[e(z["a"],{attrs:{height:"400px"}},[e(ut["a"],{attrs:{"hide-delimiters":""}},[e(dt["a"],[e(F["a"],{staticClass:"img-fluid",attrs:{src:t.article.imgUrl1,alt:"",height:"400px"}})],1),e(dt["a"],[e(F["a"],{staticClass:"img-fluid",attrs:{src:t.article.imgUrl2,alt:"",height:"400px"}})],1),e(dt["a"],[e(F["a"],{staticClass:"img-fluid",attrs:{src:t.article.imgUrl3,alt:"",height:"400px"}})],1)],1)],1)],1),e(K["a"],{staticClass:"article-detail__contents-img",attrs:{cols:"12",md:"6"}},[e(z["a"],{attrs:{height:"400"}},[e("iframe-custom",{attrs:{src:String(t.article.movie)}})],1)],1)],1)],1)],1)},mt=[],pt=a("5e22"),ht=a.n(pt),gt={name:"ArticleDetail",data:()=>({article:[]}),components:{IframeCustom:it},mounted(){this.getArticle()},methods:{getArticle(){$.a.get("https://takamori-c.microcms.io/api/v1/articles/"+this.$route.params.id,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}}).then(t=>{this.article=t.data,this.article.imgUrl1=this.article.image1.url,this.article.imgUrl2=this.article.image2.url,this.article.imgUrl3=this.article.image3.url,this.article.categoryName=this.article.category[0],console.log(this.article)}).catch(t=>{console.log(t)})}},computed:{sanitizedBody(){return ht.a.defaults.allowedTags=ht.a.defaults.allowedTags.concat(["img","iframe"]),ht.a.defaults.allowedAttributes["iframe"]=["*"],ht()(this.article.body)}}},vt=gt,_t=(a("4e83"),Object(x["a"])(vt,ft,mt,!1,null,"5d44ddc0",null)),bt=_t.exports;r["a"].use(L["a"]);const yt=[{path:"/",name:"Home",component:lt},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"84ba"))},{path:"/articles/:id",name:"article-detail",component:bt},{path:"/onsen/",name:"onsen-list",component:()=>a.e("chunk-e8f305c2").then(a.bind(null,"b786"))}],Ct=new L["a"]({routes:yt});var wt=Ct;r["a"].config.productionTip=!1,new r["a"]({vuetify:B,router:wt,render:t=>t(H)}).$mount("#app")},"7d51":function(t,e,a){"use strict";a("29ae")},"9aa1":function(t,e,a){"use strict";a("2c95")},a657:function(t,e,a){},b0ae:function(t,e,a){"use strict";a("2799")},bc07:function(t,e,a){},c4c2:function(t,e,a){}});