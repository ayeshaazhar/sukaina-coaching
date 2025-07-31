"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Mail, Download, RotateCcw } from "lucide-react"

interface LifeArea {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

interface AssessmentData {
  name: string
  email: string
  scores: Record<string, number>
  insights: Record<string, string>
}

const lifeAreas: LifeArea[] = [
  {
    id: "career",
    name: "Career & Work",
    description: "Your professional life, job satisfaction, and career growth",
    icon: "💼",
    color: "#FF6B6B",
  },
  {
    id: "finances",
    name: "Money & Finances",
    description: "Financial security, money management, and financial goals",
    icon: "💰",
    color: "#4ECDC4",
  },
  {
    id: "health",
    name: "Health & Fitness",
    description: "Physical health, energy levels, and fitness routine",
    icon: "🏃‍♀️",
    color: "#45B7D1",
  },
  {
    id: "relationships",
    name: "Love & Relationships",
    description: "Romantic relationships, marriage, and intimate connections",
    icon: "❤️",
    color: "#F093FB",
  },
  {
    id: "family",
    name: "Family & Friends",
    description: "Relationships with family members and close friendships",
    icon: "👨‍👩‍👧‍👦",
    color: "#FFD93D",
  },
  {
    id: "personal",
    name: "Personal Growth",
    description: "Self-development, learning, and personal evolution",
    icon: "🌱",
    color: "#6BCF7F",
  },
  {
    id: "fun",
    name: "Fun & Recreation",
    description: "Hobbies, entertainment, and activities you enjoy",
    icon: "🎉",
    color: "#FF8A65",
  },
  {
    id: "environment",
    name: "Physical Environment",
    description: "Your home, workspace, and physical surroundings",
    icon: "🏠",
    color: "#A78BFA",
  },
]

export function WheelOfLifeAssessment() {
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    name: "",
    email: "",
    scores: {},
    insights: {},
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const totalSteps = lifeAreas.length + 3 // intro + areas + contact + results

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleScoreChange = (areaId: string, score: number) => {
    setAssessmentData((prev) => ({
      ...prev,
      scores: { ...prev.scores, [areaId]: score },
    }))
  }

  const handleInsightChange = (areaId: string, insight: string) => {
    setAssessmentData((prev) => ({
      ...prev,
      insights: { ...prev.insights, [areaId]: insight },
    }))
  }

  const handleContactChange = (field: string, value: string) => {
    setAssessmentData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const generateWheelChart = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circles
    for (let i = 1; i <= 10; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius * i) / 10, 0, 2 * Math.PI)
      ctx.strokeStyle = "#E5E7EB"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw sections
    const anglePerSection = (2 * Math.PI) / lifeAreas.length

    lifeAreas.forEach((area, index) => {
      const score = assessmentData.scores[area.id] || 0
      const startAngle = index * anglePerSection - Math.PI / 2
      const endAngle = (index + 1) * anglePerSection - Math.PI / 2

      // Draw filled section
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, (radius * score) / 10, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = area.color + "80" // Add transparency
      ctx.fill()

      // Draw section border
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(startAngle) * radius, centerY + Math.sin(startAngle) * radius)
      ctx.strokeStyle = "#9CA3AF"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw labels
      const labelAngle = startAngle + anglePerSection / 2
      const labelX = centerX + Math.cos(labelAngle) * (radius + 20)
      const labelY = centerY + Math.sin(labelAngle) * (radius + 20)

      ctx.fillStyle = "#374151"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(area.name, labelX, labelY)
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Generate the wheel chart
    generateWheelChart()

    // Simulate API call to send email
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsComplete(true)
    setCurrentStep(totalSteps - 1)
  }

  const resetAssessment = () => {
    setCurrentStep(0)
    setAssessmentData({
      name: "",
      email: "",
      scores: {},
      insights: {},
    })
    setIsComplete(false)
  }

  const downloadResults = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "wheel-of-life-results.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const renderStep = () => {
    if (currentStep === 0) {
      // Introduction
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center space-y-6"
        >
          <div className="text-6xl mb-4">🎯</div>
          <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">
            Welcome to Your Wheel of Life Assessment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This assessment will help you evaluate 8 key areas of your life. For each area, you'll rate your current
            satisfaction level from 1-10 and reflect on what's working and what could be improved.
          </p>
          <div className="bg-[#E0F2F7] p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-semibold text-[#2C3E50] mb-2">What You'll Get:</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li>• Visual representation of your life balance</li>
              <li>• Personalized insights and recommendations</li>
              <li>• Action steps for improvement</li>
              <li>• Results delivered to your email</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500">Takes about 10-15 minutes to complete</p>
        </motion.div>
      )
    }

