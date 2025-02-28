import { mat4, vec3, vec2 } from 'gl-matrix'
import Script from './Script'
import { error } from '../utils'
import Size from './Size'
import Program from './Program'
import Shader from './Shader'
import Texture from './Texture'

const vertexShaderScript = Script.createFromSource(
    'x-shader/x-vertex',
    `
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  varying highp vec2 vTextureCoord;
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
`
)

const fragmentShaderScript = Script.createFromSource(
    'x-shader/x-fragment',
    `
  precision highp float;
  varying highp vec2 vTextureCoord;
  uniform sampler2D texture;
  void main(void) {
    gl_FragColor = texture2D(texture, vTextureCoord);
  }
`
)

class WebGLCanvas {
    canvas: HTMLCanvasElement
    size: Size
    gl!: WebGLRenderingContext
    framebuffer!: WebGLFramebuffer
    framebufferTexture!: Texture
    quadVPBuffer!: WebGLBuffer
    quadVTCBuffer!: WebGLBuffer
    mvMatrix: mat4
    program!: Program
    vertexPositionAttribute!: number
    textureCoordAttribute!: number
    texture!: Texture
    glNames: any
    perspectiveMatrix: mat4

    constructor(
        canvas: HTMLCanvasElement,
        size: Size,
        useFrameBuffer: boolean
    ) {
        this.canvas = canvas
        this.size = size
        this.canvas.width = size.w
        this.canvas.height = size.h

        this.mvMatrix = mat4.create()
        this.perspectiveMatrix = mat4.create()

        this.onInitWebGL()
        this.onInitShaders()
        this.initBuffers()

        if (useFrameBuffer) {
            this.initFramebuffer()
        }

        this.onInitTextures()
    }

    initFramebuffer() {
        const gl = this.gl

        this.framebuffer = gl.createFramebuffer()!
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
        this.framebufferTexture = new Texture(this.gl, this.size, gl.RGBA)

        const renderbuffer = gl.createRenderbuffer()
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer)
        gl.renderbufferStorage(
            gl.RENDERBUFFER,
            gl.DEPTH_COMPONENT16,
            this.size.w,
            this.size.h
        )

        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            this.framebufferTexture.texture,
            0
        )
        gl.framebufferRenderbuffer(
            gl.FRAMEBUFFER,
            gl.DEPTH_ATTACHMENT,
            gl.RENDERBUFFER,
            renderbuffer
        )
    }

    initBuffers() {
        let tmp
        const gl = this.gl

        this.quadVPBuffer = gl.createBuffer()!
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVPBuffer)
        tmp = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0]

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tmp), gl.STATIC_DRAW)

        const scaleX = 1.0
        const scaleY = 1.0

        this.quadVTCBuffer = gl.createBuffer()!
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVTCBuffer)
        tmp = [scaleX, 0.0, 0.0, 0.0, scaleX, scaleY, 0.0, scaleY]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tmp), gl.STATIC_DRAW)
    }

    mvIdentity() {
        mat4.identity(this.mvMatrix)
    }

    mvMultiply(m: mat4) {
        mat4.multiply(this.mvMatrix, this.mvMatrix, m)
    }

    mvTranslate(m: vec3) {
        mat4.translate(this.mvMatrix, this.mvMatrix, m)
    }

    setMatrixUniforms() {
        this.program.setMatrixUniform('uPMatrix', this.perspectiveMatrix)
        this.program.setMatrixUniform('uMVMatrix', this.mvMatrix)
    }

    initScene() {
        const gl = this.gl

        mat4.perspective(
            this.perspectiveMatrix,
            (45 * Math.PI) / 180,
            1,
            0.1,
            100.0
        )

        this.mvIdentity()
        this.mvTranslate([0.0, 0.0, -2.4])

        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVPBuffer)
        gl.vertexAttribPointer(
            this.vertexPositionAttribute,
            3,
            gl.FLOAT,
            false,
            0,
            0
        )

        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVTCBuffer)
        gl.vertexAttribPointer(
            this.textureCoordAttribute,
            2,
            gl.FLOAT,
            false,
            0,
            0
        )

        this.setMatrixUniforms()

        if (this.framebuffer) {
            console.log('Bound Frame Buffer')
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer)
        }
    }

    toString() {
        return 'WebGLCanvas Size: ' + this.size
    }

    checkLastError(operation: string) {
        const err = this.gl.getError()
        if (err !== this.gl.NO_ERROR) {
            let name = this.glNames[err]
            name =
                name !== undefined
                    ? name + '(' + err + ')'
                    : 'Unknown WebGL ENUM (0x' + err.toString(16) + ')'
            if (operation) {
                console.log('WebGL Error: %s, %s', operation, name)
            } else {
                console.log('WebGL Error: %s', name)
            }
            console.trace()
        }
    }

    onInitWebGL() {
        try {
            this.gl = this.canvas.getContext('webgl')!
        } catch (e) {}

        if (!this.gl) {
            error(
                'Unable to initialize WebGL. Your browser may not support it.'
            )
        }
        if (this.glNames) {
            return
        }
        this.glNames = {}

        const gl = this.gl as any
        for (const propertyName in gl) {
            if (typeof gl[propertyName] === 'number') {
                this.glNames[gl[propertyName]] = propertyName
            }
        }
    }

    onInitShaders() {
        this.program = new Program(this.gl)
        this.program.attach(new Shader(this.gl, vertexShaderScript))
        this.program.attach(new Shader(this.gl, fragmentShaderScript))
        this.program.link()
        this.program.use()
        this.vertexPositionAttribute =
            this.program.getAttributeLocation('aVertexPosition')
        this.gl.enableVertexAttribArray(this.vertexPositionAttribute)
        this.textureCoordAttribute =
            this.program.getAttributeLocation('aTextureCoord')
        this.gl.enableVertexAttribArray(this.textureCoordAttribute)
    }

    onInitTextures() {
        const gl = this.gl
        this.texture = new Texture(gl, this.size, gl.RGBA)
        this.texture.bind(0, this.program, 'texture')
    }

    drawScene() {
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
    }

    readPixels(buffer: ArrayBufferView) {
        const gl = this.gl
        gl.readPixels(
            0,
            0,
            this.size.w,
            this.size.h,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            buffer
        )
    }
}

export default WebGLCanvas
