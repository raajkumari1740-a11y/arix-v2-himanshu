import { HardDrive } from "lucide-react";

export default function DiskMonitor() {
  const used = 128;
  const total = 256;
  const usage = (used / total) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <HardDrive className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Disk Monitor
        </h2>
      </div>

      <div className="mb-4 flex justify-between text-gray-300">
        <span>Storage</span>
        <span className="font-semibold text-violet-400">
          {used} GB / {total} GB
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${usage}%` }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Used</p>
          <p className="font-bold text-white">
            {used} GB
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Free</p>
          <p className="font-bold text-green-400">
            {total - used} GB
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-3">
          <p className="text-xs text-gray-400">Usage</p>
          <p className="font-bold text-violet-400">
            {usage.toFixed(0)}%
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/10 p-3">
        <p className="text-sm text-violet-300">
          SSD Health: <span className="font-semibold text-white">98%</span>
        </p>
      </div>
    </div>
  );
}
