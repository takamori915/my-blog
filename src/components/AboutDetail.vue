<template>
  <section class="about-detail">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container>
      <v-row class="about-detail__contents">
        <v-col md="5" class="about-detail__contents-img">
          <img src="../assets/img/profile.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="about-detail__contents-text">
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

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