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
            text-color="black" active-text-color="black">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>系统管理</span>
                </template>            
                <router-link to="user"><el-menu-item index="1-1" class="secondMenu">人员管理</el-menu-item></router-link>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-printer"></i>
                  <span>设备管理</span>
                </template>            
                <!-- <router-link to="equipment?linzfain"><el-menu-item index="1-1" class="secondMenu">工学二号馆</el-menu-item></router-link>
                <el-menu-item index="1-2" class="secondMenu">地点二</el-menu-item>
                <el-menu-item index="1-3" class="secondMenu">地点三</el-menu-item> -->
                <router-link v-for="item in eqmVicinity" :key="item.id" :to="equipmentName(item.id)" ><el-menu-item index="1-1" class="secondMenu">{{item.name}}</el-menu-item></router-link>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-warning"></i>
                  <span>警报管理</span>
                </template>            
                <router-link to="warnning"><el-menu-item index="1-1" class="secondMenu">警报管理</el-menu-item></router-link>
              </el-submenu>
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
      eqmVicinity:[
        {
          name: '工学一号馆',
          id: 111,
        },
        {
          name: '工学二号馆',
          id: 222,
        },
        {
          name: '工学三号馆',
          id: 333,
        }
      ]
    }
  },
  methods: {

    //将设备信息通过路由传递
    equipmentName(id) {
      return 'equipment?id='+id;
    }
  },

  computed: {

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
    /* text-align: center; */
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
    background-color: rgb(242,242,242 );   
  }
  .secondMenu {
    background-color:  rgb(212, 234, 245)
  }
  .mainMenu ul {
    border-right: 0;
  }
  .mainMenu li {
    border-bottom: 1px solid rgb(210,210,210 );
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
