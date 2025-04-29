export default function CtaSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre jardin ?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contactez Simply Barry dès aujourd'hui pour un devis gratuit et sans engagement. Nous vous répondrons dans les
          24 heures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-bold transition-all shadow-md border border-white"
          >
            Demander un devis
          </a>
          <a
            href="tel:+32XXXXXXXXX"
            className="btn bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-md text-lg font-bold transition-all shadow-md"
          >
            <i className="fas fa-phone-alt mr-2"></i> Nous appeler
          </a>
        </div>
      </div>
    </section>
  )
}
