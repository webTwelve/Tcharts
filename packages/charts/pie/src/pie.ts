import { color } from "@xy-design/utils/common/echarts";
import type Pie from "./Pie.vue";
import type { PropType, ExtractPropTypes } from "vue";

export type PieData = {
  value: number;
  name: string;
  tips?: string[];
};

export type PieTheme = "dark" | "light";

export const pieProps = {
  data: {
    type: Array as PropType<PieData[]>,
    default: () => []
  },
  circular: {
    type: Boolean,
    default: false
  },
  template: {
    type: Number,
    default: 1
  },
  text: {
    type: String,
    default: ""
  },
  subtext: {
    type: String,
    default: ""
  },
  theme: {
    type: String as PropType<PieTheme>,
    default: "dark"
  },
  color: {
    type: Array as PropType<string[]>,
    default: () => color
  }
} as const;

export type PieProps = Partial<ExtractPropTypes<typeof pieProps>>;

export type PieInstance = InstanceType<typeof Pie>;
