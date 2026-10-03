const benefits = [
    {
        title: "Qualifiziertes Fachpersonal",
        description: "Unser erfahrenes und qualifiziertes Pflegepersonal steht Ihnen mit fachlicher Kompetenz und persönlicher Betreuung zur Seite.",
        img: "./img/female-assistant-nursing-home-helping-old-man-with-crutches-use-his-mobile-phone.jpg",
        img_desc: "female-assistant-nursing-home-helping-old-man-with-crutches-use-his-mobile-phone",
        position: 1
    },
    {
        title: "Individuelle Betreuung",
        description: "Jeder Mensch hat unterschiedliche Bedürfnisse. Deshalb wird unsere Pflege individuell auf die persönliche Situation unserer Patienten abgestimmt.",
        img: "./img/nurse-from-hospital-ward-taking-care-sick-patient-fixing-bed-comfort-african-american-doctor-checking-symptoms-ill-old-man-with-nasal-oxygen-tube-oximeter.jpg",
        img_desc: "nurse-from-hospital-ward-taking-care-sick-patient-fixing-bed-comfort-african-american-doctor-checking-symptoms-ill-old-man-with-nasal-oxygen-tube-oximeter",
        position: 1
    },
    {
        title: "Rund um die Uhr",
        description: "Wir bieten professionelle Unterstützung und intensive pflegerische Versorgung rund um die Uhr.",
        img: "./img/senior-woman-looking-smiling-female-nurse-with-wheelchair.jpg",
        img_desc: "senior-woman-looking-smiling-female-nurse-with-wheelchair",
        position: 1
    },
];

export default function Benefits(){
    return (
        <section id="ueber-uns" className="bg-white">

            <div className="mx-auto max-w-6xl px-6 pt-20 lg:pt-28 text-center">
                <p className="text-xl font-semibold uppercase tracking-wider text-(--color-green)">
                Über uns
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
                Pflege, die den Menschen in den Mittelpunkt stellt.
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                    Herzenswerk steht für eine individuelle und professionelle
                    Versorgung von Menschen mit intensivem pflegerischem
                    Unterstützungsbedarf.
                </p>
            </div>
          
            <div className="mx-auto grid max-w-6xl gap-6 px-6 pt-6 pb-16 md:grid-cols-3">
                {benefits.map((benefit) => (
                    <article key={benefit.title} className="rounded-3xl border border-gray-100 bg-(--color-background) p-8">
                        {/* { if benefit.position == 1 : } */}
                        <img src={benefit.img} alt="{benefit.img_desc}" className="mb-4 rounded-3xl" />
                        <h2 className="text-xl font-semibold text-(--color-navy)">{benefit.title}</h2>
                        <p className="mt-4 leading-7 text-gray-600">{benefit.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}