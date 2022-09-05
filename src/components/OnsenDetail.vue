<template>
  <v-card flat>
    <v-img height="400" :src="article.image.url">
    </v-img>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>
      <div v-html="sanitizedBody"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";

export default {
    name: "OnsenDetail",
    data: () => ({
      article: {}
    }),
    async mounted() {
      console.log(this.$route.params);
      const response = await axios.get(
        "https://takamori-c.microcms.io/api/v1/articles/" +
          this.$route.params.id,
        {
          headers: { "X-MICROCMS-API-KEY": process.env.VUE_APP_X_MICROCMS_API_KEY}
        }
      );
      this.article = response.data; 
    },
    computed: {
      sanitizedBody() {
        return sanitizeHtml(this.article.body, { 
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
        });
      }
    }
  }
</script>