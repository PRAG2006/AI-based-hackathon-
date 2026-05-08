'use client'

import { useState } from 'react'

export default function ChatPage() {
  const [message, setMessage] = useState('')

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">AI Classroom Assistant</h1>

      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <div className="h-64 border rounded p-4 overflow-y-auto">
          <p>AI: Ask about classroom engagement insights.</p>
        </div>

        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border p-3 rounded"
            placeholder="Ask something..."
          />

          <button className="bg-blue-600 text-white px-6 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}