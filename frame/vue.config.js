var path = require("path");
//判断是否为生产环境
const isProduction = !(process.env.NODE_ENV === "debugger");
// gzip压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin");
// 去掉注释
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  outputDir: "dist",
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (isProduction) {
      //gzip压缩
      const productionGzipExtensions = ["html", "js", "css"];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false, // 删除原文件
        })
      );
      //去掉注释
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    }
    config.performance = {
      hints: "warning",
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    };
    //extends引入cdn资源R
    config.externals = {
      vue: "Vue",
      "element-ui": "ELEMENT",
      axios: "axios",
    };
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", path.resolve("src"));
    config.output.filename("[name].[hash].js").end();
    //extends引入cdn资源
    const cdn = {
      // 访问https://unpkg.com/element-ui/lib/theme-chalk/index.css获取最新版本
      css: ["//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css"],
      js: [
        "//unpkg.com/vue@2.6.11/dist/vue.min.js", // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
        "//unpkg.com/axios@0.19.2/dist/axios.min.js",
        "//unpkg.com/element-ui@2.13.0/lib/index.js",
      ],
    };
    config.plugin("html").tap((args) => {
      // args = args.reduce((current, item) => {}, {})
      // html中添加cdn
      args[0].cdn = cdn;
      return args;
    });
  },
  css: {
    sourceMap: false,
    // loaderOptions: {
    //   stylus: {
    //     import: `~@common/assets/css/base.styl`
    //   }
    // },
    extract: false,
  },
  devServer: {
    open: true, // 自动启动浏览器
    host: "localhost", // localhost
    port: 5959, // 端口号
    hotOnly: true, // 热更新
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 第三方插件配置
  pluginOptions: {},
};
