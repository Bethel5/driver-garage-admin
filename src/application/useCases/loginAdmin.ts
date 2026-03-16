import type { AuthRepository } from "../../domain/repositories/AuthRepository"

export const loginAdmin = async (
  repository: AuthRepository,
  email: string,
  password: string
) => {
  const result = await repository.login(email, password)

  localStorage.setItem("adminToken", result.token)

  return result
}