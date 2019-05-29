# 项目名称-夏风共享博客
1. 实现多人登录注册，创建编辑博客的主要功能，在主页上显示分享出的博客内容。网站整体使用清新为主题的style，图片，文字颜色，和以清新为主题的UI
2. 技术栈:es6 less vue vuex vuerouter css-animation html5
3. UI:elment-ui 原创UI
4. 域名地址：www.xysp.top
5. 效果截图 
首页
![index](https://i.loli.net/2019/05/29/5cee66d4527ad71979.png)
![create](https://i.loli.net/2019/05/29/5cee675aa327172144.png)
创建
6. 运用到的一些布局：grid position float ，主要布局:在app.vue主组件中使用grid将页面分为了header(component)-main(router-view)-footer(component)
```
  display: grid;
   grid-template-columns: 10% auto 10%;
   grid-template-rows: auto 1fr auto;
   grid-template-areas: "header header header"
                         ". main ."
                         "footer footer footer";
```
7. 语义化:html中尽可能的使用了html5的新标签，class和js也尽可能的语义化
## 环境配置及相关部署(开发过程中使用的浏览器：chrome,vue的一些插件)
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
 ## src 下相关文件
  1. herpes(1:axios.js用于页面底层的请求发送数据的接口代码，其中运用了一个叫做axios的http客户端。是基于 promise 的 HTTP 客户端 
            2：unlit.js 是我自己写的一个用于处理返回的时间在页面展示的小插件。在export default 时使用install(Vue, options) {
      Vue.prototype.friendlyDate = friendlyDate
    }   相关文档：https://cn.vuejs.org/v2/guide/plugins.html     )
  2. api(1:auth.js 对我底层的接口代码进行一个封装，在我其他页面使用的时候就会很方便，也方便去改，其他页面使用时作为模块加载进去
         2：blog.js 同样根据服务端的接口，对代码进行了封装)
  3. assets(一些通用的css，图片文件等等)
  4. component(因为我的页面布局主要分为header-main-footer，我就把header和footer作为2个组件单独写出来，然后main的内容用router去加载)
  5. pages(我的相关页面包括：index,create,login,my,detail,user去实现页面不同的path切换)
  6. router(在项目初始化时就有，里面配置了我每个页面的路由，里面有2个要点是**1：我使用了这样的写法去配置路由(好处是在页面加载的时候不会一次性吧所有的js加载，优化页面性能)
  ```
  const router= new Router({
  routes: [
   
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/pages/index/index.vue')
    },
  ```
 2: **使用了router.beforeEach，在路由上添加一个meta的属性去判别是否登录，因为有些页面是需要登录状态才能加载
 ）
 6. store(实现组件与组件通信的方法有多种比如使用自带的props，这里使用了功能强大的vuex去实现组件与组件之间的通信，
 1: state状态，(相当于组件中的data(){}))user和islogin，一个是用户的数据一个是是否登录
 2:getter(相当于vue中的计算数学computed:{}) 
 3:motation(每一次操作都会提交一个mutation经过计算得到状态，可以使用浏览器中的一个插件查看每一次的提交)
 4:action(相当于method，由于请求是异步的，使用了es6中的async，每一次执行都会提交一个mutation。)
 ## 使用到的相关css3的动画
 ```
 .fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
 ```
