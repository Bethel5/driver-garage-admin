import { useEffect, useMemo, useState } from "react"
import { UserManagementRepositoryImpl } from "../../infrastructure/repositories/UserManagementRepositoryImpl"
import { type User } from "../../domain/entities/UserManagement"
import Card from "../components/card/card"
import { Users, CheckCircle, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const repository = new UserManagementRepositoryImpl()

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const data = await repository.findAll()
        setUsers(data)
      } catch (err: any) {
        setError(err.message ?? "Failed to load dashboard data")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const stats = useMemo(() => {
    return {
      totalUsers: users.length,
      activeGarages: users.filter(
        (u) => u.role === "GARAGE" && u.status === "ACTIVE"
      ).length,
      pendingGarages: users.filter(
        (u) => u.role === "GARAGE" && u.status === "PENDING"
      ).length,
    }
  }, [users])

  if (loading) return <p>Loading dashboard...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-500">
          Monitor system activity and key metrics
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="w-6 h-6" />}
        />

        <Card
          title="Active Garages"
          value={stats.activeGarages}
          icon={<CheckCircle className="w-6 h-6 text-green-500" />}
          color="text-green-600"
        />

        <Card
          title="Pending Garages Approvals"
          value={stats.pendingGarages}
          icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
          color="text-yellow-600"
        />
      </div>
    </div>
  )
}