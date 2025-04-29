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
      className={`bg-white fixed w-full z-10 top-0 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.1)]" : "shadow-custom"
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="logo transition-transform duration-300 hover:scale-105 z-20">
          <Image
            src="/images/logo.jpg"
            alt="Simply Barry Logo"
            width={180}
            height={180}
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Bouton menu hamburger - visible uniquement sur mobile */}
        <button
          className="block md:hidden z-20 p-2 focus:outline-none"
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

        {/* Numéro de téléphone - caché sur mobile quand le menu est ouvert */}
        <div className={`contact-header md:block ${isMenuOpen ? "hidden" : "block"}`}>
          <a href="tel:+32470123456" className="text-primary font-bold text-base sm:text-lg">
            +32 470 12 34 56
          </a>
        </div>

        {/* Navigation */}
        <nav className={`w-full md:w-auto order-last md:order-none ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <ul className="flex flex-col md:flex-row items-center mt-4 md:mt-0 pb-4 md:pb-0">
            <li className="py-2 md:py-0 md:px-4">
              <Link
                href="/"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Accueil
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link
                href="/services"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Nos Services
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link
                href="/realisations"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                Réalisations
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link
                href="/a-propos"
                className="text-textColor font-semibold hover:text-primary block text-center"
                onClick={handleLinkClick}
              >
                À propos
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link href="/devis" className="btn w-full md:w-auto block text-center" onClick={handleLinkClick}>
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
