<template>
  <div>
    <h2>图表4</h2>
    <div class="chart" id="myEchartsFour">图表的容器</div>
  </div>
</template>

<script>
import { inject, reactive, onMounted } from "vue";
export default {
  setup() {
    let $axios = inject("axios");
    let $echarts = inject("echarts");

    let data = reactive({});

    async function getState() {
      data = await $axios("/four/data");
    }

    onMounted(() => {
      getState().then(() => {
        console.log(data.data.charData.chartData);

        let mychart = $echarts.init(document.getElementById("myEchartsFour"));
        mychart.setOption({
          xAxis: {
            type: "category",
            data: data.data.charData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend:{},
          grid:{
            left:"1%",
            right:"6%",
            bottom:"3%",
            containLabel:true
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.charData.chartData.num.Chemicals,
              stack: "total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
              label:{
                show:true
              },
              emphasis:{
                focus:"series"
              }
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.charData.chartData.num.Clothes,
              stack: "total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
              label:{
                show:true
              },
              emphasis:{
                focus:"series"
              }
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.charData.chartData.num.Electrical,
              stack: "total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
              label:{
                show:true
              },
              emphasis:{
                focus:"series"
              }
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.charData.chartData.num.digit,
              stack: "total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
              label:{
                show:true
              },
              emphasis:{
                focus:"series"
              }
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.charData.chartData.num.gear,
              stack: "total", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
              label:{
                show:true
              },
              emphasis:{
                focus:"series"
              }
            },
          ],
        });
      });
    });

    return {};
  },
};
</script>

<style scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>