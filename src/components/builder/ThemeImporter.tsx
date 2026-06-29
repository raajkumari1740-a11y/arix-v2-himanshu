import { Upload } from "lucide-react";

export default function ThemeImporter() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Upload className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Theme Importer
        </h2>
      </div>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-violet-500/40 p-8 text-center hover:border-violet-400">
        <Upload size={42} className="mb-3 text-violet-400" />

        <p className="font-semibold text-white">
          Upload Theme File
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Supports JSON Theme Files
        </p>

        <input
          type="file"
          accept=".json"
          className="hidden"
        />
      </label>
    </div>
  );
}
