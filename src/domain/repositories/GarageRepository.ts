import type {  Garage, GarageStatus, } from '../entities/GarageApproval'

export interface GarageRepository {
  findAll(): Promise<Garage[]>
  findById(id: string): Promise<Garage | null>
  updateStatus(id: string, status: GarageStatus): Promise<Garage>
}