import Link from "next/link"
import PageLayout from "@/components/PageLayout"

export default function NotFound() {
  return (
    <PageLayout>
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">404 - Page non trouvée</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </PageLayout>
  )
}
