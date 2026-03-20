import type { EducationCategory, EducationContent } from "../entities/EducationContent"

export interface EducationContentRepository {
  findAll(): Promise<EducationContent[]>
  findById(id: string): Promise<EducationContent | null>
  searchContent(category: EducationCategory): Promise<EducationContent[]>
  addContent(content: Omit<EducationContent, "id" | "createdAt" | "updatedAt">): Promise<EducationContent>
  updateContent(id: string, content: Partial<EducationContent>): Promise<EducationContent>
  deleteContent(id: string): Promise<EducationContent | null>
}