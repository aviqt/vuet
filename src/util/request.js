/*
 ** 统一处理axios相关
 */
import axios from 'axios'
import elm from 'element-ui'

// config
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/json;'

const env = process.env.NODE_ENV
let targets = {
  'production': '',
  'development': 'http://t.experiment.train.joyread.com.cn',
}

// 请求拦截
axios.interceptors.request.use((config) => {
  // config.data = config.data.data
	// console.log(config);
  return config
}, (error) => {
  return Promise.reject(error)
})


// 响应拦截
axios.interceptors.response.use((res) => {
  //console.log('RES:', res)
  if (res.status === 200) {
    if (res.data.succ) {
      //res.data.msg && elm.Message.success(res.data.msg)
      return res.data
    } else {
      res.data.msg && elm.Message.error({
        message: res.data.msg,
        showClose: false
      })
      
      return res.data
    }
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  return Promise.reject(error)
})

// export default axios
export default {
  $post(url, data, cb) {
    axios.post(targets[env] + url, data).then(resolve => {
      cb && cb(resolve)
    }, reject => {
      console.log('error:' + reject)
    })
  },
  $get(url, data, cb) {
    axios.get(targets[env] + url, {
      params: data
    }).then(resolve => {
      cb && cb(resolve)
    }, reject => {
      console.log('error:' + reject)
    })
  },
  axios,
}
