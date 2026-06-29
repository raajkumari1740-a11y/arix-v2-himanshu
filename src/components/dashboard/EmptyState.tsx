import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "Nothing Here",
  description = "There is currently no data to display.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111827]/80 p-8 backdrop-blur-xl">

      <Inbox
        size={60}
        className="mb-4 text-violet-400"
      />

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-center text-gray-400">
        {description}
      </p>

    </div>
  );
}
