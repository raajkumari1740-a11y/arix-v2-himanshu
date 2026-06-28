import { Bell, Moon, Search, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Arix v2 Himanshu
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl p-2 hover:bg-white/10 transition">
            <Search size={18} />
          </button>

          <button className="rounded-xl p-2 hover:bg-white/10 transition">
            <Bell size={18} />
          </button>

          <button className="rounded-xl p-2 hover:bg-white/10 transition">
            <Moon size={18} />
          </button>

          <button className="rounded-xl p-2 hover:bg-white/10 transition">
            <Settings size={18} />
          </button>

          <button className="rounded-full border border-violet-500/30 p-2 hover:bg-violet-500/20 transition">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
