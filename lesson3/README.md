### 动态赋值片元着色器

跟赋值顶点着色器相同的操作

- [x] 定义精度
    ```precision lowp float;```
- [x] 定义变量  
   ```uniform vec4 aColor;```
- [x] 获取变量位置
    ```const aColorLocation = ctx.getUniformLocation(program, 'aColor')```
- [x] 将颜色设置成跟你帽子同色
    ```
    ctx.uniform4f(aColorLocation, 0, 1, 0, 1)
    ```