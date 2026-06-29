import { Bell } from "lucide-react";

export default function NotificationCenter() {
  return (
    <div className="rounded-2xl bg-white/5 p-6 border border-white/10">

      <div className="flex items-center gap-3">

        <Bell />

        <h2 className="font-bold">
          Notifications
        </h2>

      </div>

      <div className="mt-5 space-y-3">

        <div className="rounded-xl bg-black/20 p-3">
          Theme Updated
        </div>

        <div className="rounded-xl bg-black/20 p-3">
          Server Restarted
        </div>

      </div>

    </div>
  );
}
