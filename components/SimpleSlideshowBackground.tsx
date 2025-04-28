"use client"

import { useState, useEffect } from "react"

export default function SimpleSlideshowBackground() {
  const [backgroundImage, setBackgroundImage] = useState("/images/service-tonte.png")
  const [isChanging, setIsChanging] = useState(false)

  // Liste des images à utiliser dans le diaporama
  const images = ["/images/service-tonte.png", "/images/service-haies.png", "/images/service-elagage.png"]

  useEffect(() => {
    let currentIndex = 0

    const changeBackground = () => {
      setIsChanging(true)

      // Attendre que la transition de fondu commence
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length
        setBackgroundImage(images[currentIndex])

        // Réinitialiser l'état de transition
        setTimeout(() => {
          setIsChanging(false)
        }, 500)
      }, 500)
    }

    // Changer d'image toutes les 5 secondes
    const interval = setInterval(changeBackground, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        opacity: isChanging ? 0.5 : 1,
      }}
    />
  )
}
