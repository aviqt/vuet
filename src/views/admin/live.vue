<template>
  <div class="admin-page">
    <div class="top">
      <span class="title">{{title}}</span>
    </div>
    <div class="action-bar">
      <div class='filter-box'>
        <el-input v-model="filter.liveName" size="small" placeholder="直播名"></el-input>
        <el-input v-model="filter.roomCode" size="small" placeholder="房间编号"></el-input>
        <el-select v-model='filter.status'  size="small" >
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="success" size="small" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="showAddLive">新增</el-button>
      </div>
    </div>
    <el-table :data="table.data" style="width: 100%" @sort-change="sortChange" border :max-height="DcSize.height - 230">
    	<el-table-column v-for='(item,i) in table.columns' :key='i' :prop='item.prop' :label='item.label' 
        :width='item.width' :min-width='item.minWidth' :fixed='item.fixed' :sortable="item.sortable" :formatter='item.formatter'
      ></el-table-column>
      <el-table-column label="操作"  width="300"  fixed='right' align="center"  v-if="status === 0">
        <template slot-scope="scope">
          <el-button size="mini">直播管理</el-button>
          <el-button size="mini">课件管理</el-button>
          <el-button size="mini">作业管理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
       <el-pagination  :current-page="page.currentPage" :page-sizes="page.pageSizes"  :page-size="page.pageSize"  
         :layout="page.layout" :total="page.total" background>
      </el-pagination>
    </div>
    <el-dialog v-if="dialogInfo.show"  :title="dialogInfo.title" :visible.sync="dialogInfo.show" :width="dialogInfo.width">
      <component :is="dialogInfo.com" :data='dialogInfo.data' ref='dialogBox'></component>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogInfo.show = false">取 消</el-button>
          <el-button type="primary" @click="$refs.dialogBox.onOk()">确 定</el-button>
      </div>
    </el-dialog>
    <el-confrim :confrimInfo='confrimInfo' />
  </div>
</template>

<script>
import tableListMixin from '@/mixins/tableListMixin'
import commonMixin from '@/mixins/commonMixin'
// dialogBox
import EditLive from '@/components/admin/dialog/EditLive'


export default {
  mixins: [tableListMixin,commonMixin,],
  components: {},
  data () {
    return {
      title: '直播管理',
      dialogInfo: [],
      status: 0,
      filter: {
        liveName: '',
        roomCode: '',
        status: 0
      },
      statusList: []
    }
  },
  mounted ()  {
    this.getTableData()
    this.statusList = [
      {value: 1, label: '未开始'},
      {value: 2, label: '进行中'},
      {value: 6, label: '暂停'},
      {value: 7, label: '已结束'},
      {value: 0, label: '所有'},
    ]
  },
  methods: {
    getTableData(){
      this.table.columns = [
        { prop: 'id', label: 'ID', sortable: 'custom' },
        { prop: 'title', label: '直播标题', sortable: 'custom' },
        { prop: 'course', label: '关联的课程', sortable: 'custom' },
        { prop: 'startTime', label: '预计开始时间', sortable: 'custom' },
        { prop: 'status', label: '状态', sortable: 'custom' },
        { prop: 'period', label: '第几课时', sortable: 'custom' },
      ]
      this.table.data = [
        {id: '7701', title: '北仑区师德培训', course: '5北仑区师德培训', startTime: '2018.08.28 10:29', status: '已结束', period: '1'},
      ]
    },
    showAddLive(){
      this.dialogInfo = {
        title: '新增直播',
        show: true,
        width: "700px",
        com: EditLive,
        data: {
          successFn: () => {
            this.dialogInfo.show = false
            this.getTableData()
          }
        }
      }
    },
  },
  computed: {}
}
</script>

<style scoped>
.pagination {
  text-align: right;
  margin-top: 20px;
}
</style>
