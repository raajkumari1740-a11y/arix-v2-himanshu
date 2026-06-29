import { RotateCcw } from "lucide-react";

export default function RollbackManager() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <RotateCcw className="text-orange-400" />
        <h2 className="text-2xl font-bold text-white">
          Rollback Manager
        </h2>
      </div>

      <p className="text-gray-400">
        Restore the previous version if installation fails.
      </p>

      <button className="mt-6 w-full rounded-xl bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700">
        Rollback
      </button>
    </div>
  );
}
