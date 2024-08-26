import { ButtonHTMLAttributes, ReactNode } from "react";

// Define the props type
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex w-30 flex-wrap my-4 gap-1 items-center justify-center"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
