import type { CollectionConfig } from "payload/types"
import { heroSection } from "../blocks/HeroSection"
import { trustSection } from "../blocks/TrustSection"
import { whyMilestoneSection } from "../blocks/WhyMilestoneSection"
import { supportSection } from "../blocks/SupportSection"
import { performanceSection } from "../blocks/PerformanceSection"
import { successSection } from "../blocks/SuccessSection"
import { faqSection } from "../blocks/FaqSection"
import { insightsSection } from "../blocks/InsightsSection"
import { tutorCTASection } from "../blocks/TutorCTASection"

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [
        heroSection,
        trustSection,
        whyMilestoneSection,
        supportSection,
        performanceSection,
        successSection,
        faqSection,
        insightsSection,
        tutorCTASection,
      ],
    },
    {
      name: "meta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
  ],
}

export default Pages
