import Image from "next/image"
import Link from "next/link"

const services = [
  {
    image: "/images/service-tonte.png",
    title: "Tonte de pelouse",
    description: "Une pelouse parfaitement entretenue pour valoriser votre jardin en Belgique",
    link: "/services/tonte-pelouse",
  },
  {
    image: "/images/service-haies.png",
    title: "Taille de haies",
    description: "Des haies impeccables pour structurer votre jardin avec élégance",
    link: "/services/taille-haies",
  },
  {
    image: "/images/service-elagage.png",
    title: "Élagage et abattage",
    description: "Entretien professionnel des arbres pour sécuriser votre espace extérieur",
    link: "/services/elagage-abattage",
  },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <h2>Nos services d'entretien de jardins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-custom transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[200px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="px-5 mt-5">{service.title}</h3>
              <p className="px-5">{service.description}</p>
              <div className="m-5">
                <Link href={service.link} className="btn btn-outline">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
