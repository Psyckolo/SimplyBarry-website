import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src="/logo.jpg" alt="Simply Barry" width={180} height={180} className="h-14 w-auto" />
            </div>
            <p className="mb-4 text-gray-700">
              Services professionnels d'entretien de jardin pour particuliers et entreprises en Belgique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Tonte de pelouse
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Taille de haies
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Élagage et abattage d'arbres
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Entretien de parcs et jardins
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Nettoyage de massifs
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Remise en état de jardins
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#intro" className="text-gray-700 hover:text-primary transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-accent"></i>
                <span className="text-gray-700">Rue Hanigale 26, 1480 Tubize, Belgique</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2 text-accent"></i>
                <span className="text-gray-700">+32 472 07 51 63</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-accent"></i>
                <span className="text-gray-700">simplybarryg@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2 text-accent"></i>
                <span className="text-gray-700">Lun-Ven: 8h-18h, Sam: 9h-16h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Simply Barry. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
