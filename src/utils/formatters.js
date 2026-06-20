import { format } from 'date-fns'

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date) {
  if (typeof date === 'string') {
    return format(new Date(date), 'MMM dd, yyyy')
  }
  return format(date, 'MMM dd, yyyy')
}

export function generateInvoiceNumber() {
  return `INV-${Date.now().toString().slice(-6)}`
}
