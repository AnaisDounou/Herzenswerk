import Link from "next/link";
import {
  Clock3,
  Globe,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--color-navy) text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">

        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img src="./herzenswerk-vertical.svg" alt="herzenswerk vertical logo - brand logo" className="rounded-3xl" />
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
              Navigation
            </h2>

            <div className="mt-3 h-1 w-12 bg-(--color-green)" />

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/#ueber-uns"
                className="text-white/75 transition hover:text-white"
              >
                Über uns
              </Link>

              <Link
                href="/leistungen"
                className="text-white/75 transition hover:text-white"
              >
                Leistungen
              </Link>

              <Link
                href="/#krankheitsbilder"
                className="text-white/75 transition hover:text-white"
              >
                Krankheitsbilder
              </Link>

              <Link
                href="/#angehoerige"
                className="text-white/75 transition hover:text-white"
              >
                Angehörige
              </Link>

              <Link
                href="/#ablauf"
                className="text-white/75 transition hover:text-white"
              >
                Ablauf
              </Link>

              <Link
                href="/#kontakt"
                className="text-white/75 transition hover:text-white"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
              Kontakt
            </h2>

            <div className="mt-3 h-1 w-12 bg-(--color-green)" />

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel: 051413028070"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-(--color-green)">
                  <Phone
                    size={20}
                    className="text-(--color-green) group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-white/80 group-hover:text-white hover:underline">
                   05141  3028070
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:01631710326"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-(--color-green)">
                  <Phone
                    size={20}
                    className="text-(--color-green) group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-white/80 group-hover:text-white hover:underline">
                   0163 1710326
                </span>
              </a>

              {/* Fax */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Printer
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-white/80 hover:underline">
                  Fax: 05141 3028071
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:info@herzenswerk-pflege.de"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-(--color-green)">
                  <Mail
                    size={20}
                    className="text-(--color-green) group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-white/80 group-hover:text-white hover:underline">
                  info@herzenswerk-pflege.de
                </span>
              </a>

              {/* Website */}
              <a
                href="https://herzenswerk-pflege.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-(--color-green)">
                  <Globe
                    size={20}
                    className="text-(--color-green) group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-white/80 group-hover:text-white hover:underline">
                  www.herzenswerk-pflege.de
                </span>
              </a>

            </div>
          </div>

          {/* Office */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
              Bürozeiten
            </h2>

            <div className="mt-3 h-1 w-12 bg-(--color-green)" />

            <div className="mt-6 space-y-6">

              {/* Opening hours */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Clock3
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <div className="leading-7 text-white/80">
                  <p className="font-medium text-white">
                    Montag – Freitag
                  </p>
                  <p>08:00 – 16:00</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin
                    size={20}
                    className="text-(--color-green)"
                    aria-hidden="true"
                  />
                </span>

                <address className="not-italic leading-7 text-white/80">
                  Gewerbering 11
                  <br />
                  29352 Adelheidsdorf
                </address>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/20 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Herzenswerk. Alle Rechte vorbehalten.
            </p>

            <div className="flex gap-6">
              <a
                href="/impressum"
                className="transition hover:text-white"
              >
                Impressum
              </a>

              <a
                href="/datenschutz"
                className="transition hover:text-white"
              >
                Datenschutz
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}