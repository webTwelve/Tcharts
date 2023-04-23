<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue-demi";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  RadarComponent
} from "echarts/components";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { radarProps } from "./radar";
import { UniversalTransition } from "echarts/features";
import { merge } from "lodash";
import type { RadarSeriesOption } from "echarts";
import type { EChartsOption } from "../../type";
import * as echarts from "echarts/core";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  RadarComponent,
  RadarChart,
  CanvasRenderer,
  UniversalTransition
]);

const theme = new Map([
  [
    "dark",
    {
      fontColor: "#ffffff",
      lineColor: "rgba(255,255,255,0.45)"
    }
  ],
  [
    "light",
    {
      fontColor: "rgba(0,0,0,0.85)",
      lineColor: "rgba(0,0,0,0.1)"
    }
  ]
]);

export default defineComponent({
  name: "XYRadar",
  props: radarProps,
  setup(props) {
    const radarRef = ref();
    let chart: echarts.ECharts;

    watch(props, () => {
      setOption();
    });

    function setOption() {
      const currentTheme = theme.get(props.theme) || theme.get("dark")!;
      chart ??= echarts.init(radarRef.value);

      const option: EChartsOption<RadarSeriesOption> = {
        color: props.color,
        tooltip: {
          confine: true,
          enterable: true
        },
        legend: {
          data: props.data.map((item) => item.name),
          bottom: "40px",
          left: "center",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 24,
          padding: 0,
          formatter: ["{a|{name}}"].join("\n"),
          textStyle: {
            fontSize: 12,
            height: 8,
            rich: {
              a: {
                verticalAlign: "middle",
                color: currentTheme.fontColor,
                fontSize: 12
              }
            }
          }
        },
        radar: {
          radius: "56%",
          center: ["50%", "44%"],
          name: {
            textStyle: { color: currentTheme.fontColor }
          },
          splitLine: {
            lineStyle: {
              color: [currentTheme.lineColor]
            }
          },
          splitArea: {
            show: false
          },
          indicator: props.indicator
        },
        series: [
          {
            type: "radar",
            data: props.data,
            areaStyle: {
              opacity: 0.4
            }
          }
        ]
      };
      chart.setOption(merge(option, props.option));
    }

    onMounted(() => {
      setOption();
    });

    return { radarRef };
  }
});
</script>

<template>
  <div
    ref="radarRef"
    class="xyd-radar"
    :class="{
      'xyd-radar--dark': theme === 'dark'
    }"
  ></div>
</template>

<style lang="scss" scoped>
.xyd-radar {
  width: 560px;
  height: 376px;

  &--dark {
    background: #01031c;
  }
}
</style>
