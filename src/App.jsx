import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Invoices from './pages/Invoices'
import Clients from './pages/Clients'
import Payments from './pages/Payments'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AIAssistant from './pages/AIAssistant'

function App() {
  return (
    <Router basename="/invoiceflow">
      <div className="flex h-screen bg-navy-950">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
