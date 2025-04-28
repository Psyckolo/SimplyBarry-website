"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Lecture automatique de la vidéo lorsque le composant est monté
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erreur de lecture automatique de la vidéo:", error)
      })
    }
  }, [])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-garden.png" // Image de secours si la vidéo ne se charge pas
        >
          <source
            src="https://res.cloudinary.com/dzh3r6r4a/video/upload/v1745861942/491929661_9337889642999470_4121538478128555865_n_xu1she.mp4"
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
      </div>

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

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
