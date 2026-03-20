import type { GarageRepository } from "../../../domain/repositories/GarageRepository"

export class ApproveGarageUseCase {
  constructor(private readonly repository: GarageRepository) {}

  async execute(id: string) {
    const garage = await this.repository.findById(id)
    if (!garage) throw new Error("Garage not found")
    if (garage.status === "ACTIVE") return garage

    return this.repository.approveGarage(id, "ACTIVE")
  }
}