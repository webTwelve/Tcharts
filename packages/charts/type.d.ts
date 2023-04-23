import type {
  TitleComponentOption,
  LegendComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
  SeriesOption
} from "echarts";

export type EChartsOption<T extends SeriesOption> = echarts.ComposeOption<
  | T
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | XAXisComponentOption
  | YAXisComponentOption
>;
