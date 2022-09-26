<template>
  <section class="article-detail">
    <div class="section__title">
      <div class="section__title-text">{{ article.title }}</div>
    </div>
    <v-container class="article-detail__container">
      <v-row class="article-detail__contents">
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12" md="6" class="article-detail__contents-text ">
              <div class="section__title-subtext"><app-chip :text="article.categoryName"></app-chip></div>
              <div class="section__title-summary">{{ article.summary }}</div>
              <br />
              <div v-html="sanitizedBody"></div>
            </v-col>
            <v-col cols="12" md="6" class="article-detail__contents-img">
              <v-card>
                <v-carousel hide-delimiters height="300px">
                  <v-carousel-item>
                    <v-img :src="article.imgUrl1" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-img :src="article.imgUrl2" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-img :src="article.imgUrl3" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
              <v-card v-if="article.map" class="article-detail__contents-img mt-4" height="300px">
                <iframe-custom :src="String(article.map)"></iframe-custom>
              </v-card>
              <v-card v-if="article.movie" cols="12" md="6" class="article-detail__contents-img mt-4" height="300">
                <iframe-custom :src="String(article.movie)"></iframe-custom>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3">
          <v-row>
            <v-col align="center">
              <v-card height="300" v-if="article.map">
                <iframe-custom :src="String(article.map)"></iframe-custom>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import IframeCustom from "../components/IframeCustom.vue";
import AppChip from "../components/AppChip.vue";

export default {
    name: "ArticleDetail",
    data: () => ({
      article: [],
    }),
    components: {
      IframeCustom,
      AppChip,
    },
    mounted() {
      this.getArticle();
    },
    methods: {
      getArticle() {
        axios.get(
          "https://takamori-c.microcms.io/api/v1/articles/" +
            this.$route.params.id,
          {
            headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY}
          }
        )
        .then((res) => {
          this.article = res.data;
          this.article.imgUrl1 = this.article.image1.url;
          this.article.imgUrl2 = this.article.image2.url;
          this.article.imgUrl3 = this.article.image3.url;
          this.article.categoryName = this.article.category[0];
          console.log(this.article);
        })
        .catch((err) => {
          console.log(err);
        });        
      }
    },
    computed: {
      sanitizedBody() {
        sanitizeHtml.defaults.allowedTags = sanitizeHtml.defaults.allowedTags.concat(["img", "iframe"]);
        sanitizeHtml.defaults.allowedAttributes["iframe"] = ["*"];
        return sanitizeHtml(this.article.body);
      }
    }
  }
</script>

<style lang="scss" scoped>
.article-detail__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.article-detail__contents {
   margin: 10px 10px 40px 10px;
  justify-content: center;
  &-img {
    text-align: center;
  }
  &-text {
  }
}
</style>