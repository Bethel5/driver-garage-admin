import type { AuthRepository } from "../../domain/repositories/AuthRepository"
import { axiosClient } from "../api/axiosClient"

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string) {
    const response = await axiosClient.post("/admin/auth/login", {
      email,
      password,
    })

    return response.data
  }
}