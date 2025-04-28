import Image from "next/image"

const realisations = [
  {
    title: "Rénovation complète d'un jardin à Bruxelles",
    description: "Transformation d'un espace négligé en un jardin moderne et fonctionnel.",
    image: "/images/realisation-1.png",
  },
  {
    title: "Entretien régulier d'un grand domaine à Namur",
    description: "Maintenance complète d'un domaine de 2 hectares incluant tonte, taille et élagage.",
    image: "/images/realisation-2.png",
  },
  {
    title: "Aménagement d'un jardin de ville à Liège",
    description:
      "Création d'un espace vert optimisé pour un petit espace urbain avec des solutions de verdure verticale.",
    image: "/images/realisation-3.png",
  },
  {
    title: "Restauration d'un jardin historique à Gand",
    description: "Remise en état et entretien d'un jardin centenaire dans le respect de son design d'origine.",
    image: "/images/realisation-4.png",
  },
]

export default function Realisations() {
  return (
    <div className="container py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mb-4 sm:mb-6">Nos Réalisations</h1>
      <p className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
        Découvrez quelques-uns de nos projets récents d'entretien et d'aménagement de jardins en Belgique.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {realisations.map((realisation, index) => (
          <div key={index} className="bg-white rounded shadow-custom overflow-hidden">
            <div className="relative h-[200px] sm:h-[250px]">
              <Image
                src={realisation.image || "/placeholder.svg"}
                alt={realisation.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{realisation.title}</h3>
              <p className="text-sm sm:text-base">{realisation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
