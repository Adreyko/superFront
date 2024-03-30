import { BuildOptions } from "./types/config";
import { Configuration as DevConfig } from "webpack-dev-server"

export function buildDevServer (options  : BuildOptions) : DevConfig  {
    const {port} = options
return {
    port,
    open : true,
    historyApiFallback: true,
}
}