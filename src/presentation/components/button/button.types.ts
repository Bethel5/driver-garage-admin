import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "link" | "approve" | "reject" | "delete";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}