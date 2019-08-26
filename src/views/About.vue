<template>
  <div class="about">
    <h1>{{message}}{{$store.state.course.grade}}</h1>
    <el-button @click='testAxios()'>test</el-button>
  </div>
</template>
<script>

export default {
  name: 'home',
  data(){
    return {
      message: 'This is an about page'
    }
  },
  mounted() {
  },
  methods: {
    testAxios(){
      this.$store.commit('changeLoading')
      this.$store.dispatch('GET_ALL_GRADES' ,{
        data: [],
        cb: (res) => {
          console.log(res)
        }
      })
    }
  }
}
</script>