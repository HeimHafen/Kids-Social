import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...rest
}) => {
  const base =
    "ks-btn inline-flex items-center justify-center rounded-full text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const variants: Record<typeof variant, string> = {
    primary:
      "ks-btn-primary",
    secondary:
      "ks-btn-secondary",
    ghost:
      "ks-btn-ghost"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};