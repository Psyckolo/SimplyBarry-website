import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Configurer les polices
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Simply Barry | Entretien de jardins professionnel en Belgique",
  description:
    "Simply Barry, votre spécialiste de l'entretien de jardins en Belgique. Tonte, taille de haies, élagage et remise en état de vos espaces verts. Devis gratuit !",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
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
              telephone: "+32472075163",
              email: "simplybarryg@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Hanigale 26",
                addressLocality: "Tubize",
                postalCode: "1480",
                addressCountry: "BE",
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              priceRange: "€€",
              image: "https://www.simplybarry.be/images/logo.jpg",
              sameAs: ["https://www.facebook.com/profile.php?id=61550934345100"],
            }),
          }}
        />
      </head>
      <body className={openSans.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
