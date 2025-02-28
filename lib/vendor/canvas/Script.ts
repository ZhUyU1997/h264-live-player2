import { assert } from '../utils'

/**
 * Represents a WebGL shader script.
 */
class Script {
    type!: string
    source!: string
    constructor() {
        // Constructor (empty for now)
    }

    static createFromElementId(id: string) {
        const script = document.getElementById(id) as HTMLScriptElement

        // Didn't find an element with the specified ID, abort.
        assert(script !== null, 'Could not find shader with ID: ' + id)

        // Walk through the source element's children, building the shader source string.
        let source = ''
        let currentChild = script.firstChild
        while (currentChild) {
            if (currentChild.nodeType === 3) {
                source += currentChild.textContent
            }
            currentChild = currentChild.nextSibling
        }

        const res = new Script()
        res.type = script.type
        res.source = source
        return res
    }

    static createFromSource(type: string, source: string) {
        const res = new Script()
        res.type = type
        res.source = source
        return res
    }
}

export default Script
