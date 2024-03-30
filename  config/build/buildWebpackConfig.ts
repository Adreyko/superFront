import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './types/buildDevServer';
export default  function buildWebpackConfig (options : BuildOptions) : webpack.Configuration {
    const {paths, mode, isDev} = options
return {
    mode,
    entry:  paths.entry,
    module: {
      rules:buildLoaders(isDev)
    },
    devtool: isDev ?  'inline-source-map' : undefined,
    resolve:buildResolvers(),
    output: {
      filename:'[name].[contenthash].js',
      path:paths.build,
      clean : true
    },
    devServer :isDev ?  buildDevServer(options) : undefined,
    plugins: buildPlugins(paths.html)  

  };
}