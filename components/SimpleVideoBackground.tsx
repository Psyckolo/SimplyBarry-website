"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function SimpleVideoBackground() {
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // URL Cloudinary directe
  const videoUrl = "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745889755/4383263-hd_1920_1080_30fps_cal7hw.mp4"

  // Diaporama de secours
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const fallbackImages = ["/images/service-tonte.png", "/images/service-haies.png", "/images/service-elagage.png"]

  useEffect(() => {
    if (videoError) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fallbackImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [videoError, fallbackImages.length])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement...</div>
        </div>
      )}

      {/* Vidéo en arrière-plan ou diaporama de secours */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => {
              console.error("Erreur lors du chargement de la vidéo")
              setVideoError(true)
            }}
            onCanPlay={() => setIsLoading(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <>
            {fallbackImages.map((src, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                style={{
                  backgroundImage: `url('${src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: index === currentImageIndex ? 1 : 0,
                }}
              />
            ))}
          </>
        )}

        {/* Image de secours pendant le chargement */}
        {isLoading && (
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
