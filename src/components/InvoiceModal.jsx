import { useState } from 'react'
import { X } from 'lucide-react'
import { formatCurrency } from '../utils/formatters'

const mockClients = [
  { id: 1, name: 'Acme Corp' },
  { id: 2, name: 'Tech Solutions' },
  { id: 3, name: 'Global Industries' },
  { id: 4, name: 'StartUp Inc' },
  { id: 5, name: 'Enterprise Ltd' },
]

const mockProducts = [
  { id: 1, name: 'Web Development', price: 5000 },
  { id: 2, name: 'UI/UX Design', price: 3000 },
  { id: 3, name: 'Consulting', price: 2000 },
  { id: 4, name: 'Support & Maintenance', price: 1500 },
]

export default function InvoiceModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    client: '',
    dueDate: '',
    notes: '',
    lineItems: [{ description: '', quantity: 1, unitPrice: 0, taxPercent: 0 }],
  })

  const calculateLineItemTotal = (item) => {
    const subtotal = item.quantity * item.unitPrice
    const tax = subtotal * (item.taxPercent / 100)
    return subtotal + tax
  }

  const subtotal = formData.lineItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0)
  const totalTax = formData.lineItems.reduce((sum, item) => {
    return sum + (item.quantity * item.unitPrice * (item.taxPercent / 100))
  }, 0)
  const total = subtotal + totalTax

  const handleLineItemChange = (index, field, value) => {
    const newItems = [...formData.lineItems]
    newItems[index] = { ...newItems[index], [field]: field === 'quantity' || field === 'unitPrice' || field === 'taxPercent' ? parseFloat(value) || 0 : value }
    setFormData({ ...formData, lineItems: newItems })
  }

  const addLineItem = () => {
    setFormData({
      ...formData,
      lineItems: [...formData.lineItems, { description: '', quantity: 1, unitPrice: 0, taxPercent: 0 }],
    })
  }

  const removeLineItem = (index) => {
    setFormData({
      ...formData,
      lineItems: formData.lineItems.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.client || !formData.dueDate || formData.lineItems.length === 0) {
      alert('Please fill in all required fields')
      return
    }
    onSubmit({
      client: formData.client,
      dueDate: formData.dueDate,
      amount: total,
      status: 'pending',
      notes: formData.notes,
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-navy-900 border border-navy-700 rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-navy-700 sticky top-0 bg-navy-900">
          <h2 className="text-xl font-bold text-white">Create Invoice</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Client</label>
              <select
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                required
                className="w-full"
              >
                <option value="">Select a client</option>
                {mockClients.map(client => (
                  <option key={client.id} value={client.name}>{client.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Line Items</h3>
            <div className="space-y-3">
              {formData.lineItems.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-2">
                  <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => handleLineItemChange(index, 'description', e.target.value)}
                    className="col-span-4"
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) => handleLineItemChange(index, 'quantity', e.target.value)}
                    className="col-span-2"
                    min="1"
                  />
                  <input
                    type="number"
                    placeholder="Unit Price"
                    value={item.unitPrice}
                    onChange={(e) => handleLineItemChange(index, 'unitPrice', e.target.value)}
                    className="col-span-2"
                    step="0.01"
                  />
                  <input
                    type="number"
                    placeholder="Tax %"
                    value={item.taxPercent}
                    onChange={(e) => handleLineItemChange(index, 'taxPercent', e.target.value)}
                    className="col-span-2"
                    min="0"
                    max="100"
                  />
                  <button
                    type="button"
                    onClick={() => removeLineItem(index)}
                    className="col-span-2 bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addLineItem}
              className="mt-3 text-amber-500 hover:text-amber-400 font-medium text-sm"
            >
              + Add Line Item
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Payment terms, notes, etc."
              rows="3"
              className="w-full"
            />
          </div>

          <div className="bg-navy-800 border border-navy-700 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Tax:</span>
              <span className="font-semibold">{formatCurrency(totalTax)}</span>
            </div>
            <div className="flex justify-between text-white border-t border-navy-700 pt-2 text-lg">
              <span>Total:</span>
              <span className="font-bold text-amber-500">{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold py-3 rounded-lg transition-colors"
            >
              Create Invoice
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
