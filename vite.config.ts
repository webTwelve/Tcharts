import { defineConfig } from "vite";
import { resolve } from "path";
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from "fs";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

emptyDir(resolve(__dirname, "./packages/t-design/types"));
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    dts({
      outputDir: "./packages/t-design/types",
      skipDiagnostics: false,
      staticImport: true,
      insertTypesEntry: true,
      beforeWriteFile: (filePath, content) => {
        const path = filePath.split("types\\packages\\")[1];
        const paths = path?.split("\\");
        if (content.includes("@t-design")) {
          paths.length -= 1;
          content = content.replace(
            /@t-design/g,
            paths.map(() => "..").join("/")
          );
        }
        return {
          filePath,
          content
        };
      }
    })
  ],
  build: {
    outDir: "./packages/t-design/lib/v3",
    lib: {
      entry: resolve(__dirname, "./packages/t-design/index.ts"),
      name: "index",
      fileName: "index",
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: ["vue", "vue-demi", "ant-design-vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});

function emptyDir(dir) {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}
