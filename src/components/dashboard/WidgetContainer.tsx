import { ReactNode } from "react";
import { GripVertical } from "lucide-react";

interface WidgetContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function WidgetContainer({
  title,
  children,
  className = "",
}: WidgetContainerProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <button className="rounded-lg p-2 text-gray-400 transition hover:bg-violet-500/20 hover:text-violet-400">
          <GripVertical size={18} />
        </button>
      </div>

      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
