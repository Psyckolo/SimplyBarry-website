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
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Nos services d'entretien de jardins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-custom transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <div className="relative h-[180px] sm:h-[200px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 sm:p-5 flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base mb-4">{service.description}</p>
              </div>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <Link href={service.link} className="btn btn-outline w-full text-center">
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
