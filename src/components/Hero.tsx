import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="hero h-[80vh] min-h-[600px] bg-cover bg-center relative flex items-center text-white"
      style={{ backgroundImage: "url('/images/hero-garden.png')" }}
    >
      <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="container relative z-[2] max-w-[800px]">
        <h1>Entretien professionnel de jardins en Belgique</h1>
        <p className="text-2xl mb-8">Donnez vie à votre espace vert avec Simply Barry</p>
        <div className="flex gap-4 mt-8 md:flex-col">
          <Link href="/devis" className="btn btn-primary">
            Demander un devis gratuit
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
