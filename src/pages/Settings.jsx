import { useState } from 'react'
import { Save, Upload } from 'lucide-react'

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

  const handleBusinessChange = (field, value) => {
    setBusinessInfo({ ...businessInfo, [field]: value })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Customize your invoicing and business preferences</p>
      </div>

      <div className="space-y-6">
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
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={invoiceTemplate.primaryColor}
                    onChange={(e) => setInvoiceTemplate({ ...invoiceTemplate, primaryColor: e.target.value })}
                    className="w-12 h-10 cursor-pointer rounded"
                  />
                  <input
                    type="text"
                    value={invoiceTemplate.primaryColor}
                    className="flex-1"
                    disabled
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Accent Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={invoiceTemplate.accentColor}
                    onChange={(e) => setInvoiceTemplate({ ...invoiceTemplate, accentColor: e.target.value })}
                    className="w-12 h-10 cursor-pointer rounded"
                  />
                  <input
                    type="text"
                    value={invoiceTemplate.accentColor}
                    className="flex-1"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Tax Settings</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tax Rate (%)</label>
                <input
                  type="number"
                  value={taxSettings.taxRate}
                  onChange={(e) => setTaxSettings({ ...taxSettings, taxRate: parseFloat(e.target.value) })}
                  className="w-full"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tax ID / EIN</label>
                <input
                  type="text"
                  value={taxSettings.taxId}
                  onChange={(e) => setTaxSettings({ ...taxSettings, taxId: e.target.value })}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="enableTax"
                checked={taxSettings.enableTaxCalculation}
                onChange={(e) => setTaxSettings({ ...taxSettings, enableTaxCalculation: e.target.checked })}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="enableTax" className="text-sm text-gray-300 cursor-pointer">
                Enable automatic tax calculation on invoices
              </label>
            </div>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Payment Methods</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="bankTransfer"
                checked={paymentMethods.bankTransfer}
                onChange={(e) => setPaymentMethods({ ...paymentMethods, bankTransfer: e.target.checked })}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="bankTransfer" className="text-sm text-gray-300 cursor-pointer">
                Bank Transfer (ACH)
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="creditCard"
                checked={paymentMethods.creditCard}
                onChange={(e) => setPaymentMethods({ ...paymentMethods, creditCard: e.target.checked })}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="creditCard" className="text-sm text-gray-300 cursor-pointer">
                Credit Card
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="paypal"
                checked={paymentMethods.paypal}
                onChange={(e) => setPaymentMethods({ ...paymentMethods, paypal: e.target.checked })}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="paypal" className="text-sm text-gray-300 cursor-pointer">
                PayPal
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold py-3 rounded-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          Save All Settings
        </button>
      </div>
    </div>
  )
}
