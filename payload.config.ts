import { buildConfig } from "payload/config"
import path from "path"

// Collections
import Pages from "./collections/Pages"
import Media from "./collections/Media"
import Testimonials from "./collections/Testimonials"
import BlogPosts from "./collections/BlogPosts"
import FAQs from "./collections/FAQs"

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
  admin: {
    user: "users",
  },
  collections: [Pages, Media, Testimonials, BlogPosts, FAQs],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
})
