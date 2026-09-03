const benefits = [
    {
        title: "Qualifiziertes Fachpersonal",
        description: "Unser erfahrenes und qualifiziertes Pflegepersonal steht Ihnen mit fachlicher Kompetenz und persönlicher Betreuung zur Seite.",
    },
    {
        title: "Individuelle Betreuung",
        description: "Jeder Mensch hat unterschiedliche Bedürfnisse. Deshalb wird unsere Pflege individuell auf die persönliche Situation unserer Patienten abgestimmt.",
    },
    {
        title: "Rund um die Uhr",
        description: "Wir bieten professionelle Unterstützung und intensive pflegerische Versorgung rund um die Uhr.",
    },
];

export default function Benefits(){
    return (
        <section className="bg-white">
            <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
                {benefits.map((benefit) => (
                    <article key={benefit.title} className="rounded-3xl border border-gray-100 bg-(--color-background) p-8">
                        <h2 className="text-xl font-semibold text-(--color-navy)">{benefit.title}</h2>
                        <p className="mt-4 leading-7 text-gray-600">{benefit.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}