import { Eye, Monitor, Smartphone } from "lucide-react";

export default function PreviewMode() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Eye className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Preview Mode
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 p-4 text-white hover:bg-violet-700">
          <Monitor size={20} />
          Desktop
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-black/20 p-4 text-white hover:bg-violet-600">
          <Smartphone size={20} />
          Mobile
        </button>

      </div>

    </div>
  );
}
