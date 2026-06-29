import { Search } from "lucide-react";

export default function CommandPalette() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

      <div className="flex items-center gap-3">

        <Search />

        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search Commands..."
        />

      </div>

    </div>
  );
}
