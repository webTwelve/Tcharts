<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Test",
  emits: ["change"],
  setup(props, ctx) {
    function onClick() {
      ctx.emit("change", "11");
    }

    return {
      onClick
    };
  }
});
</script>

<template>
  <div class="test">
    <button @click="onClick">测试</button>
  </div>
</template>

<style lang="scss" scoped>
.test {
  button {
    color: red;
  }
}
</style>
