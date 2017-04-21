<template>
  <div class="projectBox">
    <projectItem></projectItem>
  </div>
</template>

<style lang="less">
  .projectBox{position: absolute; top: 0;left: 0; z-index: 2}
</style>

<script>
  import projectItem from '../project/item'
  
  export default {
    components: {
      projectItem
    }
  }
</script>
