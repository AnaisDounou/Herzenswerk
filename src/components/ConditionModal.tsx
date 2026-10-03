"use client";

import { X } from "lucide-react";

type ConditionModalProps = {
  title: string;
  modalTitle: string;
  modalText: string[];
  modalPoints: string[];
  isOpen: boolean;
  onClose: () => void;
};

export default function ConditionModal({
  title,
  modalTitle,
  modalText,
  modalPoints,
  isOpen,
  onClose,
}: ConditionModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="condition-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fenster schließen"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-(--color-navy)"
        >
          <X size={22} aria-hidden="true" />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-10 lg:p-12">

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Krankheitsbild
          </p>

          {/* Condition title */}
          <h2
            id="condition-modal-title"
            className="mt-3 pr-12 text-3xl font-bold tracking-tight text-(--color-navy) sm:text-4xl"
          >
            {title}
          </h2>

          {/* Detailed title */}
          <h3 className="mt-8 text-xl font-semibold text-(--color-navy)">
            {modalTitle}
          </h3>

          {/* Detailed paragraphs */}
          <div className="mt-5 space-y-4">
            {modalText.map((paragraph, index) => (
              <p
                key={index}
                className="leading-8 text-gray-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Support points */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-(--color-navy)">
              Unsere Unterstützung
            </h3>

            <ul className="mt-5 space-y-3">
              {modalPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--color-green)/10 text-sm font-bold text-(--color-green)"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="leading-7">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="mt-10 border-t border-gray-100 pt-8">

            <p className="leading-7 text-gray-600">
              Sie haben Fragen zu unserer Versorgung oder möchten
              mehr über unsere Leistungen erfahren?
            </p>

            <a
              href="#kontakt"
              onClick={onClose}
              className="mt-5 inline-flex rounded-full bg-(--color-navy) px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              Kontakt aufnehmen
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}