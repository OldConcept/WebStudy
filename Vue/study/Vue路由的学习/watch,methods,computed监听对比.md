### `watch`监听路由地址的改变-监听非DOM元素的改变
```
    watch:{
        '$route.path':function(newVal,oldVal){
            //console.log(newVal+'---'+oldVal)
            if(newVal === '/login'){
                //---
            }else if(newVal === '/register'){
                //---
            }
        }
    }
```
## `watch`,`methods`,`computed`监听数据的改变
### `watch`监听数据的改变
```
    watch:{
        'firstName':function(newVal,oldVal){
            //---
        }
    }
```
### `methods`监听数据的变化
```
    //使用事件绑定机制@keyup事件，监听数据的变化，从而调用Vue实例中的方法
```
### `computed`监听数据的变化
```
    //使用和methods属性同级的computed属性，在computed属性中，可以定义一些【计算属性】，计算属性的本质是一个方法，但是我们在使用这些计算属性的时候，只是把他们的名称直接当作属性来使用，而不把计算属性当作方法去调用
    //只要计算属性function内部所用到的任何data数据发生了变化，就会重新计算这个计算属性的值
    //计算属性的求值结果会被缓存起来，方便下次使用，如果计算属性方法中所引用的任何数据都没有发生过变化，就不会重新计算计算属性的值
    computed:{
        'fullName':function(){
            return this.firstName + '-' + this.lastName
        }
    }
```
## 三者的对比
1.`computed`属性的结果会被缓存，除非依赖的响应式属性发生变化才会重新计算。主要当作属性使用；
2.`methods`方法表示一个具体的操作，主要书写业务逻辑；
3.`watch`一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是`computed`和`methods`的结合体。