import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SuccessSection({ data }) {
  // Default testimonials if none provided from CMS
  const defaultTestimonials = [
    {
      quote:
        "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
      author: "Kate Wills",
      role: "Parent | 8th Standard",
      avatar: "/placeholder.svg",
    },
    {
      quote:
        "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
      author: "Kate Wills",
      role: "Parent | 8th Standard",
      avatar: "/placeholder.svg",
    },
    {
      quote:
        "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
      author: "Kate Wills",
      role: "Parent | 8th Standard",
      avatar: "/placeholder.svg",
    },
    {
      quote:
        "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
      author: "Kate Wills",
      role: "Parent | 8th Standard",
      avatar: "/placeholder.svg",
    },
  ]

  const testimonials = data?.testimonials || defaultTestimonials

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-4">
          {data?.title || "Success we've achieved together"}
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {data?.subtitle ||
            "Together, we celebrate every milestone—turning challenges into achievements and goals into reality."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-[#004d40] text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-3 h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#004d40]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="border-[#004d40] text-[#004d40]">
            {data?.viewAllText || "View All"}
          </Button>
        </div>
      </div>
    </section>
  )
}
