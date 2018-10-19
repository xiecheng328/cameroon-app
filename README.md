# cameroon-app(dev 分支)
非洲喀麦隆app项目 根据需要更有逻辑的按排~~

# 修正 

因为在dev所以可以更合理的安排资源结构和文件结构

## 不更新业务代码，而是修改项目结构

项目代码在主分支实现
 
## mock 开发中
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

[请参考vue官网](https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE)