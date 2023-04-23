<script lang="ts">
import { defineComponent } from "vue-demi";
import type { PropType } from "vue-demi";

interface IOptions {
  isLoading: boolean;
  tipText: string;
}
export default defineComponent({
  name: "DesingLoading",
  props: {
    options: {
      type: Object as PropType<IOptions>,
      default: () => ({
        isLoading: true,
        tipText: "加载中..."
      })
    }
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <div class="xy-design-loading">
    <div>
      <img src="../imgs/loading.gif" alt="" />
      <div class="tip">{{ options.tipText }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.xy-design-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
  }
}
</style>
