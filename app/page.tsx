export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <img
        src="/logo.png"
        alt="TORQ Forged Element Logo"
        className="w-72 mx-auto drop-shadow-xl mb-6"
      />
      <h1 className="text-4xl font-extrabold text-lime-400">
        Welcome to t0rq.com
      </h1>
      <p className="text-lg text-gray-300 max-w-xl">
        TORQ Forged Element: The elemental solution for modern web creativity.
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Explore our features, learn more about us, or get in touch!
      </div>
    </section>
  )
}
