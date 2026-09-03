const supportPoints = [
  "Persönliche Beratung",
  "Unterstützung bei Fragen",
  "Transparente Kommunikation",
  "Fester Ansprechpartner",
];

export default function ForRelatives() {
  return (
    <section
      id="angehoerige"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Text */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Für Angehörige
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            Auch Angehörige brauchen Unterstützung.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Eine intensive Pflegesituation kann für Familien eine große
            Herausforderung sein. Wir möchten Sie nicht nur bei der
            pflegerischen Versorgung unterstützen, sondern auch als
            verlässlicher Ansprechpartner für Ihre Fragen und Anliegen
            da sein.
          </p>

          {/* Support points */}
          <ul className="mt-8 space-y-4">
            {supportPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-gray-700"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--color-green)/10 text-sm font-bold text-(--color-green)"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#kontakt"
            className="mt-8 inline-flex rounded-full bg-(--color-navy) px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
          >
            Gespräch vereinbaren
          </a>
        </div>

        {/* Image placeholder */}
        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-3xl bg-gray-200">
            <div className="flex h-full items-center justify-center text-gray-500">
              Angehörige Image
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}