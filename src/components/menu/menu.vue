<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple title" >安监易</div></el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple user">
                <p class="user-name">hefeng</p>
                <el-button round>退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px"  class="mainMenu MenuH">
            <el-menu class="el-menu-vertical-demo mainMenu"
            text-color="black" active-text-color="black" active-background-color>
              <router-link to="user">
                  <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">人员管理</span>
                  </el-menu-item>
              </router-link>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设备管理</span>
                </template>            
                <router-link to="equipment"><el-menu-item index="1-1" class="mainMenu">地点一</el-menu-item></router-link>
                <el-menu-item index="1-2" class="mainMenu">地点二</el-menu-item>
                <el-menu-item index="1-3" class="mainMenu">地点三</el-menu-item>
              </el-submenu>
              <router-link to="warnning">
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">警报管理</span>
                </el-menu-item>
              </router-link>
            </el-menu>
        </el-aside>
        <el-main class="mainH">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/acmascript-6">


  export default {


  data: function(){
    return {
      
    }
  },
  methods: {

  }

}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .el-header {
    background-color: rgb(105, 194,236);
    color: white;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;
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

  .title {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    font-size: 23px;
  }
  .user {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .user-name {
    font-size: 20px;
    margin: 0 15px 0 0;
  }
  .mainMenu {
    background-color: rgb(242,242,242 )
  }
  .mainMenu ul {
    border-right: 0;
  }
  .MenuH {
    position: absolute;
    top: 60px;
    bottom: 0;
  }
  a {
    text-decoration: none;
  }
  a :hover, :active, :visited {
    text-decoration: none;
    color: #000;
  }
  .mainH {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 200px;
    right: 0;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    background-color: white !important;
  }
</style>
