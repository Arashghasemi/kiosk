<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: () => t("legal.title"),
  description: () => t("legal.subtitle"),
  robots: "noindex, follow",
});

const pageRef = ref<HTMLElement | null>(null);
useReveal(pageRef);

const CONTACT_ADDRESS = "Lindenstraße 230, 40235 Düsseldorf";
const CONTACT_EMAIL = "lindenbuedchen@gmail.com";
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t("legal.eyebrow") }}</p>
      <h1>{{ t("legal.title") }}</h1>
      <p class="section-page__subtitle">{{ t("legal.subtitle") }}</p>
    </header>

    <div class="legal-content" data-reveal>
      <template v-if="locale === 'de'">
        <section class="legal-block linden-card">
          <h2>Impressum</h2>
          <p class="legal-block__note">
            Angaben gemäß § 5 TMG. Die eckig geklammerten Felder sind
            Platzhalter und müssen vor Veröffentlichung durch die echten Angaben
            ersetzt werden.
          </p>

          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Lindenbüdchen<br />
            [Vollständiger Name der verantwortlichen Person bzw. Inhaber:in
            einsetzen]<br />
            {{ CONTACT_ADDRESS }}
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a
            ><br />
            Telefon: [noch zu ergänzen]
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            [Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG einsetzen,
            falls vorhanden]
          </p>

          <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
          <p>
            [Vollständiger Name der/des Verantwortlichen einsetzen]<br />
            {{ CONTACT_ADDRESS }}
          </p>

          <h3>Verbraucherstreitbeilegung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr</a
            >. Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h3>Haftung für Inhalte und Links</h3>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Für die Inhalte
            verlinkter externer Seiten sind ausschließlich deren Betreiber
            verantwortlich; eine permanente inhaltliche Kontrolle der verlinkten
            Seiten erfolgt nicht. Bei Bekanntwerden von Rechtsverletzungen
            werden entsprechende Links umgehend entfernt.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Betreiber dieser Website erstellten Inhalte und Werke
            unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
            solche gekennzeichnet.
          </p>
        </section>

        <section class="legal-block linden-card">
          <h2>Datenschutzerklärung</h2>

          <h3>Verantwortliche Stelle</h3>
          <p>
            Lindenbüdchen<br />
            {{ CONTACT_ADDRESS }}<br />
            E-Mail: <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          </p>

          <h3>Hosting</h3>
          <p>
            Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seiten
            werden automatisch technische Informationen (sogenannte
            Server-Logdaten, u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite) verarbeitet, um die Website sicher und stabil
            bereitzustellen. Dies erfolgt auf Grundlage unseres berechtigten
            Interesses (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h3>Feedback-Formular</h3>
          <p>
            Wenn du über das Feedback-Formular eine Nachricht sendest,
            verarbeiten wir die von dir freiwillig angegebenen Daten (optionaler
            Name, Sternebewertung, Nachricht), um dein Feedback zu lesen und
            gegebenenfalls zu beantworten. Die Nachricht wird per E-Mail über
            den Dienst Resend an unser Postfach ({{ CONTACT_EMAIL }})
            zugestellt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung durch Absenden des Formulars). Wir erheben keine
            weiteren personenbezogenen Daten als die, die du selbst im Formular
            einträgst.
          </p>

          <h3>Cookies</h3>
          <p>
            Diese Website setzt selbst keine Cookies für Analyse- oder
            Marketingzwecke.
          </p>

          <h3>Webanalyse mit Vercel Analytics</h3>
          <p>
            Wir nutzen Vercel Analytics, einen datenschutzfreundlichen
            Webanalysedienst unseres Hosting-Anbieters Vercel Inc., um
            grundlegende Nutzungsstatistiken zu erheben (z. B. aufgerufene
            Seiten, ungefähre Herkunftsregion, Gerätetyp sowie technische
            Ladezeiten/Core Web Vitals). Vercel Analytics setzt dabei keine
            Cookies und erstellt kein dauerhaftes, geräteübergreifendes Profil –
            Besucher:innen werden stattdessen über einen Hash aus technischen
            Anfragedaten erkannt, der regelmäßig zurückgesetzt wird. Es werden
            nur aggregierte Daten gespeichert, aus denen einzelne Personen nicht
            identifiziert werden können. Rechtsgrundlage ist unser berechtigtes
            Interesse an der Analyse und Verbesserung unseres Angebots (Art. 6
            Abs. 1 lit. f DSGVO). Da keine Cookies oder vergleichbaren
            Technologien auf deinem Endgerät gespeichert oder ausgelesen werden,
            ist hierfür keine Einwilligung nach § 25 TTDSG erforderlich. Weitere
            Informationen stellt Vercel unter
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/docs/analytics/privacy-policy</a
            >
            bereit. Vercel Inc. hat seinen Sitz in den USA und gibt an, am EU-US
            Data Privacy Framework teilzunehmen, das ein angemessenes
            Datenschutzniveau für die Datenübermittlung in die USA sicherstellen
            soll.
          </p>

          <h3>Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung oder
            Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie
            ein Widerspruchsrecht gegen die Verarbeitung und ein Recht auf
            Datenübertragbarkeit. Zudem hast du das Recht, dich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren. Wende dich dazu gerne an
            {{ CONTACT_EMAIL }}.
          </p>
        </section>
      </template>

      <template v-else>
        <section class="legal-block linden-card">
          <h2>Legal notice (Impressum)</h2>
          <p class="legal-block__note">
            Required under German law (§ 5 TMG). This is an English summary; the
            German version above is legally binding. Bracketed fields are
            placeholders to be completed before publishing.
          </p>

          <h3>Operator</h3>
          <p>
            Lindenbüdchen<br />
            [Full legal name of the responsible person / owner]<br />
            {{ CONTACT_ADDRESS }}
          </p>

          <h3>Contact</h3>
          <p>
            Email: <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a
            ><br />
            Phone: [to be added]
          </p>

          <h3>VAT ID</h3>
          <p>[VAT identification number per § 27a UStG, if applicable]</p>

          <h3>Online dispute resolution</h3>
          <p>
            The European Commission provides a platform for online dispute
            resolution:
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr</a
            >. We are not obliged or willing to take part in dispute resolution
            proceedings before a consumer arbitration board.
          </p>
        </section>

        <section class="legal-block linden-card">
          <h2>Privacy policy</h2>

          <h3>Controller</h3>
          <p>
            Lindenbüdchen<br />
            {{ CONTACT_ADDRESS }}<br />
            Email: <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          </p>

          <h3>Hosting</h3>
          <p>
            This website is hosted by Vercel Inc. Visiting the site
            automatically processes technical server log data (e.g. IP address,
            date and time of access, page requested) to keep the site secure and
            stable, based on our legitimate interest (Art. 6(1)(f) GDPR).
          </p>

          <h3>Feedback form</h3>
          <p>
            If you submit the feedback form, we process the data you choose to
            provide (optional name, star rating, message) to read and, where
            useful, respond to your feedback. The message is delivered by email
            via Resend to our inbox ({{ CONTACT_EMAIL }}). The legal basis is
            Art. 6(1)(a) GDPR (consent given by submitting the form). We do not
            collect any personal data beyond what you enter yourself.
          </p>

          <h3>Cookies</h3>
          <p>
            This website itself does not set cookies for analytics or marketing
            purposes.
          </p>

          <h3>Web analytics with Vercel Analytics</h3>
          <p>
            We use Vercel Analytics, a privacy-friendly analytics service from
            our hosting provider Vercel Inc., to collect basic usage statistics
            (e.g. pages viewed, approximate region, device type, and technical
            loading performance / Core Web Vitals). Vercel Analytics sets no
            cookies and does not build a persistent, cross-device profile —
            visitors are instead recognized via a hash derived from technical
            request data that is reset regularly. Only aggregated data is
            stored, from which individual people cannot be identified. The legal
            basis is our legitimate interest in analyzing and improving our
            website (Art. 6(1)(f) GDPR). Because no cookies or similar
            technologies are stored on or read from your device, no consent
            under § 25 TTDSG (the German implementation of the ePrivacy
            Directive) is required for this. More information is available at
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/docs/analytics/privacy-policy</a
            >. Vercel Inc. is based in the US and states that it participates in
            the EU-US Data Privacy Framework, intended to ensure an adequate
            level of data protection for transfers to the US.
          </p>

          <h3>Your rights</h3>
          <p>
            You have the right to access, rectify, erase or restrict the
            processing of your personal data, the right to object to processing,
            and the right to data portability. You also have the right to lodge
            a complaint with a data protection supervisory authority. Feel free
            to reach out to
            {{ CONTACT_EMAIL }}.
          </p>
        </section>
      </template>
    </div>
  </div>
</template>

<style scoped>
.section-page {
  padding-block: 3rem 5rem;
}

.section-page__head {
  max-width: 60ch;
  margin-bottom: 2.5rem;
}

.section-page__head h1 {
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  margin-top: 0.6rem;
}

.section-page__subtitle {
  margin-top: 0.9rem;
  font-size: 1.05rem;
}

.legal-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 68ch;
}

.legal-block {
  padding: 2rem;
}

.legal-block h2 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.legal-block h3 {
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--linden-green-900);
}

.legal-block p {
  font-size: 0.95rem;
  line-height: 1.65;
}

.legal-block a {
  color: var(--linden-green-700);
  text-decoration: underline;
}

.legal-block__note {
  background: var(--linden-terracotta-100);
  color: var(--linden-charcoal);
  padding: 0.85rem 1rem;
  border-radius: var(--linden-radius-sm);
  font-size: 0.85rem !important;
  margin-top: 0.75rem;
}
</style>
