import { CheckCircle2, Home } from "lucide-react";

export default function InstallSuccess() {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-[#111827]/80 p-8 text-center">

      <CheckCircle2
        size={70}
        className="mx-auto mb-5 text-green-500"
      />

      <h1 className="text-3xl font-bold text-white">
        Installation Successful
      </h1>

      <p className="mt-3 text-gray-400">
        Your Arix theme has been installed successfully.
      </p>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700">
        <Home size={20} />
        Open Dashboard
      </button>

    </div>
  );
}
