<template>
  <div class='header-inner wrapper'>
    <img alt="Vue logo" src="../../assets/logo.png">
    <div class="nav">
      <div v-for="item,i in navList" :key="i" :class="{'on': item.path.indexOf(path) !== -1}"
        @click="changePath(item)">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
import commonMixin from '@/mixins/commonMixin'
export default {
  mixins: [commonMixin],
  data() {
    return {
      navList: [
        {path:'/index/', label:'首页'},
        {path:'/myCourse/', label:'我的课程'},
        {path:'/courseCenter/', label:'课程中心'},
        {path:'/personalCenter/', label:'个人中心'},
      ],
      path: ''
    }
  },
  mounted( ) {
    this.path = window.location.pathname
  },
  methods: {
    changePath(item) {
      this.linkToPath(item.path,1)
      this.path = item.path
    }
  },
}
</script>

<style scoped>
.header-inner {
  
 }
.nav {
 display: inline-block;
}
.nav div{
 display: inline-block;
 line-height: 70px;
 padding: 0 15px;
 font-size: 14px;
 cursor: pointer;
}
.nav .on{
 color: #8BCA31;
}
</style>
