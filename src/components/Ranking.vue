<template>
  <div>
    <section class="ranking">
      <home-header/>
      <v-container class="ranking__container">
        <v-row class="ranking__contents">
          <v-col cols="12" sm="9" class="ranking__contents-main">
            <v-row>
              <v-col>
                <h2>最近の記事</h2>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row v-if="isLoading" align-content="center" style="height: 500px;">
              <v-col cols="12" align="center">
                <v-progress-circular indeterminate color="deep-purple accent-4"></v-progress-circular>
              </v-col>
            </v-row>
            <v-row v-if="!isLoading">
              <v-col cols="12" sm="6" v-for="(article) in articles" :key="article.id" align="left">
                <router-link :to="{ name: 'article-detail', params: { id: article.id } }" class="ranking__router-link">
                  <v-row class="ranking__content-side">
                    <v-col cols="5" class="ranking__content-side-frame">
                        <v-img :src="article.imgUrl1" class="ranking__content-side-img">
                          <div class="ranking__content-side-category">
                            <app-chip :text="article.categoryName"></app-chip>
                          </div>
                        </v-img>
                    </v-col>
                    <v-col cols="7" class="ranking__content-side-text">
                      <p class="ranking__content-side-created-at">
                        {{ article.createdAt }}
                      </p>
                      <h4>{{ article.title }}</h4>
                      <p class="ranking__content-side-summary">{{ article.summary }}</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </router-link>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                 <h2>おすすめの記事</h2>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row justify="center">
              <div v-for="(article, index) in articles" :key="article.id">
                <v-col v-if="index <= 2">
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
                    <p class="ranking__content-recommend-summary text--primary text-left ma-2">{{ article.summary }}</p>
                    <p class="ranking__content-recommend-created-at ma-2">
                      {{ article.createdAt }}
                    </p>
                    <v-card-actions class="">
                      <v-spacer></v-spacer>
                      <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
                        <v-btn color="orange" text>詳細</v-btn>
                      </router-link>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="ranking__contents-right">
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
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./HomeHeader.vue";
import AppChip from "./AppChip.vue"
import moment from "moment"

moment.locale("ja")

export default {
  name: 'ranking',
  components: {
    HomeHeader,
    AppChip
  },
  data: () => ({
    articles: [],
    isLoading: false,
  }),
  mounted() {
    this.getData("filters=category[contains]旅行").then(( res ) => { this.articles = res });
  },
  methods: {
    async getData(filter) {
      this.isLoading = true;
      const response = await axios.get(
        "https://takamori-c.microcms.io/api/v1/articles?" + filter,
        {
          headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY },
        }
      );
      let resData = response.data.contents;
      resData.forEach(article => {
        if (article.category) {
          article.categoryName = article.category[0];
        }
      })
      resData.sort((a, b) => { return (a.created_at > b.created_at) ? -1 : 1; });
      this.isLoading = false;
      return resData;
    }
  },
}
</script>

<style lang="scss">
.ranking__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.ranking__contents {
  margin: 10px 10px 40px 10px;
}
.ranking__contents-main {
  justify-content: right;
}
.category {
  position: absolute; 
  top: 10px; 
  right: 10px;
}
.v-card__text {
  height: 20px;
  overflow: hidden;
}

.ranking__content-main--flex {
  display: flex;
  padding: 0px 10px 10px 10px;
  height: 150px;
  width: 450px;
  .ranking__content-create-at {
    font-size: 12px;
    margin: 0;
  }                                                                               
  .ranking__content-summary {
    height: 50px;
    overflow: hidden;
    word-break: break-all;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
  }
}
figure {
  width: 120px;
  height: 120px;
}
.ranking__content-main-img {
  min-width: 120px;
  min-height: 120px;
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.ranking__router-link {
  text-decoration: none;
  color: inherit !important;
}
.ranking__content-side {
  justify-content: center;
  align-content: center;
  margin: 0px;
  padding: 0 0 20px 0px;
  &-frame {
    text-align: left;
    margin: 0;
    padding: 0;
    min-width: 120px;
    min-height: 120px;
  }
  &-text {
    text-align: left;
    margin: 0;
    padding: 0 0 0 10px;
    word-wrap: break-word;
  }
  &-created-at {
    font-size: 10px;
    text-align: right;
    margin: 0 !important;
  }
  &-category {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  &-summary {
    font-size: 12px;
  }
  &-img {
    height: 140px;
  }
}
.ranking__content-recommend {
  &-summary {
    font-size: 16px;
    overflow: hidden;
    line-height: 1.8;
    height: 3.6em;
  }
  &-created-at {
    font-size: 10px;
    text-align: right;
    margin: 0 !important;
  }
}
</style>
