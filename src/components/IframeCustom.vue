<template>
  <div class="yt-responsive">
    <iframe :src="src" 
      allowfullscreen 
      loading="lazy"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      referrerpolicy="no-referrer-when-downgrade">
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
    _class: {
      type: String,
      default: "border:0;"
    }
  }
}
</script>

<style lang="scss">
.yt-responsive iframe{
  position:absolute;
  top:0;
  right:0;
  width:100%;
  height:100%;
}
</style>

