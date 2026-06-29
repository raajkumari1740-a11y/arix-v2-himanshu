import { Activity } from "lucide-react";

const activities = [
  "Server Started",
  "Backup Completed",
  "Theme Saved",
  "User Login",
  "Plugin Updated",
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-2">
        <Activity size={20} />
        <h2 className="font-bold">Activity Feed</h2>
      </div>

      <div className="space-y-3">
        {activities.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-black/20 p-3"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
