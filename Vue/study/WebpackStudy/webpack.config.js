const path = require('path')
//启用热更新第二步
const webpack = require('webpack')
//导入html-webpack-plugin，在内存中生成html文件
//注意：只要是插件，都必须要放到plugins节点中去
//这个插件的作用：一是在内存中根据指定的页面生成一个页面，二是把打包好的bundle.js追加到页面中去
const  htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode:'production',
    devServer:{
        //这是配置dev-server命令参数的第二种形式，相对来说麻烦一些
        // --open --port 3000 --contentBase src --hot
        open:true,//自动打开浏览器
        port:3000,//设置启动时的运行端口
        contentBase:'src',//指定托管的根目录
        hot:true//启用热更新第一步
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//new一个热更新的模块对象，这是启用热更新的第三步
        new htmlWebpackPlugin({
            //创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面，在内存中生成页面
            filename:'index.html'//指定生成的页面的名称
        })
    ]
  };

// 实践证明：在webpack4.x的版本中，只需要设置属性hot的值为true就行，在webpack3.x的版本中，需要这三步，在实际开发中，更推荐直接dev2这种写法

//   直接输入webpack命令后，webpack做了以下几步：
// 1.首先，webpack发现我们并没有通过命令的形式给他指定入口和出口
// 2.然后webpack就回去项目的根目录中去查找一个叫做'webpack.config.js'的配置文件
// 3.当找到这个配置文件的时候，就会去解释执行这个配置文件，当解释执行完后，就得到了配置文件中导出的配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建


// 使用webpack-dev-server这个工具，来实现自动打包编译的功能
// 1.运行[npm i webpack-dev-server -D]把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和webpack命令的用法完全一样
// 类似于node nodemon
// 3.由于是在项目中安装的，所以无法把他当作脚本命令，在powershell终端中直接运行(只有安装到全局 -g 的工具，才能在终端中正常运行)
// 4.注意：webpack-dev-server这个工具如果想要正常运行，要求在本地项目中必须安装webpack
// 5.webpack-dev-server帮我们打包生成的bundle.js文件，并没有放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所以我们在项目根目录中根本找不到这个bundle.js
