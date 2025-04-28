import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-white text-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mx-auto max-w-[700px] mb-4">
          Prêt à sublimer votre jardin en Belgique ?
        </h2>
        <p className="mx-auto max-w-[700px] mb-6 sm:mb-8 text-sm sm:text-base">
          Contactez Simply Barry dès aujourd'hui pour un devis gratuit et sans engagement
        </p>
        <Link href="/devis" className="btn btn-large inline-block">
          Demander mon devis gratuit
        </Link>
        <div className="mt-6 sm:mt-8">
          <p className="text-sm sm:text-base">
            Ou appelez-nous au{" "}
            <a href="tel:+32470123456" className="text-white font-bold underline">
              +32 470 12 34 56
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
