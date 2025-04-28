import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-backgroundDark text-white pt-12 sm:pt-16 pb-5">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="footer-about">
            <Image
              src="/images/logo.jpg"
              alt="Simply Barry Logo"
              width={150}
              height={150}
              className="h-20 sm:h-24 w-auto"
            />
            <p className="mt-4 text-sm sm:text-base">Votre spécialiste de l'entretien de jardins en Belgique</p>
          </div>
          <div className="footer-contact">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Contactez-nous</h4>
            <p className="text-sm sm:text-base mb-2">Adresse: 15 Rue des Jardins, 1000 Bruxelles</p>
            <p className="text-sm sm:text-base mb-2">
              Téléphone:{" "}
              <a href="tel:+32470123456" className="hover:text-primary transition-colors">
                +32 470 12 34 56
              </a>
            </p>
            <p className="text-sm sm:text-base">
              Email:{" "}
              <a href="mailto:contact@simplybarry.be" className="hover:text-primary transition-colors">
                contact@simplybarry.be
              </a>
            </p>
          </div>
          <div className="footer-links">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Liens rapides</h4>
            <ul className="list-none grid grid-cols-2 sm:block">
              <li className="mb-2">
                <Link href="/" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/realisations" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/devis" className="text-sm sm:text-base hover:text-primary transition-colors">
                  Devis
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/a-propos" className="text-sm sm:text-base hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Suivez-nous</h4>
            <a
              href="https://www.facebook.com/profile.php?id=61550934345100"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 mb-4 hover:text-primary transition-colors"
            >
              <Image src="/images/icon-facebook.png" alt="Facebook" width={24} height={24} />
              <span className="text-sm sm:text-base">Facebook</span>
            </a>
          </div>
        </div>
        <div className="border-t border-white border-opacity-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center sm:text-left">&copy; 2025 Simply Barry. Tous droits réservés.</p>
          <div className="flex gap-4 sm:gap-5 text-sm">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
