import type { Garage } from "../../../domain/entities/GarageApproval";
import type { GarageRepository } from "../../../domain/repositories/GarageRepository";

export class SearchGaragesUseCase {
  constructor(private garageRepository: GarageRepository) {}

  async execute(term: string): Promise<Garage[]> {
    return this.garageRepository.searchGarages(term)
  }
}