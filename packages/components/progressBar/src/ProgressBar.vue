<script lang="ts">
import { defineComponent, ref } from "vue-demi";
export default defineComponent({
  name: "XYProgressBar",
  props: {
    progressTitle: {
      type: String,
      default: () => ""
    },
    progressWidth: {
      type: Number,
      default: () => 0
    }
  },
  setup(props) {
    const pwidth = ref(0);
    setTimeout(() => {
      pwidth.value = props.progressWidth;
    }, 0);
    return {
      pwidth
    };
  }
});
</script>

<template>
  <div class="progress">
    <div class="progress-title">
      <div class="title">{{ progressTitle }}</div>
      <div class="data">{{ progressWidth }}%</div>
    </div>
    <div class="progress-bar">
      <div class="progress-content" :style="{ width: pwidth + '%' }"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  background-color: #01041d;
  padding: 20px;
  .progress-title {
    display: flex;
    align-items: center;
    .title {
      margin-right: 10px;
      font-size: 12px;
      color: #f8f8f8;
    }
    .data {
      font-size: 16px;
      color: #159aff;
    }
  }
  .progress-bar {
    width: 100%;
    height: 12px;
    background-color: #151932;
    border-radius: 6px;
  }

  .progress-content {
    height: 12px;
    background: linear-gradient(270deg, #00efff 0%, #159aff 100%);
    border-radius: 6px;
    transition: width 0.3s;
  }
}
</style>
