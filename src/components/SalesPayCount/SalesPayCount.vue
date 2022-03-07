<template>
  <div id="sale-pay-container"></div>
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
      const myChart = echarts.init(document.getElementById('sale-pay-container'))
      myChart.clear()
      const option = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              {
                value: 1048,
                name: 'Search Engine'
              },
              {
                value: 735,
                name: 'Direct'
              },
              {
                value: 580,
                name: 'Email'
              },
              {
                value: 484,
                name: 'Union Ads'
              },
              {
                value: 300,
                name: 'Video Ads'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
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
#sale-pay-container {
  height: 1rem;
  width: 1rem;
}
</style>
