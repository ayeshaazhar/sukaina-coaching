
// "use client"

// import type React from "react"

// import { PageLayout } from "@/components/page-layout"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Clock, Heart, CheckCircle, Calendar } from "lucide-react"
// import { useState } from "react"

// const CALENDLY_URL = "https://calendly.com/ayesha-azhar-shaikh/discovery-call"

// export default function DiscoveryCallPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     transition: "",
//     challenges: "",
//     goals: "",
//     timeline: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted, opening Calendly popup...")
//     console.log("Form data:", formData)
    
//     // Open Calendly modal with prefilled name/email
//     if (typeof window !== "undefined" && (window as any).Calendly?.initPopupWidget) {
//       const calendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`
//       console.log("Calendly URL:", calendlyUrl)
      
//       try {
//         (window as any).Calendly.initPopupWidget({
//           url: calendlyUrl,
//         })
//         console.log("Calendly popup triggered successfully")
//       } catch (error) {
//         console.error("Error opening Calendly popup:", error)
//         alert("There was an error opening the booking calendar. Please try again.")
//       }
//     } else {
//       console.error("Calendly not available")
//       alert("Calendly is still loading. Please wait a moment and try again.")
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <PageLayout>
//       <div className="py-12 md:py-24 lg:py-32">
//         {/* Hero Section */}
//         <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
//             Your Free Discovery Call
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Let's explore your unique situation and see how coaching can support your transformation journey. This
//             complimentary 30-minute call is designed to give you clarity and insight.
//           </p>
//         </section>

//         <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Form Section */}
//             <div>
//               <Card className="bg-white shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-[#2C3E50]">Book Your Call</CardTitle>
//                   <p className="text-gray-600">
//                     Fill out this form and I'll be in touch within 24 hours to schedule our conversation.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                           autoComplete="name"
//                           className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address *
//                         </label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                           autoComplete="email"
//                           className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                         Phone Number
//                       </label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         autoComplete="tel"
//                         className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="transition" className="block text-sm font-medium text-gray-700 mb-2">
//                         What transition are you navigating? *
//                       </label>
//                       <select
//                         id="transition"
//                         name="transition"
//                         required
//                         value={formData.transition}
//                         onChange={handleChange}
//                         className="w-full rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745] p-2"
//                       >
//                         <option value="">Select your situation</option>
//                         <option value="motherhood">Motherhood transition</option>
//                         <option value="identity-crisis">Feeling lost/identity crisis</option>
//                         <option value="relocation">Relocation/moving</option>
//                         <option value="empty-nesting">Empty nesting</option>
//                         <option value="career-change">Career change</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
//                         What are your biggest challenges right now? *
//                       </label>
//                       <Textarea
//                         id="challenges"
//                         name="challenges"
//                         required
//                         rows={4}
//                         value={formData.challenges}
//                         onChange={handleChange}
//                         className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
//                         placeholder="Share what's been most difficult for you..."
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
//                         What would you like to achieve through coaching?
//                       </label>
//                       <Textarea
//                         id="goals"
//                         name="goals"
//                         rows={3}
//                         value={formData.goals}
//                         onChange={handleChange}
//                         className="rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
//                         placeholder="Describe your ideal outcome..."
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
//                         When would you like to start?
//                       </label>
//                       <select
//                         id="timeline"
//                         name="timeline"
//                         value={formData.timeline}
//                         onChange={handleChange}
//                         className="w-full rounded-lg border-gray-300 focus:ring-[#28A745] focus:border-[#28A745] p-2"
//                       >
//                         <option value="">Select timeline</option>
//                         <option value="immediately">Immediately</option>
//                         <option value="within-month">Within a month</option>
//                         <option value="within-3-months">Within 3 months</option>
//                         <option value="exploring">Just exploring options</option>
//                       </select>
//                     </div>

