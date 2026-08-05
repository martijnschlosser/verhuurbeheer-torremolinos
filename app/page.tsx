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
  leadHref,
  leadFormAction,
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
    text: "Wij bouwen de woningpresentatie op, sturen prijzen en kalenders aan en verzorgen alle communicatie en lokale wissels rondom gasten.",
  },
  {
    title: "Seizoens- en midtermverhuur",
    slug: "midterm-verhuur-torremolinos",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "Een flexibele route voor overwinteraars en tijdelijke bewoners, met screening, duidelijke afspraken en een persoonlijke overdracht.",
  },
  {
    title: "Langetermijnverhuur",
    slug: "langetermijnverhuur-torremolinos",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "We vinden een passende vaste huurder en begeleiden bezichtigingen, selectie, overeenkomst, borg en sleuteloverdracht.",
  },
  {
    title: "Vastgoedbeheer",
    slug: "vastgoedbeheer-torremolinos",
    price: "Maatwerk",
    icon: ShieldCheck,
    text: "Ook zonder verhuur houden we toezicht: periodieke controles, sleutelbeheer, leveranciersbezoek en opvolging van bijzonderheden.",
  },
  {
    title: "Schoonmaak & onderhoud",
    slug: "schoonmaak-onderhoud-torremolinos",
    price: "Na woningcheck",
    icon: Sparkles,
    text: "Lokale teams regelen wisselschoonmaak en linnen; bevindingen, kleine reparaties en onderhoud worden direct opgevolgd.",
  },
  {
    title: "Renovatie & inrichting",
    slug: "renovatie-inrichting-torremolinos",
    price: "Offerte op maat",
    icon: Hammer,
    text: "Van een gerichte opfrisbeurt tot complete inrichting of verbouwing, afgestemd op duurzaam gebruik en sterke verhuurpresentatie.",
  },
];

