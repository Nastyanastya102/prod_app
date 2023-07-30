
import webpack, { DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contanthash:8].css",
      chunkFilename: "css/[name].[contanthash:8].css",

    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
}