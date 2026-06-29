import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchLogs() {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <Search className="text-violet-400" size={22} />
        <h2 className="text-lg font-bold text-white">
          Search Logs
        </h2>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search console logs..."
          className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />

        <button
          onClick={() => setSearch("")}
          className="rounded-xl bg-red-500 px-4 text-white transition hover:bg-red-600"
        >
          <X size={18} />
        </button>
      </div>

      <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-black/20 p-4">
        <p className="text-sm text-gray-400">
          Matching logs will appear here...
        </p>
      </div>
    </div>
  );
}
