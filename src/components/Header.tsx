export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a
          href="/"
          className="text-2xl font-bold text-(--color-navy)"
        >
          Herzenswerk
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <a href="#ueber-uns">Über uns</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#krankheitsbilder">Krankheitsbilder</a>
          <a href="#angehoerige">Angehörige</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#stellenangebote">Stellenangebote</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-(--color-navy) px-5 py-3 text-sm font-semibold text-white"
        >
          Jetzt Kontakt aufnehmen
        </a>

      </div>
    </header>
  );
}