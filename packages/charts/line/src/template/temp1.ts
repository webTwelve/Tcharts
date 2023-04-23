// import { theme } from "./index";
import type { LineSeriesOption } from "echarts";
import type { EChartsOption } from "../../../type";
import type { LineProps } from "../line";

export default function generatorOption(props: LineProps) {
  // const currentTheme = theme.get(props.theme!) || theme.get("dark")!;

  const option: EChartsOption<LineSeriesOption> = {
    color: props.color
  };
  return option;
}
