"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Script from "next/script"

export default function ProductionYouTubeBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [playerReady, setPlayerReady] = useState(false)

  // ID de la vidéo YouTube
  const youtubeVideoId = "1KCRCED0uzE"

  useEffect(() => {
    setIsMounted(true)

    // Définir la fonction globale pour l'API YouTube
    if (typeof window !== "undefined") {
      window.onYouTubeIframeAPIReady = () => {
        setPlayerReady(true)
      }
    }

    // Masquer l'indicateur de chargement après un délai minimum
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Initialiser le lecteur YouTube une fois que l'API est chargée
  useEffect(() => {
    if (!playerReady || !isMounted) return

    let player: any

    try {
      // @ts-ignore
      player = new (window as any).YT.Player("youtube-player", {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: youtubeVideoId,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo()
            setIsLoading(false)
          },
          onError: () => {
            console.error("Erreur lors du chargement de la vidéo YouTube")
            setIsLoading(false)
          },
        },
      })
    } catch (error) {
      console.error("Erreur lors de l'initialisation du lecteur YouTube:", error)
      setIsLoading(false)
    }

    return () => {
      if (player && typeof player.destroy === "function") {
        player.destroy()
      }
    }
  }, [playerReady, isMounted, youtubeVideoId])

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Script de l'API YouTube */}
      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="beforeInteractive"
        onError={() => {
          console.error("Erreur lors du chargement de l'API YouTube")
          setIsLoading(false)
        }}
      />

      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
          <div className="text-white">Chargement de la vidéo...</div>
        </div>
      )}

      {/* Conteneur pour le lecteur YouTube */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div id="youtube-player" className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"></div>

        {/* Image de secours (toujours présente, masquée si la vidéo est chargée) */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            playerReady && !isLoading ? "opacity-0" : "opacity-100"
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
