"use client"

import { useState, useEffect } from "react"

export default function CssAnimatedBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Liste des images à utiliser dans le diaporama
  const images = ["/images/service-tonte.png", "/images/service-haies.png", "/images/service-elagage.png"]

  useEffect(() => {
    // Changer d'image toutes les 5 secondes
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  )
}
