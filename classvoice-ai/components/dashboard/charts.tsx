'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Week 1', engagement: 45 },
  { name: 'Week 2', engagement: 60 },
  { name: 'Week 3', engagement: 72 },
  { name: 'Week 4', engagement: 88 }
]

export default function Charts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-96">
      <h2 className="text-xl font-bold mb-4">Participation Analytics</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="engagement" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}