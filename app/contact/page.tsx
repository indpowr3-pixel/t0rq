export default function Contact() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-lime-400">Contact</h2>
      <form className="space-y-5 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-lime-500 text-gray-900 font-bold px-6 py-2 rounded hover:bg-lime-400 transition"
        >
          Send Message
        </button>
      </form>
      <p className="text-gray-400 text-xs mt-4">
        Form not connected yet. Add backend integration or email forwarding when ready.
      </p>
    </section>
  )
}
