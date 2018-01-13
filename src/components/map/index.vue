<template>
  <div class="amap-wrapper">
    <!-- <el-amap class="amap-box" :center="center" :vid="'amap-vue'">
      <el-amap-info-window
        :position="contentWindow.position"
        :content="contentWindow.content"
        :visible="true"
        :events="contentWindow.events">
      </el-amap-info-window>
      <el-amap-marker :position="contentWindow.position"></el-amap-marker>
    </el-amap> -->
    <!-- <navigation></navigation> -->
    <gdmap></gdmap>
  </div>
</template>

<script>
import gdmap from './map'
import navigation from '../common/navigation'

export default {
  name: 'amap',
  components: {
    gdmap, navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
