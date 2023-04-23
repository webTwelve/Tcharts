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
          radius: [0, "50%"],
          labelLine: {
            length2: 80,
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined
            }
          },
          label: {
            formatter: (params) => {
              return `{icon|●}${params.name}\n${params.value}`;
            },
            color: currentTheme.labelColor,
            lineHeight: 16,
            fontSize: 14,
            rich: {
              icon: {
                color: "inherit",
                fontSize: 16,
                lineHeight: 2
              }
            },
            padding: [-32, -80, 0, -60]
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
      series: [
        {
          itemStyle: {
            borderColor: currentTheme.borderColor,
            borderWidth: 0.5
          },
          type: "pie",
          center: ["50%", "50%"],
          radius: ["31%", "50%"],
          labelLine: {
            length2: 80,
            lineStyle: {
              color:
                props.theme === "dark" ? "rgba(255,255,255,0.65)" : undefined
            }
          },
          label: {
            formatter: (params) => {
              return `{icon|●}${params.name}\n${params.value}`;
            },
            color: currentTheme.labelColor,
            lineHeight: 16,
            fontSize: 14,
            rich: {
              icon: {
                color: "inherit",
                fontSize: 16,
                lineHeight: 2
              }
            },
            padding: [-32, -80, 0, -60]
          },
          data: props.data
        }
      ]
    };
    return option;
  }
}
