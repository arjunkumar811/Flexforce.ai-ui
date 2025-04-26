import { ClipboardCheck, School, GraduationCap, Home, Landmark, BadgeCheck } from "lucide-react"

export default function SupportSection({ data }) {
  // Default stages if none provided from CMS
  const defaultStages = [
    {
      icon: ClipboardCheck,
      title: "Test Prep",
      description: "Expert coaching for SSAT, SAT, ACT, AP exams, and more.",
    },
    {
      icon: School,
      title: "College/University",
      description: "Tutoring for advanced coursework, writing, and academic strategy.",
    },
    {
      icon: GraduationCap,
      title: "Graduate School",
      description: "Language prep, writing mentorship, and exam support for advanced learners.",
    },
    {
      icon: Home,
      title: "Elementary School",
      description: "Foundational support in reading, writing, math, and study habits.",
    },
    {
      icon: Landmark,
      title: "Middle School",
      description: "Skill-building across core subjects to support academic transitions.",
    },
    {
      icon: BadgeCheck,
      title: "High School",
      description: "Rigorous subject support, test prep, and college readiness.",
    },
  ]

  const stages = data?.stages || defaultStages

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-4">
          {data?.title || "Support for every stage of learning"}
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {data?.subtitle || "From foundational skills to advanced academics, we're with you every step of the way."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div key={index} className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-lg p-6 flex">
              <div className="mr-4 h-12 w-12 relative shrink-0 flex items-center justify-center">
                {stage.icon && (
                  <stage.icon className="h-10 w-10 text-[#388e3c]" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#004d40] mb-2">{stage.title}</h3>
                <p className="text-gray-700 text-sm">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
