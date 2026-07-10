const programs = [
  {
    no: "01",
    title: "Strength Training",
    text: "Bangun fondasi kekuatan dengan program progresif dan teknik yang aman.",
    meta: "60 MIN · ALL LEVELS",
  },
  {
    no: "02",
    title: "HIIT & Conditioning",
    text: "Latihan intensitas tinggi untuk meningkatkan stamina dan membakar kalori.",
    meta: "45 MIN · INTERMEDIATE",
  },
  {
    no: "03",
    title: "Personal Coaching",
    text: "Pendampingan satu-satu dengan program yang dirancang khusus untuk targetmu.",
    meta: "FLEXIBLE · PERSONAL",
  },
];

const coaches = [
  {
    name: "Arga Pratama",
    role: "Head Strength Coach",
    mark: "AP",
    tone: "blue",
  },
  {
    name: "Nadia Putri",
    role: "HIIT & Mobility Coach",
    mark: "NP",
    tone: "yellow",
  },
  {
    name: "Dimas Akbar",
    role: "Body Transformation",
    mark: "DA",
    tone: "navy",
  },
];

const plans = [
  {
    name: "Starter",
    price: "299K",
    note: "Untuk memulai rutinitas",
    features: [
      "Akses gym setiap hari",
      "2 kelas grup / bulan",
      "Body assessment",
    ],
    featured: false,
  },
  {
    name: "Unlimited",
    price: "499K",
    note: "Pilihan paling populer",
    features: [
      "Akses gym tanpa batas",
      "Semua kelas grup",
      "1 sesi personal training",
      "Konsultasi nutrisi",
    ],
    featured: true,
  },
  {
    name: "Performance",
    price: "899K",
    note: "Hasil maksimal, lebih cepat",
    features: [
      "Semua benefit Unlimited",
      "4 sesi personal training",
      "Program latihan khusus",
      "Progress report bulanan",
    ],
    featured: false,
  },
];

