import { color } from "@xy-design/utils/common/echarts";
import type Radar from "./Radar.vue";
import type { PropType, ExtractPropTypes } from "vue";
import type { RadarSeriesOption } from "echarts";
import type { EChartsOption } from "../../type";

export type RadarIndicator = {
  max: number;
  name: string;
};

export type RadarData = {
  value: number[];
  name: string;
};

export type RadarTheme = "dark" | "light";

export const radarProps = {
  indicator: {
    type: Array as PropType<RadarIndicator[]>,
    default: () => []
  },
  data: {
    type: Array as PropType<RadarData[]>,
    default: () => []
  },
  theme: {
    type: String as PropType<RadarTheme>,
    default: "dark"
  },
  color: {
    type: Array as PropType<string[]>,
    default: () => color
  },
  option: {
    type: Object as PropType<Partial<EChartsOption<RadarSeriesOption>>>,
    default: () => ({})
  }
} as const;

export type RadarProps = Partial<ExtractPropTypes<typeof radarProps>>;

export type RadarInstance = InstanceType<typeof Radar>;
