import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "New Mother & Marketing Professional",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "After becoming a mother, I felt completely lost. Sukaina helped me rediscover who I am beyond being 'just a mom.' I now feel confident balancing my career aspirations with motherhood, and I've learned to prioritize my own needs without guilt.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Career Professional, Age 34",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I had everything I thought I wanted but felt empty inside. Working with Sukaina helped me reconnect with my authentic self and make changes that truly align with my values. The transformation has been profound and lasting.",
      rating: 5,
    },
    {
      name: "Maria K.",
      role: "Empty Nester, Age 52",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As my children left home, I felt lost and purposeless. Sukaina guided me through rediscovering my passions and I'm now pursuing dreams I had put aside for decades. I feel more alive and excited about life than I have in years.",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Expat & Trailing Spouse",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Moving to a new country left me feeling isolated and questioning my identity. Sukaina's coaching helped me rebuild my confidence, find my community, and create a fulfilling life in my new home. Her understanding of the expat experience was invaluable.",
      rating: 5,
    },
    {
      name: "Jessica R.",
      role: "Working Mother, Age 29",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The guilt of working while being a mom was overwhelming. Through our sessions, I learned to reframe my perspective and found ways to be present for my family while pursuing my career goals. Sukaina's approach is both practical and deeply compassionate.",
      rating: 5,
    },
    {
      name: "Linda H.",
      role: "Career Changer, Age 45",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "At 45, I thought it was too late to change careers. Sukaina helped me overcome my fears and limiting beliefs. I'm now running my own consulting business and have never been happier. Her support gave me the courage to bet on myself.",
      rating: 5,
    },
  ]

  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
            Stories of Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real women, real transformations. These are the stories of courage, growth, and the beautiful journey of
            becoming who you're meant to be.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group p-6"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#28A745] text-[#28A745]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-[#28A745] group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#E0F2F7] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#28A745] mb-2">200+</div>
                <p className="text-lg text-gray-700">Women Supported</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#28A745] mb-2">95%</div>
                <p className="text-lg text-gray-700">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#28A745] mb-2">3+</div>
                <p className="text-lg text-gray-700">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the growing community of women who have transformed their lives through coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/discovery-call"
                className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
              >
                Book Your Free Discovery Call
              </a>
              <a
                href="/services"
                className="border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-8 py-3 text-lg transition-all duration-300 inline-block"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
