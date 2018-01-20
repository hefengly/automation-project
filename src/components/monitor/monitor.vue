<template>
  <div>
    <div class="title">
        <i class="icon iconfont icon-shexiangtou"></i>
        <h1 class="title-font">安监易</h1>
        <button type="button" v-on:click = "addPhotos()"></button>
        <button type="button" v-on:click = "addWarnningPhoto()"></button>
      </div>
      <div class="content-wrapper">
        <div class="photo-wrapper" ref="photosWrapper">
          <photo :photos="photoArray"></photo>
        </div>
        <div class="video-wrapper" style=" z-index: 10">
          <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" 
          data-setup="{}">
          <source src="../../../5.mp4" type="video/mp4">
          </video>
        </div>
        <div class="warning-wrapper" ref="warnningPhotos">
          <photo :photos="warnningArray"></photo>
        </div>
      </div>
      <div class="warnning-wrapper" v-show="showWarnning.length" v-for="warn in showWarnning">
        <div  class="warnPhotos">
          <i class="icon iconfont icon-anquanmao"></i>
        </div>
    </div>
  </div>
</template>

<script type="text/acmascript-6">
  import photo from '../photo/photo.vue'
   import BScroll from 'better-scroll'

  const ERR_OK = 0;

  export default {


  data: function(){
    return {
      photoArray:[],
      a:1,
      b:1,
      warnningArray:[],
      isAlert:false,
      showWarnning:[]
    }
  },
  name: 'app',
  mounted () {
    var aspctRatio = 16/9;
    var myPlayer = videojs("example_video_1");
    videojs.options.flash.swf = '../static/video-js.swf';
    videojs("example_video_1").ready(function() {
    var myPlayer = this;
    $(document).ready(function() {
      var width = $('#'+myPlayer.id()).parent().width();
      var height = $('#'+myPlayer.id()).parent().height();
      myPlayer.width(width);
      myPlayer.height(height);
      // Vue.nextTick(function() {
      //   window.onresize = function() {
      //     alert("fdsf")
      //     var width = $('#'+myPlayer.id()).parent().width();
      //     myPlayer.width(width)
      //   }
      //   $(window).resize(function() {
      //     alert("dfdfdfdf");
      //   })

      // })
    });

    // myPlayer.play();
    
    });



  },
  created() {
    // this.$root.$http.get('/api/photos').then((response) => {
    //   response = response.body;
    //   if(response.errno == ERR_OK) {
    //     this.photos = response.data;
    //   }
        // this.$nextTick(() => {
        //   this._initScroll();
        // })
    // })
  },
  components: {
    photo
  },
  // sockets: {
  //   'chat message': function(msg) {
  //     this.message.push(msg)
  //   }
  // },
  methods: {
    //为图像列表添加滚轮动画
    //  _initScroll() {
    //     this.photoScroll = new BScroll(this.$refs.photosWrapper,{click:true});
    //     this.warnningPhotos = new BScroll(this.$refs.warnningPhotos,{click:true});
    //   },
            // 更新图片动画测试
      addPhotos: function() {
        var newPhotos = {
          "date":this.a++,
          "src":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
        };
        // this.photoArray.splice(0,0,newPhotos);
        this.photoArray.unshift(newPhotos);
          // 刷新图片滚轮列表
          this.$nextTick(() => {
          this.photoScroll = new BScroll(this.$refs.photosWrapper,{click:true});
          })
      },

      //模拟警报图片
      addWarnningPhoto: function() {
        var newWPhotos = {
          "date":this.b++,
          "src":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "photoType":1
        };

        this.warnningArray.unshift(newWPhotos);
          this.$nextTick(() => {
          this.warnningPhotos = new BScroll(this.$refs.warnningPhotos,{click:true});
          })
      }
  },
  watch: {

    //监听警报图片数组
    warnningArray: function(e) {
      e.forEach(element => {
        
        //警报显示
        // if(!element.hasShow) {
        //   this.showWarnning.unshift(element.photoType);
        //   element.hasShow = true;
        //   console.log($(window).height()/2)

        //   $(document).ready(function() {
        //     $('.warnPhotos').attr("top", "$(window).height()/2")
        //   })
        //   // this.$refs.warnPhotos.getAttribute('top') = document.body.clientHeight/2;
        // }
      });
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    // background:black
    // background-image:url(./photos/3.png)
    margin: 0
    padding: 0
    background:rgb(52, 63, 200)

  #app
    position: fixed
    left:20px
    top:10px
    bottom:25px
    right:20px
    border: 1px solid white
    background-color: rgba(132,141,255,0.5)
    .title
      width:100%
      height:70px
      .icon
        display:inline-block
        font-size:30px
        color: #fff
        padding-left:20px
      .title-font
        display: inline-block
        line-height:30px
        font-size:30px
        color:#fff
        padding-left:10px
    .content-wrapper
      display:flex
      width:100%
      position:absolute
      top:73px
      bottom:0
      .photo-wrapper
        height:100%
        flex: 0 0 250px
        width:250px
        // border: 1px solid white
        margin-left:15px
        overflow: hidden
      .video-wrapper
        flex:1
      .warning-wrapper
        height:100%
        width:250px
        overflow: hidden
        flex: 0 0 250px 
        // border: 1px solid white
    .warnning-wrapper
      position: fixed
      z-index: 10
      width: 100%
      height: 100%
      overflow: auto
      background: rgba(7,27,27,0.8)
      .warnPhotos
        position: absolute
        .icon
          font-size: 200px
          color: red
          z-index:818889      
</style>
