import type {  Garage, GarageStatus, } from '../entities/GarageApproval'

export interface GarageRepository {
  findAll(): Promise<Garage[]>
  findById(id: string): Promise<Garage | null>
  approveGarage(id: string, status: GarageStatus): Promise<Garage>
  rejectGarage(id: string, status: GarageStatus): Promise<Garage>
  searchGarages(term: string): Promise<Garage[]>
}