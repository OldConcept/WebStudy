//导入http内置模块
const http = require('http')
//该模块能解析url地址，从而拿到 pathname query
const urlModule = require('url')
//创建一个http服务器
const server = http.createServer()
//监听http服务器的request请求
server.on('request',function(req,res){
    //const url = req.url
    const { pathname:url,query } = urlModule.parse(req.url,true)

    if(url === '/getscript'){
        //目的：拼接一个合法的JS脚本，这里拼接的是一个方法的调用
        var data = {
            name:'yx',
            age:19,
            gender:'男'
        }

        var scriptSrt = `${query.callback}(${JSON.stringify(data)})`
        //res.end发送个客户端，客户端将这个字符串当作JS代码去执行
        res.end(scriptSrt)
    }else{
        res.end('404')
    }
})

//指定端口号并启动服务器监听
server.listen(3000,function(){
    console.log('Server running at http://127.0.0.1:3000/')
})
