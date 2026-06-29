import { Pipette } from "lucide-react";

const colors = [
  "#8B5CF6",
  "#6366F1",
  "#3B82F6",
  "#06B6D4",
  "#10B981",
  "#22C55E",
  "#EAB308",
  "#F97316",
  "#EF4444",
  "#EC4899",
  "#FFFFFF",
  "#000000",
];

export default function ColorPicker() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Pipette className="text-violet-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Color Picker
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {colors.map((color) => (
          <button
            key={color}
            title={color}
            style={{ backgroundColor: color }}
            className="h-14 w-14 rounded-xl border border-white/20 transition hover:scale-110"
          />
        ))}
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm text-gray-400">
          Custom Color
        </label>

        <input
          type="color"
          defaultValue="#8B5CF6"
          className="h-12 w-full cursor-pointer rounded-lg border border-white/10 bg-transparent"
        />
      </div>
    </div>
  );
}
