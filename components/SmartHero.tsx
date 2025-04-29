"use client"

import { useState, useEffect } from "react"
import ProductionYouTubeBackground from "./ProductionYouTubeBackground"
import FallbackHero from "./FallbackHero"

export default function SmartHero() {
  const [useYouTube, setUseYouTube] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Vérifier si l'API YouTube est accessible
    const checkYouTubeAPI = async () => {
      try {
        const response = await fetch("https://www.youtube.com/iframe_api", {
          method: "HEAD",
          mode: "no-cors", // Contourne les restrictions CORS pour la vérification
        })

        // Si nous arrivons ici, c'est que la requête n'a pas échoué
        setUseYouTube(true)
      } catch (error) {
        console.error("L'API YouTube n'est pas accessible:", error)
        setUseYouTube(false)
      }
    }

    checkYouTubeAPI()
  }, [])

  // Pendant le rendu côté serveur ou si le client n'est pas encore détecté, utiliser la solution de secours
  if (!isClient) {
    return <FallbackHero />
  }

  // Une fois côté client, utiliser YouTube si possible, sinon la solution de secours
  return useYouTube ? <ProductionYouTubeBackground /> : <FallbackHero />
}
