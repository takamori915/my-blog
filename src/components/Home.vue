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
              <v-col v-for="article in articles" :key="article.id" align="center">
                <v-card width="300" height="300">
                  <v-img
                    class="white--text align-end" 
                    height="200" 
                    :src="article.imgUrl1">
                    <v-card-title>{{ article.title}}</v-card-title>
                  </v-img>
                  <div class="category">
                    <app-chip :text="article.categoryName"></app-chip>
                  </div>
                  <v-card-text class="text--primary">
                    <div align="left">{{ article.summary }}</div>
                  </v-card-text>
                  <v-card-actions class="">
                    <v-spacer></v-spacer>
                    <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
                      <v-btn color="orange" text>詳細</v-btn>
                    </router-link>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="home__contents-right">
            <v-row>
              <v-col cols="12" v-for="article in articles" :key="article.id" align="center">
                <v-card height="300" v-if="article.map">
                  <iframe-custom :src="String(article.map)"></iframe-custom>
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
import IframeCustom from "../components/IframeCustom.vue";
import AppChip from "../components/AppChip.vue"

export default {
  name: 'Home',
  components: {
    HomeHeader,
    IframeCustom,
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
    })
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
</style>
