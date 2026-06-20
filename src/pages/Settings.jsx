import { useState, useEffect } from 'react'
import { Save, Upload, Key } from 'lucide-react'

export default function Settings() {
  const [businessInfo, setBusinessInfo] = useState({
    companyName: 'Your Company',
    email: 'billing@yourcompany.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St, City, State 12345',
  })

  const [invoiceTemplate, setInvoiceTemplate] = useState({
    logoUrl: '',
    primaryColor: '#f59e0b',
    accentColor: '#0d1117',
  })

  const [taxSettings, setTaxSettings] = useState({
    taxRate: 15,
    taxId: 'EIN123456789',
    enableTaxCalculation: true,
  })

  const [paymentMethods, setPaymentMethods] = useState({
    bankTransfer: true,
    creditCard: true,
    paypal: false,
  })

  const [groqKey, setGroqKey] = useState('')
  const [keySaved, setKeySaved] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('invoiceflow_groq_key')
    if (saved) setGroqKey(saved)
  }, [])

  const handleBusinessChange = (field, value) => {
    setBusinessInfo({ ...businessInfo, [field]: value })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  const handleSaveGroqKey = () => {
    localStorage.setItem('invoiceflow_groq_key', groqKey)
    setKeySaved(true)
    setTimeout(() => setKeySaved(false), 2000)
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Customize your invoicing and business preferences</p>
      </div>

      <div className="space-y-6">

        {/* AI Configuration */}
        <div className="bg-navy-900 border border-amber-500/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-1">
            <Key className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">AI Configuration</h2>
            <span className="ml-2 bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded">AI</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Add your Groq API key to enable AI Invoice Assistant features</p>
          <div className="flex gap-2">
            <input
              type="password"
              value={groqKey}
              onChange={(e) => setGroqKey(e.target.value)}
              placeholder="gsk_..."
              className="flex-1 bg-navy-800 border border-navy-600 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleSaveGroqKey}
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded transition-colors"
            >
              {keySaved ? 'Saved ✓' : 'Save Key'}
            </button>
          </div>
          {groqKey && (
            <p className="text-green-400 text-xs mt-2">✓ API key is set — AI features are ready</p>
          )}
          <p className="text-gray-500 text-xs mt-2">
            Get a free key at{' '}
            <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
              console.groq.com
            </a>
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Business Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                value={businessInfo.companyName}
                onChange={(e) => handleBusinessChange('companyName', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={businessInfo.email}
                onChange={(e) => handleBusinessChange('email', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                value={businessInfo.phone}
                onChange={(e) => handleBusinessChange('phone', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <input
                type="text"
                value={businessInfo.address}
                onChange={(e) => handleBusinessChange('address', e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Invoice Template</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Logo URL</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/logo.png"
                  className="flex-1"
                />
                <button className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded transition-colors">
                  <Upload className="w-4 h-4" />
                  Upload
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={invoiceTemplate.primaryColor}
                    onChange={(e) => setInvoiceTemplate({...invoiceTemplate, primaryColor: e.target.value})}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                  <input type="text" value={invoiceTemplate.primaryColor} readOnly className="flex-1" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Accent Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={invoiceTemplate.accentColor}
                    onChange={(e) => setInvoiceTemplate({...invoiceTemplate, accentColor: e.target.value})}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                  <input type="text" value={invoiceTemplate.accentColor} readOnly className="flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Tax Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tax Rate (%)</label>
              <input
                type="number"
                value={taxSettings.taxRate}
                onChange={(e) => setTaxSettings({...taxSettings, taxRate: e.target.value})}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tax ID / EIN</label>
              <input
                type="text"
                value={taxSettings.taxId}
                onChange={(e) => setTaxSettings({...taxSettings, taxId: e.target.value})}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={taxSettings.enableTaxCalculation}
                onChange={(e) => setTaxSettings({...taxSettings, enableTaxCalculation: e.target.checked})}
                className="w-4 h-4"
              />
              <span className="text-gray-300 text-sm">Enable automatic tax calculation on invoices</span>
            </label>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Payment Methods</h2>
          <div className="space-y-3">
            {[
              { key: 'bankTransfer', label: 'Bank Transfer (ACH)' },
              { key: 'creditCard', label: 'Credit Card' },
              { key: 'paypal', label: 'PayPal' },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={paymentMethods[key]}
                  onChange={(e) => setPaymentMethods({...paymentMethods, [key]: e.target.checked})}
                  className="w-4 h-4"
                />
                <span className="text-gray-300">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          Save All Settings
        </button>
      </div>
    </div>
  )
}
