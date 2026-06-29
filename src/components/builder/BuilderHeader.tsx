import {
  Search,
  Bell,
  Save,
  Play,
  UserCircle2,
} from "lucide-react";

export default function BuilderHeader() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-xl">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Theme Builder
        </h1>

        <p className="text-sm text-gray-400">
          Build your premium Pterodactyl theme
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 rounded-xl bg-black/20 px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search..."
            className="bg-transparent text-white outline-none"
          />
        </div>

        <button className="rounded-xl bg-violet-600 p-3 text-white">
          <Play size={18} />
        </button>

        <button className="rounded-xl bg-green-600 p-3 text-white">
          <Save size={18} />
        </button>

        <button className="rounded-xl bg-black/20 p-3 text-white">
          <Bell size={18} />
        </button>

        <button className="rounded-xl bg-black/20 p-3 text-white">
          <UserCircle2 size={22} />
        </button>

      </div>

    </header>
  );
}
