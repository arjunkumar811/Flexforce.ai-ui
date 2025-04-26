import type { Block } from "payload/types"

export const heroSection: Block = {
  slug: "heroSection",
  labels: {
    singular: "Hero Section",
    plural: "Hero Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "bulletPoints",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "ctaText",
      type: "text",
      required: true,
    },
    {
      name: "ctaLink",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
}
