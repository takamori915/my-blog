<template>
  <v-row class="button">
    <v-col>
      <v-btn large color="error" min-width="300" :to="url">
        ＞＞{{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    }
  }
}
</script>
export defaults
<style lang="scss">
.button {
  text-align: center;
}
</style>