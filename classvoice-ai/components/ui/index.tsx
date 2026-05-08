export function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      {children}
    </div>
  )
}

export function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
      {children}
    </button>
  )
}