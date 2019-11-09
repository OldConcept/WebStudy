## Element-UI 一套为开发者、设计师和产品经理准备的基于Vue 2.0 的桌面端组件库
    - 官网地址为：http://element-cn.eleme.io/#/zh-CN

### 1.基于命令行方式手动安装
    - 安装依赖包 npm i element-ui -S
    - 导入element-ui相关资源
```
//导入组件库
import ElementUI from 'element-ui'
//导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
//配置vue插件
Vue.use(ElementUI)
```
### 2.基于图形化界面自动安装
    - 运行vue ui命令，打开图形化界面
    - 通过vue项目管理器，进入具体项目配置面板
    - 点击插件->添加插件，进入插件查询面板
    - 搜索vue-cli-plugin-element并安装
    - 配置插件，实现按需导入，从而减少打包后项目的体积