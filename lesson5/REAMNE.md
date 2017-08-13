### 画一个圈

- [x] 获取像素点到圆心的距离
    ```float r = distance(gl_FragCoord, vec2(.5, .5));```
- [x] 不在半径范围内的点忽略 
   ```
   
    if (r < 0.5) {
      // 绘制
    } else {
      // 忽略
      discard;
    }
    
  ```