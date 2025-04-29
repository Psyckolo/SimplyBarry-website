"use client"

import { useState } from "react"
import { faqs } from "@/lib/data"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
            Questions <span className="bg-white px-3 py-1 rounded text-dark-text">fréquentes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur nos services d'entretien de jardin
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-heading font-bold text-lg">{faq.question}</h3>
                <span className="text-primary">
                  <i className={`fas fa-chevron-${openIndex === index ? "up" : "down"}`}></i>
                </span>
              </button>
              <div
                className={`bg-white px-4 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
