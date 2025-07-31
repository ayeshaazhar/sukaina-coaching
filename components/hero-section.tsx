import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 gap-8 md:gap-16">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 animate-in fade-in-50 slide-in-from-left-10 duration-1000">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] leading-tight transition-all duration-500">
          Navigate Change.
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] leading-tight transition-all duration-500">
          Embrace Growth.
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] leading-tight transition-all duration-500">
          Create Your Future.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Whether you're navigating motherhood, feeling lost in life's transitions, relocating to a new place, or
          rediscovering yourself as your children grow up—you don't have to journey alone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/discovery-call" prefetch={false}>
            <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book Your Free Discovery Call
            </Button>
          </Link>
          <Link href="/about" prefetch={false}>
            <Button
              variant="outline"
              className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-8 py-3 text-lg transition-all duration-300 bg-transparent"
            >
              Learn More About Me
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-[45%] aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-lg animate-in fade-in-50 slide-in-from-right-10 duration-1000 hover:scale-105 transition-transform duration-500">
        <Image
          src="/images/hero-woman-nature.png"
          alt="Woman in serene natural setting reflecting on her journey"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}
