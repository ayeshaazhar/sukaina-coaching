import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 text-center bg-[#E0F2F7] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-6 transition-colors duration-300">
        Join Our Community of Growth
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto transition-colors duration-300">
        Receive weekly insights, gentle guidance, and exclusive resources to support you through life's transitions.
        Join thousands of women who are creating meaningful change in their lives.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:ring-[#28A745] focus:border-[#28A745] transition-all duration-300 hover:shadow-md focus:shadow-lg"
        />
        <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Join the Community
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-4">No spam, ever. Unsubscribe anytime with one click.</p>
    </section>
  )
}
