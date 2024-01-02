export default function ContactForm() {
  return (
    <form
      className="w-full"
      action="https://formspree.io/f/xdorawky"
      method="POST"
    >
      <div className="mb-6">
        <label className="block mb-2 font-semibold" htmlFor="name">
          Nom/Société*
        </label>
        <input
          className="block p-2 text-sm w-full border border-gray-300 rounded-md focus:outline-none"
          type="text"
          name="name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold" htmlFor="email">
          Adresse mail*
        </label>
        <input
          className="block p-2 text-sm w-full border border-gray-300 rounded-md focus:outline-none"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold" htmlFor="phone">
          Numéro de téléphone
        </label>
        <input
          className="block p-2 text-sm w-full border border-gray-300 rounded-md focus:outline-none"
          type="tel"
          name="phone"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Votre requête*</label>
        <textarea
          className="block p-2 text-sm w-full border border-gray-300 rounded-md focus:outline-none overflow-auto resize-none"
          rows={10}
          required
        />
      </div>
      <button className="mb-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 text-center">
        Envoyer
      </button>
    </form>
  );
}
