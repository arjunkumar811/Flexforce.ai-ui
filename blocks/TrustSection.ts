import type { Block } from "payload/types"

export const trustSection: Block = {
  slug: "trustSection",
  labels: {
    singular: "Trust Section",
    plural: "Trust Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "logos",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}
