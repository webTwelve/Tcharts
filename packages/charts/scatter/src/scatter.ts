import { color } from "@xy-design/utils/common/echarts";
import type Scatter from "./Scatter.vue";
import type { PropType, ExtractPropTypes } from "vue";
import type { ScatterSeriesOption } from "echarts";
import type { EChartsOption } from "../../type";

/**
 * single为false的时候使用
 */
export type ScatterData = number[][];

/**
 * single为true的时候使用
 */
export type ScatterSingleData = {
  singleYAxis: (number | string)[];
  singleXAxis: (number | string)[];
  data: (number | string)[][];
};

export type ScatterTheme = "dark" | "light";

export const scatterProps = {
  theme: {
    type: String as PropType<ScatterTheme>,
    default: "dark"
  },
  single: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object as PropType<ScatterSingleData | ScatterData>,
    default: () => []
  },
  color: {
    type: Array as PropType<string[]>,
    default: () => color
  },
  option: {
    type: Object as PropType<Partial<EChartsOption<ScatterSeriesOption>>>,
    default: () => ({})
  }
} as const;

/**
 * single为false的时候使用 {@link ScatterData}, single为true的时候使用 {@link ScatterSingleData}
 */
export type ScatterProps = Partial<ExtractPropTypes<typeof scatterProps>>;

export type ScatterInstance = InstanceType<typeof Scatter>;
