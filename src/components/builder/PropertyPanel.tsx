import {
  SlidersHorizontal,
  Palette,
  Layout,
  Type,
} from "lucide-react";

export default function PropertyPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <SlidersHorizontal
          className="text-violet-400"
          size={22}
        />

        <h2 className="text-xl font-bold text-white">
          Property Panel
        </h2>
      </div>

      <div className="space-y-4">

        <button className="flex w-full items-center gap-3 rounded-xl bg-black/20 p-4 text-white hover:bg-violet-600">
          <Palette size={20} />
          Colors
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl bg-black/20 p-4 text-white hover:bg-violet-600">
          <Layout size={20} />
          Layout
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl bg-black/20 p-4 text-white hover:bg-violet-600">
          <Type size={20} />
          Typography
        </button>

      </div>

    </div>
  );
}
