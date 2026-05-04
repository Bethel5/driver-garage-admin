export interface User {
    id: string
    name: string
    email: string
    role: "DRIVER" | "ADMIN" | "GARAGE"
    status: "PENDING" | "ACTIVE" | "REJECTED"
    createdAt: string 
}