import { ScrollText } from "lucide-react";

const logs = [
  "[INFO] Checking package...",
  "[INFO] Validating files...",
  "[INFO] Extracting archive...",
  "[INFO] Installing theme...",
  "[INFO] Installation completed.",
];

export default function InstallerLogs() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6">
      <div className="mb-5 flex items-center gap-3">
        <ScrollText className="text-violet-400" />
        <h2 className="text-2xl font-bold text-white">
          Installer Logs
        </h2>
      </div>

      <div className="rounded-xl bg-black p-4 font-mono text-sm text-green-400">
        {logs.map((log) => (
          <div key={log} className="mb-2">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
