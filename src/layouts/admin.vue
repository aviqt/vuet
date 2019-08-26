<template>
	<div class="container">
    <div class="header">
      <admin-header></admin-header>
    </div>
    <div class="side-nav">
      <side-nav></side-nav>
    </div>
    <div class="main">
       <div class="main-inner">
         <router-view></router-view>
       </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/admin.css'
import AdminHeader from '@/components/admin/Header'
import SideNav from '@/components/admin/SideNav'

export default {
  components:{
    AdminHeader,
    SideNav
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
  height: 100%;
  background: rgba(0,0,0,0.1);
}
.header{
	position: absolute;
	height: 64px;
	top: 0;
	left: 200px;
	right: 0;
  background: linear-gradient(165deg, #636063 75%, #323741 75%);
	background: #fff;
}
.side-nav{
	position: absolute;
	width: 200px;
	top: 0;
	left: 0;
	bottom: 0;
	background: #323741;
}
.main{
	position: absolute;
	top: 64px;
	left: 200px;
	bottom: 0;
	right: 0;
	padding: 20px;
}
.main-inner {
	position: relative;
	height: 100%;
	width: 100%;
	background: white;
	overflow: auto;
}
</style>
