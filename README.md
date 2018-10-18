# cameroon-app
非洲喀麦隆app项目

# 开发约定
如果开发过程中修改了和整体有关的文件/目录，需要先在开发约定中声明。
## 项目结构
    +public
    +src
      +assets
      +components(模板/组件存放位置）
        +topic(fellow25 第二组模板存放位置)
      +router(路由存放位置)
        -blogs.js
        -messages.js
        -profiles.js
        -shops.js
      +views(视图存放位置)
        +blog
         +topic(话题存放位置)
        +messsage
        +profile
        +shop
      -App.vue
      -main.js
      -mockAll.js
      -router.js
      -store.js
    -.gitignore(git 忽略存放位置)
    -babel.config.js
    -package.json
    -README.md
    -vue.config.js
 
## mock(目前未开发完成)
  约定 mock 目录里所有的 .js 文件会被解析为 mock 文件。
  比如，新建 mock/users.js,设置对应路径
  然后在浏览器里访问 http://localhost:8000/api/users 就可以了。

## i18n
   约定 unit/lang 下存放语言配置目录，en.js对应英语，fra.js对应法语，zh.js对应中文
   已经实现根据浏览器语言环境，自动切换语言
  
## CDN

material-design-icons：

cdn.bootcss.com

## 可替换式header 和  可替换式 footer 的实现(已知问题，底部导航栏激活变色有bug)

[请参考vue 官网：](https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE)