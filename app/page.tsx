import Image from "next/image";
import { CookiePreferencesButton } from "./CookieConsent";
import {
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Facebook,
  Hammer,
  Instagram,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  absoluteUrl,
  emailHref,
  leadFormAction,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "./site-config";

const homepageTeam = [
  {
    name: "Martijn",
    role: "Relatiemanager",
    image: "/martijn-verhuurbeheer-torremolinos.webp",
    alt: "Martijn, relatiemanager van Verhuurbeheer Spanje aan de Costa del Sol",
  },
  {
    name: "Geert",
    role: "Manager Bouw",
    image: "/geert-vastgoedbeheer-torremolinos.webp",
    alt: "Geert, manager bouw en vastgoedbeheer bij Verhuurbeheer Spanje",
  },
  {
    name: "Sophie",
    role: "Backoffice",
    image: "/sophie-torremolinos.webp",
    alt: "Sophie, Nederlandstalig aanspreekpunt bij Verhuurbeheer Spanje",
  },
  {
    name: "Päivi",
    role: "Administratie",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi van de administratie van Verhuurbeheer Spanje",
  },
];

const services = [
  {
    title: "Vakantieverhuur",
    slug: "vakantieverhuur-torremolinos",
    price: siteConfig.pricing.holidayRental,
    icon: BedDouble,
    text: "Volledig beheer van presentatie, boekingskanalen, dynamische prijzen, gastencommunicatie en de lokale uitvoering rond ieder verblijf.",
  },
  {
    title: "Seizoens- en midtermverhuur",
    slug: "midterm-verhuur-torremolinos",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "Gerichte verhuur voor tijdelijke verblijven, inclusief presentatie, huurdersselectie, afspraken en overdracht.",
  },
  {
    title: "Langetermijnverhuur",
    slug: "langetermijnverhuur-torremolinos",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "Van woningpresentatie en bezichtigingen tot selectie, overeenkomst en een verzorgde sleuteloverdracht.",
  },
  {
    title: "Vastgoedbeheer",
    slug: "vastgoedbeheer-torremolinos",
    price: "Maatwerk",
    icon: ShieldCheck,
    text: "Woningcontroles, sleutelbeheer, toegang voor leveranciers en praktische opvolging wanneer u niet in Spanje bent.",
  },
  {
    title: "Schoonmaak & onderhoud",
    slug: "schoonmaak-onderhoud-torremolinos",
    price: "Na woningcheck",
    icon: Sparkles,
    text: "Wisselschoonmaak, linnen, inspecties en coördinatie van onderhoud door lokale partners rond Torremolinos.",
  },
  {
    title: "Renovatie & inrichting",
    slug: "renovatie-inrichting-torremolinos",
    price: "Offerte op maat",
    icon: Hammer,
    text: "Praktische verbetering, inrichting en renovatie met verhuurbaarheid, duurzaamheid en uitstraling als uitgangspunt.",
  },
];

const faqs = [
  [
    "Wat kost vakantieverhuurbeheer in Torremolinos?",
    "Onze fullservice beheervergoeding voor vakantieverhuur begint vanaf 18% van de gerealiseerde huurinkomsten. De exacte vergoeding hangt af van de woning, ligging en gewenste dienstverlening.",
  ],
  [
    "Wat kost midterm- of langetermijnverhuur?",
    "Voor het vinden en plaatsen van een passende huurder rekenen we eenmalig een fee ter hoogte van één maand huur.",
  ],
  [
    "Worden schoonmaakkosten van de huuropbrengst afgetrokken?",
    "Bij vakantieverhuur worden de reguliere schoonmaak- en waskosten aan de huurder doorberekend. Uitzonderlijk werk, deep cleaning, herstel of onderhoud valt daar niet automatisch onder.",
  ],
  [
    "Kan ik mijn woning zelf blijven gebruiken?",
    "Ja. Bij vakantieverhuur kunnen eigen verblijven vooraf in de kalender worden geblokkeerd. We bespreken bij de start hoe u de woning zelf wilt blijven gebruiken.",
  ],
  [
    "Op welke verhuurplatforms wordt mijn woning aangeboden?",
    "Afhankelijk van de woning en strategie werken we met relevante kanalen zoals Airbnb, Booking.com en andere geschikte boekingsplatforms. Beschikbaarheid wordt centraal beheerd.",
  ],
  [
    "Verzorgen jullie ook alleen vastgoedbeheer?",
    "Ja. Ook zonder verhuur kunnen we periodieke woningcontroles, sleutelbeheer, toegang en praktische onderhoudscoördinatie verzorgen.",
  ],
  [
    "In welke delen van Torremolinos zijn jullie actief?",
    "We ondersteunen eigenaren in onder meer Torremolinos Centro, La Carihuela, El Bajondillo, Montemar, Playamar, Los Álamos, El Pinillo en Torremolinos Pueblo. De mogelijkheden worden altijd per woning en locatie beoordeeld.",
  ],
  [
    "Heb ik een verhuurlicentie nodig voor vakantieverhuur in Torremolinos?",
    "Voor toeristische verhuur moet de woning aan de actuele regionale, gemeentelijke en registratievoorwaarden voldoen. Laat de situatie controleren voordat de woning op boekingsplatforms wordt gepubliceerd.",
  ],
];

export default function Home() {
  const homeFaqs = faqs.slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    description:
      "Nederlandstalig fullservice verhuurbeheer, vakantieverhuurbeheer en vastgoedbeheer voor woningeigenaren in Torremolinos.",
    parentOrganization: {
      "@type": "Organization",
      name: "Verhuurbeheer Spanje",
      url: "https://www.verhuurbeheerspanje.nl/",
    },
    areaServed: [
      { "@type": "City", name: "Torremolinos" },
      { "@type": "Place", name: "Torremolinos Centro" },
      { "@type": "Place", name: "La Carihuela" },
      { "@type": "Place", name: "El Bajondillo" },
      { "@type": "Place", name: "Montemar" },
      { "@type": "Place", name: "Playamar" },
      { "@type": "Place", name: "Los Álamos" },
      { "@type": "Place", name: "El Pinillo" },
      { "@type": "Place", name: "Torremolinos Pueblo" },
      { "@type": "City", name: "Benalmádena" },
      { "@type": "City", name: "Málaga" },
    ],
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    url: absoluteUrl(),
    logo: absoluteUrl("/verhuurbeheer-torremolinos-logo.svg"),
    image: absoluteUrl("/luxe-woning-torremolinos-zeezicht.webp"),
    sameAs: [
      siteConfig.brand.parentUrl,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    knowsLanguage: ["nl", "en", "es"],
    knowsAbout: [
      "Verhuurbeheer Torremolinos",
      "Vakantieverhuurbeheer",
      "Vastgoedbeheer",
      "Woningbeheer",
      "Midterm verhuur",
      "Langetermijnverhuur",
      "Sleutelbeheer",
      "Schoonmaak en onderhoud",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: absoluteUrl(),
    name: siteConfig.brand.name,
    inLanguage: "nl-NL",
    publisher: { "@id": `${siteConfig.domain}/#organization` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="site-header">
        <a
          className="logo-lockup"
          href="/"
          aria-label="Verhuurbeheer Torremolinos – naar Home"
        >
          <img
            src="/verhuurbeheer-torremolinos-logo.svg"
            alt="Logo Verhuurbeheer Torremolinos"
            width="54"
            height="54"
          />
        </a>
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Diensten</summary>
            <div>
              <a href="/vakantieverhuur-torremolinos/">Vakantieverhuur</a>
              <a href="/midterm-verhuur-torremolinos/">
                Seizoens- en midtermverhuur
              </a>
              <a href="/langetermijnverhuur-torremolinos/">Langetermijnverhuur</a>
              <a href="/vastgoedbeheer-torremolinos/">Vastgoedbeheer</a>
              <a href="/schoonmaak-onderhoud-torremolinos/">
                Schoonmaak & onderhoud
              </a>
              <a href="/renovatie-inrichting-torremolinos/">
                Renovatie & inrichting
              </a>
              <a href="/verhuurlicentie-torremolinos/">Verhuurlicentie</a>
            </div>
          </details>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
        </nav>
        <a className="btn btn-small header-cta" href="/contact/">
          Woning aanmelden
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menu openen">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div>
            <a href="/">Home</a>
            <b>Diensten</b>
            <a href="/vakantieverhuur-torremolinos/">Vakantieverhuur</a>
            <a href="/midterm-verhuur-torremolinos/">Seizoens- en midtermverhuur</a>
            <a href="/langetermijnverhuur-torremolinos/">Langetermijnverhuur</a>
            <a href="/vastgoedbeheer-torremolinos/">Vastgoedbeheer</a>
            <a href="/schoonmaak-onderhoud-torremolinos/">Schoonmaak & onderhoud</a>
            <a href="/renovatie-inrichting-torremolinos/">Renovatie & inrichting</a>
            <a href="/verhuurlicentie-torremolinos/">Verhuurlicentie</a>
            <b>Bedrijf</b>
            <a href="/werkwijze/">Werkwijze</a>
            <a href="/over-ons/">Over ons</a>
            <a href="/blog/">Blog & kennisbank</a>
            <a href="/contact/">Contact</a>
            <a href="/contact/">Woning aanmelden</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <p className="kicker">
            Voor Nederlandse woningeigenaren aan de Costa del Sol
          </p>
          <h1>Verhuurbeheer Torremolinos voor uw woning.</h1>
          <p>
            Professioneel beheer voor vakantieverhuur, midterm en langetermijn,
            aangevuld met lokaal vastgoedbeheer, schoonmaak en onderhoud. Eén
            Nederlandstalig aanspreekpunt en een team ter plaatse.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href="/contact/">
              Meld uw woning aan
            </a>
            <a className="link-light" href="#diensten">
              Bekijk alle diensten →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Airbnb &amp; Booking</b> op uw eigen naam
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Vast Nederlandstalig</b> contactpersoon
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>5-sterren beheer</b> voor maximale verhuurinkomsten
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Woningen en vastgoed in Torremolinos"
      >
        <figure className="showcase-wide">
          <img
            src="/zonnig-terras-zeezicht-torremolinos.webp"
            alt="Zonnig terras van een vakantiewoning in Torremolinos met uitzicht op zee"
            width="1200"
            height="800"
            loading="eager"
          />
          <figcaption>Woningen met karakter en verhuurpotentieel</figcaption>
        </figure>
        <figure>
          <img
            src="/villa-zwembad-torremolinos.webp"
            alt="Zwembad en mediterrane tuin bij een villa in Torremolinos"
            width="1800"
            height="1118"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/luxe-interieur-torremolinos.webp"
            alt="Licht ingericht vakantieappartement aan de Costa del Sol"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </figure>
      </section>

      
      <section className="intro torremolinos-local-intro">
        <div>
          <p className="kicker">Lokaal in Torremolinos</p>
          <h2>Beheer dat rekening houdt met de buurt én het gebruik van uw woning</h2>
        </div>
        <div>
          <p>Torremolinos is geen uniforme verhuurmarkt. La Carihuela trekt andere gasten en verblijfsperiodes dan El Bajondillo, Playamar of Los Álamos, terwijl Montemar en El Pinillo juist interessant zijn voor eigenaren die rust, bereikbaarheid en langer verblijf willen combineren.</p>
          <p>Daarom kijken we per woning naar bereikbaarheid, eigen gebruik, urbanisatieregels, toegang, schoonmaak, onderhoud en de passende verhuurvorm. U houdt één Nederlandstalig aanspreekpunt; het praktische werk wordt lokaal rond Torremolinos georganiseerd.</p>
        </div>
      </section>

      <section className="services" id="diensten">
        <div className="section-head">
          <p className="kicker orange">Onze diensten</p>
          <h2>Alles voor uw woning in Torremolinos</h2>
          <p>
            Van verhuur tot lokale woningzorg. U kiest wat nodig is; wij regelen
            de uitvoering vanuit één vast aanspreekpunt.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <a className="service-card" href={`/${s.slug}/`} key={s.slug}>
              <div className="service-card-top">
                <span className="service-icon">
                  <s.icon aria-hidden="true" />
                </span>
                <span className="number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <strong>{s.price}</strong>
              <em>Bekijk dienst →</em>
            </a>
          ))}
        </div>
      </section>

      <aside className="license-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <b>Vakantieverhuur? Controleer tijdig de verhuurvoorwaarden.</b>
          <p>
            Bekijk welke registratie- en vergunningspunten voor uw woning
            relevant kunnen zijn.
          </p>
        </div>
        <a href="/verhuurlicentie-torremolinos/">Lees over de verhuurlicentie →</a>
      </aside>

      <section className="rental-band">
        <div>
          <p className="kicker">Welke verhuurvorm past?</p>
          <h2>Verhuren op een manier die bij u past.</h2>
          <p>
            We vergelijken eigen gebruik, gewenste opbrengst en zekerheid en
            adviseren welke verhuurvorm bij uw woning past.
          </p>
        </div>
        <div className="rental-options">
          <a href="/vakantieverhuur-torremolinos/">
            <small>Korte verblijven</small>
            <b>Vakantieverhuur</b>
            <span>Vanaf 18% →</span>
          </a>
          <a href="/midterm-verhuur-torremolinos/">
            <small>Tijdelijk verblijf</small>
            <b>Midterm</b>
            <span>1 maand huur →</span>
          </a>
          <a href="/langetermijnverhuur-torremolinos/">
            <small>Vaste huurder</small>
            <b>Langetermijn</b>
            <span>1 maand huur →</span>
          </a>
        </div>
      </section>

      <section className="process" id="werkwijze">
        <div className="section-head left">
          <p className="kicker orange">Onze werkwijze</p>
          <h2>Van eerste gesprek tot dagelijks beheer</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Kennismaking</h3>
              <p>
                We bespreken uw woning, doelen, eigen gebruik en gewenste
                verhuurvorm.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Woningcheck en voorstel</h3>
              <p>
                We bekijken wat nodig is, bepalen de dienstverlening en maken de
                kosten transparant.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Voorbereiding</h3>
              <p>
                Presentatie, kanalen, informatie, toegang en lokale teams worden
                ingericht.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Start en opvolging</h3>
              <p>
                Wij verzorgen de dagelijkse uitvoering en houden u op de hoogte
                van relevante zaken.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="regions compact-regions" id="regios">
        <div className="section-head">
          <p className="kicker orange">Lokaal werkgebied</p>
          <h2>Actief in Torremolinos, Benalmádena en Málaga</h2>
          <p>
            Van Torremolinos Centro, La Carihuela en El Bajondillo tot Montemar,
            Playamar, Benalmádena Costa en Málaga.
          </p>
        </div>
        <div className="area-list" aria-label="Werkgebieden rond Torremolinos">
          <b>Torremolinos Centro</b>
          <b>La Carihuela</b>
          <b>El Bajondillo</b>
          <b>Montemar</b>
          <b>Playamar</b>
          <b>Los Álamos</b>
          <b>Benalmádena</b>
          <b>Málaga</b>
        </div>
      </section>

      <section className="home-team">
        <div className="home-team-copy">
          <p className="kicker orange">Ons team</p>
          <h2>Nederlandstalig contact, lokale uitvoering.</h2>
          <p>
            U spreekt met echte mensen die uw woning en de Costa del Sol kennen.
            Samen verzorgen we verhuur, administratie, vastgoedbeheer en
            praktische opvolging ter plaatse.
          </p>
          <a className="dark-link" href="/over-ons/">
            Maak kennis met het volledige team →
          </a>
        </div>
        <div className="home-team-grid">
          {homepageTeam.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.alt} loading="lazy" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge compact-knowledge" id="kennisbank">
        <div className="section-head">
          <p className="kicker orange">Blogs &amp; advies</p>
          <h2>Praktische blogs voor woningeigenaren</h2>
          <p>
            Heldere uitleg over kosten, verhuurstrategie, regelgeving en
            vastgoedbeheer in Torremolinos.
          </p>
        </div>
        <div className="knowledge-grid">
          <a href="/kosten-verhuurbeheer-torremolinos/">
            <small>Kosten</small>
            <h3>Wat kost verhuurbeheer?</h3>
            <span>Lees blog →</span>
          </a>
          <a href="/dynamische-prijzen-vakantiewoning/">
            <small>Opbrengst</small>
            <h3>Dynamische prijsstelling</h3>
            <span>Lees blog →</span>
          </a>
          <a href="/zelf-verhuren-of-verhuurbeheer/">
            <small>Keuzehulp</small>
            <h3>Zelf verhuren of uitbesteden?</h3>
            <span>Lees blog →</span>
          </a>
        </div>
        <a className="knowledge-all" href="/blog/">
          Bekijk alle blogs en artikelen →
        </a>
      </section>

      <section className="faq">
        <div>
          <p className="kicker orange">Veelgestelde vragen</p>
          <h2>Direct een duidelijk antwoord</h2>
          <p>
            De belangrijkste vragen over onze diensten en tarieven in Torremolinos.
          </p>
        </div>
        <div>
          {homeFaqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="kicker">Gratis verhuurprognose</p>
          <h2>Wat kan uw woning in Torremolinos opleveren?</h2>
          <p>
            Deel de belangrijkste gegevens. We nemen persoonlijk contact op om
            de woning en passende verhuurvorm te bespreken.
          </p>
          <p>
            <a href={emailHref}>
              {siteConfig.contact.email}
            </a>
            <br />
            <a href={phoneHref}>{siteConfig.contact.phoneDisplay}</a>
          </p>
        </div>
        <form
          action={leadFormAction}
          method="post"
        >
          <input type="hidden" name="_subject" value="Nieuwe lead via Verhuurbeheer Torremolinos" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="bron_website" value="verhuurbeheertorremolinos.nl" />
          <input type="hidden" name="bron_formulier" value="Homepage – gratis verhuurprognose" />
          <label>
            Naam
            <input name="naam" required />
          </label>
          <label>
            E-mailadres
            <input type="email" name="email" required />
          </label>
          <label>
            Type woning
            <select name="type">
              <option>Appartement</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Anders</option>
            </select>
          </label>
          <label>
            Gewenste verhuurvorm
            <select name="verhuurvorm">
              <option>Vakantieverhuur</option>
              <option>Midterm</option>
              <option>Langetermijn</option>
              <option>Vastgoedbeheer</option>
            </select>
          </label>
          <label className="wide">
            Is er al een verhuurlicentie?
            <select name="verhuurlicentie" defaultValue="">
              <option value="" disabled>
                Kies een antwoord
              </option>
              <option>Ja</option>
              <option>Nee</option>
              <option>In aanvraag</option>
              <option>Niet van toepassing / weet ik niet</option>
            </select>
          </label>
          <label className="wide">
            Locatie en korte omschrijving
            <textarea name="woning" rows={4} />
          </label>
          <button className="btn wide form-cta" type="submit">
            Vraag uw prognose aan →
          </button>
          <small className="wide privacy-note">
            Wij verwerken uw gegevens volgens onze{" "}
            <a href="/privacyverklaring/">privacyverklaring</a>.
          </small>
        </form>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo-lockup" href="/" aria-label="Naar Home">
            <Image
              src="/verhuurbeheer-torremolinos-logo.svg"
              alt="Verhuurbeheer Torremolinos"
              width={640}
              height={640}
              sizes="54px"
            />
            <span>
              Verhuurbeheer <b>Torremolinos</b>
            </span>
          </a>
          <p>
            Verhuurbeheer Torremolinos is onderdeel van{" "}
            <a href="https://www.verhuurbeheerspanje.nl/">
              Verhuurbeheer Spanje
            </a>
            .
          </p>
          <div className="social-links">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Instagram"
            >
              <Instagram aria-hidden="true" /> Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Facebook"
            >
              <Facebook aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
        <div>
          <b>Diensten</b>
          <a href="/vakantieverhuur-torremolinos/">Vakantieverhuur</a>
          <a href="/midterm-verhuur-torremolinos/">Seizoens- en midtermverhuur</a>
          <a href="/langetermijnverhuur-torremolinos/">Langetermijnverhuur</a>
          <a href="/vastgoedbeheer-torremolinos/">Vastgoedbeheer</a>
          <a href="/verhuurlicentie-torremolinos/">Verhuurlicentie</a>
        </div>
        <div>
          <b>Meer</b>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
          <a href="/privacyverklaring/">Privacyverklaring</a>
          <a href="/cookieverklaring/">Cookieverklaring</a>
          <CookiePreferencesButton />
        </div>
        <div>
          <b>Contact</b>
          <a href={whatsappHref()}>
            WhatsApp
          </a>
          <a href={emailHref}>E-mail</a>
          <small>© 2026 · Torremolinos · Costa del Sol</small>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappHref()}
        aria-label="Contact via WhatsApp"
      >
        WhatsApp
      </a>
      <a className="to-top" href="#top" aria-label="Terug naar boven">
        ↑
      </a>
    </main>
  );
}
