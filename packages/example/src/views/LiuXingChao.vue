<script lang="ts" setup>
import { XYBar } from "@t-design/charts";
import { XYLeaderboard, XYDesingLoading } from "@t-design/components";
import { ref } from "vue-demi";

const singleTheme = ref<"dark" | "light">("light");
const lineOptions = {
  id: "xyBar",
  title: "阴影",
  xAxis: {
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    type: "category"
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [650, 230, 224, 218, 135, 147, 260]
    },
    {
      data: [650, 230, 224, 218, 135, 147, 260]
    }
  ],
  typeVal: 1
};
const lineOptions1 = {
  id: "xyBar1",
  title: "横行柱状图",
  xAxis: {
    type: "value"
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  series: [
    {
      data: [650, 230, 224, 218, 135, 147, 260]
    },
    {
      data: [650, 230, 224, 218, 135, 147, 260]
    }
  ],
  typeVal: 2
};
const lineOptions2 = {
  id: "xyBar2",
  title: "正负柱状图",
  xAxis: {
    type: "value"
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  series: [
    {
      stack: "stack",
      data: [650, 230, 224, 218, 135, 147, 260]
    },
    {
      stack: "stack",
      data: [-650, -230, -224, -218, -135, -147, -260]
    }
  ],
  typeVal: 3
};
const rankOptions = {
  isDark: false,
  topTitle: ["排名", "名称", "单位"],
  rankData: [
    {
      name: "我是名称字段我是名称字段我是名称字段我是名…",
      unit: 40
    },
    {
      name: "我是名称",
      unit: 30
    },
    {
      name: "我是名称",
      unit: 28
    },
    {
      name: "我是名称",
      unit: 26
    },
    {
      name: "我是名称",
      unit: 25
    },
    {
      name: "我是名称",
      unit: 20
    },
    {
      name: "我是名称",
      unit: 18
    },
    {
      name: "我是名称",
      unit: 18
    }
  ]
};
</script>

<template>
  <button @click="singleTheme = singleTheme === 'dark' ? 'light' : 'dark'">
    {{ singleTheme === "dark" ? "浅色" : "深色" }}
  </button>
  <view class="bar-wrap">
    <div class="demo">
      <XYBar :theme="singleTheme" :options="lineOptions" />
    </div>
    <div class="demo">
      <XYBar :theme="singleTheme" :options="lineOptions1" />
    </div>
    <div class="demo">
      <XYBar :theme="singleTheme" :options="lineOptions2" />
    </div>
    <div class="demo1">
      <XYLeaderboard :options="rankOptions" />
      <XYDesingLoading :options="{ isLoading: true }" />
    </div>
  </view>
</template>

<style lang="scss" scoped>
.bar-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.demo {
  width: 400px;
  height: 300px;
  margin-right: 40px;
  margin-right: 10px;
}
.demo1 {
  width: 500px;
  position: relative;
}
</style>
