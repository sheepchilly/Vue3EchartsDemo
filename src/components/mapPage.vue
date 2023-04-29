<template>
  <div class="map" id="map">

  </div>
</template>

<script setup>
import {onMounted,reactive,inject} from 'vue'
import axios from 'axios'

let mapData = reactive({})
let $echarts = inject("echarts")

const getData = async ()=>{
    mapData = await axios.get("http://localhost:8080/map/china.json")
}

onMounted(()=>{
    getData().then(()=>{
        $echarts.registerMap("china",mapData.data)
        let myChart = $echarts.init(document.getElementById("map"))
        myChart.setOption({
            geo:{
                map:"china",
                itemStyle:{
                    areaColor:"#0099ff",
                    borderColor:"#00ffff",
                    shadowColor:"rgba(230,130,70,0.5)",
                    shadowBlur:30,
                    emphasis:{
                        focus:"self",//当前高亮
                    }
                }
            },
            
        })
    })
})

</script>

<style>
.map{
    width: 100%;
    height: 100%;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>