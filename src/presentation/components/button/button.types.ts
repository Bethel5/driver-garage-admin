import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "link" | "approve" | "reject";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}