<template>
  <section class="article-detail">
    <v-container class="article-detail__container">
      <v-row v-if="isLoading" align-content="center" style="height: 500px;">
        <v-col cols="12" align="center">
          <v-progress-circular indeterminate color="deep-purple accent-4"></v-progress-circular>
        </v-col>
      </v-row>
      <v-row class="article-detail__contents" v-if="!isLoading">
        <v-col cols="12" sm="9"> 
          
          <v-row>
            <v-col>
              <h2>{{ article.title }}</h2>
              <v-divider></v-divider>
            </v-col>
          </v-row>
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
                  <v-carousel-item v-if="article.imgUrl1">
                    <v-img :src="article.imgUrl1" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                  <v-carousel-item v-if="article.imgUrl2">
                    <v-img :src="article.imgUrl2" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                  <v-carousel-item v-if="article.imgUrl3">
                    <v-img :src="article.imgUrl3" alt="" class="img-fluid" height="300px"></v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
              <v-card v-if="article.map" class="article-detail__contents-img mt-4" height="300px">
                <iframe-custom :src="String(article.map)"></iframe-custom>
              </v-card>
              <v-card v-if="article.movie1" cols="12" md="6" class="article-detail__contents-img mt-4" height="300">
                <iframe-custom :src="String(article.movie1)"></iframe-custom>
              </v-card>
              <v-card v-if="article.movie2" cols="12" md="6" class="article-detail__contents-img mt-4" height="300">
                <iframe-custom :src="String(article.movie2)"></iframe-custom>
              </v-card>
              <v-card v-if="article.movie3" cols="12" md="6" class="article-detail__contents-img mt-4" height="300">
                <iframe-custom :src="String(article.movie3)"></iframe-custom>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-if="recommends.length !== 0">
            <v-col>
                <h2>おすすめの記事</h2>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row justify="center" v-if="recommends.length !== 0">
            <div v-for="(article, index) in recommends" :key="article.id">
              <v-col v-if="index <= 2">
                <router-link :to="{ name: 'article-detail', params: { id: article.id } }" class="recommend__link">
                <v-card max-width="300">
                  <v-img
                    class="white--text align-end" 
                    height="200" 
                    :src="article.imgUrl1">
                    <v-card-title>{{ article.title}}</v-card-title>
                  </v-img>
                  <div class="category">
                    <app-chip :text="article.categoryName"></app-chip>
                  </div>
                  <p class="recommend__summary text--primary text-left ma-2">{{ article.summary }}</p>
                  <p class="recommend__created-at ma-2">
                    {{ article.createdAt }}
                  </p>
                </v-card>
                </router-link>
              </v-col>
            </div>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3">
          <v-row>
            <v-col cols="12" align="center">
              <v-card height="300">
                目次
                <br />
                広告
                <br />
                GoogleAdsense
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
import moment from "moment"

moment.locale("ja")

export default {
    name: "ArticleDetail",
    data: () => ({
      article: [],
      recommends: [],
      isLoading: false,
    }),
    components: {
      IframeCustom,
      AppChip,
    },
    mounted() {
      this.getArticle();
    },
    methods: {
      async getArticle() {
        this.isLoading = true;
        await axios.get(
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
        })
        .catch((err) => {
          console.log(err);
        });
        this.getData("filters=(summary[contains]" + this.article.keyword +
            "[or]body[contains]" + this.article.keyword + ")" +
            "[and]id[not_equals]" + this.article.id ).then(( res ) => { this.recommends = res });
        this.isLoading = false;
      },
      async getData(filter) {
        const response = await axios.get(
          "https://takamori-c.microcms.io/api/v1/articles?" + filter,
          {
            headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY },
          }
        );
        let resData = response.data.contents;
        resData.forEach(article => {
          if (article.image1?.url) {
            article.imgUrl1 = article.image1?.url; 
          }
          if (article.category) {
            article.categoryName = article.category[0];
          }
          if (article.created_at) {
            article.createdAt = moment(article.created_at).format("YYYY年M月D日(dd)");
          } else {
            article.createdAt = "";
          }
        })
        resData.sort((a, b) => { return (a.created_at > b.created_at) ? -1 : 1; });
        return resData;
      }
    },
    computed: {
      sanitizedBody() {
        sanitizeHtml.defaults.allowedTags = sanitizeHtml.defaults.allowedTags.concat(["img", "iframe"]);
        sanitizeHtml.defaults.allowedAttributes["iframe"] = ["*"];
        return sanitizeHtml(this.article.body);
      }
    },
    watch: {
      $route () {
        location.reload();
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
}
.recommend {
  &__link {
    text-decoration: none;
  }
  &__summary {
    font-size: 12px;
  }
  &__created-at {
    text-align: right;
    margin: 0px;
    font-size: 10px;
  }
}
</style>