// 引入一个包,nodeJS的一个模块，用来帮助拼接路径
const path = require("path");
// 引入html-webpack-plugin插件，作用是自动生成html文件，并且自动引入打包生成的js文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { extensions } = require("interpret");
const { isArrowFunction } = require("typescript");
// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  //   指定打包文件所在目录
  output: {
    // 指定打包的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的名字
    filename: "bundle.js",
    clean: true, // 打包前清空dist目录
    environment:{
      arrowFunction:true // 关闭webpack的箭头函数
    }
  },

  //   指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // 指定规则生效的文件，正则表达式匹配文件名字
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader:'babel-loader',
            // 设置babel
            options:{
              // 设置预定义环境
              presets:[
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets:{
                      // 指定要兼容的目标浏览器以及版本
                      'chrome':'88',
                    },
                    // 指定corejs的版本
                    "corejs":'3',
                    // 使用corejs的方式 "usage"表示按需加载
                    "useBuiltIns":'usage'
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },

  //   配置webpack的插件
  plugins: [
    new HtmlWebpackPlugin({
      // title:'这是一个自定义的title',
      // template: "./src/index.html",
    }),
  ],
//   用来设置引用的模块
  resolve:{
    // 当我们在项目中引入模块时，如果没有写模块的后缀名，webpack会自动添加后缀名去寻找这个模块
    extensions:[".ts",".js"]
  }
};
