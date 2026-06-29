import { ReactNode } from "react";

interface DashboardGridProps {
  children: ReactNode;
}

export default function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {children}
    </div>
  );
}
