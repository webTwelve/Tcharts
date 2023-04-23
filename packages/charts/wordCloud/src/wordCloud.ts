import type WordCloud from "./WordCloud.vue";
import type { PropType, ExtractPropTypes } from "vue";

export const wordCloudProps = {
  data: {
    type: Array as PropType<string[]>,
    default: () => []
  }
} as const;
export type WordCloudProps = Partial<ExtractPropTypes<typeof wordCloudProps>>;

export type WordCloudInstance = InstanceType<typeof WordCloud>;
