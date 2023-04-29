# Vue3可视化项目

# 1.相关依赖下载

1.lib-flexible 移动端多终端适配方案（自适应） -> npm i  --save lib-flexible -> import "lib-flexible/flexible.js" -> 修改node_modules文件夹下refreshRem()方法中的屏幕尺寸

2.在vsCode里面下载 px to rem 插件来进行字体的rem自动计算

3.下载Echarts -> npm i --save echarts -> 在vue3中已经没有了往Vue.prototype原型身上挂载的写法，所以要用provide和inject来注入echarts

```js
//在App.vue中使用provide来提供数据
    import {provide} from 'vue'
    provide("echarts",echarts)
//在需要数据的组件中用inject来接受（这里是homePgae需要echarts）
    import { inject } from "vue";
    let $echarts = inject("echarts")
```

4.axios -> 也是用provide和inject来进行子孙组件的注入 -> npm i --save axios

# 2.样式美化

1.在app中设置整体的背景图片，使用background配合url

2.左右两边的容器里面的图表重复使用四次，所以可以抽离成一个组件方便复用，在其中可以放置一个slot插槽

3.**柱状图样式设置：**在series中使用itemStyle方法设置，color需要调用$echarts实例身上的**LinearGradient**方法，该方法接受五个参数

# 3.跨域设置

1.该项目的跨域设置不需要前端配置proxy，而是由后端设置cors

2.因为接口请求的地址经常会变，所以在App.vue中设置基准路径

```js
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"
```

3.因为axios是由App.vue使用provide提供，子组件inject接受的，所以可以定义一个变量使用它

```js
import {inject} from 'vue'
let  $http = inject("axios")
let data = reactive({})
async function getState(){
  let newData = await $http({url:"/one/data"})
  data = newData.data.charData.chartData
}
```

4.注意：如果reactive的数据重新赋值，会丢失响应式。

- 如果想要返回的数据拥有响应式，应该再封装一层数据（即定义属性名，在后期赋值的时候，对属性名进行赋值），然后使用toRefs给他们添加响应式
- 如果返回的是数组的话，可以直接使用push，这样不会丢失响应式
- 也可以使用Object.assign(target,value)方法，给源目标追加value的值

# 4.请求数据

1.自定义getState()发axios请求获取数据，在onMounted钩子中调用getState获取数据。自定义setData()函数处理数据，在getState的.then()回调中调用setData()处理数据。

2.因为Echarts的options选项也需要在axios请求成功后，所以也可以放在.then回调里
