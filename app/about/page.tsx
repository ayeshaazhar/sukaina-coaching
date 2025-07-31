import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Star, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
                My Journey to Supporting Yours
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every transformation begins with understanding. My own journey through life's pivotal transitions has
                shaped my compassionate approach to coaching.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Sukaina Pasha"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="bg-[#E0F2F7] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-8 text-center">My Story</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Like many of the women I work with today, I found myself at a crossroads—questioning my path, feeling
                disconnected from my authentic self, and yearning for something more meaningful. These moments of
                uncertainty, while challenging, became the catalyst for my own transformation.
              </p>
              <p>
                Through my personal journey of navigating career transitions, relocating across continents, and
                redefining my identity as a woman in today's world, I discovered the profound power of compassionate
                guidance and intentional growth. These experiences taught me that our most difficult transitions often
                hold the keys to our greatest breakthroughs.
              </p>
              <p>
                Today, I bring this lived experience, combined with professional training in transformational coaching,
                to support women who are ready to embrace change and create lives that truly align with their values and
                dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-12 text-center">
              My Approach & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#28A745] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Compassionate</h3>
                <p className="text-gray-600">Every session is held with deep empathy and understanding</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-[#28A745] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Intuitive</h3>
                <p className="text-gray-600">Combining wisdom with practical tools for lasting change</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#28A745] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Collaborative</h3>
                <p className="text-gray-600">We work together as partners in your transformation</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-[#28A745] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Certified</h3>
                <p className="text-gray-600">Professional training in transformational coaching methods</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2C3E50] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's explore how we can work together to navigate your unique journey.
            </p>
            <Link href="/discovery-call">
              <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book Your Free Discovery Call
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
