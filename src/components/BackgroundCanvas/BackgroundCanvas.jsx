import { useEffect, useRef } from 'react'
import './BackgroundCanvas.css'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'lighter'

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const POINTS = 80
    const MAX_DISTANCE = 120
    const SPEED = 0.3

    const points = Array.from({ length: POINTS }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }))

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < POINTS; i++) {
        const p = points[i]

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(56, 189, 248, 0.9)'
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)'
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < POINTS; j++) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / MAX_DISTANCE})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="background-canvas" />
}
