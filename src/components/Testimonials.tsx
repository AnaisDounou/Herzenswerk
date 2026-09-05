type Testimonial = {
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Hier steht später ein echtes Zitat eines Patienten oder Angehörigen.",
    author: "Platzhalter – Patient / Angehöriger",
  },
  {
    quote:
      "Hier steht später ein echtes Zitat über die persönliche Betreuung und Zusammenarbeit.",
    author: "Platzhalter – Angehöriger",
  },
  {
    quote:
      "Hier steht später ein echtes Zitat über die Qualität und Zuverlässigkeit der Versorgung.",
    author: "Platzhalter – Patient / Angehöriger",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-(--color-background)">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Stimmen unserer Patienten und Angehörigen
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            Vertrauen entsteht durch persönliche Erfahrungen.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Echte Erfahrungen können Ihnen einen persönlichen Eindruck von
            unserer Arbeit und unserer Betreuung vermitteln.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-3xl border border-gray-100 bg-white p-8"
            >
              {/* Stars */}
              <div
                className="text-lg tracking-widest text-(--color-green)"
                aria-label="Bewertung"
              >
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote className="mt-6 text-lg leading-8 text-gray-700">
                “{testimonial.quote}”
              </blockquote>

              {/* Author */}
              <figcaption className="mt-6 text-sm font-semibold text-(--color-navy)">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}

        </div>

      </div>
    </section>
  );
}