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
    <section className="py-20 bg-backgroundLight">
      <div className="container">
        <h2>Ce que nos clients en Belgique disent de nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded shadow-custom">
              <div className="testimonial-rating">{"★".repeat(testimonial.rating)}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
