import WSAvcPlayer from './index'

let player:
    | undefined
    | {
          player: WSAvcPlayer
          offscreenCanvas: HTMLCanvasElement
      }

self.onmessage = (e) => {
    const msg = e.data as {
        canvas: HTMLCanvasElement
        cmd: string
        url: string
    }
    switch (msg.cmd) {
        case 'init':
            player = {
                player: new WSAvcPlayer(msg.canvas, 'webgl'),
                offscreenCanvas: msg.canvas,
            }
            break
        case 'play':
            player?.player.playStream()
            break
        case 'stop':
            player?.player.stopStream()
            break
        case 'connect':
            player?.player.connect(msg.url)
            break
        case 'disconnect':
            player?.player.disconnect()
            break
        default:
            throw new Error(`unknown cmd ${msg.cmd}`)
    }
}
