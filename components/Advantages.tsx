import Image from "next/image"

const advantages = [
  {
    icon: "/images/icon-expertise.png",
    title: "Expertise locale",
    description: "Plus de 10 ans d'expérience en Belgique",
  },
  {
    icon: "/images/icon-quality.png",
    title: "Qualité garantie",
    description: "Travail soigné et résultats durables",
  },
  {
    icon: "/images/icon-custom.png",
    title: "Service personnalisé",
    description: "Solutions adaptées à vos besoins spécifiques",
  },
  {
    icon: "/images/icon-eco.png",
    title: "Éco-responsable",
    description: "Techniques respectueuses de l'environnement",
  },
]

export default function Advantages() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-backgroundLight">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Pourquoi choisir Simply Barry pour l'entretien de votre jardin ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded shadow-custom text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={advantage.icon || "/placeholder.svg"}
                  alt={`Icône ${advantage.title}`}
                  width={64}
                  height={64}
                  className="h-12 sm:h-16 w-auto"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-sm sm:text-base">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
