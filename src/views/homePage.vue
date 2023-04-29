<template>
  <div>
    <header>
      <h1>Vue3数据可视化Demo</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <itemPage>
          <itemOne />
        </itemPage>
        <itemPage>
          <itemTwo />
        </itemPage>
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">
        <h2>地图展示</h2>
        <mapPage />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <itemPage>
          <itemThree />
        </itemPage>
        <itemPage>
          <itemFour />
        </itemPage>
      </section>

    </section>
  </div>
</template>

<script setup>
import { inject } from "vue";
import itemPage from '@/components/itemPage.vue'
import itemOne from '@/components/itemOne.vue'
import itemTwo from '@/components/itemTwo.vue'
import itemThree from '@/components/itemThree.vue'
import itemFour from '@/components/itemFour.vue'
import mapPage from '@/components/mapPage.vue'

  let $echarts = inject("echarts")
  let $axios = inject("axios")

</script>

<style lang="scss">
header{
  height: 1rem;
  width: 100%;
  background-color: rgba(0,0,255,0.2);
  h1{
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
//大容器的样式
.container{
  //最大最小宽度，保证容器不是无限延伸
  min-width:200px;
  max-width:2048px;
  margin: 0 auto;
  padding: .125rem .125rem 0;
  display: flex;
  //设置左右在页面的份数
  .itemLeft,.itemRight{
    flex: 3;
  }
  .itemCenter{
    flex: 5;
    height: 10.5rpx;
    border: 1px solid skyblue;
    padding: 0.125rem;
    margin: .25rem;
  }
}
</style>