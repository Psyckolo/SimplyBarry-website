import { services } from "@/lib/data"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="bg-white px-3 py-1 rounded text-primary">services</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins d'entretien de jardin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading={index === 1 ? "eager" : "lazy"} // Charger en priorité l'image de taille de haies
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                    <i className={`${service.icon} text-primary`}></i>
                  </div>
                  <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block text-primary font-medium hover:text-accent transition-colors"
                >
                  En savoir plus <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
