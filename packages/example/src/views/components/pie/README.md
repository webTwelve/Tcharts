## 安装依赖

```shell
npm install xy-design --registry https://nexus3.service.xiaoyangedu.net/repository/npm-hosted/ -S
// or
yarn add xy-design --registry https://nexus3.service.xiaoyangedu.net/repository/npm-hosted/ -S
```

# 饼图

## 组件参数

### PieProps

| 参数     | 说明               | 类型             | 必须 |
| -------- | ------------------ | ---------------- | ---- |
| data     | 数据               | `PieData[]`      | 否   |
| circular | 是否为环形图       | `boolean`        | 否   |
| template | 默认 1，可选值 1-5 | `number`         | 否   |
| text     | 环形图中间文字     | `string`         | 否   |
| subtext  | 环形图中间第二行   | `string`         | 否   |
| theme    | 主题               | `"dark"/"light"` | 否   |
| color    | 调色盘             | `string[]`       | 否   |

### PieData

| 参数  | 说明             | 类型       | 必须 |
| ----- | ---------------- | ---------- | ---- |
| value | 值               | `number`   | 是   |
| name  | 标签             | `string`   | 是   |
| tips  | 鼠标移上去的提示 | `string[]` | 否   |

## 使用示例

```typescript
import { XYPie } from "xy-design";
import type { PieTheme, PieProps } from "xy-design";

const pieTheme = ref<PieTheme>("light");
const pieOption = reactive<PieProps>({
  data: [
    { value: 1048, name: "Search Engine" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" }
  ]
});


<XYPie
  circular
  :theme="pieTheme"
  :data="pieOption.data"
  :template="1"
  text="类别一"
  subtext="928,531"
/>
```
