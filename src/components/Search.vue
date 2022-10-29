<template>
  <div>
    <section class="search">
      <home-header/>
      <v-container class="search__container">
        <v-row class="search__contents">
          <v-col cols="12" sm="9" class="search__contents-main">
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field
                  hide-details
                  placeholder="キーワードを入力"
                  v-model="keyword"
                  prepend-inner-icon="mdi-magnify"
                  height="30"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5" class="py-1">
                <v-select
                  :items="categoryItems"
                  item-text="name"
                  item-value="name"
                  v-model="categoryNames"
                  placeholder="カテゴリ"
                  multiple
                  chips
                  clearable
                  hide-details
                  class="pa-0"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="1" class="pb-1 pt-3">
                <v-btn
                  block
                  color="grey darken-4"
                  class="white--text"
                  @click="getData()"
                >
                  検 索
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-divider></v-divider>
                <p class="pt-2" v-if="articles.length === 0">検索した記事はありません</p>
              </v-col>
            </v-row>
            <v-row v-if="isLoading" align-content="center" style="height: 500px;">
              <v-col cols="12" align="center">
               <v-progress-circular indeterminate color="deep-purple accent-4"></v-progress-circular>
              </v-col>
            </v-row>
            <v-row v-if="!isLoading">
              <v-col cols="12" sm="6" v-for="(article) in articles" :key="article.id" align="left">
                <router-link :to="{ name: 'article-detail', params: { id: article.id } }" class="search__router-link">
                  <v-row class="search__content-side">
                    <v-col cols="5" class="search__content-side-frame">
                        <v-img :src="article.imgUrl1" class="search__content-side-img">
                          <div class="search__content-side-category">
                            <app-chip :text="article.categoryName"></app-chip>
                          </div>
                        </v-img>
                    </v-col>
                    <v-col cols="7" class="search__content-side-text">
                      <p class="search__content-side-created-at">
                        {{ article.createdAt }}
                      </p>
                      <h4>{{ article.title }}</h4>
                      <p class="search__content-side-summary">{{ article.summary }}</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="search__contents-right">
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
import constants from "../common/constants"

moment.locale("ja")

export default {
  name: 'search',
  components: {
    HomeHeader,
    AppChip
  },
  data: () => ({
    articles: [],
    keyword: "",
    categoryItems: constants.categoryItems,
    categoryNames: [],
    isLoading: false,
  }),
  methods: {
    async getData() {
      this.isLoading = true;
      console.log("this.getKeyword()");
      console.log(this.getKeyword());
      const response = await axios.get(
        "https://takamori-c.microcms.io/api/v1/articles?" + this.getKeyword(),
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
      this.articles = resData;
      this.isLoading = false;
    },
    getKeyword() {
      let keywordList = "filters=id[not_equals]ohvpy7dzml"; // 地図を除く
      if (this.keyword) {
        keywordList = keywordList + 
                      "[and](category[contains]" + this.keyword + 
                      "[or]title[contains]" + this.keyword + 
                      "[or]summary[contains]" + this.keyword + 
                      "[or]body[contains]" + this.keyword + ")";
      }
      this.categoryNames.forEach((name, index) => { 
        keywordList = keywordList + (index === 0 ?  (this.keyword ? "[and](" : "(") : "[or]");
        keywordList = keywordList + "category[contains]" + name;
        keywordList = keywordList + (index === this.categoryNames.length - 1 ? ")" : "");
      });
      return keywordList;
    }
  },
}
</script>

<style lang="scss">
.search__container {
  padding: 0;
  margin: 0;
  max-width: none;
}
.search__contents {
  margin: 10px 10px 40px 10px;
}
.search__contents-main {
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

.search__content-main--flex {
  display: flex;
  padding: 0px 10px 10px 10px;
  height: 150px;
  width: 450px;
  .search__content-create-at {
    font-size: 12px;
    margin: 0;
  }                                                                               
  .search__content-summary {
    height: 50px;
    overflow: hidden;
    word-break: break-all;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
  }
}
figure {
  width: 120px;
  height: 120px;
}
.search__content-main-img {
  min-width: 120px;
  min-height: 120px;
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.search__router-link {
  text-decoration: none;
  color: inherit !important;
}
.search__content-side {
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
.search__content-recommend {
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
.search__btn {
  color: #616161;
}
</style>
