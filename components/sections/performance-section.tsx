import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PerformanceSection({ data }) {
  // Default CTAs if none provided from CMS
  const defaultCtas = [
    { text: "Schedule a Consultation", link: "#" },
    { text: "Submit an Inquiry", link: "#" },
    { text: "Book a Session", link: "#" },
  ]

  const ctas = data?.ctas || defaultCtas

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-[#004d40] mb-6">
              {data?.title || "How we increase academic performance"}
            </h2>

            <p className="text-gray-700 mb-4">{data?.subtitle || "The most successful learning is one-on-one."}</p>

            <p className="text-gray-700 mb-6">
              {data?.description ||
                "At Milestone Learning, we recognize that every student learns differently—success comes from tailored support, personalized strategies, and a learning approach that works for them."}
            </p>

            <Link
              href={data?.learnMoreLink || "#"}
              className="text-[#004d40] font-medium flex items-center gap-1 hover:underline"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-100 relative">
                  {/* Placeholder for image that will be added later */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image will be added here</p>
                  </div>
                </div>
                <div className="p-4 flex justify-center">
                  <Button className="bg-[#004d40] hover:bg-[#00695c] w-full">
                    {ctas[index]?.text || `CTA ${index + 1}`}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
