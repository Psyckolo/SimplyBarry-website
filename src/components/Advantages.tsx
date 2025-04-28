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
    <section className="py-20 bg-backgroundLight">
      <div className="container">
        <h2>Pourquoi choisir Simply Barry pour l'entretien de votre jardin ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded shadow-custom text-center transition-all duration-300 hover:transform hover:-translate-y-2.5 hover:shadow-lg"
            >
              <div className="mb-5">
                <Image
                  src={advantage.icon || "/placeholder.svg"}
                  alt={`Icône ${advantage.title}`}
                  width={64}
                  height={64}
                />
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
