import { useEffect, useRef } from 'react'
import WSAvcPlayer from '../lib/vendor/wsavc'

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const wsavcRef = useRef<WSAvcPlayer>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const url = new URL(window.location.href)
        url.protocol = 'ws'
        url.port = '8888'
        const uri = url

        // const wsavc = new WSAvcPlayer(canvas, 'webgl', 1, 35);

        const id = setTimeout(() => {
            const wsavc = new WSAvcPlayer(canvas, 'webgl')

            wsavc.connect(uri.href)

            wsavcRef.current = wsavc
        }, 1000)

        // Cleanup function to disconnect when the component unmounts
        return () => {
            clearTimeout(id)
            if (wsavcRef.current) {
                wsavcRef.current.disconnect()
            }
        }
    }, []) // Empty dependency array ensures this effect runs only once on mount

    const handlePlayStream = () => {
        if (wsavcRef.current) {
            wsavcRef.current.playStream()
        }
    }

    const handleStopStream = () => {
        if (wsavcRef.current) {
            wsavcRef.current.stopStream()
        }
    }

    const handleDisconnect = () => {
        if (wsavcRef.current) {
            wsavcRef.current?.disconnect()
        }
    }

    return (
        <div>
            <button type="button" onClick={handlePlayStream}>
                Start Video
            </button>
            <button type="button" onClick={handleStopStream}>
                Stop Video
            </button>
            <button type="button" onClick={handleDisconnect}>
                Disconnect
            </button>
            <br />
            <canvas ref={canvasRef} />
        </div>
    )
}

export default App
