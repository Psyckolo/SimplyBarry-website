"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function FetchCheckVideoHero() {
  const [videoExists, setVideoExists] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Vérifier si le fichier vidéo existe
    const checkVideoExists = async () => {
      try {
        const response = await fetch("/videos/garden-background.mp4", { method: "HEAD" })
        if (response.ok) {
          setVideoExists(true)
        } else {
          console.error("Le fichier vidéo n'existe pas")
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du fichier vidéo:", error)
      }
    }

    checkVideoExists()
  }, [])

  useEffect(() => {
    if (!videoExists || !videoRef.current) return

    const handleCanPlay = () => {
      setVideoReady(true)
    }

    const video = videoRef.current
    video.addEventListener("canplaythrough", handleCanPlay)

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay)
    }
  }, [videoExists])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Vidéo en arrière-plan ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {videoExists ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1s ease" }}
          >
            <source src="/videos/garden-background.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Image de secours (toujours affichée, masquée si la vidéo est chargée) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-garden.png')",
            opacity: videoReady ? 0 : 1,
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
