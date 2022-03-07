import { base } from './base'
import axios from '@/request/http'
import qs from 'qs'

const report = {

  //  项目钟数统计
  getGridItemCountZhong (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridItemCountZhongJson?` + qs.stringify(params))
  },
  //  项目销售统计
  getGridSaleItemCountJson (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridSaleItemCountJson?` + qs.stringify(params))
  },
  //  推销提成
  getGridRSalesMantc (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridRSalesMantcJson?` + qs.stringify(params))
  },
  //  会员统计
  getVipFlowCount (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridRvipflowcountJson?` + qs.stringify(params))
  },
  //  收银汇总
  getGridRsalespaycount (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridRsalespaycountJson?` + qs.stringify(params))
  },
  //  客流统计
  getGridPeopleCount (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridPeopleCountJson?` + qs.stringify(params))
  },
  //  营业日报
  getBusDatecount (params) {
    return axios.post(`${base.chart}/api/reportt/GetBusDatecountJson?` + qs.stringify(params))
  },
  //  业绩统计
  getGridSalesAchievement (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridSalesAchievementJson?` + qs.stringify(params))
  },
  // 营业额统计
  getGridSalesAmount (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridSalesAmountJson?` + qs.stringify(params))
  },
  getGridCommision (params) {
    return axios.post(`${base.chart}/api/reportt/GetGridCommissionJson?` + qs.stringify(params))
  },
  test (params) {
    return axios.post(`${base.test}/getUserByYzOpenId`, qs.stringify(params))
  }
}
export default report
