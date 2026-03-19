import type { InputProps } from "./input.types";

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        {...props}
        className={`border p-2 rounded focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;