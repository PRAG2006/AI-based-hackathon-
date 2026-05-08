import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold">ClassVoice AI</h2>

      <nav className="space-y-3">
        <Link href="/">Dashboard</Link><br />
        <Link href="/analytics">Analytics</Link><br />
        <Link href="/insights">Insights</Link><br />
        <Link href="/chat">AI Chat</Link>
      </nav>
    </aside>
  )
}