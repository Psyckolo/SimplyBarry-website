"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function InlineVideoHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Vidéo en arrière-plan ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {isMounted && (
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <video
                  autoplay
                  muted
                  loop
                  playsinline
                  class="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/garden-background.mp4" type="video/mp4" />
                  <source src="/videos/garden-background.webm" type="video/webm" />
                </video>
              `,
            }}
          />
        )}

        {/* Image de secours (affichée pendant le rendu côté serveur) */}
        {!isMounted && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-garden.png')" }}
          />
        )}
      </div>

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

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
