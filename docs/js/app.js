(function(t){function e(e){for(var r,n,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-blog/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([4,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},"1be1":function(t,e,a){"use strict";a("bc07")},2:function(t,e){},"29ae":function(t,e,a){},"2c95":function(t,e,a){},3:function(t,e){},"339e":function(t,e,a){"use strict";a("741b")},4:function(t,e,a){t.exports=a("56d7")},5:function(t,e){},"52f4":function(t,e,a){"use strict";a("a657")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("7496"),o=a("a523"),i=function(){var t=this,e=t._self._c;return e(n["a"],[e("app-header"),e(o["a"],{attrs:{fluid:""}},[e("router-view")],1),e("app-footer")],1)},s=[],c=a("40dc"),u=a("5bc1"),l=a("8860"),d=a("da13"),f=a("5d23"),p=a("f774"),m=a("2fa4"),h=a("71a3"),v=a("fe57"),b=a("2a7f"),g=function(){var t=this,e=t._self._c;return e("header",[e(c["a"],{attrs:{app:"",dark:""}},[e(u["a"],{on:{click:function(e){t.drawer=!0}}}),e(b["a"],[t._v("Taka-Cafe")]),e(v["a"],t._l(t.menuItems,(function(a,r){return e(h["a"],{key:r,attrs:{to:a.url}},[t._v(" "+t._s(a.name)+" ")])})),1),e(m["a"])],1),e(p["a"],{attrs:{fixed:"",temporary:"",link:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(l["a"],{attrs:{nav:"",dense:""}},t._l(t.menuItems,(function(a,r){return e(d["a"],{key:r,attrs:{to:a.url}},[e(f["a"],[e(f["b"],[t._v(" "+t._s(a.name))])],1)],1)})),1)],1)],1)},y=[],_={menuItems:[{name:"HOME",url:"/"},{name:"ABOUT",url:"/about"},{name:"WORK",url:"#"},{name:"SERVICE",url:"#"},{name:"BLOG",url:"#"},{name:"ACCESS",url:"#"}]},w={data:()=>({drawer:!1,menuItems:_.menuItems})},C=w,O=(a("9aa1"),a("2877")),x=Object(O["a"])(C,g,y,!1,null,"3c45fea4",null),k=x.exports,j=a("553a"),A=function(){var t=this,e=t._self._c;return e(j["a"],{attrs:{dark:"",absolute:""}},[e("div",{staticClass:"footer"},[t._v(" Copyright test 2022. All right reserved ")])])},E=[],S=(a("7d51"),{}),T=Object(O["a"])(S,A,E,!1,null,"0fd085c3",null),I=T.exports,P={name:"app",components:{AppHeader:k,AppFooter:I}},M=P,H=(a("1be1"),Object(O["a"])(M,i,s,!1,null,"aec08aa6",null)),B=H.exports,L=a("f309");r["a"].use(L["a"]);var N=new L["a"]({}),K=a("8c4f"),R=a("8336"),W=a("b0af"),D=a("99d9"),$=a("62ad"),q=a("adda"),z=a("0fd9"),F=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"home"},[e("home-header"),e(z["a"],[e($["a"],[e(W["a"],{staticClass:"mx-auto",attrs:{width:"300",height:"330"}},[e(q["a"],{staticClass:"white--text align-end",attrs:{height:"200",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[e(D["c"],[t._v("Top 10 Australian beachs")])],1),e(D["b"],{staticClass:"text--primary"},[e("div",[t._v("WhiteHeaven Beach")]),e("div",[t._v("Whitsunday Island, Whitsunday Islands")])]),e(D["a"],[e(R["a"],{attrs:{color:"orange",text:""}},[t._v("More")])],1)],1)],1),t._l(t.articles,(function(a){return e($["a"],{key:a.id},[e(W["a"],{staticClass:"mx-auto",attrs:{width:"300",height:"330"}},[e(q["a"],{staticClass:"white--text align-end",attrs:{height:"200",src:a.image.url}},[e(D["c"],[t._v(t._s(a.title))])],1),e(D["b"],{staticClass:"text--primary"},[e("div",[t._v(t._s(a.summary))])]),e(D["a"],[e("router-link",{attrs:{to:{name:"article-detail",params:{id:a.id}}}},[e(R["a"],{attrs:{color:"orange",text:""}},[t._v("More")])],1)],1)],1)],1)}))],2)],1)])},J=[],U=a("bc3a"),X=a.n(U),Y=function(){var t=this;t._self._c;return t._m(0)},G=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"home-header"})])}],V=(a("52f4"),{}),Q=Object(O["a"])(V,Y,G,!1,null,"51685eb4",null),Z=Q.exports,tt={name:"Home",components:{HomeHeader:Z},data:()=>({articles:[]}),async mounted(){const t=await X.a.get("https://takamori-c.microcms.io/api/v1/articles",{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});this.articles=t.data.contents}},et=tt,at=(a("339e"),Object(O["a"])(et,F,J,!1,null,null,null)),rt=at.exports,nt=function(){var t=this,e=t._self._c;return e(W["a"],{attrs:{flat:""}},[e(q["a"],{attrs:{height:"400",src:t.article.image.url}}),e(D["c"],[t._v(t._s(t.article.title))]),e(D["b"],[e("div",{domProps:{innerHTML:t._s(t.sanitizedBody)}})])],1)},ot=[],it=a("5e22"),st=a.n(it),ct={name:"ArticleDetail",data:()=>({article:{}}),async mounted(){console.log(this.$route.params);const t=await X.a.get("https://takamori-c.microcms.io/api/v1/articles/"+this.$route.params.id,{headers:{"X-MICROCMS-API-KEY":"e0904f8ce0e8415d85046659d2bdf1d27d28"}});this.article=t.data},computed:{sanitizedBody(){return st()(this.article.body,{allowedTags:st.a.defaults.allowedTags.concat(["img"])})}}},ut=ct,lt=Object(O["a"])(ut,nt,ot,!1,null,null,null),dt=lt.exports;r["a"].use(K["a"]);const ft=[{path:"/",name:"Home",component:rt},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"84ba"))},{path:"/articles/:id",name:"article-detail",component:dt}],pt=new K["a"]({routes:ft});var mt=pt;r["a"].config.productionTip=!1,new r["a"]({vuetify:N,router:mt,render:t=>t(B)}).$mount("#app")},"741b":function(t,e,a){},"7d51":function(t,e,a){"use strict";a("29ae")},"9aa1":function(t,e,a){"use strict";a("2c95")},a657:function(t,e,a){},bc07:function(t,e,a){}});