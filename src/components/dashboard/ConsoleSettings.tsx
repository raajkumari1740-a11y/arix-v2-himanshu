import {
  Settings,
  Trash2,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function ConsoleSettings() {
  const [autoScroll, setAutoScroll] = useState(true);
  const [timestamps, setTimestamps] = useState(true);
  const [wordWrap, setWordWrap] = useState(false);
  const [ansiColors, setAnsiColors] = useState(true);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Settings className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Console Settings
        </h2>
      </div>

      <div className="space-y-4">

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Auto Scroll</span>

          <input
            type="checkbox"
            checked={autoScroll}
            onChange={() => setAutoScroll(!autoScroll)}
          />
        </label>

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Show Timestamps</span>

          <input
            type="checkbox"
            checked={timestamps}
            onChange={() => setTimestamps(!timestamps)}
          />
        </label>

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Word Wrap</span>

          <input
            type="checkbox"
            checked={wordWrap}
            onChange={() => setWordWrap(!wordWrap)}
          />
        </label>

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">ANSI Colors</span>

          <input
            type="checkbox"
            checked={ansiColors}
            onChange={() => setAnsiColors(!ansiColors)}
          />
        </label>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
          <Trash2 size={18} />
          Clear
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700">
          <Download size={18} />
          Download
        </button>

      </div>

    </div>
  );
}
