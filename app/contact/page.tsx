"use client"

import type React from "react"

import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you. Whether you have questions about coaching, want to share your story, or simply
            need someone to listen—I'm here.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2C3E50]">Send Me a Message</CardTitle>
                  <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
                        placeholder="Share what's on your mind..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#28A745] text-white hover:bg-[#218838] rounded-full py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-[#E0F2F7] border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2C3E50]">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#28A745] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2C3E50] mb-1">Email</h3>
                      <p className="text-gray-700">hello@sukainapasha.com</p>
                      <p className="text-sm text-gray-600">I respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#28A745] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2C3E50] mb-1">Phone</h3>
                      <p className="text-gray-700">Available during discovery calls</p>
                      <p className="text-sm text-gray-600">Book a call to receive my direct number</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#28A745] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2C3E50] mb-1">Location</h3>
                      <p className="text-gray-700">Based in Canada</p>
                      <p className="text-sm text-gray-600">Serving clients globally via Zoom</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#28A745] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#2C3E50] mb-1">Response Time</h3>
                      <p className="text-gray-700">Within 24 hours</p>
                      <p className="text-sm text-gray-600">Monday - Friday, 9 AM - 5 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-[#E0F2F7]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2C3E50]">Prefer to Book a Call?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    Sometimes it's easier to talk things through. Book a free 30-minute discovery call and we can
                    explore how I can support your journey.
                  </p>
                  <a
                    href="/discovery-call"
                    className="inline-block w-full text-center bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Book Your Free Discovery Call
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#2C3E50] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Follow My Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">
                    Connect with me on social media for daily inspiration and insights.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
