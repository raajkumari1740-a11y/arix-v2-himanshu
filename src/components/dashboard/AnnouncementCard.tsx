import { Megaphone } from "lucide-react";

export default function AnnouncementCard() {
  return (
    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">
      <div className="flex items-center gap-3">
        <Megaphone />
        <h2 className="font-bold text-xl">
          Announcement
        </h2>
      </div>

      <p className="mt-4 text-gray-300">
        Welcome to Arix v2 Himanshu.
        New Theme Builder update coming soon 🚀
      </p>
    </div>
  );
}
