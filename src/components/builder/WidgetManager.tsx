const widgets = [
  "CPU",
  "RAM",
  "Disk",
  "Network",
  "Clock",
  "Announcement",
  "Console",
];

export default function WidgetManager() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-5 text-xl font-bold">
        Widget Manager
      </h2>

      <div className="space-y-3">

        {widgets.map((widget) => (
          <label
            key={widget}
            className="flex items-center justify-between rounded-xl bg-black/20 p-3"
          >
            {widget}

            <input type="checkbox" defaultChecked />
          </label>
        ))}

      </div>

    </div>
  );
}
