export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <section className="max-w-lg w-full p-8 rounded-2xl shadow-xl bg-black/40 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-teal-400 text-center">Welcome to t0rq</h1>
        <p className="mb-8 text-lg text-gray-200 text-center">
          Your Next.js & Tailwind CSS project is ready to go.<br />
          This is your landing page. Edit <span className="font-mono bg-gray-800 rounded px-2 py-1">app/page.tsx</span> to customize!
        </p>
        <a
          href="https://github.com/indpowr3-pixel/t0rq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-lg font-semibold shadow transition"
        >
          View on GitHub
        </a>
      </section>
    </main>
  );
}
