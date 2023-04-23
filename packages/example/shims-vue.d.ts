/// <reference types="vite/client" />
/* eslint-disable */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  const src: string;
  export default src;
}
