import PageLayout from "@/components/PageLayout"

export default function PolitiqueConfidentialite() {
  return (
    <PageLayout>
      <h1 className="text-center mb-8">Politique de Confidentialité</h1>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl text-left mb-4">Collecte des données personnelles</h2>
        <p className="mb-6">
          Simply Barry collecte des données personnelles lorsque vous utilisez notre formulaire de contact ou de demande
          de devis. Ces données peuvent inclure votre nom, adresse email, numéro de téléphone et toute autre information
          que vous nous communiquez volontairement.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Utilisation des données</h2>
        <p className="mb-6">
          Les données collectées sont utilisées uniquement pour répondre à vos demandes, vous fournir nos services et
          améliorer votre expérience sur notre site. Nous ne partageons pas vos données avec des tiers sans votre
          consentement explicite, sauf si la loi nous y oblige.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Cookies</h2>
        <p className="mb-6">
          Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre
          navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Vos droits</h2>
        <p className="mb-6">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de
          rectification, d'effacement et de limitation du traitement de vos données. Pour exercer ces droits, veuillez
          nous contacter à l'adresse email suivante : contact@simplybarry.be.
        </p>

        <h2 className="text-xl sm:text-2xl text-left mb-4">Modifications</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications
          entreront en vigueur dès leur publication sur ce site.
        </p>
      </div>
    </PageLayout>
  )
}
