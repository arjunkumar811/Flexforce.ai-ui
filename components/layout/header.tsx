import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-[#004d40] font-serif text-2xl font-bold">
            Milestone <span className="font-light">|</span> Learning
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-700 hover:text-[#004d40]">
            About Us
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#004d40]">
            What We Do
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#004d40]">
            Resources
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#004d40]">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="tel:XXX-XXX-XXXX"
            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#004d40]"
          >
            <Phone className="h-4 w-4" />
            <span>XXX-XXX-XXXX</span>
          </Link>
          <Button className="bg-[#004d40] hover:bg-[#00695c] text-white">Login</Button>
        </div>
      </div>
    </header>
  )
}
