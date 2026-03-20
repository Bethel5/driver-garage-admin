import type { EducationCategory, EducationContent } from "../../domain/entities/EducationContent"
import type { EducationContentRepository } from "../../domain/repositories/EducationContentRepository"
import { axiosClient } from "../api/axiosClient"

export class EducationContentRepositoryImpl implements EducationContentRepository {
    async findAll(): Promise<EducationContent[]> {
        const response = await axiosClient.get(`/admin/educational-content`)
        return response.data
    }

    async findById(id: string): Promise<EducationContent | null> {
        const response = await axiosClient.get(`/admin/educational-content/${id}`)
        return response.data ?? null
    }

    async searchContent(category: EducationCategory): Promise<EducationContent[]> {
        const response = await axiosClient.get(`/admin/educational-content/search`, {
            params: { q: category }
        })
        return response.data
    }

    async addContent(content: Omit<EducationContent, "id" | "createdAt" | "updatedAt">): Promise<EducationContent> {
        const response = await axiosClient.post(`/admin/educational-content`, content)
        return response.data
    }

    async updateContent(id: string, content: Partial<EducationContent>): Promise<EducationContent> {
        const response = await axiosClient.put(`/admin/educational-content/${id}`, content)
        return response.data
    }

    async deleteContent(id: string): Promise<EducationContent | null> {
        const response = await axiosClient.delete(`/admin/educational-content/${id}`)
        return response.data
    }

}