"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const isMounted = useRef(true)

  // Gestion du chargement de la vidéo
  useEffect(() => {
    // Fonction pour tenter de lire la vidéo
    const playVideo = async () => {
      if (videoRef.current && isVideoLoaded && isMounted.current) {
        try {
          // Attendre que la vidéo soit prête à être lue
          if (videoRef.current.readyState >= 2) {
            await videoRef.current.play()
          } else {
            // Si la vidéo n'est pas prête, attendre l'événement canplay
            videoRef.current.addEventListener(
              "canplay",
              async () => {
                if (isMounted.current && videoRef.current) {
                  try {
                    await videoRef.current.play()
                  } catch (error) {
                    console.error("Erreur lors de la lecture de la vidéo après canplay:", error)
                    if (isMounted.current) setVideoError(true)
                  }
                }
              },
              { once: true },
            )
          }
        } catch (error) {
          console.error("Erreur de lecture automatique de la vidéo:", error)
          if (isMounted.current) setVideoError(true)
        }
      }
    }

    if (isVideoLoaded) {
      playVideo()
    }

    // Nettoyage lors du démontage du composant
    return () => {
      isMounted.current = false
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.src = ""
        videoRef.current.load()
      }
    }
  }, [isVideoLoaded])

  // Gestionnaire d'événements pour le chargement de la vidéo
  const handleVideoLoaded = () => {
    if (isMounted.current) {
      setIsVideoLoaded(true)
    }
  }

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Vidéo en arrière-plan ou image de secours si erreur */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            poster="/images/service-tonte.png"
            onError={() => setVideoError(true)}
            onLoadedData={handleVideoLoaded}
            preload="auto"
          >
            <source src="/videos/garden-background.mp4" type="video/mp4" />
            <source src="/videos/garden-background.webm" type="video/webm" />
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        ) : (
          // Image de secours en cas d'erreur de vidéo
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/service-tonte.png')" }}
            aria-label="Image d'arrière-plan de jardin"
          ></div>
        )}
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
