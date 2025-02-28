import Avc from '../broadway/Decoder'
import YUVWebGLCanvas from '../canvas/YUVWebGLCanvas'
import YUVCanvas from '../canvas/YUVCanvas'
import Size from '../canvas/Size'
import EventEmitter from 'eventemitter3'

const log = console.log

class WSAvcPlayer extends EventEmitter {
    canvas: HTMLCanvasElement
    canvastype: string
    avc: any
    ws: WebSocket | undefined
    pktnum: number
    constructor(canvas: HTMLCanvasElement, canvastype: string) {
        super()

        this.canvas = canvas
        this.canvastype = canvastype

        // AVC codec initialization
        this.avc = new Avc()
        if (false)
            this.avc.configure({
                filter: 'original',
                filterHorLuma: 'optimized',
                filterVerLumaEdge: 'optimized',
                getBoundaryStrengthsA: 'optimized',
            })

        // WebSocket variable
        this.ws = undefined
        this.pktnum = 0
    }

    decode(data: Uint8Array) {
        let naltype = 'invalid frame'

        if (data.length > 4) {
            if (data[4] === 0x65) {
                naltype = 'I frame'
            } else if (data[4] === 0x41) {
                naltype = 'P frame'
            } else if (data[4] === 0x67) {
                naltype = 'SPS'
            } else if (data[4] === 0x68) {
                naltype = 'PPS'
            }
        }
        // log("Passed " + naltype + " to decoder");
        this.avc.decode(data)
    }

    connect(url: string) {
        // WebSocket initialization
        if (this.ws !== undefined) {
            this.ws.close()
            this.ws = undefined
        }
        this.ws = new WebSocket(url)
        this.ws.binaryType = 'arraybuffer'

        this.ws.onopen = () => {
            log('Connected to ' + url)
        }

        const framesList: Uint8Array[] = []

        this.ws.onmessage = (evt) => {
            if (typeof evt.data === 'string') {
                return this.cmd(JSON.parse(evt.data))
            }

            this.pktnum++
            const frame = new Uint8Array(evt.data)
            //log('[Pkt ' + this.pktnum + ' (' + evt.data.byteLength + ' bytes)]')
            //this.decode(frame);
            framesList.push(frame)
        }

        let running = true

        const shiftFrame = () => {
            if (!running) {
                return
            }

            if (framesList.length > 10) {
                log('Dropping frames', framesList.length)
                framesList.length = 0
            }

            const frame = framesList.shift()

            if (frame) {
                this.decode(frame)
            }

            requestAnimationFrame(shiftFrame)
        }

        shiftFrame()

        this.ws.onclose = () => {
            running = false
            log('WSAvcPlayer: Connection closed')
        }
    }

    initCanvas(width: number, height: number) {
        if (
            this.canvastype === 'webgl' ||
            this.canvastype === 'YUVWebGLCanvas'
        ) {
            const canvas = new YUVWebGLCanvas(
                this.canvas,
                new Size(width, height)
            )
            canvas.initScene()
            this.avc.onPictureDecoded = canvas.decode
        } else {
            const canvas = new YUVCanvas(this.canvas, new Size(width, height))
            this.avc.onPictureDecoded = canvas.decode
        }

        this.emit('canvasReady', width, height)
    }

    cmd(cmd: any) {
        log('Incoming request', cmd)

        if (cmd.action === 'init') {
            this.initCanvas(cmd.width, cmd.height)
            this.canvas.width = cmd.width
            this.canvas.height = cmd.height
        }
    }

    disconnect() {
        this.ws?.close()
    }

    playStream() {
        const message = 'REQUESTSTREAM '
        this.ws?.send(message)
        log('Sent ' + message)
    }

    stopStream() {
        this.ws?.send('STOPSTREAM')
        log('Sent STOPSTREAM')
    }
}

export default WSAvcPlayer
