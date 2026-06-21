export default function Impressum() {
  return (
    <div className="min-h-screen bg-navy-950 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Impressum</h1>
          <p className="text-slate-400">Offenlegung gemäß § 5 TMG (Telemediengesetz)</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* 1. Anbieter */}
          <section className="bg-navy-900 rounded-lg p-6 border border-navy-700">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-lg text-sm">1</span>
              <h2 className="text-xl font-bold text-white mt-1">Anbieter (gemäß § 5 TMG)</h2>
            </div>
            <p className="text-slate-300 ml-11">
              <strong>InvoiceFlow</strong><br />
              Ein Softwareprodukt zur digitalen Rechnungsverwaltung und Abrechnung
            </p>
          </section>

          {/* 2. Kontakt */}
          <section className="bg-navy-900 rounded-lg p-6 border border-navy-700">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-lg text-sm">2</span>
              <h2 className="text-xl font-bold text-white mt-1">Kontaktinformationen</h2>
            </div>
            <div className="text-slate-300 ml-11 space-y-2">
              <p><strong>E-Mail:</strong> support@invoiceflow.local</p>
              <p><strong>Website:</strong> invoiceflow.local</p>
              <p className="text-slate-400 text-sm mt-4">
                Für Fragen, technische Probleme oder allgemeine Anfragen kontaktieren Sie uns über die oben angegebenen Kontaktdaten.
              </p>
            </div>
          </section>

          {/* 3. Verantwortliche Personen */}
          <section className="bg-navy-900 rounded-lg p-6 border border-navy-700">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-lg text-sm">3</span>
              <h2 className="text-xl font-bold text-white mt-1">Verantwortliche Personen</h2>
            </div>
            <p className="text-slate-300 ml-11">
              Die Verwaltung und Betrieb von InvoiceFlow erfolgt durch das Entwicklungsteam. Im Sinne des TMG sind diese für den Inhalt und Betrieb dieser Anwendung verantwortlich.
            </p>
          </section>

          {/* 4. Haftungsausschluss */}
          <section className="bg-navy-900 rounded-lg p-6 border border-navy-700">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-lg text-sm">4</span>
              <h2 className="text-xl font-bold text-white mt-1">Haftungsausschluss</h2>
            </div>
            <div className="text-slate-300 ml-11 space-y-4">
              <p>
                <strong>Gewährleistung für Inhalte:</strong><br />
                Die Inhalte dieser Webseite wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
              </p>
              <p>
                <strong>Haftung für Links:</strong><br />
                Externe Links sind als solche deutlich gekennzeichnet. Der Anbieter übernimmt keine Verantwortung für die Inhalte externer Websites.
              </p>
              <p className="bg-amber-500/10 border border-amber-500/20 rounded p-4">
                <strong className="text-amber-300">⚠️ Wichtiger Haftungsausschluss – Finanzielle und steuerliche Nutzung:</strong><br />
                <span className="text-slate-300">
                  InvoiceFlow ist ein Rechnungs- und Abrechnungssoftware-Tool und stellt KEINE Steuer-, Rechnungs- oder Finanzberatung dar. 
                  InvoiceFlow ist KEIN Steuerberater und kann keine Steuerberatung erteilen. 
                  Die in InvoiceFlow generierten Rechnungen und Berichte dienen nur zu Informationszwecken und ersetzen keine Beratung durch qualifizierte 
                  Fachleute (z. B. Steuerberater, Buchhalter, Rechtsanwälte).<br /><br />
                  Nutzer sind selbst verantwortlich für die Einhaltung aller geltenden Gesetze, Verordnungen und Steuerverpflichtungen in ihrer Jurisdiktion. 
                  Der Anbieter übernimmt keine Haftung für Fehler, Auslassungen, Ungenauigkeiten oder Verstöße gegen gesetzliche Anforderungen, die durch die Nutzung 
                  von InvoiceFlow entstehen könnten.
                </span>
              </p>
            </div>
          </section>

          {/* 5. Urheberrecht */}
          <section className="bg-navy-900 rounded-lg p-6 border border-navy-700">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white font-bold rounded-lg text-sm">5</span>
              <h2 className="text-xl font-bold text-white mt-1">Urheberrecht</h2>
            </div>
            <div className="text-slate-300 ml-11 space-y-3">
              <p>
                Alle Texte, Grafiken, Logos und weitere Inhalte dieser Webseite und Anwendung sind urheberrechtlich geschützt. 
                Die unbefugte Reproduktion, Verbreitung oder Vervielfältigung ohne ausdrückliche schriftliche Genehmigung ist untersagt.
              </p>
              <p className="text-slate-400 text-sm">
                © InvoiceFlow. Alle Rechte vorbehalten.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-navy-700">
            <p className="text-slate-400 text-sm">
              Dieses Impressum wurde zuletzt aktualisiert am {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
