import type { User } from "../../../domain/entities/UserManagement";
import type { UserRepository } from "../../../domain/repositories/UserManagementRepository";

export class SearchUsersUseCase {
  constructor(private repository: UserRepository) {}

  async execute(searchTerm: string): Promise<User[]> {
    return this.repository.searchUsers(searchTerm)
  }
}