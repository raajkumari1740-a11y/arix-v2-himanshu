import { DatabaseBackup } from "lucide-react";

export default function BackupManager() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6">
      <div className="mb-5 flex items-center gap-3">
        <DatabaseBackup className="text-blue-400" />
        <h2 className="text-2xl font-bold text-white">
          Backup Manager
        </h2>
      </div>

      <p className="text-gray-400">
        Create a backup before installing or updating a theme.
      </p>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
        Create Backup
      </button>
    </div>
  );
}
