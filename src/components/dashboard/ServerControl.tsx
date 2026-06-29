import {
  Play,
  Square,
  RotateCw,
  RefreshCw,
} from "lucide-react";

export default function ServerControl() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-xl font-bold text-white">
        Server Control
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          <Play size={20} />
          Start
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          <Square size={20} />
          Stop
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-4 font-semibold text-white transition hover:bg-yellow-600"
        >
          <RotateCw size={20} />
          Restart
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-4 font-semibold text-white transition hover:bg-violet-700"
        >
          <RefreshCw size={20} />
          Reload
        </button>

      </div>

      <div className="mt-6 rounded-xl bg-black/20 p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            Server Status
          </span>

          <span className="font-semibold text-green-400">
            ● Online
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-700">
          <div className="h-full w-4/5 rounded-full bg-green-500" />
        </div>
      </div>

    </div>
  );
}
