<template>
  <!-- <div class="photos-wrapper"> -->
    <ul>
      <transition-group name="list">      
        <li class="photo" v-for="(photo,index) in photos" v-bind:key = "photo.date">
          <div class="date">{{photo.date}}</div>
          <img :src="photo.src">
        </li>
      </transition-group>
    </ul>
  <!-- </div> -->
</template>

<script type="text/acmascript-6">
 
  export default {
    data: function() {
      return {
      photoArray:[],
      bigphotoSrc: ''
      }
    },
    props:{
      photos: {
        type: Array
      }
    },
    created() {
      
    },
    methods: {
      //展示图片
      // showPhoto: function(event,src) {
      //   if(!event._constructed) {
      //     return;
      //   }
      //   this.bigphotoSrc = src;


      //   return;
      // }
    },
    mounted() {
      // this.photoArray = this.photos.photos;
    },
    watch: {
      photoArray: function() {
          console.log(this.photoArray)
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list-enter-active, .list-leave-active
    transition: all 1s
  .list-enter, .list-leave-to
    opacity: 0
    transform:translateX(-70px)
  .photo
    border: 1px solid #fff 
    display:table
    width:150px
    margin-bottom:10px
    text-decoration:none
    .date
      font-size:20px
      text-align:center
    img
      width: 100%
      height: 100%
      display:block
      margin:auto

</style>