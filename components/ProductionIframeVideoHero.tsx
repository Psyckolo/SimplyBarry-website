"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProductionIframeVideoHero() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsMounted(true)

    // Simuler un délai de chargement pour s'assurer que l'iframe est bien chargé
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement de la vidéo...</div>
        </div>
      )}

      {/* Arrière-plan : iframe ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {isMounted ? (
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              src={`https://player.cloudinary.com/embed/?public_id=4383263-hd_1920_1080_30fps_oqnvrd&cloud_name=dh52kmuhc&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controls]=false&source[source_types][0]=mp4`}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"
              style={{ border: "none", pointerEvents: "none" }}
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        ) : null}

        {/* Image de secours (toujours présente, masquée si l'iframe est chargé) */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            !isLoading && isMounted ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/images/hero-garden.png')" }}
        />
      </div>

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 z-1"></div>

      {/* Contenu du hero */}
      <div className="container relative z-[2] max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Entretien professionnel de jardins en Belgique
        </h1>
        <p className="text-xl sm:text-2xl mb-6 sm:mb-8 mt-4">Donnez vie à votre espace vert avec Simply Barry</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
          <Link href="/devis" className="btn btn-primary text-center w-full sm:w-auto">
            Demander un devis gratuit
          </Link>
          <Link href="/services" className="btn btn-secondary text-center w-full sm:w-auto">
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
