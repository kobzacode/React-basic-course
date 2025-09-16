import type { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<Props> = ({ label, ...rest }) => {
  return (
    <button {...rest}>{label}</button>
  )
}