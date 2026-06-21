import React from 'react'
import { Shield } from 'lucide-react'

export default function Datenschutz() {
  const sections = [
    {
      num: 1,
      title: 'Verantwortlicher für die Datenverarbeitung',
      content: (
        <div className="space-y-2">
          <p>InvoiceFlow ist verantwortlich für alle Datenverarbeitungen innerhalb dieser Anwendung.</p>
          <p>Als Nutzer vertrauen Sie InvoiceFlow Ihre sensiblen Geschäfts- und Kundendaten an. Wir nehmen diese Verantwortung sehr ernst.</p>
        </div>
      )
    },
    {
      num: 2,
      title: 'Datenerhebung und Verarbeitung',
      content: (
        <div className="space-y-2">
          <p>InvoiceFlow erhebt und verarbeitet folgende Kategorien von Daten:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Kontoinformationen:</strong> E-Mail-Adresse, Name, Unternehmensdetails</li>
            <li><strong>Rechnungsdaten:</strong> Rechnungsnummern, Beträge, Daten, Kundendetails</li>
            <li><strong>Kundendaten:</strong> Kontaktdaten von Geschäftspartnern und Rechnungsempfängern</li>
            <li><strong>Zahlungsinformationen:</strong> Transaktionsdetails (ohne vollständige Kreditkartennummern)</li>
            <li><strong>Produktinformationen:</strong> Beschreibungen, Preise, Kategorien</li>
            <li><strong>Berichte und Analysen:</strong> Geschäftskennzahlen und Transaktionsmuster</li>
            <li><strong>Nutzungsdaten:</strong> Login-Zeiten, Aktivitäten in der Anwendung, IP-Adressen</li>
          </ul>
          <p className="pt-2">Diese Daten werden verarbeitet zur Bereitstellung der Rechnungs- und Zahlungsverwaltungsdienste sowie zur Verbesserung der Anwendung.</p>
        </div>
      )
    },
    {
      num: 3,
      title: 'Google OAuth-Authentifizierung (Login)',
      content: (
        <div className="space-y-2">
          <p>InvoiceFlow nutzt Google OAuth 2.0 für die Benutzerauthentifizierung. Dies ermöglicht:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Sichere, passwortlose Anmeldung mit Ihrem Google-Konto</li>
            <li>Abruf grundlegender Kontoinformationen (E-Mail, Name, Profilfoto)</li>
            <li>Keine Speicherung von Passwörtern durch InvoiceFlow</li>
          </ul>
          <p className="pt-2"><strong>Google-Datenschutz:</strong> Ihre Interaktionen mit Google unterliegen den <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Google-Datenschutzrichtlinien</a>.</p>
        </div>
      )
    },
    {
      num: 4,
      title: 'Speicherung und Sicherheit',
      content: (
        <div className="space-y-2">
          <p>InvoiceFlow speichert Ihre Daten mit folgenden Sicherheitsmaßnahmen:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Verschlüsselte Übertragung (HTTPS/TLS)</li>
            <li>Verschlüsselte Speicherung sensibler Daten</li>
            <li>Zugriffskontrolle und Authentifizierung</li>
            <li>Regelmäßige Sicherheitsüberprüfungen</li>
          </ul>
          <p className="pt-2">Daten werden so lange gespeichert, wie Ihr Konto aktiv ist oder wie gesetzlich erforderlich.</p>
        </div>
      )
    },
    {
      num: 5,
      title: 'Ihre Rechte nach DSGVO',
      content: (
        <div className="space-y-2">
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Recht auf Auskunft:</strong> Sie können jederzeit erfragen, welche Daten InvoiceFlow über Sie speichert</li>
            <li><strong>Recht auf Berichtigung:</strong> Sie können fehlerhafte Daten korrigieren lassen</li>
            <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen („Recht auf Vergessenwerden")</li>
            <li><strong>Recht auf Einschränkung:</strong> Sie können die Verarbeitung einschränken lassen</li>
            <li><strong>Recht auf Datenportabilität:</strong> Sie können Ihre Daten in maschinenlesbarer Form erhalten</li>
            <li><strong>Recht auf Widerspruch:</strong> Sie können der Verarbeitung widersprechen</li>
          </ul>
          <p className="pt-2">Um diese Rechte auszuüben, kontaktieren Sie uns über die unten angegebenen Kontaktdaten.</p>
        </div>
      )
    },
    {
      num: 6,
      title: 'Kontakt und Datenschutzanfragen',
      content: (
        <div className="space-y-2">
          <p>Für Datenschutzfragen, Auskunftsanfragen oder um Ihre Rechte auszuüben, kontaktieren Sie:</p>
          <div className="bg-navy-800 border border-navy-600 rounded-lg p-4 my-3 text-slate-300">
            <p><strong>InvoiceFlow Support</strong></p>
            <p>E-Mail: privacy@invoiceflow.app</p>
            <p>Webseite: https://invoiceflow.app</p>
          </div>
          <p>Wir werden auf Ihre Anfrage innerhalb von 30 Tagen reagieren. Falls erforderlich, können wir um weitere Informationen zur Überprüfung Ihrer Identität bitten.</p>
          <p className="pt-2"><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht, eine Beschwerde bei Ihrer lokalen Datenschutzbehörde einzureichen, falls Sie der Meinung sind, dass InvoiceFlow Ihre Rechte verletzt.</p>
        </div>
      )
    },
    {
      num: 7,
      title: 'Änderungen dieser Datenschutzrichtlinie',
      content: (
        <div className="space-y-2">
          <p>InvoiceFlow kann diese Datenschutzrichtlinie jederzeit aktualisieren. Bei wesentlichen Änderungen werden Sie per E-Mail benachrichtigt.</p>
          <p className="text-xs text-slate-500 pt-2">Zuletzt aktualisiert: Dezember 2024</p>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-slate-100 p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Datenschutz</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Datenschutzerklärung für InvoiceFlow nach DSGVO (Datenschutz-Grundverordnung)
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.num} className="border border-navy-700 rounded-xl overflow-hidden hover:border-navy-600 transition-colors">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-navy-800 to-navy-750 p-6 border-b border-navy-700 flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-amber-500 flex items-center justify-center">
                  <span className="text-navy-950 font-bold text-lg">{section.num}</span>
                </div>
                <h2 className="text-xl font-semibold text-white flex-1 pt-1">{section.title}</h2>
              </div>

              {/* Section Content */}
              <div className="p-6 bg-navy-900/50 text-slate-300 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-navy-700 text-center text-slate-500 text-sm">
          <p>
            Diese Datenschutzerklärung wird bereitgestellt, um Ihre Rechte nach der DSGVO zu schützen.
          </p>
          <p className="mt-2">
            © 2024 InvoiceFlow. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  )
}
