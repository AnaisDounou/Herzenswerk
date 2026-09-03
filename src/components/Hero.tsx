export default function Hero() {
  return (
    <section className="bg-(--color-background)">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Text content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Ambulanter Intensivpflegedienst
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-(--color-navy) sm:text-5xl lg:text-6xl">
            Intensivpflege mit Kompetenz und Menschlichkeit
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Professionelle und individuelle Pflege für Menschen mit intensivem
            medizinischem Unterstützungsbedarf.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Wir bieten zuverlässige, qualifizierte und patientenorientierte
            Intensivpflege – damit Sie oder Ihre Angehörigen in besten Händen sind.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#leistungen"
              className="rounded-full bg-(--color-navy) px-7 py-3.5 text-center font-semibold text-white transition hover:opacity-90"
            >
              Jetzt informieren
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-(--color-navy) px-7 py-3.5 text-center font-semibold text-(--color-navy) transition hover:bg-(--color-navy) hover:text-white"
            >
              Kontakt aufnehmen
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-3xl bg-gray-200">
            <div className="flex h-full items-center justify-center text-gray-500">
              Hero Image
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}