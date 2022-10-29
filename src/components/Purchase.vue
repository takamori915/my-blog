<template>
  <div>
    <section class="purchase">
      <home-header/>
      <v-container class="purchase__container">
        <v-row v-if="isLoading" align-content="center" style="height: 500px;">
          <v-col cols="12" align="center">
            <v-progress-circular indeterminate color="deep-purple accent-4"></v-progress-circular>
          </v-col>
        </v-row>
        <v-row class="purchase__contents" v-if="!isLoading">
          <v-col cols="12" sm="9" class="purchase__contents-main">
            <v-row>
              <v-col>
                <h2>最近の記事</h2>
                <v-divider></v-divider>
                <p class="pt-2" v-if="articles.length === 0">最近の記事はありません</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" v-for="(article) in articles" :key="article.id" align="left">
                <router-link :to="{ name: 'article-detail', params: { id: article.id } }" class="purchase__router-link">
                  <v-row class="purchase__content-side">
                    <v-col cols="5" class="purchase__content-side-frame">
                        <v-img :src="article.imgUrl1" class="purchase__content-side-img">
                          <div class="purchase__content-side-category">
                            <app-chip :text="article.categoryName"></app-chip>
                          </div>
                        </v-img>
                    </v-col>
                    <v-col cols="7" class="purchase__content-side-text">
                      <p class="purchase__content-side-created-at">
                        {{ article.createdAt }}
                      </p>
                      <h4>{{ article.title }}</h4>
                      <p class="purchase__content-side-summary">{{ article.summary }}</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="purchase__contents-right">
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
  name: 'purchase',
  components: {
    HomeHeader,
    AppChip
  },
  data: () => ({
  articles: [],
    isLoading: false,
  }),
  mounted() {
    this.getData("filters=category[contains]オススメ商品").then(( res ) => { this.articles = res });
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
      this.isLoading = false;
      return resData;
    }
  },
}
</script>

<style lang="scss">
.purchase__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.purchase__contents {
  margin: 10px 10px 40px 10px;
}
.purchase__contents-main {
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

.purchase__content-main--flex {
  display: flex;
  padding: 0px 10px 10px 10px;
  height: 150px;
  width: 450px;
  .purchase__content-create-at {
    font-size: 12px;
    margin: 0;
  }                                                                               
  .purchase__content-summary {
    height: 50px;
    overflow: hidden;
    word-break: break-all;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
  }
}
figure {
  width: 120px;
  height: 120px;
}
.purchase__content-main-img {
  min-width: 120px;
  min-height: 120px;
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.purchase__router-link {
  text-decoration: none;
  color: inherit !important;
}
.purchase__content-side {
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
.purchase__content-recommend {
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
