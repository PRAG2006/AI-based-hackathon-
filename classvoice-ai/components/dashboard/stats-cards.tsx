export default function StatsCards() {
  const stats = [
    {
      title: 'Average Engagement',
      value: '78%'
    },
    {
      title: 'Silent Learners',
      value: '12'
    },
    {
      title: 'Participation Equality',
      value: '69%'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-3xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  )
}