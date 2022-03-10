<template>
  <div id="sale-amount-container"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'SalesAmount',
  data () {
    return {
      query: {
        shopno: 60001040,
        beginDate: 20200101,
        endDate: 20210601,
        date_type: 1,
        parmtype: 0,
        parmvalue: ''
      }
    }
  },
  methods: {
    getSalesAmount () {
      // Loading.service({ text: '正在加载' })
      return this.$api.report.getGridSalesAmount(this.query)
    },
    drawChart (chartData) {
      const myChart = echarts.init(document.getElementById('sale-amount-container'))
      myChart.clear()
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
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
            name: '实收金额',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            data: chartData.map(item => {
              return item.ReceivedAmount
            })
            // data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
      // const myChart = chartDom.init(chartDom)
      myChart.setOption(option)
    }
  },
  mounted () {
    this.getSalesAmount().then(res => {
      console.log('xxx', res)
      const chartData = res.data.Data.map(item => {
        return {
          ...item,
          time: `${item.yyyymmdd} 时`
        }
      })
      this.drawChart(chartData)
    })
  }
}
</script>
<style lang="scss" scoped>
#sale-amount-container {
  height: 80%;
  width: 100%;
}
</style>
