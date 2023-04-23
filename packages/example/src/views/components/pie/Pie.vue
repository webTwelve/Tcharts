<script lang="ts" setup>
import { ref, reactive } from "vue";
import { XYPie } from "@xy-design/charts";
import type { PieTheme, PieProps } from "@xy-design/charts";
import markdown from "markdown-it";
import readme from "./README.md?raw";

const md = markdown({ html: true });
const code = ref(md.render(readme));

const pieTheme = ref<PieTheme>("light");
const pieOption = reactive<PieProps>({
  data: [
    {
      value: 1048,
      name: "Search Engine",
      tips: [
        "测试第一行: 1个",
        "测试第二行: 2堆",
        "测试第三行: 3块",
        "测试第四行: 4$"
      ]
    },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" }
  ]
});
</script>

<template>
  <div class="pie">
    <p class="title">饼图</p>
    <div v-for="index in 5" :key="'xypie1-' + index" class="block">
      <p>饼图-template-{{ index }}</p>
      <XYPie
        :theme="pieTheme"
        :data="pieOption.data"
        :template="index"
        :text="[2, 4].includes(index) ? '类别一' : ''"
        :subtext="index === 4 ? '928,531' : ''"
      />
      <button @click="pieTheme = pieTheme === 'dark' ? 'light' : 'dark'">
        {{ pieTheme === "dark" ? "浅色" : "深色" }}
      </button>
    </div>
    <p class="title">环形图</p>
    <div v-for="index in 5" :key="'xypie1-' + index" class="block">
      <p>环形图-template-{{ index }}</p>
      <XYPie
        circular
        :theme="pieTheme"
        :data="pieOption.data"
        :template="index"
        :text="[2, 4].includes(index) ? '类别一' : ''"
        :subtext="index === 4 ? '928,531' : ''"
      />
      <button @click="pieTheme = pieTheme === 'dark' ? 'light' : 'dark'">
        {{ pieTheme === "dark" ? "浅色" : "深色" }}
      </button>
    </div>
    <div class="docs-code" v-html="code"></div>
  </div>
</template>

<style lang="scss" scoped>
.pie {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .title {
    width: 100%;
    font-size: 24px;
    margin: 20px 0;
  }
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
