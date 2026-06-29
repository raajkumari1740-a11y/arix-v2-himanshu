import { Users } from "lucide-react";

export default function OnlineUsers() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2">
        <Users size={20} />
        <h2 className="font-bold">Online Users</h2>
      </div>

      <h1 className="mt-6 text-5xl font-bold text-violet-400">
        248
      </h1>

      <p className="mt-2 text-gray-400">
        Active Right Now
      </p>
    </div>
  );
}
