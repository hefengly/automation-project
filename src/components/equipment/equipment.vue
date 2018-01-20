<template>
  <div class="container">
    <div class="head">
      <h1 class="equipmentArea">{{equipmentArea.name}}</h1>
      <hr style="margin:0 30px"/>
      <div class="cameraContainer">
        <div class="oneCamera" v-for="item in equipmentArea.cameraArray">
          <i class="iconfont icon-shexiangtou01 cameraPhoto"></i>
          <p>{{item.name}}</p>
          <router-link :to="item.camerahref"><el-button type="primary" plain size="small">实时视频</el-button></router-link>
          <el-button type="danger" plain size="small">违规信息</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/acmascript-6">


  export default {
    data () {
      return {
        equipmentArea:{}
      }
    },
    created () {
      // console.log(this.$route.params.id);

      //组件创建时发请求渲染页面
      this.equipmentArea = {
        id:1,
        name:'工学二号馆',
        cameraArray:[
          {
            id: 11,
            name: '实验403',
            camerahref:'/monitor'
          },
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          },          
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          },
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          },
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          },
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          },
          {
            id: 11,
            name: '实验403',
            camerahref:'he'
          }
        ]
      }
    },

    //拿到路由的参数
    beforeRouteUpdate  (to, from, next) {
      console.log(to.params.id);
      
      next();
    }
  }
</script>

<style>

  .equipmentArea {
    font-size: 30px;
    margin-left: 30px;
    color: rgb(105, 194,236);
  }
  .cameraPhoto {
    font-size: 100px;
  }
  .cameraContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;

  }
  .oneCamera {
    width: 200px;
    text-align: center;
    border: 1px dashed rgb(105, 194,236);
    margin-right: 30px;
    margin-bottom: 30px;
  }
</style> 
