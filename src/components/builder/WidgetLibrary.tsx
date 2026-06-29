import {
  LayoutDashboard,
  Terminal,
  Server,
  Activity,
  HardDrive,
  Cpu,
  CalendarDays,
  Bell,
} from "lucide-react";

const widgets = [
  { icon: LayoutDashboard, name: "Dashboard" },
  { icon: Terminal, name: "Console" },
  { icon: Server, name: "Server Status" },
  { icon: Cpu, name: "CPU Monitor" },
  { icon: HardDrive, name: "Storage" },
  { icon: Activity, name: "Analytics" },
  { icon: CalendarDays, name: "Calendar" },
  { icon: Bell, name: "Notifications" },
];

export default function WidgetLibrary() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-xl font-bold text-white">
        Widget Library
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {widgets.map(({ icon: Icon, name }) => (
          <button
            key={name}
            className="flex flex-col items-center gap-3 rounded-xl bg-black/20 p-5 text-white transition hover:bg-violet-600"
          >
            <Icon size={28} />
            <span>{name}</span>
          </button>
        ))}

      </div>

    </div>
  );
}
