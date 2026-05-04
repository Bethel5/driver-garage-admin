import type { CommunityReport } from "../entities/CommunityReport"

export interface ICommunityReportRepository {
  listAll(status?: string): Promise<CommunityReport[]>
  getById(id: string): Promise<CommunityReport | null>
  updateStatus(id: string, status: string): Promise<CommunityReport>
}