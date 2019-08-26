<template>
  <div class="banner">
    <div class="img-list">
      <img v-for="img,i in images" :key="i"
        :style="{'opacity': (index != i ?'0':'1') }"
        :src="img.url" 
        :alt="img.url" />
    </div>
    <div class="btn-bar">
      <div v-for="img,i in images" :key="i" 
        :class="{'on': index === i  }"
        @click="changeIndex(i)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      index: 1,
      sto: null
    }
  },
  mounted() {
    this.images = [
      {url: require('@/assets/images/banner.jpg')},
      {url: 'https://smallfilesoss.iclass.cn/1264_632_1554947793822psule.png'}
    ]
    this.changeIndex()
  },
  destroyed() {
    clearTimeout(this.sto)
  },
  methods: {
    changeIndex(i) {
      clearTimeout(this.sto)
      this.index = i != null ? i : this.index + 1
      if(this.index === this.images.length) this.index = 0
      this.sto = setTimeout(this.changeIndex , 20000)
    }
  },
}
</script>

<style scoped>
.banner{
  border-top: 5px #55a532 solid; 
  position: relative;
  height: 350px;
  overflow: hidden;
}
.banner .img-list{
  position: relative;
  width: 1920px;
  height: 350px;
  left: 50%;
  margin-left: -960px;
}
.img-list img{
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
}
.btn-bar{
  position: absolute;
  width: 50%;
  right: 30px;
  bottom: 10px;
  text-align: right;
}
.btn-bar > div{
  display: inline-block;
  height: 15px;
  width: 15px;
  background: #aaa;
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  border: 2px solid white;;
}
.btn-bar > .on{
  background: #76b994;
}
</style>
