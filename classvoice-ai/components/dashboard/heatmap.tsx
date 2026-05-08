export default function Heatmap() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Participation Heatmap</h2>

      <div className="grid grid-cols-5 gap-2">
        {[...Array(25)].map((_, index) => (
          <div
            key={index}
            className="h-10 bg-blue-300 rounded"
          />
        ))}
      </div>
    </div>
  )
}