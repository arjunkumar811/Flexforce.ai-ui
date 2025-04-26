import { Button } from "@/components/ui/button"

export default function TutorCTASection({ data }) {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#004d40] mb-4">
          {data?.title || "Interested in becoming a tutor with Milestone Learning?"}
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          {data?.subtitle ||
            "Make a lasting impact—join a team where your expertise empowers students and your growth is supported every step of the way."}
        </p>

        <Button className="bg-[#004d40] hover:bg-[#00695c] text-white px-8">{data?.ctaText || "Apply Now"}</Button>
      </div>
    </section>
  )
}
