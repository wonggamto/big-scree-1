import { base } from './base'
import axios from '@/request/http'
import qs from 'qs'

const user = {
  // 用户登录
  login (params) {
    return axios.post(`${base.login}/api/APPAccount/PostAccountInfo?` + qs.stringify(params))
  },
  // 用户登录
  login_withoutToken (params) {
    return axios.post(`${base.login}/api/APPAccount/PostAccountInfo?` + qs.stringify(params))
  },
  // 分店列表,无token
  getShopList (params) {
    return axios.post(`${base.login}/api/APPGrantShop/PostdatatallbyAccountId?` + qs.stringify(params))
  },
  // 分店列表,无token
  getShopList_withoutToken (params) {
    return axios.post(`${base.login}/api/reportt/PostdatatallbyAccountId?` + qs.stringify(params))
  },
  // 获取营业日期
  getbusinessDate_withoutToken (params) {
    return axios.post(`${base.chart}/api/reportt/PostBusinessDate?` + qs.stringify(params))
  },
  // 获取对应分店员工信息
  getRoleAuthorize (params) {
    return axios.post(`${base.chart}/api/reportt/RoleAuthorize?` + qs.stringify(params))
  },
  //  修改密码
  resetPassword (params) {
    return axios.post(`${base.login}/api/APPAccount/PostUpdateAccountPwdH5?` + qs.stringify(params))
  }
}
export default user
