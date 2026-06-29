import { Settings } from "lucide-react";

export default function BuilderSettings() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6">
      <div className="mb-5 flex items-center gap-3">
        <Settings className="text-violet-400" />
        <h2 className="text-xl font-bold text-white">
          Builder Settings
        </h2>
      </div>

      <div className="space-y-4">

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Auto Save</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Grid Snap</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <span className="text-white">Dark Mode</span>
          <input type="checkbox" defaultChecked />
        </label>

      </div>
    </div>
  );
}
