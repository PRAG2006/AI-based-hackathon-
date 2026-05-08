import Sidebar from '@/components/sidebar'
import StatsCards from '@/components/dashboard/stats-cards'
import Charts from '@/components/dashboard/charts'
import StudentList from '@/components/dashboard/student-list'
import ActivityFeed from '@/components/dashboard/activity-feed'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold">ClassVoice AI Dashboard</h1>

        <StatsCards />

        <Charts />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StudentList />
          <ActivityFeed />
        </div>
      </main>
    </div>
  )
}