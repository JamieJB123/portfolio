import { useEffect, useState } from 'react'

export default function MouseMove() {

    const [mouse, setMouse ] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handleMouseMove(e) {
            setMouse(({ x: e.clientX, y: e.clientY}))
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <>
            <div className="gold-glow"
            style={{ left: mouse.x, top: mouse.y }}></div>
            <div className="pulse"
            style={{ left: mouse.x, top: mouse.y }}></div>
        </>
    )
}
