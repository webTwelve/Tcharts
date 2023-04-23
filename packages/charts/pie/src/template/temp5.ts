import { theme } from "./index";
import { generatorFormat } from "../../../utils";
import type { PieSeriesOption } from "echarts";
import type { EChartsOption } from "../../../type";
import type { PieProps } from "../pie";

export default function generatorOption(props: PieProps) {
  const currentTheme = theme.get(props.theme!) || theme.get("dark")!;

  // 饼图
  if (!props.circular) {
    const option: EChartsOption<PieSeriesOption> = {
      color: props.color,
      tooltip: {
        trigger: "item",
        borderColor: "transparent",
        formatter: generatorFormat
      },
      series: [
        {
          itemStyle: {
            borderColor: currentTheme.borderColor,
            borderWidth: 0.5
          },
          type: "pie",
          center: ["50%", "50%"],
          radius: [0, "70%"],
          roseType: "radius",
          labelLine: {
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined
            }
          },
          label: {
            formatter: (params) => {
              return `${params.name}`;
            },
            color: currentTheme.labelColor,
            lineHeight: 14,
            fontSize: 14
          },
          data: props.data
        }
      ]
    };
    return option;
  }
  // 环形图
  else {
    const option: EChartsOption<PieSeriesOption> = {
      color: props.color,
      tooltip: {
        trigger: "item",
        borderColor: "transparent",
        formatter: generatorFormat
      },
      series: [
        {
          itemStyle: {
            borderColor: currentTheme.borderColor,
            borderWidth: 0.5
          },
          type: "pie",
          center: ["50%", "50%"],
          radius: ["16%", "70%"],
          roseType: "radius",
          labelLine: {
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined,
              opacity: 0
            }
          },
          label: {
            formatter: (params) => {
              return `${params.name}`;
            },
            color: "transparent",
            lineHeight: 14,
            fontSize: 14
          },
          emphasis: {
            label: {
              formatter: (params) => {
                return `${params.name}`;
              },
              color: currentTheme.labelColor,
              lineHeight: 14,
              fontSize: 14
            },
            labelLine: {
              lineStyle: {
                opacity: 1
              }
            }
          },
          data: props.data
        }
      ]
    };
    return option;
  }
}
