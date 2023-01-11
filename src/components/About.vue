<template>
  <div>
    <section class="about-header">
      <v-container fluid fill-height class="about-header__content">
        <v-row>
          <v-col>
            <div class="balloon-parent">
              <div class="balloon">
                <p class="balloon-text">Welcome to Takamori-Cafe</p>
                <br />
                <p>フロントエンド勉強用に作成したブログです。</p>
                <p>旅行、温泉、ラーメンなど趣味を載せてますので気晴らしに見に来てください。</p>
                <br />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- <about-detail/>  -->
  </div>
</template>

<script>
// import AboutDetail from "./AboutDetail.vue"

export default {
  name: "About",
  components: {
    // AboutDetail,
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
    height: 90vh;
    @include display_pc {
      height: 100vh;
    }
    &-text {
      color: white;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
    &-text--detail {
      color: white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.balloon-parent {
  position: absolute;
  right: 5%;
  @include display_pc {
    left: 5%;
    right: 40%;
  }
  top: 25%;
}
.balloon {
  position: relative;
  margin: 1em 0 1em 20px;
  padding: 15px;
  background: white;
  border-radius: 60px;
    &-text {
      color: black;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
}
.balloon:before {
  content: "";
  position: absolute;
  right: -0px;
  @include display_pc {
    right: -48px;
  }
  width: 13px;
  height: 12px;
  bottom: -20px;
  background: white;
  border-radius: 50%;
}
.balloon:after {
  content: "";
  position: absolute;
  right: 0px;
  @include display_pc {
    right: -24px;
  }
  width: 20px;
  height: 18px;
  bottom: -0px;
  background: white;
  border-radius: 50%;
  z-index: 1;
}
.balloon p {
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>