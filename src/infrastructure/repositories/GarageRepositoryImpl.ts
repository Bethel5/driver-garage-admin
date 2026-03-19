import { type Garage, type GarageStatus } from "../../domain/entities/GarageApproval"
import { type GarageRepository } from "../../domain/repositories/GarageRepository"
import { axiosClient } from "../api/axiosClient"

export class GarageRepositoryImpl implements GarageRepository {
  async findAll(): Promise<Garage[]> {
    const response = await axiosClient.get(`/admin/garages-approval`)
    return response.data
  }

  async findById(id: string): Promise<Garage | null> {
    const response = await axiosClient.get(`/admin/garages-approval/${id}`)
    return response.data ?? null
  }

  async updateStatus(id: string, status: GarageStatus): Promise<Garage> {
    const response = await axiosClient.patch(`/admin/garages-approval/${id}/status`, { status })
    return response.data
  }
}