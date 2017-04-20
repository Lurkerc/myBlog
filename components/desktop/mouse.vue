<template>
  <section class="mouseBox" id="mouseBox" 
    :style="getMousePositionPointer()" v-show="$store.state.mouseMenu.open"
  >
    <div class="mouseItem" 
        v-for="(item,index) in mouseItem()" 
        :class="{ 'line': item.line && index != mouseItem().length - 1, 'disabled': item.disabled }" 
        v-on:click="item.todo && item.todo()"
      >
      <span class="mouseIcon" :class="item.icon"></span>
      <span class="mouseText">{{ item.text }}</span>
      <span class="mouseKeys">{{ item.keys | keysFormat }}</span>
      <span class="mouseMore" :class="{ 'desktop_more': item.children }"></span>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      mouse: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        mousePosition: { /* 鼠标右键显示位置坐标 */
          x: 10,
          y: 10
        },
        mouseDefaultItem: [ /* 鼠标默认全局右键 */
          {
            icon: 'desktop_close',
            text: '关闭',
            keys: 'Ctrl+O',
            todo: () => {
              this.$store.commit('mouseMenu/open', false)
            }
          },
          {
            icon: 'desktop_up',
            text: '上一个',
            keys: 'Ctrl+P',
            disabled: true
            // children: []
          },
          {
            icon: 'desktop_down',
            text: '下一个',
            keys: 'Ctrl+N',
            disabled: true
          },
          {
            icon: 'desktop_reload',
            text: '重新加载',
            keys: 'Ctrl+R',
            line: true
          },
          {
            icon: 'desktop_lock',
            text: '锁定',
            keys: 'Ctrl+S',
            line: true,
            todo: () => {
              this.$store.commit('desktop/lock', true)
            }
          }
        ]
      }
    },
    methods: {
      mouseItem () {
        let t = []
        t.push(...this.mouseDefaultItem, ...this.mouse)
        return t
      },
      mouseDownEvn () {
        let _this = this
        if (process.BROWSER_BUILD) {
          document.oncontextmenu = () => { return false }
          document.onmousedown = (e) => {
            if (e.button === 2 || e.button === 3) {
              _this.mousePosition = {x: e.x, y: e.y}
              _this.$store.commit('mouseMenu/open', true)
            }
          }
        }
      },
      getMousePositionPointer () {
        let _this = this
        let mouseDomWidth = 280
        let style = {
          top: `${_this.mousePosition.y}px`,
          left: `${_this.mousePosition.x}px`
        }
        if (process.BROWSER_BUILD) {
          let winHeight = document.body.scrollHeight
          let winWidth = document.body.scrollWidth
          let mouseDomHeight = document.getElementById('mouseBox').offsetHeight
          style.left = (_this.mousePosition.x + mouseDomWidth > winWidth ? _this.mousePosition.x - mouseDomWidth : _this.mousePosition.x) + 'px'
          style.top = (_this.mousePosition.y + mouseDomHeight > winHeight ? _this.mousePosition.y - mouseDomHeight : _this.mousePosition.y) + 'px'
        }
        return style
      }
    },
    filters: {
      keysFormat (str) {
        return str.replace(/\+/g, ' + ')
      }
    },
    watch: {
      mouse: function () {
        this.mouseItem()
      }
    },
    created () {
      this.mouseDownEvn()
    }
  }
</script>

<style lang="less">
  @import "~assets/less/public/var";
  .mouseBox{
    width: 280px;background-color: #fff;position: fixed;box-shadow:1px 2px 4px 0px #000; z-index: 2;
    .mouseItem{padding: 0 10px;display: flex;color:#ccc;margin: 4px 0; line-height: 30px;
      &.line{border-bottom: 1px solid #ebebeb;}
      &:not(.disabled){
        cursor:pointer;
        color:#333;
        &:hover{background-color: #ebebeb;}
      }
    }
    .mouseIcon,.mouseMore{display: inline-block; text-align: center;line-height: inherit;}
    .mouseIcon{width: 16px;  margin-right: 10px;}
    .mouseText{flex: 1;}
    .mouseMore{width: 20px; margin-left: 10px;}
  }
</style>
