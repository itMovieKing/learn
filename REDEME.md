【注】
如果需要使用tsnode需要配置
package.json
{
  "type": "module",
}
本项目使用ts-node跑ts，不支持react
# 实践
https://juejin.cn/post/7106696029810098207
## ts
https://ts.xcatliu.com/basics/declaration-files.html
https://www.tslang.cn/docs/handbook/basic-types.html()
## webpack
https://webpack.docschina.org/concepts/

## tsconfig配置 
https://www.tslang.cn/docs/handbook/tsconfig-json.html

## ts题库
https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md

# loader介绍
 ## awesome-typescript-loader
 可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码。 
 ## source-map-loader
 使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。

# dtsmake
生成.d.ts文件