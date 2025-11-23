import type { FC, ReactNode } from "react";

export const Badge: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded bg-slate-800 text-xs">
      {children}
    </span>
  );
};
