<template>
  <div class="home" style="">
    <btn-view></btn-view>
    <circle-buddles></circle-buddles>
  </div>
</template>

<script>
// @ is an alias to /src
import BtnView from '@/components/board/BtnView.vue'
import CircleBuddles from '@/components/cssAnime/circleBuddles.vue'

export default {
  components:{
    BtnView,
    CircleBuddles
  },
  data () {
    return {
    }
  },
  mounted ()  {
  },
}
</script>

<style scoped>
 .home{
   background-image:radial-gradient(ellipse, #485E78, #2f4156);
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   box-sizing: border-box;
   padding: 20px;
 }
</style>
