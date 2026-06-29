import { TrendingUp } from "lucide-react";

export default function UsageHistory() {
  const history = [
    { day: "Mon", value: 45 },
    { day: "Tue", value: 62 },
    { day: "Wed", value: 38 },
    { day: "Thu", value: 74 },
    { day: "Fri", value: 56 },
    { day: "Sat", value: 82 },
    { day: "Sun", value: 67 },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <TrendingUp className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Usage History
        </h2>
      </div>

      <div className="flex h-48 items-end justify-between gap-2">
        {history.map((item) => (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center"
          >
            <div
              className="w-full rounded-t-xl bg-gradient-to-t from-violet-600 to-fuchsia-500 transition-all duration-500 hover:brightness-125"
              style={{ height: `${item.value}%` }}
            />

            <span className="mt-2 text-xs text-gray-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between text-sm text-gray-400">
        <span>Weekly Average</span>
        <span className="font-semibold text-violet-400">
          61%
        </span>
      </div>
    </div>
  );
}
