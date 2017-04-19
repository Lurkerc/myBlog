<template>
  <div>
    <main>
      <nuxt/>
    </main>
    <mouse></mouse>
    <project></project>
    <wallpaper></wallpaper>
  </div>
</template>

<script>
  import wallpaper from '~components/desktop/wallpaper'
  import mouse from '~components/desktop/mouse'
  import project from '~components/desktop/project'
  
  export default {
    layout: 'desktop',
    components: {
      wallpaper,
      mouse,
      project
    }
  }
</script>

<style lang="less">
  @import '~assets/less/public/reset.less';
  main{width: 100%;height: 100vh;}
</style>
