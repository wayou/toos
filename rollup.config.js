import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import tsplugin from "rollup-plugin-typescript";
import postcss from "rollup-plugin-postcss";
import typescript from "typescript";
// import sass from "rollup-plugin-sass";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/main.ts",
    output: {
      name: "Toos",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
    //   sass(),
      postcss({
        modules: false
      }),
      tsplugin({
        typescript: typescript
      }),
      resolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
    //   sass(),
      postcss({
        modules: false
      }),
      tsplugin({
        typescript: typescript
      })
    ]
  }
];
