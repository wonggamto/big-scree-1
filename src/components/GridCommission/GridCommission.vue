<template>
  <div id="grid-commission-container"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'GridCommission',
  data () {
    return {
      query: {
        shopno: 22088001,
        beginDate: 20200101,
        endDate: 20210601,
        date_type: 0,
        parmtype: 0
      }
    }
  },
  methods: {
    getDateCount () {
      // Loading.service({ text: '正在加载' })
      return this.$api.report.getBusDatecount(this.query)
    },
    drawChart () {
      const myChart = echarts.init(document.getElementById('grid-commission-container'))
      myChart.clear()
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      // const myChart = chartDom.init(chartDom)
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChart()
  }
}
</script>
<style lang="scss" scoped>
#grid-commission-container {
  height: 100px;
  width:100px;
}
</style>
