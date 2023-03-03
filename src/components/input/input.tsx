import { useCSS } from "../../hooks/use-css";
import { InputProps } from "./input.interface";
import "./input.scss";

export const Input = ({
  value,
  onChange,
  className = "",
  ...rest
}: InputProps) => {
  const { mergeClasses } = useCSS();

  return (
    <input
      value={value}
      onChange={onChange}
      className={mergeClasses("input-container", className)}
      {...rest}
    />
  );
};
