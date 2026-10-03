"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Krankheitsbilder", href: "/#krankheitsbilder" },
  { label: "Angehörige", href: "/#angehoerige" },
  { label: "Ablauf", href: "/#ablauf" },
  // { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className=" bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-(--color-navy)"
        >
          <img className="w-48" src="./herzenswerk-horizontal.png" alt="herzenswerk horizontal logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-gray-700 transition hover:text-(--color-green)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#kontakt"
          className="hidden rounded-full bg-(--color-navy) px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 lg:block"
        >
          Jetzt Kontakt aufnehmen
        </Link>

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

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 font-medium text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#kontakt"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-(--color-navy) px-5 py-3.5 text-center font-semibold text-white transition hover:opacity-90"
            >
              Jetzt Kontakt aufnehmen
            </Link>

          </div>
        </nav>
      )}
    </header>
  );
}