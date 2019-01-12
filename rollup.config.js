// based on https://github.com/rollup/rollup-starter-lib/blob/fd3dbbfea45161185766c0260071b6d4e53b2d27/rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    external: ["react"],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs({
        namedExports: {
          "node_modules/@material-ui/core/styles/index.js": [
            "createGenerateClassName",
            "createMuiTheme",
            "createStyles",
            "jssPreset",
            "MuiThemeProvider",
            "withStyles",
            "withTheme"
          ],
          "node_modules/@material-ui/core/Modal/index.js": ["ModalManager"]
        }
      })
    ]
  }
];
