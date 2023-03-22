// vite.config.js
import { defineConfig } from "vite";
import glob from "glob";
import path from "path";

export default defineConfig({
  build: {
    outDir: `dist`,
    // ソースマップはJSのみ。
    sourcemap: process.env.NODE_ENV !== "production",
    rollupOptions: {
      // inputにscssファイルを指定するとコンパイルできる
      input: Object.fromEntries(
        glob
          .sync("{js,css}/**/*.{js,scss}", {
            ignore: "**/_**/**/*.{js,scss}",
            cwd: `./src`,
          })
          .map((file) => {
            const { dir, name } = path.parse(file);
            return [`${dir}/${name}`, path.resolve("src", file)];
          })
      ),
      // 出力CSSファイル名はassetFileNamesで指定する。inputが.scssなら、[ext]には"css"が入る
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },

  // postcssも簡単に指定できる
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
