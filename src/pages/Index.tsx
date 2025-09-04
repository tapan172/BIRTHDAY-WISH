import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BirthdayWish } from '@/components/BirthdayWish'
import { TabsSection } from '@/components/TabsSection'
import { MessagesList } from '@/components/MessagesList'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { FloatingElements } from '@/components/FloatingElements'
import { SparkleAnimation } from '@/components/SparkleAnimation'
import { ScrollToTop } from '@/components/ScrollToTop'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <SparkleAnimation />
      <Header />
      <main>
        <Hero />
        <BirthdayWish />
        <TabsSection />
        <MessagesList />
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
