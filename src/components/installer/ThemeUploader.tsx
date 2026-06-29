import { UploadCloud } from "lucide-react";

export default function ThemeUploader() {
  return (
    <div className="rounded-2xl border border-dashed border-violet-500 bg-[#111827]/80 p-10 text-center">
      <UploadCloud className="mx-auto mb-4 text-violet-400" size={48} />

      <h2 className="text-2xl font-bold text-white">
        Upload Theme
      </h2>

      <p className="mt-2 text-gray-400">
        Drag & Drop or Select a ZIP File
      </p>

      <input
        type="file"
        accept=".zip"
        className="mt-6 block w-full text-white"
      />
    </div>
  );
}
