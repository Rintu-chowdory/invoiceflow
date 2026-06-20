import { Plus, Edit2, Trash2 } from 'lucide-react'
import { formatCurrency } from '../utils/formatters'

const mockProducts = [
  { id: 1, name: 'Web Development', description: 'Custom website development services', price: 5000 },
  { id: 2, name: 'UI/UX Design', description: 'User interface and experience design', price: 3000 },
  { id: 3, name: 'Consulting', description: 'Technical consulting and strategy', price: 2000 },
  { id: 4, name: 'Support & Maintenance', description: 'Ongoing support and maintenance services', price: 1500 },
  { id: 5, name: 'Mobile App Development', description: 'Native iOS/Android development', price: 8000 },
  { id: 6, name: 'SEO Optimization', description: 'Search engine optimization services', price: 2500 },
]

export default function Products() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Products & Services</h1>
          <p className="text-gray-400 mt-2">Manage your billable items and services</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-500 text-navy-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400">
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map(product => (
          <div
            key={product.id}
            className="bg-navy-900 border border-navy-700 rounded-lg p-6 hover:border-amber-500 transition-colors"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
            </div>

            <div className="pt-4 border-t border-navy-700">
              <p className="text-gray-400 text-sm mb-3">Default Price</p>
              <p className="text-2xl font-bold text-amber-500 mb-4">{formatCurrency(product.price)}</p>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white py-2 rounded transition-colors">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
