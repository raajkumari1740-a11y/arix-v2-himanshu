import { Terminal, Send } from "lucide-react";
import { useState } from "react";

export default function TerminalInput() {
  const [command, setCommand] = useState("");

  const handleSend = () => {
    if (!command.trim()) return;

    console.log("Command:", command);

    // TODO:
    // Send command to Pterodactyl WebSocket/API

    setCommand("");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <Terminal className="text-violet-400" size={22} />
        <h2 className="text-lg font-bold text-white">
          Terminal Input
        </h2>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type a server command..."
          className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-violet-500"
        />

        <button
          onClick={handleSend}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          <Send size={18} />
          Send
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-400">
        Example: <span className="text-violet-300">say Hello</span>,
        <span className="text-violet-300"> restart</span>,
        <span className="text-violet-300"> stop</span>
      </p>
    </div>
  );
}
