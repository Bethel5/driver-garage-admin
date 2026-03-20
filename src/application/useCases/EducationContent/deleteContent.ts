import type { EducationContentRepository } from "../../../domain/repositories/EducationContentRepository";

export class DeleteContentUseCase {
  constructor(private repository: EducationContentRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.deleteContent(id)
  }
}
