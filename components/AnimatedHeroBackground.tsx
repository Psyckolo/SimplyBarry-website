"use client"

import { useState, useEffect } from "react"

export default function AnimatedHeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Liste des images à utiliser dans le diaporama
  const images = ["/images/service-tonte.png", "/images/service-haies.png", "/images/service-elagage.png"]

  useEffect(() => {
    // Fonction pour passer à l'image suivante avec transition
    const rotateImages = () => {
      setIsTransitioning(true)

      // Attendre que la transition de fondu commence
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)

        // Réinitialiser l'état de transition après que la nouvelle image est chargée
        setTimeout(() => {
          setIsTransitioning(false)
        }, 500) // Durée de la transition de retour
      }, 500) // Durée de la transition de sortie
    }

    // Changer d'image toutes les 5 secondes
    const interval = setInterval(rotateImages, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: index === currentImageIndex && !isTransitioning ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
      ))}
    </div>
  )
}
