import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection({ data }) {
  return (
    <section className="w-full bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004d40] leading-tight">
            {data.title || "Empowering every Student with personalized learning for lasting success"}
          </h1>

          <div className="space-y-3">
            {data.bulletPoints?.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-6 w-6 text-[#004d40] mt-0.5 shrink-0" />
                <p className="text-gray-700">{point.text}</p>
              </div>
            )) || (
              <>
                <div className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-[#004d40] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Personalized, efficient learning</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-[#004d40] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Deep collaboration with parents & students</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-[#004d40] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Personalized One-on-One Learning</p>
                </div>
              </>
            )}
          </div>

          <Button className="bg-[#004d40] hover:bg-[#00695c] text-white px-8 py-6 rounded-md">
            {data.ctaText || "Get Started Today"}
          </Button>
        </div>

        <div className="relative h-[400px] w-full">
  <img src="/photo1.png.png" alt="Hero Image" className="h-full w-full object-cover rounded-lg" />
  <div className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded-lg flex items-center justify-center">
    <p className="text-gray-500"></p>
  </div>
</div>

      </div>
    </section>
  )
}
