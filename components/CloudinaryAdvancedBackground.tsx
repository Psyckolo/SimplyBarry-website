"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Script from "next/script"

export default function CloudinaryAdvancedBackground() {
  const [isLoading, setIsLoading] = useState(true)
  const [cloudinaryReady, setCloudinaryReady] = useState(false)
  const [playerError, setPlayerError] = useState(false)

  // ID Cloudinary et public ID extraits de l'URL
  const cloudinaryId = "dh52kmuhc"
  const publicId = "4383263-hd_1920_1080_30fps_cal7hw"

  useEffect(() => {
    // Définir la fonction globale pour l'API Cloudinary
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.cloudinaryOnReady = () => {
        setCloudinaryReady(true)
      }
    }

    // Masquer l'indicateur de chargement après un délai minimum
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Initialiser le lecteur Cloudinary une fois que l'API est chargée
  useEffect(() => {
    if (!cloudinaryReady) return

    try {
      // @ts-ignore
      const player = window.cloudinary.createVideoPlayer("cloudinary-player", {
        cloud_name: cloudinaryId,
        publicId: publicId,
        fluid: true,
        controls: false,
        autoplay: true,
        loop: true,
        muted: true,
        preload: "auto",
        transformation: [{ width: 1920, crop: "scale" }],
      })

      player.on("playing", () => {
        setIsLoading(false)
      })

      player.on("error", () => {
        console.error("Erreur lors du chargement de la vidéo Cloudinary")
        setPlayerError(true)
        setIsLoading(false)
      })
    } catch (error) {
      console.error("Erreur lors de l'initialisation du lecteur Cloudinary:", error)
      setPlayerError(true)
      setIsLoading(false)
    }
  }, [cloudinaryReady, cloudinaryId, publicId])

  // Diaporama de secours
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const fallbackImages = ["/images/service-tonte.png", "/images/service-haies.png", "/images/service-elagage.png"]

  useEffect(() => {
    if (playerError) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fallbackImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [playerError, fallbackImages.length])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Script de l'API Cloudinary */}
      <Script
        src="https://unpkg.com/cloudinary-video-player@1.9.9/dist/cld-video-player.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // @ts-ignore
          if (typeof window.cloudinaryOnReady === "function") {
            // @ts-ignore
            window.cloudinaryOnReady()
          }
        }}
        onError={() => {
          console.error("Erreur lors du chargement de l'API Cloudinary")
          setPlayerError(true)
          setIsLoading(false)
        }}
      />
      <Script
        src="https://unpkg.com/cloudinary-video-player@1.9.9/dist/cld-video-player.min.css"
        strategy="beforeInteractive"
      />

      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement de la vidéo...</div>
        </div>
      )}

      {/* Conteneur pour le lecteur Cloudinary */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!playerError && <div id="cloudinary-player" className="absolute inset-0 w-full h-full"></div>}

        {/* Diaporama de secours en cas d'erreur */}
        {playerError && (
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
