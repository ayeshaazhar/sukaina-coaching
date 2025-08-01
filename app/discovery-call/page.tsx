
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




import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Heart, CheckCircle, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

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
    <div className="min-h-screen bg-background">
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Your Free Discovery Call
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's explore your unique situation and see how coaching can support your transformation journey. This
            complimentary 30-minute call is designed to give you clarity and insight.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Book Your Call</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out this form and I'll be in touch within 24 hours to schedule our conversation.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <label htmlFor="transition" className="block text-sm font-medium mb-2">
                        What transition are you navigating? *
                      </label>
                      <select
                        id="transition"
                        name="transition"
                        required
                        value={formData.transition}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select your situation</option>
                        <option value="motherhood">Motherhood transition</option>
                        <option value="identity-crisis">Feeling lost/identity crisis</option>
                        <option value="relocation">Relocation/moving</option>
                        <option value="empty-nesting">Empty nesting</option>
                        <option value="career-change">Career change</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium mb-2">
                        What are your biggest challenges right now? *
                      </label>
                      <Textarea
                        id="challenges"
                        name="challenges"
                        required
                        rows={4}
                        value={formData.challenges}
                        onChange={handleChange}
                        placeholder="Share what's been most difficult for you..."
                      />
                    </div>

                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium mb-2">
                        What would you like to achieve through coaching?
                      </label>
                      <Textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="Describe your ideal outcome..."
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        When would you like to start?
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-month">Within a month</option>
                        <option value="within-3-months">Within 3 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !isCalendlyLoaded}
                      className="w-full py-3 text-lg"
                    >
                      {isSubmitting 
                        ? "Opening Calendly..." 
                        : !isCalendlyLoaded 
                        ? "Loading..." 
                        : "Request My Discovery Call"
                      }
                    </Button>
                    
                    {!isCalendlyLoaded && (
                      <p className="text-sm text-muted-foreground text-center">
                        Loading booking system...
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <Card className="bg-accent/50 border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p>30-minute complimentary conversation via Zoom or phone</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p>Explore your current situation and desired outcomes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p>Discuss how coaching can support your transformation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p>Determine if we're a good fit to work together</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p>No pressure, no sales pitch—just genuine connection</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-primary" />
                    My Promise to You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    This call is about you and your journey. I'll listen with my full attention, ask thoughtful
                    questions, and provide insights that can help you gain clarity—regardless of whether we work
                    together. My goal is to ensure you leave our conversation feeling heard, understood, and empowered.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 opacity-90">
                    <li>1. Complete the form above</li>
                    <li>2. I'll email you within 24 hours</li>
                    <li>3. We'll schedule a time that works for both of us</li>
                    <li>4. We'll have our conversation and explore possibilities</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}