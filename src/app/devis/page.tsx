export default function Devis() {
  return (
    <div className="container py-20">
      <h1 className="text-center">Demande de devis</h1>
      <p className="text-center mb-10">
        Remplissez le formulaire ci-dessous pour recevoir un devis gratuit et sans engagement.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Nom complet
          </label>
          <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" required />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" required />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 font-semibold">
            Téléphone
          </label>
          <input type="tel" id="phone" className="w-full p-3 border border-gray-300 rounded" required />
        </div>

        <div className="mb-6">
          <label htmlFor="service" className="block mb-2 font-semibold">
            Service souhaité
          </label>
          <select id="service" className="w-full p-3 border border-gray-300 rounded" required>
            <option value="">Sélectionnez un service</option>
            <option value="tonte">Tonte de pelouse</option>
            <option value="haies">Taille de haies</option>
            <option value="elagage">Élagage et abattage</option>
            <option value="autre">Autre (précisez)</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-semibold">
            Votre message
          </label>
          <textarea id="message" rows={6} className="w-full p-3 border border-gray-300 rounded" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Envoyer ma demande
        </button>
      </form>
    </div>
  )
}
