<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="myEcharts">
      图表的容器
    </div>
  </div>
</template>

<script>
import {inject,reactive,onMounted} from 'vue'
export default {
  setup(){
    let $http = inject("axios")
    let $echarts = inject("echarts")

    let data = reactive({})

    async function getState(){
      data = await $http({url:"/three/data"})
      
    }

    onMounted(()=>{
      getState().then(res=>{
        let myChart = $echarts.init(document.getElementById("myEcharts"))
        myChart.setOption({
          legend:{
            top:"bottom",
            itemWidth:15
          },
          tooltip:{
            show:true
          },
          series:[
            {
              type:"pie",
              data:data.data.charData.chartData,
              radius:[10,100],
              center:["50%","45%"],
              roseType:"area",
              itemStyle:{
                borderRadius:10
              }
            }
          ]
        })
      })
    })

    return{
      getState,
      data
    }
  }
}
</script>

<style scoped>
.chart{
  height:4.5rem
}
h2{
  height: .6rem;
  color: #fff;
  line-height: .6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>