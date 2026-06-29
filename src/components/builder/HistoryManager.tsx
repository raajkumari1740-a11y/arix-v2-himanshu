import { History } from "lucide-react";

const history = [
  "Created Dashboard",
  "Changed Theme",
  "Added Widget",
  "Updated Sidebar",
  "Saved Project",
];

export default function HistoryManager() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6">

      <div className="mb-5 flex items-center gap-3">
        <History className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          History
        </h2>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-black/20 p-3 text-gray-300"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}
