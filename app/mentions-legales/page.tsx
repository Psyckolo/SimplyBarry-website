export default function MentionsLegales() {
  return (
    <div className="container py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mb-8">Mentions Légales</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded shadow-custom">
        <h2 className="text-xl sm:text-2xl text-left mb-4">Informations légales</h2>
        <p className="mb-6">
          Simply Barry est une entreprise d'entretien de jardins basée en Belgique.
          <br />
          Siège social : 15 Rue des Jardins, 1000 Bruxelles, Belgique
          <br />
          Numéro d'entreprise : BE0123456789
          <br />
          TVA : BE0123456789
          <br />
          Téléphone : +32 470 12 34 56
          <br />
          Email : contact@simplybarry.be
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Propriété intellectuelle</h2>
        <p className="mb-6">
          L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par les lois sur la propriété
          intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Responsabilité</h2>
        <p className="mb-6">
          Simply Barry s'efforce d'assurer l'exactitude des informations présentes sur ce site, mais ne peut garantir
          leur exhaustivité ou leur actualité. Simply Barry décline toute responsabilité concernant les dommages directs
          ou indirects résultant de l'accès ou de l'utilisation de ce site.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
        </p>
      </div>
    </div>
  )
}
