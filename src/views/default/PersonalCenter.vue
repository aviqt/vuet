<template>
  <div class="wrapper">
    <div class='left-side'>
      <div class="box">
        <div class="box-head">我的</div>
        <div class="box-body">
          <div class="personal-info">
            <div class="photo">
              <img src="../../assets/images/default_head_photo.png" alt="personal-photo">
            </div>
            <span>用户名字</span>
          </div>
          <div class="nav-list"></div>
        </div>
      </div>
    </div>
    <div class='main'>
      <div class="box">
        <div class="box-head">修改资料</div>
        <div class="box-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from '@/mixins/commonMixin'


export default {
  mixins: [commonMixin],
  components: {},
  data () {
    return {
    }
  },
  mounted ()  {
  },
  methods: {
  },
  computed: {}
}
</script>

<style scoped>
.left-side {
  width: 250px;
  float: left;
}
.main {
  margin-left: 280px;
}

</style>
