import { useEffect, useState } from "react"
import { type Column } from "../components/table/table.types"
import { type Garage } from "../../domain/entities/GarageApproval"
import { GarageRepositoryImpl } from "../../infrastructure/repositories/GarageRepositoryImpl"
import { ApproveGarageUseCase } from "../../application/useCases/GarageApproval/approveGarage"
import { RejectGarageUseCase } from "../../application/useCases/GarageApproval/rejectGarage"
import { EyeIcon } from "lucide-react"
import Table from "../components/table/table"
import Button from "../components/button/button"

export default function GarageApprovalsPage() {
    const [garages, setGarages] = useState<Garage[]>([])
    const [selectedGarage, setSelectedGarage] = useState<Garage | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [showModal, setShowModal] = useState(false)

    const repository = new GarageRepositoryImpl()

    useEffect(() => {
        const fetchGarages = async () => {
            setLoading(true)
            try {
                const data = await repository.findAll()
                setGarages(data)
            } catch (err: any) {
                setError(err.message ?? "Failed to load garages")
            } finally {
                setLoading(false)
            }
        }
        fetchGarages()
    }, [])

    const handleReview = async (id: string) => {
        try {
            const garage = await repository.findById(id)
            if (garage) {
                setSelectedGarage(garage)
                setShowModal(true)
            }
        } catch (err: any) {
            setError(err.message ?? "Failed to fetch garage details")
        }
    }

    const handleApprove = async () => {
        if (!selectedGarage) return
        try {
            const useCase = new ApproveGarageUseCase(repository)
            const updated = await useCase.execute(selectedGarage.id)
            setGarages(prev => prev.map(g => (g.id === updated.id ? updated : g)))
            setShowModal(false)
        } catch (err: any) {
            setError(err.message ?? "Failed to approve garage")
        }
    }

    const handleReject = async () => {
        if (!selectedGarage) return
        try {
            const useCase = new RejectGarageUseCase(repository)
            const updated = await useCase.execute(selectedGarage.id)
            setGarages(prev => prev.map(g => (g.id === updated.id ? updated : g)))
            setShowModal(false)
        } catch (err: any) {
            setError(err.message ?? "Failed to reject garage")
        }
    }

    const statusColors: Record<string, string> = {
        PENDING: "bg-yellow-100 text-black-500",
        ACTIVE: "bg-green-100 text-green-800",
        REJECTED: "bg-red-100 text-red-800",
    }

    const columns: Column<Garage>[] = [
        { key: "name", title: "Name" },
        { key: "email", title: "Email" },
        { key: "phone", title: "Phone" },
        { key: "location", title: "Location" },
        {
            key: "status",
            title: "Status",
            render: (value) => (
            <span
                className={`px-3 py-1 rounded font-medium ${statusColors[value as string]}`}
            >
                {value === "PENDING" ? "Pending" : value === "ACTIVE" ? "Active" : "Rejected"}
            </span>
            ),
        },
        {
            key: "id",
            title: "Actions",
            render: (_value, row) => (
                <Button variant="link" onClick={() => handleReview(row.id)}>
                    <span className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Review
                    </span>
                </Button>
            ),
        },
    ]

    if (loading) return <p>Loading garages...</p>
    if (error) return <p className="text-red-500">{error}</p>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Garage Approvals</h1>
            <Table columns={columns} data={garages} />

            {showModal && selectedGarage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Review Garage</h2>
                        <p><strong>Name:</strong> {selectedGarage.name}</p>
                        <p><strong>Email:</strong> {selectedGarage.email}</p>
                        <p><strong>Phone:</strong> {selectedGarage.phone}</p>
                        <p><strong>Location:</strong> {selectedGarage.location}</p>
                        <p><strong>Status:</strong> {selectedGarage.status}</p>

                        <div className="flex gap-2 mt-4">
                            <Button variant="primary" onClick={handleApprove}>
                                Approve
                            </Button>
                            <Button variant="secondary" onClick={handleReject}>
                                Reject
                            </Button>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}