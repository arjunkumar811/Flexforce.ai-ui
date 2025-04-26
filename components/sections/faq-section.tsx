import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FaqSection({ data }) {
  // Default FAQs if none provided from CMS
  const defaultFaqs = [
    {
      question: "What makes Milestone Learning different from other tutoring services?",
      answer:
        "We specialize in one-on-one, highly personalized tutoring that goes beyond just helping students with homework. Our expert tutors focus on mastery, confidence-building, and academic strategy, ensuring that students not only improve their grades but also develop lifelong learning skills.",
    },
    {
      question: "Who are your tutors?",
      answer:
        "Our tutors are carefully selected experts from top universities with extensive teaching experience and subject matter expertise.",
    },
    {
      question: "How do you match students with tutors?",
      answer:
        "We use a comprehensive matching system that considers academic needs, learning style, personality, and scheduling to ensure the perfect tutor-student fit.",
    },
    {
      question: "Do you offer in-person tutoring?",
      answer:
        "Yes, we offer both in-person and online tutoring options to accommodate different preferences and needs.",
    },
  ]

  const faqs = data?.faqs || defaultFaqs

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-[#004d40] mb-4">{data?.title || "Frequently asked questions"}</h2>
            <p className="text-gray-700">
              {data?.subtitle || "Find answers to common questions and get the information you need!"}
            </p>
          </div>

          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-[#004d40]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex justify-center md:justify-start">
              <Button variant="outline" className="border-[#004d40] text-[#004d40]">
                {data?.viewAllText || "View All"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
