import type { ButtonProps } from "./button.types";

const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const base = "px-4 py-2 rounded font-medium";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 hover:bg-gray-300",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;