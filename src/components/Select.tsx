import type { FC, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  htmlFor?: string;
  label?: string;
  options: (string | number)[];
}

export const Select: FC<Props> = ({ htmlFor, label, options, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={htmlFor}>{label}</label>}

      <select id={htmlFor} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
