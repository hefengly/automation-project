<template>
  <div class="navigation">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to='equipment'>设备管理</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='warning'>预警信息管理</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to='company'>公司管理</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to='user'>用户管理</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to='monitor'>数据监控模块</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to='map'>地图</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
