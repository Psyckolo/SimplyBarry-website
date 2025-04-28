import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-backgroundDark text-white pt-16 pb-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="footer-about">
            <Image src="/images/logo.jpg" alt="Simply Barry Logo" width={150} height={150} className="h-24 w-auto" />
            <p className="mt-4">Votre spécialiste de l'entretien de jardins en Belgique</p>
          </div>
          <div className="footer-contact">
            <h4 className="text-xl mb-5">Contactez-nous</h4>
            <p>Adresse: 15 Rue des Jardins, 1000 Bruxelles</p>
            <p>
              Téléphone: <a href="tel:+32470123456">+32 470 12 34 56</a>
            </p>
            <p>
              Email: <a href="mailto:contact@simplybarry.be">contact@simplybarry.be</a>
            </p>
          </div>
          <div className="footer-links">
            <h4 className="text-xl mb-5">Liens rapides</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <Link href="/">Accueil</Link>
              </li>
              <li className="mb-2.5">
                <Link href="/services">Services</Link>
              </li>
              <li className="mb-2.5">
                <Link href="/realisations">Réalisations</Link>
              </li>
              <li className="mb-2.5">
                <Link href="/devis">Devis</Link>
              </li>
              <li className="mb-2.5">
                <Link href="/a-propos">À propos</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4 className="text-xl mb-5">Suivez-nous</h4>
            <a
              href="https://www.facebook.com/profile.php?id=61550934345100"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 mb-4"
            >
              <Image src="/images/icon-facebook.png" alt="Facebook" width={24} height={24} /> Facebook
            </a>
          </div>
        </div>
        <div className="border-t border-white border-opacity-10 pt-5 flex justify-between flex-wrap md:flex-nowrap">
          <p>&copy; 2025 Simply Barry. Tous droits réservés.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
