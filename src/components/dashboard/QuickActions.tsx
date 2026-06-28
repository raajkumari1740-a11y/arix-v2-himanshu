import {
  Play,
  RotateCcw,
  Square,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-3">

      <button className="rounded-xl bg-green-600 p-4">
        <Play className="mx-auto" />
      </button>

      <button className="rounded-xl bg-yellow-600 p-4">
        <RotateCcw className="mx-auto" />
      </button>

      <button className="rounded-xl bg-red-600 p-4">
        <Square className="mx-auto" />
      </button>

    </div>
  );
}
