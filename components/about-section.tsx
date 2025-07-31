import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 gap-8 md:gap-16 py-12">
      <div className="relative w-full md:w-1/2 lg:w-[45%] aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl">
        <Image
          src="/images/sukaina-portrait.png"
          alt="Sukaina Pasha, Transformational Coach"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] transition-colors duration-300">
          Your Compassionate Guide Through Life's Transitions
        </h2>
        <p className="text-lg text-gray-700 max-w-prose leading-relaxed">
          Hi, I'm Sukaina Pasha. As a woman who has navigated my own profound life transitions, I understand the unique
          challenges you face. Whether you're questioning your identity as a new mother, feeling lost despite external
          success, adjusting to life in a new country, or rediscovering yourself as your children grow independent—I see
          you, and I'm here to support you.
        </p>
        <p className="text-lg text-gray-700 max-w-prose leading-relaxed">
          My approach is rooted in compassion, wisdom, and the deep belief that every transition, no matter how
          challenging, holds the seeds of your greatest growth. Together, we'll create a safe space where you can
          explore, heal, and step confidently into the next chapter of your life.
        </p>
        <Link href="/about" prefetch={false}>
          <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Read My Full Story
          </Button>
        </Link>
      </div>
    </section>
  )
}
