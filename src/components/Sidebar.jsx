import { Link, useLocation } from 'react-router-dom'
import { BarChart3, FileText, Users, CreditCard, Package, TrendingUp, Settings, Sparkles } from 'lucide-react'

export default function Sidebar() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/invoices', label: 'Invoices', icon: FileText },
    { path: '/clients', label: 'Clients', icon: Users },
    { path: '/payments', label: 'Payments', icon: CreditCard },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/reports', label: 'Reports', icon: TrendingUp },
    { path: '/ai-assistant', label: 'AI Assistant', icon: Sparkles },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <aside className="w-64 bg-navy-900 border-r border-navy-700 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">InvoiceFlow</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.label === 'AI Assistant' && (
                    <span className="ml-auto text-xs bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">AI</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
