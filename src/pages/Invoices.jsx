import { useState } from 'react'
import { Plus, Eye, Trash2 } from 'lucide-react'
import { formatCurrency, formatDate } from '../utils/formatters'
import InvoiceModal from '../components/InvoiceModal'

const mockInvoices = [
  { id: 1, number: 'INV-001', client: 'Acme Corp', amount: 2500, status: 'paid', dueDate: '2024-12-01' },
  { id: 2, number: 'INV-002', client: 'Tech Solutions', amount: 1800, status: 'pending', dueDate: '2024-12-15' },
  { id: 3, number: 'INV-003', client: 'Global Industries', amount: 3200, status: 'overdue', dueDate: '2024-11-30' },
  { id: 4, number: 'INV-004', client: 'StartUp Inc', amount: 950, status: 'paid', dueDate: '2024-12-05' },
  { id: 5, number: 'INV-005', client: 'Enterprise Ltd', amount: 5000, status: 'pending', dueDate: '2024-12-20' },
  { id: 6, number: 'INV-006', client: 'Digital Agency', amount: 2200, status: 'paid', dueDate: '2024-12-10' },
]

export default function Invoices() {
  const [invoices, setInvoices] = useState(mockInvoices)
  const [showModal, setShowModal] = useState(false)

  const handleCreateInvoice = (invoiceData) => {
    const newInvoice = {
      id: invoices.length + 1,
      number: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
      ...invoiceData,
    }
    setInvoices([newInvoice, ...invoices])
    setShowModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-500 bg-opacity-20 text-green-400'
      case 'pending':
        return 'bg-blue-500 bg-opacity-20 text-blue-400'
      case 'overdue':
        return 'bg-red-500 bg-opacity-20 text-red-400'
      default:
        return 'bg-gray-500 bg-opacity-20 text-gray-400'
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Invoices</h1>
          <p className="text-gray-400 mt-2">Manage and track all your invoices</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-amber-500 text-navy-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400"
        >
          <Plus className="w-5 h-5" />
          New Invoice
        </button>
      </div>

      <div className="bg-navy-900 border border-navy-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-navy-800 border-b border-navy-700">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Invoice #</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Client</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700">
            {invoices.map(invoice => (
              <tr key={invoice.id} className="hover:bg-navy-800 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-white">{invoice.number}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{invoice.client}</td>
                <td className="px-6 py-4 text-sm font-semibold text-amber-500">{formatCurrency(invoice.amount)}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{formatDate(invoice.dueDate)}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(invoice.status)}`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-navy-700 rounded transition-colors text-gray-400 hover:text-amber-500">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-navy-700 rounded transition-colors text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <InvoiceModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreateInvoice}
        />
      )}
    </div>
  )
}
