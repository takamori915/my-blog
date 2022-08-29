<template>
  <div>
    <section class="home-header">
      <v-container fluid fill-height class="home-header__content">
        <v-row>
          <v-col class="home-header__content-text">
            <p>Welcome to My Blog</p>
            <p>I'm Taka</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  padding-top: 50px;
  padding-bottom:50px;
  &__content {
    background: url("../assets/img/home-header.jpg");
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