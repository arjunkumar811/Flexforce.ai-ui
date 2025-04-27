// This file handles the API calls to PayloadCMS

// Function to fetch homepage data from PayloadCMS
export async function getHomepage() {
  try {
    // In a real implementation, this would fetch data from PayloadCMS
    // For now, we'll return mock data
    return {
      hero: {
        title: "Empowering every Student with personalized learning for lasting success",
        bulletPoints: [
          { text: "Personalized, efficient learning" },
          { text: "Deep collaboration with parents & students" },
          { text: "Personalized One-on-One Learning" },
        ],
        ctaText: "Get Started Today",
      },
      trustSection: {
        title: "Tutors you can trust from",
        logos: [
          { name: "Columbia University", logo: "/photo6.png.png" },
          { name: "University 2", logo: "/photo6.png.png" },
          { name: "University 3", logo: "/photo6.png.png" },
          { name: "Stony Brook University", logo: "/photo6.png.png" },
          { name: "University 5", logo: "/photo6.png.png" },
          { name: "University 6", logo: "/photo6.png.png" },
          { name: "University 7", logo: "/photo6.png.png" },
          { name: "University 8", logo: "/photo6.png.png" },
        ],
      },
      // Add other sections data here
    }
  } catch (error) {
    console.error("Error fetching homepage data:", error)
    return {}
  }
}
