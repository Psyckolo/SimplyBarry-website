import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container">
        <h2 className="mx-auto max-w-[700px]">Prêt à sublimer votre jardin en Belgique ?</h2>
        <p className="mx-auto max-w-[700px]">
          Contactez Simply Barry dès aujourd'hui pour un devis gratuit et sans engagement
        </p>
        <Link href="/devis" className="btn btn-large inline-block mt-8">
          Demander mon devis gratuit
        </Link>
        <div className="mt-8">
          <p>
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
