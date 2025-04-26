import { getHomepage } from "@/lib/payload-api"
import HeroSection from "@/components/sections/hero-section"
import TrustSection from "@/components/sections/trust-section"
import WhyMilestoneSection from "@/components/sections/why-milestone-section"
import SupportSection from "@/components/sections/support-section"
import PerformanceSection from "@/components/sections/performance-section"
import SuccessSection from "@/components/sections/success-section"
import FaqSection from "@/components/sections/faq-section"
import InsightsSection from "@/components/sections/insights-section"
import TutorCTASection from "@/components/sections/tutor-cta-section"

export default async function Home() {
  // Fetch homepage data from PayloadCMS
  const homepageData = await getHomepage()

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <HeroSection data={homepageData.hero} />

      {/* Trusted Universities Section */}
      <TrustSection data={homepageData.trustSection} />

      {/* Why Milestone Learning Section */}
      <WhyMilestoneSection data={homepageData.whyMilestone} />

      {/* Support for Every Stage Section */}
      <SupportSection data={homepageData.supportStages} />

      {/* How We Increase Performance Section */}
      <PerformanceSection data={homepageData.performanceSection} />

      {/* Success Stories Section */}
      <SuccessSection data={homepageData.successStories} />

      {/* FAQ Section */}
      <FaqSection data={homepageData.faqSection} />

      {/* Insights & Inspiration Section */}
      <InsightsSection data={homepageData.insights} />

      {/* Become a Tutor CTA Section */}
      <TutorCTASection data={homepageData.tutorCTA} />
    </main>
  )
}
