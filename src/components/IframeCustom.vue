<template>
  <div>
    <iframe :src="src" :width="width" :height="height" :class="_class" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 450
    },
    _class: {
      type: String,
      default: "border:0;"
    }
  }
}
</script>

