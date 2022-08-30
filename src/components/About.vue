<template>
  <div>
    <section class="about-header">
      <v-container fluid fill-height class="about-header__content">
        <v-row>
          <v-col class="about-header__content-text">
            <p>Welcome to My Blog</p>
            <p>I'm Taka</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <about-detail/> 
  </div>
</template>

<script>
import AboutDetail from "./AboutDetail.vue"

export default {
  name: "About",
  components: {
    AboutDetail,
  }
}
</script>

<style lang="scss" scoped>
.about-header {
  padding-top: 50px;
  &__content {
    background: url("../assets/img/about-header.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 80vh;
    include display_pc {
      height: 100vh;
    }
    &-text {
      color: white;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
  }
}
</style>