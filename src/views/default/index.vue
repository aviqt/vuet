<template>
  <div>
    <Banner />
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import commonMixin from '@/mixins/commonMixin'


export default {
  mixins: [commonMixin],
  components: {
    Banner
  },
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
</style>
