<template>
  <div class="side-nav">
    <div class="title">直播管理平台</div>
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#323741"
			text-color="#fff" active-text-color="#fff" router>
			<div v-for='(item ,i) in navList' :index="item.routePath" :key='i' :is='item.com' v-if="item.type === roleType">
				<i class='iconfont' :class="item.icon"></i>
				<span slot="title">{{ item.title }}</span>
			</div>
		</el-menu>
		<el-menu v-if="roleType != 1" class="el-menu-vertical-demo action-button" background-color="#323741" text-color="#fff" active-text-color="#fff" >
      <el-menu-item index="3" @click="confrimLogout">
        <i class="iconfont icon-setup"></i>
        <span slot="title">注销</span>
      </el-menu-item>
		</el-menu>
    <el-confrim :confrimInfo='confrimInfo' />
  </div>
</template>

<script>
import commonMixin from '@/mixins/commonMixin'
export default {
  mixins: [commonMixin],
  data() {
    return {
      navList: [
        //{routePath: '/admin/staff',  title: '首页', icon: 'icon-home', com: 'el-menu-item', type: 1},
        {routePath: '/admin/staff/class/', title: '班级管理', icon: 'icon-setup',  com: 'el-menu-item', type: 1},
        {routePath: '/admin/staff/teacher/', title: '教师管理', icon: 'icon-setup',  com: 'el-menu-item', type: 1},
        {routePath: '/admin/staff/lab/', title: '实验室管理', icon: 'icon-setup',  com: 'el-menu-item', type: 1},
        {routePath: '/admin/staff/paper/', title: '实验试卷管理', icon: 'icon-setup',  com: 'el-menu-item', type: 1},
        {routePath: '/admin/live/', title: '直播管理', icon: 'icon-setup',  com: 'el-menu-item', type: 0},
        {routePath: '/admin/video/', title: '录播管理', icon: 'icon-setup',  com: 'el-menu-item', type: 0},
      ],
    }
  },
  mounted() {
    this.roleType = window.location.href.indexOf('/staff') != -1 ? 1 : 0
  },
  methods: {
  }
}
</script>

<style scoped>
.side-nav {
  overflow: auto;
}
.side-nav .el-menu-item:hover, .side-nav .is-active {
  background: #2E75FA !important;
}
.side-nav .iconfont{
  margin-right: 8px;
}
.action-button .is-active {
  background: #323741 !important;
}
.action-button .el-menu-item.is-active i{
  color: #909399;
}
.side-nav .el-menu-item:hover i{
  color: white !important;
}
.side-nav .el-menu-item {
  font-size: 16px;
}
.side-nav .el-menu-item i{
  font-size: 18px;
}
.side-nav .title {
  text-align: center;
  font-size: 20px;
  color: white;
  line-height: 60px;
  position: relative;
  font-weight: bold;
  margin-bottom: 5px;
}
.side-nav .title:before {
  content: '';
  position: absolute;
  background:#2E75FA;
  height: 2px;
  bottom: 0;
  left: 15%;
  right: 15%;
}
</style>