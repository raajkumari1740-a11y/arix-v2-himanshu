import {
  CalendarClock,
  RefreshCcw,
  Database,
  ShieldCheck,
} from "lucide-react";

const tasks = [
  {
    name: "Auto Backup",
    time: "02:00 AM",
    icon: Database,
    color: "text-green-400",
  },
  {
    name: "Server Restart",
    time: "04:00 AM",
    icon: RefreshCcw,
    color: "text-yellow-400",
  },
  {
    name: "Security Scan",
    time: "06:00 AM",
    icon: ShieldCheck,
    color: "text-violet-400",
  },
  {
    name: "Log Cleanup",
    time: "12:00 PM",
    icon: CalendarClock,
    color: "text-blue-400",
  },
];

export default function ScheduledTasks() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-xl font-bold text-white">
        Scheduled Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => {
          const Icon = task.icon;

          return (
            <div
              key={task.name}
              className="flex items-center justify-between rounded-xl bg-black/20 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={task.color}
                  size={20}
                />

                <div>
                  <p className="font-semibold text-white">
                    {task.name}
                  </p>

                  <p className="text-sm text-gray-400">
                    Daily
                  </p>
                </div>
              </div>

              <span className="rounded-lg bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
                {task.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
