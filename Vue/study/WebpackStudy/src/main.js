// 这里是main.js 是项目JS入口文件

// 1.导入jquery
// import 是ES6中导入模块的方式
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'
    })
})

// 通过【webpack ./src/main.js -o ./dist/bundle.js --mode production】这一条指令，能够发现：
// 1.webpack能够处理JS文件之间的互相依赖关系
// 2.webpack能够处理JS的兼容问题，把高级的、浏览器不识别的语法转化为低级的、浏览器能识别的语法