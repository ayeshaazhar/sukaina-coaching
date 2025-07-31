import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#2C3E50] text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Sukaina Pasha</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformational Coaching for women navigating life's most meaningful transitions. Based in Canada,
              serving women globally.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@sukainapasha.com"
                className="text-gray-300 hover:text-[#28A745] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-[#28A745] transition-colors duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/discovery-call"
                  className="text-gray-300 hover:text-[#28A745] transition-colors duration-300"
                >
                  Free Discovery Call
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-[#28A745] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Sukaina Pasha Transformational Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
