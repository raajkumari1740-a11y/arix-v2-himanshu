import {
  Wifi,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

export default function NetworkStats() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Wifi className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          Network Stats
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-3">
            <ArrowDown className="text-green-400" />
            <span className="text-gray-300">
              Download
            </span>
          </div>

          <span className="font-bold text-green-400">
            24.6 MB/s
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-3">
            <ArrowUp className="text-blue-400" />
            <span className="text-gray-300">
              Upload
            </span>
          </div>

          <span className="font-bold text-blue-400">
            8.2 MB/s
          </span>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <div className="mb-2 flex justify-between">
            <span className="text-gray-300">Latency</span>
            <span className="font-bold text-violet-400">
              18 ms
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-700">
            <div className="h-full w-1/4 rounded-full bg-violet-500"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
