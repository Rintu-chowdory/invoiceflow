import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { formatCurrency, formatDate } from '../utils/formatters'

const mockInvoices = [
  { id: 1, client: 'Acme Corp', amount: 2500, status: 'paid', dueDate: '2024-12-01' },
  { id: 2, client: 'Tech Solutions', amount: 1800, status: 'pending', dueDate: '2024-12-15' },
  { id: 3, client: 'Global Industries', amount: 3200, status: 'overdue', dueDate: '2024-11-30' },
  { id: 4, client: 'StartUp Inc', amount: 950, status: 'paid', dueDate: '2024-12-05' },
  { id: 5, client: 'Enterprise Ltd', amount: 5000, status: 'pending', dueDate: '2024-12-20' },
]

const chartData = [
  { month: 'Jul', revenue: 12000 },
  { month: 'Aug', revenue: 19000 },
  { month: 'Sep', revenue: 15000 },
  { month: 'Oct', revenue: 22000 },
  { month: 'Nov', revenue: 18000 },
  { month: 'Dec', revenue: 25000 },
]

export default function Dashboard() {
  const totalRevenue = chartData.reduce((sum, d) => sum + d.revenue, 0)
  const thisMonthRevenue = chartData[chartData.length - 1].revenue
  const outstandingInvoices = mockInvoices.filter(i => i.status === 'pending').length
  const paidInvoices = mockInvoices.filter(i => i.status === 'paid').length
  const overdueCount = mockInvoices.filter(i => i.status === 'overdue').length

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your financial overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          title="Revenue This Month"
          value={formatCurrency(thisMonthRevenue)}
          color="bg-amber-500 text-navy-950"
        />
        <StatCard
          icon={Clock}
          title="Outstanding Invoices"
          value={outstandingInvoices}
          color="bg-blue-500 text-white"
        />
        <StatCard
          icon={CheckCircle}
          title="Paid Invoices"
          value={paidInvoices}
          color="bg-green-500 text-white"
        />
        <StatCard
          icon={AlertCircle}
          title="Overdue"
          value={overdueCount}
          color="bg-red-500 text-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" stroke="#6e7681" />
              <YAxis stroke="#6e7681" />
              <Tooltip
                contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '0.5rem' }}
                cursor={{ fill: 'rgba(245, 158, 11, 0.1)' }}
              />
              <Bar dataKey="revenue" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Invoices</h2>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {mockInvoices.slice(0, 5).map(invoice => (
              <div key={invoice.id} className="flex items-center justify-between p-3 bg-navy-800 rounded border border-navy-700">
                <div>
                  <p className="text-sm font-medium text-white">{invoice.client}</p>
                  <p className="text-xs text-gray-400">{formatDate(invoice.dueDate)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-amber-500">{formatCurrency(invoice.amount)}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    invoice.status === 'paid' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                    invoice.status === 'pending' ? 'bg-blue-500 bg-opacity-20 text-blue-400' :
                    'bg-red-500 bg-opacity-20 text-red-400'
                  }`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
