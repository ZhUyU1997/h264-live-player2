import fs from 'fs'
// @ts-ignore
import { Throttle } from 'stream-throttle'
// @ts-ignore
import Splitter from 'stream-split'

import { WebSocketServer } from 'ws'
import http from 'http'

const NALseparator = Buffer.from([0, 0, 0, 1]) // NAL break

export interface ServerOptions {
    width?: number
    height?: number
}

declare module 'ws' {
    interface WebSocket {
        buzy?: boolean // 可选属性，类型为 boolean
    }
}
class StaticFeed {
    wss: WebSocketServer
    options: ServerOptions
    server: http.Server
    readStream: fs.ReadStream | undefined
    constructor(
        public video_path: string,
        public video_duration: number,
        options: ServerOptions
    ) {
        this.options = { width: 960, height: 540, ...options }
        const server = http.createServer()
        this.wss = new WebSocketServer({ server })
        this.server = server

        this.start_feed = this.start_feed.bind(this)
        this.broadcast = this.broadcast.bind(this)

        this.wss.on('connection', (socket) => {
            const self = this
            console.log('New guy')

            socket.send(
                JSON.stringify({
                    action: 'init',
                    width: this.options.width,
                    height: this.options.height,
                })
            )

            socket.on('message', (data) => {
                const action = data.toString().split(' ')[0]
                console.log("Incomming action '%s'", action)

                if (action === 'REQUESTSTREAM') {
                    self.start_feed()
                }
                if (action === 'STOPSTREAM') {
                    self.readStream?.pause()
                }
            })

            socket.on('close', () => {
                if (this.readStream) {
                    this.readStream.destroy()
                }
                console.log('stopping client interval')
            })
        })
    }

    listen(port: number) {
        this.server.listen(port)
    }
    start_feed() {
        let readStream = this.get_feed()
        this.readStream = readStream

        readStream = readStream.pipe(new Splitter(NALseparator))
        readStream.on('data', this.broadcast)
    }

    get_feed() {
        const source = this.video_path

        // throttle for "real time simulation"
        const sourceThrottleRate = Math.floor(
            fs.statSync(source).size / this.video_duration
        )
        console.log(
            'Generate a throttle rate of %s kBps',
            Math.floor(sourceThrottleRate / 1024)
        )

        let readStream = fs.createReadStream(source)
        readStream = readStream.pipe(new Throttle({ rate: sourceThrottleRate }))

        console.log('Generate a static feed from ', source)
        return readStream
    }

    broadcast(data: string | Buffer) {
        if (typeof data === 'string') return
        this.wss.clients.forEach((socket) => {
            if (socket.buzy) {
                return
            }

            socket.buzy = true
            socket.send(
                Buffer.concat([NALseparator, data]),
                { binary: true },
                (error) => {
                    socket.buzy = false
                }
            )
        })
    }
}

new StaticFeed('server/samples/out.h264', 58, {
    width: 960,
    height: 540,
}).listen(8888)
