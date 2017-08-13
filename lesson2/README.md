### 动态赋值
我们无法直接操作着色器变量，所以只能通过获取着色器变量的位置来对其进行赋值 

- [x] 定义变量  
   ```attribute vec4 apos;```
- [x] 获取变量位置
    ```const aposLocation = ctx.getAttribLocation(program, 'apos')```
- [x] 根据位置对变量进行赋值
    ```
    const x = 0.1 const y = 0.2
    ctx.vertexAttrib3f(aposLocation, 'apos')
    
    ```
    两种方法等价
    ```
    const x = 0.1
    const y = 0.2

    const v = new Float32Array([x, y])

    ctx.vertexAttrib2fv(aposLocation, v)
    ```

 [能随鼠标移动的点](https://github.com/Drlin/webgl/tree/master/lesson2/demo.html)