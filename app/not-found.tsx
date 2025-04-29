import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">404 - Page non trouvée</h1>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  )
}
