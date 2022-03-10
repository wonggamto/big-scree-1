<template>
  <div id="date-count-container"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'DateCount',
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
      const myChart = echarts.init(document.getElementById('date-count-container'))
      myChart.clear()
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
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
#date-count-container {
  height: 100px;
  width:100px;
}
</style>
