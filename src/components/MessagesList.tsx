import messagesData from '@/data/messages.json'

export function MessagesList() {
  const messageCount = messagesData.length

  return (
    <section className="py-16 px-4 bg-gradient-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text mb-4">
            Messages from Well-Wishers
          </h2>
          <div className="birthday-card inline-block px-6 py-3">
            <span className="text-2xl font-semibold text-primary">
              {messageCount} Wishes
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {messagesData.map((message, index) => (
            <div 
              key={message.id}
              className="birthday-card scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {message.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}