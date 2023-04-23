<script lang="ts" setup>
import {} from "vue";
import HuoYang from "./HuoYang.vue";
import LiAng from "./LiAng.vue";
import LiuXingChao from "./LiuXingChao.vue";
import PuHaoJie from "./PuHaoJie.vue";
</script>

<template>
  <div class="preview">
    <p>霍洋</p>
    <HuoYang />
    <p>李昂</p>
    <LiAng />
    <p>刘行超</p>
    <LiuXingChao />
    <p>蒲浩杰</p>
    <PuHaoJie />
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
