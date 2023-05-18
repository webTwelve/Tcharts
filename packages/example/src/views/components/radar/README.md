# 雷达图

## 组件参数

### RadarProps

| 参数      | 说明           | 类型               | 必须 |
| --------- | -------------- | ------------------ | ---- |
| indicator |                | `RadarIndicator[]` | 是   |
| data      |                | `RadarData[]`      | 是   |
| theme     | `dark / light` | `string`           | 否   |
| color     |                | `string[]`         | 否   |
| option    | `echarts配置`  | `EChartsOption`    | 否   |

### RadarData

| 参数  | 说明 | 类型       | 必须 |
| ----- | ---- | ---------- | ---- |
| value |      | `number[]` | 是   |
| name  |      | `string`   | 是   |

### RadarIndicator

| 参数 | 说明 | 类型     | 必须 |
| ---- | ---- | -------- | ---- |
| max  |      | `number` | 是   |
| name |      | `string` | 是   |

## 使用示例

```typescript
import { XYRadar } from "t-design";
import type { RadarProps, RadarTheme } from "t-design";

const radarTheme = ref<RadarTheme>("dark");
const radarOption: RadarProps = {
  indicator: [
    { name: "Sales", max: 100 },
    { name: "Administration", max: 100 },
    { name: "Information Technology", max: 100 },
    { name: "Customer Support", max: 100 },
    { name: "Development", max: 100 },
    { name: "Marketing", max: 100 }
  ],
  data: [
    {
      value: [42, 93, 80, 35, 50, 88],
      name: "图例一"
    },
    {
      value: [50, 64, 88, 46, 48, 81],
      name: "图例二"
    }
  ]
};


<XYRadar
  :theme="radarTheme"
  :indicator="radarOption.indicator"
  :data="radarOption.data"
/>
```
