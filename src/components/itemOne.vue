<template>
  <div>
    <h2>销量展示</h2>
    <div class="chart" id="oneChart">
      图表的容器
    </div>
  </div>
</template>

<script>
import {inject,onMounted,reactive,toRefs} from 'vue'
export default {
  setup(){
    let  $echarts = inject("echarts")
    let  $http = inject("axios")

    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])
    
    function setData(){
      //数组对象可以直接用map方法对数据进行处理
      xdata = data.map(v=>v.title)
      ydata = data.map(v=>v.num)
    }

    async function getState(){
      let newData = await $http({url:"/one/data"})
      data = newData.data.charData.chartData
    }

    onMounted(()=>{
      let myChart = $echarts.init(document.getElementById('oneChart'))
      //发请求获取数据,在then（成功的回调中调用）
      getState().then(()=>{
        setData()

        myChart.setOption({
          grid:{
            top:"2%",
            left:"1%",
            right:"10%",
            bottom:"2%",
            containLabel:true
          },
        xAxis:{
          type:"value"
        },
        yAxis:{
          type:"category",
          data:xdata
        },
        series:[
          {
            type:"bar",
            data:ydata,
            itemStyle:{
              normal:{
                barBorderRadius:[0,20,20,0],
                color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                {
                  offset:0,
                  color:"#005eaa"
                },{
                  offset:0.5,
                  color:"#339ca8"
                },{
                  offset:1,
                  color:"#cda819"
                }]
                )
              }
            }
          }
        ]
      })
    })
      });
       
      

    return{
      setData,
      getState,
      data,
      xdata,
      ydata,
    }
  }
}
</script>

<style scoped>
.chart{
  height: 4.5rem;
}
h2{
  height: .6rem;
  color: #fff;
  line-height: .6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>