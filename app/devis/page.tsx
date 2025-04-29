import PageLayout from "@/components/PageLayout"

export default function Devis() {
  return (
    <PageLayout>
      <h1 className="text-center mb-4 sm:mb-6">Demande de devis</h1>
      <p className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
        Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et sans engagement.
      </p>

      <form className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded shadow-custom">
        <div className="mb-5 sm:mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold text-sm sm:text-base">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
            required
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
            required
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label htmlFor="phone" className="block mb-2 font-semibold text-sm sm:text-base">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
            required
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label htmlFor="service" className="block mb-2 font-semibold text-sm sm:text-base">
            Service souhaité
          </label>
          <select
            id="service"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
            required
          >
            <option value="">Sélectionnez un service</option>
            <option value="tonte">Tonte de pelouse</option>
            <option value="haies">Taille de haies</option>
            <option value="elagage">Élagage et abattage</option>
            <option value="autre">Autre (précisez)</option>
          </select>
        </div>

        <div className="mb-5 sm:mb-6">
          <label htmlFor="message" className="block mb-2 font-semibold text-sm sm:text-base">
            Votre message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Envoyer ma demande
        </button>
      </form>
    </PageLayout>
  )
}
