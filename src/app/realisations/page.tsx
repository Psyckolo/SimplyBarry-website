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
    <div className="container py-20">
      <h1 className="text-center">Nos Réalisations</h1>
      <p className="text-center mb-10">
        Découvrez quelques-uns de nos projets récents d'entretien et d'aménagement de jardins en Belgique.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {realisations.map((realisation, index) => (
          <div key={index} className="bg-white rounded shadow-custom overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src={realisation.image || "/placeholder.svg"}
                alt={realisation.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3>{realisation.title}</h3>
              <p>{realisation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
