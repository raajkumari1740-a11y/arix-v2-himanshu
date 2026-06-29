import {
  Cpu,
  MemoryStick,
  HardDrive,
  Wifi,
} from "lucide-react";

export default function PerformanceCard() {
  const stats = [
    {
      title: "CPU",
      value: "42%",
      icon: Cpu,
      color: "text-violet-400",
    },
    {
      title: "RAM",
      value: "5.8 / 8 GB",
      icon: MemoryStick,
      color: "text-blue-400",
    },
    {
      title: "Disk",
      value: "128 / 256 GB",
      icon: HardDrive,
      color: "text-green-400",
    },
    {
      title: "Network",
      value: "24.8 MB/s",
      icon: Wifi,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-xl font-bold text-white">
        Performance Overview
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-black/20 p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <Icon
                  size={20}
                  className={item.color}
                />
                <span className="text-gray-300">
                  {item.title}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
