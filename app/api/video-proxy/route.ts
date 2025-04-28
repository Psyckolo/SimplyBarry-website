import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const cloudinaryUrl =
    "https://res.cloudinary.com/dh52kmuhc/video/upload/v1745880132/4383263-hd_1920_1080_30fps_oqnvrd.mp4"

  try {
    const response = await fetch(cloudinaryUrl)

    if (!response.ok) {
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
      },
    })
  } catch (error) {
    console.error("Erreur lors de la récupération de la vidéo:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération de la vidéo" }, { status: 500 })
  }
}
