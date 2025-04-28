import Image from "next/image"

export default function APropos() {
  return (
    <div className="container py-20">
      <h1 className="text-center">À propos de Simply Barry</h1>

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="md:w-1/2">
          <h2>Notre histoire</h2>
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
        <div className="md:w-1/2 relative h-[300px] md:h-auto">
          <Image
            src="/images/about-team.png"
            alt="L'équipe Simply Barry"
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2>Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-8 rounded shadow-custom">
            <h3>Qualité</h3>
            <p>
              Nous nous engageons à fournir un travail de la plus haute qualité, en utilisant les meilleures techniques
              et équipements.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-custom">
            <h3>Respect de l'environnement</h3>
            <p>
              Nous adoptons des pratiques respectueuses de l'environnement dans tous nos services d'entretien de
              jardins.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-custom">
            <h3>Service client</h3>
            <p>
              Nous plaçons la satisfaction de nos clients au cœur de notre activité, en offrant un service personnalisé
              et attentif.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
