const logs = [
  "Connecting...",
  "Loading Theme...",
  "Panel Ready.",
  "Sync Complete.",
  "Monitoring Enabled."
];

export default function ServerLogs() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-5 font-mono text-green-400">
      {logs.map((log, index) => (
        <p key={index}>
          {">"} {log}
        </p>
      ))}
    </div>
  );
}
