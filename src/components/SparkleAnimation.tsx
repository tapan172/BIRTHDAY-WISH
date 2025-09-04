import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
}

export function SparkleAnimation() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      const colors = [
        'hsl(320, 80%, 60%)', // Pink - darker and more vibrant
        'hsl(200, 80%, 55%)', // Blue - darker and more vibrant
        'hsl(280, 70%, 55%)', // Purple - darker and more vibrant
        'hsl(340, 70%, 60%)', // Rose - darker and more vibrant
        'hsl(45, 90%, 55%)',  // Gold - more visible
        'hsl(160, 70%, 45%)', // Green - darker and more vibrant
        'hsl(0, 80%, 60%)',   // Red - for contrast
        'hsl(240, 80%, 60%)', // Deep Blue - for contrast
      ]

      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4, // 4-12px
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 1.5, // 1.5-3.5s
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    
    // Regenerate sparkles every 8 seconds
    const interval = setInterval(generateSparkles, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            '--sparkle-color': sparkle.color,
          } as React.CSSProperties}
        >
          <div className="sparkle-inner" />
        </div>
      ))}
    </div>
  )
}
