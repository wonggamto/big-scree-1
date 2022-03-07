import { base } from './base'
import axios from '@/request/http'
import qs from 'qs'

const status = {

  // 房间类型
  getRoomTypeList (params) {
    return axios.post(`${base.status}/api/room/PostRoomTypeList?` + qs.stringify(params))
  },
  //  房间列表
  getRoomList (params) {
    return axios.post(`${base.status}/api/room/PostRoomList?` + qs.stringify(params))
  },
  //  技师类型
  getTecTypeList (params) {
    return axios.post(`${base.status}/api/TechnicianQueue/PostQueueList?` + qs.stringify(params))
  },
  getTecList (params) {
    return axios.post(`${base.status}/api/TechnicianQueue/PostTechnicianQueueDtoList?` + qs.stringify(params))
  }
}
export default status
