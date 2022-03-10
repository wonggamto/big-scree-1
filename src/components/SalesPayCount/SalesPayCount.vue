<template>
  <div id="sale-pay-count-container"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'SalesPayCount',
  data () {
    return {
      query: {
        shopno: 60001040,
        beginDate: 20200101,
        endDate: 20210601,
        date_type: 0,
        parmtype: 0,
        parmvalue: ''
      }
    }
  },
  methods: {
    getSalesPayCount () {
      // Loading.service({ text: '正在加载' })
      return this.$api.report.getGridRsalespaycount(this.query)
    },
    drawChart (chartData) {
      const myChart = echarts.init(document.getElementById('sale-pay-count-container'))
      myChart.clear()
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '100%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            name: '收银汇总',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: chartData.map(item => {
              return {
                value: item.payamount,
                name: item.payway
              }
            })
          }
        ]
      }
      // const myChart = chartDom.init(chartDom)
      myChart.setOption(option)
    }
  },
  mounted () {
    this.getSalesPayCount().then(res => {
      const chartData = res.data.Data
      this.drawChart(chartData)
    })
  }
}
</script>
<style lang="scss" scoped>
#sale-pay-count-container {
  height: 80%;
  width: 100%;
}
</style>
