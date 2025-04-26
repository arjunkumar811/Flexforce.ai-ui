import Image from "next/image"

export default function TrustSection({ data }) {
  // Default logos if none provided from CMS
  const defaultLogos = [
    { name: "Columbia University", logo: "/placeholder.svg" },
    { name: "University 2", logo: "/placeholder.svg" },
    { name: "University 3", logo: "/placeholder.svg" },
    { name: "Stony Brook University", logo: "/placeholder.svg" },
    { name: "University 5", logo: "/placeholder.svg" },
    { name: "University 6", logo: "/placeholder.svg" },
    { name: "University 7", logo: "/placeholder.svg" },
    { name: "University 8", logo: "/placeholder.svg" },
  ]

  const logos = data?.logos || defaultLogos

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-12">
          {data?.title || "Tutors you can trust from"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center">
              <div className="relative h-16 w-full">
                <Image src={logo.logo || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
