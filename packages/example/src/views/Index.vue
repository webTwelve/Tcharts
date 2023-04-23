<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showList = computed(() =>
  router.options.routes.filter((item) => !!item.meta?.name)
);

function toRouter(path: string) {
  router.push(path);
}
</script>

<template>
  <div class="index">
    <button
      v-for="(item, index) in showList"
      :key="index"
      @click="toRouter(item.path)"
    >
      {{ item.meta!.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.index {
  button {
    width: 100%;
    height: 100px;
  }
}
</style>
