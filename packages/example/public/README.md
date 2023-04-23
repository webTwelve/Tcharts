## 仪表盘

### 组件参数

#### GaugeProps

| 参数    | 说明     | 默认值 | 类型                           | 必须 |
| ------- | -------- | ------ | ------------------------------ | ---- |
| options | 配置项   | 见下   | `GaugeOptions`                 | 否   |
| theme   | 背景模式 | light  | `GaugeTheme('light' / 'dark')` | 否   |
| id      | 唯一 key |        | string                         | 是   |

#####options

| 参数        | 说明       | 默认值 | 类型                 | 必须 |
| ----------- | ---------- | ------ | -------------------- | ---- |
| min         | 最小值     | 0      | `number`             | 否   |
| max         | 最大值     | 0      | `number`             | 否   |
| splitNumber | 分割数     | 0      | `number`             | 否   |
| data        | 仪表盘数据 | []     | `GaugeOptionsData[]` | 否   |

### 使用示例

```typescript
import { XYGaugeProgress } from "xy-design";
import type {GaugeTheme, GaugeOptions, GaugeOptionsData } from "xy-design";

const theme= ref<GaugeTheme>('light')
const data:GaugeOptionsData =[
  {value:10}
]
const options =reactive<GaugeOptions>({
  min:0,
  max:240,
  splitNumber:5,
  data:data
})

<XYGaugeProgress id='xyGaugeProgress' :theme='theme' :options='options'/>

```

## 翻牌器

### 组件参数

#### DrawDeviceProps

| 参数      | 说明                      | 默认值 | 类型                            | 必须 |
| --------- | ------------------------- | ------ | ------------------------------- | ---- |
| num       | 数据                      | 0      | number                          | 否   |
| mode      | 两种模式                  | card   | `DrawDeviceMode('card'/'unit')` | 否   |
| unit      | 单位（mode='unit'）时有效 |        | string                          | 否   |
| thousands | 千分位                    | false  | boolean                         | 否   |

### 使用示例

```typescript
import { XYDrawDevice } from "xy-design";
import type {DrawDeviceMode } from "xy-design";

const mode= ref<DrawDeviceMode>('card')
const state =reactive<GaugeOptions>({
 num:500,
 unit:'万元'
})

<XYDrawDevice  :mode='mode' :num="state.num"  thousands :unit="state.unit"/>

```

## 折线图

### 组件参数

#### LineProps

| 参数         | 说明          | 类型            | 必须     |
| ------------ | ------------- | --------------- | -------- | --- |
| theme        | `dark         | light`          | `string` | 否  |
| options      | `init参数`    | `IOptionsLine`  | 是       |
| customOption | `echarts配置` | `EChartsOption` | 否       |

#### IOptionsLine

| 参数        | 说明                     | 类型                    | 必须      |
| ----------- | ------------------------ | ----------------------- | --------- | --- |
| type        | `0                       | 1`                      | ` number` | 否  |
| series      | `数据`                   | `ISeriesLine[]`         | 是        |
| yAxisName   | `y坐标左上角名称`        | `string`                | 否        |
| xAxisData   | `x坐标数据`              | `string[]`              | 是        |
| legend      | `图例:和echarts用法一样` | `LegendComponentOption` | 是        |
| color       | `色板`                   | string                  | 否        |
| seriesLabel | series 内部 label        | object 和官网相同       | 否        |

#### ISeriesLine

| 参数 | 说明     | 类型       | 必须 |
| ---- | -------- | ---------- | ---- |
| data | 数据     | `number[]` | 是   |
| name | 数据名称 | `string`   | 是   |

### 使用示例

```TS
import { XYLine } from "xy-design";
import type {IOptionsLine,LineTheme } from "xy-design";

const theme= ref<LineTheme>('light')
const Options =reactive<IOptionsLine>( {
  type: 1,
  yAxisName: "测试折线图",
  xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    {
      name: "测试name",
      data: [150, 230, 224, 218, 135, 147, 260]
    }
  ]
})

<XYLine :theme="singleTheme" :options="Options" />
```

## 环形图

### 组件参数

#### PieProps

| 参数         | 说明          | 类型            | 必须     |
| ------------ | ------------- | --------------- | -------- | --- |
| theme        | `dark         | light`          | `string` | 否  |
| options      | `init参数`    | `IOptionsPie`   | 是       |
| customOption | `echarts配置` | `EChartsOption` | 否       |

#### IOptionsPie

| 参数   | 说明                     | 类型                    | 必须 |
| ------ | ------------------------ | ----------------------- | ---- | --------- | --- |
| type   | `0                       | 1                       | 2`   | ` number` | 否  |
| legend | `图例:和echarts用法一样` | `LegendComponentOption` | 是   |
| data   | `数据`                   | `IData[]`               | 否   |
| color  | `色板`                   | string[]                | 否   |
| title  | `标题:和echarts用法一样` | `TitleComponentOption`  | 否   |

#### IDataPie

| 参数  | 说明       | 类型      | 必须 |
| ----- | ---------- | --------- | ---- |
| value | `数据`     | ` number` | 是   |
| name  | `数据名称` | `string`  | 是   |

### 使用示例

```TS
import { XYPie } from "xy-design";
import type {IOptionsPie,PieTheme } from "xy-design";

const theme= ref<PieTheme>('light')
const Options =reactive<IOptionsPie>({
    type: 2,
      legend: {
        orient: "vertical",
        right: "0"
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ]
})

<XYPie :theme="singleTheme" :options="Options" />
```

## 词云

### 组件参数

| 参数 | 说明   | 类型       | 必须 |
| ---- | ------ | ---------- | ---- |
| data | `数据` | `string[]` | 是   |

### 使用示例

```TS
import { XYWordCloud } from "xy-design";

const Options =reactive({
      data: [
          "睡觉",
          "唱歌",
          "听音乐",
          "洗澡",
          "敲代码",
          "跳舞",
          "开车",
          "洗衣服",
          "做饭",
          "看书",
      ]
})

<XYWordCloud  :data="Options.data" />
```

## 进度条

### 组件参数

| 参数          | 说明           | 类型     | 必须 |
| ------------- | -------------- | -------- | ---- |
| progressTitle | `进度条标题`   | `string` | 否   |
| progressWidth | `进度条百分比` | `number` | 是   |

### 使用示例

```TS
import { XYProgressBar } from "xy-design";
<XYProgressBar  progressTitle="标题" :progressWidth='60' />
```
