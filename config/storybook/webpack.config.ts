import path from "path";
import { BuildPaths } from "./../../config/build/types/config";
import webpack from "webpack";
import { buildCssLoaders } from "../../config/build/loaders/CssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push(buildCssLoaders(true));
  return config;
};
