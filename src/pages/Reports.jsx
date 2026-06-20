import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { formatCurrency } from '../utils/formatters'

const revenueByClient = [
  { name: 'Acme Corp', value: 12500 },
  { name: 'Tech Solutions', value: 8900 },
  { name: 'Global Industries', value: 15200 },
  { name: 'StartUp Inc', value: 4750 },
  { name: 'Enterprise Ltd', value: 22000 },
]

const monthlyRevenue = [
  { month: 'Jul', revenue: 12000 },
  { month: 'Aug', revenue: 19000 },
  { month: 'Sep', revenue: 15000 },
  { month: 'Oct', revenue: 22000 },
  { month: 'Nov', revenue: 18000 },
  { month: 'Dec', revenue: 25000 },
]

const COLORS = ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7']

export default function Reports() {
  const totalRevenue = revenueByClient.reduce((sum, item) => sum + item.value, 0)
  const totalTax = totalRevenue * 0.15

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
        <p className="text-gray-400 mt-2">Gain insights into your business performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totalRevenue)}</p>
          <p className="text-xs text-gray-500 mt-2">All time</p>
        </div>
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Tax Collected</p>
          <p className="text-3xl font-bold text-amber-500 mt-2">{formatCurrency(totalTax)}</p>
          <p className="text-xs text-gray-500 mt-2">Estimated 15%</p>
        </div>
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <p className="text-gray-400 text-sm">Avg Invoice Value</p>
          <p className="text-3xl font-bold text-white mt-2">{formatCurrency(totalRevenue / 28)}</p>
          <p className="text-xs text-gray-500 mt-2">28 total invoices</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Monthly Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="month" stroke="#6e7681" />
              <YAxis stroke="#6e7681" />
              <Tooltip
                contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '0.5rem' }}
                cursor={{ fill: 'rgba(245, 158, 11, 0.1)' }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Revenue by Client</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueByClient}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueByClient.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '0.5rem' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Revenue by Client (Detailed)</h2>
        <div className="space-y-3">
          {revenueByClient.map((client, index) => (
            <div key={client.name} className="flex items-center gap-4">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{client.name}</p>
                <div className="w-full bg-navy-800 rounded-full h-2 mt-1">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(client.value / totalRevenue) * 100}%`,
                      backgroundColor: COLORS[index % COLORS.length],
                    }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-amber-500">{formatCurrency(client.value)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Tax Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Federal Tax (15%)</span>
              <span className="text-white font-semibold">{formatCurrency(totalTax)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-navy-700">
              <span className="text-gray-300">Total Tax Liability</span>
              <span className="text-amber-500 font-semibold text-lg">{formatCurrency(totalTax)}</span>
            </div>
          </div>
        </div>

        <div className="bg-navy-900 border border-navy-700 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Total Invoices</span>
              <span className="text-white font-semibold">28</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Total Clients</span>
              <span className="text-white font-semibold">5</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-navy-700">
              <span className="text-gray-300">Avg Invoice Value</span>
              <span className="text-amber-500 font-semibold">{formatCurrency(totalRevenue / 28)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
