import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-12 transition-colors duration-300">
        Stories of Transformation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white border border-[#E0F2F7] shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#28A745] group">
          <CardContent className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Client testimonial"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <Quote className="w-8 h-8 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-700 italic mb-4 group-hover:text-gray-900 transition-colors duration-300">
              "After becoming a mother, I felt completely lost. Sukaina helped me rediscover who I am beyond being 'just
              a mom.' I now feel confident balancing my career aspirations with motherhood."
            </p>
            <p className="font-semibold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              - Sarah M., New Mother
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-[#E0F2F7] shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#28A745] group">
          <CardContent className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Client testimonial"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <Quote className="w-8 h-8 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-700 italic mb-4 group-hover:text-gray-900 transition-colors duration-300">
              "I had everything I thought I wanted but felt empty inside. Working with Sukaina helped me reconnect with
              my authentic self and make changes that truly align with my values."
            </p>
            <p className="font-semibold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              - Emma L., Career Professional
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-[#E0F2F7] shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#28A745] group">
          <CardContent className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Client testimonial"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <Quote className="w-8 h-8 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-700 italic mb-4 group-hover:text-gray-900 transition-colors duration-300">
              "As my children left home, I felt lost and purposeless. Sukaina guided me through rediscovering my
              passions and I'm now pursuing dreams I had put aside for decades."
            </p>
            <p className="font-semibold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              - Maria K., Empty Nester
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
