import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
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
  const SCSSLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [babelLoader, TSLoader, SCSSLoader];
}
