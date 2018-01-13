<template>
  <el-amap class="amap-box" :center="center" :vid="'amap-vue'">
    <el-amap-info-window
      :position="contentWindow.position"
      :content="contentWindow.content"
      :visible="true"
      :events="contentWindow.events">
    </el-amap-info-window>
    <el-amap-marker :position="contentWindow.position"></el-amap-marker>
  </el-amap>
</template>

<script>
export default {
  name: 'imap',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      center: [121.5273285, 31.21515044],
      current: 1,
      contentWindow: {
        position: [121.5273285, 31.21515044],
        content: '<h1>哈哈哈哈</h1>',
        events: {
          close () {
            alert('close infowindow')
          }
        }
      }
    }
  }
}
</script>

<style scoped>
 .amap-box {
    width: 100%;
    height: 500px;
  }
</style>
