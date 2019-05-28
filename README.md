# 项目名称-夏风共享博客
实现多人登录注册，创建编辑博客的主要功能，在主页上显示分享出的博客内容。网站整体使用清新为主题的style，图片，文字颜色，和以清新为主题的UI
## 环境配置及相关部署
![vue配置图](https://i.loli.net/2019/05/28/5ced3966da2d373416.png)
 1. 其中.babelrc为javascript的后编译工具，也可以叫做转码器的环境配置文件(因为很多浏览器对es6的兼容性不够，而我们又需要在代码中用到ES6，则可以通过babel在代码生成时转换成ES5) 相关文档：http://www.ruanyifeng.com/blog/2016/01/babel.html
 2. .postcssrc 为postcss的配置文件(postcss一直论坛叫法不一，它能处理一些样式在浏览器的兼容性，自动加上-webkit开头的样式，在处理之后。还有一个重要的作用是把CSS解析成JavaScript可以操作的AST) 相关文档：https://www.ibm.com/developerworks/cn/web/1604-postcss-css/index.html
 3. 开发环境相关插件工具（需要注意的几点，1：注意webpack的版本。2注意相关loader在webpack的配置。配置文件在图中的build中的webpack.base.config.js   4:在开发完成之后注意build时相关配置，比如默认路径，在图中的config的index.js中修改                                        ）
  ```
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  ```
 4. 相关依赖
 ```
  "dependencies": {
    "axios": "^0.18.0",
    "element-ui": "^2.8.2",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "marked": "^0.6.2",
    "requset": "0.0.1-security",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1",
    "vuex": "^3.1.1"
  },
```
 5. 命令行代码
 ```
   "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js",
    "upload": "npm run build; cd dist; git init; git add .; git commit -am \"init\"; git remote add origin git@github.com:jirengu-inc/vue-blog-preview.git; git push -f origin master;",
    "zip": "rm -f *.zip && zip  -r `git branch | grep '\\* ' | cut -d ' ' -f 2`.zip . -x 'node_modules/*'"
  },
 ```
 
   
