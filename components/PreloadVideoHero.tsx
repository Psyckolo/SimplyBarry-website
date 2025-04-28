"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function PreloadVideoHero() {
  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Vérifier si la vidéo peut être chargée
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoReady(true)
      video.play().catch((error) => {
        console.error("Erreur lors de la lecture de la vidéo:", error)
        setVideoError(true)
      })
    }

    const handleError = () => {
      console.error("Erreur lors du chargement de la vidéo")
      setVideoError(true)
    }

    video.addEventListener("canplaythrough", handleCanPlay)
    video.addEventListener("error", handleError)

    // Précharger la vidéo
    video.load()

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Vidéo en arrière-plan ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1s ease" }}
            preload="auto"
          >
            <source src="/videos/garden-background.mp4" type="video/mp4" />
            <source src="/videos/garden-background.webm" type="video/webm" />
          </video>
        ) : null}

        {/* Image de secours (affichée pendant le chargement ou en cas d'erreur) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-garden.png')",
            opacity: videoReady && !videoError ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        />
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
