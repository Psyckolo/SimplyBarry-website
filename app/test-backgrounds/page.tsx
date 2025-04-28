import Link from "next/link"

export default function TestBackgrounds() {
  // Liste des images à tester comme arrière-plans
  const imagesToTest = [
    "/images/hero-garden.png",
    "/images/service-tonte.png",
    "/images/service-haies.png",
    "/images/service-elagage.png",
  ]

  return (
    <div className="container py-20">
      <h1 className="text-center mb-10">Test des arrière-plans CSS</h1>

      <div className="grid grid-cols-1 gap-8">
        {imagesToTest.map((src, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="mb-4">Arrière-plan: {src}</h2>
            <div className="bg-gray-100 p-2 rounded mb-4">
              <code>backgroundImage: url('{src}')</code>
            </div>
            <div
              className="h-[300px] relative rounded flex items-center justify-center"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black bg-opacity-50 text-white p-4 rounded">Texte sur l'arrière-plan</div>
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
