<template>
  <router-view v-slot="{ Component }" class="router-view">
    <component :is="Component"></component>
  </router-view>
</template>
<style lang="scss">
html,
body,
#app {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
