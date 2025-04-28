"use client"

import { useState, useEffect } from "react"

interface VideoBackgroundProps {
  fallbackImage: string
}

export default function VideoBackground({ fallbackImage }: VideoBackgroundProps) {
  const [useImage, setUseImage] = useState(true)
  const videoUrl =
    "https://res.cloudinary.com/dzh3r6r4a/video/upload/v1745861942/491929661_9337889642999470_4121538478128555865_n_xu1she.mp4"

  // Essayer de charger la vidéo après le montage du composant
  useEffect(() => {
    // Créer un élément vidéo temporaire pour tester si la vidéo peut être chargée
    const testVideo = document.createElement("video")
    testVideo.muted = true
    testVideo.src = videoUrl
    testVideo.preload = "metadata"

    // Écouter l'événement loadedmetadata pour savoir si la vidéo peut être chargée
    const handleCanPlay = () => {
      setUseImage(false) // Si la vidéo peut être chargée, l'utiliser
    }

    const handleError = () => {
      console.error("Erreur lors du chargement de la vidéo, utilisation de l'image de secours")
      setUseImage(true) // En cas d'erreur, utiliser l'image
    }

    testVideo.addEventListener("loadedmetadata", handleCanPlay)
    testVideo.addEventListener("error", handleError)

    // Nettoyer les écouteurs d'événements
    return () => {
      testVideo.removeEventListener("loadedmetadata", handleCanPlay)
      testVideo.removeEventListener("error", handleError)
      testVideo.src = ""
      testVideo.load()
    }
  }, [videoUrl])

  if (useImage) {
    // Afficher l'image de secours si la vidéo ne peut pas être chargée
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${fallbackImage}')` }}
        aria-label="Image d'arrière-plan de jardin"
      />
    )
  }

  // Afficher la vidéo si elle peut être chargée
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoUrl} type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>
    </div>
  )
}
