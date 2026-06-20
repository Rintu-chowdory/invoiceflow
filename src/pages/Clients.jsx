import { Users } from 'lucide-react'
import { formatCurrency } from '../utils/formatters'

const mockClients = [
  { id: 1, name: 'Acme Corp', email: 'contact@acmecorp.com', totalBilled: 12500, outstandingBalance: 2500, invoices: 5 },
  { id: 2, name: 'Tech Solutions', email: 'hello@techsol.com', totalBilled: 8900, outstandingBalance: 1800, invoices: 4 },
  { id: 3, name: 'Global Industries', email: 'billing@global.com', totalBilled: 15200, outstandingBalance: 3200, invoices: 6 },
  { id: 4, name: 'StartUp Inc', email: 'finance@startup.com', totalBilled: 4750, outstandingBalance: 950, invoices: 5 },
  { id: 5, name: 'Enterprise Ltd', email: 'accounts@enterprise.com', totalBilled: 22000, outstandingBalance: 5000, invoices: 8 },
]

export default function Clients() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Clients</h1>
        <p className="text-gray-400 mt-2">Manage your client relationships and view their account details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClients.map(client => (
          <div
            key={client.id}
            className="bg-navy-900 border border-navy-700 rounded-lg p-6 hover:border-amber-500 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-navy-950" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                <p className="text-sm text-gray-400">{client.email}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-navy-700">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total Billed</span>
                <span className="text-white font-semibold">{formatCurrency(client.totalBilled)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Outstanding Balance</span>
                <span className="text-amber-500 font-semibold">{formatCurrency(client.outstandingBalance)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Invoices</span>
                <span className="text-white font-semibold">{client.invoices}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-navy-800 hover:bg-navy-700 text-white font-medium py-2 rounded transition-colors text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
