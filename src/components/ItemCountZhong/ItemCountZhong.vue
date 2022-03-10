<template>
  <div id="item-count-container" v-loading="loading"></div>
</template>
<script>
// import { Loading } from 'element-ui'
import * as echarts from 'echarts'
// let myChart = echarts.init(document.getElementById('main'))
export default {
  name: 'ItemCountZhong',
  data () {
    return {
      query: {
        shopno: 22088001,
        beginDate: 20200101,
        endDate: 20210601,
        date_type: 0,
        parmtype: 0
      },
      loading: false
    }
  },
  methods: {
    getItemCountZhong () {
      // Loading.service({ text: '正在加载' })
      return this.$api.report.getGridItemCountZhong(this.query)
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
      const myChart = echarts.init(document.getElementById('item-count-container'))
      myChart.clear()
      const option = {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#000',
            fontSize: 18
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          // data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
          data: chartData.map(item => {
            return item.itemName
          })
        },
        series: [
          {
            name: '钟数',
            type: 'bar',
            data: chartData.map(item => {
              return item.sum_Qnty
            })
            // data: [18203, 23489, 29034, 104970, 131744, 630230]
          }

        ]
      }
      // const myChart = chartDom.init(chartDom)
      myChart.setOption(option)
      this.loading = false
    }
  },
  mounted () {
    this.getItemCountZhong().then(res => {
      this.loading = true
      const data = this.getNewData(res.data.Data, 'itemname')
      const chartData = data.map(el => {
        return {
          itemName: el.itemName,
          sum_Qnty: el.data.reduce((init, item) => init + item.Qnty, 0)
        }
      })
      this.drawChart(chartData)
    })
  }
}
</script>
<style lang="scss" scoped>
#item-count-container {
  height: 80%;
  width: 100%;
}
</style>
