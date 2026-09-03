type ProcessStep = {
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Kontakt aufnehmen",
    description:
      "Sie nehmen unverbindlich Kontakt mit uns auf und schildern uns Ihre persönliche Situation.",
  },
  {
    title: "Beratungsgespräch",
    description:
      "Wir besprechen gemeinsam Ihren individuellen Pflege- und Unterstützungsbedarf.",
  },
  {
    title: "Individuelles Pflegekonzept",
    description:
      "Auf Grundlage Ihrer Bedürfnisse entwickeln wir ein individuelles Konzept für die Versorgung.",
  },
  {
    title: "Start der Versorgung",
    description:
      "Unser qualifiziertes Pflegeteam übernimmt die vereinbarte Versorgung und begleitet Sie von Anfang an.",
  },
  {
    title: "Kontinuierliche Betreuung",
    description:
      "Auch nach dem Start bleiben wir an Ihrer Seite und passen die Versorgung bei Bedarf an.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="bg-(--color-background)">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Unser Ablauf
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            So beginnt unsere Zusammenarbeit.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Von der ersten Kontaktaufnahme bis zur kontinuierlichen Betreuung
            begleiten wir Sie persönlich und zuverlässig.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex gap-6 border-b border-gray-200 py-8 first:pt-0 last:border-b-0"
            >
              {/* Number */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--color-navy) text-sm font-bold text-white"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-(--color-navy)">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}