<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue-demi";
import {
  TitleComponent,
  SingleAxisComponent,
  LegendComponent,
  ToolboxComponent,
  AxisPointerComponent
} from "echarts/components";
import { ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { scatterProps } from "./scatter";
import { UniversalTransition } from "echarts/features";
import { merge } from "lodash";
import type { ScatterSingleData, ScatterData } from "./scatter";
import type {
  ScatterSeriesOption,
  TitleComponentOption,
  SingleAxisComponentOption
} from "echarts";
import type { EChartsOption } from "../../type";
import * as echarts from "echarts/core";

echarts.use([
  TitleComponent,
  LegendComponent,
  SingleAxisComponent,
  AxisPointerComponent,
  ToolboxComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition
]);

const theme = new Map([
  [
    "dark",
    {
      yFontColor: "#6C8097",
      xFontColor: "#D0DEEE",
      lineColor: "rgba(108,128,151,0.3)",
      xLineColor: "#6C8097"
    }
  ],
  [
    "light",
    {
      yFontColor: "rgba(0,0,0,0.85)",
      xFontColor: "rgba(0,0,0,0.85)",
      lineColor: "rgba(0,0,0,0.1)",
      xLineColor: "rgba(0,0,0,0.85)"
    }
  ]
]);

export default defineComponent({
  name: "XYScatter",
  props: scatterProps,
  setup(props) {
    const scatterRef = ref();
    let chart: echarts.ECharts;

    watch(props, () => {
      setOption();
    });

    function setOption() {
      const currentTheme = theme.get(props.theme) || theme.get("dark")!;
      chart ??= echarts.init(scatterRef.value);
      if (props.single) {
        const data = props.data as ScatterSingleData;
        const title: TitleComponentOption[] = [];
        const singleAxis: SingleAxisComponentOption[] = [];
        const series: ScatterSeriesOption[] = [];
        data.singleYAxis.forEach((t, idx) => {
          title.push({
            textBaseline: "middle",
            top: ((idx + 0.5) * 100) / data.singleYAxis.length + "%",
            text: String(t),
            textStyle: {
              color: currentTheme.xFontColor,
              fontSize: 12,
              fontWeight: 400
            }
          });
          singleAxis.push({
            left:
              Math.max(...data.singleYAxis.map((text) => String(text).length)) *
                12 +
              24,
            type: "category",
            boundaryGap: false,
            data: data.singleXAxis,
            top: (idx * 100) / data.singleYAxis.length + 2 + "%",
            height: 100 / data.singleYAxis.length - 10 + "%",
            axisLabel: {
              interval: 2,
              color: currentTheme.yFontColor
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: currentTheme.lineColor,
                type: "dashed"
              }
            }
          });
          series.push({
            singleAxisIndex: idx,
            coordinateSystem: "singleAxis",
            type: "scatter",
            data: [],
            symbolSize: (dataItem) => {
              return 4 + dataItem[1] * 1.4;
            }
          });
        });

        data.data.forEach((dataItem) => {
          (series[Number(dataItem[0])]?.data as (number | string)[][])?.push([
            dataItem[1],
            dataItem[2]
          ]);
        });

        const option: EChartsOption<ScatterSeriesOption> = {
          tooltip: {
            position: "top"
          },
          title: title,
          singleAxis: singleAxis,
          series: series
        };

        chart.setOption(merge(option, props.option));
      } else {
        const option: EChartsOption<ScatterSeriesOption> = {
          color: props.color,
          xAxis: {
            axisLine: {
              lineStyle: {
                color: currentTheme.xLineColor
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: currentTheme.lineColor
              }
            },
            axisLabel: {
              color: currentTheme.xFontColor
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                type: "dashed",
                color: currentTheme.lineColor
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: currentTheme.lineColor
              }
            },
            axisLabel: {
              color: currentTheme.yFontColor
            }
          },
          tooltip: {
            confine: true,
            enterable: true
          },
          series: [
            {
              symbolSize: 8,
              type: "scatter",
              data: props.data as ScatterData
            }
          ]
        };
        chart.setOption(merge(option, props.option));
      }
    }

    onMounted(() => {
      setOption();
    });

    return { scatterRef };
  }
});
</script>

<template>
  <div
    ref="scatterRef"
    class="xyd-scatter"
    :class="{
      'xyd-scatter--dark': theme === 'dark'
    }"
  ></div>
</template>

<style lang="scss" scoped>
.xyd-scatter {
  width: 560px;
  height: 376px;

  &--dark {
    background: #01031c;
  }
}
</style>
