import {
  HeartPulse,
  Thermometer,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function ServerHealth() {
  const health = 98;
  const temperature = "41°C";
  const power = "Normal";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <HeartPulse className="text-red-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Server Health
        </h2>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-violet-500">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              {health}%
            </h1>
            <p className="text-gray-400">
              Health
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <Thermometer className="text-orange-400" size={20} />
            <span className="text-gray-300">
              Temperature
            </span>
          </div>

          <span className="font-semibold text-white">
            {temperature}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-gray-300">
              Power
            </span>
          </div>

          <span className="font-semibold text-green-400">
            {power}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-green-400" size={20} />
            <span className="text-gray-300">
              Node Status
            </span>
          </div>

          <span className="font-semibold text-green-400">
            Healthy
          </span>
        </div>

      </div>

    </div>
  );
}
