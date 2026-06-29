import { HardDrive } from "lucide-react";

export default function StorageUsage() {
  const used = 256;
  const total = 500;
  const percentage = (used / total) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <HardDrive className="text-violet-400" />

        <h2 className="text-xl font-bold text-white">
          Storage Usage
        </h2>
      </div>

      <div className="mb-3 flex justify-between text-gray-300">
        <span>{used} GB Used</span>
        <span>{total} GB Total</span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-4 text-center text-lg font-semibold text-violet-400">
        {percentage.toFixed(1)}% Used
      </p>

    </div>
  );
}
