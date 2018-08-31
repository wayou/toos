import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import tsplugin from "rollup-plugin-typescript";
import postcss from "rollup-plugin-postcss";
import typescript from "typescript";
import pkg from "./package.json";

export default [
  {
    input: "src/main.ts",
    output: {
      name: "Toos",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      postcss({
        modules: false
      }),
      tsplugin({
        typescript: typescript
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: "src/main.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      postcss({
        modules: false
      }),
      tsplugin({
        typescript: typescript
      })
    ]
  }
];
