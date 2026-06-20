import { Link } from 'react-router-dom'
import { BarChart3, FileText, Users, CreditCard, Package, TrendingUp, Settings } from 'lucide-react'

export default function Sidebar() {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/invoices', label: 'Invoices', icon: FileText },
    { path: '/clients', label: 'Clients', icon: Users },
    { path: '/payments', label: 'Payments', icon: CreditCard },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/reports', label: 'Reports', icon: TrendingUp },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="w-64 bg-navy-900 border-r border-navy-700 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-navy-950 font-bold" />
        </div>
        <h1 className="text-xl font-bold text-white">InvoiceFlow</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map(item => {
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-navy-800 transition-colors text-gray-300 hover:text-amber-500"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-navy-700">
        <p className="text-xs text-gray-500">v1.0.0</p>
      </div>
    </aside>
  )
}
