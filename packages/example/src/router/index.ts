import { createRouter, createWebHistory } from "vue-router";
import type { RouteComponent, RouteRecordRaw } from "vue-router";

const components = import.meta.glob<Record<string, RouteComponent>>(
  "../views/components/**/*.vue",
  {
    eager: true
  }
);

const componentsRoutes: RouteRecordRaw[] = [];

for (const path in components) {
  const comp = components[path].default;
  const name = path.split("/").at(-1)?.split(".vue")[0];
  componentsRoutes.push({
    path: "/docs/" + name!.toLocaleLowerCase(),
    name,
    component: comp
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/Index.vue")
    },
    {
      path: "/huo-yang",
      name: "HuoYang",

      meta: {
        name: "霍洋开发测试"
      },
      component: () => import("@/views/HuoYang.vue")
    },
    {
      path: "/li-ang",
      name: "LiAng",
      meta: {
        name: "李昂开发测试"
      },
      component: () => import("@/views/LiAng.vue")
    },
    {
      path: "/liu-xing-chao",
      name: "LiuXingChao",
      meta: {
        name: "刘行超开发测试"
      },
      component: () => import("@/views/LiuXingChao.vue")
    },
    {
      path: "/pu-hao-jie",
      name: "PuHaoJie",
      meta: {
        name: "蒲浩杰开发测试"
      },
      component: () => import("@/views/PuHaoJie.vue")
    },
    {
      path: "/preview",
      name: "Preview",
      meta: {
        name: "预览实例"
      },
      component: () => import("@/views/Preview.vue")
    },
    {
      path: "/docs",
      name: "Docs",
      meta: {
        name: "组件文档"
      },
      children: componentsRoutes,
      component: () => import("@/views/Docs.vue")
    }
  ]
});
export default router;
