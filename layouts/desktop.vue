<template>
  <div>
    <!-- 内容部分 -->
    <main>
      <nuxt/>
    </main>
    <!-- 鼠标右键 -->
    <mouse></mouse>
    <!-- 桌面菜单 -->
    <project></project>
    <!-- 动态背景 -->
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
  @import '~assets/less/public/reset';
  @import '~assets/less/icon/desktop';
  body{overflow: hidden}
  main{width: 100%;height: 100vh;}
  // 进、出场动画
  .page-enter-active, .page-leave-active { transition: opacity .5s}
  .page-enter, .page-leave-active { opacity: 0 }
</style>
