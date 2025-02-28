import { assert } from '../utils'
import Shader from './Shader'

class Program {
    gl: WebGLRenderingContext
    program: WebGLProgram
    constructor(gl: WebGLRenderingContext) {
        this.gl = gl
        this.program = this.gl.createProgram()!
    }

    attach(shader: Shader) {
        this.gl.attachShader(this.program, shader.shader)
    }

    link() {
        this.gl.linkProgram(this.program)
        // If creating the shader program failed, alert.
        assert(
            this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS),
            'Unable to initialize the shader program.'
        )
    }

    use() {
        this.gl.useProgram(this.program)
    }

    getAttributeLocation(name: string) {
        return this.gl.getAttribLocation(this.program, name)
    }

    setMatrixUniform(name: string, array: Iterable<number>) {
        const uniform = this.gl.getUniformLocation(this.program, name)
        this.gl.uniformMatrix4fv(uniform, false, array)
    }
}

export default Program
