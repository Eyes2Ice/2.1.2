import type { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Label = ({ title, ...props }: inputProps) => {
  return (
    <label className="label">
      {title}
      <input type="text" {...props} />
    </label>
  );
};

export default Label;
