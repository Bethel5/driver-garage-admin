import type { EducationContent } from "../../../domain/entities/EducationContent";
import type { EducationContentRepository } from "../../../domain/repositories/EducationContentRepository";

export class CreateContentUseCase {
  constructor(private repository: EducationContentRepository) {}

  async execute(content: Omit<EducationContent, "id" | "created_at" | "updated_at">): Promise<EducationContent> {
    return this.repository.addContent(content)
  }
}