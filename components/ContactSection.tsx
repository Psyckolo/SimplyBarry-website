"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Le nom est requis"
    if (!formData.email.trim()) newErrors.email = "L'email est requis"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide"
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
    if (!formData.service) newErrors.service = "Veuillez sélectionner un service"
    if (!formData.message.trim()) newErrors.message = "Le message est requis"
    if (!formData.consent) newErrors.consent = "Vous devez accepter les conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simuler un appel API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus({
        success: true,
        message: "Votre message a été envoyé avec succès ! Nous vous contacterons très bientôt.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        message: "",
        consent: false,
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary">
            Contactez-<span className="text-black">nous</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">Demandez un devis gratuit ou posez-nous vos questions</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 xx xx xx xx"
                  className={`w-full px-4 py-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Adresse</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Votre adresse complète"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Service souhaité</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.service ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="tonte">Tonte de pelouse</option>
                  <option value="taille">Taille de haies</option>
                  <option value="elagage">Élagage d'arbres</option>
                  <option value="abattage">Abattage d'arbres</option>
                  <option value="entretien">Entretien de parcs et jardins</option>
                  <option value="nettoyage">Nettoyage de massifs</option>
                  <option value="remise">Remise en état de jardins</option>
                  <option value="autre">Autre (précisez)</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez votre projet ou posez-nous vos questions"
                  className={`w-full px-4 py-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="mb-6 flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="mt-1"
                />
                <div>
                  <label className="text-gray-600 text-sm">
                    J'accepte que mes données soient utilisées pour me recontacter concernant ma demande.
                  </label>
                  {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                </div>
              </div>

              {submitStatus && (
                <div
                  className={`mb-6 p-3 rounded-md ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-all shadow-md disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md h-full flex flex-col">
              <h3 className="font-heading text-2xl font-bold mb-6 text-primary">Nos coordonnées</h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Adresse</h4>
                    <p className="text-gray-600">Belgique</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Téléphone</h4>
                    <p className="text-gray-600">
                      +32 XX XX XX XX
                      <br />
                      +32 XX XX XX XX (urgences)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <p className="text-gray-600">
                      contact@simplybarry.be
                      <br />
                      devis@simplybarry.be
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h00 - 18h00
                      <br />
                      Samedi: 9h00 - 16h00
                      <br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  >
                    <i className="fab fa-facebook-f text-primary"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  >
                    <i className="fab fa-instagram text-primary"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  >
                    <i className="fab fa-linkedin-in text-primary"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  >
                    <i className="fab fa-pinterest text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
