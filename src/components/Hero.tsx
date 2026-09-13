function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:text-base"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src="/hero-image.png"
          alt="Illustration of a layered development stack made of frontend, backend, and database blocks"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  )
}

export default Hero
