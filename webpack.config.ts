import path from "path";
import { type Configuration } from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactFastRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";

const isDevelopment = process.env.NODE_ENV === "development";

export default {
  mode: process.env.NODE_ENV,
  entry: { main: "./src/main.tsx" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: isDevelopment && "inline-source-map",
  devServer: {
    client: {
      overlay: false,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  },
  optimization: {
    ...(!isDevelopment && {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          },
        },
      },
      minimizer: ["...", new CssMinimizerWebpackPlugin()],
    }),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack + React + TypeScript",
      template: "index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    isDevelopment && new ReactFastRefreshWebpackPlugin(),
  ].filter(Boolean),
} as Configuration;
