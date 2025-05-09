"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function SmartVideoHero() {
  const [videoMethod, setVideoMethod] = useState<"direct" | "proxy" | "iframe" | "youtube" | "fallback">("fallback")
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // URLs et IDs
  const cloudinaryUrl =
    "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4"
  const proxyUrl = "/api/video-proxy"
  const youtubeVideoId = "Ow7YEWRLcSw" // Remplacez par votre ID de vidéo YouTube

  useEffect(() => {
    setIsMounted(true)

    // Détecter l'environnement
    const detectEnvironment = async () => {
      try {
        // Vérifier si l'URL Cloudinary est accessible directement
        const directResponse = await fetch(cloudinaryUrl, { method: "HEAD" })
        if (directResponse.ok) {
          console.log("Méthode directe disponible")
          setVideoMethod("direct")
          setIsLoading(false)
          return
        }
      } catch (error) {
        console.log("Méthode directe non disponible")
      }

      try {
        // Vérifier si le proxy API est accessible
        const proxyResponse = await fetch(proxyUrl, { method: "HEAD" })
        if (proxyResponse.ok) {
          console.log("Méthode proxy disponible")
          setVideoMethod("proxy")
          setIsLoading(false)
          return
        }
      } catch (error) {
        console.log("Méthode proxy non disponible")
      }

      // Par défaut, utiliser l'iframe Cloudinary en production et YouTube comme solution de secours
      const hostname = window.location.hostname
      const isProd = !hostname.includes("localhost") && !hostname.includes("vercel.app")

      if (isProd) {
        console.log("Utilisation de l'iframe Cloudinary en production")
        setVideoMethod("iframe")
      } else {
        console.log("Utilisation de YouTube comme solution de secours")
        setVideoMethod("youtube")
      }

      // Simuler un délai de chargement
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    detectEnvironment()
  }, [cloudinaryUrl, proxyUrl])

  // Rendu conditionnel en fonction de la méthode détectée
  const renderVideoBackground = () => {
    switch (videoMethod) {
      case "direct":
        return (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            crossOrigin="anonymous"
          >
            <source src={cloudinaryUrl} type="video/mp4" />
          </video>
        )

      case "proxy":
        return (
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={proxyUrl} type="video/mp4" />
          </video>
        )

      case "iframe":
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              src={`https://player.cloudinary.com/embed/?public_id=4383263-hd_1920_1080_30fps_oqnvrd&cloud_name=dh52kmuhc&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controls]=false&source[source_types][0]=mp4`}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"
              style={{ border: "none", pointerEvents: "none" }}
            ></iframe>
          </div>
        )

      case "youtube":
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`}
              title="Arrière-plan vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"
              style={{ pointerEvents: "none" }}
            ></iframe>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement de la vidéo...</div>
        </div>
      )}

      {/* Arrière-plan vidéo ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {isMounted && !isLoading && renderVideoBackground()}

        {/* Image de secours (toujours présente, masquée si la vidéo est chargée) */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            isMounted && !isLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/images/hero-garden.png')" }}
        />
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
