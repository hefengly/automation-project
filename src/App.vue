<template>
  <div id="app">
    <el-container>
      <el-header>safecuit</el-header>
      <el-container>
        <el-aside width="auto">
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group> -->
          <i class="el-icon-setting" v-on:click="open" style="padding:0 21px 0 21px"></i>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="group" style="padding:7px">分组管理</router-link></span>
            </template>
          </el-submenu>
            
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="electricBox" style="padding:7px">电箱管理</router-link></span>
            </template>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="equipment" style="padding:7px">设备管理</router-link></span>
            </template>
          </el-submenu>
            
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="warning" style="padding:7px">预警信息管理</router-link></span>
            </template>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="company" style="padding:7px">公司管理</router-link></span>
            </template>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="user" style="padding:7px">用户管理</router-link></span>
            </template>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="monitor" style="padding:7px">数据监控模块</router-link></span>
            </template>
          </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    open () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
  html, body {
    margin: 0 ;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
