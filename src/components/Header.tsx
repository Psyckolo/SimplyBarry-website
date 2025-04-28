"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-white fixed w-full z-10 top-0 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.1)]" : "shadow-custom"
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="logo transition-transform duration-300 hover:scale-105">
          <Image src="/images/logo.jpg" alt="Simply Barry Logo" width={180} height={180} className="h-16 w-auto" />
        </Link>
        <nav id="main-nav">
          <button
            id="menu-toggle"
            className="hidden md:block w-[30px] h-[25px] relative bg-none border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu principal"
          >
            <span className="block w-full h-[3px] bg-textColor my-[5px] transition-all duration-300"></span>
            <span className="block w-full h-[3px] bg-textColor my-[5px] transition-all duration-300"></span>
            <span className="block w-full h-[3px] bg-textColor my-[5px] transition-all duration-300"></span>
          </button>
          <ul
            className={`nav-links flex list-none m-0 p-0 md:absolute md:top-full md:left-0 md:w-full md:bg-white md:flex-col md:py-5 md:shadow-[0_5px_10px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              isMenuOpen
                ? "md:translate-y-0 md:opacity-100 md:visible"
                : "md:translate-y-[-150%] md:opacity-0 md:invisible"
            }`}
          >
            <li className="mx-4 md:my-2.5 md:mx-0 md:text-center">
              <Link href="/" className="text-textColor font-semibold hover:text-primary">
                Accueil
              </Link>
            </li>
            <li className="mx-4 md:my-2.5 md:mx-0 md:text-center">
              <Link href="/services" className="text-textColor font-semibold hover:text-primary">
                Nos Services
              </Link>
            </li>
            <li className="mx-4 md:my-2.5 md:mx-0 md:text-center">
              <Link href="/realisations" className="text-textColor font-semibold hover:text-primary">
                Réalisations
              </Link>
            </li>
            <li className="mx-4 md:my-2.5 md:mx-0 md:text-center">
              <Link href="/a-propos" className="text-textColor font-semibold hover:text-primary">
                À propos
              </Link>
            </li>
            <li className="mx-4 md:my-2.5 md:mx-0 md:text-center cta-nav">
              <Link href="/devis" className="btn">
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contact-header">
          <a href="tel:+32470123456" className="text-primary font-bold text-lg">
            +32 470 12 34 56
          </a>
        </div>
      </div>
    </header>
  )
}
