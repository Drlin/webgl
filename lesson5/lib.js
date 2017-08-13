// 可以把下面这段理解成范式代码，先不用深入理解为什么

function createProgram(ctx, vertexShaderSource, fragmentShaderSource) {
  // 可以把下面这段理解成范式代码，先不用深入理解为什么

  // 创建顶点着色器对象
  const vertexShader = ctx.createShader(ctx.VERTEX_SHADER)

  // 创建片元着色器对象
  const fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER)

  // 把source 导入 着色器对象
  ctx.shaderSource(vertexShader, vertexShaderSource)
  ctx.shaderSource(fragmentShader, fragmentShaderSource)

  // 对着色器对象进行编译 compile
  ctx.compileShader(vertexShader)
  ctx.compileShader(fragmentShader)

  // 创建 program
  const program = ctx.createProgram()

  // 把着色器附着在program上
  ctx.attachShader(program, vertexShader)
  ctx.attachShader(program, fragmentShader)

  // 链接program
  ctx.linkProgram(program)

  // 使用program
  ctx.useProgram(program)

  return program
}

