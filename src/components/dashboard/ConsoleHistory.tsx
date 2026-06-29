import {
  History,
  Terminal,
  Clock3,
} from "lucide-react";

const commands = [
  {
    command: "say Server restarting in 5 minutes",
    time: "10:42 AM",
  },
  {
    command: "restart",
    time: "09:15 AM",
  },
  {
    command: "backup create",
    time: "Yesterday",
  },
  {
    command: "stop",
    time: "2 Days Ago",
  },
];

export default function ConsoleHistory() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <History className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Console History
        </h2>
      </div>

      <div className="space-y-4">
        {commands.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-black/20 p-4"
          >
            <div className="flex items-center gap-2">
              <Terminal
                size={18}
                className="text-green-400"
              />

              <code className="text-sm text-green-300 break-all">
                {item.command}
              </code>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
              <Clock3 size={14} />
              {item.time}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
