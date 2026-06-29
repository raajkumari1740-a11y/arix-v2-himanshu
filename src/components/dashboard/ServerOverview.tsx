import {
  Server,
  Cpu,
  MemoryStick,
  HardDrive,
  Wifi,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function ServerOverview() {
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
    <div className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Server className="text-violet-400" size={28} />
          <div>
            <h2 className="text-2xl font-bold text-white">
              Arix Server Overview
            </h2>

            <p className="text-sm text-gray-400">
              Real-time monitoring dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">
          <CheckCircle2
            className="text-green-400"
            size={18}
          />
          <span className="font-semibold text-green-400">
            Online
          </span>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-black/20 p-5"
            >
              <Icon
                className={item.color}
                size={26}
              />

              <p className="mt-3 text-sm text-gray-400">
                {item.title}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {item.value}
              </h3>
            </div>
          );
        })}

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-black/20 p-5">
          <div className="flex items-center gap-2">
            <Clock3
              className="text-yellow-400"
              size={20}
            />
            <span className="text-gray-400">
              Uptime
            </span>
          </div>

          <h3 className="mt-2 text-xl font-bold text-white">
            12 Days 8 Hours
          </h3>
        </div>

        <div className="rounded-2xl bg-black/20 p-5">
          <div className="flex items-center gap-2">
            <Users
              className="text-cyan-400"
              size={20}
            />
            <span className="text-gray-400">
              Online Users
            </span>
          </div>

          <h3 className="mt-2 text-xl font-bold text-white">
            248
          </h3>
        </div>

      </div>

    </div>
  );
}
