import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/CssLoaders";
export function buildLoaders (options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;
  const babelLoader = {
    test: /\.m?(js|ts|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };
  const SCSSLoader = buildCssLoaders(isDev)
  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [babelLoader, TSLoader, SCSSLoader];
}
