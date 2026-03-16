import { useState } from "react"
import { Mail, Lock } from "lucide-react"
import { AuthRepositoryImpl } from "../../infrastructure/repositories/AuthRepositoryImpl"
import { loginAdmin } from "../../application/useCases/loginAdmin"

const authRepo = new AuthRepositoryImpl()

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      await loginAdmin(authRepo, email, password)
      alert("Login successful")
    } catch (error) {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Admin dashboard
        </h2>
        <h3 className="text-center text-gray-600 mb-8">
          Driver Assistance & vechicle management
        </h3>

        <div className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-lg mt-1 px-3">
              <Mail className="text-gray-400 w-5 h-5" />

              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-lg mt-1 px-3">
              <Lock className="text-gray-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-yellow-400 text-black p-3 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Sign In
          </button>

        </div>

      </div>

    </div>
  )
}