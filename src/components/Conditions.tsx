type Condition = {
  title: string;
  description: string;
};

const conditions: Condition[] = [
  {
    title: "Beatmung",
    description:
      "Professionelle pflegerische Versorgung für Menschen mit invasiver oder nicht-invasiver Beatmung.",
  },
  {
    title: "Tracheostoma",
    description:
      "Fachgerechte Betreuung und Versorgung von Menschen mit einem Tracheostoma.",
  },
  {
    title: "Neurologische Erkrankungen",
    description:
      "Individuelle Unterstützung bei komplexen neurologischen Erkrankungen und deren Folgen.",
  },
  {
    title: "Schwere chronische Erkrankungen",
    description:
      "Kontinuierliche pflegerische Begleitung bei langfristigem intensivmedizinischem Unterstützungsbedarf.",
  },
  {
    title: "Komplexe Pflegesituationen",
    description:
      "Individuelle Versorgung bei komplexen medizinischen und pflegerischen Anforderungen.",
  },
];

export default function Conditions() {
  return (
    <section
      id="krankheitsbilder"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Krankheitsbilder
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            Individuelle Pflege bei komplexen Krankheitsbildern.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Unsere Pflegefachkräfte begleiten Menschen mit unterschiedlichen
            intensivmedizinischen und pflegerischen Anforderungen.
          </p>
        </div>

        {/* Conditions */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {conditions.map((condition) => (
            <article
              key={condition.title}
              className="group rounded-3xl border border-gray-100 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-(--color-navy)">
                {condition.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {condition.description}
              </p>

              <a
                href="#kontakt"
                className="mt-6 inline-flex font-semibold text-(--color-navy)"
              >
                Mehr erfahren
                <span aria-hidden="true">&nbsp;→</span>
              </a>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}