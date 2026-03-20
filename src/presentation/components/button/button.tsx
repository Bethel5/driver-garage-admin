import type { ButtonProps } from "./button.types";

const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const base = "px-4 py-2 rounded-xl font-medium";

  const styles = {
    primary: "bg-yellow-300 text-black hover:bg-yellow-300",
    secondary: "bg-gray-200 hover:bg-gray-300",
    approve: "bg-green-300 text-black",
    reject: "bg-red-300 text-black",
    link: "text-yellow-500 hover:text-yellow-600",
    delete: "text-red-500 hover:text-red-600"
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;