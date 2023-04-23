import type GaugeProgress from "./gaugeProgress.vue";
import type { PropType } from "vue";
export type GaugeProgressInstance = InstanceType<typeof GaugeProgress>;

export type GaugeTheme = "light" | "dark";
export type GaugeOptionsData = Partial<{
  value: number;
}>;
export type GaugeOptions = Partial<{
  min: number;
  max: number;
  splitNumber: number;
  data: GaugeOptionsData[];
}>;
export const GaugeProps = {
  options: {
    type: Object as PropType<GaugeOptions>,
    default: () => {}
  },
  theme: {
    type: String as PropType<GaugeTheme>, //dark
    default: "light"
  },
  id: {
    type: String, //dark
    default: "xyGaugeProgress"
  }
};
