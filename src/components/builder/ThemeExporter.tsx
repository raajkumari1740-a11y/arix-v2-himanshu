import { Download } from "lucide-react";

export default function ThemeExporter() {
  return (
    <button className="flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-bold">

      <Download />

      Export Theme

    </button>
  );
}
