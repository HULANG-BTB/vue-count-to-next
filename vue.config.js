module.exports = {
  pages: {
    examples: {
      // page 的入口
      entry: 'examples/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  // github 部署 需要前缀
  publicPath: 'vue-count-to-next'
}
