import { Smartphone } from "lucide-react";

export default function MobilePreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-5 flex items-center gap-3">
        <Smartphone className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          Mobile Preview
        </h2>
      </div>

      <div className="mx-auto h-[600px] w-[280px] rounded-[32px] border-4 border-gray-700 bg-black p-4">

        <div className="flex h-full items-center justify-center rounded-2xl bg-[#1f2937]">
          <p className="text-center text-gray-400">
            Mobile Preview
          </p>
        </div>

      </div>

    </div>
  );
}
