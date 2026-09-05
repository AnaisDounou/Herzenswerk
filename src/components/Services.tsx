import {
  Clock3,
  GraduationCap,
  HeartPulse,
  Dna,
  Stethoscope,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "Intensivpflege",
    description: "Individuelle ambulante Intensivpflege mit fachlicher Kompetenz und persönlicher Betreuung.",
    icon: HeartPulse,
  },
  {
    title: "Beatmungspflege",
    description: "Professionelle Betreuung von Menschen mit invasiver oder nicht-invasiver Beatmung.",
    icon: Dna,
  },
  {
    title: "24-Stunden-Pflege",
    description: "Eine kontinuierliche pflegerische Versorgung, abgestimmt auf die individuellen Bedürfnisse.",
    icon: Clock3,
  },
  {
    title: "Tracheostomapflege",
    description: "Fachgerechte Versorgung und Betreuung von Menschen mit einem Tracheostoma.",
    icon: Stethoscope,
  },
  {
    title: "Beratung & Schulung",
    description: "Beratung und Schulung für Patienten und Angehörige im Umgang mit der individuellen Pflegesituation.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-(--color-background)">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Unsere Leistungen
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            Professionelle Pflege, individuell auf Ihre Bedürfnisse abgestimmt.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Wir begleiten unsere Patienten mit fachlicher Kompetenz,
            Menschlichkeit und einer auf die persönliche Situation
            abgestimmten Versorgung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-green)/10">
                <service.icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-(--color-green)"
                    aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-(--color-navy)">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <a
                href="#kontakt"
                className="mt-6 inline-flex font-semibold text-(--color-navy) transition group-hover:gap-2"
              >
                Mehr erfahren
                <span aria-hidden="true">&nbsp;→</span>
              </a>
            </article>
          ))}

        </div>

        <div className="mt-10">
          <a
            href="#kontakt"
            className="inline-flex rounded-full bg-(--color-navy) px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
          >
            Alle Leistungen ansehen
          </a>
        </div>

      </div>
    </section>
  );
}