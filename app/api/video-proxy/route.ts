import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const cloudinaryUrl =
    "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4"

  try {
    // Ajouter des en-têtes spécifiques pour éviter les problèmes CORS
    const response = await fetch(cloudinaryUrl, {
      headers: {
        Origin: "https://simplybarry.be",
        Referer: "https://simplybarry.be/",
      },
    })

    if (!response.ok) {
      console.error(`Erreur lors de la récupération de la vidéo: ${response.status}`)
      return NextResponse.json(
        { error: `Erreur lors de la récupération de la vidéo: ${response.status}` },
        { status: response.status },
      )
    }

    const videoData = await response.arrayBuffer()

    return new NextResponse(videoData, {
      headers: {
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*", // Permettre l'accès depuis n'importe quel domaine
      },
    })
  } catch (error) {
    console.error("Erreur lors de la récupération de la vidéo:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération de la vidéo" }, { status: 500 })
  }
}
