<template>
  <v-chip
    :color="color"
    :text-color="textColor"
    class="chip"
    :label="label"
  >
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#5E35B1", 
    },
    textColor: {
      type: String,
      default: "white",
    },
    label: {
      style: Boolean,
      default : true,
    }
  }
}
</script>

<style lang="scss">
.chip {
  margin: 0 2 2 0;
  padding: 2;
}
</style>

