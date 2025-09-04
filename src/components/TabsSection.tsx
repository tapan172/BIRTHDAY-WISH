import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import poemsData from '@/data/poems.json'
import quotesData from '@/data/quotes.json'

export function TabsSection() {
  const [activeTab, setActiveTab] = useState("poems")

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text text-center mb-12">
          Words from the Heart
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 birthday-card h-auto md:h-10 md:items-center">
            <TabsTrigger value="poems" className="text-lg font-medium whitespace-normal md:whitespace-nowrap flex-col md:flex-row md:gap-1 md:h-full md:py-0 leading-none">
              <span>Birthday</span>
              <span>Poems</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="text-lg font-medium whitespace-normal md:whitespace-nowrap flex-col md:flex-row md:gap-1 md:h-full md:py-0 leading-none">
              <span>Inspiring</span>
              <span>Quotes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="poems" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {poemsData.map((poem, index) => (
                <div 
                  key={poem.id} 
                  className="birthday-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-dancing font-semibold gradient-text mb-4">
                    {poem.title}
                  </h3>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {poem.content}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {quotesData.map((quote, index) => (
                <div 
                  key={quote.id} 
                  className="birthday-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-4 italic">
                    "{quote.quote}"
                  </blockquote>
                  <cite className="text-primary font-medium">— {quote.author}</cite>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}