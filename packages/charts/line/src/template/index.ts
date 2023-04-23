import type { LineProps } from "../line";
import type { PieSeriesOption } from "echarts";
import type { EChartsOption } from "../../../type";
import temp1 from "./temp1";

export const theme = new Map([
  [
    "dark",
    {
      labelColor: "#ffffff",
      legendColor: "#ffffff",
      borderColor: "#01031c",
      title: "rgba(255,255,255,0.65)",
      subtitle: "rgba(255,255,255,0.85)"
    }
  ],
  [
    "light",
    {
      labelColor: "#4E5969",
      legendColor: "#4E5969",
      borderColor: "#ffffff",
      title: "#4E5969",
      subtitle: "#1D2129"
    }
  ]
]);

export function getTemplate(props: LineProps): EChartsOption<PieSeriesOption> {
  const templateList = [() => ({}), temp1];
  if (props.template! > 0 && props.template! < templateList.length) {
    return templateList[props.template!](props);
  }
  return {};
}
