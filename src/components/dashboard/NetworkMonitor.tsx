import { Wifi, ArrowDown, ArrowUp, Activity } from "lucide-react";

export default function NetworkMonitor() {
  const download = "24.8 MB/s";
  const upload = "8.6 MB/s";
  const ping = "18 ms";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <Wifi className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Network Monitor
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <ArrowDown className="text-green-400" size={18} />
            Download
          </div>
          <span className="font-semibold text-green-400">
            {download}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <ArrowUp className="text-blue-400" size={18} />
            Upload
          </div>
          <span className="font-semibold text-blue-400">
            {upload}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Activity className="text-violet-400" size={18} />
            Ping
          </div>
          <span className="font-semibold text-violet-400">
            {ping}
          </span>
        </div>
      </div>
    </div>
  );
}
