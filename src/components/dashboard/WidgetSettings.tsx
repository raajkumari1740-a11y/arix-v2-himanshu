import {
  Settings2,
  RotateCcw,
  Eye,
  EyeOff,
  Move,
  Palette,
} from "lucide-react";
import { useState } from "react";

export default function WidgetSettings() {
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState("Purple");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Settings2 className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Widget Settings
        </h2>
      </div>

      <div className="space-y-4">

        <button
          onClick={() => setVisible(!visible)}
          className="flex w-full items-center justify-between rounded-xl bg-black/20 p-4 transition hover:bg-black/30"
        >
          <span className="flex items-center gap-2 text-white">
            {visible ? (
              <Eye size={18} className="text-green-400" />
            ) : (
              <EyeOff size={18} className="text-red-400" />
            )}
            Widget Visibility
          </span>

          <span className="text-violet-300">
            {visible ? "Visible" : "Hidden"}
          </span>
        </button>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="flex items-center gap-2 text-white">
            <Palette size={18} className="text-pink-400" />
            Theme
          </span>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#1f2937] px-3 py-2 text-white outline-none"
          >
            <option>Purple</option>
            <option>Blue</option>
            <option>Pink</option>
            <option>Orange</option>
          </select>
        </div>

        <button className="flex w-full items-center justify-between rounded-xl bg-black/20 p-4 transition hover:bg-black/30">
          <span className="flex items-center gap-2 text-white">
            <Move size={18} className="text-cyan-400" />
            Rearrange Widgets
          </span>

          <span className="text-cyan-400">
            Drag & Drop
          </span>
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
          <RotateCcw size={18} />
          Reset Layout
        </button>

      </div>

    </div>
  );
}
