import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MessageCircle, Users, BookOpen, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
            Coaching Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personalized support designed to meet you exactly where you are in your journey. Choose the path that feels
            right for your transformation.
          </p>
        </section>

        {/* Main Services */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1:1 Coaching */}
            <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="1:1 Coaching"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <MessageCircle className="w-12 h-12 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
                  1:1 Transformational Coaching
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Personalized coaching sessions designed specifically for your unique transition and goals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">60-minute sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Customized action plans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Email support between sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Resource library access</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#2C3E50] mb-2">Starting at $150/session</p>
                  <p className="text-sm text-gray-500 mb-4">Package discounts available</p>
                  <Link href="/discovery-call">
                    <Button className="w-full bg-[#28A745] text-white hover:bg-[#218838] rounded-full py-2 transition-all duration-300 hover:scale-105">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Group Coaching */}
            <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Group Coaching"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <Users className="w-12 h-12 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
                  Group Coaching Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Join a supportive community of women navigating similar life transitions together.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">8-week programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Small groups (6-8 women)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Weekly 90-minute sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Private community access</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#2C3E50] mb-2">$497/program</p>
                  <p className="text-sm text-gray-500 mb-4">Next cohort starts March 2024</p>
                  <Link href="/discovery-call">
                    <Button className="w-full bg-[#28A745] text-white hover:bg-[#218838] rounded-full py-2 transition-all duration-300 hover:scale-105">
                      Join Waitlist
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Workshops */}
            <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Workshops"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <BookOpen className="w-12 h-12 text-[#28A745] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
                  Workshops & Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Self-paced learning with guided workshops and transformational tools.</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Monthly live workshops</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Recorded sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Workbooks & guides</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#28A745]" />
                    <span className="text-sm text-gray-600">Lifetime access</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold text-[#2C3E50] mb-2">$97/workshop</p>
                  <p className="text-sm text-gray-500 mb-4">Or $297 for full library</p>
                  <Link href="/discovery-call">
                    <Button className="w-full bg-[#28A745] text-white hover:bg-[#218838] rounded-full py-2 transition-all duration-300 hover:scale-105">
                      Browse Workshops
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#E0F2F7] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-12 text-center">
              My Coaching Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Discover</h3>
                <p className="text-gray-600">
                  We explore your current situation, challenges, and dreams in a safe, supportive space.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Design</h3>
                <p className="text-gray-600">
                  Together, we create a personalized roadmap that aligns with your values and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Transform</h3>
                <p className="text-gray-600">
                  With ongoing support and accountability, you take action and create lasting change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every transformation begins with a conversation. Let's explore what's possible for you.
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
