import {
  Server,
  ExternalLink,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const servers = [
  {
    id: 1,
    name: "Survival Server",
    node: "Node-01",
    status: "Online",
    online: true,
    lastActive: "Now",
  },
  {
    id: 2,
    name: "SkyBlock Server",
    node: "Node-02",
    status: "Offline",
    online: false,
    lastActive: "12 min ago",
  },
  {
    id: 3,
    name: "Practice Server",
    node: "Node-01",
    status: "Online",
    online: true,
    lastActive: "Now",
  },
];

export default function RecentServers() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Server className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Recent Servers
        </h2>
      </div>

      <div className="space-y-4">
        {servers.map((server) => (
          <div
            key={server.id}
            className="flex items-center justify-between rounded-xl bg-black/20 p-4"
          >
            <div className="flex items-center gap-4">

              {server.online ? (
                <CheckCircle2
                  size={20}
                  className="text-green-400"
                />
              ) : (
                <XCircle
                  size={20}
                  className="text-red-400"
                />
              )}

              <div>
                <h3 className="font-semibold text-white">
                  {server.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {server.node} • {server.lastActive}
                </p>
              </div>

            </div>

            <button className="rounded-lg bg-violet-600 p-2 text-white transition hover:bg-violet-700">
              <ExternalLink size={18} />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
