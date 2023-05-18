<script lang="ts" setup>
import { ref } from "vue";
import { XYRadar } from "@t-design/charts";
import type { RadarProps, RadarTheme } from "@t-design/charts";
import markdown from "markdown-it";
import readme from "./README.md?raw";

const md = markdown({ html: true });
const code = ref(md.render(readme));

const radarTheme = ref<RadarTheme>("light");
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
  ],
  option: {
    radar: {
      center: ["50%", "50%"]
    },
    legend: {
      show: false
    }
  }
};
</script>

<template>
  <div class="radar">
    <div class="block">
      <p>雷达图</p>
      <XYRadar
        :theme="radarTheme"
        :indicator="radarOption.indicator"
        :data="radarOption.data"
        :option="radarOption.option"
      />
      <button @click="radarTheme = radarTheme === 'dark' ? 'light' : 'dark'">
        {{ radarTheme === "dark" ? "浅色" : "深色" }}
      </button>
    </div>
    <div class="docs-code" v-html="code"></div>
  </div>
</template>

<style lang="scss" scoped>
.radar {
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
