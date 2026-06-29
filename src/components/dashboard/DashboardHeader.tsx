import {
  Bell,
  Search,
  Moon,
  Settings,
  UserCircle2,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Arix v2 Dashboard
        </h1>

        <p className="mt-1 text-gray-400">
          Welcome back, Himanshu 👋
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 rounded-xl bg-black/20 px-4 py-3">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>

        <button className="rounded-xl bg-black/20 p-3 text-white hover:bg-violet-600">
          <Bell size={20} />
        </button>

        <button className="rounded-xl bg-black/20 p-3 text-white hover:bg-violet-600">
          <Moon size={20} />
        </button>

        <button className="rounded-xl bg-black/20 p-3 text-white hover:bg-violet-600">
          <Settings size={20} />
        </button>

        <button className="rounded-xl bg-violet-600 p-3 text-white">
          <UserCircle2 size={22} />
        </button>

      </div>

    </header>
  );
}
