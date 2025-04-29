import Image from "next/image"
import PageLayout from "@/components/PageLayout"

const services = [
  {
    title: "Tonte de pelouse",
    description:
      "Notre service de tonte de pelouse assure un résultat impeccable pour votre jardin. Nous utilisons des équipements professionnels pour garantir une coupe uniforme et soignée.",
    image: "/images/service-tonte.png",
    features: [
      "Tonte régulière adaptée à la saison",
      "Ramassage des déchets de tonte",
      "Entretien des bordures",
      "Scarification et aération",
    ],
  },
  {
    title: "Taille de haies",
    description:
      "Nos experts en taille de haies vous garantissent des haies parfaitement entretenues qui structurent votre jardin avec élégance.",
    image: "/images/service-haies.png",
    features: [
      "Taille de formation et d'entretien",
      "Respect des périodes de taille adaptées à chaque espèce",
      "Évacuation des déchets verts",
      "Conseils sur les meilleures pratiques",
    ],
  },
  {
    title: "Élagage et abattage",
    description:
      "Nous proposons des services d'élagage et d'abattage d'arbres réalisés par des professionnels qualifiés, assurant la sécurité et la santé de vos espaces verts.",
    image: "/images/service-elagage.png",
    features: [
      "Élagage de sécurité et d'entretien",
      "Abattage contrôlé",
      "Dessouchage",
      "Évacuation des branches et troncs",
    ],
  },
]

export default function Services() {
  return (
    <PageLayout>
      <h1 className="text-center mb-4 sm:mb-6">Nos Services</h1>
      <p className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
        Découvrez notre gamme complète de services d'entretien de jardins en Belgique.
      </p>

      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 sm:gap-8 md:gap-10`}
          >
            <div className="md:w-1/2 relative h-[250px] sm:h-[300px] rounded overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-left text-xl sm:text-2xl md:text-3xl mb-4">{service.title}</h2>
              <p className="mb-4 sm:mb-6">{service.description}</p>
              <h3 className="text-lg font-semibold mb-3">Ce que nous proposons :</h3>
              <ul className="list-disc pl-5 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm sm:text-base">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
