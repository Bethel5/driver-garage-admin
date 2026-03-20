import type { EducationCategory, EducationContent } from "../../../domain/entities/EducationContent";
import type { EducationContentRepository } from "../../../domain/repositories/EducationContentRepository";

export class SearchContentUseCase {
  constructor(private repository: EducationContentRepository) {}

  async execute(category: EducationCategory): Promise<EducationContent[]> {
    return this.repository.searchContent(category)
  }
}
