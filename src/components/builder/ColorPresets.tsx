const presets = [
  "#7C3AED",
  "#3B82F6",
  "#EC4899",
  "#F97316",
];

export default function ColorPresets() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-5 text-xl font-bold">
        Color Presets
      </h2>

      <div className="flex gap-4">
        {presets.map((color) => (
          <button
            key={color}
            style={{ background: color }}
            className="h-14 w-14 rounded-full border-2 border-white"
          />
        ))}
      </div>
    </div>
  );
}
