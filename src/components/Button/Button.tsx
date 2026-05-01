import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.button}${className ? ` ${className}` : ""}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
