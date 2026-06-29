import { Palette } from "lucide-react";

export default function ThemeEditor() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Palette />
        <h2 className="text-xl font-bold">
          Theme Editor
        </h2>
      </div>

      <div className="space-y-4">

        <label className="block">
          Primary Color

          <input
            type="color"
            className="mt-2 h-12 w-full rounded-xl"
            defaultValue="#7c3aed"
          />
        </label>

        <label className="block">
          Secondary Color

          <input
            type="color"
            className="mt-2 h-12 w-full rounded-xl"
            defaultValue="#d946ef"
          />
        </label>

      </div>
    </div>
  );
}
