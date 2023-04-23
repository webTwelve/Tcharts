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
      legend: {
        orient: "horizontal",
        icon: "circle",
        left: "center",
        bottom: 38,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 18,
        padding: 0,
        formatter: ["{a|{name}}"].join("\n"),
        itemStyle: {
          borderColor: "transparent"
        },
        textStyle: {
          fontSize: 13,
          height: 23,
          lineHeight: 26,
          rich: {
            a: {
              verticalAlign: "middle",
              color: currentTheme.legendColor,
              fontSize: 12,
              lineHeight: 24
            }
          }
        }
      },
      series: [
        {
          itemStyle: {
            borderColor: currentTheme.borderColor,
            borderWidth: 0.5
          },
          type: "pie",
          center: ["50%", "42%"],
          radius: [0, "50%"],
          labelLine: {
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined
            }
          },
          label: {
            formatter: (params) => {
              return `${params.percent === undefined ? 0 : params.percent}%`;
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
      title: {
        text: props.text === "" ? undefined : props.text,
        subtext: props.subtext === "" ? undefined : props.subtext,
        left: "center",
        top: props.subtext === "" ? "40%" : "36%",
        itemGap: props.subtext === "" ? 0 : 7,
        textStyle: {
          color:
            props.subtext === "" ? currentTheme.subtitle : currentTheme.title,
          fontSize: props.subtext === "" ? 16 : 14,
          fontWeight: props.subtext === "" ? 500 : 400
        },
        subtextStyle: {
          color: currentTheme.subtitle,
          fontSize: 16,
          fontWeight: 600
        }
      },
      tooltip: {
        trigger: "item",
        borderColor: "transparent",
        formatter: generatorFormat
      },
      legend: {
        orient: "horizontal",
        icon: "circle",
        left: "center",
        bottom: 38,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 18,
        padding: 0,
        formatter: ["{a|{name}}"].join("\n"),
        itemStyle: {
          borderColor: "transparent"
        },
        textStyle: {
          fontSize: 13,
          height: 23,
          lineHeight: 26,
          rich: {
            a: {
              verticalAlign: "middle",
              color: currentTheme.legendColor,
              fontSize: 12,
              lineHeight: 24
            }
          }
        }
      },
      series: [
        {
          itemStyle: {
            borderColor: currentTheme.borderColor,
            borderWidth: 0.5
          },
          type: "pie",
          center: ["50%", "42%"],
          radius: ["31%", "50%"],
          labelLine: {
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined
            }
          },
          label: {
            formatter: (params) => {
              return `${params.percent === undefined ? 0 : params.percent}%`;
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
}
