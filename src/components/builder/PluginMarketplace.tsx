const plugins = [
  "WHMCS",
  "Discord",
  "Billing",
  "Analytics",
];

export default function PluginMarketplace() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-xl font-bold">
        Plugin Marketplace
      </h2>

      <div className="mt-5 grid gap-3">

        {plugins.map((plugin) => (
          <button
            key={plugin}
            className="rounded-xl bg-violet-600 p-3"
          >
            Install {plugin}
          </button>
        ))}

      </div>

    </div>
  );
}
