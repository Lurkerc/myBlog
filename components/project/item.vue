<template>
  <div class="projectItem" v-if="items">
    <img :src="items.icon" class="projectItemIcon"/>
    <p class="projectItemText">{{ items.text }}</p>
  </div>
</template>

<style lang="less">
  .projectItem{width: 60px; padding: 10px 20px; text-align: center;
    &:hover{background-color: rgba(255, 255, 255, .5)}
    .projectItemIcon{width: 100%}
    .projectItemText{color: #fff;}
  }
</style>

<script>
  export default {
    props: {
      items: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
