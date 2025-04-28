"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function TestVideos() {
  const [testResults, setTestResults] = useState<Record<string, boolean | null>>({})
  const [loading, setLoading] = useState(true)

  const videosToTest = [
    "/videos/garden-background.mp4",
    "/videos/garden-background.webm",
    "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4",
    "/api/video-proxy",
  ]

  useEffect(() => {
    const checkVideos = async () => {
      const results: Record<string, boolean | null> = {}

      for (const videoSrc of videosToTest) {
        try {
          // Vérifier si le fichier existe
          const response = await fetch(videoSrc, { method: "HEAD" })
          results[videoSrc] = response.ok
        } catch (error) {
          console.error(`Erreur lors de la vérification de ${videoSrc}:`, error)
          results[videoSrc] = false
        }
      }

      setTestResults(results)
      setLoading(false)
    }

    checkVideos()
  }, [])

  return (
    <div className="container py-20">
      <h1 className="text-center mb-10">Test des vidéos</h1>

      {loading ? (
        <div className="text-center">Vérification des vidéos en cours...</div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {videosToTest.map((src, index) => (
            <div key={index} className="border p-4 rounded">
              <h2 className="mb-4">Vidéo: {src}</h2>
              <div className="bg-gray-100 p-2 rounded mb-4">
                <code>src="{src}"</code>
              </div>
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded ${
                    testResults[src] ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {testResults[src] ? "Fichier accessible" : "Fichier inaccessible"}
                </span>
              </div>
              <div className="bg-black p-2 rounded">
                <video controls className="w-full h-auto max-h-[300px]">
                  <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link href="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
