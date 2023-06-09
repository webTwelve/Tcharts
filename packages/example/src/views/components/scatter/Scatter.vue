<script lang="ts" setup>
import { ref } from "vue";
import { XYScatter } from "@t-design/charts";
import type { ScatterTheme, ScatterProps } from "@t-design/charts";
import markdown from "markdown-it";
import readme from "./README.md?raw";

const md = markdown({ html: true });
const code = ref(md.render(readme));

const scatterTheme = ref<ScatterTheme>("light");
const scatterOption: ScatterProps = {
  single: false,
  data: [
    [10.0, 8.04],
    [8.07, 6.95],
    [13.0, 7.58],
    [9.05, 8.81],
    [11.0, 8.33],
    [14.0, 7.66],
    [13.4, 6.81],
    [10.0, 6.33],
    [14.0, 8.96],
    [12.5, 6.82],
    [9.15, 7.2],
    [11.5, 7.2],
    [3.03, 4.23],
    [12.2, 7.83],
    [2.02, 4.47],
    [1.05, 3.33],
    [4.05, 4.96],
    [6.03, 7.24],
    [12.0, 6.26],
    [12.0, 8.84],
    [7.08, 5.82],
    [5.02, 5.68]
  ]
};

const singleScatterTheme = ref<ScatterTheme>("light");
const singleScatterOption: ScatterProps = {
  single: true,
  data: {
    singleYAxis: ["类目五", "类目四", "类目三", "类目二", "类目一"],
    singleXAxis: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    // prettier-ignore
    data: [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
  }
};
</script>

<template>
  <div class="scatter">
    <div class="block">
      <p>普通散点图</p>
      <XYScatter :theme="scatterTheme" :data="scatterOption.data" />
      <button
        @click="scatterTheme = scatterTheme === 'dark' ? 'light' : 'dark'"
      >
        {{ scatterTheme === "dark" ? "浅色" : "深色" }}
      </button>
    </div>

    <div class="block">
      <p>单轴散点图</p>
      <XYScatter
        :theme="singleScatterTheme"
        :single="singleScatterOption.single"
        :data="singleScatterOption.data"
      />
      <button
        @click="
          singleScatterTheme = singleScatterTheme === 'dark' ? 'light' : 'dark'
        "
      >
        {{ singleScatterTheme === "dark" ? "浅色" : "深色" }}
      </button>
    </div>
    <div class="docs-code" v-html="code"></div>
  </div>
</template>

<style lang="scss" scoped>
.scatter {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  button {
    width: 560px;
    height: 50px;
  }
  p {
    width: 560px;
    text-align: center;
    margin: 10px 0;
  }
  .block {
    margin-right: 20px;
  }

  .docs-code {
    width: 100%;
  }
}
</style>
