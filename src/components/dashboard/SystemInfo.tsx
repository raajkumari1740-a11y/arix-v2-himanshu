export default function SystemInfo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-xl font-bold">
        System Information
      </h2>

      <div className="space-y-2 text-gray-300">
        <p>OS : Ubuntu 24.04</p>
        <p>Node : v22.x</p>
        <p>Panel : Pterodactyl</p>
        <p>Theme : Arix v2 Himanshu</p>
      </div>
    </div>
  );
}
