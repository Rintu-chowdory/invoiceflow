import { CreditCard, DollarSign } from 'lucide-react'
import { formatCurrency, formatDate } from '../utils/formatters'

const mockPayments = [
  { id: 1, invoice: 'INV-001', client: 'Acme Corp', amount: 2500, date: '2024-12-01', method: 'Credit Card', status: 'completed' },
  { id: 2, invoice: 'INV-004', client: 'StartUp Inc', amount: 950, date: '2024-12-05', method: 'ACH Transfer', status: 'completed' },
  { id: 3, invoice: 'INV-006', client: 'Digital Agency', amount: 2200, date: '2024-12-10', method: 'Credit Card', status: 'completed' },
]

const upcomingPayments = [
  { id: 1, invoice: 'INV-002', client: 'Tech Solutions', amount: 1800, dueDate: '2024-12-15', status: 'pending' },
  { id: 2, invoice: 'INV-005', client: 'Enterprise Ltd', amount: 5000, dueDate: '2024-12-20', status: 'pending' },
]

const paymentMethods = [
  { id: 1, type: 'Credit Card', last4: '4242', expiry: '12/26', default: true },
  { id: 2, type: 'Bank Account', last4: '6789', expiry: 'N/A', default: false },
]

export default function Payments() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Payments</h1>
        <p className="text-gray-400 mt-2">Track payment history and manage payment methods</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Received</p>
              <p className="text-2xl font-bold text-white mt-2">{formatCurrency(5650)}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500 text-white">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Invoice</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Client</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-700">
              {mockPayments.map(payment => (
                <tr key={payment.id} className="hover:bg-navy-800 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white">{payment.invoice}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{payment.client}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-amber-500">{formatCurrency(payment.amount)}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{formatDate(payment.date)}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{payment.method}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-400">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Payments</h2>
          <div className="space-y-3">
            {upcomingPayments.map(payment => (
              <div key={payment.id} className="flex items-center justify-between p-3 bg-navy-800 rounded border border-navy-700">
                <div>
                  <p className="text-sm font-medium text-white">{payment.invoice} - {payment.client}</p>
                  <p className="text-xs text-gray-400">Due: {formatDate(payment.dueDate)}</p>
                </div>
                <span className="text-sm font-semibold text-amber-500">{formatCurrency(payment.amount)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Payment Methods on File</h2>
          <div className="space-y-3">
            {paymentMethods.map(method => (
              <div key={method.id} className="p-4 bg-navy-800 rounded border border-navy-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-navy-700 rounded">
                      <CreditCard className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{method.type}</p>
                      <p className="text-xs text-gray-400">••••{method.last4}</p>
                    </div>
                  </div>
                  {method.default && (
                    <span className="text-xs bg-amber-500 bg-opacity-20 text-amber-400 px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
