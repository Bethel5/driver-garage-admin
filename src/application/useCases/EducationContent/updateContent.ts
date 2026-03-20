import type { EducationContent } from "../../../domain/entities/EducationContent";
import type { EducationContentRepository } from "../../../domain/repositories/EducationContentRepository";

export class UpdateContentUseCase {
  constructor(private repository: EducationContentRepository) {}

  async execute(id: string, content: Partial<EducationContent>): Promise<EducationContent> {
    return this.repository.updateContent(id, content)
  }
}