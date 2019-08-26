<template>
	<div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="main"  :style="{'min-height': (DcSize.height - 170)+'px'}">
       <router-view></router-view>
    </div>
    <div class="footer">
      <div>
        客服电话: 4001566077 QQ: 3579637023 工作日 8:45-12:00 13:00-17:30<br />
        本地服务: 宁波市沪东信息工程有限公司 浙ICP备17026154号-1
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/default.css'
import Header from '@/components/default/Header.vue'
import commonMixin from '@/mixins/commonMixin'

export default {
  mixins: [commonMixin],
  components:{
    Header
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.container {
  position: relative;
}
.header{
	height: 70px;
	background: #fff;
  box-shadow: 0px 5px 10px #ccc;
}
.footer{
	height: 100px;
	background: #3f434e;
  display: table;
  color: white;
  width: 100%;
}
.footer > div{
  line-height: 1.8;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}
.main{
}
</style>
