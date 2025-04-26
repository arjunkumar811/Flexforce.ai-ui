import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Users2, Lightbulb, HandHeart, Star } from "lucide-react"

export default function WhyMilestoneSection({ data }) {
  // Default features if none provided from CMS
  const defaultFeatures = [
    {
      icon: SlidersHorizontal,
      title: "Personalized, efficient learning",
      description: "Tailored instruction that maximizes understanding and progress.",
    },
    {
      icon: Users2,
      title: "Collaboration with parents & students",
      description: "Clear communication and ongoing feedback to align on goals.",
    },
    {
      icon: Lightbulb,
      title: "Long-term skill development",
      description: "Focused on growth, mastery, and real results.",
    },
    {
      icon: HandHeart,
      title: "A nurturing, supportive environment",
      description: "Meeting students where they are and helping them thrive.",
    },
    {
      icon: Star,
      title: "Confidence-building for success",
      description: "Strategies to reduce anxiety and improve academic performance.",
    },
  ]

  const features = data?.features || defaultFeatures

  return (
    <section className="w-full py-16 bg-[#004d40] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{data?.title || "Why Milestone Learning?"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white text-[#004d40] rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4 h-16 w-16 relative flex items-center justify-center">
                {feature.icon && (
                  <feature.icon className="h-12 w-12 text-[#004d40]" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index} className="bg-white text-[#004d40] rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4 h-16 w-16 relative flex items-center justify-center">
                {feature.icon && (
                  <feature.icon className="h-12 w-12 text-[#004d40]" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button className="bg-white text-[#004d40] hover:bg-gray-100">
            {data?.primaryCta || "Get Started Today"}
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-[#00695c]">
            {data?.secondaryCta || "Learn More"}
          </Button>
        </div>
      </div>
    </section>
  )
}
