import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24 lg:py-32 gap-8 md:gap-16">
      <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/placeholder.svg?height=320&width=256"
          alt="Your transformation journey begins here"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#2C3E50] leading-snug">
          Your transformation journey begins with a single step.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Let's explore how coaching can support you through this transition. In our free discovery call, we'll discuss
          your unique situation and see if we're a good fit to work together.
        </p>
        <Link href="/discovery-call" prefetch={false}>
          <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Book Your Free Discovery Call
          </Button>
        </Link>
      </div>
    </section>
  )
}
