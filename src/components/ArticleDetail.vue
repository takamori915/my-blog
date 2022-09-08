<template>
  <section class="article-detail">
    <div class="section__title">
      <div class="section__title-text">{{ article.title }}</div>
      <div class="section__title-subtext">{{ article.categoryName}}</div>
      <div class="section__title-summary">{{ article.summary }}</div>
    </div>
    <v-container fluid>
      <v-row class="article-detail__contents">
        <v-col cols="12" md="6" class="article-detail__contents-text">
          <div v-html="sanitizedBody"></div>
        </v-col>
        <!-- <v-col cols="12" md="8">
          <h1 id="hd1ac9299fb">温泉タイトル</h1><iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FKyBHXjh0mzo%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKyBHXjh0mzo&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FKyBHXjh0mzo%2Fhqdefault.jpg&key=94335756f04b424b8ce3ce71cbe3de0a&type=text%2Fhtml&schema=youtube" width="560" height="315" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe><p><br><br><br><br></p> 
        </v-col> -->
        <v-col cols="12" md="6" class="article-detail__contents-img">
          <v-card height="400">
            <iframe-custom :src="String(article.map)"></iframe-custom>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="article-detail__contents-img">
          <v-card height="400px">
            <v-carousel hide-delimiters>
              <v-carousel-item>
                <v-img :src="article.imgUrl1" alt="" class="img-fluid" height="400px"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img :src="article.imgUrl2" alt="" class="img-fluid" height="400px"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img :src="article.imgUrl3" alt="" class="img-fluid" height="400px"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="article-detail__contents-img">
          <v-card height="400">
            <iframe-custom :src="String(article.movie)"></iframe-custom>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import IframeCustom from "../components/IframeCustom.vue";

export default {
    name: "ArticleDetail",
    data: () => ({
      article: [],
    }),
    components: {
      IframeCustom,
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
.article-detail__contents {
  margin-top: 20px;
  padding-bottom: 50px;
  justify-content: center;
  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
.article-detail__contents-img {
  text-align: center;
}

</style>