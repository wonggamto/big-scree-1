<template>
  <div id="people-count-container" v-loading="loading"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'PeopleCount',
  data () {
    return {
      query: {
        shopno: 60001040,
        beginDate: 20200101,
        endDate: 20210601,
        date_type: 1,
        parmtype: 0
      },
      tableData: [],
      loading: false
    }
  },
  methods: {
    getPeopleCount () {
      // Loading.service({ text: '正在加载' })
      return this.$api.report.getGridPeopleCount(this.query)
    },
    groupData (arr, fun) {
      const groups = {}
      arr.forEach((el) => {
        const group = fun(el)
        groups[group] = groups[group] || []
        groups[group].push(el)
      })
      return Object.keys(groups).map((group) => {
        // 更改data的数据结构  可以改变新数据的结构 data即为newData的数组中每个数据的结构
        const data = {
          itemName: group,
          data: groups[group]
        }
        return data
      })
    },
    getNewData (oldData, prop) {
      const newData = this.groupData(oldData, (item) => {
        return item[prop]
      })
      return newData
    },
    drawChart (chartData) {
      const myChart = echarts.init(document.getElementById('people-count-container'))
      myChart.clear()
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#fff'
          },
          data: ['客流量', '客流量(取消)']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: chartData.map(item => {
            return item.time
          })
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '客流量',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            data: chartData.map(item => {
              return item.peopleCount
            })
            // data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '客流量(取消)',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            data: chartData.map(item => {
              return item.cancelPeopleCount
            })
            // data: [220, 182, 191, 234, 290, 330, 310]
          }

        ]
      }
      // const myChart = chartDom.init(chartDom)
      myChart.setOption(option)
      this.loading = false
    }
  },
  mounted () {
    this.getPeopleCount().then(res => {
      this.loading = true
      const chartData = res.data.Data.map(item => {
        return {
          peopleCount: item.Peoples,
          time: `${item.yyyymmdd} 时`,
          cancelPeopleCount: item.PeoplesCancel
        }
      })
      this.drawChart(chartData)
    })
  }
}
</script>
<style lang="scss" scoped>
#people-count-container {
  height: 80%;
  width: 100%;
}
</style>
