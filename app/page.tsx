import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1781946024474-85cb7b297def",
  gardenDusk: "https://images.unsplash.com/photo-1774228296846-14fd638af680",
  gardenAlley: "https://images.unsplash.com/photo-1774901481404-b3e59bf97d34",
  oliveLights: "https://images.unsplash.com/photo-1566889110153-0a27cec38483",
  gardenPeople: "https://images.unsplash.com/photo-1658951874107-b597582d3768",
  interior: "https://images.unsplash.com/photo-1636405189493-181ecf851006",
  nightTable: "https://images.unsplash.com/photo-1703793578040-07e1778b6b2c",
  exteriorNight: "https://images.unsplash.com/photo-1712460843808-d1b1e0ccf62b",
  tuna: "https://images.unsplash.com/photo-1516685125522-3c528b8046ee",
  octopus: "https://images.unsplash.com/photo-1764397514672-63b1a7a79110",
  pasta: "https://images.unsplash.com/photo-1775634018153-51e9884dbf7c",
  platter: "https://images.unsplash.com/photo-1765100479761-2359e22fbe16",
  steak: "https://images.unsplash.com/photo-1755811248299-7a6867dc163d",
  shrimp: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b",
  darkPasta: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  dessert: "https://images.unsplash.com/photo-1452968011964-24f8831c43c3",
  octopusPan: "https://images.unsplash.com/photo-1774451606775-68df417107b3",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.platter,
    dishes: [
      { name: "Plata plodova mora za dvoje", desc: "Kozice, dagnje, hobotnica i školjke, servirano na ledu s domaćim umacima." },
      { name: "Tuna carpaccio", desc: "Tanko rezana tuna, parmezan, kapari i pistacije, maslinovo ulje." },
      { name: "Domaća pjat", desc: "Pršut, ovčji sir iz zaleđa i masline, uz topli kruh iz krušne peći." },
    ],
  },
  {
    cat: "Iz mora",
    image: IMG.pasta,
    dishes: [
      { name: "Zelene tjestenine sa škampima", desc: "Domaća tjestenina u vrhnjastom umaku, sa svježim škampima i limunom." },
      { name: "Crni rižot s plodovima mora", desc: "Rižot bojan sipinim crnilom, bogat svježim ulovom dana." },
      { name: "Škampi na buzaru", desc: "U umaku od rajčice, bijelog vina i češnjaka, uz domaći kruh za umakanje." },
    ],
  },
  {
    cat: "S gradela i ispod peke",
    image: IMG.octopus,
    dishes: [
      { name: "Odrezak tune s umakom od tartufa", desc: "Lagano zapečena tuna, umak od crnog tartufa, mladi krumpir." },
      { name: "Hobotnica ispod peke", desc: "Sočna hobotnica s krumpirom, maslinovim uljem i ružmarinom." },
      { name: "Biftek s tartufima", desc: "Domaći biftek, umak od tartufa i sezonsko povrće s gradela." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.dessert,
    dishes: [
      { name: "Panna cotta od maline", desc: "Krem dezert s prelivom od svježih malina." },
      { name: "Kolač od lavande i mascarponea", desc: "Lagan, mirisan kolač po receptu naše kuhinje." },
    ],
  },
];

const GALLERY = [
  { src: IMG.gardenAlley, alt: "Vrtna terasa sa svjetlima", tall: true },
  { src: IMG.oliveLights, alt: "Stara maslina obasjana svjetlima" },
  { src: IMG.octopusPan, alt: "Hobotnica u tavi na stolu u vrtu" },
  { src: IMG.gardenPeople, alt: "Gosti za stolom u vrtu u sumrak", wide: true },
  { src: IMG.shrimp, alt: "Kozice na tanjuru" },
  { src: IMG.nightTable, alt: "Stol u vrtu uz svjetlo svijeće" },
  { src: IMG.gardenDusk, alt: "Vrtna terasa u sumrak", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Vrt konobe Kaciol noću, obasjan svjetlima među maslinama"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>
            Konoba · Biograd na Moru
          </span>
          <h1
            className="font-display reveal max-w-[16ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Večer koja miriše na <em className="italic" style={{ color: "var(--gold)" }}>masline</em> i more.
          </h1>
          <p className="reveal mt-6 max-w-[42ch] text-[1.05rem]" style={{ color: "var(--bone-300, #DED2B2)" }}>
            Moderna dalmatinska kuhinja u vrtu starih maslina — među svjetlima, uz vino i tanjure koji se dijele polako, do kasno u noć.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--gold)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.7" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.7
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="787" data-suffix="+" style={{ color: "var(--foreground)" }}>
              787+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#2</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 112 restorana u gradu</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="vrt" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--gold)" }}>Naš vrt</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Među starim maslinama i girlandama svjetla kuhamo dalmatinsku kuhinju kakvu pamtimo —{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>ali servirano onako kako bismo je poslužili prijatelju.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--gold)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Sa <em className="italic" style={{ color: "var(--gold)" }}>mora</em> i vrta
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--gold)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.interior, 1000)} alt="Unutrašnjost konobe sa starom maslinom" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Vrt star koliko i <em className="italic" style={{ color: "var(--gold)" }}>grad</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Kaciol se skriva u vrtu punom starih maslina, u srcu Biograda na Moru — grada kraljevskih krunidbi. Naziv smo posudili od kutlače kojom se generacijama miješao brodet i velikodušno dijelilo jelo.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Tradicionalne recepte donosimo na nov način — tuna s tartufima, carpaccio, plodovi mora s pažljivim tanjurom. Ribu biramo svakog jutra, a večeri traju dugo, uz svijeće i tiho zujanje vrta.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--gold)" }}>
              — obitelj Kaciol, Biograd na Moru
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--gold)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Trenuci u <em className="italic" style={{ color: "var(--gold)" }}>vrtu</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, uz <em className="italic" style={{ color: "var(--gold)" }}>more</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ulica bana Josipa Jelačića, Biograd na Moru</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom ili mailom.</p>
              <a href="tel:+385996785496" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--gold)" }}>
                +385 99 678 5496
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>17:00 – 23:30</span>
              </div>
            </div>

            <a
              href="tel:+385996785496"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--gold)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Kaciol+Biograd+na+Moru&output=embed"
              loading="lazy"
              title="Kaciol — Biograd na Moru"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink-900, #10160E)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                Kaci<span style={{ color: "var(--gold)" }}>o</span>l
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Konoba u vrtu starih maslina, Biograd na Moru. Moderna dalmatinska kuhinja, plodovi mora i večeri koje traju dugo.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--gold)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--gold)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--gold)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--gold)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--gold)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--gold)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+385996785496" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 99 678 5496</a>
                <a href="mailto:kaciolbiograd1@gmail.com" className="hover:text-[var(--gold)]">kaciolbiograd1@gmail.com</a>
                <p>Biograd na Moru, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Konoba Kaciol · Biograd na Moru</span>
            <span>4.7 ★ Google · 787+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
