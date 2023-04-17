<template>
  <div>
    <section class="home-header" :style="disabled ? 'display: none;' : 'display: block;'">
      {{ title }}
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
    padding: 5px 0 5px 15px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #1c1e20;
}
</style>
