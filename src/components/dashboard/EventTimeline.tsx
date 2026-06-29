import {
  Clock3,
  Server,
  RefreshCw,
  Database,
  ShieldCheck,
} from "lucide-react";

const events = [
  {
    title: "Server Started",
    time: "09:30 AM",
    icon: Server,
    color: "text-green-400",
  },
  {
    title: "Automatic Backup",
    time: "10:00 AM",
    icon: Database,
    color: "text-blue-400",
  },
  {
    title: "Server Restart",
    time: "11:15 AM",
    icon: RefreshCw,
    color: "text-yellow-400",
  },
  {
    title: "Security Check",
    time: "12:00 PM",
    icon: ShieldCheck,
    color: "text-violet-400",
  },
];

export default function EventTimeline() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Clock3 className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          Event Timeline
        </h2>
      </div>

      <div className="space-y-5">
        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="rounded-full bg-violet-500/20 p-3">
                <Icon
                  size={18}
                  className={event.color}
                />
              </div>

              <div className="flex-1 rounded-xl bg-black/20 p-4">
                <h3 className="font-semibold text-white">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {event.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
