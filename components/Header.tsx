"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Fermer le menu lorsque l'utilisateur clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`bg-white fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="logo transition-transform duration-300 hover:scale-105 z-20">
          <Image src="/logo.jpg" alt="Simply Barry" width={180} height={180} className="h-12 sm:h-14 md:h-16 w-auto" />
        </Link>

        {/* Bouton menu hamburger - visible uniquement sur mobile */}
        <button
          className="block lg:hidden z-20 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu principal"
        >
          <div className="w-6 flex flex-col justify-center items-center">
            <span
              className={`block w-full h-0.5 bg-textColor my-1 transition-all duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-textColor my-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-textColor my-1 transition-all duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation */}
        <nav className={`w-full lg:w-auto order-last lg:order-none ${isMenuOpen ? "block" : "hidden lg:block"}`}>
          <ul className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0 pb-4 lg:pb-0">
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#intro"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                À propos
              </a>
            </li>
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#services"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Services
              </a>
            </li>
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#testimonials"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Témoignages
              </a>
            </li>
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#faq"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                FAQ
              </a>
            </li>
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#contact"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
            <li className="py-2 lg:py-0 lg:px-4">
              <a
                href="#contact"
                className="btn bg-primary hover:bg-secondary text-white px-6 py-2 rounded-md transition-all"
                onClick={handleLinkClick}
              >
                Devis gratuit
              </a>
            </li>
          </ul>
        </nav>

        {/* Numéro de téléphone - caché sur mobile quand le menu est ouvert */}
        <div className={`contact-header lg:block ${isMenuOpen ? "hidden" : "block"}`}>
          <a href="tel:+32472075163" className="text-primary font-bold text-base sm:text-lg">
            +32 472 07 51 63
          </a>
        </div>
      </div>
    </header>
  )
}
