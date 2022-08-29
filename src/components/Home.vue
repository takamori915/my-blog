<template>
  <div>
    <section class="home">
      <home-header/>
      <v-row>
        <v-col>
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
        </v-col>
        <v-col v-for="article in articles" :key="article.id">
          <v-card class="mx-auto" width="300" height="330">
            <v-img 
              class="white--text align-end" 
              height="200" 
              :src="article.image.url">
              <v-card-title>{{ article.title }}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{ article.summary }}</div>
            </v-card-text>
            <v-card-actions>
              <router-link :to="{ name: 'article-detail', params: { id: article.id } }">
                <v-btn color="orange" text>More</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./HomeHeader.vue";

export default {
  name: 'Home',
  components: {
    HomeHeader
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
  },
}
</script>

<style lang="scss">
// .home {
//   padding-top: 100px;
//   padding-bottom: 50px;
// }
</style>
