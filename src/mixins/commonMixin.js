import ElConfrim from '../components/common/ElConfrim'

export default {
  components: {
    ElConfrim
  },
  data () {
    return {
      loading: false,
      confrimInfo: {
        show: false,
        isConfrim: true,
        handlEvent: '',
        title: '',
        text: ''
      },
      countDown: {
        timer: null,
        timeLimit: 0
      },
      DcSize: {
        height: 0,
        width: 0
      },
      roleType: 1
    }
  },
  created () {
    this.DcSize.height = document.documentElement.clientHeight
    this.DcSize.width = document.documentElement.clientWidth
    window.addEventListener('resize' , () => {
      this.DcSize.height = document.documentElement.clientHeight
      this.DcSize.width = document.documentElement.clientWidth
    })
  },
  destroyed () {
    clearInterval(this.countDown.timer)
  },
  methods: {
    linkToPath(url, type){
      if(type){
        this.$router.push(url)
        return
      }
      window.location.href = url
    },
		logout () {
      let role = this.roleType === 1 ? 'staff' : 'teacher'
		},
    confrimLogout () {
      this.setWndCover && this.setWndCover(true)
      this.confrimInfo = {
        show: true,
        isConfrim: true,
        handlEvent: this.logout,
        handlCancleEvent: () => {this.setWndCover && this.setWndCover(false)},
        title: '提醒',
        text: '确定要退出登录吗？'
      }
    }
  },
  computed: {
    timeLimitM () {
      return Math.floor(this.countDown.timeLimit / 60).toString().padStart(2, '0')
    },
    timeLimitS () {
      return (this.countDown.timeLimit % 60).toString().padStart(2, '0')
    }
  }
}


