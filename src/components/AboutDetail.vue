<template>
  <section class="about-detail">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container>
      <v-row class="about-detail__contents">
        <v-col cols="5" md="5" class="about-detail__contents-img">
          <img src="../assets/img/profile.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col cols="5" md="5" class="about-detail__contents-text">
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </v-col>
        <v-col><app-button :button-text="buttonText" :url="url"/></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import AppButton from "../components/AppButton.vue";

export default {
  data() {
    return {
      buttonText: "詳しくみる",
      url: "/"
    }
  },
  components: {
    AppButton,
  }
}
</script>


<style lang="scss" scoped>
.about-detail__contents {
  margin-top: 20px;
  padding-bottom: 50px;
  justify-content: center;
  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
</style>