export const dynamic = "force-static";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <aside className="rail" aria-hidden="true">
          <span>01</span>
          <b>PERFORMANCE</b>
          <i />
        </aside>
        <header className="nav shell">
          <a className="logo" href="#home" aria-label="Iron Pulse home">
            IRON <span>PULSE</span>
          </a>
          <nav aria-label="Navigasi utama">
            <a href="#programs">Program</a>
            <a href="#coaches">Pelatih</a>
            <a href="#membership">Membership</a>
            <a href="#contact">Kontak</a>
          </nav>
          <a className="nav-cta" href="#membership">
            Gabung Sekarang <Arrow />
          </a>
        </header>
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content shell">
          <p className="eyebrow">
            <span />
            Gym performance untuk semua level
          </p>
          <h1>
            BUILD STRENGTH.
            <br />
            OWN YOUR <em>POWER.</em>
          </h1>
          <p className="lead">
            Latihan terarah, pelatih berpengalaman, dan komunitas yang
            mendorongmu melampaui batas.
          </p>
          <div className="actions">
            <a className="button primary" href="#membership">
              Mulai Latihan <Arrow />
            </a>
            <a className="button secondary" href="#programs">
              Lihat Program <span>→</span>
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>1.2K+</strong>
              <span>Member aktif</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>Pelatih ahli</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Rating member</span>
            </div>
          </div>
        </div>
        <a className="scroll" href="#programs">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <section className="statement section shell">
        <p className="section-kicker">/ KENAPA IRON PULSE</p>
        <h2>
          Bukan sekadar angkat beban.
          <br />
          Kami membangun <span>versi terkuatmu.</span>
        </h2>
        <div className="feature-strip">
          <div>
            <b>01</b>
            <h3>Peralatan Premium</h3>
            <p>
              Peralatan lengkap berstandar internasional untuk setiap jenis
              latihan.
            </p>
          </div>
          <div>
            <b>02</b>
            <h3>Coach Bersertifikat</h3>
            <p>Dibimbing pelatih ahli yang peduli pada progres dan teknikmu.</p>
          </div>
          <div>
            <b>03</b>
            <h3>Komunitas Solid</h3>
            <p>
              Lingkungan suportif yang membuatmu konsisten dan terus berkembang.
            </p>
          </div>
        </div>
      </section>

      <section className="programs section" id="programs">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="section-kicker">/ PROGRAM LATIHAN</p>
              <h2>
                Temukan latihan
                <br />
                yang <span>cocok untukmu.</span>
              </h2>
            </div>
            <p>
              Setiap program dirancang untuk memberikan progres nyata—apa pun
              level kebugaranmu saat ini.
            </p>
          </div>
          <div className="program-grid">
            {programs.map((p) => (
              <article key={p.no}>
                <span className="program-no">{p.no}</span>
                <div className="program-icon">↗</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <footer>
                  <span>{p.meta}</span>
                  <a href="#contact" aria-label={`Pelajari ${p.title}`}>
                    LIHAT DETAIL →
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coaches section shell" id="coaches">
        <div className="section-head">
          <div>
            <p className="section-kicker">/ COACH KAMI</p>
            <h2>
              Dilatih oleh
              <br />
              <span>yang terbaik.</span>
            </h2>
          </div>
          <p>
            Coach kami tidak hanya mengajar. Mereka mendengarkan, mengarahkan,
            dan memastikan setiap repetisi berarti.
          </p>
        </div>
        <div className="coach-grid">
          {coaches.map((c, i) => (
            <article key={c.name} className={`coach-card ${c.tone}`}>
              <div className="coach-portrait">
                <span>{c.mark}</span>
                <b>0{i + 1}</b>
              </div>
              <div>
                <h3>{c.name}</h3>
                <p>{c.role}</p>
              </div>
              <a href="#contact" aria-label={`Hubungi ${c.name}`}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="membership section" id="membership">
        <div className="shell">
          <div className="center-head">
            <p className="section-kicker">/ MEMBERSHIP</p>
            <h2>
              Investasi untuk
              <br />
              <span>dirimu sendiri.</span>
            </h2>
            <p>Tanpa biaya tersembunyi. Batalkan kapan saja.</p>
          </div>
          <div className="plans">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={plan.featured ? "featured" : ""}
              >
                {plan.featured && <div className="popular">PALING POPULER</div>}
                <p className="plan-name">{plan.name}</p>
                <div className="price">
                  <sup>Rp</sup>
                  <strong>{plan.price}</strong>
                  <span>/bulan</span>
                </div>
                <p>{plan.note}</p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      ✓ <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`button ${plan.featured ? "primary" : "dark"}`}
                  href="#contact"
                >
                  Pilih Paket <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote section shell">
        <div className="quote-mark">“</div>
        <blockquote>
          IRON PULSE mengubah cara saya melihat latihan. Bukan lagi kewajiban,
          tapi bagian terbaik dari hari saya.
        </blockquote>
        <div className="quote-author">
          <span>RS</span>
          <div>
            <b>Raka Setiawan</b>
            <small>Member sejak 2024</small>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="shell">
          <p className="section-kicker">/ SIAP UNTUK MULAI?</p>
          <h2>
            YOUR STRONGEST SELF
            <br />
            STARTS <span>TODAY.</span>
          </h2>
          <p>Ambil langkah pertama. Coba latihan gratis dan rasakan bedanya.</p>
          <a className="button primary" href="https://wa.me/6281234567890">
            Jadwalkan Trial Gratis <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="logo" href="#home">
              IRON <span>PULSE</span>
            </a>
            <p>Build strength. Own your power.</p>
          </div>
          <div>
            <b>NAVIGASI</b>
            <a href="#programs">Program</a>
            <a href="#coaches">Pelatih</a>
            <a href="#membership">Membership</a>
          </div>
          <div>
            <b>KONTAK</b>
            <span>Jl. Sudirman No. 88, Jakarta</span>
            <span>+62 812 3456 7890</span>
            <span>hello@ironpulse.id</span>
          </div>
          <div>
            <b>JAM OPERASIONAL</b>
            <span>Senin–Jumat: 05.00–23.00</span>
            <span>Sabtu–Minggu: 06.00–22.00</span>
          </div>
        </div>
        <div className="shell copyright">
          <span>© 2026 IRON PULSE. ALL RIGHTS RESERVED.</span>
          <span>INSTAGRAM · TIKTOK · YOUTUBE</span>
        </div>
      </footer>
    </main>
  );
}
