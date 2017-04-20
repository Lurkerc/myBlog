<template>
  <canvas id="guide" class="guide"></canvas>
</template>

<style lang="less">
  .guide{width: 100%;height: 100vh;position: fixed; left: 0; top: 0;z-index: 1;}
</style>

<script>
  export default {
    props: {
      guideWidth: {
        type: Number,
        default: 80
      }
    },
    created () {
      if (process.BROWSER_BUILD) {
        let canvas = document.getElementById('guide')
        const ctx = canvas.getContext('2d')
        /* 绘制背景 */
        let gradient = ctx.createLinearGradient(0, 0, 0, 1000)
        gradient.addColorStop(1, '#e0e0e0')
        gradient.addColorStop(1, '#ffffff')
        ctx.fillStyle = gradient
        ctx.fillRect = (0, 0, canvas.width, canvas.height)
        /* 描绘边框 */
        let gridCols = 10
        let gridRows = 10
        let cellHeight = canvas.height / gridRows
        let cellWidth = canvas.width / gridCols
        ctx.lineWidth = 1
        ctx.strokeStyle = '#a0a0a0'
        /* 结束边框绘制 */
        ctx.beginPath()
        /* 画横线 */
        for (let col = 0; col < gridCols; col++) {
          let x = col * cellWidth
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.offsetWidth)
        }
        /* 画竖线 */
        for (let row = 0; row < gridRows; row++) {
          let y = row * cellHeight
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.offsetHeight, y)
        }
        // 完成描绘
        ctx.stroke()
      }
    }
  }
</script>
