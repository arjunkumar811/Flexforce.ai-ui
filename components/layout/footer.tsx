import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-[#004d40] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-serif text-2xl font-bold mb-6">
              Milestone <span className="font-light">|</span> Learning
            </div>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-white hover:text-gray-200">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <Button
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-[#004d40] mb-4"
            >
              BOOK A CONSULTATION
            </Button>
            <Link href="#" className="block text-white hover:text-gray-200 mb-2">
              Book a Learning Session
            </Link>
            <Link href="#" className="block text-white hover:text-gray-200">
              FAQ
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span>XXX-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@milestonelearning.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">© 2025 Milestone Learning</div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
