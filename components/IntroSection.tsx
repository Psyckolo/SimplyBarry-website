export default function IntroSection() {
  return (
    <section id="intro" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Jardinier professionnel"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-left">
              Entretien de jardin{" "}
              <span className="text-primary bg-white bg-opacity-80 px-2 py-1 rounded">simple et efficace</span>
            </h2>
            <p className="text-lg mb-6">
              Chez Simply Barry, nous croyons que l'entretien de jardin doit être simple. C'est pourquoi nous offrons
              des services personnalisés et de haute qualité pour tous vos besoins d'aménagement extérieur en Belgique.
            </p>
            <p className="text-lg mb-8">
              Fort de plusieurs années d'expérience, Barry s'engage personnellement à transformer et entretenir votre
              espace extérieur avec professionnalisme et attention aux détails.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <i className="fas fa-leaf text-primary text-xl mr-3"></i>
                <span className="font-medium">Approche écologique</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-primary text-xl mr-3"></i>
                <span className="font-medium">Service ponctuel</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-certificate text-primary text-xl mr-3"></i>
                <span className="font-medium">Expert du jardin</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-thumbs-up text-primary text-xl mr-3"></i>
                <span className="font-medium">Satisfaction garantie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
