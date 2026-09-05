"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo / Brand */}
        <a href="/" className="text-2xl font-bold text-(--color-navy)">
          <img src="./herzenswerk-horizontal.png" alt="Herzenswerk - Ambulanter Intensivpflegedienst" className="h-auto w-40 sm:w-44" /> 
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <a
            href="#ueber-uns"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Über uns
          </a>

          <a
            href="#leistungen"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Leistungen
          </a>

          <a
            href="#krankheitsbilder"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Krankheitsbilder
          </a>

          <a
            href="#angehoerige"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Angehörige
          </a>

          <a
            href="#ablauf"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Ablauf
          </a>

          <a
            href="#stellenangebote"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Stellenangebote
          </a>

          <a
            href="#kontakt"
            className="text-sm font-medium text-gray-700 transition hover:text-(--color-navy)"
          >
            Kontakt
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden rounded-full bg-(--color-navy) px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 lg:block"
        >
          Jetzt Kontakt aufnehmen
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-(--color-navy) transition hover:bg-gray-100 lg:hidden"
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <Menu size={25} aria-hidden="true" />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">

            <a
              href="#ueber-uns"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Über uns
            </a>

            <a
              href="#leistungen"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Leistungen
            </a>

            <a
              href="#krankheitsbilder"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Krankheitsbilder
            </a>

            <a
              href="#angehoerige"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Angehörige
            </a>

            <a
              href="#ablauf"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Ablauf
            </a>

            <a
              href="#stellenangebote"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 font-medium text-gray-700"
            >
              Stellenangebote
            </a>

            <a
              href="#kontakt"
              onClick={closeMenu}
              className="py-4 font-medium text-gray-700"
            >
              Kontakt
            </a>

            {/* Mobile CTA */}
            <a
              href="#kontakt"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-(--color-navy) px-5 py-3.5 text-center font-semibold text-white transition hover:opacity-90"
            >
              Jetzt Kontakt aufnehmen
            </a>

          </div>
        </nav>
      )}
    </header>
  );
}