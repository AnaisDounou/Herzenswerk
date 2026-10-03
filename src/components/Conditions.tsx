"use client";

import { useState } from "react";
import {
  Brain,
  BrainCircuit,
  HeartHandshake,
  HeartPulse,
  Activity,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import ConditionModal from "./ConditionModal";

type Condition = {
  title: string;
  description: string;
  icon: LucideIcon;
  modalTitle: string;
  modalText: string[];
  modalPoints: string[];
};

const conditions: Condition[] = [
  {
    title: "Beatmung",

    description:
      "Professionelle pflegerische Versorgung für Menschen mit invasiver oder nicht-invasiver Beatmung.",

    icon: Activity,

    modalTitle: "Individuelle Betreuung bei Beatmung",

    modalText: [
      "Menschen mit invasiver oder nicht-invasiver Beatmung benötigen eine kontinuierliche und fachgerechte pflegerische Betreuung.",

      "Unsere Pflegefachkräfte unterstützen die Patienten im Alltag und orientieren sich dabei an der individuellen Pflegesituation, den bestehenden Bedürfnissen und den vereinbarten Versorgungszielen.",

      "Dabei legen wir Wert auf eine enge Zusammenarbeit mit Angehörigen sowie den beteiligten medizinischen und therapeutischen Fachkräften.",
    ],

    modalPoints: [
      "Individuelle pflegerische Betreuung",
      "Unterstützung bei der täglichen Versorgung",
      "Beobachtung und Dokumentation relevanter Veränderungen",
      "Unterstützung im Umgang mit der Beatmung im Rahmen der vereinbarten Versorgung",
      "Zusammenarbeit mit Angehörigen und beteiligten Fachkräften",
    ],
  },

  {
    title: "Tracheostoma",

    description:
      "Fachgerechte pflegerische Betreuung und Unterstützung von Menschen mit einem Tracheostoma.",

    icon: Stethoscope,

    modalTitle: "Sichere und individuelle Tracheostomaversorgung",

    modalText: [
      "Ein Tracheostoma kann im Alltag besondere Anforderungen an die pflegerische Versorgung stellen.",

      "Unsere Pflegefachkräfte begleiten Menschen mit Tracheostoma im Rahmen der vereinbarten Versorgung und berücksichtigen dabei die individuelle Situation und den bestehenden Unterstützungsbedarf.",

      "Eine strukturierte Versorgung und eine gute Kommunikation mit Angehörigen und beteiligten Fachkräften sind dabei wichtige Bestandteile unserer Arbeit.",
    ],

    modalPoints: [
      "Individuelle pflegerische Betreuung",
      "Unterstützung bei der täglichen Versorgung",
      "Beobachtung des allgemeinen Zustandes",
      "Unterstützung bei der vereinbarten Tracheostomaversorgung",
      "Begleitung und Beratung der Angehörigen im Rahmen der Versorgung",
    ],
  },

  {
    title: "Neurologische Erkrankungen",

    description:
      "Individuelle Unterstützung bei komplexen neurologischen Erkrankungen und deren pflegerischen Folgen.",

    icon: Brain,

    modalTitle: "Pflege bei neurologischen Erkrankungen",

    modalText: [
      "Neurologische Erkrankungen können den Alltag und die Selbstständigkeit eines Menschen erheblich beeinflussen.",

      "Unsere Pflege richtet sich nach der individuellen Situation des Patienten und berücksichtigt die vorhandenen Fähigkeiten, Einschränkungen und den persönlichen Unterstützungsbedarf.",

      "Wir möchten eine verlässliche Versorgung ermöglichen und gleichzeitig die vorhandenen Ressourcen des Patienten im Alltag berücksichtigen.",
    ],

    modalPoints: [
      "Individuelle Unterstützung im Alltag",
      "Pflegerische Unterstützung entsprechend des persönlichen Bedarfs",
      "Beobachtung von Veränderungen",
      "Unterstützung bei der täglichen Grund- und Behandlungspflege im vereinbarten Rahmen",
      "Einbeziehung der Angehörigen",
    ],
  },

  {
    title: "Schlaganfall & Folgezustände",

    description:
      "Pflegerische Begleitung von Menschen nach einem Schlaganfall und bei daraus entstandenen langfristigen Einschränkungen.",

    icon: BrainCircuit,

    modalTitle: "Unterstützung nach einem Schlaganfall",

    modalText: [
      "Nach einem Schlaganfall können unterschiedliche Einschränkungen bestehen bleiben und den Alltag langfristig beeinflussen.",

      "Je nach individueller Situation kann dabei ein umfangreicher pflegerischer Unterstützungsbedarf entstehen.",

      "Unsere Pflegefachkräfte begleiten die betroffenen Menschen im Rahmen der vereinbarten Versorgung und berücksichtigen dabei die persönliche Situation und die vorhandenen Ressourcen.",
    ],

    modalPoints: [
      "Unterstützung bei der täglichen Pflege",
      "Individuelle Betreuung entsprechend des Pflegebedarfs",
      "Unterstützung bei der Alltagsgestaltung",
      "Beobachtung und Dokumentation relevanter Veränderungen",
      "Zusammenarbeit mit Angehörigen und beteiligten Fachkräften",
    ],
  },

  {
    title: "Schwere chronische Erkrankungen",

    description:
      "Kontinuierliche pflegerische Begleitung bei langfristigem intensivmedizinischem Unterstützungsbedarf.",

    icon: HeartPulse,

    modalTitle: "Langfristige Begleitung bei chronischen Erkrankungen",

    modalText: [
      "Menschen mit schweren chronischen Erkrankungen benötigen häufig eine langfristige und individuell abgestimmte pflegerische Unterstützung.",

      "Wir begleiten unsere Patienten im Rahmen der vereinbarten Versorgung und passen die pflegerische Unterstützung an die jeweilige persönliche Situation an.",

      "Dabei steht eine zuverlässige und respektvolle Betreuung im Mittelpunkt.",
    ],

    modalPoints: [
      "Kontinuierliche pflegerische Begleitung",
      "Individuelle Unterstützung im Alltag",
      "Unterstützung bei der täglichen Versorgung",
      "Beobachtung und Dokumentation relevanter Veränderungen",
      "Verlässliche Kommunikation mit Angehörigen und beteiligten Fachkräften",
    ],
  },

  {
    title: "Komplexe Pflegesituationen",

    description:
      "Individuelle Versorgung bei komplexen medizinischen und pflegerischen Anforderungen.",

    icon: HeartHandshake,

    modalTitle: "Individuelle Betreuung bei komplexem Pflegebedarf",

    modalText: [
      "Komplexe Pflegesituationen können unterschiedliche medizinische und pflegerische Anforderungen miteinander verbinden.",

      "In solchen Situationen ist eine strukturierte und individuell abgestimmte Versorgung besonders wichtig.",

      "Unsere Pflegefachkräfte arbeiten nach den vereinbarten Versorgungsanforderungen und stehen dabei in engem Austausch mit den beteiligten Personen und Fachkräften.",
    ],

    modalPoints: [
      "Individuelle Einschätzung des pflegerischen Unterstützungsbedarfs",
      "Strukturierte und kontinuierliche Versorgung",
      "Unterstützung bei komplexen Pflegesituationen",
      "Beobachtung und Dokumentation",
      "Zusammenarbeit mit Angehörigen und beteiligten Fachkräften",
    ],
  },
];

export default function Conditions() {
  const [selectedCondition, setSelectedCondition] =
    useState<Condition | null>(null);

  const closeModal = () => {
    setSelectedCondition(null);
  };

  return (
    <section
      id="krankheitsbilder"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        {/* Section heading */}
        <div className=" text-center ">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Krankheitsbilder
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl">
            Individuelle Pflege bei komplexen Krankheitsbildern.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Unsere Pflegefachkräfte begleiten Menschen mit unterschiedlichen intensivmedizinischen und pflegerischen Anforderungen.
          </p>
        </div>

        {/* Condition cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {conditions.map((condition) => {
            const Icon = condition.icon;

            return (
              <article
                key={condition.title}
                className="group relative min-h-80 overflow-hidden rounded-3xl bg-(--color-navy) p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">

                  <h3 className="max-w-[85%] text-xl font-semibold text-white">
                    {condition.title}
                  </h3>

                  <p className="mt-4 max-w-[90%] leading-7 text-white/75">
                    {condition.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedCondition(condition)}
                    className="mt-auto pt-8 text-left font-semibold text-(--color-green) transition hover:text-white"
                  >
                    Mehr erfahren
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>

                </div>

                {/* Background icon */}
                <div
                  className="pointer-events-none absolute bottom-4 right-4"
                  aria-hidden="true"
                >
                  <Icon
                    size={88}
                    strokeWidth={1.2}
                    className="text-[#2E5B78] transition duration-300 group-hover:scale-110 group-hover:text-[#376A89]"
                  />
                </div>

              </article>
            );
          })}

        </div>
      </div>

      {/* Condition modal */}
      {selectedCondition && (
        <ConditionModal
          title={selectedCondition.title}
          modalTitle={selectedCondition.modalTitle}
          modalText={selectedCondition.modalText}
          modalPoints={selectedCondition.modalPoints}
          isOpen={true}
          onClose={closeModal}
        />
      )}
    </section>
  );
}