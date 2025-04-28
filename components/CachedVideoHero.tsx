"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function CachedVideoHero() {
  const [videoBlob, setVideoBlob] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const cloudinaryUrl =
    "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4"

  useEffect(() => {
    const fetchAndCacheVideo = async () => {
      try {
        // Vérifier si la vidéo est déjà en cache dans sessionStorage
        const cachedVideo = sessionStorage.getItem("cachedGardenVideo")

        if (cachedVideo) {
          console.log("Utilisation de la vidéo en cache")
          setVideoBlob(cachedVideo)
          setIsLoading(false)
          return
        }

        // Sinon, télécharger la vidéo
        console.log("Téléchargement de la vidéo...")
        const response = await fetch(cloudinaryUrl)

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`)
        }

        const videoData = await response.blob()
        const videoUrl = URL.createObjectURL(videoData)

        // Mettre en cache dans sessionStorage
        sessionStorage.setItem("cachedGardenVideo", videoUrl)

        setVideoBlob(videoUrl)
      } catch (error) {
        console.error("Erreur lors du téléchargement de la vidéo:", error)
        setVideoError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAndCacheVideo()

    // Nettoyer l'URL de l'objet lors du démontage du composant
    return () => {
      if (videoBlob) {
        URL.revokeObjectURL(videoBlob)
      }
    }
  }, [cloudinaryUrl])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement de la vidéo...</div>
        </div>
      )}

      {/* Vidéo en arrière-plan ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {videoBlob && !videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src={videoBlob} type="video/mp4" />
          </video>
        ) : (
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
