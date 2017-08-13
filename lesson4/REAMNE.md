### 多点绘制

- [x] 获取缓冲区对象
    ```const buffer = ctx.createBuffer()```
- [x] 绑定buffer,规定用途    
   ```ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer)```

- [x] 定义数据
    ```
    
    // 每一行定义一个点的位置信息
    const data = new Float32Array([
      0.1, 0.5,
      0.4, 0.9
    ])
    ```
- [x] 加入数据
    ```
    ctx.bufferData(ctx.ARRAY_BUFFER, data, ctx.STATIC_DRAW)
    ```
- [x] 与顶点着色器变量挂钩
    ```ctx.vertexAttribPointer(aposLocation, 2, ctx.FLOAT, false, 0, 0)```

- [x] 开启
    ```ctx.enableVertexAttribArray(aposLocation)```

- [x] 绘制几个点

  ```ctx.drawArrays(ctx.POINTS, 0, 3)```