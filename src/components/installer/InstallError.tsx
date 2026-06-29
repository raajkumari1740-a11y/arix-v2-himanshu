import { AlertTriangle, RotateCcw } from "lucide-react";

export default function InstallError() {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-[#111827]/80 p-8 text-center">

      <AlertTriangle
        size={70}
        className="mx-auto mb-5 text-red-500"
      />

      <h1 className="text-3xl font-bold text-white">
        Installation Failed
      </h1>

      <p className="mt-3 text-gray-400">
        Something went wrong while installing the theme.
      </p>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
        <RotateCcw size={20} />
        Retry Installation
      </button>

    </div>
  );
}
