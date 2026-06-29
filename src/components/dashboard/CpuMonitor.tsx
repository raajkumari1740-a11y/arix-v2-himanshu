import { Cpu } from "lucide-react";

export default function CpuMonitor() {
  const usage = 42;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <Cpu className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          CPU Monitor
        </h2>
      </div>

      <div className="mb-4 flex justify-between text-gray-300">
        <span>CPU Usage</span>
        <span className="font-semibold text-violet-400">
          {usage}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${usage}%` }}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-gray-400">Cores</p>
          <h3 className="text-lg font-bold text-white">8</h3>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-gray-400">Threads</p>
          <h3 className="text-lg font-bold text-white">16</h3>
        </div>
      </div>
    </div>
  );
}
