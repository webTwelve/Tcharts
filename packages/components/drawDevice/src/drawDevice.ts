import type DrawDevice from "./DrawDevice.vue";
import type { PropType } from "vue";
export type DrawDeviceInstance = InstanceType<typeof DrawDevice>;
export type DrawDeviceMode = "unit" | "card";
export const XYDrawDeviceProps = {
  num: {
    type: Number,
    default: 0
  },
  unit: {
    type: String,
    default: "万元"
  },
  mode: {
    type: String as PropType<DrawDeviceMode>,
    default: "card" //unit
  },
  thousands: {
    type: Boolean,
    default: false
  }
};
