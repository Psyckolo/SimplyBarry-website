import Link from "next/link"

export default function TestImages() {
  // Liste des images à tester
  const imagesToTest = [
    "/images/hero-garden.png",
    "/images/service-tonte.png",
    "/images/service-haies.png",
    "/images/service-elagage.png",
    "/images/logo.jpg",
  ]

  return (
    <div className="container py-20">
      <h1 className="text-center mb-10">Test des images</h1>

      <div className="grid grid-cols-1 gap-8">
        {imagesToTest.map((src, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="mb-4">Image: {src}</h2>
            <div className="bg-gray-100 p-2 rounded mb-4">
              <code>src="{src}"</code>
            </div>
            <div className="h-[300px] relative bg-gray-200 rounded">
              <img
                src={src || "/placeholder.svg"}
                alt={`Test image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
