import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "icon";
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium";

  const variants = {
    default: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border border-slate-700",
    ghost: "bg-transparent",
  };

  const sizes = {
    default: "h-10",
    icon: "h-9 w-9 p-0",
  };

  const cls = cx(base, variants[variant], sizes[size], className);

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};
