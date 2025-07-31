import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TransitionTypesSection } from "@/components/transition-types-section"
import { ServicesOverview } from "@/components/services-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-[70vw] h-[120vh] bg-[#E0F2F7] rounded-br-[50%] -translate-x-1/4 -translate-y-1/4 z-0" />
      <div className="absolute top-0 right-0 w-[60vw] h-[100vh] bg-white rounded-bl-[50%] translate-x-1/4 -translate-y-1/4 z-0" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[80vh] bg-[#1A5276] rounded-tl-[50%] translate-x-1/4 translate-y-1/4 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 space-y-24">
          <HeroSection />
          <AboutSection />
          <TransitionTypesSection />
          <ServicesOverview />
          <TestimonialsSection />
          <CtaSection />
          <NewsletterSignup />
        </main>
        <Footer />
      </div>
    </div>
  )
}

