<template>
  <section class="map">
    <div v-for="(article) in this.articles" :key="article.id">
      <div class="section__title">
      </div>
      <v-container class="map__container">
        <v-row v-if="isLoading" align-content="center" style="height: 500px;">
          <v-col cols="12" align="center">
            <v-progress-circular indeterminate color="deep-purple accent-4"></v-progress-circular>
          </v-col>
        </v-row>
        <v-row class="map__contents" v-if="!isLoading">
          <v-col cols="12" sm="9">
            <v-row>
              <v-col cols="12" class="map__contents-img">
                <v-card class="map__contents-img" height="600px">
                  <iframe-custom :src="String(article.map)"></iframe-custom>
                </v-card>
              </v-col>
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
    </div>
  </section>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import IframeCustom from "../components/IframeCustom.vue";

export default {
  name: "Map",
  data: () => ({
    articles: [],
    isLoading: false,
  }),
  components: {
    IframeCustom,
  },
  
  mounted() {
    this.getData("filters=category[contains]地図").then(( res ) => { this.articles = res });
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
.section__title {
  padding: 65px 0px 0px 20px;
}
.map__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.map__contents {
  margin: 10px 10px 40px 10px;
  justify-content: center;
  &-img {
    text-align: center;
  }
}
</style>