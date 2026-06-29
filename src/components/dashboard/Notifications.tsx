import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

const notifications = [
  {
    title: "Server Started Successfully",
    time: "2 min ago",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "High CPU Usage Detected",
    time: "8 min ago",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  {
    title: "Backup Completed",
    time: "20 min ago",
    icon: Info,
    color: "text-blue-400",
  },
];

export default function Notifications() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Bell className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Notifications
        </h2>
      </div>

      <div className="space-y-4">
        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-black/20 p-4"
            >
              <Icon
                className={item.color}
                size={22}
              />

              <div className="flex-1">
                <p className="font-medium text-white">
                  {item.title}
                </p>

                <span className="text-sm text-gray-400">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
