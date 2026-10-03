import Link from "next/link";
import {
  Activity,
  ClipboardCheck,
  Home,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Service = {
  title: string;
  description: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  icon: React.ElementType;
  services: Service[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "Intensivpflegeleistungen",
    description:
      "Individuelle und fachgerechte pflegerische Versorgung von Menschen mit intensivmedizinischem Unterstützungsbedarf.",
    icon: Activity,
    services: [
      {
        title: "Überwachung des Gesundheitszustandes",
        description:
          "Überwachung des Gesundheitszustandes der Patienten und sofortige Intervention bei Komplikationen.",
      },
      {
        title: "Tracheostoma und Trachealkanülen",
        description:
          "Pflege und Management von Tracheostoma und Trachealkanülen.",
      },
      {
        title: "Beatmungsgeräte",
        description:
          "Bedienung und Überwachung von Beatmungsgeräten.",
      },
      {
        title: "Inhalations- und Absauggeräte",
        description:
          "Anwendung von Inhalations- und Absauggeräten sowie Hustenassistenten.",
      },
      {
        title: "Vitalparameter und Notfallmaßnahmen",
        description:
          "Erfassung und Bewertung von Vitalparametern sowie Durchführung von Notfallmaßnahmen.",
      },
      {
        title: "Prophylaxen",
        description:
          "Durchführung von Prophylaxen im Rahmen der vereinbarten pflegerischen Versorgung.",
      },
      {
        title: "Kostenübernahme",
        description:
          "Unterstützung bei der Klärung der Kostenübernahme.",
      },
      {
        title: "Pflegehilfsmittel",
        description:
          "Organisation von Pflegehilfsmitteln.",
      },
      {
        title: "Beratung",
        description:
          "Beratung von Pflegebedürftigen sowie deren Bezugspersonen.",
      },
      {
        title: "Schulbegleitung",
        description:
          "Kontaktdaten zur Schulbegleitung.",
      },
    ],
  },

  {
    title: "SGB V Leistungen",
    description:
      "Leistungen im Rahmen der häuslichen Krankenpflege nach den vereinbarten Versorgungsleistungen.",
    icon: Stethoscope,
    services: [
      {
        title: "Kompressionsstrümpfe",
        description:
          "An- und Ausziehen von Kompressionsstrümpfen.",
      },
      {
        title: "Kompressionsverbände",
        description:
          "Anlegen von Kompressionsverbänden.",
      },
      {
        title: "Vitalzeichenkontrolle",
        description:
          "Blutdruck-, Puls- und Blutzuckermessung.",
      },
      {
        title: "Dekubitus-Behandlung",
        description:
          "Durchführung der vereinbarten pflegerischen Versorgung bei Dekubitus.",
      },
      {
        title: "Medikamenteneinnahme",
        description:
          "Hilfe bei der Medikamenteneinnahme.",
      },
      {
        title: "Injektionen",
        description:
          "Injektionen, beispielsweise Spritzen von Insulin oder Spritzen zur Thrombosevorbeugung.",
      },
      {
        title: "Stomaversorgung",
        description:
          "Pflegerische Versorgung eines Stomas.",
      },
      {
        title: "Suprapubischer Katheter",
        description:
          "Versorgung im Zusammenhang mit einem suprapubischen Katheter.",
      },
      {
        title: "Wundversorgung",
        description:
          "Wundversorgung und Verbandswechsel.",
      },
      // {
      //   title: "Enterale Ernährung",
      //   description:
      //     " Versorgung unnd sondern n",
      // },
      // {
      //   title: "Parenterale Ernährung",
      //   description:
      //     "Anhängen und abhängen plus ",
      // },
    ],
  },

  {
    title: "SGB XI Leistungen",
    description:
      "Unterstützung bei der täglichen Pflege, Mobilität, Ernährung und persönlichen Versorgung.",
    icon: HeartHandshake,
    services: [
      {
        title: "An- und Auskleiden",
        description:
          "Hilfe beim An- und Auskleiden.",
      },
      {
        title: "Mobilisation",
        description:
          "Hilfe bei der Mobilisation.",
      },
      {
        title: "Blasen- und Darmentleerung",
        description:
          "Hilfe bei der Blasen- und Darmentleerung.",
      },
      {
        title: "Aufnahme von Mahlzeiten",
        description:
          "Hilfe bei der Aufnahme der Mahlzeiten von Pflegebedürftigen.",
      },
      {
        title: "Inkontinenzversorgung",
        description:
          "Unterstützung bei der Inkontinenzversorgung.",
      },
      {
        title: "Mund-, Zahn- und Prothesenpflege",
        description:
          "Unterstützung bei der Mund-, Zahn- und Prothesenpflege.",
      },
      {
        title: "Körper- und Haarpflege",
        description:
          "Rasieren, Kämmen sowie Haut-, Haar- und Nagelpflege.",
      },
      {
        title: "Unterstützung bei Eigenaktivitäten",
        description:
          "Unterstützung bei Eigenaktivitäten.",
      },
      {
        title: "Versorgung 24/7",
        description:
          "Versorgung in der Pflege rund um die Uhr.",
      },
      {
        title: "Waschen, Duschen und Baden",
        description:
          "Unterstützung beim Waschen, Duschen und Baden.",
      },
      {
        title: "Zubereitung von Mahlzeiten",
        description:
          "Zubereitung von Mahlzeiten.",
      },
    ],
  },

  {
    title: "Hauswirtschaftliche Leistungen",
    description:
      "Unterstützung im Haushalt und bei alltäglichen Aufgaben, die zu einer verlässlichen Versorgung beitragen.",
    icon: Home,
    services: [
      {
        title: "Begleitung außerhalb des Hauses",
        description:
          "Begleitung bei Aktivitäten außerhalb des Hauses.",
      },
      {
        title: "Beschaffung von Medikamenten und Hilfsmitteln",
        description:
          "Beschaffung von Medikamenten und Hilfsmitteln.",
      },
      {
        title: "Betten",
        description:
          "Herrichten und Ordnen von Betten.",
      },
      {
        title: "Einkäufe",
        description:
          "Einkauf von Lebensmitteln und Artikeln des täglichen Bedarfs.",
      },
      {
        title: "Reinigung des Wohnbereichs",
        description:
          "Reinigung und Pflege des Wohnbereichs.",
      },
      {
        title: "Kleidung und Bettwäsche",
        description:
          "Wechseln und Waschen von Kleidung und Bettwäsche.",
      },
      {
        title: "Zubereitung von Mahlzeiten",
        description:
          "Zubereitung von Mahlzeiten und Unterstützung bei der Nahrungsaufnahme.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-(--color-background)">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <Header/>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-(--color-navy)">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Unsere Leistungen
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pflege, Unterstützung und Betreuung aus einer Hand.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Herzenswerk bietet individuelle pflegerische, medizinische und
            hauswirtschaftliche Unterstützung entsprechend der persönlichen
            Situation und des vereinbarten Versorgungsbedarfs.
          </p>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <div>
        {serviceCategories.map((category, categoryIndex) => {
          const Icon = category.icon;

          return (
            <section
              key={category.title}
              className={
                categoryIndex % 2 === 0
                  ? "bg-white"
                  : "bg-(--color-background)"
              }
            >
              <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

                {/* Category heading */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                  <div className="max-w-3xl">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--color-navy)">
                        <Icon
                          size={28}
                          strokeWidth={1.7}
                          className="text-(--color-green)"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
                          Leistungen
                        </p>

                        <h2 className="mt-1 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
                          {category.title}
                        </h2>
                      </div>

                    </div>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {category.description}
                    </p>

                  </div> 

                </div>


                {/* Service cards */}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {category.services.map((service, serviceIndex) => (
                    <article
                      key={service.title}
                      className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <span className="text-sm font-semibold text-(--color-green)">
                          {String(serviceIndex + 1).padStart(2, "0")}
                        </span>

                        {/* <span className="h-2 w-2 rounded-full bg-(--color-green)" /> */}
                      </div>

                      <h3 className="mt-6 text-xl font-semibold text-(--color-navy)">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {service.description}
                      </p>

                    </article>
                  ))}

                </div>

              </div>
            </section>
          );
        })}
      </div>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-(--color-navy)">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:py-24">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
              Persönliche Beratung
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sie möchten mehr über unsere Leistungen erfahren?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Wir nehmen uns Zeit für Ihre Fragen und besprechen gemeinsam,
              welche Unterstützung zu Ihrer persönlichen Situation passt.
            </p>

          </div>

          <Link
            href="/#kontakt"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 font-semibold text-(--color-navy) transition hover:bg-gray-100"
          >
            Kontakt aufnehmen
          </Link>

        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
        <Footer/>

    </main>
  );
}