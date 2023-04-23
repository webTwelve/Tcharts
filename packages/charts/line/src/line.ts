import type Line from "./Line.vue";
import { color } from "@xy-design/utils/common/echarts";
import { PropType, ExtractPropTypes } from "vue";
export type LineTheme = "dark" | "light";
export type LineData = {
  value: number;
  name: string;
};

export const lineProps = {
  data: {
    type: Array as PropType<LineData[]>,
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
    type: String as PropType<LineTheme>,
    default: "dark"
  },
  color: {
    type: Array as PropType<string[]>,
    default: () => color
  }
} as const;

export type LineProps = Partial<ExtractPropTypes<typeof lineProps>>;
export type LineInstance = InstanceType<typeof Line>;
