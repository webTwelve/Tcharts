<script lang="ts">
import { defineComponent, onMounted, ref } from "vue-demi";
import * as echarts from "echarts";
import { wordCloudProps } from "./wordCloud";
export default defineComponent({
  name: "WordCloud",
  props: wordCloudProps,
  setup(props) {
    const wordCloudRef = ref();
    const init = () => {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(wordCloudRef.value);
      let colorList = [
        "#CF4645",
        "#B580B2",
        "#29008A",
        "#146A90",
        "#8956FF",
        "#70C9A8",
        "#bfbfbf",
        "#595959",
        "#40a9ff",
        "#1890ff",
        "#ffd666",
        "#ffc53d",
        "#ffc53d",
        "#ffc069",
        "#ffa940",
        "#fa8c16",
        "#eccbd9",
        "#ffadad",
        "#ff6392",
        "#ffc09f",
        "#ffcb77",
        "#ffe066",
        "#ffd53e",
        "#ffda3d",
        "#adf7b6",
        "#a0e8af",
        "#80ed99",
        "#07beb8",
        "#17c3b2",
        "#48cae4",
        "#97d2fb",
        "#83bcff",
        "#91e5f6",
        "#9381ff"
      ];
      let colorListLen = colorList.length;
      let fontSizeList = [
        12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5,
        19, 19.5, 20, 20.5, 21, 22, 23, 24
      ];
      let fontSizeListLen = fontSizeList.length;
      let bgColor = "#fff";
      let canDraggable = false;
      let option = {
        backgroundColor: "#fff",
        color: ["#37A2DA", "#32C5E9", "#67E0E3"],
        title: {
          show: false,
          x: "center",
          y: "bottom",
          // 文字的颜色,默认 #333。
          color: "#666",
          fontSize: 24
        },
        toolbox: {
          show: true
        },
        itemStyle: {
          color: bgColor
        },
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 30,
              edgeLength: 10
            },
            roam: "scale",
            label: {
              show: true,
              color: "inherit",
              fontSize: 14
            },
            data: props.data.map((item) => {
              return {
                name: item,
                value: 200,
                draggable: canDraggable,
                itemStyle: {
                  color: bgColor
                },
                label: {
                  color: colorList[Math.floor(Math.random() * colorListLen)],
                  fontSize:
                    fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                }
              };
            })
          }
        ]
      };
      myChart.setOption(option);
    };
    onMounted(() => {
      init();
    });
    return { wordCloudRef };
  }
});
</script>

<template>
  <div ref="wordCloudRef" class="xyd-pie"></div>
</template>

<style lang="scss" scoped>
.xyd-pie {
  width: 100%;
  height: 100%;
}
</style>
