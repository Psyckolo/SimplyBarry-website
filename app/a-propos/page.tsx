import Image from "next/image"
import PageLayout from "@/components/PageLayout"

export default function APropos() {
  return (
    <PageLayout>
      <h1 className="text-center mb-8 sm:mb-10">À propos de Simply Barry</h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <div className="md:w-1/2">
          <h2 className="text-left text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Notre histoire</h2>
          <p>
            Simply Barry a été fondée en 2015 avec une mission claire : offrir des services d'entretien de jardins de
            qualité supérieure en Belgique. Depuis, nous avons développé une expertise reconnue dans le domaine de
            l'aménagement paysager et de l'entretien d'espaces verts.
          </p>
          <p>
            Notre équipe est composée de professionnels passionnés qui partagent un amour pour la nature et un
            engagement envers l'excellence.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[250px] sm:h-[300px] md:h-auto rounded overflow-hidden">
          <Image
            src="/images/about-team.png"
            alt="L'équipe Simply Barry"
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">Nos valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded shadow-custom">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Qualité</h3>
            <p className="text-sm sm:text-base">
              Nous nous engageons à fournir un travail de la plus haute qualité, en utilisant les meilleures techniques
              et équipements.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded shadow-custom">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Respect de l'environnement</h3>
            <p className="text-sm sm:text-base">
              Nous adoptons des pratiques respectueuses de l'environnement dans tous nos services d'entretien de
              jardins.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded shadow-custom">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Service client</h3>
            <p className="text-sm sm:text-base">
              Nous plaçons la satisfaction de nos clients au cœur de notre activité, en offrant un service personnalisé
              et attentif.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
