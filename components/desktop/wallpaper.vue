<template>
  <video :src="aniSrc" :poster="aniPoster" autoplay loop class="aniBg"></video>
</template>

<script>
  export default {
    props: {
      aniSrc: {
        default: '/video/1.mp4',
        type: String
      },
      aniPoster: '/img/background.png',
      type: String
    }
  }
</script>

<style lang="less" scoped>
  .aniBg{
    width:auto;height:auto;min-width:100%;min-height:100%;position:fixed;top:50%;left:50%;
    transform:translate(-50%,-50%);
    z-index:-100;
  }
</style>
