<template>
  <div>
    <section class="onsen-header">
      <v-container fluid fill-height class="onsen-header__content">
        <v-row>
          <v-col class="onsen-header__content-text">
            <p>Welcome to My Blog</p>
            <p>I'm Taka</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>

export default {
  name: "OnsenList",
}
</script>

<style lang="scss" scoped>
.onsen-header {
  padding-top: 50px;
  &__content {
    background: url("../assets/img/onsen-header.jpg");
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