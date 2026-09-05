export default function ContactCTA() {
  return (
    <section id="kontakt" className="bg-(--color-navy)">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          {/* Text */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
              Kontakt
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Wir sind für Sie da.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Haben Sie Fragen oder benötigen Sie Unterstützung?
              Wir beraten Sie gerne persönlich und unverbindlich.
            </p>
          </div>

          {/* Button */}
          <a
            href="mailto:info@herzenswerk-pflege.de"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 font-semibold text-(--color-navy) transition hover:bg-gray-100"
          >
            Jetzt Kontakt aufnehmen
          </a>

        </div>
      </div>
    </section>
  );
}