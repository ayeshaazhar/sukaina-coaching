import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, BookOpen } from "lucide-react"
import Image from "next/image"

export function ServicesOverview() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-12 transition-colors duration-300">
        How I Support Your Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#E0F2F7] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#D1ECF1] group">
          <CardHeader>
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/one-on-one-coaching.png"
                alt="One-on-one coaching session"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <MessageCircle className="w-12 h-12 text-[#2C3E50] mx-auto mb-4 group-hover:text-[#28A745] transition-colors duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              1:1 Transformational Coaching
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Personalized coaching sessions designed to help you navigate your unique transition with clarity,
            confidence, and compassion. We'll work together to uncover your authentic path forward.
          </CardContent>
        </Card>
        <Card className="bg-[#E0F2F7] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#D1ECF1] group">
          <CardHeader>
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/group-coaching.png"
                alt="Group coaching program"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <Users className="w-12 h-12 text-[#2C3E50] mx-auto mb-4 group-hover:text-[#28A745] transition-colors duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Group Coaching Programs
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Join a supportive community of women navigating similar transitions. Experience the power of shared wisdom,
            mutual support, and collective growth in a safe, nurturing environment.
          </CardContent>
        </Card>
        <Card className="bg-[#E0F2F7] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#D1ECF1] group">
          <CardHeader>
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/workshops-resources.png"
                alt="Self-guided resources and workshops"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <BookOpen className="w-12 h-12 text-[#2C3E50] mx-auto mb-4 group-hover:text-[#28A745] transition-colors duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Workshops & Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            Access carefully crafted workshops, guided meditations, and self-reflection tools designed to support your
            journey of self-discovery and personal growth at your own pace.
          </CardContent>
        </Card>
      </div>
      <Link href="/services" prefetch={false}>
        <Button className="mt-12 bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Explore All Services
        </Button>
      </Link>
    </section>
  )
}
