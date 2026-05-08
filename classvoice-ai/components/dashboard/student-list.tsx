const students = [
  {
    name: 'Asha',
    score: 82
  },
  {
    name: 'Rahul',
    score: 55
  },
  {
    name: 'Priya',
    score: 91
  }
]

export default function StudentList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Student Rankings</h2>

      <div className="space-y-3">
        {students.map((student, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <span>{student.name}</span>
            <span>{student.score}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}