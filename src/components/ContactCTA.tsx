"use client";

import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import { FormEvent, useState } from "react";

const whatsappNumber = "491631710326";

export default function ContactCTA() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = `
Guten Tag, ich möchte gerne Kontakt mit Herzenswerk aufnehmen.

Name:
${name}

Betreff:
${subject}

Nachricht:
${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSending(false);
  };

  return (
    <section id="kontakt" className="bg-(--color-navy)">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--color-green)">
            Kontakt
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Wir sind für Sie da.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/75">
            Sie haben Fragen zu unserer Versorgung oder möchten mehr über
            unsere Leistungen erfahren? Schreiben Sie uns gerne.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Contact form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">

            <h3 className="mt-2 text-2xl font-bold text-(--color-navy)">
              Kontakt aufnehmen
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Ihr Name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-navy) focus:ring-2 focus:ring-(--color-navy)/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Betreff
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Worum geht es?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-navy) focus:ring-2 focus:ring-(--color-navy)/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Nachricht
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Wie können wir Ihnen helfen?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-navy) focus:ring-2 focus:ring-(--color-navy)/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-(--color-navy) px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={20} aria-hidden="true" />

                {isSending
                  ? "WhatsApp wird geöffnet..."
                  : "Über WhatsApp senden"}
              </button>

            </form>
          </div>

          {/* Contact information */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">

            <h3 className="text-2xl font-bold text-white">
              Weitere Kontaktmöglichkeiten
            </h3>

            <p className="mt-3 leading-7 text-white/65">
              Sie können uns auch direkt telefonisch oder per E-Mail
              erreichen.
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone 1 */}
              <a
                href="tel:+491631710326"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-sm text-white/50">
                    Telefon
                  </p>

                  <p className="font-medium text-white transition group-hover:text-(--color-green)">
                    +49 163 1710 326
                  </p>
                </div>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+4917670939385"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-sm text-white/50">
                    Telefon
                  </p>

                  <p className="font-medium text-white transition group-hover:text-(--color-green)">
                    +49 176 7093 9385
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@herzenswerk.life"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-sm text-white/50">
                    E-Mail
                  </p>

                  <p className="font-medium text-white transition group-hover:text-(--color-green)">
                    info@herzenswerk.life
                  </p>
                </div>
              </a>

              {/* Office hours */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Clock3
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-sm text-white/50">
                    Bürozeiten
                  </p>

                  <p className="font-medium text-white">
                    Montag – Freitag
                  </p>

                  <p className="text-white/70">
                    08:00 – 16:00 Uhr
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="text-sm text-white/50">
                    Adresse
                  </p>

                  <address className="not-italic font-medium leading-7 text-white">
                    Gewerbering 11
                    <br />
                    29352 Adelheidsdorf
                  </address>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
          <p className="text-sm leading-6 text-white/60">
            Bitte geben Sie über das Kontaktformular keine medizinischen
            Notfalldaten oder besonders vertraulichen Gesundheitsdaten ein.
            Bei einem medizinischen Notfall wenden Sie sich bitte an den
            zuständigen Notdienst.
          </p>
        </div>

      </div>
    </section>
  );
}