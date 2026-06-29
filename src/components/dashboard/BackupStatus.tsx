import {
  Database,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function BackupStatus() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Database className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Backup Status
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-400" size={18} />
            <span className="text-gray-300">Last Backup</span>
          </div>

          <span className="font-semibold text-green-400">
            Successful
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <Clock className="text-yellow-400" size={18} />
            <span className="text-gray-300">Next Backup</span>
          </div>

          <span className="font-semibold text-white">
            Today 02:00 AM
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-violet-400" size={18} />
            <span className="text-gray-300">Backup Health</span>
          </div>

          <span className="font-semibold text-violet-400">
            100%
          </span>
        </div>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-700">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
      </div>

      <p className="mt-3 text-center text-sm text-gray-400">
        Automatic backups are enabled.
      </p>
    </div>
  );
}
