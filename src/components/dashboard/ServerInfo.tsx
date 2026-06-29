import {
  Server,
  Globe,
  Cpu,
  HardDrive,
  MemoryStick,
} from "lucide-react";

export default function ServerInfo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Server className="text-violet-400" size={24} />
        <h2 className="text-xl font-bold text-white">
          Server Information
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Globe size={18} className="text-blue-400" />
            IP Address
          </div>
          <span className="font-semibold text-white">
            192.168.1.20
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Cpu size={18} className="text-violet-400" />
            CPU
          </div>
          <span className="font-semibold text-white">
            Ryzen 9 7950X
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <MemoryStick size={18} className="text-pink-400" />
            Memory
          </div>
          <span className="font-semibold text-white">
            8 GB DDR5
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">
          <div className="flex items-center gap-2 text-gray-300">
            <HardDrive size={18} className="text-green-400" />
            Storage
          </div>
          <span className="font-semibold text-white">
            256 GB NVMe
          </span>
        </div>

      </div>
    </div>
  );
}
