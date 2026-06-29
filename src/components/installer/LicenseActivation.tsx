import { KeyRound } from "lucide-react";
import { useState } from "react";

export default function LicenseActivation() {
  const [license, setLicense] = useState("");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <KeyRound className="text-violet-400" />
        <h2 className="text-2xl font-bold text-white">
          License Activation
        </h2>
      </div>

      <input
        value={license}
        onChange={(e) => setLicense(e.target.value)}
        placeholder="Enter License Key"
        className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
      />

      <button className="mt-5 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700">
        Activate License
      </button>
    </div>
  );
}
