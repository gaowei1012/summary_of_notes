/**
 * 入口可是单个的也可以是多个的 
 * 输出是单个的，输入目录不能使用中文
 */
const config = {
  // 入口
  entry: {
    main: "./src/index.js", // 第一个入口文件,也可以直写成entry:"./index.js"
  },
  // 出口
  output: {
    filename: "main.js", // 输出文件的文件名
    path: "./任务计划", // 输出目录(绝对路径)
  },
};
module.exports = config;