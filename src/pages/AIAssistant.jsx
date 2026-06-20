import React, { useState } from 'react'
import { Sparkles, Copy, CheckCheck, AlertCircle } from 'lucide-react'

const SERVICE_TYPES = ['Web Development', 'Design', 'Consulting', 'Marketing', 'Support', 'Custom']
const OVERDUE_OPTIONS = ['7 days', '14 days', '30 days', '60+ days']
const REMINDER_TONES = ['Friendly', 'Firm', 'Final Notice']

function LineItemTab() {
  const [service, setService] = useState(SERVICE_TYPES[0])
  const [description, setDescription] = useState('')
  const [hours, setHours] = useState('')
  const [rate, setRate] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const apiKey = localStorage.getItem('invoiceflow_groq_key')

  const generate = async () => {
    if (!apiKey) { setError('Add your Groq API key in Settings first.'); return }
    setLoading(true); setError(''); setResult('')
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: 'You are a professional invoicing assistant. Write clear, professional invoice line item descriptions.' },
            { role: 'user', content: `Write a professional invoice line item description for: Service: ${service}, Work done: ${description || 'general work'}, Hours: ${hours || 'N/A'}, Rate: $${rate || 'N/A'}/hr. Write just the description, 1-3 sentences.` }
          ],
          max_tokens: 200
        })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error.message)
      setResult(data.choices[0].message.content)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <div className="space-y-4">
      {!apiKey && <div className="flex items-center gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm"><AlertCircle className="w-4 h-4 flex-shrink-0" />Add your Groq API key in Settings to use AI features</div>}
      <div>
        <label className="text-sm text-slate-400 mb-1 block">Service Type</label>
        <select value={service} onChange={e => setService(e.target.value)} className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500">
          {SERVICE_TYPES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm text-slate-400 mb-1 block">Work Description</label>
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the work done..." className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-400 mb-1 block">Hours</label>
          <input type="number" value={hours} onChange={e => setHours(e.target.value)} placeholder="e.g. 8" className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400 mb-1 block">Rate ($/hr)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 150" className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
        </div>
      </div>
      <button onClick={generate} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg py-2.5 font-medium flex items-center justify-center gap-2 transition-colors">
        <Sparkles className="w-4 h-4" />{loading ? 'Generating...' : 'Generate Description'}
      </button>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {result && (
        <div className="bg-navy-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Generated Description</span>
            <button onClick={copy} className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300">
              {copied ? <><CheckCheck className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <textarea value={result} onChange={e => setResult(e.target.value)} className="w-full bg-navy-700 text-white rounded-lg p-3 border border-navy-600 focus:outline-none resize-none" rows={4} />
        </div>
      )}
    </div>
  )
}

function ReminderTab() {
  const [clientName, setClientName] = useState('')
  const [invoiceNum, setInvoiceNum] = useState('')
  const [amount, setAmount] = useState('')
  const [overdue, setOverdue] = useState(OVERDUE_OPTIONS[0])
  const [tone, setTone] = useState(REMINDER_TONES[0])
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const apiKey = localStorage.getItem('invoiceflow_groq_key')

  const generate = async () => {
    if (!apiKey) { setError('Add your Groq API key in Settings first.'); return }
    setLoading(true); setError(''); setResult('')
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: 'You are a professional accounts receivable specialist. Write payment reminder emails that are effective but maintain client relationships.' },
            { role: 'user', content: `Write a ${tone.toLowerCase()} payment reminder email. Client: ${clientName || 'Client'}, Invoice #: ${invoiceNum || 'INV-001'}, Amount due: $${amount || '0'}, Overdue by: ${overdue}. Include subject line.` }
          ],
          max_tokens: 400
        })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error.message)
      setResult(data.choices[0].message.content)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <div className="space-y-4">
      {!apiKey && <div className="flex items-center gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm"><AlertCircle className="w-4 h-4 flex-shrink-0" />Add your Groq API key in Settings to use AI features</div>}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-400 mb-1 block">Client Name</label>
          <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Acme Corp" className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
        </div>
        <div>
          <label className="text-sm text-slate-400 mb-1 block">Invoice #</label>
          <input value={invoiceNum} onChange={e => setInvoiceNum(e.target.value)} placeholder="INV-2024-001" className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
        </div>
      </div>
      <div>
        <label className="text-sm text-slate-400 mb-1 block">Amount Due ($)</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="2500" className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500" />
      </div>
      <div>
        <label className="text-sm text-slate-400 mb-1 block">Days Overdue</label>
        <select value={overdue} onChange={e => setOverdue(e.target.value)} className="w-full bg-navy-800 text-white rounded-lg px-3 py-2 border border-navy-600 focus:outline-none focus:border-amber-500">
          {OVERDUE_OPTIONS.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm text-slate-400 mb-1 block">Tone</label>
        <div className="flex gap-2">
          {REMINDER_TONES.map(t => (
            <button key={t} onClick={() => setTone(t)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${tone === t ? 'bg-amber-500 text-white' : 'bg-navy-700 text-slate-300 hover:bg-navy-600'}`}>{t}</button>
          ))}
        </div>
      </div>
      <button onClick={generate} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg py-2.5 font-medium flex items-center justify-center gap-2 transition-colors">
        <Sparkles className="w-4 h-4" />{loading ? 'Generating...' : 'Generate Reminder'}
      </button>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {result && (
        <div className="bg-navy-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Generated Reminder</span>
            <button onClick={copy} className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300">
              {copied ? <><CheckCheck className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <textarea value={result} onChange={e => setResult(e.target.value)} className="w-full bg-navy-700 text-white rounded-lg p-3 border border-navy-600 focus:outline-none resize-none" rows={8} />
        </div>
      )}
    </div>
  )
}

export default function AIAssistant() {
  const [tab, setTab] = useState('lineitem')
  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-amber-400" />
        <h1 className="text-2xl font-bold text-white">AI Invoice Assistant</h1>
      </div>
      <div className="flex gap-1 p-1 bg-navy-800 rounded-xl mb-6 w-fit">
        <button onClick={() => setTab('lineitem')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'lineitem' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}>Line Item Generator</button>
        <button onClick={() => setTab('reminder')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'reminder' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}>Payment Reminder</button>
      </div>
      <div className="bg-navy-800 rounded-xl p-5">
        {tab === 'lineitem' ? <LineItemTab /> : <ReminderTab />}
      </div>
    </div>
  )
}
