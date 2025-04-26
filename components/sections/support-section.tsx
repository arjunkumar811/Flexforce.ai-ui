export default function SupportSection({ data }) {
  // Default stages if none provided from CMS
  const defaultStages = [
    {
      icon: "/icons/test-prep.svg",
      title: "Test Prep",
      description: "Expert coaching for SSAT, SAT, ACT, AP exams, and more.",
    },
    {
      icon: "/icons/college.svg",
      title: "College/University",
      description: "Tutoring for advanced coursework, writing, and academic strategy.",
    },
    {
      icon: "/icons/graduate.svg",
      title: "Graduate School",
      description: "Language prep, writing mentorship, and exam support for advanced learners.",
    },
    {
      icon: "/icons/elementary.svg",
      title: "Elementary School",
      description: "Foundational support in reading, writing, math, and study habits.",
    },
    {
      icon: "/icons/middle.svg",
      title: "Middle School",
      description: "Skill-building across core subjects to support academic transitions.",
    },
    {
      icon: "/icons/high.svg",
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
              <div className="mr-4 h-12 w-12 relative shrink-0">
                {/* Placeholder for icon */}
                <div className="absolute inset-0 bg-gray-100 rounded-full flex items-center justify-center">
                  <p className="text-xs text-gray-500">Icon</p>
                </div>
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
