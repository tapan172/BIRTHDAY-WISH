export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Balloons */}
      <div className="absolute top-10 left-10 balloon opacity-30">
        <div className="w-8 h-10 bg-gradient-primary rounded-full relative">
          <div className="w-0.5 h-16 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute top-20 right-20 balloon opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-8 bg-gradient-secondary rounded-full relative">
          <div className="w-0.5 h-12 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-1/3 left-20 balloon opacity-25" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-7 bg-accent rounded-full relative">
          <div className="w-0.5 h-10 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-10 balloon opacity-35" style={{ animationDelay: '0.5s' }}>
        <div className="w-7 h-9 bg-primary/60 rounded-full relative">
          <div className="w-0.5 h-14 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Confetti Particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="confetti absolute w-2 h-2 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div 
            className="w-full h-full rounded-sm"
            style={{
              backgroundColor: [
                'hsl(320 60% 70%)',
                'hsl(200 60% 75%)', 
                'hsl(280 50% 70%)',
                'hsl(340 50% 75%)'
              ][i % 4]
            }}
          />
        </div>
      ))}
    </div>
  )
}