import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "./dist/box2d.umd.js",
      format: "es",
      sourcemap: false
    },
    plugins: [
      typescript({ 
        clean: true, 
        tsconfigOverride: { 
          compilerOptions: { 
            target: "ESNext", 
            module: "ESNext", 
            declaration: true
          } 
        }
      }),
    ]
  },
  {
    input: "./dist/index.d.ts",
    output: {
      file: "./dist/box2d.d.ts",
      format: "es"
    },
    plugins: [dts()]
  }
]
