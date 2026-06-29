import { Download, CheckCircle } from "lucide-react";

export default function InstallerWizard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-8">

      <h1 className="mb-6 text-3xl font-bold text-white">
        Arix Installer
      </h1>

      <div className="space-y-5">

        <div className="rounded-xl bg-black/20 p-5">
          <h2 className="font-semibold text-white">
            Step 1
          </h2>

          <p className="text-gray-400">
            Upload Theme Package (.zip)
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-5">
          <h2 className="font-semibold text-white">
            Step 2
          </h2>

          <p className="text-gray-400">
            Validate Package
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-5">
          <h2 className="font-semibold text-white">
            Step 3
          </h2>

          <p className="text-gray-400">
            Install Theme
          </p>
        </div>

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 py-4 font-bold text-white hover:bg-violet-700">
        <Download size={20} />
        Install Theme
      </button>

      <div className="mt-5 flex items-center gap-2 text-green-400">
        <CheckCircle size={18} />
        Blueprint Style Installer
      </div>

    </div>
  );
}
