<template>
  <div>
    <section class="home">
      <home-header/>
      <v-container class="home__container">
        <v-row class="home__contents">
          <!-- <v-col>
            <v-card class="mx-auto" width="300" height="330">
              <v-img 
                class="white--text align-end" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>Top 10 Australian beachs</v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div>WhiteHeaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col> -->
          <v-col cols="12" sm="9" class="home__contents-main">
            <v-row>
              <v-col>
                <h2>最近の記事</h2>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" v-for="(article) in articles" :key="article.id" align="left">
                <router-link :to="{ name: 'article-detail', params: { id: article.id } }" class="home__router-link">
                  <v-row class="home__content-side">
                    <v-col cols="5" class="home__content-side-frame">
                        <v-img :src="article.imgUrl1" class="home__content-side-img">
                          <div class="home__content-side-category">
                            <app-chip :text="article.categoryName"></app-chip>
                          </div>
                        </v-img>
                    </v-col>
                    <v-col cols="7" class="home__content-side-text">
                      <p class="home__content-side-created-at">
                        {{ article.createdAt }}
                      </p>
                      <h4>{{ article.title }}</h4>
                      <p class="home__content-side-summary">{{ article.summary }}</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="home__contents-right">
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
import AppChip from "../components/AppChip.vue"
import moment from "moment"

moment.locale("ja")

export default {
  name: 'Home',
  components: {
    HomeHeader,
    AppChip
  },
  data: () => ({
    articles: [],
  }),
  async mounted() {
    const response = await axios.get(
      "https://takamori-c.microcms.io/api/v1/articles",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY },
      }
    );
    this.articles = response.data.contents;
    // for (let i = 0; i < this.articles.length; i++) {
    //   console.log(this.articles[i].image1.url);
    //   this.articles[i].imgUrl1 = this.articles[i].image1.url;
    // }
    this.articles.forEach(article => {
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
    // let arr = [
    //   { date: '2020-02-20', memo: 'あ' },
    //   { date: '2020-02-21', memo: 'い' },
    //   { date: '2020-02-22', memo: 'う' }
    // ];
    // let result = arr.sort((a, b) => { return (a.date > b.date) ? -1 : 1;});
    // console.log(result);
    this.articles.sort((a, b) => { return (a.created_at > b.created_at) ? -1 : 1; });
  },
}
</script>

<style lang="scss">
.home__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.home__contents {
  margin: 10px 10px 40px 10px;
}
.home__contents-main {
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

.home__content-main--flex {
  display: flex;
  padding: 0px 10px 10px 10px;
  height: 150px;
  width: 450px;
  .home__content-create-at {
    font-size: 12px;
    margin: 0;
  }                                                                               
  .home__content-summary {
    height: 50px;
    overflow: hidden;
    word-break: break-all;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
  }
}
figure {
  width: 120px;
  height: 120px;
}
.home__content-main-img {
  min-width: 120px;
  min-height: 120px;
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.home__router-link {
  text-decoration: none;
  color: inherit !important;
}
.home__content-side {
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
.home__content-recommend {
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
