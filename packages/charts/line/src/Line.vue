<script lang="ts">
import { defineComponent, onMounted, ref, watch, nextTick } from "vue-demi";
import { lineProps } from "./line";
import * as echarts from "echarts";
import { getTemplate } from "./template";

export default defineComponent({
  name: "XYLine",
  props: lineProps,
  setup(props) {
    const lineRef = ref();
    let chart: echarts.ECharts;

    watch(props, () => {
      setOption();
    });
    function setOption() {
      nextTick(() => {
        chart ??= echarts.init(lineRef.value);
        const option = getTemplate(props);
        chart.setOption(option);
      });
    }
    onMounted(() => {
      setOption();
    });
    return { lineRef };
  }
});
</script>

<template>
  <div
    ref="lineRef"
    class="xyd-line"
    :class="{
      'xyd-line--dark': theme === 'dark'
    }"
  ></div>
</template>

<style lang="scss" scoped>
.xyd-line {
  width: 100%;
  height: 100%;
  &--dark {
    background: #01031c;
  }
}
</style>
