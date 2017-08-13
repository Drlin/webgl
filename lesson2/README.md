###WebGL 开发通用步骤
我们无法直接操作着色器变量，所以只能通过获取着色器变量的位置来对其进行赋值 

- [x] 定义变量  
   ```attribute vec4 apos;```
- [x] 获取变量位置
    ```const aposLocation = ctx.getAttribLocation(program, 'apos')```
- [x] 根据位置对变量进行赋值
    ```
    const x = 0.1
    const y = 0.2
    ctx.vertexAttrib2f(aposLocation, x, y)
    
    ```