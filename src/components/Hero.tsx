export default function Hero() {
  return (
    <section className="bg-(--color-background)">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Text content */}
        <div className=" flex justify-center items-center flex-col">
          <p className="text-center mb-4 text-2xl lg:text-4xl font-semibold uppercase tracking-wider text-(--color-green)">
            Ambulanter – Intensivpflegedienst
          </p>

          <h1 className="text-center max-w-3xl text-lg font-bold leading-tight tracking-tight text-(--color-navy) sm:text-5xl lg:text-2xl">
            Mit Kompetenz und Menschlichkeit
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Professionelle und individuelle Pflege für Menschen mit ambulantem und intensivem
            medizinischem Unterstützungsbedarf.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Wir bieten zuverlässige, qualifizierte und patientenorientierte
            Intensivpflege – damit Sie oder Ihre Angehörigen in besten Händen sind.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#leistungen"
              className="rounded-full bg-(--color-navy) px-7 py-3.5 text-center font-semibold text-white transition hover:opacity-90"
            >
              Jetzt informieren
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-(--color-navy) px-7 py-3.5 text-center font-semibold text-(--color-navy) transition hover:bg-(--color-navy) hover:text-white"
            >
              Kontakt aufnehmen
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-3xl">
            <div className="flex items-center justify-center">
              <img 
                   src="./img/young-doctor-using-stethoscope-listen-old-woman-heart-beat-nursing-home.jpg" 
                   alt="male-doctor-putting-his-stethoscope-listening-old-woman-heartbeat-nursing-home"
                   className="rounded-3xl"

                   />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}