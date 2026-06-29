import { useEffect, useState } from "react";
import { ServerService } from "../services/server";

export default function Servers() {
  const [servers, setServers] = useState<any[]>([]);

  useEffect(() => {
    ServerService.getAll().then(setServers);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Servers
      </h1>

      <div className="grid gap-4">
        {servers.map((server) => (
          <div
            key={server.id}
            className="bg-zinc-900 rounded-xl p-5"
          >
            <h2 className="font-bold">
              {server.name}
            </h2>

            <p>{server.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