const faqs = [
  [
    "Wat kost vakantieverhuurbeheer in Torremolinos?",
    "Na een kennismaking en woningcheck ontvangt u een voorstel dat past bij de woning, de verhuurvorm en de gewenste dienstverlening. We leggen vooraf duidelijk vast wat inbegrepen is.",
  ],
  [
    "Wat kost midterm- of langetermijnverhuur?",
    "Voor bemiddeling, selectie en plaatsing geldt een eenmalige vergoeding van één maand huur. Eventueel doorlopend beheer spreken we los daarvan af.",
  ],
  [
    "Worden schoonmaakkosten van de huuropbrengst afgetrokken?",
    "De normale eindschoonmaak en was worden bij vakantieverhuur aan de gast doorbelast. Een deep clean, schadeherstel of technisch onderhoud valt buiten die reguliere wissel.",
  ],
  [
    "Kan ik mijn woning zelf blijven gebruiken?",
    "Zeker. We blokkeren uw eigen verblijven vooraf en stemmen de verhuurstrategie af op de periodes waarin u zelf naar Torremolinos wilt komen.",
  ],
  [
    "Op welke verhuurplatforms wordt mijn woning aangeboden?",
    "Per woning kiezen we de kanalen die passen bij doelgroep en verhuurvorm, waaronder Airbnb en Booking.com. Eén centraal kalenderbeheer voorkomt dubbele reserveringen.",
  ],
  [
    "Verzorgen jullie ook alleen vastgoedbeheer?",
    "Ja. Ook zonder verhuur kunnen we periodieke woningcontroles, sleutelbeheer, toegang en praktische onderhoudscoördinatie verzorgen.",
  ],
  [
    "In welke delen van Torremolinos zijn jullie actief?",
    "We ondersteunen eigenaren in onder meer Torremolinos Centro, Playamar, La Carihuela, Los Álamos, El Bajondillo, El Pinillo, La Colina en Montemar. De mogelijkheden worden altijd per woning en locatie beoordeeld.",
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
      { "@type": "Place", name: "Playamar" },
      { "@type": "Place", name: "La Carihuela" },
      { "@type": "Place", name: "Los Álamos" },
      { "@type": "Place", name: "El Bajondillo" },
      { "@type": "Place", name: "El Pinillo" },
      { "@type": "Place", name: "La Colina" },
      { "@type": "Place", name: "Montemar" },
      { "@type": "Place", name: "El Calvario" },
      { "@type": "Place", name: "Cortijo de Maza" },
    ],
    email: siteConfig.contact.email,
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
          <a className="btn btn-small header-cta" href={leadHref}>
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
            <a href="/woning-aanmelden/">Woning aanmelden</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <p className="kicker">
            Voor Nederlandse woningeigenaren aan de Costa del Sol
          </p>
          <h1>Fullservice verhuurbeheer in Torremolinos</h1>
          <p>
            Wij verzorgen de verhuur van uw vakantiewoning van A tot Z: van
            Airbnb en Booking.com tot gastenservice, schoonmaak, onderhoud en
            controles ter plaatse. Eén Nederlandstalig aanspreekpunt voor u als
            eigenaar.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href="/contact/">
              Ontvang vrijblijvend verhuuradvies
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
            <b>Lokale uitvoering</b> in Torremolinos en directe omgeving
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Woningen en vastgoed in Torremolinos"
      >
        <figure className="showcase-wide">
          <img
            src="/urbanisatie-zwembad-estepona.webp"
            alt="Mediterrane urbanisatie met zwembad aan de Costa del Sol"
            width="1800"
            height="1013"
            loading="eager"
          />
          <figcaption>Leven en verhuren aan de Costa del Sol</figcaption>
        </figure>
        <figure className="showcase-pool">
          <img
            src="/zonnig-terras-zeezicht-estepona.webp"
            alt="Zonnig terras met uitzicht op zee aan de Costa del Sol"
            width="1200"
            height="800"
            loading="lazy"
          />
          <figcaption>Palmen, zon en buitenleven</figcaption>
        </figure>
        <figure className="showcase-sunset">
          <img
            src="/woning-interieur-estepona.webp"
            alt="Licht en verzorgd interieur van een vakantiewoning"
            width="1500"
            height="1000"
            loading="lazy"
          />
          <figcaption>Avonden onder de Spaanse zon</figcaption>
        </figure>
        <figure className="showcase-garden">
          <img
            src="/urbanisatie-zwembad-estepona.webp"
            alt="Witte urbanisatie met groene tuin en zwembad in Torremolinos"
            width="1600"
            height="1067"
            loading="lazy"
          />
        </figure>
        <figure className="showcase-terrace">
          <img
            src="/zonnig-terras-zeezicht-estepona.webp"
            alt="Zonnig terras met zeezicht in Torremolinos"
            width="1600"
            height="1067"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="services" id="diensten">
        <div className="section-head">
          <p className="kicker orange">Onze diensten</p>
          <h2>Alle onderdelen van verhuurbeheer goed op elkaar afgestemd</h2>
          <p>
            Van de advertentie en gastenservice tot de wisselschoonmaak en
            technische opvolging: u hoeft niet zelf tussen verschillende
            partijen te schakelen.
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
          <h2>Niet iedere woning vraagt om dezelfde verhuurstrategie.</h2>
          <p>
            De ligging, het type woning en uw eigen gebruik bepalen welke route
            logisch is. We vergelijken vakantieverhuur, tijdelijke verhuur en
            langetermijnverhuur voordat we een concreet plan uitwerken.
          </p>
        </div>
        <div className="rental-options">
          <a href="/vakantieverhuur-torremolinos/">
            <small>Korte verblijven</small>
            <b>Vakantieverhuur</b>
            <span>Plan op maat →</span>
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
          <h2>Van eerste woningcheck naar dagelijkse uitvoering</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Kennismaking</h3>
              <p>
                We bespreken uw woning, uw doelen, het gewenste eigen gebruik
                en de verhuurvorm die u voor ogen heeft.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Woningcheck en voorstel</h3>
              <p>
                Op locatie bekijken we presentatie, inventaris, toegang en
                praktische aandachtspunten. Daarna volgt een duidelijk voorstel.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Voorbereiding</h3>
              <p>
                De woningpresentatie, kanalen, prijsaanpak, gasteninformatie en
                lokale werkafspraken worden zorgvuldig ingericht.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Start en opvolging</h3>
              <p>
                Na de start coördineren wij het dagelijkse beheer en houden we u
                op de hoogte van reserveringen en relevante woningzaken.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="owner-experience" aria-label="De beleving van professioneel woningbeheer">
        <div className="owner-experience-copy">
          <p className="kicker orange">Uw woning, onze aandacht</p>
          <h2>Meer rust. Meer grip. Een woning die er altijd goed bij staat.</h2>
          <p>
            Van de eerste indruk van uw advertentie tot de controle na vertrek:
            we bewaken de uitstraling én de praktische details die het verschil
            maken voor gasten en eigenaren.
          </p>
          <a className="dark-link" href="/woning-aanmelden/">
            Bespreek uw woning met ons →
          </a>
        </div>
        <figure className="owner-experience-main">
          <img
            src="/torremolinos-property.webp"
            alt="Verzorgde woning in Torremolinos met uitzicht op zee"
            width="1200"
            height="800"
            loading="lazy"
          />
        </figure>
        <figure className="owner-experience-detail">
          <img
            src="/woning-interieur-estepona.webp"
            alt="Licht en verzorgd interieur van een woning in Torremolinos"
            width="1200"
            height="800"
            loading="lazy"
          />
          <figcaption>Presentatie, controle en lokale opvolging</figcaption>
        </figure>
      </section>

      <section className="regions compact-regions" id="regios">
        <div className="section-head">
          <p className="kicker orange">Lokaal werkgebied</p>
          <h2>Lokale kennis van kust, centrum en woonwijken</h2>
          <p>
            Een strandappartement in La Carihuela vraagt om een andere aanpak
            dan een woning in Montemar of El Pinillo. We stemmen presentatie,
            bereikbaarheid en lokale uitvoering af op de precieze ligging.
          </p>
        </div>
        <div className="area-list" aria-label="Werkgebieden rond Torremolinos">
          <b>Torremolinos Centro</b>
          <b>Playamar</b>
          <b>La Carihuela</b>
          <b>Los Álamos</b>
          <b>El Bajondillo</b>
          <b>El Pinillo</b>
          <b>El Calvario</b>
          <b>Cortijo de Maza</b>
        </div>
      </section>

      <section className="home-team">
        <div className="home-team-copy">
          <p className="kicker orange">Ons team</p>
          <h2>Een vast aanspreekpunt, ondersteund door mensen ter plaatse.</h2>
          <p>
            De afspraken over uw woning blijven bij één contactpersoon. Voor de
            uitvoering werken we met collega’s en vakmensen aan de Costa del Sol,
            zodat vragen en werkzaamheden niet tussen partijen blijven liggen.
          </p>
          <a className="dark-link" href="/over-ons/">
            Maak kennis met het volledige team →
          </a>
        </div>
        <div className="home-team-grid">
          {homepageTeam.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.alt} width="640" height="640" loading="lazy" />
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
          <h2>Kennis voor eigenaren die betere keuzes willen maken</h2>
          <p>
            Lees praktische uitleg over tarieven, prijsstrategie, regelgeving,
            verhuurvormen en woningbeheer in Torremolinos.
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
          <h2>Belangrijke vragen vooraf beantwoord</h2>
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
          <p className="kicker">Vrijblijvende verhuurprognose</p>
          <h2>Bespreek de verhuurmogelijkheden van uw woning in Torremolinos</h2>
          <p>
            Deel de locatie, het woningtype en uw plannen voor eigen gebruik.
            Dan kijken we persoonlijk welke verhuurvorm en aanpak realistisch
            bij uw situatie passen.
          </p>
          <p>
            <a href={emailHref}>
              {siteConfig.contact.email}
            </a>
          </p>
          <ul>
            <li>Vrijblijvend en zonder verplichtingen</li>
            <li>Persoonlijk Nederlandstalig contact</li>
            <li>Duidelijk advies passend bij uw woning</li>
          </ul>
          <a className="btn" href={leadHref}>Meld uw woning aan →</a>
        </div>
        <form
          action={leadFormAction}
          method="post"
        >
          <input type="hidden" name="_subject" value="Nieuwe lead via Verhuurbeheer Torremolinos – homepage" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={absoluteUrl("/bedankt/")} />
          <input type="hidden" name="bron_website" value="verhuurbeheertorremolinos.nl" />
          <input type="hidden" name="bron_formulier" value="Homepage" />
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
