import {
  LayoutDashboard,
  Terminal,
  Server,
  Cpu,
  HardDrive,
  Activity,
  Palette,
  Settings,
  Save,
  Eye,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Terminal, label: "Console" },
  { icon: Server, label: "Servers" },
  { icon: Cpu, label: "Resources" },
  { icon: HardDrive, label: "Storage" },
  { icon: Activity, label: "Analytics" },
  { icon: Palette, label: "Theme Editor" },
  { icon: Settings, label: "Settings" },
];

export default function BuilderSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-[#111827]/90 backdrop-blur-xl">

      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">
          Arix Builder
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Premium Theme Builder
        </p>
      </div>

      <div className="flex-1 space-y-2 p-4">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300 transition hover:bg-violet-600 hover:text-white"
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </div>

      <div className="border-t border-white/10 p-4 space-y-3">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700">
          <Eye size={18} />
          Preview
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700">
          <Save size={18} />
          Save Theme
        </button>

      </div>

    </aside>
  );
}
