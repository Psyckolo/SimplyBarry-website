const testimonials = [
  {
    rating: 5,
    text: "Simply Barry a complètement transformé mon jardin. Service professionnel et résultat impeccable.",
    author: "Marie D., Bruxelles",
  },
  {
    rating: 5,
    text: "Je recommande vivement cette entreprise pour la qualité du travail et le respect des délais. Très satisfait !",
    author: "Pierre L., Namur",
  },
  {
    rating: 5,
    text: "Équipe sérieuse et à l'écoute. Mes haies n'ont jamais été aussi belles depuis que Simply Barry s'en occupe.",
    author: "Sophie M., Liège",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-backgroundLight">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Ce que nos clients en Belgique disent de nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded shadow-custom">
              <div className="testimonial-rating mb-3 sm:mb-4">{"★".repeat(testimonial.rating)}</div>
              <p className="testimonial-text text-sm sm:text-base mb-4">{testimonial.text}</p>
              <p className="testimonial-author text-right text-sm sm:text-base font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