//                     <Button
//                       type="submit"
//                       className="w-full bg-[#28A745] text-white hover:bg-[#218838] rounded-full py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                     >
//                       Request My Discovery Call
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Info Section */}
//             <div className="space-y-8">
//               <Card className="bg-[#E0F2F7] border-none">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-[#2C3E50] flex items-center">
//                     <Clock className="w-6 h-6 mr-2 text-[#28A745]" />
//                     What to Expect
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-[#28A745] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">30-minute complimentary conversation via Zoom or phone</p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-[#28A745] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">Explore your current situation and desired outcomes</p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-[#28A745] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">Discuss how coaching can support your transformation</p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-[#28A745] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">Determine if we're a good fit to work together</p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-[#28A745] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">No pressure, no sales pitch—just genuine connection</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-white border border-[#E0F2F7]">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-[#2C3E50] flex items-center">
//                     <Heart className="w-6 h-6 mr-2 text-[#28A745]" />
//                     My Promise to You
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-700 leading-relaxed">
//                     This call is about you and your journey. I'll listen with my full attention, ask thoughtful
//                     questions, and provide insights that can help you gain clarity—regardless of whether we work
//                     together. My goal is to ensure you leave our conversation feeling heard, understood, and empowered.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="bg-[#2C3E50] text-white">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold flex items-center">
//                     <Calendar className="w-6 h-6 mr-2 text-[#28A745]" />
//                     Next Steps
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ol className="space-y-2 text-gray-200">
//                     <li>1. Complete the form above</li>
//                     <li>2. I'll email you within 24 hours</li>
//                     <li>3. We'll schedule a time that works for both of us</li>
//                     <li>4. We'll have our conversation and explore possibilities</li>
//                   </ol>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }




"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Heart, CheckCircle, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"

const CALENDLY_URL = "https://calendly.com/ayesha-azhar-shaikh/discovery-call"

export default function DiscoveryCallPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transition: "",
    challenges: "",
    goals: "",
    timeline: "",
  })
  
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load Calendly script
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if Calendly is already loaded
      if ((window as any).Calendly) {
        setIsCalendlyLoaded(true)
        return
      }

      // Create and load Calendly script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        setIsCalendlyLoaded(true)
        console.log('Calendly script loaded successfully')
      }
      script.onerror = () => {
        console.error('Failed to load Calendly script')
      }
      
      document.head.appendChild(script)

      // Also load Calendly CSS
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
        const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
        if (existingScript) existingScript.remove()
        if (existingLink) existingLink.remove()
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 500))

      // Create Calendly URL with prefilled data
      const calendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`
      
      console.log('Opening Calendly with URL:', calendlyUrl)
      
      // Direct approach - just open in new tab (works everywhere)
      window.open(calendlyUrl, '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes')
      
    } catch (error) {
      console.error('Error:', error)
      // Ultimate fallback
      window.open(CALENDLY_URL, '_blank')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageLayout>
    <div className="min-h-screen bg-background">
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you. Whether you have questions about coaching, want to
            share your story, or simply need someone to listen—I'm here.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <Card className="shadow-sm border-0 bg-background">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground">Send Me a Message</CardTitle>
                  <p className="text-muted-foreground">
                    I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          className="border-input focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          className="border-input focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="transition" className="block text-sm font-medium mb-2 text-foreground">
                        Subject *
                      </label>
                      <select
                        id="transition"
                        name="transition"
                        required
                        value={formData.transition}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground"
                      >
                        <option value="">What would you like to discuss?</option>
                        <option value="coaching-inquiry">Coaching Inquiry</option>
                        <option value="motherhood">Motherhood Transition</option>
                        <option value="identity-crisis">Identity & Purpose</option>
                        <option value="relocation">Life Transitions</option>
                        <option value="career-change">Career Change</option>
                        <option value="discovery-call">Book a Discovery Call</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="challenges"
                        name="challenges"
                        required
                        rows={6}
                        value={formData.challenges}
                        onChange={handleChange}
                        placeholder="Share what's on your mind..."
                        className="border-input focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full font-medium"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8">
              <Card className="bg-blue-50/50 border-0 shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-foreground">hello@ayesha.com</p>
                      <p className="text-sm text-muted-foreground">I respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground">Available during discovery calls</p>
                      <p className="text-sm text-green-600 cursor-pointer hover:underline" onClick={handleSubmit}>
                        Book a call to receive my direct number
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-foreground">Based in Canada</p>
                      <p className="text-sm text-muted-foreground">Serving clients globally via Zoom</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="text-foreground">Within 24 hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 5 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discovery Call CTA */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Prefer to Book a Call?</h3>
                <p className="text-muted-foreground">
                  Sometimes it's easier to talk things through. Book a free 30-minute
                  discovery call and we can explore how I can support your journey.
                </p>
                <Button
                  onClick={handleSubmit}
                  className="w-full py-3 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full font-medium"
                >
                  Book Your Free Discovery Call
                </Button>
              </div>

              {/* Social Media */}
              <Card className="bg-slate-800 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Follow My Journey</CardTitle>
                  <p className="text-slate-300">
                    Connect with me on social media for daily inspiration and insights.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  )
}