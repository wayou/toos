import compiler from "@ampproject/rollup-plugin-closure-compiler";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import tsplugin from "rollup-plugin-typescript";
import typescript from "typescript";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/toos.ts",
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd"
    },
    sourcemap: true,
    plugins: [
      postcss({
        modules: false
      }),
      tsplugin({
        typescript: typescript
      }),
      resolve(),
      commonjs(),
      compiler()
    ]
  },
  {
    input: "src/toos.ts",
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
