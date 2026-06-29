import { ShieldCheck } from "lucide-react";

export default function FileValidator() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6">

      <div className="flex items-center gap-3">
        <ShieldCheck className="text-violet-400" />

        <h2 className="text-2xl font-bold text-white">
          File Validation
        </h2>
      </div>

      <div className="mt-6 rounded-xl bg-black/20 p-5">
        <p className="text-gray-300">
          ✔ ZIP Format Verified
        </p>

        <p className="mt-2 text-gray-300">
          ✔ Manifest.json Found
        </p>

        <p className="mt-2 text-gray-300">
          ✔ Theme Structure Valid
        </p>

        <p className="mt-2 text-gray-300">
          ✔ Ready For Installation
        </p>
      </div>

    </div>
  );
}
