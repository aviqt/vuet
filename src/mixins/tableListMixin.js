export default {
  data() {
    return {
      table: { data: [], columns: [], sort: [], height: 100 },
      page: {
        currentPage: 1,
        pageSizes: [10, 20, 30, 50],
        pageSize: 10,
        total: 200,
        layout: 'total, sizes, prev, pager, next, jumper',
        show: false
      },
    }
  },
  created() {
  },
  methods: {
    sortChange (obj) {
      this.table.sort = obj
      console.log(obj)
    },
    pageChange(index){
      console.log(index)
      console.log(this.page.currentPage)
    },
  }
}
