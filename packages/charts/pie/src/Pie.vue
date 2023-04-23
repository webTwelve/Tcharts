<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue-demi";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { pieProps } from "./pie";
import { UniversalTransition } from "echarts/features";
import { getTemplate } from "./template";
import * as echarts from "echarts/core";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  UniversalTransition
]);

export default defineComponent({
  name: "XYPie",
  props: pieProps,
  setup(props) {
    const pieRef = ref();
    let chart: echarts.ECharts;

    watch(props, () => {
      setOption();
    });

    function setOption() {
      chart ??= echarts.init(pieRef.value);
      const option = getTemplate(props);
      chart.setOption(option);
    }

    onMounted(() => {
      setOption();
    });

    return { pieRef };
  }
});
</script>

<template>
  <div
    ref="pieRef"
    class="xyd-pie"
    :class="{
      'xyd-pie--dark': theme === 'dark'
    }"
  ></div>
</template>

<style lang="scss" scoped>
.xyd-pie {
  width: 560px;
  height: 376px;

  &--dark {
    background: #01031c;
  }
}
</style>
