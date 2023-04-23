<script lang="ts">
import { defineComponent, onMounted } from "vue-demi";
import type { PropType } from "vue-demi";
import { watch } from "vue-demi";
import * as echarts from "echarts";

interface ISeriesColor {
  offset: number;
  color: string;
}
interface ISeries {
  data: number[];
  name: string;
  stack?: string;
  color?: ISeriesColor[];
}
interface IXAxis {
  type: string;
  data?: string[];
}
interface IYAxis {
  type: string;
  data?: string[];
}
interface IOptions {
  type: number;
  id: string;
  title?: string;
  xAxis: IXAxis;
  yAxis: IYAxis;
  series: ISeries[];
  xAxisData: string[];
  typeVal: number; //1 柱状图 2 横行 3横向双反
}
const theme = new Map([
  [
    "dark",
    {
      fontColor: "#ffffff",
      lineColor: "rgba(108,128,151,0.35)"
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
  name: "XYBar",
  props: {
    theme: {
      type: String as PropType<"dark" | "light">,
      default: "dark"
    },
    options: {
      type: Object as PropType<IOptions>,
      default: () => ({
        id: "xydBar",
        xAxis: {
          type: "category"
        },
        yAxis: {
          type: "value"
        }
      })
    }
  },
  setup(props) {
    watch(props, () => {
      init();
    });
    const init = () => {
      const currentTheme = theme.get(props.theme) || theme.get("dark")!;
      const main = document.getElementById(props.options.id) as HTMLElement;
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(main);
      let SeriesColor = [
        [
          { offset: 0, color: "#159AFF" },
          { offset: 1, color: "rgba(0,58,255,0.35)" }
        ],
        [
          { offset: 0, color: "#66E1DF" },
          { offset: 1, color: "rgba(0,88,83,0.35)" }
        ]
      ];
      // 绘制图表
      myChart.setOption({
        title: {
          text: props.options.title ?? props.options.title
        },
        legend: {
          icon: "rect",
          textStyle: {
            color: currentTheme.fontColor
          }
        },
        textStyle: {
          color: currentTheme.fontColor
        },
        xAxis: {
          data: props.options.xAxis.data,
          type: props.options.xAxis.type,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: currentTheme.lineColor
            }
          },
          axisLabel: {
            textStyle: {
              color: currentTheme.fontColor
            }
          },
          z: 10
        },
        yAxis: {
          data: props.options.yAxis.data,
          type: props.options.yAxis.type,
          axisLine: {
            show: false
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
            textStyle: {
              color: currentTheme.fontColor
            }
          }
        },
        series: props.options.series?.map((item, index) => {
          return {
            type: "bar",
            showBackground: props.theme === "dark",
            backgroundStyle: {
              color: props.theme === "dark" ? "rgba(108,128,151,0.1)" : ""
            },
            stack: item.stack,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                props.options.typeVal === 2
                  ? 1
                  : props.options.typeVal === 3
                  ? index === 0
                    ? 1
                    : 0
                  : 0,
                0,
                props.options.typeVal === 3 ? (index === 0 ? 0 : 1) : 0,
                props.options.typeVal === 1 ? 1 : 0,
                item.color ? item.color : SeriesColor[index]
              )
            },
            data: item.data
          };
          // if(props.options.typeVal===1){
          //   return {
          //     type: "bar",
          //     showBackground: props.theme==='dark',
          //     backgroundStyle: {
          //       color: props.theme==='dark'?'#6C8097':''
          //     },
          //     stack: item.stack,
          //     itemStyle: {
          //       color: new echarts.graphic.LinearGradient(
          //         0,
          //         0,
          //         0,
          //         1,
          //         item.color ? item.color : SeriesColor[index]
          //       )
          //     },
          //     data: item.data
          //   };
          // }
          // if(props.options.typeVal===2){
          //   return {
          //     type: "bar",
          //     showBackground: props.theme==='dark',
          //     backgroundStyle: {
          //       color: props.theme==='dark'?'#6C8097':''
          //     },
          //     stack: item.stack,
          //     itemStyle: {
          //       color: new echarts.graphic.LinearGradient(
          //         1,
          //         0,
          //         0,
          //         0,
          //         item.color ? item.color : SeriesColor[index]
          //       )
          //     },
          //     data: item.data
          //   };
          // }
          // if(props.options.typeVal===3){
          //   return {
          //     type: "bar",
          //     showBackground: props.theme==='dark',
          //     backgroundStyle: {
          //       color: props.theme==='dark'?'#6C8097':''
          //     },
          //     stack: item.stack,
          //     itemStyle: {
          //       color: new echarts.graphic.LinearGradient(
          //         index===0?1:0,
          //         0,
          //         index===0?0:1,
          //         0,
          //         item.color ? item.color : SeriesColor[index]
          //       )
          //     },
          //     data: item.data
          //   };
          // }
        })
      });
    };
    onMounted(() => {
      init();
    });
  }
});
</script>

<template>
  <div
    :id="options.id"
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
