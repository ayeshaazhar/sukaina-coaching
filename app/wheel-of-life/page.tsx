"use client"

import { PageLayout } from "@/components/page-layout"
import { WheelOfLifeAssessment } from "@/components/wheel-of-life-assessment"

export default function WheelOfLifePage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
            Wheel of Life Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover where you are thriving and where you might need support. This comprehensive assessment will help
            you gain clarity on your life balance and identify areas for growth.
          </p>
        </section>
        <WheelOfLifeAssessment />
      </div>
    </PageLayout>
  )
}
