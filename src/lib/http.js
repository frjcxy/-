// 引入 axios
import axios from 'axios'
axios.defaults.timeout = 5000 //  请求的超时时间 5000ms
// 测试地址
// axios.defaults.baseURL = '/api/';
// 线上地址
// axios.defaults.baseURL = '';
// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = 'https://www.baidu.com';} 
// else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = 'https://www.ceshi.com';
// } 
// else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = 'https://www.production.com';
// }


// request拦截器
axios.interceptors.request.use(
  function (config) {
    // 除了登录 都增加token
    if (config.url.indexOf('/login') == -1) {
      config.headers.Authorization = window.sessionStorage.getItem('token')
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)


var http = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  }
}
export default http
