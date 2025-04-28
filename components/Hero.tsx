"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Hero() {
  // État pour suivre si nous utilisons l'image de secours
  const [useFallback, setUseFallback] = useState(false)

  return (
    <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative flex items-center text-white overflow-hidden">
      {/* Arrière-plan : vidéo ou image de secours */}
      <div className="absolute inset-0 w-full h-full">
        {!useFallback ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/service-tonte.png"
            onError={() => setUseFallback(true)}
          >
            <source src="/videos/garden-background.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        ) : (
          <div className="absolute inset-0">
            <Image
              src="/images/service-tonte.png"
              alt="Arrière-plan jardin"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
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
