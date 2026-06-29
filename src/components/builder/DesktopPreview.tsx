import { Monitor } from "lucide-react";

export default function DesktopPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-5 flex items-center gap-3">
        <Monitor className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          Desktop Preview
        </h2>
      </div>

      <div className="h-[600px] rounded-2xl border border-gray-700 bg-[#1f2937] p-6">
        <div className="flex h-full items-center justify-center rounded-xl bg-black/20">
          <p className="text-gray-400 text-lg">
            Desktop Theme Preview
          </p>
        </div>
      </div>

    </div>
  );
}
