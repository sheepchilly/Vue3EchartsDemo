<template>
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import {provide} from "vue"
import * as echarts from "echarts"
import axios from 'axios'

// 设置请求的基准路径
axios.defaults.baseURL = "http://localhost:3000"

  //要传递的数据叫echarts，传递的值是echarts
  provide("echarts",echarts)
  provide("axios",axios)

</script>

<style lang="scss">
body{
  background: url("~@/assets/bg.jpg") top center no-repeat;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
