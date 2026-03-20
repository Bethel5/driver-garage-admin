import type { GarageRepository } from "../../../domain/repositories/GarageRepository"

export class RejectGarageUseCase {
  constructor(private readonly repository: GarageRepository) {}

  async execute(id: string) {
    const garage = await this.repository.findById(id)
    if (!garage) throw new Error("Garage not found")
    if (garage.status === "REJECTED") return garage

    return this.repository.rejectGarage(id, "REJECTED")
  }
}