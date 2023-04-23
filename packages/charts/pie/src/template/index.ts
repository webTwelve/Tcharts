import temp1 from "./temp1";
import temp2 from "./temp2";
import temp3 from "./temp3";
import temp4 from "./temp4";
import temp5 from "./temp5";
import type { PieProps } from "../pie";
import type { PieSeriesOption } from "echarts";
import type { EChartsOption } from "../../../type";

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

export function getTemplate(props: PieProps): EChartsOption<PieSeriesOption> {
  const templateList = [() => ({}), temp1, temp2, temp3, temp4, temp5];
  if (props.template! > 0 && props.template! < templateList.length) {
    return templateList[props.template!](props);
  }
  return {};
}
