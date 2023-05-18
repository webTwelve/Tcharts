<script lang="ts">
import { defineComponent, onMounted } from "vue-demi";
import * as echarts from "echarts";
import type { GaugeSeriesOption, GraphSeriesOption } from "echarts";
import bg from "./prosess.png";
import { GaugeProps } from "./gaugeProgress";
type EChartsOption = echarts.ComposeOption<
  GaugeSeriesOption | GraphSeriesOption
>;

export default defineComponent({
  name: "XYGaugeProgress",
  props: GaugeProps,
  setup(props) {
    const defaultOptions = {
      min: 0,
      max: 0,
      splitNumber: 0,
      data: [],
      ...props.options
    };
    const axisLineColor = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      {
        offset: 0.0,
        color: "#32B7E4"
      },
      {
        offset: 0.5,
        color: "#4251DA"
      },
      {
        offset: 1,
        color: "#0D4BB7"
      }
    ]) as unknown as string;
    const init = () => {
      const series: GaugeSeriesOption[] = [
        {
          type: "gauge",
          radius: "58%",
          startAngle: 216,
          center: ["50%", "57%"],
          endAngle: -37,
          min: 0,
          max: 0,
          splitNumber: 0,
          itemStyle: {
            color: "#58D9F9",
            shadowColor: "rgba(0,138,255,0.45)",
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: false,
            roundCap: true,
            width: 18
          },
          pointer: {
            icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
            length: "75%",
            width: 10,
            offsetCenter: [0, "5%"]
          },
          axisLine: {
            roundCap: false,
            lineStyle: {
              width: 10,
              color: [[1, axisLineColor]]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            distance: 1,
            length: 12,
            lineStyle: {
              width: 4,
              color: "#A9C0C9"
            }
          },
          axisLabel: {
            show: false,
            distance: 30,
            color: "#999",
            fontSize: 20
          },
          title: {
            show: false
          },
          detail: {
            offsetCenter: [0, "75%"],
            valueAnimation: true,
            formatter: function (value: number) {
              return "{value|" + value.toFixed(0) + "}";
            },
            rich: {
              value: {
                fontSize: 36,
                fontWeight: "bolder",
                color: props.theme === "dark" ? "#A6F4FF" : "#4B535E"
              }
            }
          },
          anchor: {
            size: 8
          },
          data: []
        }
      ];
      const graphic = [
        {
          type: "image",
          left: "center",
          top: "middle",
          z: 10,
          scale: [0.9, 0.9], //缩放
          style: {
            // 背景图
            image: bg,
            opacity: 1,
            width: 238,
            height: 190
          }
        }
      ];
      const options: EChartsOption = {
        graphic: graphic,
        series: series
      };
      const main = document.getElementById(props.id) as HTMLElement;
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(main);
      const [item] = series;
      item.min = defaultOptions.min;
      item.max = defaultOptions.max;
      item.splitNumber = defaultOptions.splitNumber;
      item.data = defaultOptions.data;

      const customOptions: EChartsOption = {
        ...options
      };
      myChart.setOption<EChartsOption>(customOptions);
    };
    onMounted(() => {
      init();
    });
  }
});
</script>
<template>
  <div
    :id="id"
    class="t-gauge-progress"
    :class="{ 'theme-dark': theme === 'dark' }"
  ></div>
</template>
<style lang="scss" scoped>
.t-gauge-progress {
  min-height: 300px;
  min-width: 400px;
  background-color: #ffffff;
}
.theme-dark {
  background-color: #01041d !important;
}
</style>
