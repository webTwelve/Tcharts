<script lang="ts" setup>
import { XYLine, XYWordCloud } from "@xy-design/charts";
import { XYProgressBar } from "@xy-design/components";
import { reactive, ref } from "vue-demi";
const singleTheme = ref<"dark" | "light">("light");
const singleTheme2 = ref<"dark" | "light">("light");

const lineOptions = reactive({
  type: 1,
  yAxisName: "测试折线图",
  xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    {
      name: "测试name",
      data: [2, 4, 14, 44, 2, 7, 8]
    },
    {
      name: "测试name2",
      data: [1, 5, 7, 2, 6, 2, 5]
    }
  ]
});
const lineOptions2 = {
  yAxisName: "测试折线图",
  xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  showLegend: true,
  series: [
    {
      name: "测试name",
      data: [150, 230, 224, 218, 135, 147, 260]
    }
  ]
};

const wordCloudData = [
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
  "玩游戏",
  "跳绳",
  "举重",
  "跑步",
  "踢足球",
  "打篮球",
  "羽毛球",
  "发呆"
];
</script>

<template>
  <view class="line-wrap">
    <div class="demo">
      <XYLine :theme="singleTheme" :options="lineOptions" />
    </div>

    <div class="demo">
      <XYLine :theme="singleTheme" :options="lineOptions2" />
    </div>
    <button @click="singleTheme = singleTheme === 'dark' ? 'light' : 'dark'">
      {{ singleTheme === "dark" ? "浅色" : "深色" }}
    </button>
  </view>

  <button @click="singleTheme2 = singleTheme2 === 'dark' ? 'light' : 'dark'">
    {{ singleTheme2 === "dark" ? "浅色" : "深色" }}
  </button>
  <div class="demo">
    <XYWordCloud :data="wordCloudData" />
  </div>
  <div class="demo">
    <XYProgressBar progress-title="名称" :progress-width="60" />
  </div>
</template>

<style lang="scss" scoped>
.li-ang {
}
.line-wrap,
.pie-wrap {
  display: flex;
  align-items: center;
}
.demo {
  width: 500px;
  height: 300px;
  margin-right: 40px;
  margin-top: 40px;
}
</style>
