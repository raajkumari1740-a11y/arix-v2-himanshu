import { MemoryStick } from "lucide-react";

export default function RamMonitor() {
  const used = 5.8;
  const total = 8;
  const usage = (used / total) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <MemoryStick className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          RAM Monitor
        </h2>
      </div>

      <div className="mb-4 flex justify-between text-gray-300">
        <span>Memory Usage</span>
        <span className="font-semibold text-violet-400">
          {used} GB / {total} GB
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${usage}%` }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Used</p>
          <p className="font-bold text-white">{used} GB</p>
        </div>

        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Free</p>
          <p className="font-bold text-green-400">
            {(total - used).toFixed(1)} GB
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Usage</p>
          <p className="font-bold text-violet-400">
            {usage.toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
}
