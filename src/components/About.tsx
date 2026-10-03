import {
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Mensch im Mittelpunkt",
    description:
      "Wir richten unsere Pflege an den individuellen Bedürfnissen und der persönlichen Lebenssituation unserer Patienten aus.",
    icon: HeartHandshake,
  },
  {
    title: "Individuelle Betreuung",
    description:
      "Unsere Versorgung wird entsprechend des persönlichen Pflege- und Unterstützungsbedarfs abgestimmt.",
    icon: Users,
  },
  {
    title: "Zuverlässige Versorgung",
    description:
      "Eine strukturierte und verlässliche Betreuung bildet die Grundlage unserer täglichen Arbeit.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-(--color-background)">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* Introduction */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
              Über uns
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
              Pflege, die den Menschen in den Mittelpunkt stellt.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Herzenswerk steht für eine individuelle und professionelle
              Versorgung von Menschen mit intensivem pflegerischem
              Unterstützungsbedarf.
            </p>

            <p>
              Unser Anspruch ist es, eine zuverlässige pflegerische Begleitung
              zu ermöglichen und dabei die persönlichen Bedürfnisse,
              Gewohnheiten und die Lebenssituation jedes Menschen zu
              berücksichtigen.
            </p>

            <p>
              Dabei verstehen wir Pflege als Zusammenarbeit. Angehörige,
              behandelnde Ärzte, Therapeuten und weitere beteiligte
              Fachkräfte werden im Rahmen der Versorgung einbezogen.
            </p>
          </div>

        </div>

        {/* Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-navy)">
                  <Icon
                    size={24}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-(--color-navy)">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}