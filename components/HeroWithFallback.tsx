"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeroWithFallback() {
  const [backgroundImage, setBackgroundImage] = useState("/images/fallback-hero.png")
  const [isLoading, setIsLoading] = useState(true)

  // Vérifier si l'image principale existe, sinon utiliser des alternatives
  useEffect(() => {
    const checkImage = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src = url
      })
    }

    const tryImages = async () => {
      const images = [
        "/images/hero-garden.png",
        "/images/service-tonte.png",
        "/images/service-haies.png",
        "/images/service-elagage.png",
        "/images/fallback-hero.png", // Image SVG de secours
      ]

      for (const img of images) {
        if (await checkImage(img)) {
          setBackgroundImage(img)
          setIsLoading(false)
          return
        }
      }

      // Si même l'image SVG ne fonctionne pas, utiliser une couleur de fond
      setBackgroundImage("")
      setIsLoading(false)
    }

    tryImages()
  }, [])

  return (
    <section
      className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden"
      style={{
        backgroundColor: "#4CAF50", // Couleur de fond par défaut
        ...(backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {}),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement...</div>
        </div>
      )}

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
