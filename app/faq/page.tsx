"use client"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is transformational coaching?",
          answer:
            "Transformational coaching is a holistic approach that goes beyond traditional goal-setting to help you create fundamental shifts in how you see yourself and your possibilities. It focuses on identifying and transforming limiting beliefs, patterns, and behaviors that keep you stuck, while helping you align with your authentic self and values.",
        },
        {
          question: "How do I know if coaching is right for me?",
          answer:
            "Coaching is ideal if you're feeling stuck, facing a major life transition, questioning your direction, or knowing you want change but aren't sure how to create it. If you're ready to invest in yourself, open to exploring new perspectives, and committed to taking action, coaching can be incredibly powerful.",
        },
        {
          question: "What's the difference between coaching and therapy?",
          answer:
            "While therapy often focuses on healing past wounds and addressing mental health concerns, coaching is future-focused and action-oriented. Coaching assumes you're whole and capable, and works with you to unlock your potential and create the life you want. If you're dealing with trauma or mental health issues, I may recommend therapy as a complement to or instead of coaching.",
        },
      ],
    },
    {
      category: "The Coaching Process",
      questions: [
        {
          question: "What happens in a typical coaching session?",
          answer:
            "Each session is tailored to your needs, but typically includes: checking in on your progress since our last session, exploring current challenges or opportunities, identifying insights and breakthroughs, creating action steps, and addressing any obstacles. Sessions are conversational, supportive, and focused on moving you forward.",
        },
        {
          question: "How long does the coaching process take?",
          answer:
            "This varies greatly depending on your goals and situation. Some clients see significant shifts in 3-6 months, while others prefer longer-term support over 6-12 months or more. We'll discuss your timeline during our discovery call and can adjust as needed throughout our work together.",
        },
        {
          question: "What if I don't know what I want?",
          answer:
            "This is actually very common and a perfect place to start! Much of our early work together will focus on helping you gain clarity about your values, desires, and vision for your life. Not knowing what you want is often a sign that you've been living according to others' expectations rather than your own truth.",
        },
      ],
    },
    {
      category: "Practical Details",
      questions: [
        {
          question: "How are sessions conducted?",
          answer:
            "All sessions are conducted via Zoom, making coaching accessible no matter where you are in the world. This also allows you to be in a comfortable, private space during our conversations. I provide a secure, confidential environment for all our interactions.",
        },
        {
          question: "What's your cancellation policy?",
          answer:
            "I require 24 hours notice for cancellations or rescheduling. This allows me to potentially offer the time slot to another client. Cancellations with less than 24 hours notice will be charged the full session fee, except in cases of emergency.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, I understand that investing in coaching is a significant decision. I offer payment plans for multi-session packages to make coaching more accessible. We can discuss options that work for your budget during our discovery call.",
        },
      ],
    },
    {
      category: "Working Together",
      questions: [
        {
          question: "What do you expect from me as a client?",
          answer:
            "I expect you to show up authentically, be open to exploring new perspectives, and be willing to take action between sessions. Coaching works best when you're committed to the process and honest about your challenges and resistance. I don't expect you to have all the answers—that's what we'll discover together.",
        },
        {
          question: "What if we're not a good fit?",
          answer:
            "Not every coach-client relationship is meant to be, and that's okay! If after our discovery call or first few sessions we realize we're not the right fit, I'll help you find resources or referrals that might serve you better. Your growth and well-being are what matter most.",
        },
        {
          question: "How do you maintain confidentiality?",
          answer:
            "Everything we discuss is completely confidential. I adhere to strict professional standards and will never share your information without your explicit consent. The only exception would be if you expressed intent to harm yourself or others, in which case I'm ethically obligated to seek appropriate help.",
        },
      ],
    },
  ]

  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about transformational coaching and working together.
          </p>
        </section>

        {/* FAQ Sections */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#2C3E50] mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(itemIndex)

                  return (
                    <Card
                      key={questionIndex}
                      className="bg-white border border-[#E0F2F7] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <CardHeader className="cursor-pointer" onClick={() => toggleItem(itemIndex)}>
                        <CardTitle className="flex items-center justify-between text-lg font-semibold text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300">
                          {faq.question}
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#28A745]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-[#E0F2F7] py-16 mt-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3E50] mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm here to help. Book a free discovery call or send me a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/discovery-call"
                className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
              >
                Book a Discovery Call
              </a>
              <a
                href="/contact"
                className="border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-full px-8 py-3 text-lg transition-all duration-300 inline-block"
              >
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
