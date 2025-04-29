"use client"

import { useState, useEffect, useRef } from "react"

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // URL Cloudinary directe
  const videoUrl = "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745889755/4383263-hd_1920_1080_30fps_cal7hw.mp4"

  // Diaporama de secours
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const fallbackImages = [
    "https://images.unsplash.com/photo-1592329347810-574885bc0704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1636559622519-c12b3c8fb5e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ]

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
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden"
    >
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
            style={{ backgroundImage: `url('${fallbackImages[0]}')` }}
          />
        )}
      </div>

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Contenu du hero */}
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow-md">
          Entretien de jardins <span className="text-accent">professionnel</span> en Belgique
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow-sm">
          Donnez vie à votre espace vert avec Simply Barry
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold transition-all shadow-md"
          >
            Demander un devis gratuit
          </a>
          <a
            href="#services"
            className="btn bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold transition-all shadow-md"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  )
}
