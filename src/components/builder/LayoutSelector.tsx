const layouts = [
  "Default",
  "Modern",
  "Compact",
  "Glass",
];

export default function LayoutSelector() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-5 text-xl font-bold">
        Layout
      </h2>

      <div className="grid gap-3">
        {layouts.map((layout) => (
          <button
            key={layout}
            className="rounded-xl bg-black/30 p-4 hover:bg-violet-600"
          >
            {layout}
          </button>
        ))}
      </div>
    </div>
  );
}
