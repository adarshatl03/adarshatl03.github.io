import type { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-slate-900 rounded-xl p-4 ${className}`}>{children}</div>
);

export const CardHeader: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-2">{children}</div>
);

export const CardTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`text-sm ${className}`}>{children}</div>;
