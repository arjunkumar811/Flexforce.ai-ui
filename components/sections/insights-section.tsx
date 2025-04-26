import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function InsightsSection({ data }) {
  // Default articles if none provided from CMS
  const defaultArticles = [
    {
      title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
      excerpt:
        "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
      image: "/photo10.png.png",
      category: "Guidance",
      readTime: "5 mins read",
      slug: "#",
    },
    {
      title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
      excerpt:
        "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
      image: "/photo10.png.png",
      category: "Guidance",
      readTime: "5 mins read",
      slug: "#",
    },
    {
      title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
      excerpt:
        "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
      image: "/photo10.png.png",
      category: "Guidance",
      readTime: "5 mins read",
      slug: "#",
    },
    {
      title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
      excerpt:
        "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
      image: "/photo10.png.png",
      category: "Guidance",
      readTime: "5 mins read",
      slug: "#",
    },
  ]

  const articles = data?.articles || defaultArticles

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-4">
          {data?.title || "Insights & inspiration from the world of one-on-one learning"}
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          {data?.subtitle ||
            "Explore expert perspectives, success stories, and timely topics in education—designed for parents, students, and families navigating academic excellence in today's competitive world."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#004d40] mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs font-normal">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <Link href={article.slug} className="text-[#004d40]">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
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
