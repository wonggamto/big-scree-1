<template>
  <div id="people-count-container"></div>
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
      const myChart = echarts.init(document.getElementById('people-count-container'))
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
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
#people-count-container {
  height: 1rem;
  width: 1rem;
}
</style>
