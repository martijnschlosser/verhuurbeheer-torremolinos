import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { leadFormAction } from "../site-config";

export const metadata: Metadata = {
  title: "Vrijblijvend uw woning aanmelden",
  description: "Meld uw woning in Torremolinos vrijblijvend aan voor professioneel verhuurbeheer of vastgoedbeheer.",
  alternates: { canonical: "/woning-aanmelden/" },
};

export default function WoningAanmeldenPage() {
  return (
    <main className="woning-aanmelden-page" id="top">
      <header className="aanmeld-header">
        <a href="/" aria-label="Verhuurbeheer Torremolinos – naar Home">
          <img src="/verhuurbeheer-torremolinos-logo.png" alt="Logo Verhuurbeheer Torremolinos" width="50" height="50" />
        </a>
        <a href="/contact/">Contact</a>
      </header>

      <section className="aanmeld-shell">
        <div className="aanmeld-intro">
          <p className="aanmeld-kicker">Voor woningeigenaren in Torremolinos</p>
          <h1>Vrijblijvend uw woning aanmelden</h1>
          <p className="aanmeld-copy">
            Benieuwd wat wij voor uw woning kunnen betekenen? Vul het formulier in. Wij nemen binnen één werkdag persoonlijk contact met u op.
          </p>
          <div className="aanmeld-trust" aria-label="Voordelen">
            <span><CheckCircle2 aria-hidden="true" /> Nederlandstalig team</span>
            <span><CheckCircle2 aria-hidden="true" /> Lokaal aan de Costa del Sol</span>
            <span><CheckCircle2 aria-hidden="true" /> Binnen één werkdag reactie</span>
          </div>
        </div>

        <form className="aanmeld-form" action={leadFormAction} method="post">
          <input type="hidden" name="_subject" value="Nieuwe woningaanmelding via Verhuurbeheer Torremolinos" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="bron_website" value="verhuurbeheertorremolinos.nl" />
          <input type="hidden" name="bron_formulier" value="Woning aanmelden" />
          <label>Naam<input name="naam" autoComplete="name" required /></label>
          <label>E-mailadres<input type="email" name="email" autoComplete="email" required /></label>
          <label>Telefoonnummer<input type="tel" name="telefoon" autoComplete="tel" /></label>
          <label>Locatie woning<input name="locatie" placeholder="Bijv. Torremolinos of Selwo" required /></label>
          <label>Type woning<select name="type"><option>Appartement</option><option>Villa</option><option>Townhouse</option><option>Anders</option></select></label>
          <label>Gewenste dienst<select name="dienst"><option>Vakantieverhuur</option><option>Seizoens- en midtermverhuur</option><option>Langetermijnverhuur</option><option>Vastgoedbeheer</option><option>Schoonmaak & onderhoud</option><option>Renovatie & inrichting</option></select></label>
          <label className="wide">Is er al een verhuurlicentie?<select name="verhuurlicentie" defaultValue=""><option value="" disabled>Kies een antwoord</option><option>Ja</option><option>Nee</option><option>In aanvraag</option><option>Niet van toepassing / weet ik niet</option></select></label>
          <label className="wide">Uw vraag of toelichting<textarea name="bericht" rows={3} /></label>
          <button className="wide" type="submit">Verstuur uw aanvraag →</button>
          <small className="wide">Wij verwerken uw gegevens volgens onze <a href="/privacyverklaring/">privacyverklaring</a>.</small>
        </form>
      </section>

      <style>{`
        .woning-aanmelden-page{min-height:100vh;background:#f7f3ec;color:#17352f;font-family:inherit}
        .aanmeld-header{height:72px;display:flex;align-items:center;justify-content:space-between;max-width:1180px;margin:auto;padding:0 24px}
        .aanmeld-header a:last-child{color:#17352f;font-weight:700;text-decoration:none}
        .aanmeld-shell{max-width:1180px;margin:0 auto;padding:24px;display:grid;grid-template-columns:minmax(0,.85fr) minmax(520px,1.15fr);gap:54px;align-items:start}
        .aanmeld-intro{padding:34px 0 0;position:sticky;top:24px}
        .aanmeld-kicker{text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;font-weight:800;color:#a47932;margin:0 0 14px}
        .aanmeld-intro h1{font-size:clamp(2.5rem,5vw,4.7rem);line-height:.98;letter-spacing:-.045em;margin:0 0 22px;max-width:680px}
        .aanmeld-copy{font-size:1.08rem;line-height:1.65;max-width:570px;margin:0 0 26px;color:#48625d}
        .aanmeld-trust{display:grid;gap:12px;font-weight:750}
        .aanmeld-trust span{display:flex;align-items:center;gap:10px}
        .aanmeld-trust svg{width:20px;color:#a47932;flex:none}
        .aanmeld-form{background:#fff;border-radius:24px;padding:28px;box-shadow:0 22px 60px rgba(23,53,47,.12);display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .aanmeld-form label{display:grid;gap:7px;font-size:.85rem;font-weight:800}
        .aanmeld-form input,.aanmeld-form select,.aanmeld-form textarea{width:100%;box-sizing:border-box;border:1px solid #d9dfdc;border-radius:11px;background:#fff;padding:12px 13px;font:inherit;color:#17352f;min-height:46px}
        .aanmeld-form textarea{resize:vertical}
        .aanmeld-form .wide{grid-column:1/-1}
        .aanmeld-form button{border:0;border-radius:12px;padding:15px 20px;background:#17352f;color:white;font:inherit;font-weight:850;cursor:pointer}
        .aanmeld-form small{color:#6b7d78;text-align:center}.aanmeld-form small a{color:inherit}
        @media(max-width:800px){
          .aanmeld-header{height:60px;padding:0 16px}.aanmeld-header img{width:42px;height:42px}
          .aanmeld-shell{display:block;padding:4px 14px 18px}
          .aanmeld-intro{position:static;padding:12px 4px 18px}
          .aanmeld-kicker{margin-bottom:8px;font-size:.68rem}
          .aanmeld-intro h1{font-size:2.2rem;line-height:1.02;margin-bottom:12px}
          .aanmeld-copy{font-size:.96rem;line-height:1.45;margin-bottom:14px}
          .aanmeld-trust{grid-template-columns:1fr;gap:7px;font-size:.86rem}
          .aanmeld-trust svg{width:17px}
          .aanmeld-form{border-radius:18px;padding:18px 14px;grid-template-columns:1fr;gap:12px;box-shadow:0 14px 38px rgba(23,53,47,.11)}
          .aanmeld-form .wide{grid-column:auto}
          .aanmeld-form label{font-size:.8rem}.aanmeld-form input,.aanmeld-form select,.aanmeld-form textarea{min-height:44px;padding:10px 11px}
        }
      `}</style>
    </main>
  );
}
