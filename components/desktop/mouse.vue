<template>
  <section class="mouseBox">
    <div class="mouseItem line">
      <span class="mouseIcon">图标</span>
      <span class="mouseText">这是描述</span>
      <span class="mouseInfo">这是描述</span>
    </div>
    <div class="mouseItem disabled">
      <span class="mouseIcon">图标</span>
      <span class="mouseText">这是描述</span>
      <span class="mouseInfo">这是描述</span>
    </div>
    <div class="mouseItem">
      <span class="mouseIcon">图标</span>
      <span class="mouseText">这是描述</span>
      <span class="mouseInfo">这是描述</span>
    </div>
    <div class="mouseItem">
      <span class="mouseIcon">图标</span>
      <span class="mouseText">这是描述</span>
      <span class="mouseInfo">这是描述</span>
    </div>
    <div class="mouseItem">
      <span class="mouseIcon">图标</span>
      <span class="mouseText">这是描述</span>
      <span class="mouseInfo">这是描述</span>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['mouse'],
    methods: {
      test () {
        console.log()
      }
    }
  }
</script>

<style lang="less">
  @import "~assets/less/public/var";
  .mouseBox{
    width: 280px;background-color: #fff;position: fixed;top: 10px;left: 10px;box-shadow:1px 2px 4px 0px #000;
    .mouseItem{padding: 0 10px;display: flex;color:#ccc;margin: 4px 0;
      &.line{border-bottom: 1px solid #ebebeb;}
      &:not(.disabled){
        cursor:pointer;
        color:#333;
        &:hover{background-color: #ebebeb;}
      }
    }
    .mouseIcon{margin-right: 10px;}
    .mouseText{flex: 1;}
  }
</style>