    if (currentStep >= 1 && currentStep <= lifeAreas.length) {
      // Life area assessment
      const areaIndex = currentStep - 1
      const area = lifeAreas[areaIndex]
      const currentScore = assessmentData.scores[area.id] || 5

      return (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{area.icon}</div>
              <CardTitle className="text-2xl font-bold text-[#2C3E50]">{area.name}</CardTitle>
              <p className="text-gray-600">{area.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How satisfied are you with this area of your life? (1 = Very Dissatisfied, 10 = Very Satisfied)
                </label>
                <div className="space-y-4">
                  <Slider
                    value={[currentScore]}
                    onValueChange={(value) => handleScoreChange(area.id, value[0])}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 - Very Dissatisfied</span>
                    <span className="font-semibold text-[#28A745]">Current: {currentScore}</span>
                    <span>10 - Very Satisfied</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What's one thing that would help you improve this area? (Optional)
                </label>
                <textarea
                  value={assessmentData.insights[area.id] || ""}
                  onChange={(e) => handleInsightChange(area.id, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28A745] focus:border-[#28A745]"
                  rows={3}
                  placeholder="Share your thoughts..."
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    if (currentStep === lifeAreas.length + 1) {
      // Contact information
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">📧</div>
              <CardTitle className="text-2xl font-bold text-[#2C3E50]">Get Your Results</CardTitle>
              <p className="text-gray-600">
                Enter your details to receive your personalized Wheel of Life results and insights.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <Input
                  value={assessmentData.name}
                  onChange={(e) => handleContactChange("name", e.target.value)}
                  className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={assessmentData.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="bg-[#E0F2F7] p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>What you'll receive:</strong>
                  <br />• Your personalized Wheel of Life chart
                  <br />• Detailed analysis of each life area
                  <br />• Customized action steps for improvement
                  <br />• Invitation to a free discovery call (optional)
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    if (currentStep === lifeAreas.length + 2) {
      // Results
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Your Wheel of Life Results</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you, {assessmentData.name}! Your personalized results have been sent to {assessmentData.email}.
          </p>

          <Card className="bg-white shadow-lg mb-8">
            <CardContent className="p-8">
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="mx-auto mb-6"
                style={{ maxWidth: "100%", height: "auto" }}
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {lifeAreas.map((area) => (
                  <div key={area.id} className="text-center">
                    <div className="text-2xl mb-1">{area.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{area.name}</div>
                    <div className="text-lg font-bold" style={{ color: area.color }}>
                      {assessmentData.scores[area.id] || 0}/10
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={downloadResults}
                  className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Chart
                </Button>
                <Button
                  onClick={resetAssessment}
                  variant="outline"
                  className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-6 py-2 transition-all duration-300 bg-transparent"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Again
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-[#E0F2F7] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">Ready to Transform Your Life?</h3>
            <p className="text-gray-700 mb-4">
              Your assessment reveals areas where you can create meaningful change. Let's explore how coaching can
              support your journey.
            </p>
            <a
              href="/discovery-call"
              className="inline-block bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </motion.div>
      )
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-[#28A745] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <div className="min-h-[500px] flex items-center justify-center">{renderStep()}</div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="outline"
          className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-6 py-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep === lifeAreas.length + 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={!assessmentData.name || !assessmentData.email || isSubmitting}
            className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Mail className="w-4 h-4 mr-2 animate-spin" />
                Sending Results...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Get My Results
              </>
            )}
          </Button>
        ) : currentStep < lifeAreas.length + 1 ? (
          <Button
            onClick={handleNext}
            className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : null}
      </div>
    </div>
  )
}
