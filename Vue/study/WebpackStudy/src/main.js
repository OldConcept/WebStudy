// 这里是main.js 是项目JS入口文件

// 1.导入jquery
// import 是ES6中导入模块的方式
import $ from 'jquery'
// 使用import语法，导入css样式表
// 注意：webpack，默认只能打包处理JS类型的文件，无法处理其他的非JS类型文件
// 如果需要处理非JS类型的文件，我们需要手动安装一些合适的第三方loader加载器
// 1.如果想要打包处理CSS文件，需要安装cnpm i style-loader css-loader -D ，若无效果则再安装一个postcss-loader 
// 2.打开webpack.config.js这个配置文件，在里面新增一个配置节点，叫做module，他是一个配置对象，在这个对象上有一个rules属性，这个数组中存放了所有第三方文件的匹配和处理规则
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// webpack处理第三方类型文件的过程：
// 1.发现这个文件不是JS文件，然后就去配置文件中查找有没有对应的第三方loader规则
// 2.如果找到对应的规则，就会调用对应的loader处理这种文件类型
// 3.在调用loader的时候，是从后往前调用的
// 4.当最后的一个loader调用完毕，会把处理的结果交给webpack进行打包合并，最终输出到bundle.js中去

$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'
    })
})

class Person{
    static info ='aaa'
}

console.log(Person)

// 通过【webpack ./src/main.js -o ./dist/bundle.js --mode production】这一条指令，能够发现：
// 1.webpack能够处理JS文件之间的互相依赖关系
// 2.webpack能够处理JS的兼容问题，把高级的、浏览器不识别的语法转化为低级的、浏览器能识别的语法