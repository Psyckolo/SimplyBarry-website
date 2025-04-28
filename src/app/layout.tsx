import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Ajouter ces imports pour les polices
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google"

// Configurer les polices
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Simply Barry | Entretien de jardins professionnel en Belgique",
  description:
    "Simply Barry, votre spécialiste de l'entretien de jardins en Belgique. Tonte, taille de haies, élagage et remise en état de vos espaces verts. Devis gratuit !",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Simply Barry",
              description:
                "Entreprise d'entretien de jardins en Belgique proposant des services de tonte, taille de haies, élagage et remise en état d'espaces verts.",
              url: "https://www.simplybarry.be/",
              telephone: "+32470123456",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15 Rue des Jardins",
                addressLocality: "Bruxelles",
                postalCode: "1000",
                addressCountry: "BE",
              },
              openingHours: "Mo-Fr 08:00-18:00",
              priceRange: "€€",
              image: "https://www.simplybarry.be/images/logo.png",
              sameAs: ["https://www.facebook.com/profile.php?id=61550934345100"],
            }),
          }}
        />
      </head>
      <body className={openSans.className}>
        <Header />
        <main className="pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
