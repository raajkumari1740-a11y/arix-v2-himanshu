import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const logs = [
  "[INFO] Starting Arix v2...",
  "[INFO] Loading Dashboard...",
  "[SUCCESS] Connected to Server",
  "[SUCCESS] Theme Loaded",
  "[INFO] Waiting for commands..."
];

export default function LiveConsole() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= logs.length) return;

      setItems((prev) => [...prev, logs[i]]);
      i++;
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#09090B] p-5">
      <div className="mb-4 flex items-center gap-2">
        <Terminal size={18} />
        <h2 className="font-semibold">Live Console</h2>
      </div>

      <div className="h-64 overflow-y-auto rounded-xl bg-black p-4 font-mono text-sm text-green-400">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
