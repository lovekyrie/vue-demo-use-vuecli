// 定义接口
import service from './index'

const API = {}

/** 登录接口 */
API.getLogin = params => {
  return service.get('/user/login', { params })
}

/** 获取应用数据 */
API.getData = () => {
  return service.get('/user/getData')
}

export default API
